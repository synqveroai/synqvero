import type { Capability } from '../types';

export const capabilitiesData: Capability[] = [
  {
    id: 'generative-ai',
    number: '01',
    title: 'Generative AI',
    shortDescription: 'Intelligent applications powered by modern language models, retrieval systems, and multimodal AI.',
    extendedDescription: 'Context-aware generative applications that process human intent, synthesize multi-source documents, and deliver structured outputs without hallucination traps.',
    technologies: ['LLMs', 'Prompt Engineering', 'Structured Outputs', 'Context Windows', 'Fine-Tuning'],
    icon: 'Sparkles'
  },
  {
    id: 'ai-agents',
    number: '02',
    title: 'AI Agents',
    shortDescription: 'AI agents that reason across tools, data, and workflows to automate complex tasks.',
    extendedDescription: 'Goal-oriented agents that dynamically plan, utilize specialized tools, call internal functions, and evaluate outputs across complex business environments.',
    technologies: ['Tool Use', 'ReAct Loops', 'Multi-Agent Teams', 'SQL Agents', 'Task Planning'],
    icon: 'Bot'
  },
  {
    id: 'intelligent-automation',
    number: '03',
    title: 'Intelligent Automation',
    shortDescription: 'AI-powered workflows that reduce repetitive work and connect business processes.',
    extendedDescription: 'Connect AI with APIs, databases, and operational pipelines to eliminate manual data entry, reconcile reports, and orchestrate asynchronous event streams.',
    technologies: ['FastAPI', 'REST & GraphQL', 'Webhook Pipelines', 'Event Streaming', 'System Sync'],
    icon: 'Workflow'
  },
  {
    id: 'computer-vision',
    number: '04',
    title: 'Computer Vision',
    shortDescription: 'Vision systems that understand images, video, gestures, and real-world visual information.',
    extendedDescription: 'High-speed visual perception systems spanning object detection, real-time sign language recognition, medical scan analysis, and edge video stream processing.',
    technologies: ['OpenCV', 'MediaPipe', 'U-Net', 'TensorFlow', 'Edge Inference'],
    icon: 'Eye'
  }
];
