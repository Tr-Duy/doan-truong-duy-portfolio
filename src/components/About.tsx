import React from 'react';
import { CheckCircle2, GraduationCap, MapPin, Target } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const About: React.FC = () => {
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
      title: "API Engineering",
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
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Background & Engineering Focus
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Summary of academic foundation, real-world development experience, and backend technical competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Primary Bio Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                I am a final-year Information Technology student at <strong className="text-slate-900 font-semibold">Saigon Technology University (STU)</strong>, focused on pursuing a career in <strong className="text-blue-600 font-semibold">Java Backend Development & Software Engineering</strong>.
              </p>
              
              <p className="text-base text-slate-600 leading-relaxed">
                Through practical internship experience at YOOT and developing complex backend systems, I have built production-grade REST APIs, modeled relational databases with MySQL, implemented JWT/OAuth2 authentication, and engineered automated test suites using JUnit 5 and Mockito.
              </p>

              {/* Practical Experience Pill List */}
              <div className="pt-2">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  Hands-on Practical Experience with:
                </span>
                <div className="flex flex-wrap gap-2">
                  {practicalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 text-slate-800 border border-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Focus Areas Grid */}
            <div className="space-y-3">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Core Technical Focus:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors"
                  >
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {area.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quick Info Sidebar Column (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
              
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-3 border-b border-slate-100">
                Academic & Profile Summary
              </h3>

              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 mt-0.5 border border-blue-100">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block uppercase text-[10px] font-bold text-slate-400">
                      University
                    </span>
                    <span className="font-bold text-sm text-slate-900 block">
                      Saigon Technology University (STU)
                    </span>
                    <span className="text-xs text-slate-600 block mt-0.5">
                      Bachelor of Information Technology (2022 - 2026)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 mt-0.5 border border-blue-100">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block uppercase text-[10px] font-bold text-slate-400">
                      Location
                    </span>
                    <span className="font-bold text-sm text-slate-900 block">
                      {PORTFOLIO_DATA.personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 mt-0.5 border border-blue-100">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block uppercase text-[10px] font-bold text-slate-400">
                      Target Role
                    </span>
                    <span className="inline-block px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-semibold text-xs mt-1 border border-blue-200">
                      Java Backend Intern / Fresher / Junior
                    </span>
                  </div>
                </div>

              </div>

              {/* Ready status callout */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Open for full-time / internship software engineering roles.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

