import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-10 sm:py-14 bg-[#F1F5F9] border-b border-[#CBD5E1]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-1 mb-6">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
            Experience
          </span>
          <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#0F172A] tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl">
            Hands-on software development and backend systems engineering in production environments.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="space-y-4">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <div
              key={exp.id}
              className="p-5 sm:p-6 rounded-xl bg-white border border-[#CBD5E1] shadow-[0_4px_16px_rgba(15,23,42,0.06)] text-left hover:border-[#94A3B8] transition-all"
            >
              
              {/* Card Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                      {exp.role}
                    </span>
                    <span className="text-xs text-[#64748B] font-medium">
                      • {exp.project}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-[#475569]">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#CBD5E1] bg-[#F8FAFC]">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#CBD5E1] bg-[#F8FAFC]">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Deliverable Metrics Grid */}
              <div className="my-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {exp.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-center"
                  >
                    <span className="block text-lg font-extrabold text-blue-600 tracking-tight">
                      {metric.value}
                    </span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#64748B] mt-0.5">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-2 pt-0.5">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  Key Backend Deliverables & Accomplishments:
                </span>
                
                <ul className="space-y-2">
                  {exp.highlights.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] sm:text-[15px] text-[#334155] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used Pills */}
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mr-1">
                  Tech Stack:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-xs font-medium bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

