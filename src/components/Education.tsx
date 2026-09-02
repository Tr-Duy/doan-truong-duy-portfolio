import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-10 sm:py-14 bg-[#E8EEF5] border-b border-[#CBD5E1]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-1 mb-6">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
            Education
          </span>
          <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#0F172A] tracking-tight">
            Academic Background
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl">
            Formal engineering education and university research contest achievements.
          </p>
        </div>

        {/* Education Card Container */}
        <div className="space-y-4">
          {PORTFOLIO_DATA.education.map((edu) => (
            <div
              key={edu.institution}
              className="p-5 sm:p-6 rounded-xl bg-white border border-[#CBD5E1] shadow-[0_4px_16px_rgba(15,23,42,0.06)] text-left hover:border-[#94A3B8] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#EFF6FF] text-blue-600 border border-[#BFDBFE] mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-[#64748B] font-medium">
                      {edu.status}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-[#475569] bg-[#F8FAFC] border border-[#CBD5E1]">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-md text-xs font-bold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE]">
                    GPA: {edu.gpa}
                  </div>
                </div>
              </div>

              {/* Academic Awards & Recognitions */}
              <div className="mt-4 space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#64748B] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Academic Competitions & Awards:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {edu.awards.map((award, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#0F172A] flex items-center gap-2.5"
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

