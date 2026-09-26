import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'whatsapp-ai-copilot',
    title: 'AutoChat-AI: WhatsApp Autonomous AI Agent & Copilot',
    subtitle: 'Multi-LLM Orchestration, Voice Transcription & Real-Time Dashboard',
    tagline: 'Multi-LLM orchestration, voice note transcription & real-time glassmorphic dashboard for WhatsApp.',
    description: 'An autonomous, self-hosted AI messaging agent and copilot for WhatsApp. Intercepts incoming messages, transcribes voice notes with Whisper, inspects images via multimodal LLMs, queues rapid message bursts, and responds with humanized typing delays using Google Gemini and Groq Llama 3.3.',
    problem: 'Traditional messaging bots feel robotic, respond instantly without natural human pacing, fail on voice notes or images, and send fragmented duplicate responses when users send multiple messages in rapid succession.',
    solution: 'Engineered an autonomous agent powered by Node.js, Puppeteer, and Socket.io that integrates multi-LLM orchestration (Groq Llama 3.3 / Google Gemini), Groq Whisper Large v3 audio transcription, an asynchronous message accumulation queue, realistic typing delay simulation, and a live glassmorphic control dashboard.',
    architecture: {
      input: 'Live WhatsApp message streams, audio voice notes (.ogg/.mp3), image attachments',
      processing: [
        'Authenticated headless session capture via whatsapp-web.js and Puppeteer',
        'Asynchronous debounced message accumulation queue to consolidate rapid bursts',
        'Groq Whisper Large v3 pipeline delivering sub-second speech-to-text audio transcription',
        'Dual-LLM dynamic routing: Groq Llama 3.3 (70B) for ultra-low latency & Gemini for visual multimodal reasoning',
        'Humanized typing delay simulation (3-15s) with automated manual override pause',
        'Real-time WebSocket event dispatching to a secure glassmorphic telemetry dashboard'
      ],
      output: 'Contextual humanized conversational replies, image analyses, and live WebSocket telemetry',
      flowSummary: 'WhatsApp Feed → Debounced Message Queue → Whisper STT / Multimodal Vision → Multi-LLM Orchestrator → Humanized Delay → Response & Dashboard'
    },
    technologies: [
      'Node.js',
      'TypeScript',
      'Groq API',
      'Llama 3.3',
      'Google Gemini',
      'Whisper Large v3',
      'Puppeteer',
      'Socket.io',
      'Docker'
    ],
    features: [
      'Multi-LLM dynamic routing supporting Groq (Llama 3.3 70B, Gemma 2) and Google Gemini',
      'Sub-second Voice Note audio transcription using Groq Whisper Large v3',
      'Multimodal image comprehension providing contextual visual reasoning on received photos',
      'Intelligent message accumulation queue consolidating bursts to eliminate duplicate bot replies',
      'Humanized behavior with randomized typing delays (3-15s) and manual auto-pause override',
      'Real-time glassmorphic web dashboard with QR authentication, live telemetry, and contact whitelist'
    ],
    metrics: [
      { label: 'LLM Inference', value: 'Sub-Second', note: 'Ultra-low-latency response via Groq Llama 3.3' },
      { label: 'Voice STT', value: 'Whisper v3', note: 'Sub-second audio transcription pipeline' },
      { label: 'Deployment', value: '100% Private', note: 'Self-hosted Dockerized session architecture' }
    ],
    status: 'OPEN SOURCE',
    githubUrl: 'https://github.com/JakkenaSrikar/whatsapp-ai-copilot',
    liveDemoUrl: 'https://srikarjakkena.vercel.app/projects/whatsapp-ai-copilot',
    category: 'Autonomous Agents'
  },
  {
    id: 'signbridge-ai',
    title: 'SignBridge AI',
    subtitle: 'Real-Time Sign Language Recognition & Translation',
    tagline: 'Bridging non-verbal communication with real-time multimodal intelligence.',
    description: 'A real-time computer vision system that recognizes American and Indian Sign Language gestures and converts recognized symbols into natural text and synthetic speech.',
    problem: 'Traditional assistive communication tools are either cumbersome, expensive, or lack support for diverse sign conventions (ASL and ISL), creating persistent barriers in daily human-to-human workflows.',
    solution: 'Engineered a lightweight edge-capable pipeline using MediaPipe landmark extraction coupled with high-efficiency ML classifiers to provide instantaneous gesture recognition and audio playback without specialized sensor hardware.',
    architecture: {
      input: 'Live webcam video feed (RGB frame capture)',
      processing: [
        'MediaPipe Holistic: 21 landmark coordinate tracking per hand',
        'Geometric normalization and vector distance transformations',
        'Scikit-learn multi-class decision boundaries & spatial voting',
        'State tracking buffer to smooth rapid frame-to-frame jitter'
      ],
      output: 'Predicted sign gesture token, sentence reconstruction, and pyttsx3 speech synthesis',
      flowSummary: 'Video Frames → MediaPipe Hand Landmarks → Normalized Feature Vector → Trained ML Classifier → Text Prediction & Audio Synthesis'
    },
    technologies: [
      'Python',
      'MediaPipe',
      'OpenCV',
      'Scikit-learn',
      'FastAPI',
      'Streamlit',
      'SQLite',
      'pyttsx3'
    ],
    features: [
      'Dual-convention support: American Sign Language (ASL) and Indian Sign Language (ISL)',
      'Sub-50ms latency frame-by-frame landmark inference',
      'Speech synthesis audio output for seamless communication',
      'Integrated user session history and gesture frequency logging'
    ],
    metrics: [
      { label: 'Recognition Accuracy', value: 'Up to 99%', note: 'Documented test set validation on benchmark sign gestures' },
      { label: 'Latency', value: '<50ms', note: 'Real-time interactive camera inference' },
      { label: 'Hardware', value: 'Standard Webcam', note: 'No specialized depth sensors required' }
    ],
    status: 'LIVE DEMO',
    githubUrl: 'https://github.com/JakkenaSrikar/Sign-Language-Recognition-System',
    liveDemoUrl: 'https://sign-language-recognition-system.streamlit.app/',
    category: 'Computer Vision'
  },
  {
    id: 'rag-document-qa',
    title: 'RAG Document Q&A',
    subtitle: 'Ask Your Documents Contextually',
    tagline: 'Transforming unstructured document corpora into queryable semantic intelligence.',
    description: 'A Retrieval-Augmented Generation system that transforms documents into searchable knowledge and enables contextual question answering with strict factual grounding.',
    problem: 'Knowledge workers waste hours navigating unstructured PDFs, reports, and documentation, while raw LLMs frequently hallucinate or produce generic answers detached from source files.',
    solution: 'Implemented a high-fidelity chunking, embedding, and vector retrieval pipeline that pairs LangChain document orchestration with ChromaDB indexing to synthesize grounded, citation-backed answers directly from user-uploaded files.',
    architecture: {
      input: 'Unstructured files (PDF, DOCX, TXT, Markdown)',
      processing: [
        'Document parsing & semantic recursive chunking with token overlap',
        'High-dimensional vector embedding computation',
        'ChromaDB cosine similarity index matching top-k candidate chunks',
        'Prompt contextualization with provenance tracking and source pinning',
        'LLM generation constrained strictly to retrieved context'
      ],
      output: 'Grounded natural language answers with source sentence attribution',
      flowSummary: 'User Documents → Text Chunking → Vector Embeddings → ChromaDB Vector Store → Top-K Retrieval → LLM Prompt Contextualizer → Grounded Answer'
    },
    technologies: [
      'Python',
      'LangChain',
      'ChromaDB',
      'Embeddings',
      'LLMs',
      'Streamlit'
    ],
    features: [
      'Multi-format document ingestion with intelligent layout preservation',
      'Semantic vector search powered by local ChromaDB store',
      'Conversational memory allowing follow-up context queries',
      'Zero external data leak: local embedding persistence option'
    ],
    metrics: [
      { label: 'Grounding', value: 'Zero-Shot RAG', note: 'Answers anchored strictly to document contents' },
      { label: 'Vector Store', value: 'ChromaDB', note: 'In-memory / embedded vector similarity retrieval' }
    ],
    status: 'LIVE DEMO',
    githubUrl: 'https://github.com/JakkenaSrikar/RAG-Document-QA-Chatbot',
    liveDemoUrl: 'https://rag-document-chatbot-questionandanswer.streamlit.app/',
    category: 'RAG & Knowledge'
  },
  {
    id: 'brain-tumor-ai',
    title: 'Hybrid Brain Tumor Detection System',
    subtitle: 'AI-Powered MRI Analysis & Explainability',
    tagline: 'Computer vision and explainable machine learning pipeline for multi-class MRI analysis.',
    description: 'A computer vision and machine learning pipeline combining image segmentation, deep feature extraction, explainability, and classical machine learning for multi-class brain tumor analysis.',
    problem: 'MRI scan interpretation involves dense multi-modal radiological sequences. Understanding model decisions is critical to avoid "black box" blind spots in biomedical computing research.',
    solution: 'Designed a hybrid architecture marrying deep neural feature representation (MobileNetV2 and U-Net) with transparent ensemble classifiers (SVM & Random Forest) and Grad-CAM visual heatmaps highlighting exact anatomical attention zones.',
    architecture: {
      input: 'Axial T1/T2-weighted brain MRI image',
      processing: [
        'Contrast stretching, adaptive histogram equalization, skull masking',
        'U-Net region-of-interest segmentation for tumor boundary isolation',
        'MobileNetV2 deep convolution bottleneck feature extraction',
        'SVM & Random Forest ensemble decision classification',
        'Grad-CAM backpropagation gradient attribution for visual saliency'
      ],
      output: 'Multi-class classification (Glioma, Meningioma, Pituitary, Normal) with Grad-CAM heatmap visualization',
      flowSummary: 'MRI Scan → Preprocessing → U-Net Segmentation → MobileNetV2 Feature Extraction → ML Ensemble Classifier → Grad-CAM Visual Heatmap'
    },
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'OpenCV',
      'MobileNetV2',
      'U-Net',
      'Scikit-learn',
      'SVM',
      'Random Forest',
      'Grad-CAM'
    ],
    features: [
      'Hybrid Deep + Classical ML architecture for enhanced robustness',
      'Visual Grad-CAM heatmaps showing exact model activation regions',
      'Interactive inference interface hosted on Hugging Face Spaces',
      'Multi-class categorization across distinct pathological categories'
    ],
    metrics: [
      { label: 'Evaluation Paradigm', value: 'Multi-Class MRI', note: 'Standard radiological test benchmarks' },
      { label: 'Explainability', value: 'Grad-CAM', note: 'Backpropagated spatial saliency mapping' }
    ],
    status: 'RESEARCH',
    githubUrl: 'https://github.com/JakkenaSrikar/brain-tumor-ai',
    liveDemoUrl: 'https://huggingface.co/spaces/JakkenaSrikar/brain-tumor-system',
    category: 'Healthcare AI',
    disclaimer: 'Research & Technical Evaluation Only: This system is built strictly for computational computer vision and educational research. It is not an FDA/CE-cleared medical device and must never be used for clinical diagnosis or patient treatment.'
  },
  {
    id: 'generative-ai-lab',
    title: 'Generative AI Lab',
    subtitle: 'Applied AI Research & Experiments',
    tagline: 'An active experimental laboratory exploring the frontiers of agentic AI and contextual intelligence.',
    description: 'A growing collection of experiments and applications exploring RAG, embeddings, autonomous agents, SQL agents, attention mechanisms, and modern generative AI architectures.',
    problem: 'Rapid AI evolutions require rigorous hands-on empirical experimentation to discover which architectures deliver production value versus theoretical hype.',
    solution: 'Built an applied exploratory hub containing functional proofs-of-concept across agentic workflows, multi-tool orchestration, autonomous SQL synthesis, and specialized attention mechanisms.',
    architecture: {
      input: 'Diverse real-world data sources (SQL DBs, structured tables, unformatted text)',
      processing: [
        'Agentic tool invocation loops (ReAct & Plan-and-Solve patterns)',
        'Natural-language-to-SQL schema parsing & self-correcting query execution',
        'Attention visualization and contextual compression mechanisms',
        'Multi-model benchmarking across local and cloud LLM endpoints'
      ],
      output: 'Reusable code modules, benchmark results, and production-ready architecture patterns',
      flowSummary: 'Experimental Hypothesis → Modular Architecture Spike → Tool & Schema Integration → Empirical Benchmark → Production Pattern'
    },
    technologies: [
      'Python',
      'LangChain',
      'Autonomous Agents',
      'SQL Agents',
      'Vector DBs',
      'Prompt Engineering'
    ],
    features: [
      'Autonomous SQL agents capable of schema self-reflection',
      'Custom retrieval strategies combining dense & sparse search',
      'Comparative evaluation frameworks for prompt variants',
      'Modular building blocks ready for integration into Synqvero products'
    ],
    metrics: [
      { label: 'Focus Areas', value: 'Agents & RAG', note: 'Active research on tool use and contextual retrieval' },
      { label: 'Status', value: 'Active R&D', note: 'Continuous code commits and pattern releases' }
    ],
    status: 'EXPERIMENTAL',
    githubUrl: 'https://github.com/JakkenaSrikar/Generative-AI',
    category: 'AI Research'
  }
];
