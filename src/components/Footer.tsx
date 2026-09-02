import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              TD
            </div>
            <div>
              <span className="block font-bold text-sm text-slate-900">
                {PORTFOLIO_DATA.personalInfo.name}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {PORTFOLIO_DATA.personalInfo.title}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href={PORTFOLIO_DATA.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={PORTFOLIO_DATA.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright & Scroll Back to Top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-500">
              © 2026 {PORTFOLIO_DATA.personalInfo.name}. All rights reserved.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
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

