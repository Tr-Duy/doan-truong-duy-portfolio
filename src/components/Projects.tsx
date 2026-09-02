import React, { useState } from 'react';
import { ExternalLink, Terminal, CheckCircle2, Server, ShieldCheck, Database, Layers, X, Code2, Bot } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PORTFOLIO_DATA, type ProjectItem } from '../data/portfolio';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className={`py-14 sm:py-20 border-t transition-colors ${
      darkMode ? 'border-slate-800/80 bg-slate-950/60' : 'border-slate-200 bg-slate-50/50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-1.5 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>03. Software Projects</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Backend Projects
          </h2>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Fullstack & backend software architectures with scalable API design, database schemas, and unit testing.
          </p>
        </div>

        {/* PROJECTS CARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className={`p-6 sm:p-7 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-md'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              
              {/* Top Meta: Role, Period & Primary Tag */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {project.role}
                    </span>
                    {project.isPrimary && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        Primary System
                      </span>
                    )}
                  </div>
                  <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold tracking-tight mb-2 leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.description}
                </p>

                {/* Deliverable Metrics Row */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4">
                  {project.metrics.slice(0, 5).map((metric) => (
                    <div
                      key={metric.label}
                      className={`p-2 rounded-lg border text-center ${
                        darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <span className="block text-base font-extrabold font-mono text-cyan-400">
                        {metric.value}
                      </span>
                      <span className={`block text-[9px] font-mono uppercase tracking-wider mt-0.5 truncate ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-4">
                  <span className={`block text-[11px] font-mono uppercase tracking-wider font-semibold ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Key Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {project.highlights.slice(0, 4).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-2 border-t border-slate-800/40">
                  {project.technologies.slice(0, 8).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium border ${
                        darkMode
                          ? 'bg-slate-950 text-slate-300 border-slate-800'
                          : 'bg-slate-100 text-slate-800 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 8 && (
                    <span className={`px-1.5 py-0.5 text-[11px] font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                      +{project.technologies.length - 8} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-slate-800/50">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm active:scale-95"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                {project.architectureDetails && (
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold border transition-colors ${
                      darkMode
                        ? 'bg-slate-950 text-slate-200 border-slate-700 hover:border-cyan-400 hover:text-cyan-400'
                        : 'bg-white text-slate-800 border-slate-300 hover:border-cyan-500 hover:text-cyan-600'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Architecture Deep Dive</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* TECHNICAL ARCHITECTURE MODAL */}
      {selectedProject && selectedProject.architectureDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className={`relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 text-left ${
            darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
          }`}>
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="space-y-1 mb-5 pr-10">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                Architecture & Implementation Details
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold">
                {selectedProject.title}
              </h3>
            </div>

            <div className="space-y-4">
              
              {/* Architecture Overview */}
              <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-1.5 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" />
                  <span>Layered Architecture Pattern</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.architectureDetails.overview}
                </p>
              </div>

              {/* Subsystems 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h5 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Security & Authentication</span>
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.architectureDetails.security}
                  </p>
                </div>

                <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h5 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>Database & Migrations</span>
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.architectureDetails.database}
                  </p>
                </div>

                <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h5 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Automated Testing</span>
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.architectureDetails.testing}
                  </p>
                </div>

                <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h5 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5" />
                    <span>Integrations (AI, Webhooks, WS)</span>
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.architectureDetails.integrations}
                  </p>
                </div>
              </div>

              {/* Modules List */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-400 mb-2">
                  Implemented Backend Modules:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.architectureDetails.keyModules.map((module, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-mono p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
