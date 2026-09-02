import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, Download, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Contact: React.FC = () => {
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
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Currently open to <strong className="font-semibold text-slate-900">Java Backend Intern / Fresher / Junior</strong> positions in Ho Chi Minh City or remote roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Contact Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personalInfo.email, 'email')}
                    className="p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                    className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors block truncate mt-1"
                  >
                    {PORTFOLIO_DATA.personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Send Email Message</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider font-semibold text-slate-400">
                    Phone Number
                  </span>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
                    className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors block mt-1"
                  >
                    {PORTFOLIO_DATA.personalInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Call Phone Number</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Social Profiles & CTA Card */}
          <div className="lg:col-span-4 text-left">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-3 border-b border-slate-100">
                Profiles & Location
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-slate-400">
                      Based In
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {PORTFOLIO_DATA.personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="pt-1 flex flex-col gap-2.5">
                  <a
                    href={PORTFOLIO_DATA.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-5 h-5 text-slate-700" />
                      <span className="text-sm font-semibold">GitHub Profile</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold">LinkedIn Profile</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personalInfo.cvPath}
                    download="CV-Doan-Truong-Duy.pdf"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold">Download CV (PDF)</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xs text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

