import React, { useEffect } from 'react';
import { X, Play, Film, ExternalLink, Volume2, Shield } from 'lucide-react';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  videoId?: string;
  gameId?: string;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  videoId,
  gameId
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Curated reliable trailer IDs for top games
  const defaultVideoMap: Record<string, string> = {
    'call-of-duty': 'r72GP1PIZa0', // Modern Warfare 2 reveal
    'minecraft': 'MmB9b5njVbA', // Minecraft Update trailer
    'gta-v': 'QkkoHAzjnUs', // GTA 6 trailer 1
    'valorant': 'e_E9W2vsRbA', // Valorant gameplay trailer
    'fortnite': '2gUtfBmw86Y', // Fortnite Chapter trailer
    'counter-strike-2': 'nSE38kJMXnE' // CS2 trailer
  };

  const activeVideoId = videoId || (gameId && defaultVideoMap[gameId]) || 'r72GP1PIZa0';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-[#0e1017] border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12141d]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-lime-400 text-slate-950 flex items-center justify-center font-bold">
              <Play className="w-4 h-4 fill-slate-950" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-slate-400 truncate max-w-md">{subtitle}</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3.5 bg-[#0a0b10] border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Film className="w-3.5 h-3.5 text-lime-400" />
            GameScope Cinema Player · Official Studio Media
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Close Cinema
          </button>
        </div>
      </div>
    </div>
  );
};
