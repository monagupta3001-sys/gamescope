import React, { useState } from 'react';
import { Car, DollarSign, Play, ArrowRight, Flame, Shield, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface GtaSectionProps {
  onSelectGame: (id: string) => void;
  onOpenTrailer: (title: string, videoId: string) => void;
  onSelectGuide: (id: string) => void;
  onSelectArticle: (id: string) => void;
}

export const GtaSection: React.FC<GtaSectionProps> = ({
  onSelectGame,
  onOpenTrailer,
  onSelectGuide,
  onSelectArticle
}) => {
  const [activeTab, setActiveTab] = useState<'gta6' | 'gta5' | 'economy'>('gta6');

  return (
    <section className="relative rounded-3xl overflow-hidden bg-[#110c14] border border-rose-500/30 p-6 sm:p-10 shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-rose-500/20 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-rose-500 text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-lg shadow-rose-500/25">
              <Car className="w-3.5 h-3.5" />
              Rockstar Universe
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/60 text-cyan-300 border border-cyan-500/30">
              Vice City & Los Santos Syndicate
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            Grand Theft Auto: From Los Santos to Leonida
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenTrailer('Grand Theft Auto VI — Official Trailer 1', 'QkkoHAzjnUs')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:opacity-90 text-white font-bold text-xs shadow-lg shadow-rose-500/20 transition-all cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Watch GTA 6 Trailer</span>
          </button>
          <button
            onClick={() => onSelectGame('gta-v')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-all cursor-pointer"
          >
            <span>GTA V Encyclopedia</span>
            <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
          </button>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 relative z-10">
        {/* Left Column (7 cols): Interactive Vice City / GTA Online Explorer */}
        <div className="lg:col-span-7 space-y-6">
          {/* Sub Navigation */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-black/40 border border-white/10 self-start w-fit">
            <button
              onClick={() => setActiveTab('gta6')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'gta6'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              GTA 6 Intel & Leonida
            </button>
            <button
              onClick={() => setActiveTab('gta5')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'gta5'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              GTA Online: Bottom Dollar
            </button>
            <button
              onClick={() => setActiveTab('economy')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'economy'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              $2.1B Stock Heist Guide
            </button>
          </div>

          {activeTab === 'gta6' && (
            <div className="p-5 rounded-2xl bg-black/40 border border-rose-500/20 space-y-4">
              <div className="flex items-center justify-between text-xs text-rose-400 font-mono">
                <span className="font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Vice City, Kelly County & The Leonida Keys
                </span>
                <span className="text-cyan-400">Late 2025 Release Target</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Rockstar Games returns to the neon-soaked boulevards of Vice City with dual protagonists Lucia and Jason. Featuring machine-learning traffic routines, authentic crowd physics, and in-game viral social video parodying modern internet culture.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-xs font-bold text-white mb-0.5">Dual Protagonists</p>
                  <p className="text-[11px] text-slate-400">High-stakes Bonnie & Clyde crime dynamic in Southern Florida.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-xs font-bold text-white mb-0.5">Interior Density</p>
                  <p className="text-[11px] text-slate-400">Over 70% of commercial and residential doors physically enterable.</p>
                </div>
              </div>
              <button
                onClick={() => onSelectArticle('gta6-editorial-direction')}
                className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1"
              >
                Read our in-depth analysis: "GTA 6 Will Be a Very Different GTA" →
              </button>
            </div>
          )}

          {activeTab === 'gta5' && (
            <div className="p-5 rounded-2xl bg-black/40 border border-rose-500/20 space-y-4">
              <div className="flex items-center justify-between text-xs text-amber-400 font-mono">
                <span className="font-bold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  Bottom Dollar Bail Enforcement Agency
                </span>
                <span>Active GTA Online DLC</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Team up with Maude Eccles to capture high-value fugitives alive for bonus rewards, or pilot authorized interceptor police cruisers in brand new dispatch contracts across Los Santos.
              </p>
              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200">
                <strong>Weekly Tip: </strong>
                Nightclub safe storage has been expanded to $300,000. Keep popularity maxed out using DJ re-bookings to collect $50k every in-game day.
              </div>
            </div>
          )}

          {activeTab === 'economy' && (
            <div className="p-5 rounded-2xl bg-black/40 border border-rose-500/20 space-y-4">
              <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                <span className="font-bold flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5" />
                  Max Bankroll Stock Market Exploit
                </span>
                <span>Single Player Story Mode</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                By postponing Lester\'s assassination missions until after the final Union Depository heist, players can invest upwards of $30 million per character and reap an 80% rebound return on Betta Pharmaceuticals and Fruit stock!
              </p>
              <button
                onClick={() => onSelectGuide('gta-v-story-tips')}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Open Assassination Stock Step-by-Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Right Column (5 cols): Cinematic Vice Visual */}
        <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
            alt="GTA Vice City Atmosphere"
            fallbackTitle="Grand Theft Auto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs">
            <span className="text-[10px] uppercase font-bold text-rose-400">Grand Theft Auto Saga</span>
            <p className="text-sm font-bold text-white mt-0.5">Los Santos to Vice City Evolution</p>
            <p className="text-[11px] text-slate-400 mt-1">Over 200 million copies sold worldwide across 3 console generations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
