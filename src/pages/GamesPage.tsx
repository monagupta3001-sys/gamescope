import React, { useState, useMemo } from 'react';
import {
  Gamepad2,
  Search,
  LayoutGrid,
  List,
  Filter,
  ArrowUpDown,
  RotateCcw
} from 'lucide-react';
import { GAMES_DATA } from '../data/gamesData';
import { GameCard } from '../components/cards/GameCard';
import { GameGenre } from '../types';

interface GamesPageProps {
  onSelectGame: (id: string) => void;
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
}

type SortOption = 'rank' | 'title-asc' | 'title-desc' | 'year-desc' | 'year-asc' | 'rating-desc';

export const GamesPage: React.FC<GamesPageProps> = ({
  onSelectGame,
  favoriteIds,
  onToggleFavorite
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('rank');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const genres = useMemo(() => {
    const list = Array.from(new Set(GAMES_DATA.map((g) => g.genre)));
    return ['All', ...list];
  }, []);

  const platforms = ['All', 'PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile'];

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter((game) => {
      // Search matching
      const matchesSearch =
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.developer.toLowerCase().includes(searchQuery.toLowerCase());

      // Genre matching
      const matchesGenre =
        selectedGenre === 'All' || game.genre === selectedGenre;

      // Platform matching
      let matchesPlatform = true;
      if (selectedPlatform === 'PC') {
        matchesPlatform = game.platforms.includes('PC');
      } else if (selectedPlatform === 'PlayStation') {
        matchesPlatform = game.platforms.some((p) => p.includes('PlayStation'));
      } else if (selectedPlatform === 'Xbox') {
        matchesPlatform = game.platforms.some((p) => p.includes('Xbox'));
      } else if (selectedPlatform === 'Switch') {
        matchesPlatform = game.platforms.includes('Nintendo Switch');
      } else if (selectedPlatform === 'Mobile') {
        matchesPlatform = game.platforms.some((p) => p.includes('iOS') || p.includes('Android'));
      }

      return matchesSearch && matchesGenre && matchesPlatform;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'rank':
          return a.rank - b.rank;
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'year-desc':
          return b.releaseYear - a.releaseYear;
        case 'year-asc':
          return a.releaseYear - b.releaseYear;
        case 'rating-desc':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [searchQuery, selectedGenre, selectedPlatform, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGenre('All');
    setSelectedPlatform('All');
    setSortBy('rank');
  };

  return (
    <div className="space-y-8 animate-enter">
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#12141d] via-[#161a29] to-[#12141d] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 tracking-wider uppercase">
            <Gamepad2 className="w-4 h-4" />
            <span>Official Encyclopedia Directory</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Explore All Games
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Browse our curated roster of tier-one multiplayer phenomenons, tactical esports shooters, and open-world milestones. Filter by hardware platform, category, or release generation.
          </p>
        </div>
      </div>

      {/* Control Bar: Search & Filters */}
      <div className="space-y-4 bg-[#12141d]/80 rounded-2xl border border-white/5 p-4 sm:p-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by game title, publisher, or tags..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* View Toggles & Sorting */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-black/40 border border-white/10 rounded-xl px-3 py-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-indigo-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort games by"
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="rank" className="bg-[#12141c]">Popularity Rank</option>
                <option value="rating-desc" className="bg-[#12141c]">Highest Rated</option>
                <option value="year-desc" className="bg-[#12141c]">Newest Release</option>
                <option value="year-asc" className="bg-[#12141c]">Oldest Release</option>
                <option value="title-asc" className="bg-[#12141c]">Alphabetical (A-Z)</option>
                <option value="title-desc" className="bg-[#12141c]">Alphabetical (Z-A)</option>
              </select>
            </div>

            {/* Grid vs List View */}
            <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/10">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="space-y-3 pt-3 border-t border-white/5">
          {/* Genre Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold mr-1">Genre:</span>
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  selectedGenre === genre
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* Platform Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold mr-1">Platform:</span>
            {platforms.map((plat) => (
              <button
                key={plat}
                onClick={() => setSelectedPlatform(plat)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  selectedPlatform === plat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                }`}
              >
                {plat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count & Active Filter Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Showing <strong className="text-white font-mono-numeric">{filteredGames.length}</strong> of{' '}
          <strong className="text-white font-mono-numeric">{GAMES_DATA.length}</strong> titles
        </span>
        {(searchQuery || selectedGenre !== 'All' || selectedPlatform !== 'All') && (
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Games Display (Grid or List) */}
      {filteredGames.length === 0 ? (
        <div className="rounded-2xl bg-[#12141d]/80 border border-white/5 p-12 text-center space-y-4">
          <Gamepad2 className="w-12 h-12 mx-auto text-slate-600" />
          <h3 className="text-lg font-bold text-white font-display">No matching games found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            We couldn't find any games matching "{searchQuery}" with the selected genre and platform filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onSelect={onSelectGame}
              isFavorited={favoriteIds.includes(game.id)}
              onToggleFavorite={onToggleFavorite}
              variant="grid"
            />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onSelect={onSelectGame}
              isFavorited={favoriteIds.includes(game.id)}
              onToggleFavorite={onToggleFavorite}
              variant="list"
            />
          ))}
        </div>
      )}
    </div>
  );
};
