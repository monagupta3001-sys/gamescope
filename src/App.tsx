import React, { useState, useEffect } from 'react';
import { Navbar, PageRoute } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { GamesPage } from './pages/GamesPage';
import { GameDetailPage } from './pages/GameDetailPage';
import { NewsPage } from './pages/NewsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { RankingsPage } from './pages/RankingsPage';
import { UpdatesPage } from './pages/UpdatesPage';
import { SearchModal } from './components/common/SearchModal';
import { FavoritesDrawer } from './components/common/FavoritesDrawer';
import { GuideModal } from './components/common/GuideModal';
import { UpdateModal } from './components/common/UpdateModal';
import { TrailerModal } from './components/common/TrailerModal';
import { CustomCursor } from './components/common/CustomCursor';
import { NotificationToast } from './components/common/NotificationToast';
import { AuthModal } from './components/auth/AuthModal';
import { NotificationDrawer } from './components/auth/NotificationDrawer';
import { ProfileModal } from './components/auth/ProfileModal';
import { GameUpdate, GuideItem, UserProfile, GameNotification } from './types';
import { GAMING_GUIDES } from './data/rankingsData';

const INITIAL_NOTIFICATIONS: GameNotification[] = [
  {
    id: 'notif-1',
    title: 'New MW2 Gameplay Trailer Released',
    message: 'Infinity Ward reveals water ballistics and Task Force 141 stealth mechanics.',
    gameTitle: 'Call of Duty: Modern Warfare',
    gameId: 'call-of-duty',
    timestamp: '10m ago',
    read: false,
    type: 'news'
  },
  {
    id: 'notif-2',
    title: 'Minecraft 1.21 Tricky Trials Live',
    message: 'Automatic Crafter blocks and subterranean Trial Chambers are now playable in snapshot.',
    gameTitle: 'Minecraft',
    gameId: 'minecraft',
    timestamp: '2h ago',
    read: false,
    type: 'patch'
  },
  {
    id: 'notif-3',
    title: 'Valorant Patch 9.08 Deployed',
    message: 'Sunset map geometry adjusted on B Site; Omen flash timing normalized.',
    gameTitle: 'Valorant',
    gameId: 'valorant',
    timestamp: '1d ago',
    read: true,
    type: 'patch'
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // Modals & Drawers
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [activeGuide, setActiveGuide] = useState<GuideItem | null>(null);
  const [activeUpdate, setActiveUpdate] = useState<GameUpdate | null>(null);
  const [activeTrailer, setActiveTrailer] = useState<{ title: string; videoId: string } | null>(null);

  // Auth & Notification Modals
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeToastNotif, setActiveToastNotif] = useState<GameNotification | null>(null);

  // User Profile in localStorage
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('gamescope_user_profile');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Notifications in localStorage
  const [notifications, setNotifications] = useState<GameNotification[]>(() => {
    try {
      const saved = localStorage.getItem('gamescope_notifications');
      return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
    } catch {
      return INITIAL_NOTIFICATIONS;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('gamescope_user_profile', JSON.stringify(user));
      } else {
        localStorage.removeItem('gamescope_user_profile');
      }
    } catch {
      // storage unavailable
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('gamescope_notifications', JSON.stringify(notifications));
    } catch {
      // storage unavailable
    }
  }, [notifications]);

  // Bookmarks / Favorites in localStorage
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('gamescope_favorites');
      return saved ? JSON.parse(saved) : ['minecraft', 'valorant'];
    } catch {
      return ['minecraft', 'valorant'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('gamescope_favorites', JSON.stringify(favoriteIds));
    } catch {
      // storage unavailable
    }
  }, [favoriteIds]);

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    setSelectedGameId(null);
    setSelectedArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGame = (id: string) => {
    setSelectedGameId(id);
    setSelectedArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (id: string) => {
    setSelectedArticleId(id);
    setSelectedGameId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGuideById = (guideId: string) => {
    const guide = GAMING_GUIDES.find((g) => g.id === guideId);
    if (guide) {
      setActiveGuide(guide);
    }
  };

  // Auth & Notification Handlers
  const handleSignInSuccess = (newUser: UserProfile) => {
    setUser(newUser);
    const welcomeNotif: GameNotification = {
      id: `notif-${Date.now()}`,
      title: 'GameScope Dispatch Active',
      message: `Welcome, ${newUser.name}! Real-time alerts configured for ${newUser.preferences.followedGames.length} followed titles.`,
      gameTitle: 'Notification Engine',
      timestamp: 'Just now',
      read: false,
      type: 'alert'
    };
    setNotifications((prev) => [welcomeNotif, ...prev]);
    setActiveToastNotif(welcomeNotif);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  const handleUpdatePreferences = (updatedUser: UserProfile) => {
    setUser(updatedUser);
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleSimulateTestNotification = () => {
    const sampleAlerts: GameNotification[] = [
      {
        id: `sim-${Date.now()}-1`,
        title: 'Counter-Strike 2 Sub-Tick Recoil Calibration Patch',
        message: 'Valve deploys sub-tick jump throws consistency update and Mirage A-site penetration fixes.',
        gameTitle: 'Counter-Strike 2',
        gameId: 'counter-strike-2',
        timestamp: 'Just now',
        read: false,
        type: 'patch'
      },
      {
        id: `sim-${Date.now()}-2`,
        title: 'GTA 6 Vice City: New Leonida Radio Station Leaks',
        message: 'Rockstar curates over 240 tracks spanning classic 80s synth and contemporary hip-hop.',
        gameTitle: 'Grand Theft Auto V',
        gameId: 'gta-v',
        timestamp: 'Just now',
        read: false,
        type: 'news'
      },
      {
        id: `sim-${Date.now()}-3`,
        title: 'Fortnitemares Halloween Event Begins',
        message: 'Chainsaw melee weapon unvaulted; Cube Monster horde rush LTM returns to the island.',
        gameTitle: 'Fortnite',
        gameId: 'fortnite',
        timestamp: 'Just now',
        read: false,
        type: 'patch'
      }
    ];

    const randomAlert = sampleAlerts[Math.floor(Math.random() * sampleAlerts.length)];
    setNotifications((prev) => [randomAlert, ...prev]);
    setActiveToastNotif(randomAlert);

    // If browser push is supported and enabled
    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(randomAlert.title, {
          body: randomAlert.message,
          icon: '/assets/aistudio/kB7KIeE4XiJ1PObcDGzVnd0Uer0YEzllVF2yiwIfAfepMotXCRFJvakLkAZPZNFyhx-usZwJWX7uNYnh4Q9sfkFzvKTNHNgDbBEZ2OUDoiMPtgIeduu0bJV5dG7eSyE-Bxe6M1IdrvZueWDS6T3HaB4XHiPX6EBP6DtRVWA7FOoMp0_lkRdPmqhy7mtWTREv_48b214fb.jpeg'
        });
      } catch {
        // notification suppressed
      }
    }
  };

  const handleSelectNotification = (notif: GameNotification) => {
    // Mark as read
    setNotifications((prev) =>
      prev.map((n) => (n.id === notif.id ? { ...n, read: true } : n))
    );
    if (notif.gameId) {
      handleSelectGame(notif.gameId);
    } else {
      handleNavigate('updates');
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0d12] text-slate-100 antialiased selection:bg-lime-400 selection:text-slate-950">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        favoritesCount={favoriteIds.length}
        user={user}
        unreadNotificationsCount={unreadCount}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {/* Sub-view: Game Detail */}
        {selectedGameId ? (
          <GameDetailPage
            gameId={selectedGameId}
            onBack={() => setSelectedGameId(null)}
            onSelectGame={handleSelectGame}
            onSelectArticle={handleSelectArticle}
            onSelectGuide={(g) => setActiveGuide(g)}
            onOpenUpdate={(u) => setActiveUpdate(u)}
            isFavorited={favoriteIds.includes(selectedGameId)}
            onToggleFavorite={handleToggleFavorite}
          />
        ) : selectedArticleId ? (
          /* Sub-view: Article Detail */
          <ArticleDetailPage
            articleId={selectedArticleId}
            onBack={() => setSelectedArticleId(null)}
            onSelectArticle={handleSelectArticle}
            onSelectGame={handleSelectGame}
          />
        ) : currentPage === 'home' ? (
          <HomePage
            onSelectGame={handleSelectGame}
            onSelectArticle={handleSelectArticle}
            onSelectGuide={(g) => setActiveGuide(g)}
            onSelectGuideById={handleSelectGuideById}
            onOpenUpdate={(u) => setActiveUpdate(u)}
            onOpenTrailer={(title, videoId) => setActiveTrailer({ title, videoId })}
            onNavigateToGames={() => handleNavigate('games')}
            onNavigateToNews={() => handleNavigate('news')}
            onNavigateToRankings={() => handleNavigate('rankings')}
            onNavigateToUpdates={() => handleNavigate('updates')}
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
          />
        ) : currentPage === 'games' ? (
          <GamesPage
            onSelectGame={handleSelectGame}
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
          />
        ) : currentPage === 'news' ? (
          <NewsPage onSelectArticle={handleSelectArticle} />
        ) : currentPage === 'rankings' ? (
          <RankingsPage onSelectGame={handleSelectGame} />
        ) : (
          <UpdatesPage
            onOpenUpdate={(u) => setActiveUpdate(u)}
            onSelectGame={handleSelectGame}
          />
        )}
      </main>

      {/* Global Modals & Drawers */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectGame={handleSelectGame}
        onSelectArticle={handleSelectArticle}
        onSelectGuide={handleSelectGuideById}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favoriteIds={favoriteIds}
        onToggleFavorite={handleToggleFavorite}
        onSelectGame={handleSelectGame}
      />

      <GuideModal
        guide={activeGuide}
        onClose={() => setActiveGuide(null)}
      />

      <UpdateModal
        update={activeUpdate}
        onClose={() => setActiveUpdate(null)}
      />

      <TrailerModal
        isOpen={activeTrailer !== null}
        onClose={() => setActiveTrailer(null)}
        title={activeTrailer?.title || 'GameScope Cinema'}
        videoId={activeTrailer?.videoId}
      />

      {/* Auth Modal (Sign In / Register / Notification preferences setup) */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSignInSuccess={handleSignInSuccess}
      />

      {/* Notification Drawer */}
      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllRead={handleMarkAllRead}
        onClearNotifications={handleClearNotifications}
        onSelectNotification={handleSelectNotification}
        onSimulateTestNotification={handleSimulateTestNotification}
        onOpenSettings={() => {
          setIsNotificationsOpen(false);
          setIsProfileOpen(true);
        }}
        user={user}
      />

      {/* User Profile / Notification Settings Modal */}
      {user && (
        <ProfileModal
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          user={user}
          onUpdatePreferences={handleUpdatePreferences}
          onSignOut={handleSignOut}
        />
      )}

      {/* Real-time Floating Notification Toast */}
      <NotificationToast
        notification={activeToastNotif}
        onClose={() => setActiveToastNotif(null)}
        onView={(notif) => {
          setActiveToastNotif(null);
          handleSelectNotification(notif);
        }}
      />

      {/* Persistent Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
