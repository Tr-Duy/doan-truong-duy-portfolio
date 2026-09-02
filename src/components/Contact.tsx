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
    <section id="contact" className="py-10 sm:py-14 bg-[#E8EEF5] border-b border-[#CBD5E1]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left space-y-1 mb-6">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
            Contact
          </span>
          <h2 className="text-2xl sm:text-[28px] font-extrabold text-[#0F172A] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl">
            Currently open to <strong className="font-semibold text-[#0F172A]">Java Backend Intern / Fresher / Junior</strong> positions in Ho Chi Minh City or remote roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Main Contact Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-white border border-[#CBD5E1] shadow-[0_4px_16px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:border-[#94A3B8] transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-[#EFF6FF] text-blue-600 border border-[#BFDBFE]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personalInfo.email, 'email')}
                    className="p-1.5 px-2 rounded-md text-xs font-medium flex items-center gap-1 border border-[#CBD5E1] bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A] transition-all"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div>
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#64748B]">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-[#0F172A] hover:text-blue-600 transition-colors block truncate mt-0.5"
                  >
                    {PORTFOLIO_DATA.personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Send Email Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-white border border-[#CBD5E1] shadow-[0_4px_16px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:border-[#94A3B8] transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-[#EFF6FF] text-blue-600 border border-[#BFDBFE]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personalInfo.phone, 'phone')}
                    className="p-1.5 px-2 rounded-md text-xs font-medium flex items-center gap-1 border border-[#CBD5E1] bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A] transition-all"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div>
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#64748B]">
                    Phone Number
                  </span>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
                    className="text-sm sm:text-base font-bold text-[#0F172A] hover:text-blue-600 transition-colors block mt-0.5"
                  >
                    {PORTFOLIO_DATA.personalInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
                <a
                  href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Call Phone Number</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Social Profiles & CTA Card */}
          <div className="lg:col-span-4 text-left">
            <div className="p-5 rounded-xl bg-white border border-[#CBD5E1] shadow-[0_4px_16px_rgba(15,23,42,0.06)] space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] pb-2 border-b border-[#E2E8F0]">
                Profiles & Location
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#EFF6FF] text-blue-600 border border-[#BFDBFE]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#64748B]">
                      Based In
                    </span>
                    <span className="text-xs font-semibold text-[#0F172A]">
                      {PORTFOLIO_DATA.personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="pt-0.5 flex flex-col gap-2">
                  <a
                    href={PORTFOLIO_DATA.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#475569] hover:bg-white hover:text-[#0F172A] transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-[#475569]" />
                      <span className="text-xs font-semibold">GitHub Profile</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#475569] hover:bg-[#EFF6FF] hover:text-[#1D4ED8] hover:border-[#BFDBFE] transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-semibold">LinkedIn Profile</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personalInfo.cvPath}
                    download="CV-Doan-Truong-Duy.pdf"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#475569] hover:bg-white hover:text-[#0F172A] transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Download className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-semibold">Download CV (PDF)</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xs text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
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

