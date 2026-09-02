import React from 'react';
import { ArrowRight, Download, MapPin, CheckCircle2, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 68;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-14 sm:pt-12 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Info Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Open to Internship / Fresher / Junior roles</span>
            </div>

            {/* Name & Job Title */}
            <div className="space-y-1.5">
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {PORTFOLIO_DATA.personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tracking-tight">
                {PORTFOLIO_DATA.personalInfo.title}
              </p>
            </div>

            {/* Concise Recruiter Summary */}
            <p className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Final-year Information Technology student at <strong className="font-semibold text-cyan-400">Saigon Technology University</strong> with <strong className="font-semibold">6 months Backend Developer Intern experience</strong>. Specializing in building secure, scalable RESTful APIs and robust database architectures.
            </p>

            {/* Core Tech Stack Inline */}
            <div className="pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-mono font-semibold uppercase tracking-wider mr-1 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Core Stack:
                </span>
                {PORTFOLIO_DATA.heroHighlights.map((tech) => (
                  <span
                    key={tech}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${
                      darkMode
                        ? 'bg-slate-900 text-slate-200 border-slate-800'
                        : 'bg-slate-100 text-slate-800 border-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons & Links */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => handleScrollToSection(e, 'projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.cvPath}
                download="CV-Doan-Truong-Duy.pdf"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border transition-colors ${
                  darkMode
                    ? 'bg-slate-900 text-slate-200 border-slate-700 hover:border-cyan-400 hover:text-cyan-400'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-cyan-500 hover:text-cyan-600 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                  darkMode
                    ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white hover:border-slate-700'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-900 hover:border-slate-300'
                }`}
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                  darkMode
                    ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-cyan-400 hover:border-slate-700'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-cyan-600 hover:border-slate-300'
                }`}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Location & Status Footer */}
            <div className={`pt-2 flex items-center gap-2 text-xs font-mono ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>Based in Ho Chi Minh City, Vietnam • Available for immediate interview & onboarding</span>
            </div>

          </div>

          {/* QUICK FACTS COLUMN (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <div className={`p-5 sm:p-6 rounded-2xl border transition-all ${
              darkMode
                ? 'bg-slate-900/80 border-slate-800/90 shadow-lg'
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/60">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  Quick Facts
                </span>
                <span className={`text-[11px] font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Recruiter Summary
                </span>
              </div>

              {/* 4 Core Quick Fact Cards Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                
                {/* Fact 1: Experience */}
                <div className={`p-3.5 rounded-xl border ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Experience</span>
                  </div>
                  <span className={`block text-xl font-extrabold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    6+ Months
                  </span>
                  <span className={`block text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Backend Intern (YOOT)
                  </span>
                </div>

                {/* Fact 2: Primary Stack */}
                <div className={`p-3.5 rounded-xl border ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                    <Code2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Primary Stack</span>
                  </div>
                  <span className={`block text-xl font-extrabold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Java / Spring
                  </span>
                  <span className={`block text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    REST API, MySQL, JPA
                  </span>
                </div>

                {/* Fact 3: Education */}
                <div className={`p-3.5 rounded-xl border ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Education</span>
                  </div>
                  <span className={`block text-xl font-extrabold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Final-Year
                  </span>
                  <span className={`block text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    IT Student (STU)
                  </span>
                </div>

                {/* Fact 4: Location */}
                <div className={`p-3.5 rounded-xl border ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Location</span>
                  </div>
                  <span className={`block text-xl font-extrabold font-mono ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    HCMC
                  </span>
                  <span className={`block text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Vietnam (On-site / Remote)
                  </span>
                </div>

              </div>

              {/* Key Technical Highlights Checklist */}
              <div className={`p-3 rounded-xl border space-y-2 text-xs font-mono ${
                darkMode ? 'bg-slate-950/50 border-slate-800/80 text-slate-300' : 'bg-slate-50/80 border-slate-200 text-slate-700'
              }`}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>90+ Production REST APIs & 16 Controllers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>Spring Security: JWT Auth & RBAC (4 Roles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>Automated Testing: 295+ JUnit 5 / Mockito Tests</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
