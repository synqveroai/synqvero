import React, { useState } from 'react';
import { companyProfile } from '../data/company';
import { LinkedinIcon } from '../components/LinkedinIcon';
import { 
  Phone, 
  Globe, 
  MapPin, 
  Check, 
  Copy, 
  Send, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Synqvero Knowledge AI (Product Access)',
    timeline: 'Exploration',
    message: '',
  });

  const [copiedCompany, setCopiedCompany] = useState(false);
  const [copiedPersonal, setCopiedPersonal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    'Synqvero Knowledge AI (Product Access)',
    'Custom AI Application Development',
    'Autonomous AI Agents & Automation',
    'RAG & Enterprise Knowledge Systems',
    'Computer Vision & Visual Intelligence',
    'AI Architecture Audit & Consulting',
    'General Inquiry / Collaboration'
  ];

  const timelineOptions = [
    'Immediate (Next 2-4 weeks)',
    'Active Planning (1-3 months)',
    'Prototype / Feasibility Stage',
    'Exploration / Research'
  ];

  const handleCopyCompany = () => {
    navigator.clipboard.writeText(companyProfile.companyEmail);
    setCopiedCompany(true);
    setTimeout(() => setCopiedCompany(false), 2000);
  };

  const handleCopyPersonal = () => {
    navigator.clipboard.writeText(companyProfile.founder.personalEmail);
    setCopiedPersonal(true);
    setTimeout(() => setCopiedPersonal(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    const subject = encodeURIComponent(`[Synqvero Inquiry] ${formData.interest} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany/Org: ${formData.company || 'N/A'}\nInterest: ${formData.interest}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}\n`
    );

    window.location.href = `mailto:${companyProfile.companyEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#050816] text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span>START A CONVERSATION</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Let's build something <span className="text-gradient-synq">intelligent.</span>
          </h1>

          <p className="text-base sm:text-xl text-brand-muted leading-relaxed">
            Have a knowledge base you want to unlock, a multi-step workflow you want to automate, or an inquiry about Synqvero Knowledge AI? We respond directly within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Comprehensive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1020]/95 border border-white/[0.08] shadow-2xl space-y-6">
              <div className="space-y-1">
                <h2 className="font-display text-2xl font-bold text-white">
                  Send a Project or Product Inquiry
                </h2>
                <p className="text-xs font-mono text-brand-cyan">
                  No automated chatbots. Your message goes straight to the engineering team.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Inquiry Prepared
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been formulated. If your email client did not automatically launch, feel free to send directly to{' '}
                    <strong className="text-brand-cyan">{companyProfile.companyEmail}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl text-xs font-mono text-brand-muted hover:text-white bg-white/[0.04] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">
                        Your Name <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Chen"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-brand-dim text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">
                        Work Email <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-brand-dim text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp / Research Lab"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-brand-dim text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  {/* What are you looking to build or explore? */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      What are you looking to build or explore? <span className="text-brand-cyan">*</span>
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070C1D] border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors cursor-pointer"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#050816] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline / Project Stage */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Timeline / Stage
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070C1D] border border-white/10 text-white text-sm focus:outline-none focus:border-brand-cyan transition-colors cursor-pointer"
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#050816] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Project Details / Specific Workflow Challenge <span className="text-brand-cyan">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe the workflow, data formats, team bottlenecks, or specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-brand-dim text-sm focus:outline-none focus:border-brand-cyan transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Project Inquiry</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-between text-[11px] font-mono text-brand-dim pt-2">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Confidential NDA-Ready Discussion</span>
                    </span>
                    <span>Direct founder response</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact Alternatives & Founder Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Official Company Channel Card */}
            <div className="p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                  OFFICIAL CONTACT
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  Synqvero AI Headquarters
                </h3>
              </div>

              {/* Company Email Copy Box */}
              <div className="p-4 rounded-2xl bg-[#050816] border border-white/10 flex items-center justify-between gap-3">
                <div className="space-y-0.5 truncate">
                  <span className="text-[10px] font-mono text-brand-dim uppercase block">
                    Company Inbox
                  </span>
                  <a
                    href={`mailto:${companyProfile.companyEmail}`}
                    className="font-mono text-xs sm:text-sm text-brand-cyan hover:underline truncate block"
                  >
                    {companyProfile.companyEmail}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCompany}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-brand-muted hover:text-white transition-colors shrink-0"
                  aria-label="Copy Company Email"
                  title="Copy Company Email"
                >
                  {copiedCompany ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <MapPin className="w-4 h-4 text-brand-purple shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Founder Personal Contact Card */}
            <div className="p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-purple uppercase tracking-wider">
                  DIRECT FOUNDER ACCESS
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {companyProfile.founder.name}
                </h3>
                <p className="text-xs font-mono text-brand-dim">
                  {companyProfile.founder.role} • {companyProfile.founder.focus}
                </p>
              </div>

              {/* Founder Personal Email */}
              <div className="p-4 rounded-2xl bg-[#050816] border border-white/10 flex items-center justify-between gap-3">
                <div className="space-y-0.5 truncate">
                  <span className="text-[10px] font-mono text-brand-dim uppercase block">
                    Personal Email
                  </span>
                  <a
                    href={`mailto:${companyProfile.founder.personalEmail}`}
                    className="font-mono text-xs sm:text-sm text-slate-200 hover:text-brand-cyan hover:underline truncate block"
                  >
                    {companyProfile.founder.personalEmail}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPersonal}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-brand-muted hover:text-white transition-colors shrink-0"
                  aria-label="Copy Personal Email"
                  title="Copy Personal Email"
                >
                  {copiedPersonal ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Founder Phone Number */}
              <div className="p-4 rounded-2xl bg-[#050816] border border-white/10 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-brand-dim uppercase block">
                    Direct Contact Number
                  </span>
                  <a
                    href={`tel:${companyProfile.founder.contactNumberRaw}`}
                    className="font-mono text-xs sm:text-sm text-emerald-400 hover:underline block"
                  >
                    {companyProfile.founder.contactNumber}
                  </a>
                </div>

                <a
                  href={`tel:${companyProfile.founder.contactNumberRaw}`}
                  className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              {/* Founder Links */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={companyProfile.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-brand-blue" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={companyProfile.founder.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
