import React, { createContext, useContext, useEffect, useState } from 'react';
import { content, type Content, type Lang } from '../i18n/content';
import { playCyberTranslateSound } from '../lib/cyberSound';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  setLanguage: (targetLang: Lang) => void;
  isTransitioning: boolean;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const readInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem('lang') === 'th' ? 'th' : 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(readInitialLang);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang]);

  const switchWithAnimation = (targetLang: Lang) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    playCyberTranslateSound();

    // Change language midway through the scanline beam (120ms)
    // so the layout shift happens behind the motion blur and laser wipe
    setTimeout(() => {
      setLang(targetLang);
    }, 120);

    // Complete the cyber transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 450);
  };

  const toggleLang = () => switchWithAnimation(lang === 'en' ? 'th' : 'en');
  const setLanguage = (targetLang: Lang) => switchWithAnimation(targetLang);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLang,
        setLanguage,
        isTransitioning,
        t: content[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
