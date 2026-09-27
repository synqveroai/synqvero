import React from 'react';
import { Link } from 'react-router-dom';
import { companyProfile } from '../data/company';
import { GithubIcon } from '../components/GithubIcon';
import { LinkedinIcon } from '../components/LinkedinIcon';
import { 
  Target, 
  Database, 
  ShieldCheck, 
  Share2, 
  Rocket, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const principles = [
    {
      title: 'Real Problems Over AI Demos',
      desc: 'We never engineer complex models searching for an artificial use case. We start with real operator friction points and work backwards to the optimal intelligence architecture.',
      icon: <Target className="w-5 h-5 text-brand-cyan" />
    },
    {
      title: 'Grounded Data Over Hallucinations',
      desc: 'Generative models must be anchored in verified organizational knowledge. We design hybrid retrieval, deterministic boundaries, and line-level citation traceability.',
      icon: <Database className="w-5 h-5 text-brand-blue" />
    },
    {
      title: 'Explainable Decisions Over Black Boxes',
      desc: 'Whether it is Grad-CAM heatmaps for vision models or semantic chunk provenance in RAG, users and audit teams must understand why an intelligent decision was made.',
      icon: <ShieldCheck className="w-5 h-5 text-brand-cyan" />
    },
    {
      title: 'Seamless Integration Over Disruption',
      desc: 'Companies should not be forced to discard working workflows to adopt AI. Our software communicates seamlessly with existing databases, APIs, and enterprise communication channels.',
      icon: <Share2 className="w-5 h-5 text-brand-purple" />
    },
    {
      title: 'Continuous Refinement Over Static Deployments',
      desc: 'Real intelligence is an evolving process. We deploy lightweight telemetry to capture production edge cases, retune prompts, and refine embeddings as organizations scale.',
      icon: <Rocket className="w-5 h-5 text-brand-cyan" />
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#050816] text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* Page Header & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span>ABOUT SYNQVERO AI</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Building AI that works <span className="text-gradient-synq">alongside people.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Synqvero AI is an AI technology company focused on building practical intelligent systems, generative AI applications, autonomous agents, automation solutions, and computer vision systems.
            </p>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We founded Synqvero on a simple realization: while AI research is advancing at breakneck speed, organizations are struggling to integrate models into daily operations. We build the connective tissue—hardened, explainable, and production-tested software that turns artificial intelligence into tangible operational capability.
            </p>
          </div>

          {/* Logo & Philosophy Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] shadow-2xl space-y-6 max-w-md w-full text-center">
              <div className="flex justify-center">
                <div className="p-3.5 rounded-2xl bg-[#050816] border border-white/10 shadow-glow-cyan/20">
                  <img
                    src="/assets/synqvero-logo.jpg"
                    alt="Synqvero AI Brand"
                    className="h-28 w-auto object-contain rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-2xl font-bold text-white">SYNQVERO AI</h3>
                <p className="text-xs font-mono text-brand-cyan">
                  "{companyProfile.brandPhilosophy}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-brand-dim space-y-2">
                <div>FOUNDED: HYDERABAD, INDIA</div>
                <div>FOCUS: APPLIED AI & SYSTEMS ENGINEERING</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1020]/90 border border-brand-cyan/20 space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan font-mono text-sm font-bold">
              01
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-base text-slate-300 leading-relaxed">
              "{companyProfile.mission}"
            </p>
            <p className="text-xs text-brand-muted leading-relaxed pt-2">
              To strip away the hollow hype surrounding artificial intelligence and deliver grounded, production-grade systems that operators and businesses rely on every single day.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1020]/90 border border-brand-purple/20 space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-purple font-mono text-sm font-bold">
              02
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-base text-slate-300 leading-relaxed">
              "{companyProfile.vision}"
            </p>
            <p className="text-xs text-brand-muted leading-relaxed pt-2">
              We envision a future where intelligence works fluidly across tools and workflows—empowering human operators rather than forcing them to adapt to awkward software abstractions.
            </p>
          </div>
        </section>

        {/* The 5-Step Brand Philosophy Flow */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B1020] to-[#070C1D] border border-white/[0.08] space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
              CORE OPERATING PHILOSOPHY
            </div>
            <h2 className="font-display text-3xl font-bold text-white">
              How We Approach Every Problem
            </h2>
            <p className="text-sm text-brand-muted">
              Technology should not force people to change how they work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {companyProfile.philosophyFlow.map((step, idx) => (
              <div
                key={step}
                className="p-5 rounded-2xl bg-[#050816]/80 border border-white/[0.06] space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <div className="font-mono text-xs font-bold text-white">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Principles */}
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
              SYNQVERO STANDARDS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Our Engineering Principles
            </h2>
            <p className="text-sm text-brand-muted max-w-2xl">
              The fundamental guidelines that steer our architectural choices, tool selection, and deployment criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, idx) => (
              <div
                key={p.title}
                className={`p-7 rounded-2xl bg-[#0B1020]/90 border border-white/[0.08] hover:border-brand-cyan/40 transition-all space-y-4 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================== */}
        {/* FOUNDER & LEADERSHIP PROFILE */}
        {/* ==================================================== */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="space-y-1">
              <div className="text-xs font-mono text-brand-cyan tracking-wider uppercase">
                FOUNDER & LEADERSHIP
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {companyProfile.founder.name}
              </h2>
              <p className="text-sm font-mono text-brand-purple">
                {companyProfile.founder.role}
              </p>
            </div>

            {/* Social & Portfolio Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={companyProfile.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-brand-blue" />
                <span>LinkedIn</span>
              </a>

              <a
                href={companyProfile.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-white" />
                <span>GitHub</span>
              </a>

              <a
                href={companyProfile.founder.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Portfolio</span>
              </a>
            </div>
          </div>

          <div className="space-y-4 text-base text-slate-300 leading-relaxed max-w-4xl">
            <p>
              {companyProfile.founder.bio}
            </p>
            <p className="text-sm text-brand-muted">
              Srikar is committed to building AI systems that solve real problems rather than writing theoretical papers that never see production. His engineering spans custom autonomous agents, low-latency voice integration, explainable healthcare AI, and robust RAG architectures designed for private organizational data.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/[0.08] text-xs font-mono">
            <div className="space-y-1">
              <span className="text-brand-dim uppercase tracking-wider block">Specialized Focus</span>
              <span className="text-brand-cyan font-semibold block">{companyProfile.founder.focus}</span>
            </div>

            <div className="space-y-1">
              <span className="text-brand-dim uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Personal Email</span>
              </span>
              <a
                href={`mailto:${companyProfile.founder.personalEmail}`}
                className="text-white hover:text-brand-cyan transition-colors block"
              >
                {companyProfile.founder.personalEmail}
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-brand-dim uppercase tracking-wider flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Contact Number</span>
              </span>
              <a
                href={`tel:${companyProfile.founder.contactNumberRaw}`}
                className="text-white hover:text-brand-cyan transition-colors block"
              >
                {companyProfile.founder.contactNumber}
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-brand-dim uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-purple" />
                <span>Location</span>
              </span>
              <span className="text-white block">{companyProfile.founder.location}</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-cyan/10 via-brand-blue/10 to-brand-purple/10 border border-brand-cyan/30 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Let's build intelligence that works in sync with you.
          </h2>
          <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto">
            Whether you want to explore Synqvero Knowledge AI or discuss custom AI development, we'd love to connect.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </main>
  );
};
