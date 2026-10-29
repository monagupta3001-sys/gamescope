import React, { useState } from 'react';
import { Swords, Crosshair, Trophy, Play, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface TacticalEsportsSectionProps {
  onSelectGame: (id: string) => void;
  onOpenTrailer: (title: string, videoId: string) => void;
  onSelectGuide: (id: string) => void;
}

export const TacticalEsportsSection: React.FC<TacticalEsportsSectionProps> = ({
  onSelectGame,
  onOpenTrailer,
  onSelectGuide
}) => {
  const [activeGame, setActiveGame] = useState<'valorant' | 'cs2'>('valorant');

  return (
    <section className="relative rounded-3xl overflow-hidden bg-[#0d0f1a] border border-indigo-500/30 p-6 sm:p-10 shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-indigo-500/20 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-indigo-600 text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-lg shadow-indigo-600/30">
              <Swords className="w-3.5 h-3.5" />
              Tactical FPS & Esports
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/50 text-indigo-300 border border-indigo-500/30">
              VCT Masters & Valve Major Circuit
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            The Competitive Tactical Shooter Arena
          </h2>
        </div>

        {/* Game Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 self-start md:self-auto">
          <button
            onClick={() => setActiveGame('valorant')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeGame === 'valorant'
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Valorant (Riot)
          </button>
          <button
            onClick={() => setActiveGame('cs2')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeGame === 'cs2'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Counter-Strike 2 (Valve)
          </button>
        </div>
      </div>

      {/* Dynamic Content based on Active Game */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 relative z-10 items-stretch">
        {/* Left (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          {activeGame === 'valorant' ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-400">
                <Crosshair className="w-4 h-4" />
                <span>128-Tick Dedicated Netcode · Riot Vanguard Anti-Cheat</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Precise Gunplay Meets Adaptive Agent Radiance
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every millisecond counts. In Valorant, tactical agent abilities set up space, while pure crosshair placement, counter-strafing, and one-tap headshots seal the victory.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {[
                  { role: 'Duelists', desc: 'Jett, Raze, Reyna (Entry Fragging)' },
                  { role: 'Initiators', desc: 'Sova, Fade, Breach (Recon & Info)' },
                  { role: 'Controllers', desc: 'Omen, Viper, Brimstone (Smokes)' },
                  { role: 'Sentinels', desc: 'Killjoy, Cypher (Defensive Locks)' }
                ].map((item) => (
                  <div key={item.role} className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs font-bold text-white mb-0.5">{item.role}</p>
                    <p className="text-[10px] text-slate-400 line-clamp-2">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenTrailer('Valorant Official Gameplay Reveal', 'e_E9W2vsRbA')}
                  className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-600/30 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Watch Gameplay Trailer</span>
                </button>
                <button
                  onClick={() => onSelectGame('valorant')}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-all cursor-pointer"
                >
                  <span>Open Valorant Hub</span>
                </button>
                <button
                  onClick={() => onSelectGuide('valorant-crosshair-fundamentals')}
                  className="text-xs font-semibold text-rose-400 hover:underline"
                >
                  Crosshair & Peeking Guide →
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Source 2 Engine · Sub-Tick Precision · Volumetric Smokes</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                The Purest Competitive Shooter in Esports History
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Zero superpowers. Pure mastery of AK-47 spray control, AWP angles, tactical flashes, and MR12 round economy across legendary maps including Dust II, Mirage, and Nuke.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-xs font-bold text-white mb-0.5">Volumetric Smoke Granades</p>
                  <p className="text-[11px] text-slate-400">Smokes interact with bullets & HE grenades, briefly clearing sightlines.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-xs font-bold text-white mb-0.5">Sub-Tick Frame Timings</p>
                  <p className="text-[11px] text-slate-400">Movement and shooting calculate the exact millisecond click happens.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenTrailer('Counter-Strike 2 Official Launch Trailer', 'nSE38kJMXnE')}
                  className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-600/30 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Watch CS2 Trailer</span>
                </button>
                <button
                  onClick={() => onSelectGame('counter-strike-2')}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-all cursor-pointer"
                >
                  <span>Open CS2 Hub</span>
                </button>
                <button
                  onClick={() => onSelectGuide('cs2-ak47-spray')}
                  className="text-xs font-semibold text-amber-400 hover:underline"
                >
                  AK-47 Spray Guide →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right (5 cols): Visual card */}
        <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <ImageWithFallback
            src={
              activeGame === 'valorant'
                ? 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop'
                : 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop'
            }
            alt={activeGame === 'valorant' ? 'Valorant Esports Stage' : 'Counter-Strike 2 Tactical'}
            fallbackTitle={activeGame === 'valorant' ? 'Valorant' : 'Counter-Strike 2'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs flex items-center justify-between">
            <span className="font-bold text-white">
              {activeGame === 'valorant' ? 'VCT Champions 2026' : 'Valve Autumn Major'}
            </span>
            <span className="text-indigo-400 font-mono-numeric font-semibold">
              {activeGame === 'valorant' ? '64.2M Watch Hours' : '56.8M Watch Hours'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
