import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDark(initialDark);
    document.documentElement.setAttribute('data-theme', initialDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.setAttribute('data-theme', newDark ? 'dark' : 'light');
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <div 
      className="fixed z-[9999]" 
      style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 9999 }}
    >
      <motion.button
        onClick={toggleTheme}
        className="flex items-center justify-center w-14 h-14 rounded-full liquid-glass shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-border-primary overflow-hidden group relative"
        aria-label="Toggle theme"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-text-primary/5 to-text-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 10 }}
            >
              <Moon className="w-6 h-6 text-text-primary drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: -20, opacity: 0, rotate: 90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 10 }}
            >
              <Sun className="w-6 h-6 text-text-primary drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
