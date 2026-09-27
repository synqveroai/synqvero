import React from 'react';
import { Hero } from '../components/Hero';
import { Capabilities } from '../components/Capabilities';
import { FlagshipProduct } from '../components/FlagshipProduct';
import { WhySynqvero } from '../components/WhySynqvero';
import { IntelligenceStack } from '../components/IntelligenceStack';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import { HowWeWork } from '../components/HowWeWork';
import { About } from '../components/About';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Capabilities />
      <FlagshipProduct />
      <WhySynqvero />
      <IntelligenceStack />
      <ProjectsShowcase />
      <HowWeWork />
      <About />
      <FinalCTA />
    </main>
  );
};
