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
      desc: "Building maintainable, layered backend services with Java and Spring Boot."
    },
    {
      title: "API Engineering",
      desc: "Designing stateless RESTful APIs with pagination, validation, and Swagger/OpenAPI docs."
    },
    {
      title: "Database Architecture",
      desc: "Designing relational schemas with MySQL, JPA mappings, transactions, and Flyway."
    },
    {
      title: "Authentication & Security",
      desc: "Implementing stateless JWT token filters, OAuth2, and method-level RBAC authorization."
    },
    {
      title: "Automated Testing",
      desc: "Writing unit and service tests with JUnit 5 and Mockito to ensure reliability."
    },
    {
      title: "Software Practices",
      desc: "Applying clean code principles, Git workflows, Docker, and CI/CD best practices."
    }
  ];

  return (
    <section id="about" className="py-10 sm:py-14 bg-[#E8EEF5] border-b border-[#CBD5E1]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-1 mb-6">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
            About Me
          </span>
          <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#0F172A] tracking-tight">
            Background & Engineering Focus
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl">
            Summary of academic foundation, real-world development experience, and backend technical competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Main Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            {/* Primary Bio Box */}
            <div className="p-5 rounded-xl bg-white border border-[#CBD5E1] shadow-[0_4px_16px_rgba(15,23,42,0.06)] space-y-3">
              <p className="text-[15px] sm:text-base text-[#0F172A] leading-relaxed font-normal">
                I am a final-year Information Technology student at <strong className="text-[#0F172A] font-bold">Saigon Technology University (STU)</strong>, focused on pursuing a career in <strong className="text-blue-600 font-bold">Java Backend Development & Software Engineering</strong>.
              </p>
              
              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                Through practical internship experience at YOOT and developing complex backend systems, I have built production-grade REST APIs, modeled relational databases with MySQL, implemented JWT/OAuth2 authentication, and engineered automated test suites using JUnit 5 and Mockito.
              </p>

              {/* Practical Experience Pill List */}
              <div className="pt-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
                  Hands-on Practical Experience with:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {practicalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Focus Areas Grid */}
            <div className="space-y-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                Core Technical Focus:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="p-3.5 rounded-lg bg-white border border-[#CBD5E1] shadow-xs hover:border-[#94A3B8] transition-colors"
                  >
                    <h4 className="text-xs font-bold text-[#0F172A] mb-0.5">
                      {area.title}
                    </h4>
                    <p className="text-[12px] text-[#475569] leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quick Info Sidebar Column (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <div className="p-5 rounded-xl bg-white border border-[#CBD5E1] shadow-[0_4px_16px_rgba(15,23,42,0.06)] space-y-4">
              
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] pb-2.5 border-b border-[#E2E8F0]">
                Academic & Profile Summary
              </h3>

              <div className="space-y-3.5 text-xs">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFF6FF] text-blue-600 mt-0.5 border border-[#BFDBFE]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block uppercase text-[10px] font-bold text-[#64748B]">
                      University
                    </span>
                    <span className="font-bold text-sm text-[#0F172A] block">
                      Saigon Technology University (STU)
                    </span>
                    <span className="text-xs text-[#475569] block mt-0.5">
                      Bachelor of Information Technology (2022 - 2026)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFF6FF] text-blue-600 mt-0.5 border border-[#BFDBFE]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block uppercase text-[10px] font-bold text-[#64748B]">
                      Location
                    </span>
                    <span className="font-bold text-sm text-[#0F172A] block">
                      {PORTFOLIO_DATA.personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFF6FF] text-blue-600 mt-0.5 border border-[#BFDBFE]">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block uppercase text-[10px] font-bold text-[#64748B]">
                      Target Role
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-[#EFF6FF] text-[#1D4ED8] font-semibold text-xs mt-0.5 border border-[#BFDBFE]">
                      Java Backend Intern / Fresher / Junior
                    </span>
                  </div>
                </div>

              </div>

              {/* Ready status callout */}
              <div className="p-3 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-medium text-[#334155] flex items-center gap-2">
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

