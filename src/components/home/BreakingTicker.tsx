import React from 'react';
import { Flame, Sparkles, Trophy, ChevronRight, Zap } from 'lucide-react';

interface BreakingTickerProps {
  onSelectArticle: (id: string) => void;
  onSelectGame: (id: string) => void;
}

export const BreakingTicker: React.FC<BreakingTickerProps> = ({
  onSelectArticle,
  onSelectGame
}) => {
  const tickerItems = [
    { text: 'Call of Duty: Modern Warfare 2 New Trailer Released', type: 'article', id: 'cod-mw2-trailer-breakdown' },
    { text: 'Minecraft 1.21 Tricky Trials — Automatic Crafter now live', type: 'game', id: 'minecraft' },
    { text: 'GTA 6 Vice City: Everything revealed so far regarding Lucia & Jason', type: 'article', id: 'gta6-editorial-direction' },
    { text: 'Valorant Sunset map rework rolls out with Patch 9.08', type: 'game', id: 'valorant' },
    { text: 'Counter-Strike 2 sub-tick jump throws calibrated for competitive play', type: 'game', id: 'counter-strike-2' }
  ];

  return (
    <div className="w-full bg-[#12141e]/90 border-y border-white/5 py-2 px-4 overflow-hidden relative backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-lime-400 text-slate-950 font-extrabold uppercase tracking-wider text-[10px] shadow-sm">
            <Zap className="w-3 h-3 fill-slate-950" />
            Breaking Intel
          </span>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap text-slate-300">
          {tickerItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (item.type === 'article') onSelectArticle(item.id);
                else onSelectGame(item.id);
              }}
              className="flex items-center gap-2 hover:text-lime-300 transition-colors group cursor-pointer"
            >
              <span className="text-slate-600">/</span>
              <span className="font-medium group-hover:underline underline-offset-2">
                {item.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
