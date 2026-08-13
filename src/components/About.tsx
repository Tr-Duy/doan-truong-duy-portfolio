import React from 'react';
import { MapPin, GraduationCap, Target, Terminal, Code2, ShieldCheck, Database, Layers, CheckCircle2, Server } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    { icon: Server, title: "RESTful API Engineering", desc: "Designing structured, stateless endpoints with pagination, filtering, and OpenAPI docs." },
    { icon: ShieldCheck, title: "Authentication & Security", desc: "Securing resources with Spring Security, JWT stateless filters, OAuth2, and RBAC." },
    { icon: Database, title: "Database Architecture", desc: "Designing relational schemas, JPA mappings, transactional integrity, and Flyway migrations." },
    { icon: Layers, title: "Clean Layered Code", desc: "Implementing Controller-Service-Repository architecture with DTOs and clean exception handling." },
  ];

  return (
    <section id="about" className={`py-16 sm:py-24 border-t transition-colors ${
      darkMode ? 'border-slate-800/80 bg-slate-950/60' : 'border-slate-200 bg-slate-50/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Terminal className="w-4 h-4" />
            <span>01. Overview</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About Me
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <p className={`text-base sm:text-lg leading-relaxed mb-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                I'm a final-year Information Technology student at <strong className="text-cyan-400 font-semibold">Saigon Technology University (STU)</strong>, specializing in Java Backend Development.
              </p>
              
              <p className={`text-base sm:text-lg leading-relaxed mb-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                I have hands-on experience building production-focused RESTful APIs with <strong className={darkMode ? 'text-slate-100' : 'text-slate-900'}>Java, Spring Boot, Spring Data JPA, and MySQL</strong>. My technical focus revolves around backend architecture, JWT & OAuth2 security workflows, database optimization, third-party API integration, and automated unit testing with JUnit 5 & Mockito.
              </p>

              <p className={`text-base sm:text-lg leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                I'm currently seeking a <strong className="text-cyan-400 font-semibold">Java Backend Intern / Fresher</strong> opportunity where I can contribute to real-world backend systems, write clean maintainable code, and continue growing as a professional Backend Engineer.
              </p>
            </div>

            {/* Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className={`p-4 rounded-xl border transition-all ${
                    darkMode
                      ? 'bg-slate-900/60 border-slate-800/80 hover:border-cyan-500/40'
                      : 'bg-white border-slate-200 hover:border-cyan-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h3 className={`font-semibold text-sm ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className={`text-xs leading-normal ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts Sidebar Card */}
          <div className="lg:col-span-5 text-left">
            <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
              darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold font-mono tracking-tight pb-4 border-b ${
                darkMode ? 'text-white border-slate-800' : 'text-slate-900 border-slate-200'
              }`}>
                Quick Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-mono uppercase tracking-wider ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Location
                    </span>
                    <span className={`font-medium text-base ${
                      darkMode ? 'text-slate-100' : 'text-slate-800'
                    }`}>
                      {PORTFOLIO_DATA.aboutCard.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-mono uppercase tracking-wider ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Education
                    </span>
                    <span className={`font-medium text-base ${
                      darkMode ? 'text-slate-100' : 'text-slate-800'
                    }`}>
                      {PORTFOLIO_DATA.aboutCard.education}
                    </span>
                    <span className="block text-xs text-slate-400 font-mono mt-0.5">
                      Bachelor of Information Technology (2022 - Present)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-mono uppercase tracking-wider ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Focus
                    </span>
                    <span className={`font-medium text-base ${
                      darkMode ? 'text-slate-100' : 'text-slate-800'
                    }`}>
                      {PORTFOLIO_DATA.aboutCard.focus}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-mono uppercase tracking-wider ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Target Position
                    </span>
                    <span className="inline-block px-2.5 py-1 rounded bg-cyan-500/15 text-cyan-400 font-mono font-semibold text-xs mt-1 border border-cyan-500/30">
                      {PORTFOLIO_DATA.aboutCard.careerGoal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className={`p-4 rounded-xl border text-xs font-mono flex items-center gap-2.5 ${
                darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Ready for immediate onboarding and interview process.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
