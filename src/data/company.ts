import type { WorkflowStep, ValuePillar, FutureProductConcept, SolutionItem, ResourceCategory } from '../types';

export const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the business problem and workflow.',
    activities: [
      'Analyze operator friction points and daily decision bottlenecks',
      'Audit existing data pipelines, formats, quality, and edge cases',
      'Define quantifiable evaluation metrics before writing code',
      'Clarify system boundaries, latency constraints, and security requirements'
    ]
  },
  {
    number: '02',
    title: 'Design',
    description: 'Design the appropriate AI architecture.',
    activities: [
      'Select the optimal model, retrieval paradigm, or computer vision pipeline',
      'Architect robust data retrieval and tool-calling boundaries',
      'Design graceful fallbacks and human-in-the-loop validation checkpoints',
      'Plan clean API interfaces that plug into existing business tools'
    ]
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop, integrate, and test the system.',
    activities: [
      'Implement modular, high-throughput software and neural inference',
      'Rigorous unit testing, adversarial red-teaming, and benchmark validation',
      'Optimize edge and cloud deployment for minimal latency',
      'Iterative refinement alongside operators in active staging environments'
    ]
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Deploy the solution into the target environment.',
    activities: [
      'Package production builds into Docker containers and cloud microservices',
      'Establish telemetry logging, latency monitoring, and alert triggers',
      'Ensure secure authentication and zero token leak isolation',
      'Integrate endpoints directly into daily operational software'
    ]
  },
  {
    number: '05',
    title: 'Improve',
    description: 'Measure, learn, and continuously improve.',
    activities: [
      'Track real-world accuracy and capture production edge cases',
      'Refine embeddings, prompts, and model weights as new data arrives',
      'Scale automated throughput and reduce inference computing costs',
      'Expand product capabilities in natural sync with organization growth'
    ]
  }
];

export const valuePillars: ValuePillar[] = [
  {
    title: 'Built Around Real Problems',
    tagline: 'We design AI systems around measurable workflows and business needs.',
    description: 'We avoid building complex models looking for a problem. Every system starts with a genuine operational friction point and focuses on clear utility.',
    icon: 'Target'
  },
  {
    title: 'Grounded in Your Data',
    tagline: 'AI systems can work with the information your organization already uses.',
    description: 'We build systems that draw directly from your private documents, databases, and APIs without forcing you to migrate to new proprietary storage.',
    icon: 'Database'
  },
  {
    title: 'Explainable Outputs',
    tagline: 'Where applicable, responses can be connected back to their source information.',
    description: 'Whether it is exact document citations in RAG or Grad-CAM heatmaps in vision models, we prioritize auditability and factual grounding.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Integration Ready',
    tagline: 'Designed to work with existing applications, APIs, and workflows.',
    description: 'Organizations cannot overhaul their entire technology stack just to use AI. Our software communicates effortlessly with existing CRMs, ERPs, and APIs.',
    icon: 'Share2'
  },
  {
    title: 'Built to Evolve',
    tagline: 'Start with an MVP and expand as requirements grow.',
    description: 'We believe in delivering a working, validated MVP quickly, then iterating safely based on real operator telemetry and user feedback.',
    icon: 'Rocket'
  }
];

export const flagshipKnowledgeAI = {
  name: 'Synqvero Knowledge AI',
  status: 'In Development',
  badge: 'Coming Soon',
  headline: 'Your knowledge. One intelligent interface.',
  description: 'Synqvero Knowledge AI lets teams interact with documents, websites, and organizational knowledge through retrieval-augmented generation and intelligent AI systems.',
  workflow: [
    { step: '01', name: 'Documents', desc: 'PDFs, DOCX, Markdown, manuals, and web documentation ingested.' },
    { step: '02', name: 'Processing', desc: 'Intelligent semantic chunking preserving table hierarchies and context.' },
    { step: '03', name: 'Embeddings', desc: 'High-dimensional dense vector embeddings generated with domain tuning.' },
    { step: '04', name: 'Retrieval', desc: 'Hybrid dense vector + sparse keyword search with cross-encoder reranking.' },
    { step: '05', name: 'Reasoning', desc: 'LLM reasoning constrained strictly to retrieved context.' },
    { step: '06', name: 'Answer + Citations', desc: 'Factual, verifiable responses with direct source paragraph citations.' },
  ],
  capabilities: [
    { title: 'Document Q&A', desc: 'Chat naturally with complex corporate documentation, reports, and manuals.' },
    { title: 'Multimodal Knowledge Retrieval', desc: 'Query diagrams, scanned tables, and textual context simultaneously.' },
    { title: 'Website Knowledge', desc: 'Index internal wikis, documentation portals, and public knowledge bases.' },
    { title: 'Source Citations', desc: 'Every answer is attributed to the exact source page and sentence.' },
    { title: 'Conversation Memory', desc: 'Maintains multi-turn context for deep iterative research sessions.' },
    { title: 'Intelligent Retrieval', desc: 'Self-correcting query decomposition and semantic reranking.' },
    { title: 'API Access', desc: 'REST endpoints to query your knowledge base from Slack, CRMs, or web apps.' },
  ],
  useCases: [
    'Internal Engineering Documentation & Runbooks',
    'Customer Support Agent Knowledge Assist',
    'Legal & Compliance Contract Verification',
    'Healthcare & Technical Research Inquiries'
  ]
};

