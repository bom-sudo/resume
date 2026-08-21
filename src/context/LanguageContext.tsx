import React, { createContext, useContext, useEffect, useState } from 'react';
import { content, type Content, type Lang } from '../i18n/content';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const readInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem('lang') === 'th' ? 'th' : 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'th' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
