import React from 'react';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-10 sm:py-14 bg-[#F1F5F9] border-b border-[#CBD5E1]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-1 mb-6">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
            Certifications
          </span>
          <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#0F172A] tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl">
            Verified technical certifications in fullstack development, source code management, and website deployment.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-xl bg-white border border-[#CBD5E1] shadow-[0_4px_16px_rgba(15,23,42,0.06)] hover:border-[#94A3B8] transition-all text-left flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="p-2 rounded-lg bg-[#EFF6FF] text-blue-600 border border-[#BFDBFE]">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-medium text-[#475569] px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#CBD5E1]">
                    <Calendar className="w-3 h-3 text-blue-600" />
                    <span>{cert.year}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#E2E8F0] flex items-center gap-1.5 text-xs text-[#64748B] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Verified Certificate</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

