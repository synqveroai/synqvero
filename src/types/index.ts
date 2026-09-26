export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: {
    input: string;
    processing: string[];
    output: string;
    flowSummary: string;
  };
  technologies: string[];
  features: string[];
  metrics?: { label: string; value: string; note?: string }[];
  status: 'LIVE DEMO' | 'RESEARCH' | 'OPEN SOURCE' | 'EXPERIMENTAL';
  githubUrl: string;
  liveDemoUrl?: string;
  category: 'Computer Vision' | 'Healthcare AI' | 'RAG & Knowledge' | 'AI Research' | 'Autonomous Agents';
  disclaimer?: string;
}

export interface Capability {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  extendedDescription: string;
  technologies: string[];
  icon: string;
}

export interface StackLayer {
  id: string;
  level: number;
  label: string;
  sublabel: string;
  description: string;
  technologies: string[];
  connections: string[];
  color: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  activities: string[];
}

export interface ValuePillar {
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface FutureProductConcept {
  name: string;
  category: string;
  badge: 'Exploring' | 'Future Product Concept';
  description: string;
  targetWorkflow: string;
}
