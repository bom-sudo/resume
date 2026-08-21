import React from 'react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

export const ContactButton: React.FC = () => {
  const { t } = useLanguage();
  return (
    <a 
      href={`mailto:${profile.email}`}
      className="liquid-glass inline-flex justify-center items-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white uppercase tracking-widest font-medium transition-transform hover:scale-105 active:scale-95 text-xs sm:text-sm md:text-base whitespace-nowrap"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1'
      }}
    >
      {t.ui.contactMe}
    </a>
  );
};
