import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { AiConcierge } from './components/AiConcierge';

import { HomePage } from './pages/HomePage';

// Route-level code splitting for peak performance
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(m => ({ default: m.SolutionsPage })));
const BuildPage = lazy(() => import('./pages/BuildPage').then(m => ({ default: m.BuildPage })));
const PlaygroundPage = lazy(() => import('./pages/PlaygroundPage').then(m => ({ default: m.PlaygroundPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const JournalPage = lazy(() => import('./pages/JournalPage').then(m => ({ default: m.JournalPage })));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage').then(m => ({ default: m.RoadmapPage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then(m => ({ default: m.ResourcesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

const PageFallback: React.FC = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
    <div className="w-8 h-8 rounded-full border-2 border-brand-cyan/20 border-t-brand-cyan animate-spin" />
    <span className="text-xs font-mono text-brand-dim uppercase tracking-wider">
      Synqvero Neural Fabric Loading...
    </span>
  </div>
);

const getBasename = (): string => {
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/synqvero')) {
    return '/synqvero';
  }
  return '';
};

export function App() {
  const basename = getBasename();

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050816] text-[#F7F9FF] selection:bg-brand-cyan/20 selection:text-brand-cyan relative flex flex-col justify-between">
        <Navbar />

        <div className="flex-grow">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/build" element={<BuildPage />} />
              <Route path="/playground" element={<PlaygroundPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>

        {/* Global Floating AI Concierge */}
        <AiConcierge />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
