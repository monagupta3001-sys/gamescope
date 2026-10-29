import React from 'react';
import {
  Bell,
  X,
  CheckCheck,
  Zap,
  Sparkles,
  Newspaper,
  ArrowRight,
  Trash2,
  SlidersHorizontal
} from 'lucide-react';
import { GameNotification, UserProfile } from '../../types';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: GameNotification[];
  onMarkAllRead: () => void;
  onClearNotifications: () => void;
  onSelectNotification: (notif: GameNotification) => void;
  onSimulateTestNotification: () => void;
  onOpenSettings: () => void;
  user: UserProfile | null;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllRead,
  onClearNotifications,
  onSelectNotification,
  onSimulateTestNotification,
  onOpenSettings,
  user
}) => {
  if (!isOpen) return null;

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0f1118] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl relative z-10">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-lime-400 text-slate-950 flex items-center justify-center font-bold">
                  <Bell className="w-4 h-4 fill-slate-950" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">
                    Game Dispatch Center
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Live updates for your followed games
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions Bar */}
            <div className="flex items-center justify-between py-3 border-b border-white/5 text-xs">
              <span className="font-semibold text-slate-300">
                {unreadCount > 0 ? (
                  <span className="text-lime-400 font-bold">{unreadCount} unread alerts</span>
                ) : (
                  <span className="text-slate-500">All notifications caught up</span>
                )}
              </span>

              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button
                    onClick={onMarkAllRead}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-lime-300 transition-colors"
                  >
                    <CheckCheck className="w-3.5 h-3.5" />
                    <span>Mark Read</span>
                  </button>
                )}
                <button
                  onClick={onSimulateTestNotification}
                  className="flex items-center gap-1 px-2 py-1 rounded-md bg-lime-400/10 text-lime-300 border border-lime-400/20 hover:bg-lime-400/20 text-[11px] font-bold transition-colors cursor-pointer"
                  title="Simulate incoming real-time patch alert"
                >
                  <Zap className="w-3 h-3" />
                  <span>Send Test Alert</span>
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="mt-4 space-y-2.5 overflow-y-auto max-h-[65vh] pr-1">
              {notifications.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <Bell className="w-10 h-10 mx-auto text-slate-600 mb-3" />
                  <p className="text-sm font-semibold text-white">No notifications yet</p>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                    When studios publish balance patches or major news drops for your followed games, you'll see them here.
                  </p>
                  <button
                    onClick={onSimulateTestNotification}
                    className="mt-4 px-4 py-2 rounded-xl bg-lime-400 text-slate-950 font-bold text-xs"
                  >
                    Simulate Live Patch Drop
                  </button>
                </div>
              ) : (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    onClick={() => {
                      onSelectNotification(notif);
                      onClose();
                    }}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer group ${
                      notif.read
                        ? 'bg-white/5 border-white/5 hover:border-white/10 opacity-75'
                        : 'bg-[#151926] border-lime-400/30 hover:border-lime-400/60 shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] mb-1">
                      <span className="flex items-center gap-1 font-bold text-lime-400">
                        {notif.type === 'patch' && <Sparkles className="w-3 h-3" />}
                        {notif.type === 'news' && <Newspaper className="w-3 h-3" />}
                        {notif.type === 'alert' && <Zap className="w-3 h-3" />}
                        {notif.gameTitle || 'GameScope'}
                      </span>
                      <span className="text-slate-500 font-mono-numeric">
                        {notif.timestamp}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white group-hover:text-lime-300 transition-colors leading-snug">
                      {notif.title}
                    </h4>

                    <p className="text-[11px] text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                      {notif.message}
                    </p>

                    <div className="pt-2 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Click to view details</span>
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <button
              onClick={onOpenSettings}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-lime-400" />
              <span>Notification Settings</span>
            </button>

            {notifications.length > 0 && (
              <button
                onClick={onClearNotifications}
                className="text-[11px] text-slate-500 hover:text-rose-400 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
