import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { lang, toggleLang, isTransitioning } = useLanguage();

  return (
    <div
      data-cs-ignore
      className="fixed z-[9999]"
      style={{ position: 'fixed', bottom: '6.5rem', left: '2rem', zIndex: 9999 }}
    >
      <motion.button
        onClick={toggleLang}
        disabled={isTransitioning}
        className="flex items-center justify-center w-14 h-14 rounded-full liquid-glass border border-border-primary overflow-hidden group relative"
        aria-label="Toggle language"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {/* Subtle cyber hover glow */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-cyan-500/15 via-transparent to-purple-500/15 pointer-events-none" />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={lang}
            initial={{ rotateY: 90, opacity: 0, scale: 0.7 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            exit={{ rotateY: -90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-center justify-center select-none"
          >
            <span className="text-text-primary font-bold text-sm tracking-wider font-mono">
              {lang === 'en' ? 'EN' : 'TH'}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-text-muted/60 font-semibold -mt-0.5">
              {lang === 'en' ? 'US' : 'TH'}
            </span>
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
