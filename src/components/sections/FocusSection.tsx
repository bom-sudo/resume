import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { motion } from 'framer-motion';
import { goals2026, profile } from '../../data/profile';
import { FocusMotionGraphic } from '../animations/FocusMotionGraphic';

const categories = [
  { key: 'infrastructure' as const, label: 'Infrastructure', color: '#45b7d1' },
  { key: 'development' as const, label: 'Development', color: '#4ecdc4' },
  { key: 'automation' as const, label: 'Automation', color: '#B600A8' },
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
          {categories.map(({ key, label, color }, i) => (
            <FadeIn key={key} delay={i * 0.1}>
              <motion.div
                className="h-full rounded-[28px] bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 sm:p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 relative overflow-hidden group"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <FocusMotionGraphic color={color} index={i} />

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
