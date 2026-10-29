import React, { useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Star,
  CheckCircle2,
  Calendar,
  Layers,
  Cpu,
  Monitor,
  Gamepad2,
  Sparkles,
  BookOpen,
  Newspaper,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { GAMES_DATA } from '../data/gamesData';
import { GAME_UPDATES } from '../data/updatesData';
import { NEWS_ARTICLES } from '../data/newsData';
import { GAMING_GUIDES } from '../data/rankingsData';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { GameUpdate, GuideItem } from '../types';

interface GameDetailPageProps {
  gameId: string;
  onBack: () => void;
  onSelectGame: (id: string) => void;
  onSelectArticle: (id: string) => void;
  onSelectGuide: (guide: GuideItem) => void;
  onOpenUpdate: (update: GameUpdate) => void;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
}

type TabKey = 'overview' | 'mechanics' | 'editions' | 'specs' | 'guides' | 'updates';

export const GameDetailPage: React.FC<GameDetailPageProps> = ({
  gameId,
  onBack,
  onSelectGame,
  onSelectArticle,
  onSelectGuide,
  onOpenUpdate,
  isFavorited,
  onToggleFavorite
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');

  const game = GAMES_DATA.find((g) => g.id === gameId) || GAMES_DATA[0];

  // Updates for this specific game
  const gameUpdates = GAME_UPDATES.filter((u) => u.gameId === game.id);

  // Related news stories for this game
  const relatedNews = NEWS_ARTICLES.filter(
    (a) => a.relatedGameId === game.id || a.title.toLowerCase().includes(game.title.toLowerCase())
  );

  // Guides for this game
  const gameGuides = GAMING_GUIDES.filter(
    (g) => g.gameId === game.id || g.gameTitle.toLowerCase().includes(game.title.toLowerCase())
  );

  const tabs: { key: TabKey; label: string; count?: number }[] = [
    { key: 'overview', label: 'Overview & World' },
    { key: 'mechanics', label: 'Gameplay & Mechanics' },
    { key: 'editions', label: 'Editions & Modes', count: game.overview.editionsAndModes?.length },
    { key: 'specs', label: 'System Requirements' },
    { key: 'guides', label: 'Strategy Guides', count: gameGuides.length },
    { key: 'updates', label: 'Patches & History', count: gameUpdates.length }
  ];

  return (
    <div className="space-y-10 animate-enter">
      {/* Back Button & Breadcrumbs */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Games Directory</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
          <span>GameScope</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span>Games</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-medium">{game.title}</span>
        </div>
      </div>

      {/* Hero Header Presentation */}
      <div className="relative rounded-3xl overflow-hidden bg-[#12141d] border border-white/10 shadow-2xl">
        <div className="aspect-[21/9] min-h-[300px] sm:min-h-[380px] w-full relative">
          <ImageWithFallback
            src={game.bannerUrl || game.coverUrl}
            alt={game.title}
            fallbackTitle={game.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-[#0e1017]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1017]/90 via-[#0e1017]/40 to-transparent" />

          {/* Floating Action / Bookmark */}
          <div className="absolute top-6 right-6 flex items-center gap-3">
            <button
              onClick={() => onToggleFavorite(game.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md text-xs font-bold transition-all ${
                isFavorited
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40'
                  : 'bg-black/60 text-slate-200 hover:text-white hover:bg-black/80 border border-white/10'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isFavorited ? 'fill-white' : ''}`} />
              <span>{isFavorited ? 'Bookmarked' : 'Add to Favorites'}</span>
            </button>
          </div>

          {/* Header Content Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white font-bold font-mono-numeric">
                Rank #{game.rank}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-indigo-300 font-semibold border border-indigo-500/20">
                {game.genre}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-slate-300 border border-white/10">
                {game.esrb}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-amber-300 font-bold flex items-center gap-1 border border-amber-500/20 font-mono-numeric">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                {game.rating.toFixed(1)} / 10
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
              {game.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {game.shortDescription}
            </p>

            {/* Quick Metadata Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div>
                <span className="text-slate-500">Developer: </span>
                <span className="text-white font-medium">{game.developer}</span>
              </div>
              <div>
                <span className="text-slate-500">Publisher: </span>
                <span className="text-white font-medium">{game.publisher}</span>
              </div>
              <div>
                <span className="text-slate-500">Initial Release: </span>
                <span className="text-white font-medium">{game.releaseYear}</span>
              </div>
              <div>
                <span className="text-slate-500">Platforms: </span>
                <span className="text-white font-medium">{game.platforms.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation Ribbon */}
        <div className="flex items-center gap-1 overflow-x-auto p-2 border-t border-white/10 bg-[#0a0b10] px-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === tab.key
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && tab.count > 0 && (
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono-numeric ${
                    activeTab === tab.key
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tab Panels Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols): Active Tab Body */}
        <div className="lg:col-span-8 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="rounded-2xl bg-[#12141d]/90 border border-white/5 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white font-display mb-3">
                  World Narrative & Setting
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {game.overview.storyAndWorld}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <h3 className="text-lg font-bold text-white font-display mb-3">
                  Core Gameplay Loop
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {game.overview.coreGameplay}
                </p>
              </div>

              {/* Key Features List */}
              <div className="pt-6 border-t border-white/5">
                <h3 className="text-base font-bold text-white font-display mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Key Hallmarks & Features</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {game.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MECHANICS */}
          {activeTab === 'mechanics' && (
            <div className="rounded-2xl bg-[#12141d]/90 border border-white/5 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white font-display mb-2">
                  Signature Systems & Depth
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  What elevates this game beyond competitors in its genre.
                </p>
              </div>

              <div className="space-y-4">
                {game.overview.specialMechanics.map((mech, idx) => {
                  const parts = mech.split(':');
                  const title = parts[0];
                  const desc = parts.slice(1).join(':');
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5"
                    >
                      <h4 className="text-sm font-bold text-indigo-300 font-display">
                        {title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {desc.trim()}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: EDITIONS & MODES */}
          {activeTab === 'editions' && (
            <div className="rounded-2xl bg-[#12141d]/90 border border-white/5 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white font-display mb-2">
                  Available Editions & Play Modes
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Understanding different versions, cross-play rules, and distinct rule sets.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {game.overview.editionsAndModes?.map((mode, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white font-display mb-2 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-indigo-400" />
                        <span>{mode.title}</span>
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {mode.description}
                      </p>
                    </div>
                  </div>
                )) || (
                  <p className="text-xs text-slate-400">
                    Standard unified edition with ongoing live-service seasons.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: SYSTEM REQUIREMENTS */}
          {activeTab === 'specs' && (
            <div className="rounded-2xl bg-[#12141d]/90 border border-white/5 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white font-display mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                  <span>PC Hardware Benchmarks & Specifications</span>
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Recommended configuration for stable frame times and target 60+ FPS.
                </p>
              </div>

              {game.overview.systemRequirements ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Minimum */}
                  <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-3">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block pb-2 border-b border-white/5">
                      Minimum Specifications (30 FPS)
                    </span>
                    <ul className="text-xs space-y-2 text-slate-300">
                      <li><strong>OS:</strong> {game.overview.systemRequirements.minimum.os}</li>
                      <li><strong>CPU:</strong> {game.overview.systemRequirements.minimum.cpu}</li>
                      <li><strong>GPU:</strong> {game.overview.systemRequirements.minimum.gpu}</li>
                      <li><strong>RAM:</strong> {game.overview.systemRequirements.minimum.ram}</li>
                      <li><strong>Storage:</strong> {game.overview.systemRequirements.minimum.storage}</li>
                    </ul>
                  </div>

                  {/* Recommended */}
                  <div className="p-5 rounded-xl bg-black/40 border border-indigo-500/20 space-y-3">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block pb-2 border-b border-white/5">
                      Recommended (60 - 144+ FPS)
                    </span>
                    <ul className="text-xs space-y-2 text-slate-300">
                      <li><strong>OS:</strong> {game.overview.systemRequirements.recommended.os}</li>
                      <li><strong>CPU:</strong> {game.overview.systemRequirements.recommended.cpu}</li>
                      <li><strong>GPU:</strong> {game.overview.systemRequirements.recommended.gpu}</li>
                      <li><strong>RAM:</strong> {game.overview.systemRequirements.recommended.ram}</li>
                      <li><strong>Storage:</strong> {game.overview.systemRequirements.recommended.storage}</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-400">
                  Hardware requirements scale across standard current-generation PC and console hardware.
                </p>
              )}
            </div>
          )}

          {/* TAB 5: GUIDES */}
          {activeTab === 'guides' && (
            <div className="rounded-2xl bg-[#12141d]/90 border border-white/5 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white font-display mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  <span>GameScope Strategy Guides for {game.title}</span>
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Curated tutorials, progression paths, and tactical breakdowns.
                </p>
              </div>

              {gameGuides.length > 0 ? (
                <div className="space-y-3">
                  {gameGuides.map((guide) => (
                    <div
                      key={guide.id}
                      onClick={() => onSelectGuide(guide)}
                      className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer flex items-center justify-between gap-4 group"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-xs text-emerald-400 mb-1">
                          <span className="font-semibold">{guide.category}</span>
                          <span>·</span>
                          <span className="text-slate-400">{guide.difficulty}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {guide.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                          {guide.excerpt}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-emerald-400 shrink-0 group-hover:translate-x-1 transition-transform">
                        Read →
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400">
                  New community strategy guides for {game.title} are currently in editorial review.
                </p>
              )}
            </div>
          )}

          {/* TAB 6: UPDATES */}
          {activeTab === 'updates' && (
            <div className="rounded-2xl bg-[#12141d]/90 border border-white/5 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white font-display mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  <span>Update History & Changelogs</span>
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Verified balance changes and patch logs directly from studio releases.
                </p>
              </div>

              {gameUpdates.length > 0 ? (
                <div className="space-y-4">
                  {gameUpdates.map((update) => (
                    <div
                      key={update.id}
                      className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-semibold text-indigo-400">
                          {update.version} · {update.date}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                          {update.category}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white font-display">
                        {update.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {update.shortDescription}
                      </p>
                      <button
                        onClick={() => onOpenUpdate(update)}
                        className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        View Full Detailed Changelog →
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400">
                  No critical balance patches reported for {game.title} in the last 14 days.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right Sidebar (4 cols): Related Articles & Quick Info */}
        <div className="lg:col-span-4 space-y-6">
          {/* Related News Card */}
          <div className="rounded-2xl bg-[#12141c]/90 border border-white/10 p-5 shadow-xl space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Newspaper className="w-4 h-4 text-indigo-400" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                Related Stories & Coverage
              </h3>
            </div>

            {relatedNews.length > 0 ? (
              <div className="space-y-3">
                {relatedNews.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => onSelectArticle(art.id)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer group"
                  >
                    <span className="text-[10px] font-semibold text-indigo-400">
                      {art.category} · {art.readTime}
                    </span>
                    <h4 className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2 mt-1">
                      {art.title}
                    </h4>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">
                General coverage for this title is cataloged in the News directory.
              </p>
            )}
          </div>

          {/* Other Popular Games */}
          <div className="rounded-2xl bg-[#12141c]/90 border border-white/10 p-5 shadow-xl space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-display pb-3 border-b border-white/10">
              Other Popular Titles
            </h3>
            <div className="space-y-2">
              {GAMES_DATA.filter((g) => g.id !== game.id).slice(0, 4).map((other) => (
                <div
                  key={other.id}
                  onClick={() => onSelectGame(other.id)}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-800 shrink-0">
                    <img
                      src={other.coverUrl}
                      alt={other.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-white group-hover:text-indigo-400 truncate">
                      {other.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">{other.genre}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
