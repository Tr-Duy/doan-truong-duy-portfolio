import React from 'react';
import { Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className={`py-14 sm:py-20 border-t transition-colors ${
      darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-1.5 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>02. Work Experience</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Experience
          </h2>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Real-world backend engineering and system implementation in production environments.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <div
              key={exp.id}
              className={`p-6 sm:p-8 rounded-2xl border text-left transition-all ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-md'
                  : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              
              {/* Card Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800/60">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {exp.role}
                    </span>
                    <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      • {exp.project}
                    </span>
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border ${
                    darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 text-slate-700'
                  }`}>
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border ${
                    darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 text-slate-700'
                  }`}>
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Quick Deliverable Metrics Grid */}
              <div className="my-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {exp.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className={`p-3 rounded-xl border text-center transition-colors ${
                      darkMode
                        ? 'bg-slate-950/70 border-slate-800/90'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <span className="block text-xl font-extrabold font-mono text-cyan-400 tracking-tight">
                      {metric.value}
                    </span>
                    <span className={`block text-[10px] font-mono font-medium uppercase tracking-wider mt-0.5 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-2.5 pt-1">
                <span className={`block text-xs font-mono uppercase tracking-wider font-semibold ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Key Backend Deliverables & Accomplishments:
                </span>
                
                <ul className="space-y-2">
                  {exp.highlights.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className={`text-sm leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used Pills */}
              <div className="mt-5 pt-4 border-t border-slate-800/50 flex flex-wrap items-center gap-1.5">
                <span className={`text-xs font-mono font-semibold uppercase tracking-wider mr-1.5 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Tech Stack:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-0.5 rounded text-xs font-mono font-medium border ${
                      darkMode
                        ? 'bg-slate-950 text-slate-300 border-slate-800'
                        : 'bg-slate-100 text-slate-800 border-slate-200'
                    }`}
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