export const solutionsData: SolutionItem[] = [
  {
    id: 'ai-application-development',
    title: 'AI Application Development',
    summary: 'Custom intelligent web applications and software interfaces built around specific business logic.',
    description: 'We build end-to-end web applications, dashboards, and internal software powered by foundational models and custom machine learning pipelines.',
    capabilities: ['Custom UI/UX in React & TypeScript', 'FastAPI & Async Python Backends', 'Stateful Chat Interfaces', 'Role-Based Access Control'],
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'Docker'],
    useCases: ['Operator AI copilots', 'Domain-specific analysis portals', 'Automated reporting dashboards'],
    icon: 'Cpu'
  },
  {
    id: 'rag-systems',
    title: 'RAG Systems & Document Intelligence',
    summary: 'Grounded retrieval architectures that turn unstructured documents into queryable intelligence.',
    description: 'Transform internal documentation, PDFs, and data silos into reliable question-answering engines with zero hallucination traps and exact source citations.',
    capabilities: ['Semantic Chunking & Metadata Tagging', 'Dense & Sparse Hybrid Retrieval', 'Cross-Encoder Reranking', 'Source Citation Attribution'],
    technologies: ['LangChain', 'ChromaDB', 'Vector Databases', 'OpenAI/Groq/Gemini', 'Python'],
    useCases: ['Policy and contract lookup', 'Technical manual navigation', 'Enterprise document search'],
    icon: 'Database'
  },
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents & Copilots',
    summary: 'Goal-oriented AI systems that reason, call tools, and execute multi-step workflows.',
    description: 'Autonomous agents engineered with strict safety envelopes, tool verification, and self-correcting loops for complex operational tasks.',
    capabilities: ['ReAct & Plan-and-Solve Loops', 'SQL & Database Tool Calling', 'API Action Execution', 'Human-in-the-Loop Safeguards'],
    technologies: ['LangChain', 'Puppeteer', 'Socket.io', 'Groq Llama 3.3', 'Google Gemini'],
    useCases: ['WhatsApp AI Copilots', 'Automated database query agents', 'Multi-step data reconciliation'],
    icon: 'Bot'
  },
  {
    id: 'workflow-automation',
    title: 'Intelligent Workflow Automation',
    summary: 'Connecting AI models with legacy software, databases, and daily communication channels.',
    description: 'Eliminate repetitive, manual information handling by orchestrating event-driven AI pipelines between existing systems.',
    capabilities: ['Webhook & API Integration', 'Debounced Message Queues', 'Document Parsing & Extraction', 'Scheduled Autonomous Jobs'],
    technologies: ['FastAPI', 'Node.js', 'REST APIs', 'Docker', 'WebSockets'],
    useCases: ['Customer message triage', 'Invoice and invoice reconciliation', 'Cross-platform sync'],
    icon: 'Workflow'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision & Visual AI',
    summary: 'Real-time perception systems for gesture recognition, image segmentation, and edge processing.',
    description: 'High-speed computer vision pipelines combining classical image processing, deep neural networks, and explainable AI.',
    capabilities: ['Landmark Coordinate Tracking', 'Image Segmentation (U-Net)', 'Explainable Visual Heatmaps (Grad-CAM)', 'Sub-50ms Real-Time Inference'],
    technologies: ['OpenCV', 'MediaPipe', 'TensorFlow', 'Keras', 'Scikit-learn'],
    useCases: ['Sign language recognition systems', 'Medical imaging research', 'Visual quality inspection'],
    icon: 'Eye'
  },
  {
    id: 'custom-ai-solutions',
    title: 'Custom AI Architecture & Consulting',
    summary: 'Technical architecture design, prototype evaluation, and production hardening.',
    description: 'We help teams assess AI feasibility, evaluate open-source versus proprietary models, and engineer production-ready prototypes.',
    capabilities: ['Architecture Feasibility Audits', 'Latency & Cost Optimization', 'Benchmark & Evaluation Harnesses', 'On-Premises / Private Deployment'],
    technologies: ['Python', 'Docker', 'Cloud Endpoints', 'LangChain'],
    useCases: ['AI technical roadmap definition', 'Jupyter notebook to production porting', 'Private model hosting'],
    icon: 'Sparkles'
  }
];

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'rag',
    name: 'Retrieval-Augmented Generation (RAG)',
    description: 'Engineering guides on chunking strategies, hybrid vector retrieval, and citation verification.',
    upcomingTopics: [
      'Evaluating Hybrid Search vs Dense Retrieval in Production',
      'Contextual Compression and Dynamic Prompt Budgeting',
      'Eliminating Hallucinations in Financial Document Parsing'
    ]
  },
  {
    id: 'ai-agents',
    name: 'Autonomous AI Agents',
    description: 'Deep dives on tool execution, debounced message queues, and multi-agent coordination.',
    upcomingTopics: [
      'Building Low-Latency WhatsApp AI Copilots with Groq & Whisper',
      'Preventing Infinite Loops in Autonomous ReAct Agents',
      'Human-in-the-Loop Approval Workflows for Database Write Operations'
    ]
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision & Edge AI',
    description: 'Techniques for real-time gesture tracking, medical image segmentation, and explainability.',
    upcomingTopics: [
      'Real-Time Landmark Tracking with MediaPipe and Scikit-learn',
      'Explainable Medical AI: Implementing Grad-CAM with MobileNetV2 & U-Net',
      'Optimizing OpenCV Video Pipelines for Sub-50ms Edge Latency'
    ]
  },
  {
    id: 'ai-engineering',
    name: 'AI Engineering & Production',
    description: 'Architectural patterns for deploying scalable, cost-efficient, and secure AI software.',
    upcomingTopics: [
      'FastAPI vs Node.js for High-Throughput Streaming AI Endpoints',
      'Containerizing Multimodal LLM Pipelines with Docker Compose',
      'Managing API Costs with Token Caching and Tiered Model Routing'
    ]
  }
];

