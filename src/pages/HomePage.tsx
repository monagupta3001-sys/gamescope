import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Flame,
  Calendar,
  Gamepad2,
  BookOpen,
  Users,
  Compass,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Play
} from 'lucide-react';
import { GAMES_DATA } from '../data/gamesData';
import { NEWS_ARTICLES } from '../data/newsData';
import { GAME_UPDATES } from '../data/updatesData';
import { UPCOMING_GAMES, GAMING_GUIDES, COMMUNITY_HIGHLIGHTS } from '../data/rankingsData';
import { GameCard } from '../components/cards/GameCard';
import { NewsCard } from '../components/cards/NewsCard';
import { UpdateCard } from '../components/cards/UpdateCard';
import { PopularityChart } from '../components/charts/PopularityChart';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { BreakingTicker } from '../components/home/BreakingTicker';
import { GameUniverseNav } from '../components/home/GameUniverseNav';
import { CodSection } from '../components/home/CodSection';
import { MinecraftSection } from '../components/home/MinecraftSection';
import { GtaSection } from '../components/home/GtaSection';
import { TacticalEsportsSection } from '../components/home/TacticalEsportsSection';
import { CommunityPollWidget } from '../components/home/CommunityPollWidget';
import { GameUpdate, GuideItem } from '../types';

