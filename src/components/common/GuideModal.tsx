import React, { useEffect } from 'react';
import { X, BookOpen, Clock, Lightbulb, ArrowLeft } from 'lucide-react';
import { GuideItem } from '../../types';

interface GuideModalProps {
  guide: GuideItem | null;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ guide, onClose }) => {
  useEffect(() => {
    if (guide) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [guide]);

  if (!guide) return null;

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

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
          <BookOpen className="w-4 h-4" />
          <span>{guide.gameTitle}</span>
          <span>·</span>
          <span>{guide.category}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white font-display leading-tight">
          {guide.title}
        </h2>

        <div className="flex items-center gap-4 text-xs text-slate-400 mt-3 pb-5 border-b border-white/10">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {guide.readTime}
          </span>
          <span>·</span>
          <span className="text-emerald-400 font-medium">Difficulty: {guide.difficulty}</span>
        </div>

        <p className="text-sm text-slate-300 my-5 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
          {guide.excerpt}
        </p>

        {/* Steps */}
        <div className="space-y-6">
          {guide.steps.map((step, idx) => (
            <div key={idx} className="relative pl-8 border-l border-emerald-500/30">
              <span className="absolute -left-3.5 top-0 flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold font-mono-numeric">
                0{idx + 1}
              </span>
              <h4 className="text-base font-semibold text-white mb-2">
                {step.heading}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {step.description}
              </p>
              {step.tip && (
                <div className="mt-3 flex items-start gap-2.5 p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300">
                  <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-emerald-200">Pro Tip: </strong>
                    {step.tip}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 flex justify-between items-center">
          <span className="text-xs text-slate-500">GameScope Editorial Strategy Guides</span>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Guides
          </button>
        </div>
      </div>
    </div>
  );
};
