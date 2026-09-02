import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Server, ShieldCheck, Database, Layers, X, Code2, Bot } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PORTFOLIO_DATA, type ProjectItem } from '../data/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-10 sm:py-14 bg-[#E8EEF5] border-b border-[#CBD5E1]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-1 mb-6">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
            Projects
          </span>
          <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#0F172A] tracking-tight">
            Featured Backend Projects
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl">
            Software architectures featuring scalable RESTful API design, relational database schemas, security, and automated testing.
          </p>
        </div>

        {/* PROJECTS CARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="p-5 sm:p-6 rounded-xl bg-white border border-[#CBD5E1] shadow-[0_4px_16px_rgba(15,23,42,0.06)] hover:border-[#94A3B8] transition-all text-left flex flex-col justify-between"
            >
              
              {/* Top Meta: Role, Period & Primary Tag */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                      {project.role}
                    </span>
                    {project.isPrimary && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                        Primary Project
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#64748B] font-medium">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight mb-1.5 leading-snug">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Deliverable Metrics Row */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 mb-3">
                  {project.metrics.slice(0, 5).map((metric) => (
                    <div
                      key={metric.label}
                      className="p-1.5 rounded-md border border-[#CBD5E1] bg-[#F8FAFC] text-center"
                    >
                      <span className="block text-sm font-extrabold text-blue-600">
                        {metric.value}
                      </span>
                      <span className="block text-[9px] uppercase font-semibold tracking-wider text-[#64748B] mt-0.5 truncate">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-3">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    Key Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {project.highlights.slice(0, 4).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-[#334155] leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1 mb-4 pt-2.5 border-t border-[#E2E8F0]">
                  {project.technologies.slice(0, 8).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 8 && (
                    <span className="px-1.5 py-0.5 text-xs text-[#64748B] font-medium">
                      +{project.technologies.length - 8} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#E2E8F0]">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs active:scale-95"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                {project.architectureDetails && (
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0F172A] bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] shadow-xs transition-colors"
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
          <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-xl bg-white border border-[#CBD5E1] shadow-2xl p-5 sm:p-7 text-left">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Title */}
            <div className="space-y-0.5 mb-4 pr-10">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Architecture & Implementation Details
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A]">
                {selectedProject.title}
              </h3>
            </div>

            <div className="space-y-3.5">
              
              {/* Architecture Overview */}
              <div className="p-3.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]">
                <h4 className="text-xs uppercase tracking-wider font-bold text-blue-600 mb-1 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" />
                  <span>Layered Architecture Pattern</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {selectedProject.architectureDetails.overview}
                </p>
              </div>

              {/* Subsystems 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]">
                  <h5 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Security & Auth</span>
                  </h5>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {selectedProject.architectureDetails.security}
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]">
                  <h5 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>Database & Migrations</span>
                  </h5>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {selectedProject.architectureDetails.database}
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]">
                  <h5 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Automated Testing</span>
                  </h5>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {selectedProject.architectureDetails.testing}
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]">
                  <h5 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5" />
                    <span>Integrations (AI, Webhooks, WS)</span>
                  </h5>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {selectedProject.architectureDetails.integrations}
                  </p>
                </div>
              </div>

              {/* Modules List */}
              <div className="pt-1">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#64748B] mb-2">
                  Implemented Backend Modules:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {selectedProject.architectureDetails.keyModules.map((module, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-xs p-2 rounded-md bg-[#F8FAFC] border border-[#CBD5E1] text-[#334155]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer */}
              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#475569] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] transition-colors"
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

