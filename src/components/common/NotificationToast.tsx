import React, { useEffect } from 'react';
import { Bell, X, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { GameNotification } from '../../types';

interface NotificationToastProps {
  notification: GameNotification | null;
  onClose: () => void;
  onView: (notification: GameNotification) => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({
  notification,
  onClose,
  onView
}) => {
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => {
      onClose();
    }, 6000);
    return () => clearTimeout(timer);
  }, [notification, onClose]);

  if (!notification) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9990] max-w-sm w-full animate-enter-scale">
      <div className="p-4 rounded-2xl bg-[#0f1118]/95 backdrop-blur-xl border border-lime-400/40 shadow-2xl shadow-lime-950/40 relative overflow-hidden group">
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-400 via-indigo-500 to-lime-400" />

        <div className="flex items-start justify-between gap-3">
          <div className="w-8 h-8 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-lime-400/30">
            <Zap className="w-4 h-4 fill-slate-950" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-lime-400 uppercase tracking-wider mb-0.5">
              <span>{notification.gameTitle || 'GameScope Live Alert'}</span>
              <span>·</span>
              <span className="text-slate-400">Just Now</span>
            </div>

            <h4 className="text-xs font-bold text-white truncate">
              {notification.title}
            </h4>

            <p className="text-[11px] text-slate-300 line-clamp-2 mt-0.5 leading-relaxed">
              {notification.message}
            </p>

            <div className="pt-2 mt-2 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => onView(notification)}
                className="text-[11px] font-bold text-lime-400 hover:text-lime-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Read Full Update</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
