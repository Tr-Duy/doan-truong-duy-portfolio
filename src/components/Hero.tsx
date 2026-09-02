import React from 'react';
import { ArrowRight, Download, MapPin, CheckCircle2, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Hero: React.FC = () => {
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
    <section id="hero" className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Info Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Open to Internship / Fresher / Junior Software Engineer</span>
            </div>

            {/* Name & Job Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {PORTFOLIO_DATA.personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-blue-600 tracking-tight">
                {PORTFOLIO_DATA.personalInfo.title}
              </p>
            </div>

            {/* Concise Recruiter Summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Final-year Information Technology student at <strong className="font-semibold text-slate-900">Saigon Technology University</strong> with <strong className="font-semibold text-slate-900">6+ months of Backend Developer experience</strong>. Specializing in building secure, scalable RESTful APIs and robust database architectures.
            </p>

            {/* Core Tech Stack Inline */}
            <div className="pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-1">
                  Core Stack:
                </span>
                {PORTFOLIO_DATA.heroHighlights.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons & Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => handleScrollToSection(e, 'projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.cvPath}
                download="CV-Doan-Truong-Duy.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-colors"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download CV</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-slate-600" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-600" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Location */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
              <span>Ho Chi Minh City, Vietnam • Available for immediate interview & onboarding</span>
            </div>

          </div>

          {/* QUICK FACTS COLUMN (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Quick Facts
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Recruiter Overview
                </span>
              </div>

              {/* 4 Core Quick Fact Cards Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                
                {/* Fact 1: Experience */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span className="text-[11px] uppercase tracking-wider font-bold">Experience</span>
                  </div>
                  <span className="block text-xl font-extrabold text-slate-900">
                    6+ Months
                  </span>
                  <span className="block text-xs text-slate-600 mt-0.5">
                    Backend Intern (YOOT)
                  </span>
                </div>

                {/* Fact 2: Primary Stack */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                    <Code2 className="w-3.5 h-3.5" />
                    <span className="text-[11px] uppercase tracking-wider font-bold">Primary Stack</span>
                  </div>
                  <span className="block text-xl font-extrabold text-slate-900">
                    Java / Spring
                  </span>
                  <span className="block text-xs text-slate-600 mt-0.5">
                    REST API, MySQL, JPA
                  </span>
                </div>

                {/* Fact 3: Education */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span className="text-[11px] uppercase tracking-wider font-bold">Education</span>
                  </div>
                  <span className="block text-xl font-extrabold text-slate-900">
                    Final-Year
                  </span>
                  <span className="block text-xs text-slate-600 mt-0.5">
                    IT Student (STU)
                  </span>
                </div>

                {/* Fact 4: Location */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-1.5 text-blue-600 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[11px] uppercase tracking-wider font-bold">Location</span>
                  </div>
                  <span className="block text-xl font-extrabold text-slate-900">
                    HCMC
                  </span>
                  <span className="block text-xs text-slate-600 mt-0.5">
                    Vietnam (On-site/Hybrid)
                  </span>
                </div>

              </div>

              {/* Key Technical Highlights Checklist */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>90+ Production REST APIs & 16 Controllers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Spring Security: JWT Auth & RBAC (4 Roles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
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

