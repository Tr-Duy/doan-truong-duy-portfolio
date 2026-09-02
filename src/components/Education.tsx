import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            Education
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Academic Background
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Formal engineering education and university research achievements.
          </p>
        </div>

        {/* Education Card Container */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.education.map((edu) => (
            <div
              key={edu.institution}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-left hover:border-slate-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {edu.institution}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-blue-600">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      {edu.status}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200">
                    GPA: {edu.gpa}
                  </div>
                </div>
              </div>

              {/* Academic Awards & Recognitions */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Academic Competitions & Awards:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {edu.awards.map((award, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
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

