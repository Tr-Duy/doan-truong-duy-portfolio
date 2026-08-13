import { useState } from 'react';
import { Mail, Phone, ArrowRight, Download, Server, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [imgError, setImgError] = useState(false);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative py-12 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background Subtle Tech Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border transition-colors bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Seeking Java Backend Intern / Fresher Role</span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Hi, I'm <span className="text-cyan-400 hover:text-cyan-300 transition-colors">{PORTFOLIO_DATA.personalInfo.name}</span> 👋
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold font-mono text-cyan-500 tracking-tight">
                {PORTFOLIO_DATA.personalInfo.title}
              </h2>
            </div>

            {/* Description */}
            <p className={`text-lg sm:text-xl max-w-2xl font-normal leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {PORTFOLIO_DATA.personalInfo.bio}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="pt-2">
              <p className={`text-xs font-mono uppercase tracking-wider mb-3 font-semibold ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Core Backend Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.heroHighlights.map((tech) => (
                  <span
                    key={tech}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold border ${
                      darkMode
                        ? 'bg-slate-900/90 text-slate-200 border-slate-800 hover:border-cyan-500/40'
                        : 'bg-slate-100 text-slate-800 border-slate-200 hover:border-cyan-400'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20 active:scale-95 text-base"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.cvPath}
                download="CV-Doan-Truong-Duy.pdf"
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-lg font-semibold border transition-all text-base ${
                  darkMode
                    ? 'bg-slate-900 text-slate-200 border-slate-700 hover:border-cyan-400 hover:text-cyan-400'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-cyan-500 hover:text-cyan-600 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social & Contact Links */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg border transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-300'
                }`}
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={PORTFOLIO_DATA.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg border transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-300'
                }`}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                className={`p-2.5 rounded-lg border transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-300'
                }`}
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
                className={`p-2.5 rounded-lg border transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-cyan-600 hover:border-cyan-300'
                }`}
                aria-label="Call Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Technical Profile Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className={`relative w-full max-w-md p-6 rounded-2xl border transition-all ${
              darkMode
                ? 'bg-slate-900/80 border-slate-800 shadow-2xl shadow-cyan-950/20'
                : 'bg-white border-slate-200 shadow-xl'
            }`}>
              
              {/* Profile Image / Fallback Placeholder Avatar */}
              <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg mb-6">
                {!imgError ? (
                  <img
                    src={PORTFOLIO_DATA.personalInfo.avatarPath}
                    alt={PORTFOLIO_DATA.personalInfo.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover rounded-full bg-slate-900"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-cyan-400">
                    <span className="font-mono text-3xl font-extrabold tracking-widest text-cyan-400">
                      DTD
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                      Java Dev
                    </span>
                  </div>
                )}
                
                {/* Online Status Badge */}
                <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950" title="Available for opportunities" />
              </div>

              {/* Developer Code Snippet Card */}
              <div className={`p-4 rounded-xl font-mono text-xs text-left border ${
                darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 text-slate-200 border-slate-800'
              }`}>
                <div className="flex items-center gap-1.5 mb-3 border-b border-slate-800 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-slate-400 font-sans">DeveloperProfile.java</span>
                </div>
                <div className="space-y-1 text-slate-300">
                  <p><span className="text-purple-400">@RestController</span></p>
                  <p><span className="text-purple-400">@RequestMapping</span>(<span className="text-emerald-400">"/api/v1/dev"</span>)</p>
                  <p><span className="text-cyan-400">public class</span> <span className="text-amber-300">BackendDeveloper</span> &#123;</p>
                  <p className="pl-4"><span className="text-cyan-400">private String</span> name = <span className="text-emerald-400">"{PORTFOLIO_DATA.personalInfo.name}"</span>;</p>
                  <p className="pl-4"><span className="text-cyan-400">private String</span> role = <span className="text-emerald-400">"Java Backend Developer"</span>;</p>
                  <p className="pl-4"><span className="text-cyan-400">private String[]</span> stack = &#123;<span className="text-emerald-400">"Java 21"</span>, <span className="text-emerald-400">"Spring Boot 4"</span>, <span className="text-emerald-400">"MySQL"</span>&#125;;</p>
                  <p className="pl-4"><span className="text-cyan-400">private boolean</span> openToWork = <span className="text-amber-400">true</span>;</p>
                  <p>&#125;</p>
                </div>
              </div>

              {/* Architecture Badges */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className={`p-2 rounded-lg border ${darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                  <Server className="w-4 h-4 mx-auto text-cyan-400 mb-1" />
                  <span className={`block text-[11px] font-mono font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>REST APIs</span>
                </div>
                <div className={`p-2 rounded-lg border ${darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                  <ShieldCheck className="w-4 h-4 mx-auto text-cyan-400 mb-1" />
                  <span className={`block text-[11px] font-mono font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Spring Security</span>
                </div>
                <div className={`p-2 rounded-lg border ${darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                  <Database className="w-4 h-4 mx-auto text-cyan-400 mb-1" />
                  <span className={`block text-[11px] font-mono font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>MySQL & JPA</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
