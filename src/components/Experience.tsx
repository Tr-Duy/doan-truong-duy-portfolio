import React from 'react';
import { Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className={`py-16 sm:py-24 border-t transition-colors ${
      darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Terminal className="w-4 h-4" />
            <span>02. Work Experience</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-2" />
        </div>

        {/* Timeline Container */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <div
              key={exp.id}
              className={`p-6 sm:p-8 rounded-2xl border text-left transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                  : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/50">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {exp.role}
                    </span>
                    <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      • {exp.project}
                    </span>
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Visually Prominent Metrics Callout Grid */}
              <div className="my-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {exp.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className={`p-3.5 rounded-xl border text-center transition-all ${
                      darkMode
                        ? 'bg-slate-950/80 border-slate-800/90 hover:border-cyan-500/40'
                        : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm'
                    }`}
                  >
                    <span className="block text-2xl font-extrabold font-mono text-cyan-400 tracking-tight">
                      {metric.value}
                    </span>
                    <span className={`block text-[11px] font-mono font-medium uppercase tracking-wider mt-1 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Responsibilities & Achievements List */}
              <div className="space-y-3 pt-2">
                <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Key Backend Responsibilities & Achievements:
                </h4>
                
                <ul className="space-y-2.5">
                  {exp.highlights.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className={`text-sm sm:text-base leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="mt-6 pt-4 border-t border-slate-800/40 flex flex-wrap items-center gap-2">
                <span className={`text-xs font-mono font-semibold uppercase tracking-wider mr-2 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Tech Used:
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium border ${
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
