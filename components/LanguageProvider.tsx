
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Region } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  region: Region;
  setRegion: (r: Region) => void;
  isDark: boolean;
  setIsDark: (d: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('thread_lang') as Language) || 'ar';
  });
  const [region, setRegion] = useState<Region>(() => {
    return (localStorage.getItem('thread_region') as Region) || 'EG';
  });
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('thread_dark');
    return saved !== null ? saved === 'true' : true; 
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('lang', lang);
    localStorage.setItem('thread_lang', lang);
    
    // Update Document Title based on language
    const titles = {
      ar: 'ثريد | أناقة.. حضور.. فخامة ⚡',
      en: 'THREAD | ICONIC STREETWEAR ⚡'
    };
    document.title = titles[lang];
  }, [lang]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('thread_dark', String(isDark));
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('thread_region', region);
  }, [region]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, region, setRegion, isDark, setIsDark }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