export const futureProducts: FutureProductConcept[] = [
  {
    name: 'Synqvero Knowledge AI',
    category: 'Information Architecture',
    badge: 'In Development',
    description: 'Unified retrieval-augmented knowledge engine that transforms internal documents and websites into verifiable answers.',
    targetWorkflow: 'Document Intelligence & Enterprise Search'
  },
  {
    name: 'Synqvero Flow',
    category: 'Process Automation',
    badge: 'Future Product Concept',
    description: 'Intelligent automation fabric that connects multimodal AI models with legacy APIs and operational data pipelines without manual glue code.',
    targetWorkflow: 'API Orchestration & Background Workflows'
  },
  {
    name: 'Synqvero Agents',
    category: 'Autonomous Systems',
    badge: 'Future Product Concept',
    description: 'Autonomous goal-driven software agents engineered with strict safety envelopes, tool verification, and self-correcting execution loops.',
    targetWorkflow: 'Multi-Step Autonomous Task Execution'
  }
];

export const companyProfile = {
  name: 'Synqvero AI',
  legalName: 'Synqvero AI',
  tagline: 'Intelligence that works in sync.',
  brandPhilosophy: 'Your problem. Our intelligence. In sync.',
  companyEmail: 'synqveroai@gmail.com',
  website: 'https://synqvero.vercel.app',
  philosophyFlow: [
    'UNDERSTAND THE PROBLEM',
    'UNDERSTAND THE WORKFLOW',
    'CONNECT INTELLIGENCE',
    'BUILD THE SOLUTION',
    'WORK IN SYNC'
  ],
  visionQuote: 'We don\'t believe AI should replace the way you work. We believe it should understand the way you work. And make it better.',
  aboutHeading: 'Building AI that works alongside people.',
  aboutDescription: 'Synqvero AI is an AI technology company focused on building practical intelligent systems, generative AI applications, AI agents, automation solutions, and computer vision systems.',
  mission: 'Make intelligent technology practical, accessible, and useful.',
  vision: 'Build AI systems that work naturally alongside people and businesses.',
  founder: {
    name: 'Srikar Jakkena',
    role: 'Founder & AI Engineer',
    focus: 'Generative AI, ML, DL and Computer Vision',
    personalEmail: 'jakkenasrikar007@gmail.com',
    companyEmail: 'synqveroai@gmail.com',
    contactNumber: '+91 6301186007',
    contactNumberRaw: '6301186007',
    bio: 'AI engineer and builder specializing in generative AI, machine learning, deep learning, and computer vision. Passionate about bridging theoretical AI research with hardened, usable software products that solve concrete real-world challenges.',
    github: 'https://github.com/JakkenaSrikar',
    linkedin: 'https://www.linkedin.com/in/jakkena-srikar/',
    portfolio: 'https://srikarjakkena.vercel.app/',
    location: 'Hyderabad, India'
  },
  social: {
    github: 'https://github.com/synqveroai/synqvero',
    founderGithub: 'https://github.com/JakkenaSrikar',
    linkedin: 'https://www.linkedin.com/in/jakkena-srikar/',
    portfolio: 'https://srikarjakkena.vercel.app/'
  }
};
