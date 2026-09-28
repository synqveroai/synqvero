export interface KnowledgeResponse {
  answer: string;
  links?: { label: string; url: string }[];
  category: string;
  confidence: number;
}

interface KnowledgeTopic {
  id: string;
  keywords: string[];
  patterns: RegExp[];
  answer: string;
  links?: { label: string; url: string }[];
  category: string;
}

export const verifiedKnowledgeTopics: KnowledgeTopic[] = [
  // 1. Company Overview
  {
    id: 'company-overview',
    keywords: ['what does synqvero do', 'what is synqvero', 'about synqvero', 'who are you', 'company', 'synqvero ai', 'overview', 'mission', 'what do you do'],
    patterns: [/what (does|is) synqvero/i, /tell me about synqvero/i, /who is synqvero/i, /what do you (do|build)/i],
    category: 'Company',
    answer: 'Synqvero AI is an AI technology company focused on building practical intelligent software, generative AI applications, autonomous AI agents, intelligent automation, and computer vision systems. Our brand tagline is "Intelligence that works in sync." We combine artificial intelligence directly with operational workflows to turn enterprise information into verifiable action.',
    links: [
      { label: 'Explore Products', url: '/products' },
      { label: 'About Synqvero', url: '/about' },
      { label: 'Build With Us', url: '/build' }
    ]
  },

  // 2. What are you building / Products
  {
    id: 'products-knowledge-ai',
    keywords: ['what are you building', 'knowledge ai', 'flagship product', 'products', 'synqvero knowledge', 'rag system', 'document qa'],
    patterns: [/what (are you|is synqvero) building/i, /knowledge ai/i, /flagship/i, /product suite/i],
    category: 'Products',
    answer: 'Our flagship product in development is Synqvero Knowledge AI ("Your knowledge. One intelligent interface."). It allows teams to interact contextually with private documents, manuals, wikis, and databases through grounded retrieval-augmented generation (RAG) with exact source citations. We also have future product concepts in our research pipeline: Synqvero Flow (intelligent API automation fabric) and Synqvero Agents (autonomous tool-executing systems).',
    links: [
      { label: 'Explore Knowledge AI →', url: '/products' },
      { label: 'View Roadmap →', url: '/roadmap' },
      { label: 'Build Solution →', url: '/build' }
    ]
  },

  // 3. Technologies Stack
  {
    id: 'technologies',
    keywords: ['technologies', 'tech stack', 'what technologies do you use', 'tools', 'languages', 'models', 'fastapi', 'python', 'react', 'pytorch', 'chromadb', 'llm'],
    patterns: [/what tech(nolog(y|ies))?/i, /tech stack/i, /which tools/i, /what models/i],
    category: 'Technology',
    answer: 'Our stack spans two core disciplines: AI & Machine Learning (Large Language Models, RAG, AI Agents, Dense Embeddings, Multimodal AI, Computer Vision with CNNs/ViTs, PyTorch, MediaPipe, OpenCV) and Software Engineering (Python, FastAPI, React, TypeScript, Docker, ChromaDB, SQLite, PostgreSQL, and high-throughput async REST/WebSocket pipelines).',
    links: [
      { label: 'Inspect Tech Stack →', url: '/#technology' },
      { label: 'View Playground →', url: '/playground' }
    ]
  },

  // 4. Working with Synqvero / Process
  {
    id: 'working-with-us',
    keywords: ['how can i work with synqvero', 'hire', 'consulting', 'custom solutions', 'services', 'how we work', 'process', 'partner', 'work with us', 'client'],
    patterns: [/how (can I|to) work with/i, /hire/i, /partnership/i, /consulting/i, /custom (project|solution)/i],
    category: 'Solutions',
    answer: 'We collaborate with organizations through custom AI engineering engagements and product pilots. Our delivery follows a disciplined 5-stage process: 01 Understand (workflow audit), 02 Design (AI architecture & guardrails), 03 Build (high-throughput implementation & red-teaming), 04 Deploy (Docker containerization & telemetry), and 05 Improve (continuous telemetry & prompt tuning).',
    links: [
      { label: 'Custom Solutions →', url: '/solutions' },
      { label: 'Interactive Project Builder →', url: '/build' },
      { label: 'Contact Us →', url: '/contact' }
    ]
  },

  // 5. Engineering Projects
  {
    id: 'projects',
    keywords: ['projects', 'show me your projects', 'code', 'repositories', 'autochat', 'whatsapp', 'signbridge', 'brain tumor', 'generative ai lab'],
    patterns: [/show me (your|the) projects/i, /what projects/i, /github/i, /open source/i, /portfolio/i],
    category: 'Projects',
    answer: 'Synqvero showcases 5 verified engineering projects with public code and live deployments: 1) AutoChat-AI (WhatsApp Autonomous Copilot with Groq Llama 3.3 & Whisper v3), 2) SignBridge AI (Real-time gesture recognition with MediaPipe & Scikit-learn at <50ms latency), 3) RAG Document Q&A (ChromaDB contextual vector engine), 4) Hybrid Brain Tumor AI (Explainable MRI analysis with U-Net & Grad-CAM heatmaps), and 5) Generative AI Lab (Applied ReAct agent experiments).',
    links: [
      { label: 'Explore Engineering Projects →', url: '/projects' },
      { label: 'Engineering Pulse →', url: '/#pulse' }
    ]
  },

  // 6. RAG & Retrieval Deep Dive
  {
    id: 'rag-explanation',
    keywords: ['how does your rag system work', 'how does rag work', 'retrieval augmented generation', 'embeddings', 'vector search', 'chunking', 'hallucinations'],
    patterns: [/how does (your|the) rag/i, /what is rag/i, /explain rag/i],
    category: 'Technology',
    answer: 'Our RAG architecture operates through a 9-stage grounded pipeline: Documents → Ingestion (OCR/parsing) → Semantic Chunking → Dense Embeddings → Vector Storage (ChromaDB) → Hybrid Dense + Sparse BM25 Retrieval → Cross-Encoder Reranking → Constrained LLM Synthesis → Factual Answer with direct source paragraph citations. We implement strict contextual envelopes to eliminate hallucinations.',
    links: [
      { label: 'RAG Architecture Diagram →', url: '/products' },
      { label: 'Test RAG Explorer in Playground →', url: '/playground' }
    ]
  },

  // 7. Founder & Leadership
  {
    id: 'founder',
    keywords: ['founder', 'who founded', 'srikar jakkena', 'who is the owner', 'who is srikar', 'team', 'leadership'],
    patterns: [/who (is the founder|founded|runs|owns)/i, /srikar/i],
    category: 'About',
    answer: 'Synqvero AI was founded by Srikar Jakkena, an AI Engineer based in Hyderabad, India. His focus is on Generative AI, Machine Learning, Deep Learning, and Computer Vision, bridging empirical research with hardened, usable software systems that solve real operational bottlenecks.',
    links: [
      { label: 'Founder Profile →', url: '/about' },
      { label: 'Contact Founder →', url: '/contact' }
    ]
  },

  // 8. Contact Information
  {
    id: 'contact-info',
    keywords: ['contact', 'email', 'phone', 'address', 'location', 'reach out', 'where are you located'],
    patterns: [/how (do I|to) contact/i, /where (are you|is synqvero)/i, /phone number/i, /email address/i],
    category: 'Contact',
    answer: 'You can reach Synqvero directly at our official inbox: synqveroai@gmail.com, or contact founder Srikar Jakkena at jakkenasrikar007@gmail.com / +91 6301186007. We are based in Hyderabad, Telangana, India.',
    links: [
      { label: 'Go to Contact Page →', url: '/contact' }
    ]
  },

  // 9. Roadmap
  {
    id: 'roadmap',
    keywords: ['roadmap', 'future plans', 'what next', 'timeline', 'milestones'],
    patterns: [/roadmap/i, /future plans/i, /what is next/i, /upcoming/i],
    category: 'Roadmap',
    answer: 'Our verified roadmap is structured into: Completed (Synqvero AI company platform, 5 verified open-source engineering systems, live Streamlit/HF demos), In Development (Synqvero Knowledge AI flagship engine, interactive AI Playground, unified hybrid vector indexing), and Planned (Synqvero Flow automated API fabric, developer APIs).',
    links: [
      { label: 'View Public Roadmap →', url: '/roadmap' }
    ]
  },

  // 10. Pricing & Commercials (Strict Authenticity)
  {
    id: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'how much', 'rates', 'fees', 'quote'],
    patterns: [/how much does it cost/i, /pricing/i, /what are your rates/i],
    category: 'Solutions',
    answer: 'Every AI system is scoped around specific operational data volumes, latency thresholds, and deployment boundaries. We do not provide generic template quotes. We recommend using our interactive project builder or reaching out for an architectural feasibility review.',
    links: [
      { label: 'Configure Your Solution in /build →', url: '/build' },
      { label: 'Request Scoping Consultation →', url: '/contact' }
    ]
  },

  // 11. Data Privacy & Enterprise Security
  {
    id: 'privacy-security',
    keywords: ['privacy', 'security', 'data leak', 'is my data safe', 'confidentiality', 'nda', 'training data'],
    patterns: [/privacy/i, /security/i, /safe/i, /leak/i, /do you train on/i],
    category: 'Security',
    answer: 'Under the Synqvero Zero-Leak Guarantee, your private organizational documents, embeddings, and database queries are never used to train foundation models for third parties. We support fully isolated tenant vector stores, on-premises private deployments, and ephemeral in-memory sessions that scrub embeddings immediately after use.',
    links: [
      { label: 'Read Privacy Policy →', url: '/privacy' }
    ]
  }
];

