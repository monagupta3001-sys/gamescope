import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Gamepad2, Newspaper, BookOpen, ArrowRight } from 'lucide-react';
import { GAMES_DATA } from '../../data/gamesData';
import { NEWS_ARTICLES } from '../../data/newsData';
import { GAMING_GUIDES } from '../../data/rankingsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGame: (id: string) => void;
  onSelectArticle: (id: string) => void;
  onSelectGuide: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectGame,
  onSelectArticle,
  onSelectGuide
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const matchingGames = GAMES_DATA.filter(
    (g) =>
      g.title.toLowerCase().includes(normalizedQuery) ||
      g.genre.toLowerCase().includes(normalizedQuery) ||
      g.shortDescription.toLowerCase().includes(normalizedQuery)
  ).slice(0, 4);

  const matchingArticles = NEWS_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(normalizedQuery) ||
      a.category.toLowerCase().includes(normalizedQuery) ||
      a.excerpt.toLowerCase().includes(normalizedQuery)
  ).slice(0, 4);

  const matchingGuides = GAMING_GUIDES.filter(
    (guide) =>
      guide.title.toLowerCase().includes(normalizedQuery) ||
      guide.gameTitle.toLowerCase().includes(normalizedQuery) ||
      guide.category.toLowerCase().includes(normalizedQuery)
  ).slice(0, 3);

  const hasResults =
    matchingGames.length > 0 || matchingArticles.length > 0 || matchingGuides.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#12141c] border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-indigo-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games, news stories, guides, and patches..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-white mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs rounded-md bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[70vh] overflow-y-auto p-4 space-y-6">
          {!query.trim() && (
            <div className="py-8 text-center">
              <Gamepad2 className="w-10 h-10 mx-auto text-indigo-400/50 mb-3" />
              <p className="text-sm font-medium text-slate-300">Quick Gaming Search</p>
              <p className="text-xs text-slate-500 mt-1">
                Type a title like "Valorant", "GTA", "Minecraft", or topics like "Esports", "Tips"
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                {['Minecraft', 'Valorant', 'GTA V', 'Counter-Strike 2', 'Fortnite'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 hover:bg-indigo-500/20 text-slate-300 hover:text-indigo-300 border border-white/5 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && !hasResults && (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-slate-300">No results found for "{query}"</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for a general keyword like game title or news topic.
              </p>
            </div>
          )}

          {/* Matching Games */}
          {matchingGames.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Games</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchingGames.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => {
                      onSelectGame(game.id);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 text-left transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-800 shrink-0">
                      <img
                        src={game.coverUrl}
                        alt={game.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-medium text-white group-hover:text-indigo-400 truncate">
                        {game.title}
                      </h4>
                      <p className="text-xs text-slate-400 truncate">
                        {game.genre} · {game.releaseYear}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matching Articles */}
          {matchingArticles.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-purple-400 tracking-wider uppercase">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Editorial & News</span>
              </div>
              <div className="space-y-2">
                {matchingArticles.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => {
                      onSelectArticle(article.id);
                      onClose();
                    }}
                    className="w-full flex items-start justify-between gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 text-left transition-all group"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-medium text-purple-400">
                        {article.category}
                      </span>
                      <h4 className="text-sm font-medium text-white group-hover:text-purple-300 line-clamp-1">
                        {article.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {article.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matching Guides */}
          {matchingGuides.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Guides & Strategy</span>
              </div>
              <div className="space-y-2">
                {matchingGuides.map((guide) => (
                  <button
                    key={guide.id}
                    onClick={() => {
                      onSelectGuide(guide.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 text-left transition-all group"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-medium text-emerald-400">
                        {guide.gameTitle} · {guide.difficulty}
                      </span>
                      <h4 className="text-sm font-medium text-white group-hover:text-emerald-300 truncate">
                        {guide.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
