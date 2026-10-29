import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { Info, BarChart2, TrendingUp, HelpCircle } from 'lucide-react';
import { POPULARITY_CHART_DATA } from '../../data/rankingsData';

interface PopularityChartProps {
  onSelectGame?: (gameId: string) => void;
}

type MetricType = 'weekly' | 'monthly' | 'twitch';

export const PopularityChart: React.FC<PopularityChartProps> = ({ onSelectGame }) => {
  const [metric, setMetric] = useState<MetricType>('weekly');

  const chartData = POPULARITY_CHART_DATA.map((item, index) => {
    let value = item.weeklyConcurrent;
    let label = `${item.weeklyConcurrent}k peak players`;
    if (metric === 'monthly') {
      value = item.monthlyActive;
      label = `${item.monthlyActive}M active accounts`;
    } else if (metric === 'twitch') {
      value = Math.round(item.twitchHoursWatched);
      label = `${item.twitchHoursWatched}M hours watched`;
    }

    return {
      id: item.id,
      name: item.gameName,
      genre: item.genre,
      value: value,
      displayLabel: label,
      trend: item.trendPercent,
      rank: index + 1
    };
  }).sort((a, b) => b.value - a.value);

  const getMetricDetails = () => {
    switch (metric) {
      case 'weekly':
        return {
          title: 'Estimated Peak Weekly Concurrent Players',
          unit: 'Thousands (k)',
          subtitle: 'Estimated peak simultaneous players recorded across active platforms during peak weekend hours.'
        };
      case 'monthly':
        return {
          title: 'Estimated Monthly Active Players (MAU)',
          unit: 'Millions (M)',
          subtitle: 'Synthesized monthly active player universe across PC, console, and cross-play networks.'
        };
      case 'twitch':
        return {
          title: 'Twitch Livestream Watch Hours (Last 30 Days)',
          unit: 'Million Hours (M)',
          subtitle: 'Live broadcast viewership interest based on streaming aggregate index.'
        };
    }
  };

  const currentDetails = getMetricDetails();

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="rounded-xl bg-[#12141e] p-3.5 border border-indigo-500/30 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-indigo-400 font-mono">#{data.rank}</span>
            <span className="text-sm font-bold text-white">{data.name}</span>
          </div>
          <p className="text-xs text-slate-400 mb-2">{data.genre}</p>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-400">Index Value:</span>
            <span className="text-sm font-bold text-indigo-300 font-mono-numeric">
              {data.displayLabel}
            </span>
          </div>
          <div className="mt-1 flex items-center justify-between gap-4 text-[11px]">
            <span className="text-slate-400">Weekly Delta:</span>
            <span
              className={`font-semibold font-mono-numeric ${
                data.trend >= 0 ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {data.trend >= 0 ? `+${data.trend}%` : `${data.trend}%`}
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-2xl bg-[#12141d]/90 border border-white/5 p-5 sm:p-7 shadow-xl">
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BarChart2 className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              GameScope Popularity Matrix
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            {currentDetails.title} · <span className="text-indigo-400">Unit: {currentDetails.unit}</span>
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setMetric('weekly')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              metric === 'weekly'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Weekly Concurrent
          </button>
          <button
            onClick={() => setMetric('monthly')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              metric === 'monthly'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly Active
          </button>
          <button
            onClick={() => setMetric('twitch')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              metric === 'twitch'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Stream Hours
          </button>
        </div>
      </div>

      {/* Illustrative Prototype Disclaimer Banner */}
      <div className="my-4 flex items-start gap-2.5 p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200">
        <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Illustrative Prototype Data:</strong> Player metrics and viewership numbers displayed here are curated sample estimates representing relative market popularity for prototype exploration. They do not constitute audited first-party server telemetry.
        </p>
      </div>

      {/* Chart Canvas */}
      <div className="w-full h-80 sm:h-96 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 35, bottom: 5 }}
          >
            <XAxis
              type="number"
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
              tickFormatter={(v) => `${v}`}
            />
            <YAxis
              type="category"
              dataKey="name"
              stroke="#94a3b8"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: '#334155' }}
              width={100}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(99, 102, 241, 0.08)' }} />
            <Bar
              dataKey="value"
              radius={[0, 6, 6, 0]}
              onClick={(entry: any) => {
                if (entry && entry.id) {
                  onSelectGame?.(entry.id);
                }
              }}
              className="cursor-pointer"
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    index === 0
                      ? '#6366f1' // Indigo top
                      : index === 1
                      ? '#818cf8'
                      : index === 2
                      ? '#a855f7'
                      : '#475569'
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Explanatory Footnote */}
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
        <span>Click any bar to jump to the game's full encyclopedia breakdown</span>
        <span className="flex items-center gap-1 text-slate-400 font-mono-numeric">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          Updated Weekly Prototype Feed
        </span>
      </div>
    </div>
  );
};
