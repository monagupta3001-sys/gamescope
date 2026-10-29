import React, { useState } from 'react';
import { Play, Crosshair, Users, Shield, ArrowRight, Zap, Target } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface CodSectionProps {
  onSelectGame: (id: string) => void;
  onSelectArticle: (id: string) => void;
  onOpenTrailer: (title: string, videoId: string) => void;
}

export const CodSection: React.FC<CodSectionProps> = ({
  onSelectGame,
  onSelectArticle,
  onOpenTrailer
}) => {
  const [activeOperator, setActiveOperator] = useState<number>(0);

  const operators = [
    {
      name: 'Simon "Ghost" Riley',
      role: 'Special Recon & Demolitions',
      bio: 'Legendary British special forces operative characterized by his iconic ballistic skull mask and silent infiltration prowess.'
    },
    {
      name: 'Captain John Price',
      role: 'TF-141 Field Commander',
      bio: 'Veteran SAS commander known for his moral conviction, tactical leadership, and expertise in high-stakes hostage extractions.'
    },
    {
      name: 'John "Soap" MacTavish',
      role: 'Sniper & EOD Specialist',
      bio: 'Fearless Scottish demolition expert decorated for courage under extreme combat conditions across European theatres.'
    },
    {
      name: 'Kyle "Gaz" Garrick',
      role: 'Counter-Terrorism Lead',
      bio: 'London Metropolitan Police counter-terror operative transformed into Task Force 141\'s primary marksman.'
    }
  ];

  return (
    <section className="relative rounded-3xl overflow-hidden bg-[#0a0c10] border border-lime-400/20 shadow-2xl">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main 2-Col Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 sm:p-10 relative z-10 items-center">
        {/* Left: Tactical Info (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-lime-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-lg shadow-lime-400/20">
              <Crosshair className="w-3.5 h-3.5" />
              Franchise Spotlight
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-lime-300 border border-lime-400/20">
              Infinity Ward Engine 9.0
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
              Call of Duty: <span className="text-lime-400">Modern Warfare</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-xl">
              "The ultimate weapon is team." Squad up with Task Force 141 across visceral global theatres featuring dynamic underwater physics, ledge hangs, and unified Gunsmith weapon receiver customization.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onOpenTrailer('Call of Duty: Modern Warfare 2 Reveal', 'r72GP1PIZa0')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl shadow-lime-400/25 transition-all hover:scale-105 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Watch Reveal Trailer</span>
            </button>
            <button
              onClick={() => onSelectGame('call-of-duty')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-lime-400/40 transition-all cursor-pointer"
            >
              <span>Explore Game Hub</span>
              <ArrowRight className="w-4 h-4 text-lime-400" />
            </button>
            <button
              onClick={() => onSelectArticle('cod-mw2-trailer-breakdown')}
              className="text-xs font-semibold text-slate-400 hover:text-lime-300 transition-colors ml-1"
            >
              Read Trailer Analysis →
            </button>
          </div>

          {/* Interactive Operator Roster Tabs */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-lime-400" />
                Task Force 141 Operators
              </span>
              <span className="text-slate-500">Select operative to inspect profile</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {operators.map((op, idx) => (
                <button
                  key={op.name}
                  onClick={() => setActiveOperator(idx)}
                  className={`p-2.5 rounded-xl text-left transition-all ${
                    activeOperator === idx
                      ? 'bg-lime-400/15 border border-lime-400/40 text-white'
                      : 'bg-white/5 hover:bg-white/10 border border-white/5 text-slate-400'
                  }`}
                >
                  <p className="text-xs font-bold truncate text-white">{op.name.split(' ')[0]}</p>
                  <p className="text-[10px] text-lime-300 truncate">{op.role}</p>
                </button>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-white block mb-0.5">
                {operators[activeOperator].name} — {operators[activeOperator].role}
              </span>
              {operators[activeOperator].bio}
            </div>
          </div>
        </div>

        {/* Right: Cinematic Visual Showcase (5 Cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
               onClick={() => onOpenTrailer('Call of Duty: Modern Warfare 2 Reveal', 'r72GP1PIZa0')}>
            <ImageWithFallback
              src="/assets/aistudio/kB7KIeE4XiJ1PObcDGzVnd0Uer0YEzllVF2yiwIfAfepMotXCRFJvakLkAZPZNFyhx-usZwJWX7uNYnh4Q9sfkFzvKTNHNgDbBEZ2OUDoiMPtgIeduu0bJV5dG7eSyE-Bxe6M1IdrvZueWDS6T3HaB4XHiPX6EBP6DtRVWA7FOoMp0_lkRdPmqhy7mtWTREv_48b214fb.jpeg"
              alt="Call of Duty Ghost Artwork"
              fallbackTitle="Call of Duty: Modern Warfare"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-lime-400 text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-slate-950 ml-1" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs flex items-center justify-between">
              <div>
                <p className="font-bold text-white">Ghost Infiltration Teaser</p>
                <p className="text-[11px] text-slate-400">4K 60FPS Official Gameplay</p>
              </div>
              <span className="px-2 py-0.5 rounded bg-lime-400/20 text-lime-300 font-mono text-[10px] font-bold">
                WATCH
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
