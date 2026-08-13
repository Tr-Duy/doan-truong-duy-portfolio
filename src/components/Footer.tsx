import React from 'react';
import { ArrowUp, Server } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t transition-colors ${
      darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <span className={`block font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {PORTFOLIO_DATA.personalInfo.name}
              </span>
              <span className="text-xs font-mono text-cyan-400">
                {PORTFOLIO_DATA.personalInfo.title}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm font-mono">
            <a
              href={PORTFOLIO_DATA.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-cyan-400 transition-colors ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={PORTFOLIO_DATA.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-cyan-400 transition-colors ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              LinkedIn
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
              className={`hover:text-cyan-400 transition-colors ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Email
            </a>
          </div>

          {/* Copyright & Scroll Back to Top */}
          <div className="flex items-center gap-4">
            <p className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              © 2026 {PORTFOLIO_DATA.personalInfo.name}. All rights reserved.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className={`p-2 rounded-lg border transition-colors ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40'
                  : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-cyan-600'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
