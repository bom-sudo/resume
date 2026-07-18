import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { motion } from 'framer-motion';
import { goals2026, profile } from '../../data/profile';

const categories = [
  {
    key: 'infrastructure' as const,
    label: 'Infrastructure',
    color: '#45b7d1',
    image: 'https://images.unsplash.com/photo-1775519520461-6b6e068d9250?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Server rack with cables and compute hardware',
    eyebrow: 'Cloud / K8s / Security',
  },
  {
    key: 'development' as const,
    label: 'Development',
    color: '#4ecdc4',
    image: 'https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Laptop workspace with code editor open',
    eyebrow: 'React / Next.js / OSS',
  },
  {
    key: 'automation' as const,
    label: 'Automation',
    color: '#B600A8',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=900&auto=format&fit=crop',
    imageAlt: 'Monitoring dashboard with performance metrics',
    eyebrow: 'CI/CD / GitOps / Python',
  },
];

export const FocusSection: React.FC = () => {
  return (
    <section id="focus" className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-[#0C0C0C] relative z-10 border-t border-white/5 overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(182,0,168,0.12) 0%, transparent 70%)' }}
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-5xl mx-auto relative">
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 text-center mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 72px)' }}
          >
            2026 Focus
          </h2>
          <p className="text-[#D7E2EA]/60 text-center max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Currently learning {profile.learning.join(', ')} — pushing toward full-stack capability
            while deepening infrastructure expertise.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(({ key, label, color, image, imageAlt, eyebrow }, i) => (
            <FadeIn key={key} delay={i * 0.1}>
              <motion.div
                className="h-full rounded-[28px] bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 sm:p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 relative overflow-hidden group"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div className="relative h-40 mb-7 rounded-[22px] overflow-hidden border border-white/10 bg-black/30">
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-75 saturate-[0.9] contrast-[1.06] transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/35 to-transparent" />
                  <motion.div
                    className="absolute inset-x-5 bottom-5 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                    animate={{ x: ['-30%', '30%', '-30%'], opacity: [0.35, 0.9, 0.35] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
                  />
                  <div
                    className="absolute left-4 top-4 h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: color, boxShadow: `0 0 22px ${color}` }}
                  />
                  <span className="absolute left-4 bottom-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/75">
                    {eyebrow}
                  </span>
                </div>

                <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-lg">
                  {label}
                </h3>
                <ul className="space-y-4">
                  {goals2026[key].map((goal, gi) => (
                    <motion.li
                      key={goal}
                      className="text-[#D7E2EA]/70 text-sm leading-relaxed flex gap-3"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + gi * 0.06 }}
                    >
                      <motion.span
                        className="mt-2 w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: color }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, delay: gi * 0.4 }}
                      />
                      {goal}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
