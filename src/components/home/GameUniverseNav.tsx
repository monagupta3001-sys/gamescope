import React from 'react';
import { Gamepad2, Crosshair, Box, Car, Swords, Flame } from 'lucide-react';

interface GameUniverseNavProps {
  activeHub: string;
  onSelectHub: (hubId: string) => void;
}

export const GameUniverseNav: React.FC<GameUniverseNavProps> = ({
  activeHub,
  onSelectHub
}) => {
  const hubs = [
    { id: 'all', label: 'All Universes', icon: <Flame className="w-3.5 h-3.5" /> },
    { id: 'cod', label: 'Call of Duty: Ops', icon: <Crosshair className="w-3.5 h-3.5" />, accent: 'border-lime-400/40' },
    { id: 'minecraft', label: 'Minecraft Realm', icon: <Box className="w-3.5 h-3.5" />, accent: 'border-emerald-400/40' },
    { id: 'gta', label: 'GTA & Vice City', icon: <Car className="w-3.5 h-3.5" />, accent: 'border-rose-400/40' },
    { id: 'tactical', label: 'Valorant & CS2 Arena', icon: <Swords className="w-3.5 h-3.5" />, accent: 'border-indigo-400/40' }
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1.5">
        <Gamepad2 className="w-4 h-4 text-indigo-400" />
        Game Hubs:
      </span>
      {hubs.map((hub) => {
        const isActive = activeHub === hub.id;
        return (
          <button
            key={hub.id}
            onClick={() => onSelectHub(hub.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-lime-400 text-slate-950 shadow-lg shadow-lime-400/20 scale-102'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            {hub.icon}
            <span>{hub.label}</span>
          </button>
        );
      })}
    </div>
  );
};
