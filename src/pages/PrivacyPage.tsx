import React from 'react';
import { Link } from 'react-router-dom';
import { companyProfile } from '../data/company';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DATA GOVERNANCE</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs font-mono text-brand-dim">
            Effective Date: January 1, 2026 • Last Updated: September 2026
          </p>
        </div>

        {/* Core Commitments Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1020]/90 border border-brand-cyan/30 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase tracking-wider font-bold">
            <Lock className="w-4 h-4" />
            <span>The Synqvero Zero-Leak Guarantee</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed">
            We believe enterprise intelligence requires absolute confidentiality. Synqvero AI will never use your proprietary organizational documents, private source code, or internal database queries to train foundational models for third parties.
          </p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">1. Information We Collect</h2>
            <p className="text-brand-muted">
              We collect information that you directly provide to us when submitting inquiries, requesting product access for Synqvero Knowledge AI, or establishing a custom engineering contract. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-xs sm:text-sm">
              <li><strong>Contact Information:</strong> Name, professional email address, company name, and phone number.</li>
              <li><strong>Project Context:</strong> Workflow descriptions, operational bottlenecks, and technical specifications voluntarily submitted through our contact forms.</li>
              <li><strong>Telemetry & Usage Data:</strong> Standard server logs, IP addresses, browser types, and anonymous interaction analytics strictly used to ensure website uptime and performance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">2. Processing of Document Data in AI Systems</h2>
            <p className="text-brand-muted">
              When using or piloting Synqvero products (such as Synqvero Knowledge AI) or custom RAG implementations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-xs sm:text-sm">
              <li><strong>Contextual Ingestion:</strong> Ingested documents (PDFs, DOCX, text files) are parsed, chunked, and embedded into isolated vector stores allocated exclusively to your tenant or on-premises environment.</li>
              <li><strong>Non-Persistence & Ephemeral Options:</strong> For sensitive environments, we provide fully in-memory and air-gapped vector persistence options where document embeddings are scrubbed immediately after the operational session terminates.</li>
              <li><strong>Zero Training on Your Data:</strong> Neither Synqvero nor our underlying inference providers retain your inputs for model fine-tuning without explicit, bilateral written agreements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">3. Third-Party Infrastructure & Model Providers</h2>
            <p className="text-brand-muted">
              Depending on deployment architecture, our systems may interface with vetted enterprise cloud providers (e.g., Google Cloud, Groq, AWS) via secure, zero-data-retention API agreements. Enterprise clients may elect self-hosted or virtual private cloud (VPC) deployments to ensure zero external network calls.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">4. Data Security & Storage Boundaries</h2>
            <p className="text-brand-muted">
              We implement industry-standard encryption in transit (TLS 1.3) and at rest (AES-256). Access to production clusters is restricted to authorized engineering personnel governed by multi-factor authentication and strict least-privilege role boundaries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-white">5. Your Rights & Data Deletion</h2>
            <p className="text-brand-muted">
              You retain full ownership of all data submitted to Synqvero. You may request the immediate deletion, export, or audit of any personal or organizational data stored in our records at any time by contacting our engineering compliance team.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-white/[0.08]">
            <h2 className="font-display text-xl font-bold text-white">6. Privacy Inquiries & Contact</h2>
            <p className="text-brand-muted">
              For any questions regarding our data governance, vector storage isolation, or custom non-disclosure agreements (NDAs), reach out directly:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono space-y-1">
              <div>Synqvero AI — Security & Compliance</div>
              <div>Email: <a href={`mailto:${companyProfile.companyEmail}`} className="text-brand-cyan hover:underline">{companyProfile.companyEmail}</a></div>
              <div>Founder Contact: <a href={`mailto:${companyProfile.founder.personalEmail}`} className="text-brand-cyan hover:underline">{companyProfile.founder.personalEmail}</a></div>
              <div>Location: {companyProfile.founder.location}</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
