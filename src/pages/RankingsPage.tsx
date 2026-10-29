import React, { useState } from 'react';
import {
  Trophy,
  TrendingUp,
  MessageSquare,
  Star,
  Info,
  Calendar,
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { GAMES_DATA } from '../data/gamesData';
import { POPULARITY_CHART_DATA } from '../data/rankingsData';
import { PopularityChart } from '../components/charts/PopularityChart';

interface RankingsPageProps {
  onSelectGame: (id: string) => void;
}

type RankingCategory = 'popular' | 'discussed' | 'rated' | 'trending';
type TimeRange = '7d' | '30d' | 'all';

export const RankingsPage: React.FC<RankingsPageProps> = ({ onSelectGame }) => {
  const [activeCategory, setActiveCategory] = useState<RankingCategory>('popular');
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');

  // Sorted list based on active category
  const rankedItems = [...POPULARITY_CHART_DATA].map((item) => {
    const game = GAMES_DATA.find((g) => g.id === item.id);
    return {
      ...item,
      rating: game?.rating || 9.0,
      platforms: game?.platforms || [],
      releaseYear: game?.releaseYear || 2020
    };
  }).sort((a, b) => {
    if (activeCategory === 'popular') {
      return b.weeklyConcurrent - a.weeklyConcurrent;
    }
    if (activeCategory === 'discussed') {
      return b.twitchHoursWatched - a.twitchHoursWatched;
    }
    if (activeCategory === 'rated') {
      return b.rating - a.rating;
    }
    // trending
    return b.trendPercent - a.trendPercent;
  });

  const getCategoryInfo = () => {
    switch (activeCategory) {
      case 'popular':
        return {
          title: 'Most Popular Games Leaderboard',
          metricName: 'Estimated Weekly Concurrent Players',
          unit: 'Thousands (k) Concurrent',
          desc: 'Ranked by weekly peak simultaneous active player estimates across all supported platforms.'
        };
      case 'discussed':
        return {
          title: 'Most Discussed & Streamed Games',
          metricName: 'Live Broadcast Watch Hours',
          unit: 'Million Hours (M)',
          desc: 'Ranked by estimated monthly live broadcast consumption and social streaming engagement.'
        };
      case 'rated':
        return {
          title: 'Highest-Rated Games of All Time',
          metricName: 'GameScope Aggregate Review Score',
          unit: 'Score out of 10.0',
          desc: 'Normalized composite index of verified editorial criticism and player acclaim.'
        };
      case 'trending':
        return {
          title: 'Fastest-Trending Titles',
          metricName: '30-Day Velocity Delta',
          unit: 'Percentage Growth (%)',
          desc: 'Titles demonstrating the fastest acceleration in concurrent player influx and search momentum.'
        };
    }
  };

  const catInfo = getCategoryInfo();

  return (
    <div className="space-y-10 animate-enter">
      {/* Page Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#12141d] via-[#161a29] to-[#12141d] border border-white/10 p-6 sm:p-10 shadow-2xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <Trophy className="w-4 h-4" />
          <span>GameScope Official Index</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Gaming Popularity & Rankings
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          Comprehensive, non-conflated metrics tracking player activity, livestream viewership, and editorial acclaim. Every measurement is segregated by its authentic unit.
        </p>
      </div>

      {/* Illustrative Prototype Disclaimer Banner */}
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Methodology Transparency:</strong> All metrics presented below are illustrative prototype estimates derived from public API signals, third-party trackers, and editorial scoring models. Different metrics (e.g. concurrent players vs. monthly accounts vs. review scores) are intentionally kept strictly separate to prevent misleading comparisons.
        </p>
      </div>

      {/* Category Tabs & Time-Range Strip */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#12141d]/90 p-3 sm:p-4 rounded-2xl border border-white/5">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveCategory('popular')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeCategory === 'popular'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Most Popular</span>
          </button>
          <button
            onClick={() => setActiveCategory('discussed')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeCategory === 'discussed'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Most Discussed</span>
          </button>
          <button
            onClick={() => setActiveCategory('rated')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeCategory === 'rated'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Star className="w-3.5 h-3.5" />
            <span>Highest Rated</span>
          </button>
          <button
            onClick={() => setActiveCategory('trending')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeCategory === 'trending'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Fastest Trending</span>
          </button>
        </div>

        {/* Time Filter */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 self-end md:self-auto text-xs">
          <button
            onClick={() => setTimeRange('7d')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              timeRange === '7d' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            7 Days
          </button>
          <button
            onClick={() => setTimeRange('30d')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              timeRange === '30d' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            30 Days
          </button>
          <button
            onClick={() => setTimeRange('all')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              timeRange === 'all' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            All-Time
          </button>
        </div>
      </div>

      {/* Interactive Popularity Chart Section */}
      <PopularityChart onSelectGame={onSelectGame} />

      {/* Ranked Leaderboard Table */}
      <div className="rounded-2xl bg-[#12141d]/90 border border-white/5 overflow-hidden shadow-xl">
        <div className="p-6 border-b border-white/5">
          <h3 className="text-lg font-bold text-white font-display">
            {catInfo.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {catInfo.desc} · <span className="text-indigo-400">Unit: {catInfo.unit}</span>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-black/40 text-slate-400 uppercase font-semibold border-b border-white/5 tracking-wider">
              <tr>
                <th className="py-3.5 px-6">Rank</th>
                <th className="py-3.5 px-6">Game Title</th>
                <th className="py-3.5 px-6">Genre</th>
                <th className="py-3.5 px-6 text-right">{catInfo.metricName}</th>
                <th className="py-3.5 px-6 text-right">30D Momentum</th>
                <th className="py-3.5 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {rankedItems.map((item, idx) => {
                let metricDisplay = `${item.weeklyConcurrent}k peak`;
                if (activeCategory === 'discussed') {
                  metricDisplay = `${item.twitchHoursWatched}M hrs`;
                } else if (activeCategory === 'rated') {
                  metricDisplay = `${item.rating.toFixed(1)} / 10`;
                } else if (activeCategory === 'trending') {
                  metricDisplay = item.trendPercent >= 0 ? `+${item.trendPercent}%` : `${item.trendPercent}%`;
                }

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-white/5 transition-colors cursor-pointer group"
                    onClick={() => onSelectGame(item.id)}
                  >
                    <td className="py-4 px-6 font-bold font-mono-numeric">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-md ${
                          idx === 0
                            ? 'bg-amber-400 text-slate-950 font-extrabold'
                            : idx === 1
                            ? 'bg-slate-300 text-slate-950 font-bold'
                            : idx === 2
                            ? 'bg-amber-700 text-white font-bold'
                            : 'text-slate-400'
                        }`}
                      >
                        {idx + 1}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {item.gameName}
                    </td>
                    <td className="py-4 px-6 text-slate-400">{item.genre}</td>
                    <td className="py-4 px-6 text-right font-bold text-white font-mono-numeric">
                      {metricDisplay}
                    </td>
                    <td className="py-4 px-6 text-right font-mono-numeric">
                      <span
                        className={`font-semibold ${
                          item.trendPercent >= 0 ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {item.trendPercent >= 0 ? `+${item.trendPercent}%` : `${item.trendPercent}%`}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectGame(item.id);
                        }}
                        className="px-3 py-1 rounded-lg bg-white/5 group-hover:bg-indigo-600 text-slate-300 group-hover:text-white transition-all text-xs font-medium"
                      >
                        View Hub
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
