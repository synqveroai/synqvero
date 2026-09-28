import React from 'react';
import { Hero } from '../components/Hero';
import { AskSynqvero } from '../components/AskSynqvero';
import { Capabilities } from '../components/Capabilities';
import { FromIdeaToIntelligence } from '../components/FromIdeaToIntelligence';
import { SynqveroArchitecture } from '../components/SynqveroArchitecture';
import { ChooseYourAi } from '../components/ChooseYourAi';
import { FlagshipProduct } from '../components/FlagshipProduct';
import { EngineeringPulse } from '../components/EngineeringPulse';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import { JournalPreview } from '../components/JournalPreview';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* 1. HERO: Intelligence that works in sync */}
      <Hero />

      {/* 2. ASK SYNQVERO: Grounded interactive website search & Q&A */}
      <AskSynqvero />

      {/* 3. WHAT WE BUILD: Foundational capabilities */}
      <Capabilities />

      {/* 4. FROM IDEA TO INTELLIGENCE: 5-step SYNC 01-05 interactive methodology */}
      <FromIdeaToIntelligence />

      {/* 5. SYNQVERO AI ARCHITECTURE: Interactive connected graph */}
      <SynqveroArchitecture />

      {/* 6. CHOOSE YOUR AI: Interactive capability & problem selector */}
      <ChooseYourAi />

      {/* 7. FLAGSHIP PRODUCT: Synqvero Knowledge AI */}
      <FlagshipProduct />

      {/* 8. ENGINEERING PULSE: Verified telemetry & GitHub repositories */}
      <EngineeringPulse />

      {/* 9. PROJECTS: Verified production systems & research */}
      <ProjectsShowcase />

      {/* 10. ENGINEERING JOURNAL: Publications & research preview */}
      <JournalPreview />

      {/* 11. FINAL CTA: Let's build something intelligent */}
      <FinalCTA />
    </main>
  );
};
