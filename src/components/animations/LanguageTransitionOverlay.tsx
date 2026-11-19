import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageTransitionOverlay: React.FC = () => {
  const { lang, isTransitioning } = useLanguage();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="lang-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden"
          aria-hidden="true"
        >
          {/* Subtle cybernetic matrix grid flash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.18, 0.05, 0] }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:20px_20px] mix-blend-screen"
          />

          {/* Sweeping Laser Scanline Beam */}
          <motion.div
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 h-16 sm:h-24 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none"
          >
            {/* Top Glow trail */}
            <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-magenta-500/30 blur-md" />
            {/* Ultra-bright laser core line */}
            <div className="w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_#00f0ff,0_0_30px_#ec4899]" />
            {/* Bottom Glow trail */}
            <div className="w-full h-full bg-gradient-to-t from-transparent via-cyan-500/20 to-transparent blur-md" />
          </motion.div>

          {/* Sci-Fi HUD Decrypt Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0a0e17]/90 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center gap-2.5 text-xs font-mono text-cyan-300"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
            <span className="tracking-wider uppercase font-bold">
              SYS // TRANSLATING &gt;&gt; {lang === 'en' ? 'TH_TH' : 'EN_US'}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
