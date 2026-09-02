import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Server, ShieldCheck, Database, Layers, X, Code2, Bot } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PORTFOLIO_DATA, type ProjectItem } from '../data/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            Projects
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Featured Backend Projects
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Software architectures featuring scalable RESTful API design, relational database schemas, security, and automated testing.
          </p>
        </div>

        {/* PROJECTS CARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-all text-left flex flex-col justify-between"
            >
              
              {/* Top Meta: Role, Period & Primary Tag */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {project.role}
                    </span>
                    {project.isPrimary && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
                        Primary Project
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 leading-snug">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Deliverable Metrics Row */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4">
                  {project.metrics.slice(0, 5).map((metric) => (
                    <div
                      key={metric.label}
                      className="p-2 rounded-lg border border-slate-200 bg-slate-50 text-center"
                    >
                      <span className="block text-base font-extrabold text-blue-600">
                        {metric.value}
                      </span>
                      <span className="block text-[10px] uppercase font-medium tracking-wider text-slate-500 mt-0.5 truncate">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-2 mb-4">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Key Highlights:
                  </span>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 4).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-100">
                  {project.technologies.slice(0, 8).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 8 && (
                    <span className="px-1.5 py-1 text-xs text-slate-500 font-medium">
                      +{project.technologies.length - 8} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-100">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs active:scale-95"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                {project.architectureDetails && (
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-left">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="space-y-1 mb-6 pr-12">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Architecture & Implementation Details
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {selectedProject.title}
              </h3>
            </div>

            <div className="space-y-4">
              
              {/* Architecture Overview */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h4 className="text-xs uppercase tracking-wider font-bold text-blue-600 mb-1.5 flex items-center gap-1.5">
                  <Server className="w-4 h-4" />
                  <span>Layered Architecture Pattern</span>
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedProject.architectureDetails.overview}
                </p>
              </div>

              {/* Subsystems 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <h5 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Security & Auth</span>
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedProject.architectureDetails.security}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <h5 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Database className="w-4 h-4" />
                    <span>Database & Migrations</span>
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedProject.architectureDetails.database}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <h5 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Code2 className="w-4 h-4" />
                    <span>Automated Testing</span>
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedProject.architectureDetails.testing}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                  <h5 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Bot className="w-4 h-4" />
                    <span>Integrations (AI, Webhooks, WS)</span>
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedProject.architectureDetails.integrations}
                  </p>
                </div>
              </div>

              {/* Modules List */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2.5">
                  Implemented Backend Modules:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.architectureDetails.keyModules.map((module, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
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

