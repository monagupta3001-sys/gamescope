import React, { useState } from 'react';
import { Box, Sparkles, Play, ArrowRight, Pickaxe, Lightbulb, Check } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface MinecraftSectionProps {
  onSelectGame: (id: string) => void;
  onOpenTrailer: (title: string, videoId: string) => void;
  onSelectGuide: (id: string) => void;
}

export const MinecraftSection: React.FC<MinecraftSectionProps> = ({
  onSelectGame,
  onOpenTrailer,
  onSelectGuide
}) => {
  const [selectedFeature, setSelectedFeature] = useState<'crafter' | 'chambers' | 'breeze' | 'mace'>('crafter');

  const featureDetails = {
    crafter: {
      title: 'The Crafter Block: Native Redstone Automation',
      desc: 'Mojang has introduced the revolutionary Crafter block. Players can now build fully automated item factories using Redstone pulses without installing third-party mods.',
      stat: '9 Inventory Slots · Pulse Triggered · Hopper Compatible'
    },
    chambers: {
      title: 'Trial Chambers: Dynamic Multiplayer Dungeons',
      desc: 'Procedural underground corridors filled with oxidized copper, tuff bricks, and adaptive spawners that scale enemy difficulty based on how many players enter.',
      stat: 'Adaptive Spawner Mobs · Vault Keys · Ominous Trials'
    },
    breeze: {
      title: 'The Breeze: Kinetic Hostile Mob',
      desc: 'An agile, spinning vortex of wind that leaps around trial chambers, firing explosive wind bursts that deflect projectiles and activate nearby trapdoors and buttons.',
      stat: 'Wind Charges · Knockback Physics · Drop Core'
    },
    mace: {
      title: 'The Heavy Mace: Kinetic Smashing Weapon',
      desc: 'Crafted from a Breeze Rod and Heavy Core. The greater the height you fall before hitting your foe, the higher the damage multiplier, completely negating fall damage on hit!',
      stat: 'Density Enchantment · Breach III · Smash Attack'
    }
  };

  return (
    <section className="relative rounded-3xl overflow-hidden bg-[#0c1311] border border-emerald-500/30 p-6 sm:p-10 shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-emerald-500/20 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-lg shadow-emerald-500/20">
              <Box className="w-3.5 h-3.5" />
              Minecraft Universe
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
              Snapshot 1.21 Tricky Trials
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            The Infinite Voxel Sandbox & Automation Revolution
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenTrailer('Minecraft 1.21 Tricky Trials Official Trailer', 'MmB9b5njVbA')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>Watch 1.21 Trailer</span>
          </button>
          <button
            onClick={() => onSelectGame('minecraft')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-all cursor-pointer"
          >
            <span>Full Wiki Hub</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>

      {/* 2-Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 relative z-10 items-stretch">
        {/* Left: Interactive 1.21 Feature Inspector (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Pickaxe className="w-4 h-4 text-emerald-400" />
              <span>Explore 1.21 Milestone Systems</span>
            </h3>

            {/* Feature Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'crafter', label: 'The Crafter' },
                { id: 'chambers', label: 'Trial Chambers' },
                { id: 'breeze', label: 'The Breeze' },
                { id: 'mace', label: 'Heavy Mace' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedFeature(item.id as any)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                    selectedFeature === item.id
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Active Feature Detail Card */}
            <div className="p-5 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-3">
              <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                <span className="font-bold">{featureDetails[selectedFeature].title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {featureDetails[selectedFeature].desc}
              </p>
              <div className="pt-2 border-t border-white/10 text-xs font-mono text-emerald-300 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{featureDetails[selectedFeature].stat}</span>
              </div>
            </div>
          </div>

          {/* Survival Quick Guides Callout */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">First 3 Days Survival Guide</p>
                <p className="text-[11px] text-slate-400">Progression from wood tools to deepslate diamond branch mining</p>
              </div>
            </div>
            <button
              onClick={() => onSelectGuide('minecraft-survival-tips')}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 font-bold text-xs transition-all shrink-0 self-start sm:self-auto cursor-pointer"
            >
              Open Guide →
            </button>
          </div>
        </div>

        {/* Right: Visual Artwork Showcase (5 cols) */}
        <div className="lg:col-span-5 relative flex flex-col justify-between rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-xl min-h-[300px]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=800&auto=format&fit=crop"
            alt="Minecraft Voxel Landscapes"
            fallbackTitle="Minecraft Voxel Kingdom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-xs text-slate-300 space-y-1">
            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
              Community Spotlight
            </span>
            <p className="font-bold text-white text-sm">Gothic Deepslate Cathedral</p>
            <p className="text-[11px] text-slate-400">400 in-game days built in pure vanilla hardcore survival.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
