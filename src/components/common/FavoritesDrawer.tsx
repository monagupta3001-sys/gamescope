import React from 'react';
import { Bookmark, X, Trash2, ArrowRight, Gamepad2 } from 'lucide-react';
import { GAMES_DATA } from '../../data/gamesData';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onSelectGame: (id: string) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favoriteIds,
  onToggleFavorite,
  onSelectGame
}) => {
  if (!isOpen) return null;

  const favoriteGames = GAMES_DATA.filter((game) => favoriteIds.includes(game.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#12141c] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl relative z-10">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-indigo-400 fill-indigo-400" />
                <h3 className="text-lg font-bold text-white font-display">My Bookmarked Games</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono-numeric">
                  {favoriteGames.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="mt-6 space-y-3 overflow-y-auto max-h-[70vh] pr-1">
              {favoriteGames.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <Gamepad2 className="w-12 h-12 mx-auto text-slate-600 mb-3" />
                  <p className="text-base font-medium text-slate-300">No favorite games saved</p>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                    Click the bookmark icon on any game card to track updates, reviews, and player counts here.
                  </p>
                  <div className="mt-6">
                    <p className="text-xs text-slate-400 mb-2 font-medium">Try adding these top titles:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {GAMES_DATA.slice(0, 3).map((g) => (
                        <button
                          key={g.id}
                          onClick={() => onToggleFavorite(g.id)}
                          className="px-2.5 py-1 text-xs rounded-lg bg-white/5 hover:bg-indigo-500/20 text-slate-300 border border-white/10 transition-colors"
                        >
                          + {g.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                favoriteGames.map((game) => (
                  <div
                    key={game.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-800 shrink-0">
                      <img
                        src={game.coverUrl}
                        alt={game.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4
                        onClick={() => {
                          onSelectGame(game.id);
                          onClose();
                        }}
                        className="text-sm font-semibold text-white hover:text-indigo-400 cursor-pointer truncate"
                      >
                        {game.title}
                      </h4>
                      <p className="text-xs text-slate-400 truncate">
                        {game.genre} · Score: {game.rating}/10
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          onSelectGame(game.id);
                          onClose();
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-white/5 transition-colors"
                        title="View Game"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onToggleFavorite(game.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                        title="Remove from bookmarks"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-white/10 text-center">
            <p className="text-xs text-slate-500">
              Bookmarks are saved locally in your browser storage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
