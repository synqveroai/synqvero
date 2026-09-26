import type { Capability } from '../types';

export const capabilitiesData: Capability[] = [
  {
    id: 'generative-ai',
    number: '01',
    title: 'Generative AI',
    shortDescription: 'LLMs, AI applications, prompt engineering and intelligent interfaces.',
    extendedDescription: 'We build contextual generative applications that understand complex human intent, synthesize multimodal data, and provide intuitive, responsive user experiences without hallucination traps.',
    technologies: ['LLMs', 'Prompt Engineering', 'Structured Outputs', 'Context Windows', 'Fine-Tuning'],
    icon: 'Sparkles'
  },
  {
    id: 'rag-knowledge',
    number: '02',
    title: 'RAG & Knowledge Intelligence',
    shortDescription: 'Document intelligence, semantic search, embeddings, retrieval and enterprise knowledge systems.',
    extendedDescription: 'Transform static internal documents, manuals, and databases into conversational intelligence engines with factual precision, metadata filtering, and full citation attribution.',
    technologies: ['Vector Databases', 'Dense Embeddings', 'Hybrid Search', 'ChromaDB', 'Semantic Reranking'],
    icon: 'Database'
  },
  {
    id: 'ai-agents',
    number: '03',
    title: 'AI Agents',
    shortDescription: 'Goal-oriented AI systems that can reason, use tools and execute multi-step workflows.',
    extendedDescription: 'Autonomous and human-in-the-loop systems capable of dynamic planning, self-correction, database querying, and tool execution across complex business environments.',
    technologies: ['Tool Use', 'ReAct Loops', 'Multi-Agent Teams', 'SQL Agents', 'Task Planning'],
    icon: 'Bot'
  },
  {
    id: 'intelligent-automation',
    number: '04',
    title: 'Intelligent Automation',
    shortDescription: 'Connect AI with APIs, databases and existing business processes.',
    extendedDescription: 'Bridge modern AI models with your legacy software, ERPs, and daily workflows. Automate tedious data reconciliation and repetitive operational bottlenecks safely.',
    technologies: ['FastAPI', 'REST & GraphQL', 'Webhook Pipelines', 'Event Streaming', 'System Sync'],
    icon: 'Workflow'
  },
  {
    id: 'computer-vision',
    number: '05',
    title: 'Computer Vision',
    shortDescription: 'Real-time vision systems, recognition, detection and intelligent visual applications.',
    extendedDescription: 'High-speed visual perception systems spanning object detection, real-time gesture tracking, medical image segmentation, and edge video stream processing.',
    technologies: ['OpenCV', 'MediaPipe', 'U-Net', 'TensorFlow', 'Edge Inference'],
    icon: 'Eye'
  },
  {
    id: 'custom-ai-software',
    number: '06',
    title: 'Custom AI Software',
    shortDescription: 'End-to-end intelligent applications built around specific user and business requirements.',
    extendedDescription: 'From initial problem formulation and architecture to frontend interfaces, backend microservices, and reliable production deployment—engineered around how your team actually works.',
    technologies: ['Python', 'React', 'TypeScript', 'FastAPI', 'Docker & Cloud'],
    icon: 'Cpu'
  }
];
