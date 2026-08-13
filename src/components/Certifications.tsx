import React from 'react';
import { Award, Calendar, CheckCircle2, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface CertificationsProps {
  darkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  return (
    <section id="certifications" className={`py-16 sm:py-24 border-t transition-colors ${
      darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Terminal className="w-4 h-4" />
            <span>06. Certifications</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Certifications
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-2" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40 shadow-md'
                  : 'bg-slate-50/80 border-slate-200 hover:border-cyan-300 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-mono text-cyan-400 px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.year}</span>
                  </span>
                </div>

                <div>
                  <h3 className={`text-lg font-bold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-500 font-semibold mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/40 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Technical Certificate</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
