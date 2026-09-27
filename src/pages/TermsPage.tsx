import React from 'react';
import { Link } from 'react-router-dom';
import { companyProfile } from '../data/company';
import { AlertTriangle, Scale, ArrowLeft } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#050816] text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Navigation Back */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-brand-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Synqvero AI</span>
          </Link>
        </div>

        {/* Page Title */}
        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>LEGAL AGREEMENT</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Terms of Service
          </h1>

          <p className="text-xs font-mono text-brand-dim">
            Effective Date: January 1, 2026 • Last Updated: September 2026
          </p>
        </div>

        {/* Research Disclaimer Alert */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Healthcare & Research System Notice</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
            Certain engineering projects showcased on this website (including the Hybrid Brain Tumor Detection System) are conducted strictly for academic, technical, and computational computer vision evaluation. They are not FDA, CE, or CDSCO-cleared medical diagnostic devices and must never be utilized for direct clinical patient diagnosis or emergency treatment.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p className="text-brand-muted">
              By accessing the website at <a href="https://synqvero.vercel.app" className="text-brand-cyan hover:underline">synqvero.vercel.app</a>, participating in pilot programs for Synqvero products, or entering into custom software engineering engagements with Synqvero AI, you agree to be bound by these Terms of Service. If you disagree with any portion of these terms, you must discontinue use immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">2. Intellectual Property Rights</h2>
            <p className="text-brand-muted">
              All proprietary algorithms, user interfaces, branding assets, architectural designs, and software frameworks developed by Synqvero AI remain the exclusive intellectual property of Synqvero AI, except where explicitly open-sourced under permissive licenses (e.g., MIT/Apache-2.0 on our verified GitHub repositories). Custom engineering deliverables for paying enterprise clients are governed by explicit Master Services Agreements (MSAs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">3. Product Access & Beta Evaluation</h2>
            <p className="text-brand-muted">
              Synqvero Knowledge AI and affiliated systems marked "In Development" or "Coming Soon" are made available on an evaluation and pilot basis. While we strive for maximum accuracy, deterministic grounding, and high availability, pilot services are provided on an "as-is" and "as-available" basis without warranties of uninterrupted operation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">4. Permitted Use & System Guardrails</h2>
            <p className="text-brand-muted">
              You agree not to use Synqvero AI systems or endpoints to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-xs sm:text-sm">
              <li>Conduct unauthorized security vulnerability scans, adversarial prompt injections against shared infrastructure, or denial-of-service attempts.</li>
              <li>Process content that violates applicable regional or international laws, including illegal, abusive, or infringing material.</li>
              <li>Attempt to decompile or reverse-engineer proprietary binary weights or containerized microservices outside granted license rights.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">5. Limitation of Liability</h2>
            <p className="text-brand-muted">
              To the fullest extent permitted by applicable law, Synqvero AI and its founder, employees, or contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or inability to use our systems, even if informed of the possibility of such damages.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-white/[0.08]">
            <h2 className="font-display text-xl font-bold text-white">6. Legal Jurisdiction & Contact</h2>
            <p className="text-brand-muted">
              These Terms are governed by and construed in accordance with the laws of India. For commercial contracts, licensing agreements, or legal questions, contact:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono space-y-1">
              <div>Synqvero AI — Legal Operations</div>
              <div>Email: <a href={`mailto:${companyProfile.companyEmail}`} className="text-brand-cyan hover:underline">{companyProfile.companyEmail}</a></div>
              <div>Founder: Srikar Jakkena ({companyProfile.founder.personalEmail})</div>
              <div>Location: Hyderabad, India</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
