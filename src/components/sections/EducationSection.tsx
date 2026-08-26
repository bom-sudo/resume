import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { education } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

export const EducationSection: React.FC = () => {
  const { t } = useLanguage();
  const entries = education.map((edu, i) => ({ ...edu, ...t.education.entries[i] }));

  return (
    <section id="journey" className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-bg-primary relative z-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-text-primary via-text-primary to-text-primary/20 text-center mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 72px)' }}
          >
            {t.education.heading}
          </h2>
          <p className="text-text-muted/80 text-center max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            {t.education.intro}
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {entries.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col gap-5 rounded-[28px] bg-bg-inverse/[0.03] backdrop-blur-xl border border-border-primary p-8 sm:p-10 shadow-xl overflow-hidden transition-colors duration-500 hover:bg-bg-inverse/[0.05]"
            >
              <motion.div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: `${edu.accent}30` }}
              />

              <div className="flex items-center gap-4 relative">
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center p-2.5 shrink-0"
                  style={{ boxShadow: `0 0 30px ${edu.accent}25` }}
                  whileHover={{ rotate: -6, scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 260 }}
                >
                  <img src={edu.iconSrc} alt={edu.school} className="w-full h-full object-contain" />
                </motion.div>
                <div className="min-w-0">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.25em]"
                    style={{ color: edu.accent }}
                  >
                    {String(i + 1).padStart(2, '0')} · {edu.school}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight leading-snug mt-1">
                    {edu.degree}
                  </h3>
                </div>
              </div>

              <p className="text-text-muted/90 font-light leading-relaxed text-sm sm:text-base relative">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-2 relative">
                {edu.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted/80 bg-bg-inverse/[0.05] border border-border-primary rounded-full px-3 py-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: edu.accent }} />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
