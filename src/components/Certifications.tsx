import React from 'react';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            Certifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Verified technical certifications in fullstack development, version control, and web deployment.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-medium text-slate-600 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{cert.year}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verified Certificate</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

