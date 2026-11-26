import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { useLanguage } from '../../context/LanguageContext';
import { techStack, type TechCategoryKey } from '../../data/techStack';

const categoryOrder: TechCategoryKey[] = ['infra', 'enterprise', 'dev', 'ai'];

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const repoMeta = [
  {
    href: 'https://github.com/bom-sudo/swarm-web',
    accent: '#00f0ff',
  },
  {
    href: 'https://github.com/bom-sudo/txt-ai-thai-ocr',
    accent: '#ff007a',
  },
];

export const TechStackSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="tech-stack" className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-bg-primary relative z-10 border-t border-border-primary">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black uppercase tracking-tight text-text-primary text-center mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 72px)' }}
          >
            {t.techStack.heading}
          </h2>
          <p className="text-text-muted/80 text-center max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            {t.techStack.intro}
          </p>
        </FadeIn>

        {/* Tech Stack Icons by Category */}
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

        {/* Featured Repositories (ข้างล่าง เครื่องมือที่ใช้งาน) */}
        <div className="mt-24 pt-16 border-t border-border-primary/60">
          <FadeIn delay={0.1} y={20}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-cyan-400 block mb-2">
                  Open Source &amp; Systems
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tight">
                  {t.techStack.featuredRepos.heading}
                </h3>
              </div>
              <p className="text-text-muted/70 text-sm max-w-md font-light">
                {t.techStack.featuredRepos.intro}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.techStack.featuredRepos.items.map((repo, idx) => {
              const meta = repoMeta[idx];
              return (
                <motion.a
                  key={repo.title}
                  href={meta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                  className="group liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-border-primary hover:border-cyan-400/40 relative overflow-hidden transition-colors shadow-lg"
                >
                  {/* Glowing top line accent */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${meta.accent}, transparent)` }}
                  />

                  <div>
                    {/* Top Meta Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-text-muted/80">
                        <GithubIcon className="w-4 h-4 text-text-primary" />
                        <span>bom-sudo /</span>
                        <span className="text-text-primary font-bold text-sm tracking-tight">{repo.title}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-text-muted/80 group-hover:text-white group-hover:bg-white/15 transition-all group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Tag Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-3 bg-white/[0.04] border border-white/10 text-cyan-300">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: meta.accent }} />
                      {repo.tag}
                    </div>

                    {/* Description */}
                    <p className="text-text-muted/85 text-sm sm:text-[15px] font-light leading-relaxed mb-6">
                      {repo.desc}
                    </p>
                  </div>

                  {/* Footer Chips */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.08]">
                    {repo.tags.map((tg) => (
                      <span
                        key={tg}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-text-muted/70 bg-white/[0.03] border border-white/[0.06]"
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
