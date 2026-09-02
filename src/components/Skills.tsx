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
    <section id="skills" className="py-10 sm:py-14 bg-[#F1F5F9] border-b border-[#CBD5E1]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-1 mb-6">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
            Skills
          </span>
          <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#0F172A] tracking-tight">
            Technical Skills & Tooling
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl">
            Core technical proficiencies with specialization in Java backend ecosystem, databases, APIs, and automated testing.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PORTFOLIO_DATA.skillCategories.map((cat) => {
            const IconComponent = getCategoryIcon(cat.category);
            const isBackendCategory = cat.category === 'Backend' || cat.category === 'Database';

            return (
              <div
                key={cat.category}
                className="p-4 sm:p-5 rounded-xl bg-white border border-[#CBD5E1] shadow-[0_4px_16px_rgba(15,23,42,0.06)] text-left hover:border-[#94A3B8] transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-[#E2E8F0]">
                  <div className={`p-2 rounded-lg ${
                    isBackendCategory
                      ? 'bg-[#EFF6FF] text-blue-600 border border-[#BFDBFE]'
                      : 'bg-[#F1F5F9] text-[#475569] border border-[#CBD5E1]'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#0F172A]">
                      {cat.category}
                    </h3>
                    {isBackendCategory && (
                      <span className="text-[10px] text-blue-600 uppercase tracking-wider font-bold block">
                        Core Focus
                      </span>
                    )}
                  </div>
                </div>

                {/* Skills Pill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${
                        skill.isPrimary
                          ? 'bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE] font-semibold'
                          : 'bg-[#F8FAFC] text-[#334155] border-[#CBD5E1]'
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

