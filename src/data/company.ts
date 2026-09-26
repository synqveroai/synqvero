import type { WorkflowStep, ValuePillar, FutureProductConcept } from '../types';

export const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the problem, users, data and workflow.',
    activities: [
      'Deep dive into daily operator bottlenecks and human friction points',
      'Audit existing data pipelines, formats, quality, and edge cases',
      'Define quantifiable evaluation metrics before writing code',
      'Clarify system boundaries, latency constraints, and security requirements'
    ]
  },
  {
    number: '02',
    title: 'Design',
    description: 'Design an AI architecture around the actual requirement.',
    activities: [
      'Select the optimal machine learning, vision, or LLM paradigm',
      'Architect robust data retrieval and tool-calling boundaries',
      'Design graceful fallbacks and human-in-the-loop validation checkpoints',
      'Plan clean API interfaces that plug into existing business tools'
    ]
  },
  {
    number: '03',
    title: 'Build',
    description: 'Engineer, test, integrate and iterate.',
    activities: [
      'Implement modular, high-throughput software and neural inference',
      'Rigorous unit testing, adversarial red-teaming, and benchmark validation',
      'Real-time edge and cloud deployment optimization for minimal latency',
      'Iterative refinement alongside real users in active staging environments'
    ]
  },
  {
    number: '04',
    title: 'Evolve',
    description: 'Improve reliability, performance, automation and product experience.',
    activities: [
      'Continuously log and evaluate real-world edge cases',
      'Refine embeddings, prompts, and neural weights as new data arrives',
      'Scale automated throughput and reduce operational computing costs',
      'Expand product capabilities in natural sync with organization growth'
    ]
  }
];

export const valuePillars: ValuePillar[] = [
  {
    title: 'Problem-first',
    tagline: 'We start with the problem—not the technology.',
    description: 'Too many AI initiatives build complex models looking for a problem. At Synqvero, we start with the genuine human or operational friction point, then engineer the simplest and most effective intelligence to eliminate it.',
    icon: 'Target'
  },
  {
    title: 'AI-native',
    tagline: 'AI is designed into the workflow rather than added as an afterthought.',
    description: 'Tacking a generic chatbot onto a legacy tool creates clutter. We build AI-native software where intelligent models, semantic retrieval, and perception are foundational architecture pillars.',
    icon: 'Layers'
  },
  {
    title: 'Built to integrate',
    tagline: 'Our systems are designed to work with existing products, data and APIs.',
    description: 'Organizations cannot overhaul their entire technology stack just to benefit from AI. Our systems are engineered with production-ready APIs that communicate effortlessly with current databases, tools, and workflows.',
    icon: 'Share2'
  },
  {
    title: 'Prototype to product',
    tagline: 'We care about turning working ideas into usable software.',
    description: 'A Jupyter notebook demo is not a business solution. We specialize in taking cutting-edge machine learning and GenAI experiments and hardening them into stable, production-grade products.',
    icon: 'Rocket'
  }
];

export const futureProducts: FutureProductConcept[] = [
  {
    name: 'Synqvero AI',
    category: 'Core Product Platform',
    badge: 'Exploring',
    description: 'Practical intelligent software suite designed to unify workflow automation and contextual AI capabilities across enterprise teams.',
    targetWorkflow: 'Enterprise Operations & Decision Support'
  },
  {
    name: 'Synqvero Labs',
    category: 'Applied R&D Division',
    badge: 'Exploring',
    description: 'Exploratory engineering lab evaluating bleeding-edge generative AI architectures, agentic evaluation harnesses, and multi-modal computer vision.',
    targetWorkflow: 'Applied Research & Open Benchmarks'
  },
  {
    name: 'Synqvero Knowledge',
    category: 'Information Architecture',
    badge: 'Future Product Concept',
    description: 'Zero-hallucination semantic knowledge engine that transforms private corporate documents and data silos into instant, cited answers.',
    targetWorkflow: 'Document Intelligence & Enterprise Search'
  },
  {
    name: 'Synqvero Flow',
    category: 'Process Automation',
    badge: 'Future Product Concept',
    description: 'Intelligent automation fabric that connects multi-modal AI models with legacy APIs, CRMs, and operational data pipelines without manual glue code.',
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
  name: 'Synqvero',
  legalName: 'Synqvero AI',
  tagline: 'Intelligence that works in sync.',
  brandPhilosophy: 'Your problem. Our intelligence. In sync.',
  companyEmail: 'synqveroai@gmail.com',
  philosophyFlow: [
    'UNDERSTAND THE PROBLEM',
    'UNDERSTAND THE WORKFLOW',
    'CONNECT INTELLIGENCE',
    'BUILD THE SOLUTION',
    'WORK IN SYNC'
  ],
  visionQuote: 'We don\'t believe AI should replace the way you work. We believe it should understand the way you work. And make it better.',
  aboutHeading: 'Synqvero is building technology that works in sync with the real world.',
  aboutDescription: 'Synqvero is an AI and technology company focused on building intelligent software for real-world problems. We combine artificial intelligence, automation, data, and modern software engineering to create solutions that work naturally with people, products, workflows, and businesses.',
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
    portfolio: 'https://srikarjakkena.vercel.app/',
    location: 'Hyderabad, India'
  }
};
