import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { FocusSection } from './components/sections/FocusSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { FooterSection } from './components/sections/FooterSection';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <main className="bg-bg-primary min-h-screen text-text-muted font-sans selection:bg-[#B600A8]/30 selection:text-white overflow-x-clip w-full">
        <ThemeToggle />
        <LanguageToggle />
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ExperienceSection />
        <FocusSection />
        <ServicesSection />
        <TechStackSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </LanguageProvider>
  );
}

export default App;
