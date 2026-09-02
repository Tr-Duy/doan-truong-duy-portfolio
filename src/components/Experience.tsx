import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Hands-on software development and backend systems engineering in production environments.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-left hover:border-slate-300 transition-all"
            >
              
              {/* Card Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {exp.role}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      • {exp.project}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Deliverable Metrics Grid */}
              <div className="my-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {exp.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-center"
                  >
                    <span className="block text-xl font-extrabold text-blue-600 tracking-tight">
                      {metric.value}
                    </span>
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-500 mt-0.5">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-3 pt-1">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Key Backend Deliverables & Accomplishments:
                </span>
                
                <ul className="space-y-2.5">
                  {exp.highlights.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used Pills */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-1">
                  Tech Stack:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
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

