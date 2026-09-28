import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { querySynqveroKnowledge, type KnowledgeResponse } from '../services/aiKnowledge';
import { Send, Bot, Sparkles, ChevronDown, RefreshCw, ArrowRight } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  links?: { label: string; url: string }[];
  category?: string;
}

export const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Hello! I'm the Synqvero AI assistant. Ask me anything about what we build, our Knowledge AI product, custom AI solutions, or engineering projects.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      links: [
        { label: 'Explore Products →', url: '/products' },
        { label: 'Custom Solutions →', url: '/solutions' }
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const suggestedQuestions = [
    'What does Synqvero AI do?',
    'What are you building?',
    'What technologies do you use?',
    'How can I work with Synqvero?'
  ];

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ai-concierge', handleOpen);
    return () => window.removeEventListener('open-ai-concierge', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate realistic sub-second neural thinking delay
    setTimeout(() => {
      const response: KnowledgeResponse = querySynqveroKnowledge(query);

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links: response.links,
        category: response.category
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleLinkClick = (url: string) => {
    setIsOpen(false);
    navigate(url);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text: "Conversation reset. What would you like to explore regarding Synqvero AI?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#0B1020] via-[#0E1528] to-[#070C1D] border border-brand-cyan/40 hover:border-brand-cyan text-white shadow-glow-cyan/50 hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
            aria-label="Open Synqvero AI Concierge"
          >
            {/* Live Beacon Pulse */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
            </span>

            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-brand-cyan group-hover:rotate-12 transition-transform" />
              <span className="font-display text-xs sm:text-sm font-bold tracking-wide">
                Ask Synqvero
              </span>
            </div>

            <span className="text-[10px] font-mono text-brand-dim border-l border-white/10 pl-2 hidden sm:inline">
              AI ASSISTANT
            </span>
          </button>
        )}
      </div>

      {/* Slide-Up Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[420px] max-w-[440px] h-[600px] max-h-[85vh] rounded-3xl bg-[#070C1D]/95 border border-brand-cyan/30 shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden text-left animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/[0.08] bg-[#050816]/90 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-blue flex items-center justify-center text-white shadow-glow-cyan/40">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-sm font-bold text-white tracking-tight">
                    Synqvero AI
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-[9px] font-mono text-emerald-400">VERIFIED</span>
                </div>
                <p className="text-[11px] font-mono text-brand-muted">
                  Ask about what we build.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearHistory}
                className="p-1.5 text-brand-dim hover:text-white rounded-lg transition-colors"
                title="Reset conversation"
                aria-label="Reset chat"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-brand-dim hover:text-white rounded-lg transition-colors"
                aria-label="Close Assistant"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div className={`space-y-2 max-w-[85%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-br-sm shadow-md'
                        : 'bg-[#0B1020] border border-white/[0.08] text-slate-200 rounded-tl-sm shadow-lg'
                    }`}
                  >
                    <p className="whitespace-pre-line text-xs sm:text-[13px]">{msg.text}</p>

                    {/* Navigation Action Buttons */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="pt-2.5 mt-2 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                        {msg.links.map((link) => (
                          <button
                            key={link.label}
                            onClick={() => handleLinkClick(link.url)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono text-brand-cyan bg-white/[0.04] hover:bg-white/[0.1] border border-brand-cyan/30 transition-colors"
                          >
                            <span>{link.label}</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="text-[9px] font-mono text-brand-dim px-1 flex items-center gap-2">
                    <span>{msg.timestamp}</span>
                    {msg.category && (
                      <>
                        <span>•</span>
                        <span className="text-brand-cyan">{msg.category}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center">
                <div className="w-6 h-6 rounded-lg bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shrink-0">
                  <Bot className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="p-3 rounded-2xl bg-[#0B1020] border border-white/[0.08] text-xs text-brand-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="px-4 py-2 border-t border-white/[0.06] bg-[#050816]/70 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSendMessage(q)}
                className="px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-brand-cyan/10 border border-white/[0.06] hover:border-brand-cyan/30 text-[10px] font-mono text-slate-300 hover:text-brand-cyan whitespace-nowrap transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3.5 border-t border-white/[0.08] bg-[#050816]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our AI systems, tech, or projects..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-brand-dim text-xs focus:outline-none focus:border-brand-cyan transition-colors"
              />

              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-white disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-glow-cyan transition-all"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="text-center pt-2">
              <span className="text-[9px] font-mono text-brand-dim">
                Synqvero Grounded Knowledge • No Fabricated Data
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
