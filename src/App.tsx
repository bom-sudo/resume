import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { FocusSection } from './components/sections/FocusSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';

function App() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans selection:bg-[#B600A8]/30 selection:text-white">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <FocusSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}

export default App;
