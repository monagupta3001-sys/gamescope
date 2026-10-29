import React from 'react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  CheckCircle2,
  ChevronRight,
  Gamepad2,
  Bookmark
} from 'lucide-react';
import { NEWS_ARTICLES } from '../data/newsData';
import { GAMES_DATA } from '../data/gamesData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { NewsCard } from '../components/cards/NewsCard';

interface ArticleDetailPageProps {
  articleId: string;
  onBack: () => void;
  onSelectArticle: (id: string) => void;
  onSelectGame: (id: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  articleId,
  onBack,
  onSelectArticle,
  onSelectGame
}) => {
  const article =
    NEWS_ARTICLES.find((a) => a.id === articleId) || NEWS_ARTICLES[0];

  const relatedArticles = NEWS_ARTICLES.filter((a) =>
    article.relatedArticleIds?.includes(a.id)
  );

  const relatedGame = article.relatedGameId
    ? GAMES_DATA.find((g) => g.id === article.relatedGameId)
    : null;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-enter">
      {/* Navigation & Breadcrumb */}
      <div className="flex items-center justify-between pb-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to News</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Editorial</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-indigo-400 font-medium">{article.category}</span>
        </div>
      </div>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-indigo-600/90 text-white text-xs font-bold uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            {article.subtitle}
          </p>
        )}

        {/* Author Bio Row */}
        <div className="flex items-center justify-between pt-4 border-t border-b border-white/10 py-3 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-800 border border-white/10">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{article.author.name}</p>
              <p className="text-[11px] text-slate-400">{article.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedAt}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Visual Image */}
      <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 shadow-2xl relative">
        <ImageWithFallback
          src={article.heroImage}
          alt={article.title}
          fallbackTitle={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Key Takeaways Callout Box */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <div className="p-5 sm:p-6 rounded-2xl bg-[#141724] border border-indigo-500/20 shadow-xl space-y-3">
          <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Key Takeaways & Summary</span>
          </h3>
          <ul className="space-y-2">
            {article.keyTakeaways.map((point, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 leading-relaxed"
              >
                <span className="text-indigo-400 mt-1 font-bold">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Body Prose */}
      <article className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
        {article.content.map((paragraph, idx) => (
          <p key={idx} className={idx === 0 ? 'text-base sm:text-lg text-slate-200 leading-relaxed' : ''}>
            {paragraph}
          </p>
        ))}
      </article>

      {/* Associated Game Card Callout */}
      {relatedGame && (
        <div className="p-5 rounded-2xl bg-[#12141d] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-800 shrink-0">
              <img
                src={relatedGame.coverUrl}
                alt={relatedGame.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold text-indigo-400">
                Featured Game In This Story
              </span>
              <h4 className="text-base font-bold text-white">{relatedGame.title}</h4>
              <p className="text-xs text-slate-400">{relatedGame.genre} · Score: {relatedGame.rating}/10</p>
            </div>
          </div>

          <button
            onClick={() => onSelectGame(relatedGame.id)}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition-colors"
          >
            Explore Game Hub →
          </button>
        </div>
      )}

      {/* Tags Strip */}
      <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400 mr-2">Tags:</span>
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Related Stories */}
      {relatedArticles.length > 0 && (
        <div className="pt-10 space-y-6 border-t border-white/10">
          <h3 className="text-xl font-bold text-white font-display">Related Stories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <NewsCard
                key={rel.id}
                article={rel}
                onSelect={onSelectArticle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
