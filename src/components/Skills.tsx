import React from 'react';
import { Code2, Server, Database, Wrench, Layout, Bot } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend': return Server;
      case 'Database': return Database;
      case 'Testing & Quality': return Code2;
      case 'Frontend': return Layout;
      case 'Tools & DevOps': return Wrench;
      case 'Integration & AI': return Bot;
      default: return Server;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            Skills
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills & Tooling
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Core technical proficiencies with specialization in Java backend ecosystem, databases, APIs, and automated testing.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((cat) => {
            const IconComponent = getCategoryIcon(cat.category);
            const isBackendCategory = cat.category === 'Backend' || cat.category === 'Database';

            return (
              <div
                key={cat.category}
                className={`p-6 rounded-2xl border text-left transition-all ${
                  isBackendCategory
                    ? 'bg-white border-blue-200 shadow-sm'
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                  <div className={`p-2.5 rounded-xl ${
                    isBackendCategory
                      ? 'bg-blue-50 text-blue-600 border border-blue-100'
                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">
                      {cat.category}
                    </h3>
                    {isBackendCategory && (
                      <span className="text-[11px] text-blue-600 uppercase tracking-wider font-bold block">
                        Core Focus
                      </span>
                    )}
                  </div>
                </div>

                {/* Skills Pill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        skill.isPrimary
                          ? 'bg-blue-50 text-blue-700 border-blue-200 font-semibold'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
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

