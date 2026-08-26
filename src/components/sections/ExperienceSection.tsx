import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { journey } from '../../data/profile';
import { JourneyMotionGraphic } from '../animations/JourneyMotionGraphic';
import { AnimatedStepIndex } from '../animations/AnimatedStepIndex';
import { useLanguage } from '../../context/LanguageContext';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  const entries = journey.map((exp, i) => ({ ...exp, ...t.journey.entries[i] }));

  return (
    <section id="experience" className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-bg-primary relative z-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-12 lg:gap-24 xl:gap-32">
        <div className="min-w-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:py-32">
          <FadeIn delay={0} y={30}>
            <h2
              className="font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-text-primary via-text-primary to-text-primary/20 mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 80px)' }}
            >
              {t.journey.heading}
            </h2>
            <p className="text-text-muted font-medium text-base sm:text-lg leading-relaxed max-w-md mb-6">
              {t.journey.intro}
            </p>

            <div className="hidden lg:block">
              <JourneyMotionGraphic />
            </div>

            <motion.div
              className="relative overflow-hidden py-3 border-y border-border-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              >
                {[...t.journey.tickerItems, ...t.journey.tickerItems, ...t.journey.tickerItems].map(
                  (item, i) => (
                    <span
                      key={`${item}-${i}`}
                      className="text-text-muted/60 text-xs uppercase tracking-[0.3em] font-medium"
                    >
                      {item}
                    </span>
                  ),
                )}
              </motion.div>
            </motion.div>
          </FadeIn>
        </div>

        <div className="min-w-0 flex flex-col gap-12 lg:py-32">
          {entries.map((exp, i) => (
            <motion.a
              key={exp.company}
              href={exp.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group block rounded-[32px] bg-bg-inverse/[0.03] backdrop-blur-xl border border-border-primary p-6 sm:p-8 md:p-10 hover:bg-bg-inverse/[0.05] transition-all duration-500 cursor-pointer shadow-2xl overflow-hidden relative"
            >
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ backgroundColor: `${exp.accent}25` }}
              />

              <div className="flex items-start justify-between mb-2 relative">
                <AnimatedStepIndex index={i} accent={exp.accent} />
                <motion.div
                  className="w-10 h-10 rounded-lg bg-bg-inverse/[0.05] flex items-center justify-center border border-border-primary text-text-muted group-hover:text-text-inverse group-hover:bg-bg-inverse transition-colors"
                  whileHover={{ rotate: 45 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2 tracking-tight">
                {exp.title}
              </h3>
              <p className="text-text-muted/60 text-sm uppercase tracking-widest mb-6">
                {exp.fullCompany}
              </p>

              <div className="w-full aspect-video sm:aspect-[16/9] rounded-2xl bg-bg-primary border border-border-primary flex items-center justify-center overflow-hidden mb-6 relative shadow-inner">
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${exp.accent}40, transparent)`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <div
                  className="absolute inset-[1px] rounded-2xl bg-bg-primary flex items-center justify-center overflow-hidden"
                >
                  <motion.img
                    src={exp.iconSrc}
                    alt={exp.company}
                    className="w-1/2 h-1/2 object-contain filter drop-shadow-2xl relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                  />
                </div>
              </div>

              <p className="text-text-muted/90 font-light leading-relaxed mb-6 text-sm sm:text-base">
                {exp.description}
              </p>

              <ul className="space-y-2 mb-6">
                {exp.highlights.map((tag, hi) => (
                  <motion.li
                    key={tag}
                    className="flex items-center gap-3 text-text-muted/80 text-sm"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + hi * 0.08 }}
                  >
                    <motion.span
                      className="w-1 h-4 rounded-full shrink-0"
                      style={{ backgroundColor: exp.accent }}
                      animate={{ scaleY: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: hi * 0.3 }}
                    />
                    {tag}
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t border-border-primary pt-6">
                <p className="text-text-muted font-medium text-sm md:text-base tracking-widest uppercase">
                  {exp.company}
                </p>
                <motion.div
                  className="w-10 h-10 rounded-full bg-bg-inverse/[0.05] border border-border-primary flex items-center justify-center group-hover:bg-text-primary group-hover:text-bg-primary transition-colors duration-300 text-text-muted"
                  whileHover={{ scale: 1.08 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
