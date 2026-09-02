import React from 'react';
import { Terminal, CheckCircle2, GraduationCap, MapPin, Target } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const practicalSkills = [
    "Java",
    "Spring Boot",
    "REST API",
    "JPA / Hibernate",
    "MySQL",
    "Spring Security",
    "JUnit / Mockito",
    "Git",
    "Docker"
  ];

  const focusAreas = [
    {
      title: "Backend Development",
      desc: "Building maintainable, layered backend services with Java and Spring Boot framework."
    },
    {
      title: "API Development",
      desc: "Designing stateless RESTful APIs with pagination, validation, standardized responses, and OpenAPI docs."
    },
    {
      title: "Database Architecture",
      desc: "Designing relational schemas with MySQL/PostgreSQL, JPA mappings, transactions, and Flyway migrations."
    },
    {
      title: "Authentication & Security",
      desc: "Implementing stateless JWT token filters, OAuth2 social auth, and method-level RBAC authorization."
    },
    {
      title: "Automated Testing",
      desc: "Writing comprehensive unit and service tests with JUnit 5 and Mockito to ensure code reliability."
    },
    {
      title: "Software Engineering Practices",
      desc: "Following clean code principles, Git workflows, Docker containerization, and API best practices."
    }
  ];

  return (
    <section id="about" className={`py-14 sm:py-20 border-t transition-colors ${
      darkMode ? 'border-slate-800/80 bg-slate-950/60' : 'border-slate-200 bg-slate-50/50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-1.5 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>01. Overview</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About Me
          </h2>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Background, core competencies, and backend software engineering focus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Primary Bio Box */}
            <div className={`p-6 rounded-2xl border space-y-4 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <p className={`text-base leading-relaxed ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                I am a final-year Information Technology student at <strong className="text-cyan-400 font-semibold">Saigon Technology University (STU)</strong>, focused on pursuing a career in <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Java Backend Development & Software Engineering</strong>.
              </p>
              
              <p className={`text-sm sm:text-base leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Through real-world internship experience at YOOT and complex backend project development, I have built production-grade REST APIs, managed relational databases, implemented JWT/OAuth2 security, and applied unit testing frameworks.
              </p>

              {/* Practical Experience Pill List */}
              <div className="pt-2">
                <span className={`block text-xs font-mono font-semibold uppercase tracking-wider mb-2.5 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Hands-on Practical Experience with:
                </span>
                <div className="flex flex-wrap gap-2">
                  {practicalSkills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium border ${
                        darkMode
                          ? 'bg-slate-950 text-slate-200 border-slate-800'
                          : 'bg-slate-100 text-slate-800 border-slate-200'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Focus Areas Grid */}
            <div className="space-y-3">
              <h3 className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Core Technical Focus:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className={`p-3.5 rounded-xl border transition-colors ${
                      darkMode
                        ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <h4 className={`text-xs font-mono font-bold mb-1 text-cyan-400`}>
                      {area.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quick Info Sidebar Column (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <div className={`p-5 sm:p-6 rounded-2xl border space-y-5 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              
              <h3 className={`text-sm font-mono font-bold uppercase tracking-wider pb-3 border-b ${
                darkMode ? 'text-white border-slate-800' : 'text-slate-900 border-slate-200'
              }`}>
                Academic & Profile Summary
              </h3>

              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`block font-mono uppercase text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      University
                    </span>
                    <span className={`font-semibold text-sm block ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Saigon Technology University (STU)
                    </span>
                    <span className={`text-[11px] block mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Bachelor of Information Technology (2022 - Present)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`block font-mono uppercase text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Location
                    </span>
                    <span className={`font-semibold text-sm block ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {PORTFOLIO_DATA.personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`block font-mono uppercase text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Seeking Role
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-400 font-mono font-semibold text-xs mt-1 border border-cyan-500/30">
                      Java Backend Intern / Fresher / Junior
                    </span>
                  </div>
                </div>

              </div>

              {/* Ready status callout */}
              <div className={`p-3 rounded-xl border text-xs font-mono flex items-center gap-2 ${
                darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Open for full-time / part-time software engineer opportunities.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
