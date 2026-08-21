import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { useLanguage } from '../../context/LanguageContext';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-bg-primary rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 -mt-10">
      <h2 className="text-text-primary font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        {t.services.heading}
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {t.services.items.map((service, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 sm:py-10 md:py-12 border-t border-border-primary first:border-t-0">
              <div className="text-text-primary font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                0{i + 1}
              </div>
              <div className="flex flex-col justify-center flex-1">
                <h3 className="text-text-primary font-medium uppercase mb-4" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {service.name}
                </h3>
                <p className="text-text-muted font-light leading-relaxed max-w-2xl" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
