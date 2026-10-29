import React, { useState } from 'react';
import { Gamepad2, Send, CheckCircle2, Shield, Heart, ExternalLink } from 'lucide-react';
import { PageRoute } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [modalPolicy, setModalPolicy] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-[#08090d] border-t border-white/5 pt-16 pb-12 mt-20 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Editorial Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 cursor-pointer group w-fit"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Gamepad2 className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Game<span className="text-indigo-400">Scope</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              GameScope is an independent gaming media prototype delivering game discovery catalogs, patch updates, verified release dates, and popularity data insights.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <Shield className="w-3.5 h-3.5 text-indigo-400" />
              <span>Independent Editorial · Prototype Verification Active</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('games')}
                  className="hover:text-white transition-colors"
                >
                  Games Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="hover:text-white transition-colors"
                >
                  Editorial & News
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rankings')}
                  className="hover:text-white transition-colors"
                >
                  Popularity Rankings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('updates')}
                  className="hover:text-white transition-colors"
                >
                  Patch Notes & Updates
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Editorial Policy
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setModalPolicy('editorial')}
                  className="hover:text-white transition-colors"
                >
                  Editorial Guidelines
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalPolicy('metrics')}
                  className="hover:text-white transition-colors"
                >
                  Data & Rankings Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalPolicy('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Notice
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalPolicy('contact')}
                  className="hover:text-white transition-colors"
                >
                  Press & Contact Team
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Bulletin */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Weekly Patch Digest
            </h4>
            <p className="text-xs text-slate-400">
              Get the top 5 patch notes and game releases in your inbox every Friday.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center justify-center transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed! Welcome to GameScope Weekly.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 GameScope Gaming Media. Frontend Prototype Edition.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Discord Community</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Twitch Channel</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">YouTube Gaming</span>
          </div>
        </div>
      </div>

      {/* Policy / Contact Modal */}
      {modalPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl bg-[#12141c] border border-white/10 p-6 space-y-4">
            <h3 className="text-lg font-bold text-white font-display">
              {modalPolicy === 'editorial' && 'GameScope Editorial Standards'}
              {modalPolicy === 'metrics' && 'Rankings & Data Methodology'}
              {modalPolicy === 'privacy' && 'Privacy & Cookie Policy'}
              {modalPolicy === 'contact' && 'Contact GameScope Editorial'}
            </h3>
            <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
              {modalPolicy === 'editorial' && (
                <>
                  <p>
                    GameScope is committed to factual, independent gaming journalism. All reviews, guides, and patch breakdowns are produced by knowledgeable gaming enthusiasts without publisher sponsorship influence.
                  </p>
                  <p>
                    Whenever illustrative data or speculative release windows are discussed, GameScope explicitly marks them as unconfirmed or prototype estimates.
                  </p>
                </>
              )}
              {modalPolicy === 'metrics' && (
                <>
                  <p>
                    The GameScope Popularity Matrix aggregates public concurrency benchmarks, streaming metrics, and estimated monthly active accounts into a normalized composite score.
                  </p>
                  <p>
                    All prototype rankings are clearly labelled as illustrative market models designed for UI demonstration.
                  </p>
                </>
              )}
              {modalPolicy === 'privacy' && (
                <>
                  <p>
                    GameScope Prototype stores user preferences (such as bookmarked games and UI filters) locally within your device browser storage (`localStorage`).
                  </p>
                  <p>
                    No personal data, telemetry trackers, or profiling cookies are harvested or sold to third-party ad networks.
                  </p>
                </>
              )}
              {modalPolicy === 'contact' && (
                <>
                  <p>
                    Have a news lead, verified patch note, or feedback on GameScope? Reach our prototype team:
                  </p>
                  <p className="font-mono text-indigo-400">editorial@gamescope-media.io</p>
                  <p>Press kits and review access requests are processed within 24 business hours.</p>
                </>
              )}
            </div>
            <div className="pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setModalPolicy(null)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
