import React from 'react';
import { Bookmark, Star, Monitor, Smartphone, Tv } from 'lucide-react';
import { Game } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface GameCardProps {
  game: Game;
  onSelect: (id: string) => void;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
  variant?: 'grid' | 'list';
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  onSelect,
  isFavorited,
  onToggleFavorite,
  variant = 'grid'
}) => {
  const hasConsole = game.platforms.some((p) => p.includes('PlayStation') || p.includes('Xbox') || p.includes('Switch'));
  const hasPC = game.platforms.includes('PC');
  const hasMobile = game.platforms.some((p) => p.includes('iOS') || p.includes('Android'));

  if (variant === 'list') {
    return (
      <div className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#12141d]/80 hover:bg-[#181b26] border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
        <div className="flex items-center gap-4 min-w-0 flex-1 cursor-pointer" onClick={() => onSelect(game.id)}>
          <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10 group-hover:scale-105 transition-transform duration-300">
            <ImageWithFallback
              src={game.coverUrl}
              alt={game.title}
              fallbackTitle={game.title}
              className="w-full h-full"
            />
            <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-xs text-[10px] font-bold text-indigo-400 font-mono-numeric">
              #{game.rank}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-indigo-400">{game.genre}</span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400">{game.releaseYear}</span>
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors truncate">
              {game.title}
            </h3>
            <p className="text-xs text-slate-400 line-clamp-1 mt-1">
              {game.shortDescription}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            {hasPC && <span title="PC"><Monitor className="w-3.5 h-3.5" /></span>}
            {hasConsole && <span title="Console"><Tv className="w-3.5 h-3.5" /></span>}
            {hasMobile && <span title="Mobile"><Smartphone className="w-3.5 h-3.5" /></span>}
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span className="font-mono-numeric">{game.rating.toFixed(1)}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(game.id);
            }}
            className={`p-2 rounded-xl transition-colors ${
              isFavorited
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
            title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Bookmark className={`w-4 h-4 ${isFavorited ? 'fill-indigo-400' : ''}`} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onSelect(game.id)}
      className="group relative flex flex-col rounded-2xl bg-[#12141d]/90 hover:bg-[#171a26] border border-white/5 hover:border-indigo-500/40 overflow-hidden transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-950/20 hover:-translate-y-1"
    >
      {/* Artwork Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        <ImageWithFallback
          src={game.bannerUrl || game.coverUrl}
          alt={game.title}
          fallbackTitle={game.title}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-transparent to-transparent opacity-90" />

        {/* Rank & Rating Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-xs font-bold text-white border border-white/10 font-mono-numeric">
            #{game.rank}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-semibold text-indigo-300 border border-indigo-500/20">
            {game.genre}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(game.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-all ${
            isFavorited
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40'
              : 'bg-black/60 text-slate-300 hover:text-white hover:bg-black/80 border border-white/10'
          }`}
          title={isFavorited ? 'Remove bookmark' : 'Bookmark game'}
        >
          <Bookmark className={`w-4 h-4 ${isFavorited ? 'fill-white' : ''}`} />
        </button>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 pt-3">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <div className="flex items-center gap-1.5">
            {hasPC && <span title="PC Supported"><Monitor className="w-3.5 h-3.5" /></span>}
            {hasConsole && <span title="Consoles Supported"><Tv className="w-3.5 h-3.5" /></span>}
            {hasMobile && <span title="Mobile Supported"><Smartphone className="w-3.5 h-3.5" /></span>}
          </div>
          <div className="flex items-center gap-1 text-amber-300 font-semibold font-mono-numeric">
            <Star className="w-3.5 h-3.5 fill-amber-300" />
            <span>{game.rating.toFixed(1)}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors font-display tracking-tight line-clamp-1 mb-1">
          {game.title}
        </h3>

        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4 flex-1">
          {game.shortDescription}
        </p>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
          <span>Released {game.releaseYear}</span>
          <span className="font-medium text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Explore Details →
          </span>
        </div>
      </div>
    </div>
  );
};
