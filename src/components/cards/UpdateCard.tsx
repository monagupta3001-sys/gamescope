import React from 'react';
import { ArrowRight, Calendar, Sparkles, Check } from 'lucide-react';
import { GameUpdate } from '../../types';

interface UpdateCardProps {
  update: GameUpdate;
  onOpenDetails: (update: GameUpdate) => void;
  onSelectGame?: (gameId: string) => void;
}

export const UpdateCard: React.FC<UpdateCardProps> = ({
  update,
  onOpenDetails,
  onSelectGame
}) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'New Content':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Balance Changes':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'Gameplay':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      case 'Seasonal':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default:
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
    }
  };

  return (
    <div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-[#12141d]/90 hover:bg-[#181b26] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-lg">
      <div>
        {/* Header line */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              onClick={() => onSelectGame?.(update.gameId)}
              className="text-xs font-bold text-white hover:text-indigo-400 cursor-pointer tracking-wide"
            >
              {update.gameTitle}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
              {update.version}
            </span>
          </div>

          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getCategoryColor(
              update.category
            )}`}
          >
            {update.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white font-display line-clamp-1 group-hover:text-indigo-400 transition-colors mb-2">
          {update.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {update.shortDescription}
        </p>

        {/* Highlights bullets preview */}
        <div className="space-y-1.5 mb-5">
          {update.highlights.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <Calendar className="w-3 h-3" />
          <span>{update.date}</span>
        </div>

        <button
          onClick={() => onOpenDetails(update)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <span>Read Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
