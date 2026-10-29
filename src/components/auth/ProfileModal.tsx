import React, { useState } from 'react';
import {
  X,
  User,
  Bell,
  Mail,
  ShieldCheck,
  LogOut,
  Save,
  CheckCircle2,
  Gamepad2
} from 'lucide-react';
import { UserProfile } from '../../types';
import { GAMES_DATA } from '../../data/gamesData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onUpdatePreferences: (updatedUser: UserProfile) => void;
  onSignOut: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  onUpdatePreferences,
  onSignOut
}) => {
  const [breakingNews, setBreakingNews] = useState(user.preferences.breakingNews);
  const [patchUpdates, setPatchUpdates] = useState(user.preferences.patchUpdates);
  const [weeklyDigest, setWeeklyDigest] = useState(user.preferences.weeklyDigest);
  const [browserPush, setBrowserPush] = useState(user.preferences.browserPush);
  const [followedGames, setFollowedGames] = useState<string[]>(user.preferences.followedGames);
  const [savedToast, setSavedToast] = useState(false);

  if (!isOpen) return null;

  const toggleGame = (gameId: string) => {
    setFollowedGames((prev) =>
      prev.includes(gameId) ? prev.filter((id) => id !== gameId) : [...prev, gameId]
    );
  };

  const handleSave = () => {
    const updated: UserProfile = {
      ...user,
      preferences: {
        breakingNews,
        patchUpdates,
        weeklyDigest,
        browserPush,
        followedGames
      }
    };
    onUpdatePreferences(updated);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg overflow-y-auto max-h-[90vh] rounded-3xl bg-[#0f1118] border border-white/10 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div className="flex items-center gap-4 pb-6 border-b border-white/10">
          <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-800 border-2 border-lime-400 shadow-lg shadow-lime-400/20">
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white font-display">{user.name}</h3>
              <span className="px-2 py-0.5 rounded-full bg-lime-400/20 text-lime-300 font-mono text-[10px] font-bold">
                OPERATIVE
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">{user.handle} · {user.email}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Member since {user.joinedDate}</p>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Bell className="w-4 h-4 text-lime-400" />
              <span>Notification Dispatch Preferences</span>
            </h4>
          </div>

          <div className="space-y-2 text-xs">
            <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer">
              <span className="text-slate-200 font-medium">Breaking Game News Alerts</span>
              <input
                type="checkbox"
                checked={breakingNews}
                onChange={(e) => setBreakingNews(e.target.checked)}
                className="rounded accent-lime-400 w-4 h-4 cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer">
              <span className="text-slate-200 font-medium">Game Patch Notes & Balance Drops</span>
              <input
                type="checkbox"
                checked={patchUpdates}
                onChange={(e) => setPatchUpdates(e.target.checked)}
                className="rounded accent-lime-400 w-4 h-4 cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer">
              <span className="text-slate-200 font-medium">Friday Editorial Weekly Digest</span>
              <input
                type="checkbox"
                checked={weeklyDigest}
                onChange={(e) => setWeeklyDigest(e.target.checked)}
                className="rounded accent-lime-400 w-4 h-4 cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer">
              <span className="text-slate-200 font-medium">Browser Desktop Web Push</span>
              <input
                type="checkbox"
                checked={browserPush}
                onChange={(e) => setBrowserPush(e.target.checked)}
                className="rounded accent-lime-400 w-4 h-4 cursor-pointer"
              />
            </label>
          </div>

          {/* Followed Games */}
          <div className="pt-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2 flex items-center gap-1.5">
              <Gamepad2 className="w-3.5 h-3.5 text-lime-400" />
              <span>Followed Game Franchises ({followedGames.length})</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {GAMES_DATA.map((g) => {
                const isFollowed = followedGames.includes(g.id);
                return (
                  <button
                    key={g.id}
                    onClick={() => toggleGame(g.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isFollowed
                        ? 'bg-lime-400 text-slate-950 font-bold'
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

        {/* Buttons / Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={() => {
              onSignOut();
              onClose();
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 text-xs font-bold transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>

          <div className="flex items-center gap-2">
            {savedToast && (
              <span className="text-xs text-lime-400 flex items-center gap-1 font-semibold animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Saved!
              </span>
            )}
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-xs shadow-lg shadow-lime-400/20 transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Preferences</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
