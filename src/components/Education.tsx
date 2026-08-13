import React from 'react';
import { GraduationCap, Calendar, Award, Terminal, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section id="education" className={`py-16 sm:py-24 border-t transition-colors ${
      darkMode ? 'border-slate-800/80 bg-slate-950/60' : 'border-slate-200 bg-slate-50/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Terminal className="w-4 h-4" />
            <span>05. Education</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Academic Background
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-2" />
        </div>

        {/* Education Card Container */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.education.map((edu) => (
            <div
              key={edu.institution}
              className={`p-6 sm:p-8 rounded-2xl border text-left transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {edu.institution}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold font-mono text-cyan-500">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs text-slate-400 bg-slate-900/50 border border-slate-800">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30">
                    GPA: {edu.gpa}
                  </div>
                </div>
              </div>

              {/* Academic Awards & Recognitions */}
              <div className="mt-6 space-y-3">
                <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Academic Competitions & Awards:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {edu.awards.map((award, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800/90 text-slate-200'
                          : 'bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium leading-snug">
                        {award}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
