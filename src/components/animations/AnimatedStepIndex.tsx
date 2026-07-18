import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedStepIndexProps {
  index: number;
  accent: string;
}

export const AnimatedStepIndex: React.FC<AnimatedStepIndexProps> = ({ index, accent }) => {
  const label = String(index + 1).padStart(2, '0');

  return (
    <div className="relative">
      <motion.span
        className="block text-6xl sm:text-7xl font-black leading-none select-none"
        style={{
          WebkitTextStroke: '1px rgba(255,255,255,0.08)',
          color: 'transparent',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {label}
      </motion.span>
      <motion.span
        className="absolute inset-0 block text-6xl sm:text-7xl font-black leading-none bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(135deg, ${accent} 0%, rgba(255,255,255,0.15) 100%)`,
        }}
        initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
        whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {label}
      </motion.span>
    </div>
  );
};
