import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { NewsArticle } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface NewsCardProps {
  article: NewsArticle;
  onSelect: (id: string) => void;
  featured?: boolean;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  article,
  onSelect,
  featured = false
}) => {
  return (
    <div
      onClick={() => onSelect(article.id)}
      className="group relative flex flex-col rounded-2xl bg-[#12141d]/80 hover:bg-[#181b26] border border-white/5 hover:border-indigo-500/30 overflow-hidden transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-950/20"
    >
      {/* Thumbnail */}
      <div className={`relative overflow-hidden bg-slate-900 ${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
        <ImageWithFallback
          src={article.heroImage}
          alt={article.title}
          fallbackTitle={article.title}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-transparent to-transparent opacity-80" />

        {/* Category Tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-semibold text-indigo-300 border border-indigo-500/20">
            {article.category}
          </span>
        </div>

        {/* Hover Arrow Button in Corner (Design matching user reference) */}
        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-200">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 pt-3">
        {/* Meta row */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <span>{article.publishedAt}</span>
          <span>·</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors font-display line-clamp-2 leading-snug mb-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4 flex-1">
          {article.excerpt}
        </p>

        {/* Author Footer */}
        <div className="pt-3 border-t border-white/5 flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-800 shrink-0">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <span className="text-xs text-slate-300 font-medium truncate">
            {article.author.name}
          </span>
        </div>
      </div>
    </div>
  );
};
