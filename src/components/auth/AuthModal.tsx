import React, { useState } from 'react';
import {
  X,
  LogIn,
  UserPlus,
  Bell,
  Mail,
  Lock,
  User,
  ShieldCheck,
  CheckCircle2,
  Gamepad2,
  Sparkles,
  Zap
} from 'lucide-react';
import { UserProfile, NotificationPreferences } from '../../types';
import { GAMES_DATA } from '../../data/gamesData';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignInSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSignInSuccess
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // Notification toggles
  const [breakingNews, setBreakingNews] = useState(true);
  const [patchUpdates, setPatchUpdates] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [browserPush, setBrowserPush] = useState(false);
  const [followedGames, setFollowedGames] = useState<string[]>([
    'minecraft',
    'call-of-duty',
    'valorant',
    'gta-v'
  ]);

  if (!isOpen) return null;

  const toggleFollowGame = (gameId: string) => {
    setFollowedGames((prev) =>
      prev.includes(gameId) ? prev.filter((id) => id !== gameId) : [...prev, gameId]
    );
  };

  const handleRequestPush = async () => {
    if ('Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          setBrowserPush(true);
        } else {
          setBrowserPush(false);
        }
      } catch {
        setBrowserPush(true); // fallback in prototype mode
      }
    } else {
      setBrowserPush(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userHandle = name ? name.toLowerCase().replace(/\s+/g, '_') : 'gamer_' + Math.floor(Math.random() * 1000);
    const displayName = name.trim() || (email ? email.split('@')[0] : 'SpectreOperator');

    const newUser: UserProfile = {
      name: displayName,
      handle: `@${userHandle}`,
      email: email || `${userHandle}@gamescope.io`,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=120&auto=format&fit=crop',
      isSignedIn: true,
      joinedDate: 'October 2026',
      preferences: {
        breakingNews,
        patchUpdates,
        weeklyDigest,
        browserPush,
        followedGames
      }
    };

    onSignInSuccess(newUser);
    onClose();
  };

  const handleInstantDemoLogin = (presetName: string, presetAvatar: string) => {
    const newUser: UserProfile = {
      name: presetName,
      handle: `@${presetName.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
      email: `${presetName.toLowerCase().replace(/[^a-z0-9]/g, '')}@gamescope.io`,
      avatar: presetAvatar,
      isSignedIn: true,
      joinedDate: 'October 2026',
      preferences: {
        breakingNews: true,
        patchUpdates: true,
        weeklyDigest: true,
        browserPush: true,
        followedGames: ['minecraft', 'call-of-duty', 'valorant', 'gta-v', 'counter-strike-2']
      }
    };

    onSignInSuccess(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg overflow-y-auto max-h-[90vh] rounded-3xl bg-[#0f1118] border border-white/10 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center font-black">
            <Bell className="w-4 h-4 fill-slate-950" />
          </div>
          <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">
            GameScope Dispatch Network
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-white font-display">
          {mode === 'signin' ? 'Sign In for Live Game News' : 'Create Free GameScope Account'}
        </h2>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          Stay on the frontline with real-time patch alerts, verified studio updates, and breaking gaming intel tailored to your favorite titles.
        </p>

        {/* Instant 1-Click Demo Profiles (For effortless testing) */}
        <div className="my-5 p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-white flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-lime-400" />
              1-Click Demo Profiles:
            </span>
            <span className="text-[10px] text-lime-300">Instant Access</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() =>
                handleInstantDemoLogin(
                  'GhostOperative_141',
                  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=120&auto=format&fit=crop'
                )
              }
              className="p-2 rounded-xl bg-white/5 hover:bg-lime-400/20 text-left transition-colors border border-white/5 hover:border-lime-400/40 group cursor-pointer"
            >
              <p className="text-xs font-bold text-white group-hover:text-lime-300 truncate">
                GhostOperative_141
              </p>
              <p className="text-[10px] text-slate-400">COD & Tactical Shooters</p>
            </button>

            <button
              onClick={() =>
                handleInstantDemoLogin(
                  'VoxelCrafter_99',
                  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=120&auto=format&fit=crop'
                )
              }
              className="p-2 rounded-xl bg-white/5 hover:bg-emerald-400/20 text-left transition-colors border border-white/5 hover:border-emerald-400/40 group cursor-pointer"
            >
              <p className="text-xs font-bold text-white group-hover:text-emerald-300 truncate">
                VoxelCrafter_99
              </p>
              <p className="text-[10px] text-slate-400">Minecraft & Sandbox</p>
            </button>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-black/40 border border-white/10 mb-5">
          <button
            onClick={() => setMode('signin')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              mode === 'signin'
                ? 'bg-lime-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign In with Email
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              mode === 'signup'
                ? 'bg-lime-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            New Account
          </button>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Gamer Tag / Display Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. ApexPredator, NeonRider"
                  required={mode === 'signup'}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>
          </div>

          {/* Notification Preferences Sub-Panel */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Configure Notification Alerts
            </span>

            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                <input
                  type="checkbox"
                  checked={breakingNews}
                  onChange={(e) => setBreakingNews(e.target.checked)}
                  className="rounded accent-lime-400 w-4 h-4 cursor-pointer"
                />
                <span className="text-slate-200 font-medium">
                  Breaking Game News & Major Releases
                </span>
              </label>

              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                <input
                  type="checkbox"
                  checked={patchUpdates}
                  onChange={(e) => setPatchUpdates(e.target.checked)}
                  className="rounded accent-lime-400 w-4 h-4 cursor-pointer"
                />
                <span className="text-slate-200 font-medium">
                  Verified Studio Patch Notes & Weapon Balances
                </span>
              </label>

              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                <input
                  type="checkbox"
                  checked={weeklyDigest}
                  onChange={(e) => setWeeklyDigest(e.target.checked)}
                  className="rounded accent-lime-400 w-4 h-4 cursor-pointer"
                />
                <span className="text-slate-200 font-medium">
                  GameScope Friday Digest (Weekly Top 5 Stories)
                </span>
              </label>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-lime-950/20 border border-lime-400/20">
                <span className="text-slate-200 font-medium text-xs">
                  Browser Desktop Notifications
                </span>
                <button
                  type="button"
                  onClick={handleRequestPush}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                    browserPush
                      ? 'bg-lime-400 text-slate-950'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {browserPush ? '✓ Enabled' : 'Enable Push'}
                </button>
              </div>
            </div>

            {/* Follow Games for Alerts */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block mb-1.5 font-medium">
                Choose Games to Receive Patch Alerts:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {GAMES_DATA.slice(0, 6).map((g) => {
                  const isFollowed = followedGames.includes(g.id);
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => toggleFollowGame(g.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                        isFollowed
                          ? 'bg-lime-400 text-slate-950'
                          : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/5'
                      }`}
                    >
                      {isFollowed ? `✓ ${g.title}` : `+ ${g.title}`}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-sm shadow-xl shadow-lime-400/20 transition-all hover:scale-102 cursor-pointer mt-4"
          >
            {mode === 'signin' ? 'Sign In & Activate Alerts' : 'Complete Registration'}
          </button>
        </form>

        <div className="mt-4 pt-3 border-t border-white/5 text-center">
          <p className="text-[11px] text-slate-500">
            GameScope respects your inbox. No spam. You can manage or disable alert frequencies anytime in your profile.
          </p>
        </div>
      </div>
    </div>
  );
};