interface HomePageProps {
  onSelectGame: (id: string) => void;
  onSelectArticle: (id: string) => void;
  onSelectGuide: (guide: GuideItem) => void;
  onSelectGuideById: (guideId: string) => void;
  onOpenUpdate: (update: GameUpdate) => void;
  onOpenTrailer: (title: string, videoId: string) => void;
  onNavigateToGames: () => void;
  onNavigateToNews: () => void;
  onNavigateToRankings: () => void;
  onNavigateToUpdates: () => void;
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectGame,
  onSelectArticle,
  onSelectGuide,
  onSelectGuideById,
  onOpenUpdate,
  onOpenTrailer,
  onNavigateToGames,
  onNavigateToNews,
  onNavigateToRankings,
  onNavigateToUpdates,
  favoriteIds,
  onToggleFavorite
}) => {
  const [activeHub, setActiveHub] = useState<string>('all');
  const [communityTab, setCommunityTab] = useState<string>('All');

  // Hero Article (COD MW2)
  const heroArticle = NEWS_ARTICLES.find((a) => a.isHero) || NEWS_ARTICLES[0];
  const secondaryArticles = NEWS_ARTICLES.filter(
    (a) => a.id !== heroArticle.id && (a.isFeaturedSecondary || a.isTrending)
  ).slice(0, 3);

  const trendingNewsRow = NEWS_ARTICLES.filter(
    (a) => a.id !== heroArticle.id && !secondaryArticles.find((s) => s.id === a.id)
  ).slice(0, 4);

  // Popular games (first 6 on home, link to all)
  const popularGames = GAMES_DATA.slice(0, 6);

  // Community highlights filtered
  const filteredCommunity =
    communityTab === 'All'
      ? COMMUNITY_HIGHLIGHTS
      : COMMUNITY_HIGHLIGHTS.filter((c) => c.category === communityTab);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* =========================================================
          LIVE BREAKING INTEL TICKER
         ========================================================= */}
      <div className="animate-enter">
        <BreakingTicker
          onSelectArticle={onSelectArticle}
          onSelectGame={onSelectGame}
        />
      </div>

      {/* =========================================================
          SECTION A: HERO EDITORIAL SHOWCASE (Matching User Reference)
         ========================================================= */}
      <section className="relative pt-2 animate-enter-scale delay-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Cinematic Feature (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl overflow-hidden bg-[#12141d] border border-white/10 group shadow-2xl relative min-h-[480px] sm:min-h-[540px]">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <ImageWithFallback
                src={heroArticle.heroImage}
                alt={heroArticle.title}
                fallbackTitle={heroArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-[#0a0b10]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b10]/85 via-transparent to-transparent" />
            </div>

            {/* Top Label */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-lime-400 text-slate-950 font-black text-xs tracking-wider uppercase shadow-lg shadow-lime-400/20">
                  Featured Story
                </span>
                <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                  {heroArticle.category}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                {heroArticle.publishedAt}
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-6 sm:p-8 space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight sm:leading-snug max-w-2xl">
                {heroArticle.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 line-clamp-2 max-w-xl leading-relaxed">
                {heroArticle.subtitle || heroArticle.excerpt}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-800 border border-white/20">
                    <img
                      src={heroArticle.author.avatar}
                      alt={heroArticle.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      {heroArticle.author.name}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {heroArticle.readTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => onOpenTrailer('Call of Duty: Modern Warfare 2 Reveal', 'r72GP1PIZa0')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs backdrop-blur-md transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Trailer</span>
                  </button>

                  <button
                    onClick={() => onSelectArticle(heroArticle.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-lime-400/25 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    <span>Continue Reading</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Editorial Column (5 Cols on desktop - Popular News sidebar) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#12141c]/90 border border-white/10 p-6 sm:p-7 shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-lime-400" />
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider font-display">
                    Popular News
                  </h2>
                </div>
                <button
                  onClick={onNavigateToNews}
                  className="text-xs font-bold text-lime-400 hover:text-lime-300 transition-colors"
                >
                  View All →
                </button>
              </div>

              <div className="divide-y divide-white/5 space-y-4">
                {secondaryArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => onSelectArticle(article.id)}
                    className="pt-4 first:pt-0 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <span className="text-lime-400 font-semibold">{article.category}</span>
                          <span>·</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-lime-300 transition-colors line-clamp-2 leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-lime-400 text-slate-400 group-hover:text-slate-950 flex items-center justify-center transition-all shrink-0 mt-1">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Badge */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
                Updated Hourly by GameScope
              </span>
              <span className="font-mono-numeric">Oct 2026 Edition</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GAME UNIVERSES DOCK & DEDICATED SECTIONS
         ========================================================= */}
      <section className="space-y-10 pt-4 animate-enter delay-200">
        {/* Hub Navigator Bar */}
        <GameUniverseNav activeHub={activeHub} onSelectHub={setActiveHub} />

        {/* Dedicated Section 1: Call of Duty: Modern Warfare */}
        {(activeHub === 'all' || activeHub === 'cod') && (
          <CodSection
            onSelectGame={onSelectGame}
            onSelectArticle={onSelectArticle}
            onOpenTrailer={onOpenTrailer}
          />
        )}

        {/* Dedicated Section 2: Minecraft Realm */}
        {(activeHub === 'all' || activeHub === 'minecraft') && (
          <MinecraftSection
            onSelectGame={onSelectGame}
            onOpenTrailer={onOpenTrailer}
            onSelectGuide={onSelectGuideById}
          />
        )}

        {/* Dedicated Section 3: GTA & Vice City */}
        {(activeHub === 'all' || activeHub === 'gta') && (
          <GtaSection
            onSelectGame={onSelectGame}
            onOpenTrailer={onOpenTrailer}
            onSelectGuide={onSelectGuideById}
            onSelectArticle={onSelectArticle}
          />
        )}

        {/* Dedicated Section 4: Valorant & CS2 Tactical Esports */}
        {(activeHub === 'all' || activeHub === 'tactical') && (
          <TacticalEsportsSection
            onSelectGame={onSelectGame}
            onOpenTrailer={onOpenTrailer}
            onSelectGuide={onSelectGuideById}
          />
        )}
      </section>

      {/* =========================================================
          INTERACTIVE COMMUNITY POLL WIDGET
         ========================================================= */}
      <div className="animate-enter delay-250">
        <CommunityPollWidget />
      </div>

      {/* =========================================================
          SECTION B: TRENDING NEWS GRID
         ========================================================= */}
      <section className="space-y-6 animate-enter delay-300">
        <div className="flex items-center justify-between pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Trending Stories & Reports
            </h2>
          </div>
          <button
            onClick={onNavigateToNews}
            className="text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
          >
            <span>All News Stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingNewsRow.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              onSelect={onSelectArticle}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION C: POPULAR GAMES (10 Featured Titles)
         ========================================================= */}
      <section className="space-y-6 animate-enter delay-400">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-indigo-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Top 10 Popular Games Discovery
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Browse world-renowned sandbox, shooter, battle royale, and open-world classics.
            </p>
          </div>

          <button
            onClick={onNavigateToGames}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-semibold text-white border border-white/10 hover:border-indigo-500/40 transition-all self-start sm:self-auto"
          >
            <span>View All 10 Games</span>
            <ArrowRight className="w-4 h-4 text-indigo-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onSelect={onSelectGame}
              isFavorited={favoriteIds.includes(game.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION D: MOST PLAYED GAMES CHART
         ========================================================= */}
      <section className="space-y-4 animate-enter delay-500">
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              Telemetry & Metrics
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Most Played Games Popularity Matrix
            </h2>
          </div>
          <button
            onClick={onNavigateToRankings}
            className="text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
          >
            <span>Full Rankings Table</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <PopularityChart onSelectGame={onSelectGame} />
      </section>

      {/* =========================================================
          SECTION E: LATEST GAME UPDATES
         ========================================================= */}
      <section className="space-y-6 animate-enter delay-600">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Latest Game Updates & Patches
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Verified patch notes and balance changes for Minecraft, Valorant, GTA V, Fortnite, and CS2.
            </p>
          </div>

          <button
            onClick={onNavigateToUpdates}
            className="text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors self-start sm:self-auto"
          >
            <span>All Patch Notes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAME_UPDATES.slice(0, 3).map((update) => (
            <UpdateCard
              key={update.id}
              update={update}
              onOpenDetails={onOpenUpdate}
              onSelectGame={onSelectGame}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION F: UPCOMING GAMES
         ========================================================= */}
      <section className="space-y-6 animate-enter delay-700">
        <div className="flex items-center justify-between pb-3 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Upcoming Game Releases
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Confirmed release dates and monitored in-development blockbuster titles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPCOMING_GAMES.map((game) => (
            <div
              key={game.id}
              className="flex flex-col justify-between p-5 rounded-2xl bg-[#12141d]/90 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold text-indigo-400">
                    {game.genre}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      game.isVerifiedDate
                        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                        : 'text-amber-400 bg-amber-500/10 border-amber-500/30'
                    }`}
                  >
                    {game.isVerifiedDate ? 'Verified Window' : 'Prototype Estimate'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-display line-clamp-1 mb-1">
                  {game.title}
                </h3>
                <p className="text-xs text-slate-400 mb-3">by {game.developer}</p>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-4">
                  <span className="text-[11px] text-slate-400 block mb-0.5">Target Release:</span>
                  <span className="text-xs font-bold text-white font-mono-numeric">
                    {game.expectedDate}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {game.notes}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span>{game.platforms.join(', ')}</span>
                <span className="text-indigo-400 font-semibold">{game.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION G: GAMING GUIDES & STRATEGY
         ========================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Essential Gaming Guides & Strategy
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GAMING_GUIDES.map((guide) => (
            <div
              key={guide.id}
              onClick={() => onSelectGuide(guide)}
              className="group flex flex-col justify-between p-5 rounded-2xl bg-[#12141d]/90 hover:bg-[#171a26] border border-white/5 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-emerald-400">{guide.gameTitle}</span>
                  <span className="text-slate-400">{guide.difficulty}</span>
                </div>

                <h3 className="text-sm font-bold text-white font-display line-clamp-2 group-hover:text-emerald-300 transition-colors mb-2">
                  {guide.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {guide.readTime}
                </span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Walkthrough →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION H: COMMUNITY HIGHLIGHTS SHOWCASE
         ========================================================= */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Community Showcase & Builds
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Curated gaming setups, survival architecture, and fan artwork from the community.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10 self-start sm:self-auto">
            {['All', 'Gaming Setups', 'Minecraft Builds', 'Gameplay Clips', 'Fan Art'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCommunityTab(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  communityTab === cat
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunity.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-[#12141d]/90 border border-white/5 hover:border-purple-500/30 transition-all duration-300 shadow-lg flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-semibold text-purple-300 border border-purple-500/20">
                  {item.category}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                  <span>Creator: @{item.author}</span>
                  <span className="font-mono-numeric text-purple-400 font-semibold">
                    ▲ {item.upvotes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
