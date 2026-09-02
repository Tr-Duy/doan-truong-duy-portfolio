import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 68;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? darkMode
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-md shadow-black/20'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
          : darkMode
          ? 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/40'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Identity */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 focus:outline-none group"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm group-hover:border-cyan-500/40 transition-colors">
            TD
          </div>
          <div className="flex flex-col text-left">
            <span className={`font-bold text-sm tracking-tight leading-tight ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              {PORTFOLIO_DATA.personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-cyan-500 font-medium leading-tight">
              {PORTFOLIO_DATA.personalInfo.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? darkMode
                      ? 'text-cyan-400 bg-cyan-500/10 font-semibold'
                      : 'text-cyan-700 bg-cyan-50 font-semibold'
                    : darkMode
                    ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Controls: Socials + Theme + CV */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* GitHub link */}
          <a
            href={PORTFOLIO_DATA.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-colors border ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn link */}
          <a
            href={PORTFOLIO_DATA.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-colors border ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-slate-300'
            }`}
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setDarkMode(prev => !prev)}
            className={`p-2 rounded-lg transition-colors border ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-amber-600 hover:border-slate-300'
            }`}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Download CV Button */}
          <a
            href={PORTFOLIO_DATA.personalInfo.cvPath}
            download="CV-Doan-Truong-Duy.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm active:scale-95 ml-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setDarkMode(prev => !prev)}
            className={`p-2 rounded-lg transition-colors border ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg border transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slideout Menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-b animate-fade-in ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="px-4 pt-2 pb-5 space-y-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? darkMode
                        ? 'text-cyan-400 bg-cyan-500/10 font-semibold'
                        : 'text-cyan-700 bg-cyan-50 font-semibold'
                      : darkMode
                      ? 'text-slate-300 hover:bg-slate-900'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-800/40 flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_DATA.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border text-xs font-mono ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border text-xs font-mono ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>

              <a
                href={PORTFOLIO_DATA.personalInfo.cvPath}
                download="CV-Doan-Truong-Duy.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
