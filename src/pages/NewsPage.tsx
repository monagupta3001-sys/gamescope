import React, { useState, useMemo } from 'react';
import {
  Newspaper,
  Search,
  Filter,
  ArrowUpDown,
  Flame,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { NEWS_ARTICLES } from '../data/newsData';
import { NewsCard } from '../components/cards/NewsCard';
import { NewsCategory } from '../types';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

interface NewsPageProps {
  onSelectArticle: (id: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('All');
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories: NewsCategory[] = [
    'All',
    'Console',
    'PC Gaming',
    'Esports',
    'Industry',
    'Updates',
    'Tech'
  ];

  const heroArticle = NEWS_ARTICLES.find((a) => a.isHero) || NEWS_ARTICLES[0];

  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat =
        selectedCategory === 'All' || article.category === selectedCategory;

      return matchesSearch && matchesCat;
    }).sort((a, b) => {
      if (sortBy === 'popular') {
        return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
      }
      return 0; // default order is chronologically sorted
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const pagedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <div className="space-y-10 animate-enter">
      {/* Featured Header Marquee */}
      {!searchQuery && selectedCategory === 'All' && (
        <div
          onClick={() => onSelectArticle(heroArticle.id)}
          className="group relative rounded-3xl overflow-hidden bg-[#12141d] border border-white/10 shadow-2xl cursor-pointer"
        >
          <div className="aspect-[21/9] min-h-[340px] sm:min-h-[420px] w-full relative">
            <ImageWithFallback
              src={heroArticle.heroImage}
              alt={heroArticle.title}
              fallbackTitle={heroArticle.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-[#0a0b10]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b10]/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 space-y-3 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg">
                  Top Headline
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {heroArticle.category} · {heroArticle.publishedAt}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight group-hover:text-indigo-300 transition-colors">
                {heroArticle.title}
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                {heroArticle.subtitle || heroArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">{heroArticle.author.name}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-400">{heroArticle.readTime}</span>
                </div>
                <span className="font-bold text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Full Story →
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="space-y-4 bg-[#12141d]/90 rounded-2xl border border-white/5 p-4 sm:p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter stories by keywords, studio, or topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 text-xs">
              <button
                onClick={() => setSortBy('latest')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  sortBy === 'latest'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Latest First
              </button>
              <button
                onClick={() => setSortBy('popular')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  sortBy === 'popular'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Most Trending
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      {filteredArticles.length === 0 ? (
        <div className="rounded-2xl bg-[#12141d]/80 border border-white/5 p-12 text-center space-y-3">
          <Newspaper className="w-10 h-10 mx-auto text-slate-600" />
          <h3 className="text-base font-bold text-white">No stories match your criteria</h3>
          <p className="text-xs text-slate-400">
            Try adjusting your search terms or selecting "All" categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagedArticles.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                onSelect={onSelectArticle}
              />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center pt-4">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white hover:border-indigo-500/40 transition-all inline-flex items-center gap-2"
              >
                <span>Load More Stories</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
