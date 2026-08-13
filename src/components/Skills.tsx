import React from 'react';
import { Terminal, Code2, Server, ShieldCheck, Database, Cpu, Wrench, Layout } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages': return Code2;
      case 'Backend': return Server;
      case 'Security & Authentication': return ShieldCheck;
      case 'Database': return Database;
      case 'Integration': return Cpu;
      case 'Testing & Tools': return Wrench;
      case 'Frontend': return Layout;
      default: return Terminal;
    }
  };

  return (
    <section id="skills" className={`py-16 sm:py-24 border-t transition-colors ${
      darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Terminal className="w-4 h-4" />
            <span>04. Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & Core Technologies
          </h2>
          <p className={`text-sm sm:text-base font-normal max-w-2xl mt-1 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Focused primarily on Java Backend architecture, security, database design, REST APIs, and automated testing.
          </p>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-2" />
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((cat) => {
            const IconComponent = getCategoryIcon(cat.category);
            const isBackendCategory = cat.category === 'Backend' || cat.category === 'Security & Authentication' || cat.category === 'Database';

            return (
              <div
                key={cat.category}
                className={`p-6 rounded-2xl border text-left transition-all ${
                  isBackendCategory
                    ? darkMode
                      ? 'bg-slate-900/90 border-cyan-500/30 shadow-lg shadow-cyan-950/20'
                      : 'bg-white border-cyan-300 shadow-md'
                    : darkMode
                    ? 'bg-slate-900/50 border-slate-800'
                    : 'bg-slate-50/70 border-slate-200 shadow-sm'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/40">
                  <div className={`p-2.5 rounded-xl ${
                    isBackendCategory
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {cat.category}
                    </h3>
                    {isBackendCategory && (
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-semibold">
                        Core Competency
                      </span>
                    )}
                  </div>
                </div>

                {/* Skills Pill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                        skill.isPrimaryBackend
                          ? darkMode
                            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/40 font-semibold'
                            : 'bg-cyan-50 text-cyan-800 border-cyan-300 font-semibold'
                          : darkMode
                          ? 'bg-slate-950 text-slate-300 border-slate-800'
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
