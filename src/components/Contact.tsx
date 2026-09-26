import React, { useState } from 'react';
import { Mail, Globe, ExternalLink, Copy, Check, Send, Phone } from 'lucide-react';
import { companyProfile } from '../data/company';
import { GithubIcon } from './GithubIcon';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'Computer Vision',
    message: '',
  });

  const [copiedCompany, setCopiedCompany] = useState(false);
  const [copiedPersonal, setCopiedPersonal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyCompanyEmail = () => {
    navigator.clipboard.writeText(companyProfile.companyEmail);
    setCopiedCompany(true);
    setTimeout(() => setCopiedCompany(false), 2000);
  };

  const handleCopyPersonalEmail = () => {
    navigator.clipboard.writeText(companyProfile.founder.personalEmail);
    setCopiedPersonal(true);
    setTimeout(() => setCopiedPersonal(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    const subject = encodeURIComponent(`Project Inquiry: ${formData.domain} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Synqvero Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nDomain: ${formData.domain}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${companyProfile.companyEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 bg-[#050816] overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Have a problem <span className="text-gradient-synq">worth solving?</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Tell us what you're building, what isn't working, or where you want AI to make a difference. We respond with technical candor and architectural clarity.
          </p>
        </div>

        {/* Contact Layout: Form on Left, Direct Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Interactive Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] shadow-2xl text-left space-y-6">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Message Prepared
                </h3>
                <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. If your mail client did not automatically launch, you can always write to us directly at{' '}
                  <button
                    onClick={handleCopyCompanyEmail}
                    className="text-brand-cyan underline font-mono"
                  >
                    {companyProfile.companyEmail}
                  </button>
                  .
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-mono text-brand-muted hover:text-white border border-white/10 rounded-xl"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-brand-muted block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-brand-dim text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-brand-muted block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-brand-dim text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-brand-muted block">
                    PROJECT FOCUS AREA
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                  >
                    <option value="Autonomous AI Agents & WhatsApp Copilots">Autonomous AI Agents & Copilots</option>
                    <option value="Computer Vision">Computer Vision & Perception</option>
                    <option value="Generative AI & LLMs">Generative AI & Large Language Models</option>
                    <option value="RAG & Knowledge Systems">RAG & Enterprise Knowledge Systems</option>
                    <option value="Intelligent Workflow Automation">Intelligent Workflow Automation</option>
                    <option value="Custom AI Software">Custom Full-Stack AI Software</option>
                    <option value="Other Technical Challenge">Other Real-World Challenge</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-brand-muted block">
                    DESCRIBE YOUR CHALLENGE OR WORKFLOW *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you're building, what isn't working, or where you want AI to make a difference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#050816] border border-white/10 text-white placeholder-brand-dim text-sm focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Start a conversation</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Founder Profile */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Primary Company Email Card */}
            <div className="p-6 rounded-2xl bg-[#0B1020]/90 border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                    Company Inquiries
                  </div>
                  <a
                    href={`mailto:${companyProfile.companyEmail}`}
                    className="font-mono text-base font-bold text-white hover:text-brand-cyan transition-colors"
                  >
                    {companyProfile.companyEmail}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={handleCopyCompanyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-brand-muted hover:text-white transition-colors"
                >
                  {copiedCompany ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${companyProfile.companyEmail}?subject=Project%20Inquiry%20-%20Synqvero`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-brand-muted hover:text-white transition-colors"
                >
                  <span>Open Mail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Founder Direct & Contact Details */}
            <div className="p-6 rounded-2xl bg-[#0B1020]/90 border border-white/[0.08] space-y-5">
              <div>
                <div className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                  Founder & Engineering Contact
                </div>
                <h4 className="font-display text-xl font-bold text-white mt-1">
                  {companyProfile.founder.name}
                </h4>
                <p className="text-xs font-mono text-brand-purple">
                  {companyProfile.founder.role} • {companyProfile.founder.focus}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                {/* Personal Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-brand-muted">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-brand-cyan" />
                    <span>{companyProfile.founder.personalEmail}</span>
                  </div>
                  <button
                    onClick={handleCopyPersonalEmail}
                    className="hover:text-white transition-colors"
                    title="Copy personal email"
                  >
                    {copiedPersonal ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-brand-dim" />
                    )}
                  </button>
                </div>

                {/* Direct Phone Number */}
                <a
                  href={`tel:${companyProfile.founder.contactNumberRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] text-xs text-brand-muted hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono text-white font-medium">{companyProfile.founder.contactNumber}</span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-dim uppercase">Call / WhatsApp</span>
                </a>

                {/* GitHub */}
                <a
                  href={companyProfile.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] text-xs text-brand-muted hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-brand-cyan" />
                    <span>github.com/JakkenaSrikar</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Portfolio */}
                <a
                  href={companyProfile.founder.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] text-xs text-brand-muted hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-brand-purple" />
                    <span>srikarjakkena.vercel.app</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
