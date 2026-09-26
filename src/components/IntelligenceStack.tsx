import React, { useState } from 'react';
import { stackLayers, allTechnologies } from '../data/stack';

export const IntelligenceStack: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('ai-agents');

  const selectedLayer = stackLayers.find((l) => l.id === selectedLayerId) || stackLayers[2];

  return (
    <section id="technology" className="relative py-28 bg-[#070C1D] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-blue/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-cyan tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span>ARCHITECTURAL INTEGRITY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            The Synqvero <span className="text-gradient-synq">Intelligence Stack</span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Not a disconnected set of AI demos. A coherent, layered architecture designed to bring deep intelligence from model weights into daily human workflows.
          </p>
        </div>

        {/* Visual Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Center Diagram: The Layered Pipeline */}
          <div className="lg:col-span-7 space-y-3">
            {/* Top User Node */}
            <div className="flex flex-col items-center">
              <div className="px-6 py-2.5 rounded-full bg-[#0B1020] border border-white/20 text-xs font-mono text-white flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                <span className="font-bold tracking-wider">USER / OPERATOR</span>
              </div>
              <div className="h-6 w-[2px] bg-gradient-to-b from-brand-cyan to-transparent my-1" />
            </div>

            {/* Layer 1: Intelligent UI */}
            <div
              onClick={() => setSelectedLayerId('user-interface')}
              className={`cursor-pointer p-4 rounded-xl transition-all duration-300 border text-center ${
                selectedLayerId === 'user-interface'
                  ? 'bg-[#0E172E] border-brand-cyan shadow-glow-cyan/40 scale-[1.01]'
                  : 'bg-[#0B1020]/90 border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-brand-cyan mb-1">
                <span>01</span>
                <span>INTELLIGENT UI</span>
                <span className="text-brand-muted text-[10px]">React • Streamlit • Latency &lt;50ms</span>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="h-5 w-[2px] bg-gradient-to-b from-brand-cyan to-brand-blue" />
            </div>

            {/* Layer 2: AI Applications */}
            <div
              onClick={() => setSelectedLayerId('ai-applications')}
              className={`cursor-pointer p-4 rounded-xl transition-all duration-300 border text-center ${
                selectedLayerId === 'ai-applications'
                  ? 'bg-[#0E172E] border-brand-blue shadow-glow-subtle scale-[1.01]'
                  : 'bg-[#0B1020]/90 border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-brand-blue mb-1">
                <span>02</span>
                <span>AI APPLICATIONS & WORKFLOW ORCHESTRATION</span>
                <span className="text-brand-muted text-[10px]">FastAPI • Async Queues</span>
              </div>
            </div>

            {/* Split connector into dual parallel engines (AI AGENTS + RAG) */}
            <div className="relative py-2">
              <div className="flex justify-center">
                <div className="h-4 w-[2px] bg-brand-blue" />
              </div>
              <div className="max-w-[80%] mx-auto h-[2px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue" />
              <div className="flex justify-around max-w-[80%] mx-auto">
                <div className="h-4 w-[2px] bg-brand-blue" />
                <div className="h-4 w-[2px] bg-brand-purple" />
              </div>
            </div>

            {/* Layer 3: Dual Parallel Engines (AI Agents & RAG) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Left Sub-Engine: AI Agents */}
              <div
                onClick={() => setSelectedLayerId('ai-agents')}
                className={`cursor-pointer p-5 rounded-xl transition-all duration-300 border ${
                  selectedLayerId === 'ai-agents'
                    ? 'bg-[#0E172E] border-brand-blue shadow-glow-subtle'
                    : 'bg-[#0B1020]/90 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-brand-blue mb-2">
                  <span>03-A</span>
                  <span className="font-bold">AI AGENTS</span>
                </div>
                <p className="text-xs text-brand-muted">
                  ReAct loops, autonomous tool calling, multi-step planning & execution.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white">LangChain</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white">Tool Use</span>
                </div>
              </div>

              {/* Right Sub-Engine: RAG */}
              <div
                onClick={() => setSelectedLayerId('rag-retrieval')}
                className={`cursor-pointer p-5 rounded-xl transition-all duration-300 border ${
                  selectedLayerId === 'rag-retrieval'
                    ? 'bg-[#151230] border-brand-purple shadow-glow-purple/40'
                    : 'bg-[#0B1020]/90 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-brand-purple mb-2">
                  <span>03-B</span>
                  <span className="font-bold">RAG & RETRIEVAL</span>
                </div>
                <p className="text-xs text-brand-muted">
                  Dense embeddings, ChromaDB, semantic chunking & zero-hallucination context.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white">ChromaDB</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white">Embeddings</span>
                </div>
              </div>
            </div>

            {/* Merge Connector */}
            <div className="relative py-2">
              <div className="flex justify-around max-w-[80%] mx-auto">
                <div className="h-4 w-[2px] bg-brand-blue" />
                <div className="h-4 w-[2px] bg-brand-purple" />
              </div>
              <div className="max-w-[80%] mx-auto h-[2px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue" />
              <div className="flex justify-center">
                <div className="h-4 w-[2px] bg-brand-purple" />
              </div>
            </div>

            {/* Layer 4: LLM Layer */}
            <div
              onClick={() => setSelectedLayerId('llm-layer')}
              className={`cursor-pointer p-4 rounded-xl transition-all duration-300 border text-center ${
                selectedLayerId === 'llm-layer'
                  ? 'bg-[#151230] border-brand-purple shadow-glow-purple/40 scale-[1.01]'
                  : 'bg-[#0B1020]/90 border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-brand-purple mb-1">
                <span>04</span>
                <span>LLM & FOUNDATION INFERENCE LAYER</span>
                <span className="text-brand-muted text-[10px]">Cloud & Edge LLMs • Fine-Tuning</span>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="h-4 w-[2px] bg-brand-purple" />
            </div>

            {/* Layer 5: Knowledge & Data */}
            <div
              onClick={() => setSelectedLayerId('knowledge-data')}
              className={`cursor-pointer p-4 rounded-xl transition-all duration-300 border text-center ${
                selectedLayerId === 'knowledge-data'
                  ? 'bg-[#0E172E] border-brand-blue shadow-glow-subtle scale-[1.01]'
                  : 'bg-[#0B1020]/90 border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-brand-blue mb-1">
                <span>05</span>
                <span>KNOWLEDGE & DATA SYSTEMS</span>
                <span className="text-brand-muted text-[10px]">Vector DBs • Documents • SQLite</span>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="h-4 w-[2px] bg-brand-cyan" />
            </div>

            {/* Layer 6: APIs & Systems */}
            <div
              onClick={() => setSelectedLayerId('apis-systems')}
              className={`cursor-pointer p-4 rounded-xl transition-all duration-300 border text-center ${
                selectedLayerId === 'apis-systems'
                  ? 'bg-[#0E172E] border-brand-cyan shadow-glow-cyan/40 scale-[1.01]'
                  : 'bg-[#0B1020]/90 border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-brand-cyan mb-1">
                <span>06</span>
                <span>APIs, BUSINESS PROCESSES & VISION SENSORS</span>
                <span className="text-brand-muted text-[10px]">OpenCV • MediaPipe • REST APIs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layer Inspector & Deep Tech Breakdown */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            {/* Active Layer Inspector Card */}
            <div className="p-6 rounded-2xl glass-panel-glow text-left space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.05] text-brand-cyan">
                  LAYER LEVEL 0{selectedLayer.level}
                </span>
                <span className="text-xs font-mono text-brand-dim">SELECTED COMPONENT</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-white">
                  {selectedLayer.label}
                </h3>
                <p className="text-xs font-mono text-brand-cyan tracking-wider">
                  {selectedLayer.sublabel}
                </p>
                <p className="text-sm text-brand-muted leading-relaxed pt-2">
                  {selectedLayer.description}
                </p>
              </div>

              {/* Technologies in this layer */}
              <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                <div className="text-xs font-mono text-brand-dim uppercase tracking-wider">
                  Core Technologies In This Layer
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedLayer.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-[#050816] text-white border border-brand-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Complete Technology Ecosystem */}
            <div className="p-6 rounded-2xl bg-[#0B1020]/80 border border-white/[0.08] space-y-4 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-brand-muted uppercase tracking-widest">
                  Engineering Stack
                </span>
                <span className="text-[10px] font-mono text-brand-cyan">VERIFIED RIGOR</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {allTechnologies.map((item) => (
                  <div
                    key={item.name}
                    className="group relative px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-brand-cyan/30 transition-all cursor-default text-xs font-medium text-white flex items-center gap-1.5"
                  >
                    <span>{item.name}</span>
                    <span className="text-[10px] text-brand-dim font-mono hidden sm:inline">
                      ({item.category})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