// Fallback responses when queried about unverified / fabricated data
const unverifiedKeywords = [
  'revenue', 'funding', 'investors', 'valuation', 'employees', 'headcount', 
  'how many clients', 'client list', 'awards', 'certificates', 'partnerships',
  'fortune 500', 'testimonials', 'reviews'
];

export function querySynqveroKnowledge(query: string): KnowledgeResponse {
  const clean = query.trim().toLowerCase();

  if (!clean) {
    return {
      answer: 'Ask me anything about Synqvero AI, our Knowledge AI flagship, custom AI agents, computer vision systems, or engineering stack.',
      category: 'Help',
      confidence: 1
    };
  }

  // Guardrail 1: Check for fabricated/unverified corporate vanity queries
  for (const word of unverifiedKeywords) {
    if (clean.includes(word)) {
      return {
        answer: "I don't have verified public information about that. Synqvero AI is an engineering-first AI technology startup founded by Srikar Jakkena, focused strictly on verified software architectures, practical client implementations, and genuine utility rather than vanity metrics.",
        category: 'Authenticity Guardrail',
        confidence: 0.95,
        links: [
          { label: 'About Synqvero', url: '/about' },
          { label: 'Verified Projects', url: '/projects' }
        ]
      };
    }
  }

  // Guardrail 2: Check for pattern matches and keyword intersections
  let bestMatch: KnowledgeTopic | null = null;
  let highestScore = 0;

  for (const topic of verifiedKnowledgeTopics) {
    let score = 0;

    // Check regex patterns
    for (const pat of topic.patterns) {
      if (pat.test(clean)) {
        score += 8;
      }
    }

    // Check keyword presence
    for (const kw of topic.keywords) {
      if (clean.includes(kw)) {
        score += kw.split(' ').length * 2.5;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = topic;
    }
  }

  if (bestMatch && highestScore >= 2) {
    return {
      answer: bestMatch.answer,
      links: bestMatch.links,
      category: bestMatch.category,
      confidence: Math.min(1, highestScore / 10)
    };
  }

  // Fallback for unrelated questions
  return {
    answer: "I'm the Synqvero AI assistant, so I can help with questions about Synqvero, our products, custom AI solutions, technology, and engineering projects. What would you like to explore?",
    category: 'Scope Guidance',
    confidence: 0.4,
    links: [
      { label: 'Explore Products', url: '/products' },
      { label: 'Custom Solutions', url: '/solutions' },
      { label: 'Engineering Projects', url: '/projects' },
      { label: 'Contact Us', url: '/contact' }
    ]
  };
}
