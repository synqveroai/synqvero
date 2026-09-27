import type { StackLayer } from '../types';

export const stackLayers: StackLayer[] = [
  {
    id: 'user-interface',
    level: 1,
    label: 'INTELLIGENT UI',
    sublabel: 'Human-Centered Interaction Layer',
    description: 'Responsive, latency-optimized user interfaces and conversational surfaces designed for natural human collaboration.',
    technologies: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Streamlit', 'WebSockets'],
    connections: ['ai-applications'],
    color: '#18C8EF'
  },
  {
    id: 'ai-applications',
    level: 2,
    label: 'AI APPLICATIONS',
    sublabel: 'Domain Logic & Orchestration',
    description: 'High-level business solutions, multimodal pipelines, and decision services integrating intelligent inference into daily user tasks.',
    technologies: ['FastAPI', 'Python', 'Asynchronous Pipelines', 'REST APIs'],
    connections: ['ai-agents', 'rag-retrieval'],
    color: '#2897F0'
  },
  {
    id: 'ai-agents',
    level: 3,
    label: 'AI AGENTS',
    sublabel: 'Reasoning & Autonomous Tools',
    description: 'Goal-oriented agents that dynamically plan, utilize specialized tools, call internal functions, and evaluate outputs.',
    technologies: ['AI Agents', 'LangChain', 'Tool Calling', 'ReAct Pattern', 'Task Evaluators'],
    connections: ['llm-layer'],
    color: '#3268F2'
  },
  {
    id: 'rag-retrieval',
    level: 3,
    label: 'RAG & RETRIEVAL',
    sublabel: 'Contextual Vector Intelligence',
    description: 'Semantic document indexing, dense vector search, hybrid reranking, and dynamic context injection for zero-hallucination accuracy.',
    technologies: ['RAG', 'Vector Databases', 'ChromaDB', 'Embeddings', 'Semantic Chunking'],
    connections: ['llm-layer', 'knowledge-data'],
    color: '#5356EF'
  },
  {
    id: 'llm-layer',
    level: 4,
    label: 'LLM & FOUNDATION LAYER',
    sublabel: 'Multi-Model Inference & Alignment',
    description: 'Optimized foundational intelligence layer supporting both cloud frontier models and locally self-hosted lightweight neural models.',
    technologies: ['LLMs', 'Multimodal AI', 'Prompt Engineering', 'Structured JSON Modes', 'Context Caching'],
    connections: ['knowledge-data'],
    color: '#7544ED'
  },
  {
    id: 'knowledge-data',
    level: 5,
    label: 'KNOWLEDGE & DATA SYSTEMS',
    sublabel: 'Unified Information Store',
    description: 'Structured relational stores, unstructured document lakes, multimodal media repositories, and semantic vector graphs.',
    technologies: ['Vector Databases', 'Databases', 'SQLite', 'Document Stores', 'Object Storage'],
    connections: ['apis-systems'],
    color: '#8B4FE8'
  },
  {
    id: 'apis-systems',
    level: 6,
    label: 'APIs & BUSINESS SYSTEMS',
    sublabel: 'External Tool & Workflow Integration',
    description: 'Two-way integration endpoints connecting AI intelligence back into the exact software, CRMs, ERPs, and hardware cameras already in use.',
    technologies: ['APIs', 'Docker', 'Computer Vision', 'OpenCV', 'MediaPipe'],
    connections: [],
    color: '#A259EC'
  }
];

export const categorizedTechnologies = {
  aiAndML: [
    { name: 'LLMs', description: 'Large language foundation models (Groq Llama 3.3, Google Gemini, OpenAI)' },
    { name: 'RAG', description: 'Retrieval-Augmented Generation for grounded factual question answering' },
    { name: 'AI Agents', description: 'Autonomous goal-driven systems with dynamic tool execution loops' },
    { name: 'Embeddings', description: 'Dense high-dimensional vector representations for semantic search' },
    { name: 'Multimodal AI', description: 'Integrated reasoning across text, voice notes, documents, and images' },
    { name: 'Computer Vision', description: 'Real-time gesture recognition, segmentation (U-Net), and explainability (Grad-CAM)' }
  ],
  engineering: [
    { name: 'Python', description: 'Primary backend and machine learning engineering environment' },
    { name: 'FastAPI', description: 'High-performance asynchronous REST microservice framework' },
    { name: 'React / Next.js', description: 'Responsive, accessible frontend application architecture' },
    { name: 'APIs', description: 'REST, GraphQL, WebSockets, and webhook orchestration pipelines' },
    { name: 'Databases', description: 'Relational & operational storage (PostgreSQL, SQLite)' },
    { name: 'Vector Databases', description: 'Embedded & clustered vector indices (ChromaDB)' },
    { name: 'Docker', description: 'Containerized reproducible microservices and isolated deployments' }
  ]
};

export const allTechnologies = [
  ...categorizedTechnologies.aiAndML.map((t) => ({ name: t.name, category: 'AI & ML' })),
  ...categorizedTechnologies.engineering.map((t) => ({ name: t.name, category: 'Engineering' }))
];
