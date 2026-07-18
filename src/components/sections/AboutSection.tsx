import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { AnimatedText } from '../animations/AnimatedText';
import { ContactButton } from '../ui/ContactButton';
import { profile } from '../../data/profile';


export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 relative overflow-hidden bg-[#0C0C0C]">
      
      {/* 4 Decorative 3D Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon" className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl" />
      </FadeIn>
      
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object" className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-2xl" />
      </FadeIn>
      
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego" className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl" />
      </FadeIn>
      
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-2xl" />
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={40} className="w-full flex justify-center mb-10 sm:mb-14 md:mb-16">
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          About me
        </h2>
      </FadeIn>

      {/* Animated Paragraph */}
      <div className="relative z-10 text-center text-[#D7E2EA] font-medium max-w-[560px] mx-auto mb-16 sm:mb-20 md:mb-24 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
        <AnimatedText text={`${profile.role} based in ${profile.location}. ${profile.background} — now at ${profile.company}, focused on ${profile.currentFocus.join(', ')}. I enjoy automation, system architecture, and building AI-driven content tools on the side. Let's build something amazing together!`} />
      </div>

      <ContactButton />
    </section>
  );
};
