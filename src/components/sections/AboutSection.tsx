import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { AnimatedText } from '../animations/AnimatedText';
import { ContactButton } from '../ui/ContactButton';
import { useLanguage } from '../../context/LanguageContext';


export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 relative overflow-hidden bg-bg-primary">
      
      {/* 4 Decorative 3D Images */}
      <FadeIn delay={0.1} x={-40} y={0} duration={0.9} className="absolute top-[4%] left-[-2%] sm:left-[2%] md:left-[4%] pointer-events-none opacity-50 sm:opacity-100">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon" className="w-[80px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl" />
      </FadeIn>
      
      <FadeIn delay={0.25} x={-40} y={0} duration={0.9} className="absolute bottom-[8%] left-[1%] sm:left-[6%] md:left-[10%] pointer-events-none opacity-50 sm:opacity-100 hidden sm:block">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object" className="w-[80px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-2xl" />
      </FadeIn>
      
      <FadeIn delay={0.15} x={40} y={0} duration={0.9} className="absolute top-[4%] right-[-2%] sm:right-[2%] md:right-[4%] pointer-events-none opacity-50 sm:opacity-100">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego" className="w-[80px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl" />
      </FadeIn>
      
      <FadeIn delay={0.3} x={40} y={0} duration={0.9} className="absolute bottom-[8%] right-[1%] sm:right-[6%] md:right-[10%] pointer-events-none opacity-50 sm:opacity-100 hidden sm:block">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="w-[90px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-2xl" />
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={40} className="w-full flex justify-center mb-10 sm:mb-14 md:mb-16 px-4">
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight break-words" style={{ fontSize: 'clamp(2.5rem, 11vw, 160px)' }}>
          {t.about.heading}
        </h2>
      </FadeIn>

      {/* Animated Paragraph */}
      <div className="relative z-10 text-center text-text-muted font-medium max-w-[560px] mx-auto mb-16 sm:mb-20 md:mb-24 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
        <AnimatedText text={t.about.paragraph} />
      </div>

      <ContactButton />
    </section>
  );
};
