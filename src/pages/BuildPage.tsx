import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Bot, 
  Database, 
  Workflow, 
  Eye, 
  Layers, 
  CheckCircle2, 
  Wrench,
  RotateCcw
} from 'lucide-react';

interface BuildState {
  systemType: string;
  problemStatement: string;
  capabilities: string[];
  dataSensitivity: string;
}

export const BuildPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [buildData, setBuildData] = useState<BuildState>({
    systemType: 'RAG System',
    problemStatement: '',
    capabilities: ['Search', 'Assist'],
    dataSensitivity: 'Internal'
  });

  const navigate = useNavigate();

  const systemTypeOptions = [
    { label: 'RAG System', desc: 'Query internal documents with exact source citations', icon: <Database className="w-5 h-5 text-brand-cyan" /> },
    { label: 'AI Agent', desc: 'Autonomous execution across tools, APIs, and workflows', icon: <Bot className="w-5 h-5 text-brand-purple" /> },
    { label: 'Document Intelligence', desc: 'High-speed ingestion, OCR, and table extraction', icon: <Layers className="w-5 h-5 text-brand-blue" /> },
    { label: 'Workflow Automation', desc: 'Connecting messaging, CRMs, and operational pipelines', icon: <Workflow className="w-5 h-5 text-brand-cyan" /> },
    { label: 'Computer Vision', desc: 'Real-time gesture tracking, inspection, and video analysis', icon: <Eye className="w-5 h-5 text-brand-blue" /> },
    { label: 'Generative AI Application', desc: 'Custom intelligent software and stateful web interfaces', icon: <Sparkles className="w-5 h-5 text-brand-purple" /> },
    { label: 'AI Chatbot', desc: 'Context-aware conversational copilot for operators or customers', icon: <Bot className="w-5 h-5 text-brand-cyan" /> },
    { label: 'Something Else', desc: 'Novel multi-modal or proprietary operational challenge', icon: <Wrench className="w-5 h-5 text-slate-300" /> }
  ];

  const capabilityOptions = [
    { label: 'Search', desc: 'Retrieve accurate context across large datasets' },
    { label: 'Automate', desc: 'Execute multi-step tasks without human intervention' },
    { label: 'Analyze', desc: 'Surface anomalies, trends, and diagnostic patterns' },
    { label: 'Generate', desc: 'Produce structured reports, code, or contextual text' },
    { label: 'Assist', desc: 'Co-pilot operators in live decision-making' },
    { label: 'Predict', desc: 'Forecast outcomes and classification probabilities' },
    { label: 'Understand', desc: 'Interpret voice, images, diagrams, or unstructured files' }
  ];

  const dataSensitivityOptions = [
    { label: 'Public', desc: 'Public documentation, open wikis, or non-confidential data', badge: 'Standard Cloud' },
    { label: 'Internal', desc: 'Corporate documents, internal runbooks, and team databases', badge: 'Private Tenant' },
    { label: 'Sensitive', desc: 'Proprietary IP, regulated medical data, or financial records', badge: 'On-Prem / Ephemeral' },
    { label: 'Not sure', desc: 'Need technical guidance on security boundaries and compliance', badge: 'Audit Required' }
  ];

  const toggleCapability = (cap: string) => {
    if (buildData.capabilities.includes(cap)) {
      if (buildData.capabilities.length > 1) {
        setBuildData({ ...buildData, capabilities: buildData.capabilities.filter(c => c !== cap) });
      }
    } else {
      setBuildData({ ...buildData, capabilities: [...buildData.capabilities, cap] });
    }
  };

  // Generate blueprint based on inputs
  const getRecommendedBlueprint = () => {
    switch (buildData.systemType) {
      case 'RAG System':
      case 'Document Intelligence':
        return {
          approach: 'Retrieval-Augmented Generation (RAG)',
          architecture: [
            'Document Ingestion & OCR',
            'Semantic Recursive Chunking',
            'Dense Vector Embeddings',
            'ChromaDB / pgvector Store',
            'Hybrid BM25 + Vector Search',
            'Cross-Encoder Reranker',
            'Grounded LLM Reasoning',
            'Answer + Source Citations'
          ],
          technologies: ['Python', 'FastAPI', 'ChromaDB', 'LangChain', 'OpenAI/Groq/Gemini', 'Docker'],
          stages: [
            { num: '01', name: 'Discovery & Schema Audit', time: 'Phase 1' },
            { num: '02', name: 'Document Chunking & Vector Ingestion', time: 'Phase 2' },
            { num: '03', name: 'Hybrid Retrieval & Reranker Tuning', time: 'Phase 3' },
            { num: '04', name: 'Constrained Prompt Envelopes', time: 'Phase 4' },
            { num: '05', name: 'Interactive UI & REST API Endpoints', time: 'Phase 5' },
            { num: '06', name: 'Red-Teaming & Benchmark Validation', time: 'Phase 6' },
            { num: '07', name: 'Containerized Private Deployment', time: 'Phase 7' }
          ]
        };

      case 'AI Agent':
      case 'Workflow Automation':
        return {
          approach: 'Autonomous ReAct Agent & Event-Driven Tool Orchestration',
          architecture: [
            'Inbound Message / Webhook Trigger',
            'Debounced Asynchronous Queue',
            'Agent Planner & Goal Decomposition',
            'Sandboxed Tool & API Execution',
            'State & Conversation Memory',
            'Human-in-the-Loop Safeguard Checkpoint',
            'Action Execution & Database Commit'
          ],
          technologies: ['Python / Node.js', 'FastAPI', 'Puppeteer', 'Socket.io', 'LangChain', 'Docker'],
          stages: [
            { num: '01', name: 'Tool Definition & Workflow Boundaries', time: 'Phase 1' },
            { num: '02', name: 'Debounced Message Queue & Triggers', time: 'Phase 2' },
            { num: '03', name: 'ReAct Agentic Tool-Execution Loop', time: 'Phase 3' },
            { num: '04', name: 'Approval Safeguards & Error Recovery', time: 'Phase 4' },
            { num: '05', name: 'Telemetry Dashboard & API Integrations', time: 'Phase 5' },
            { num: '06', name: 'Adversarial Edge-Case Stress Testing', time: 'Phase 6' },
            { num: '07', name: 'Production Cloud / VPS Rollout', time: 'Phase 7' }
          ]
        };

      case 'Computer Vision':
        return {
          approach: 'Hybrid Edge Computer Vision & Explainable Deep Learning',
          architecture: [
            'Video Frame / Image Stream Capture',
            'Preprocessing & Contrast Normalization',
            'MediaPipe / OpenCV Landmark Feature Tracking',
            'Deep Neural Segmentation (U-Net)',
            'Multi-Class Classifier Ensemble',
            'Grad-CAM Explainability Attention Heatmap',
            'Low-Latency Output Dispatch (<50ms)'
          ],
          technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyTorch / TensorFlow', 'Scikit-learn', 'Streamlit'],
          stages: [
            { num: '01', name: 'Image Dataset Curation & Labeling', time: 'Phase 1' },
            { num: '02', name: 'Frame Landmark Extraction Pipeline', time: 'Phase 2' },
            { num: '03', name: 'Model Training & Decision Boundary Tuning', time: 'Phase 3' },
            { num: '04', name: 'Grad-CAM Explainability Heatmap Layer', time: 'Phase 4' },
            { num: '05', name: 'Sub-50ms Inference Optimization', time: 'Phase 5' },
            { num: '06', name: 'Interactive UI & Camera Calibration', time: 'Phase 6' },
            { num: '07', name: 'Edge / Cloud Endpoint Deployment', time: 'Phase 7' }
          ]
        };

      default:
        return {
          approach: 'Custom Applied AI Application Architecture',
          architecture: [
            'User / Operator Web Interface',
            'FastAPI Asynchronous Gateway',
            'Multi-Model Inference Router (Groq/Gemini/Local)',
            'Vector & Relational Knowledge Store',
            'Deterministic Boundary Validators',
            'Live Telemetry & Audit Logs'
          ],
          technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'ChromaDB', 'Docker'],
          stages: [
            { num: '01', name: 'Problem Audit & Feasibility Scope', time: 'Phase 1' },
            { num: '02', name: 'Functional Prototype MVP (1-2 Weeks)', time: 'Phase 2' },
            { num: '03', name: 'Backend Pipeline & Model Orchestration', time: 'Phase 3' },
            { num: '04', name: 'Security Boundaries & Zero Data Leak Setup', time: 'Phase 4' },
            { num: '05', name: 'UI & Workflow Integration', time: 'Phase 5' },
            { num: '06', name: 'Validation with Real Operators', time: 'Phase 6' },
            { num: '07', name: 'Production Containerization & Handover', time: 'Phase 7' }
          ]
        };
    }
  };

  const blueprint = getRecommendedBlueprint();

  const handleProceedToContact = () => {
    // Store preliminary blueprint in sessionStorage to prefill inquiry
    sessionStorage.setItem('synqvero_blueprint', JSON.stringify({
      systemType: buildData.systemType,
      problem: buildData.problemStatement,
      capabilities: buildData.capabilities.join(', '),
      dataSensitivity: buildData.dataSensitivity,
      recommendedApproach: blueprint.approach
    }));
    navigate('/contact');
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#050816] text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span>INTERACTIVE AI SOLUTION DESIGNER</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Have an AI idea?
          </h1>

          <p className="text-base sm:text-xl text-brand-muted leading-relaxed">
            Let's turn it into an intelligent system. Follow this 4-step discovery path to architect a preliminary solution.
          </p>
        </div>

        {/* Step Indicator Bar */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 h-[2px] bg-white/[0.08] z-0" />
            {[1, 2, 3, 4, 5].map((step) => {
              const isActive = currentStep === step;
              const isDone = currentStep > step;
              return (
                <button
                  key={step}
                  onClick={() => {
                    if (step < currentStep || currentStep === 5) setCurrentStep(step);
                  }}
                  className={`relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-mono text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-glow-cyan scale-110'
                      : isDone
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-[#0B1020] text-brand-dim border border-white/10'
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-4 h-4" /> : `0${step}`}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between text-[10px] font-mono text-brand-dim mt-2 px-1">
            <span>System</span>
            <span>Problem</span>
            <span>Capabilities</span>
            <span>Data</span>
            <span>Blueprint</span>
          </div>
        </div>

        {/* ==================================================== */}
        {/* STEP 1: What are you trying to build? */}
        {/* ==================================================== */}
        {currentStep === 1 && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-8 animate-in fade-in duration-200">
            <div className="space-y-1">
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                STEP 01 OF 04
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                What are you trying to build?
              </h2>
              <p className="text-sm text-brand-muted">
                Select the primary intelligent capability your project centers around.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {systemTypeOptions.map((opt) => {
                const isSelected = buildData.systemType === opt.label;
                return (
                  <button
                    key={opt.label}
                    onClick={() => setBuildData({ ...buildData, systemType: opt.label })}
                    className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between space-y-3 ${
                      isSelected
                        ? 'bg-[#0E172E] border-brand-cyan shadow-glow-cyan/20 scale-[1.02]'
                        : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                        {opt.icon}
                      </div>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-brand-cyan" />}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-white">{opt.label}</h4>
                      <p className="text-xs text-brand-muted leading-relaxed mt-1">{opt.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end pt-4 border-t border-white/[0.06]">
              <button
                onClick={() => setCurrentStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-cyan to-brand-blue shadow-glow-cyan hover:shadow-glow-blue transition-all"
              >
                <span>Continue to Step 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* STEP 2: What problem are you solving? */}
        {/* ==================================================== */}
        {currentStep === 2 && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-8 animate-in fade-in duration-200">
            <div className="space-y-1">
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                STEP 02 OF 04
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                What problem are you solving?
              </h2>
              <p className="text-sm text-brand-muted">
                Describe the specific operational friction, data challenge, or repetitive bottleneck you want AI to address.
              </p>
            </div>

            <div className="space-y-3">
              <textarea
                rows={6}
                value={buildData.problemStatement}
                onChange={(e) => setBuildData({ ...buildData, problemStatement: e.target.value })}
                placeholder="e.g. Our engineering operators spend 2 hours a day searching through PDF equipment manuals and runbooks. We need a system that answers technical questions instantly with verifiable source citations..."
                className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-brand-dim text-sm focus:outline-none focus:border-brand-cyan transition-colors resize-y leading-relaxed font-sans"
              />

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[11px] font-mono text-brand-dim">Quick examples:</span>
                {[
                  'Automating customer inquiry triage on WhatsApp',
                  'Grounded Q&A over internal technical runbooks',
                  'Real-time gesture or defect recognition on camera'
                ].map((eg) => (
                  <button
                    key={eg}
                    type="button"
                    onClick={() => setBuildData({ ...buildData, problemStatement: eg })}
                    className="text-[11px] font-mono text-brand-cyan hover:underline bg-white/[0.02] px-2.5 py-1 rounded-lg border border-white/[0.04]"
                  >
                    "{eg}"
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <button
                onClick={() => setCurrentStep(1)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono text-brand-muted hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={() => setCurrentStep(3)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-cyan to-brand-blue shadow-glow-cyan hover:shadow-glow-blue transition-all"
              >
                <span>Continue to Step 3</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* STEP 3: What should the system help you do? */}
        {/* ==================================================== */}
        {currentStep === 3 && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-8 animate-in fade-in duration-200">
            <div className="space-y-1">
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                STEP 03 OF 04
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                What should the system help you do?
              </h2>
              <p className="text-sm text-brand-muted">
                Select all primary functional goals (choose one or more).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilityOptions.map((cap) => {
                const isSelected = buildData.capabilities.includes(cap.label);
                return (
                  <button
                    key={cap.label}
                    onClick={() => toggleCapability(cap.label)}
                    className={`p-5 rounded-2xl text-left transition-all border flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#0E172E] border-brand-cyan shadow-glow-cyan/20'
                        : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <div>
                      <h4 className="font-display text-base font-bold text-white">{cap.label}</h4>
                      <p className="text-xs text-brand-muted mt-1 leading-relaxed">{cap.desc}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'bg-brand-cyan border-brand-cyan text-black' : 'border-white/20'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <button
                onClick={() => setCurrentStep(2)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono text-brand-muted hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={() => setCurrentStep(4)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-cyan to-brand-blue shadow-glow-cyan hover:shadow-glow-blue transition-all"
              >
                <span>Continue to Step 4</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* STEP 4: How important is your data? */}
        {/* ==================================================== */}
        {currentStep === 4 && (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-8 animate-in fade-in duration-200">
            <div className="space-y-1">
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                STEP 04 OF 04
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                How sensitive is your data?
              </h2>
              <p className="text-sm text-brand-muted">
                This dictates whether cloud inference, private tenant vector stores, or on-premises isolated environments are recommended.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dataSensitivityOptions.map((opt) => {
                const isSelected = buildData.dataSensitivity === opt.label;
                return (
                  <button
                    key={opt.label}
                    onClick={() => setBuildData({ ...buildData, dataSensitivity: opt.label })}
                    className={`p-6 rounded-2xl text-left transition-all border flex flex-col justify-between space-y-3 ${
                      isSelected
                        ? 'bg-[#0E172E] border-brand-cyan shadow-glow-cyan/20'
                        : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/[0.05] text-brand-cyan font-semibold">
                        {opt.badge}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-brand-cyan" />}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white">{opt.label}</h4>
                      <p className="text-xs text-brand-muted mt-1 leading-relaxed">{opt.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <button
                onClick={() => setCurrentStep(3)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono text-brand-muted hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                onClick={() => setCurrentStep(5)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Solution Blueprint</span>
              </button>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* STEP 5: Generated AI Solution Blueprint */}
        {/* ==================================================== */}
        {currentStep === 5 && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Header Banner */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B1020] via-[#0D1528] to-[#070C1D] border border-brand-cyan/40 shadow-2xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/40 text-xs font-mono font-semibold text-brand-cyan">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PRELIMINARY ARCHITECTURE BLUEPRINT</span>
                </div>

                <button
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-muted hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Re-configure Parameters</span>
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-brand-dim uppercase tracking-wider block">
                  RECOMMENDED ARCHITECTURAL APPROACH
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {blueprint.approach}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  Tailored for <strong className="text-brand-cyan">{buildData.systemType}</strong> addressing:{' '}
                  <span className="italic text-white">
                    "{buildData.problemStatement || 'Operational friction and intelligent automation.'}"
                  </span>
                </p>
              </div>

              {/* Badges overview */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.08]">
                <div className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300">
                  Target Capabilities: <span className="text-brand-cyan font-bold">{buildData.capabilities.join(', ')}</span>
                </div>
                <div className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300">
                  Data Governance: <span className="text-brand-purple font-bold">{buildData.dataSensitivity} Tier</span>
                </div>
              </div>
            </div>

            {/* Visual Architecture Pipeline Flow */}
            <div className="p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                  SYSTEM TOPOLOGY
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Recommended Data & Inference Pipeline
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {blueprint.architecture.map((layer, idx) => (
                  <div
                    key={layer}
                    className="p-4 rounded-xl bg-[#050816] border border-white/[0.08] hover:border-brand-cyan/40 transition-colors space-y-2"
                  >
                    <div className="text-[10px] font-mono text-brand-cyan font-bold">
                      STAGE 0{idx + 1}
                    </div>
                    <div className="text-xs font-bold text-white">{layer}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Tech Stack & Development Stages */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Technologies */}
              <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                    INFRASTRUCTURE
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    Suggested Technologies
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {blueprint.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <span className="text-[11px] font-mono text-brand-dim uppercase block">
                    Security & Isolation Guarantee
                  </span>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Zero third-party model fine-tuning on your private queries. Complies with our strict Synqvero Zero-Leak Guarantee.
                  </p>
                </div>
              </div>

              {/* 7 Development Stages */}
              <div className="lg:col-span-7 p-8 rounded-3xl bg-[#0B1020]/90 border border-white/[0.08] space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">
                    ROADMAP TO PRODUCTION
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    Delivery Roadmap
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {blueprint.stages.map((stg) => (
                    <div
                      key={stg.num}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-brand-cyan font-bold">{stg.num}</span>
                        <span className="text-slate-200 font-medium">{stg.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-dim">{stg.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Disclaimer & Talk to Synqvero CTA */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#070C1D] border border-brand-cyan/30 text-center space-y-6">
              <div className="max-w-2xl mx-auto space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Ready to turn this blueprint into working software?
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  We review data pipelines, test model boundaries, and build a rapid feasibility MVP before writing production software.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleProceedToContact}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-glow-cyan hover:shadow-glow-purple transition-all"
                >
                  <span>Talk to Synqvero</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] font-mono text-brand-dim max-w-xl mx-auto pt-2">
                Note: This is a preliminary educational and product-discovery tool. Estimates and architectures are illustrative and do not represent contractual commitments or guaranteed pricing.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
