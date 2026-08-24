import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { useLanguage } from '../../context/LanguageContext';
import { techStack, type TechCategoryKey } from '../../data/techStack';

const categoryOrder: TechCategoryKey[] = ['infra', 'enterprise', 'dev', 'ai'];

export const TechStackSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="tech-stack" className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-bg-primary relative z-10 border-t border-border-primary">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-text-primary via-text-primary to-text-primary/20 text-center mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 72px)' }}
          >
            {t.techStack.heading}
          </h2>
          <p className="text-text-muted/80 text-center max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            {t.techStack.intro}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-12">
          {categoryOrder.map((key, ci) => (
            <FadeIn key={key} delay={ci * 0.08}>
              <h3 className="text-text-primary/70 font-medium uppercase tracking-[0.2em] text-xs sm:text-sm mb-5">
                {t.techStack.categories[key]}
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {techStack[key].map((icon, i) => (
                  <motion.a
                    key={icon.name}
                    href={icon.href}
                    target="_blank"
                    rel="noreferrer"
                    title={icon.name}
                    className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/95 border border-black/5 shadow-sm p-3"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.06 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.02 }}
                  >
                    <img src={icon.src} alt={icon.name} loading="lazy" className="w-full h-full object-contain" />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
