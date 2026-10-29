import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle2, Users, Flame } from 'lucide-react';

export const CommunityPollWidget: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(() => {
    try {
      const saved = localStorage.getItem('gamescope_poll_vote');
      return saved ? parseInt(saved, 10) : null;
    } catch {
      return null;
    }
  });

  const [votes, setVotes] = useState<number[]>([1420, 1890, 2150, 1640, 980]);

  const pollOptions = [
    'Call of Duty: Modern Warfare & Warzone',
    'Minecraft (1.21 Crafter & Trial Chambers)',
    'Grand Theft Auto (GTA V & GTA 6 Hype)',
    'Tactical Shooters (Valorant & CS2)',
    'Fortnite (Zero Build & Seasonal Multiverse)'
  ];

  const totalVotes = votes.reduce((acc, curr) => acc + curr, 0);

  const handleVote = (index: number) => {
    if (selectedOption !== null) return;
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
    setSelectedOption(index);
    try {
      localStorage.setItem('gamescope_poll_vote', index.toString());
    } catch {
      // storage unavailable
    }
  };

  return (
    <div className="rounded-3xl bg-[#12141d]/90 border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-lime-400 text-slate-950 flex items-center justify-center font-bold">
            <Flame className="w-4 h-4 fill-slate-950" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">
              GameScope Weekly Community Pulse
            </h3>
            <p className="text-xs text-slate-400">
              Which gaming universe are you sinking the most hours into this season?
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono-numeric">
          <Users className="w-3.5 h-3.5 text-lime-400" />
          <span>{totalVotes.toLocaleString()} votes cast</span>
        </div>
      </div>

      {/* Options List */}
      <div className="mt-6 space-y-3">
        {pollOptions.map((option, idx) => {
          const voteCount = votes[idx];
          const percentage = Math.round((voteCount / totalVotes) * 100);
          const isUserChoice = selectedOption === idx;

          return (
            <div
              key={idx}
              onClick={() => handleVote(idx)}
              className={`relative overflow-hidden rounded-xl border transition-all duration-300 p-3.5 ${
                selectedOption === null
                  ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-lime-400/40 cursor-pointer group'
                  : isUserChoice
                  ? 'bg-lime-950/20 border-lime-400/40'
                  : 'bg-white/5 border-white/5'
              }`}
            >
              {/* Animated Progress Fill */}
              {selectedOption !== null && (
                <div
                  className={`absolute inset-y-0 left-0 transition-all duration-700 ${
                    isUserChoice ? 'bg-lime-400/25' : 'bg-white/5'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              )}

              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isUserChoice
                        ? 'border-lime-400 bg-lime-400 text-slate-950'
                        : 'border-slate-500'
                    }`}
                  >
                    {isUserChoice && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-semibold truncate ${
                      isUserChoice ? 'text-lime-300' : 'text-slate-200'
                    }`}
                  >
                    {option}
                  </span>
                </div>

                {selectedOption !== null ? (
                  <span className="text-xs font-mono-numeric font-bold text-white shrink-0">
                    {percentage}%
                  </span>
                ) : (
                  <span className="text-[11px] font-bold text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    Vote →
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
        <span>{selectedOption !== null ? 'Your vote is recorded locally' : 'Click any choice above to cast your ballot'}</span>
        <span className="text-lime-400 font-medium">Updates Realtime</span>
      </div>
    </div>
  );
};
