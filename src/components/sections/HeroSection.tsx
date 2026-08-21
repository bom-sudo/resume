import React, { useEffect, useRef } from 'react';
import { FadeIn } from '../animations/FadeIn';
import { Magnet } from '../animations/Magnet';
import { ContactButton } from '../ui/ContactButton';
import { useLanguage } from '../../context/LanguageContext';


export const HeroSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const navItems = [
    { key: 'about', label: t.nav.about },
    { key: 'journey', label: t.nav.journey },
    { key: 'skills', label: t.nav.skills },
    { key: 'projects', label: t.nav.projects },
    { key: 'contact', label: t.nav.contact },
  ];
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef(false);
  const rAFRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;

      if (duration && currentTime >= duration - 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;

        let start: number;
        const fadeOut = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = (timestamp - start) / 500;
          if (progress < 1) {
            video.style.opacity = (1 - progress).toString();
            rAFRef.current = requestAnimationFrame(fadeOut);
          } else {
            video.style.opacity = '0';
            video.currentTime = 0;
            setTimeout(() => {
              video.play().catch(e => console.log('Autoplay prevented', e));
              fadingOutRef.current = false;

              let fadeInStart: number;
              const fadeIn = (ts: number) => {
                if (!fadeInStart) fadeInStart = ts;
                const inProgress = (ts - fadeInStart) / 500;
                if (inProgress < 1) {
                  video.style.opacity = inProgress.toString();
                  rAFRef.current = requestAnimationFrame(fadeIn);
                } else {
                  video.style.opacity = '1';
                }
              };
              if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
              rAFRef.current = requestAnimationFrame(fadeIn);
            }, 100);
          }
        };
        if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
        rAFRef.current = requestAnimationFrame(fadeOut);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    // Initial fade in
    video.style.opacity = '0';
    video.play().then(() => {
      let start: number;
      const fadeIn = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / 500;
        if (progress < 1) {
          video.style.opacity = progress.toString();
          rAFRef.current = requestAnimationFrame(fadeIn);
        } else {
          video.style.opacity = '1';
        }
      };
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
      rAFRef.current = requestAnimationFrame(fadeIn);
    }).catch(e => console.log('Autoplay prevented', e));

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    };
  }, []);

  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      {/* Background Video Layer */}
      <video
        ref={videoRef}
        src="https://assets.mixkit.co/videos/preview/mixkit-server-racks-in-a-data-center-loop-43899-large.mp4"
        className="absolute inset-0 w-full h-full object-cover -z-10 translate-y-[17%]"
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-bg-primary/70 -z-10" />

      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full pt-6 md:pt-8 relative z-50 px-6">
        <nav className="liquid-glass rounded-full px-2 py-2 max-w-5xl mx-auto flex justify-between sm:justify-center sm:gap-8 items-center font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-text-muted/70 hover:text-text-primary hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 ease-out"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col justify-center relative z-10 -mt-16 md:-mt-32">
        <div className="overflow-hidden w-full">
          <FadeIn delay={0.15} y={40} className="w-full">
            <h1
              className={`hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap w-full text-center scale-105 ${
                lang === 'th'
                  ? 'text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17vw]'
                  : 'text-[17vw] sm:text-[18vw] md:text-[19vw] lg:text-[20vw]'
              }`}
            >
              {t.hero.heading}
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-[45%] sm:top-auto sm:bottom-48 md:bottom-60 lg:bottom-[18rem] -translate-y-1/2 sm:translate-y-0 pointer-events-none">
        <Magnet padding={150} strength={3}>
          <div className="w-[360px] sm:w-[460px] md:w-[560px] lg:w-[680px] xl:w-[760px] flex items-center justify-center relative pointer-events-auto">
            <img
              src="/assets/images/hero.png"
              alt="BOM-Sudo"
              className="w-full h-auto object-contain drop-shadow-2xl"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
              }}
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom Content Area */}
      <div className="w-full relative z-20 pb-6 px-6 md:px-10 flex flex-col mt-auto">


        {/* Existing Bottom Text Bar */}
        <div className="flex justify-between items-end w-full">
          <FadeIn delay={0.35} y={20}>
            <p className="text-text-muted font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
              {t.hero.subtitle}
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>


      </div>
    </section>
  );
};
