import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, Terminal, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className={`py-16 sm:py-24 border-t transition-colors ${
      darkMode ? 'border-slate-800/80 bg-slate-950/60' : 'border-slate-200 bg-slate-50/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            <Terminal className="w-4 h-4" />
            <span>07. Contact & Get In Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Interested in Working Together?
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mt-1 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            I am currently open to <strong className="text-cyan-400">Java Backend Intern & Fresher</strong> opportunities in Ho Chi Minh City or remote roles. Feel free to reach out directly via email or phone!
          </p>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Contact Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            
            {/* Email Card */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
              darkMode
                ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40'
                : 'bg-white border-slate-200 hover:border-cyan-300 shadow-sm'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personalInfo.email, 'email')}
                    className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 border transition-all ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-cyan-400'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-cyan-600'
                    }`}
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div>
                  <span className={`block text-xs font-mono uppercase tracking-wider ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                    className={`text-base sm:text-lg font-bold font-mono hover:text-cyan-400 transition-colors block truncate mt-1 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {PORTFOLIO_DATA.personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/40">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Send Email Message</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
              darkMode
                ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40'
                : 'bg-white border-slate-200 hover:border-cyan-300 shadow-sm'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personalInfo.phone, 'phone')}
                    className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 border transition-all ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-cyan-400'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-cyan-600'
                    }`}
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div>
                  <span className={`block text-xs font-mono uppercase tracking-wider ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Phone Number
                  </span>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
                    className={`text-base sm:text-lg font-bold font-mono hover:text-cyan-400 transition-colors block mt-1 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {PORTFOLIO_DATA.personalInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/40">
                <a
                  href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Call Phone Number</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Social Profiles & CTA Card */}
          <div className="lg:col-span-4 text-left">
            <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
              darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold font-mono tracking-tight pb-4 border-b ${
                darkMode ? 'text-white border-slate-800' : 'text-slate-900 border-slate-200'
              }`}>
                Connect & Location
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`block text-xs font-mono uppercase ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Based In
                    </span>
                    <span className={`text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {PORTFOLIO_DATA.personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <a
                    href={PORTFOLIO_DATA.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-cyan-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm font-semibold font-mono">GitHub Profile</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-cyan-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm font-semibold font-mono">LinkedIn Profile</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Get In Touch</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
