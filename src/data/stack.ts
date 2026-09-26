import type { StackLayer } from '../types';

export const stackLayers: StackLayer[] = [
  {
    id: 'user-interface',
    level: 1,
    label: 'INTELLIGENT UI',
    sublabel: 'Human-Centered Interaction Layer',
    description: 'Responsive, latency-optimized user interfaces and conversational surfaces designed for natural human collaboration.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Streamlit', 'WebSockets'],
    connections: ['ai-applications'],
    color: '#18C8EF'
  },
  {
    id: 'ai-applications',
    level: 2,
    label: 'AI APPLICATIONS',
    sublabel: 'Domain Logic & Orchestration',
    description: 'High-level business solutions, multi-modal pipelines, and decision services integrating intelligent inference into daily user tasks.',
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
    technologies: ['LangChain', 'ReAct Pattern', 'Tool Calling', 'SQL Agents', 'Task Evaluators'],
    connections: ['llm-layer'],
    color: '#3268F2'
  },
  {
    id: 'rag-retrieval',
    level: 3,
    label: 'RAG & RETRIEVAL',
    sublabel: 'Contextual Vector Intelligence',
    description: 'Semantic document indexing, dense vector search, hybrid re-ranking, and dynamic context injection for zero-hallucination accuracy.',
    technologies: ['ChromaDB', 'Vector Databases', 'Dense Embeddings', 'Hybrid Reranking', 'Semantic Chunking'],
    connections: ['llm-layer', 'knowledge-data'],
    color: '#5356EF'
  },
  {
    id: 'llm-layer',
    level: 4,
    label: 'LLM & FOUNDATION LAYER',
    sublabel: 'Multi-Model Inference & Alignment',
    description: 'Optimized foundational intelligence layer supporting both cloud frontier models and locally self-hosted lightweight neural models.',
    technologies: ['LLMs', 'Prompt Engineering', 'Structured JSON Modes', 'Context Caching', 'Fine-Tuning'],
    connections: ['knowledge-data'],
    color: '#7544ED'
  },
  {
    id: 'knowledge-data',
    level: 5,
    label: 'KNOWLEDGE & DATA SYSTEMS',
    sublabel: 'Unified Information Store',
    description: 'Structured enterprise relational stores, unstructured file lakes, multimodal media repositories, and semantic vector graphs.',
    technologies: ['Vector Databases', 'PostgreSQL', 'SQLite', 'Document Stores', 'Object Storage'],
    connections: ['apis-systems'],
    color: '#8B4FE8'
  },
  {
    id: 'apis-systems',
    level: 6,
    label: 'APIs & BUSINESS SYSTEMS',
    sublabel: 'External Tool & Workflow Integration',
    description: 'Two-way integration endpoints connecting AI intelligence back into the exact software, CRMs, ERPs, and hardware cameras already in use.',
    technologies: ['REST APIs', 'Webhooks', 'MediaPipe Camera Feeds', 'OpenCV Video Streams', 'Cloud Microservices'],
    connections: [],
    color: '#A259EC'
  }
];

export const allTechnologies = [
  { name: 'Python', category: 'Core Language' },
  { name: 'LangChain', category: 'Agent Orchestration' },
  { name: 'LLMs', category: 'Foundation Models' },
  { name: 'RAG', category: 'Contextual Retrieval' },
  { name: 'Embeddings', category: 'Vector Semantics' },
  { name: 'Vector Databases', category: 'ChromaDB & Indexing' },
  { name: 'FastAPI', category: 'High-Performance Backend' },
  { name: 'Streamlit', category: 'Rapid AI Prototypes' },
  { name: 'TensorFlow', category: 'Deep Learning' },
  { name: 'Keras', category: 'Neural Networks' },
  { name: 'Scikit-learn', category: 'Machine Learning' },
  { name: 'OpenCV', category: 'Computer Vision' },
  { name: 'MediaPipe', category: 'Real-Time Perception' },
  { name: 'React & TypeScript', category: 'Frontend Architecture' },
];
