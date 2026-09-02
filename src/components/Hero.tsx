import React from 'react';
import { ArrowRight, Download, MapPin, CheckCircle2, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Hero: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-6 pb-10 sm:pt-8 sm:pb-12 border-b border-[#CBD5E1]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Main Info Column (7 cols ~ 60%) */}
          <div className="lg:col-span-7 space-y-3.5 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Open to Internship / Fresher / Junior Software Engineer</span>
            </div>

            {/* Name & Job Title */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
                {PORTFOLIO_DATA.personalInfo.name}
              </h1>
              <p className="text-xl sm:text-[22px] font-bold text-blue-600 tracking-tight">
                {PORTFOLIO_DATA.personalInfo.title}
              </p>
            </div>

            {/* Concise Recruiter Summary */}
            <p className="text-[15px] sm:text-base text-[#475569] leading-relaxed max-w-2xl">
              Final-year Information Technology student at <strong className="font-semibold text-[#0F172A]">Saigon Technology University</strong> with <strong className="font-semibold text-[#0F172A]">6+ months of Backend Developer experience</strong>. Specializing in building secure, scalable RESTful APIs and relational database architectures.
            </p>

            {/* Core Tech Stack Inline */}
            <div className="pt-0.5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mr-1">
                  Core Stack:
                </span>
                {PORTFOLIO_DATA.heroHighlights.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons & Links */}
            <div className="pt-1.5 flex flex-wrap items-center gap-2.5">
              <a
                href="#projects"
                onClick={(e) => handleScrollToSection(e, 'projects')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.cvPath}
                download="CV-Doan-Truong-Duy.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-[#0F172A] bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] shadow-xs transition-colors"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download CV</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#475569] bg-white hover:bg-[#F8FAFC] hover:text-[#0F172A] border border-[#CBD5E1] shadow-xs transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-[#475569]" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#475569] bg-white hover:bg-[#EFF6FF] hover:text-[#1D4ED8] border border-[#CBD5E1] shadow-xs transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Location */}
            <div className="pt-0.5 flex items-center gap-1.5 text-xs text-[#64748B] font-medium">
              <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
              <span>Ho Chi Minh City, Vietnam • Available for immediate interview & onboarding</span>
            </div>

          </div>

          {/* QUICK FACTS COLUMN (5 cols ~ 40%) */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-white border border-[#CBD5E1] rounded-xl p-4 sm:p-5 shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
              
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#E2E8F0]">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Quick Facts
                </span>
                <span className="text-[11px] text-[#64748B] font-medium">
                  Recruiter Overview
                </span>
              </div>

              {/* 4 Core Quick Fact Cards Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-3">
                
                {/* Fact 1: Experience */}
                <div className="p-3 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]">
                  <div className="flex items-center gap-1 text-blue-600 mb-0.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-wider font-bold">Experience</span>
                  </div>
                  <span className="block text-lg font-extrabold text-[#0F172A]">
                    6+ Months
                  </span>
                  <span className="block text-[11px] text-[#64748B] mt-0.5">
                    Backend Intern (YOOT)
                  </span>
                </div>

                {/* Fact 2: Primary Stack */}
                <div className="p-3 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]">
                  <div className="flex items-center gap-1 text-blue-600 mb-0.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-wider font-bold">Primary Stack</span>
                  </div>
                  <span className="block text-lg font-extrabold text-[#0F172A]">
                    Java / Spring
                  </span>
                  <span className="block text-[11px] text-[#64748B] mt-0.5">
                    REST API, MySQL, JPA
                  </span>
                </div>

                {/* Fact 3: Education */}
                <div className="p-3 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]">
                  <div className="flex items-center gap-1 text-blue-600 mb-0.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-wider font-bold">Education</span>
                  </div>
                  <span className="block text-lg font-extrabold text-[#0F172A]">
                    Final-Year
                  </span>
                  <span className="block text-[11px] text-[#64748B] mt-0.5">
                    IT Student (STU)
                  </span>
                </div>

                {/* Fact 4: Location */}
                <div className="p-3 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]">
                  <div className="flex items-center gap-1 text-blue-600 mb-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-wider font-bold">Location</span>
                  </div>
                  <span className="block text-lg font-extrabold text-[#0F172A]">
                    HCMC
                  </span>
                  <span className="block text-[11px] text-[#64748B] mt-0.5">
                    Vietnam (On-site/Hybrid)
                  </span>
                </div>

              </div>

              {/* Key Technical Highlights Checklist */}
              <div className="p-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] space-y-1.5 text-xs text-[#334155]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>90+ Production REST APIs & 16 Controllers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>Spring Security: JWT Auth & RBAC (4 Roles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
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

