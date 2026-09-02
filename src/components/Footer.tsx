import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#F1F5F9] border-t border-[#CBD5E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-2.5 text-left">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              TD
            </div>
            <div>
              <span className="block font-bold text-xs sm:text-sm text-[#0F172A]">
                {PORTFOLIO_DATA.personalInfo.name}
              </span>
              <span className="text-[11px] text-[#64748B] font-medium">
                {PORTFOLIO_DATA.personalInfo.title}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-xs sm:text-sm font-medium">
            <a
              href={PORTFOLIO_DATA.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] hover:text-[#0F172A] transition-colors"
            >
              GitHub
            </a>
            <span className="text-[#CBD5E1]">•</span>
            <a
              href={PORTFOLIO_DATA.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#CBD5E1]">•</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
              className="text-[#475569] hover:text-blue-600 transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright & Scroll Back to Top */}
          <div className="flex items-center gap-3">
            <p className="text-xs text-[#64748B]">
              © 2026 {PORTFOLIO_DATA.personalInfo.name}. All rights reserved.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-[#CBD5E1] bg-white text-[#475569] hover:bg-slate-50 hover:text-[#0F172A] transition-colors shadow-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

