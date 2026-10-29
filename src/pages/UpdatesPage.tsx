import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Search,
  Filter,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Gamepad2
} from 'lucide-react';
import { GAME_UPDATES } from '../data/updatesData';
import { UpdateCard } from '../components/cards/UpdateCard';
import { GameUpdate, UpdateCategory } from '../types';

interface UpdatesPageProps {
  onOpenUpdate: (update: GameUpdate) => void;
  onSelectGame: (gameId: string) => void;
}

export const UpdatesPage: React.FC<UpdatesPageProps> = ({
  onOpenUpdate,
  onSelectGame
}) => {
  const [selectedGame, setSelectedGame] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const gamesList = ['All', 'Minecraft', 'Valorant', 'Grand Theft Auto V', 'Fortnite', 'Counter-Strike 2'];
  const categoriesList = ['All', 'New Content', 'Balance Changes', 'Gameplay', 'Seasonal', 'Bug Fixes'];

  const filteredUpdates = useMemo(() => {
    return GAME_UPDATES.filter((up) => {
      const matchesSearch =
        up.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        up.gameTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        up.version.toLowerCase().includes(searchQuery.toLowerCase()) ||
        up.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesGame = selectedGame === 'All' || up.gameTitle === selectedGame;
      const matchesCat = selectedCategory === 'All' || up.category === selectedCategory;

      return matchesSearch && matchesGame && matchesCat;
    });
  }, [searchQuery, selectedGame, selectedCategory]);

  return (
    <div className="space-y-8 animate-enter">
      {/* Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#12141d] via-[#161a29] to-[#12141d] border border-white/10 p-6 sm:p-10 shadow-2xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Patch Notes & Release History</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Game Updates & Patch Directory
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          Track official balance patches, weapon adjustments, map renovations, and seasonal live-service expansions across top competitive and sandbox titles.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4 bg-[#12141d]/90 rounded-2xl border border-white/5 p-4 sm:p-6 shadow-xl">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search patches by version (e.g. 1.21, 9.08) or keywords..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div className="space-y-3 pt-3 border-t border-white/5">
          {/* Game filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold mr-1">Game:</span>
            {gamesList.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGame(g)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  selectedGame === g
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold mr-1">Category:</span>
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      {filteredUpdates.length === 0 ? (
        <div className="rounded-2xl bg-[#12141d]/80 border border-white/5 p-12 text-center space-y-3">
          <Sparkles className="w-10 h-10 mx-auto text-slate-600" />
          <h3 className="text-base font-bold text-white">No updates matched your filters</h3>
          <p className="text-xs text-slate-400">
            Try choosing "All" games or resetting your keyword search.
          </p>
          <button
            onClick={() => {
              setSelectedGame('All');
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUpdates.map((update) => (
            <UpdateCard
              key={update.id}
              update={update}
              onOpenDetails={onOpenUpdate}
              onSelectGame={onSelectGame}
            />
          ))}
        </div>
      )}
    </div>
  );
};
