import React, { useState } from 'react';
import {
  Gamepad2,
  Search,
  Bookmark,
  Menu,
  X,
  Compass,
  Newspaper,
  Trophy,
  RefreshCw,
  Bell,
  LogIn,
  User
} from 'lucide-react';
import { UserProfile } from '../../types';

export type PageRoute = 'home' | 'news' | 'games' | 'rankings' | 'updates';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenSearch: () => void;
  onOpenFavorites: () => void;
  favoritesCount: number;
  user: UserProfile | null;
  unreadNotificationsCount: number;
  onOpenAuth: () => void;
  onOpenNotifications: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenFavorites,
  favoritesCount,
  user,
  unreadNotificationsCount,
  onOpenAuth,
  onOpenNotifications,
  onOpenProfile
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageRoute; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Compass className="w-4 h-4" /> },
    { id: 'news', label: 'News', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'games', label: 'Games', icon: <Gamepad2 className="w-4 h-4" /> },
    { id: 'rankings', label: 'Rankings', icon: <Trophy className="w-4 h-4" /> },
    { id: 'updates', label: 'Updates', icon: <RefreshCw className="w-4 h-4" /> }
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0b10]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-lime-400 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-lime-400/20 group-hover:scale-105 transition-transform duration-200">
            <Gamepad2 className="w-5 h-5 text-slate-950 font-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white font-display flex items-center gap-1">
              Game<span className="text-lime-400">Scope</span>
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-white bg-white/10 shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-lime-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all text-xs font-medium cursor-pointer"
            title="Search (Esc)"
          >
            <Search className="w-4 h-4 text-lime-400" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden lg:inline px-1.5 py-0.5 text-[10px] rounded bg-black/40 text-slate-400 border border-white/5">
              ⌘K
            </kbd>
          </button>

          {/* Bookmarks / Favorites Trigger */}
          <button
            onClick={onOpenFavorites}
            className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            title="Bookmarked Games"
          >
            <Bookmark className="w-4 h-4" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center font-mono-numeric">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Notifications Bell (for signed in user) */}
          {user?.isSignedIn ? (
            <button
              onClick={onOpenNotifications}
              className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Game News & Patch Notifications"
            >
              <Bell className="w-4 h-4 text-lime-400" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-lime-400 text-slate-950 text-[10px] font-extrabold flex items-center justify-center font-mono-numeric shadow-md shadow-lime-400/40 animate-pulse">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Turn on Game Notifications"
            >
              <Bell className="w-4 h-4 text-slate-400" />
            </button>
          )}

          {/* Sign In Button OR User Avatar */}
          {user?.isSignedIn ? (
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-2 p-1 pl-1.5 pr-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer group"
              title="User Account & Notification Settings"
            >
              <div className="w-6 h-6 rounded-lg overflow-hidden bg-slate-800 border border-lime-400 shrink-0">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-bold text-white group-hover:text-lime-300 hidden sm:inline max-w-[100px] truncate">
                {user.name}
              </span>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-xs shadow-md shadow-lime-400/20 hover:scale-102 transition-all cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0e1017] px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-lime-400 text-slate-950 font-bold'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-white/10">
            {user?.isSignedIn ? (
              <div className="flex items-center justify-between px-2">
                <button
                  onClick={() => {
                    onOpenProfile();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-xs font-bold text-white"
                >
                  <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-lg" />
                  <span>{user.name} (Settings)</span>
                </button>
                <button
                  onClick={() => {
                    onOpenNotifications();
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-bold text-lime-400"
                >
                  Alerts ({unreadNotificationsCount})
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  onOpenAuth();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-lime-400 text-slate-950 font-black text-xs text-center"
              >
                Sign In to Enable Game Alerts
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
