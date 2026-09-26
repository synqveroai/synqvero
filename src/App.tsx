import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { Capabilities } from './components/Capabilities';
import { IntelligenceStack } from './components/IntelligenceStack';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { HowWeWork } from './components/HowWeWork';
import { WhySynqvero } from './components/WhySynqvero';
import { About } from './components/About';
import { Vision } from './components/Vision';
import { FutureProducts } from './components/FutureProducts';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-[#F7F9FF] selection:bg-brand-cyan/20 selection:text-brand-cyan relative">
      <Navbar />

      <main>
        <Hero />
        <BrandStatement />
        <Capabilities />
        <IntelligenceStack />
        <ProjectsShowcase />
        <HowWeWork />
        <WhySynqvero />
        <About />
        <Vision />
        <FutureProducts />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
