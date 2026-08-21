import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <div
      className="fixed z-[9999]"
      style={{ position: 'fixed', bottom: '6.5rem', left: '2rem', zIndex: 9999 }}
    >
      <motion.button
        onClick={toggleLang}
        className="flex items-center justify-center w-14 h-14 rounded-full liquid-glass shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-border-primary overflow-hidden group relative"
        aria-label="Toggle language"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-text-primary/5 to-text-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={lang}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 10 }}
            className="text-text-primary font-bold text-sm tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          >
            {lang === 'en' ? 'EN' : 'TH'}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
