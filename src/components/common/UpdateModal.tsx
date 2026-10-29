import React, { useEffect } from 'react';
import { X, Sparkles, CheckCircle2, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { GameUpdate } from '../../types';

interface UpdateModalProps {
  update: GameUpdate | null;
  onClose: () => void;
}

export const UpdateModal: React.FC<UpdateModalProps> = ({ update, onClose }) => {
  useEffect(() => {
    if (update) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [update]);

  if (!update) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#12141c] border border-white/10 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            {update.gameTitle}
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            {update.version}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
          {update.title}
        </h2>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3 pb-5 border-b border-white/10">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {update.date}
          </span>
          <span className="flex items-center gap-1.5 text-purple-400">
            <Tag className="w-3.5 h-3.5" />
            {update.category}
          </span>
          {update.isVerified && (
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Studio Patch
            </span>
          )}
        </div>

        <p className="text-sm text-slate-300 my-5 leading-relaxed">
          {update.shortDescription}
        </p>

        {/* Key Highlights */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Key Highlights</span>
          </div>
          <div className="grid grid-cols-1 gap-2.5">
            {update.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Changelog */}
        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
            Full Detailed Patch Notes
          </h4>
          <div className="space-y-2.5 p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-slate-300 leading-relaxed">
            {update.fullNotes.map((note, idx) => (
              <p key={idx} className="flex items-start gap-2">
                <span className="text-indigo-400 select-none">•</span>
                <span>{note}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-slate-500">
          <span>Source: Official Developer Patch Notes</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
