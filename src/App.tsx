import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { FocusSection } from './components/sections/FocusSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { FooterSection } from './components/sections/FooterSection';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { SwarmRebuildButton } from './components/ui/SwarmRebuildButton';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { LanguageTransitionOverlay } from './components/animations/LanguageTransitionOverlay';

function MainContent() {
  const { isTransitioning } = useLanguage();

  return (
    <main
      className={`bg-bg-primary min-h-screen text-text-muted font-sans selection:bg-[#B600A8]/30 selection:text-white overflow-x-clip w-full transition-[filter,opacity] duration-200 ${isTransitioning ? 'blur-[1.5px] opacity-90' : 'blur-0 opacity-100'
        }`}
    >
      <LanguageTransitionOverlay />
      <ThemeToggle />
      <LanguageToggle />
      <SwarmRebuildButton />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <EducationSection />
      <CertificatesSection />
      <ExperienceSection />
      <FocusSection />
      <ServicesSection />
      <TechStackSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
