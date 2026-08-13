import { useState } from 'react';
import { ExternalLink, Terminal, CheckCircle2, Server, ShieldCheck, Database, Layers, X, Code2, Bot } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PORTFOLIO_DATA, type ProjectItem } from '../data/portfolio';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const primaryProject = PORTFOLIO_DATA.projects.find((p) => p.isPrimary);
  const secondaryProjects = PORTFOLIO_DATA.projects.filter((p) => !p.isPrimary);

  return (
    <section id="projects" className={`py-16 sm:py-24 border-t transition-colors ${
      darkMode ? 'border-slate-800/80 bg-slate-950/60' : 'border-slate-200 bg-slate-50/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Terminal className="w-4 h-4" />
            <span>03. Featured Work</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Backend Software Projects
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-2" />
        </div>

        {/* PRIMARY PROJECT SHOWCASE (HERO CARD) */}
        {primaryProject && (
          <div className="mb-12">
            <div className={`p-6 sm:p-10 rounded-2xl border text-left transition-all relative overflow-hidden ${
              darkMode
                ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40 shadow-xl'
                : 'bg-white border-slate-200 hover:border-cyan-300 shadow-md'
            }`}>
              
              {/* Featured Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  ★ Primary Java Backend System
                </span>
                <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {primaryProject.period}
                </span>
              </div>

              {/* Title & Role */}
              <div className="space-y-2 mb-4">
                <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {primaryProject.title}
                </h3>
                <p className="text-sm font-mono text-cyan-500 font-semibold">
                  Role: {primaryProject.role}
                </p>
              </div>

              {/* Description */}
              <p className={`text-base sm:text-lg leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {primaryProject.description}
              </p>

              {/* Visually Prominent Metrics Callouts */}
              <div className="my-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {primaryProject.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className={`p-3.5 rounded-xl border text-center transition-all ${
                      darkMode
                        ? 'bg-slate-950/90 border-slate-800 hover:border-cyan-500/40'
                        : 'bg-slate-50 border-slate-200 hover:border-cyan-300'
                    }`}
                  >
                    <span className="block text-2xl font-extrabold font-mono text-cyan-400 tracking-tight">
                      {metric.value}
                    </span>
                    <span className={`block text-[11px] font-mono font-medium uppercase tracking-wider mt-1 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bullet Points */}
              <div className="space-y-2.5 mb-6">
                <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Core Backend Facts & Deliverables:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {primaryProject.highlights.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags */}
              <div className="mb-6 pt-4 border-t border-slate-800/40 flex flex-wrap items-center gap-1.5">
                {primaryProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium border ${
                      darkMode
                        ? 'bg-slate-950 text-slate-300 border-slate-800'
                        : 'bg-slate-100 text-slate-800 border-slate-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={primaryProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(primaryProject)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all ${
                    darkMode
                      ? 'bg-slate-950 text-slate-200 border-slate-700 hover:border-cyan-400 hover:text-cyan-400'
                      : 'bg-white text-slate-800 border-slate-300 hover:border-cyan-500 hover:text-cyan-600 shadow-sm'
                  }`}
                >
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>View Architecture & Details</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* SECONDARY PROJECTS GRID */}
        {secondaryProjects.length > 0 && (
          <div className="space-y-4">
            <h3 className={`text-left text-lg font-mono font-bold tracking-tight uppercase ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Secondary Practices & Algorithms
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {secondaryProjects.map((proj) => (
                <div
                  key={proj.id}
                  className={`p-6 sm:p-8 rounded-2xl border text-left transition-all ${
                    darkMode
                      ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 shadow-lg'
                      : 'bg-white border-slate-200 hover:border-cyan-300 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        {proj.role}
                      </span>
                      <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        • {proj.period}
                      </span>
                    </div>

                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors self-start sm:self-auto"
                      aria-label={`View ${proj.title} on GitHub`}
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </div>

                  <h4 className={`text-xl sm:text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {proj.title}
                  </h4>

                  <p className={`text-sm sm:text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {proj.description}
                  </p>

                  {/* Secondary Project Metrics Grid */}
                  {proj.metrics && proj.metrics.length > 0 && (
                    <div className="my-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                      {proj.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            darkMode
                              ? 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/40'
                              : 'bg-slate-50 border-slate-200 hover:border-cyan-300'
                          }`}
                        >
                          <span className="block text-xl font-extrabold font-mono text-cyan-400 tracking-tight">
                            {metric.value}
                          </span>
                          <span className={`block text-[10px] font-mono font-medium uppercase tracking-wider mt-1 ${
                            darkMode ? 'text-slate-400' : 'text-slate-600'
                          }`}>
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 pt-2">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 rounded text-xs font-mono font-medium border ${
                          darkMode
                            ? 'bg-slate-950 text-slate-300 border-slate-800'
                            : 'bg-slate-100 text-slate-800 border-slate-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-800/40">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View GitHub Repo</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>

                    {proj.architectureDetails && (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(proj)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold border transition-all ${
                          darkMode
                            ? 'bg-slate-950 text-slate-200 border-slate-700 hover:border-cyan-400 hover:text-cyan-400'
                            : 'bg-white text-slate-800 border-slate-300 hover:border-cyan-500 hover:text-cyan-600 shadow-sm'
                        }`}
                      >
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span>View Details & Architecture</span>
                      </button>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ARCHITECTURE & DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 text-left ${
            darkMode ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
          }`}>
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="space-y-1 mb-6 pr-12">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                Technical Architecture & Deep Dive
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                {selectedProject.title}
              </h3>
            </div>

            {selectedProject.architectureDetails && (
              <div className="space-y-6">
                
                {/* Overview */}
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 mb-2 flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    <span>Layered Architecture Pattern</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.architectureDetails.overview}
                  </p>
                </div>

                {/* Key Subsystems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <h5 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Security Architecture</span>
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedProject.architectureDetails.security}
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <h5 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      <span>Database & Schema Migrations</span>
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedProject.architectureDetails.database}
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <h5 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      <span>Unit & Integration Testing</span>
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedProject.architectureDetails.testing}
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <h5 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Bot className="w-4 h-4" />
                      <span>Integrations (Gemini AI, SePay, WS)</span>
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedProject.architectureDetails.integrations}
                    </p>
                  </div>
                </div>

                {/* Modules List */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-400 mb-3">
                    Implemented Backend Subsystems & Modules:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.architectureDetails.keyModules.map((module, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-mono p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Open GitHub Repo</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
                  >
                    Close
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
