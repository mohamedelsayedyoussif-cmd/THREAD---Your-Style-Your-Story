
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
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.className = isDark ? 'dark' : '';
    localStorage.setItem('thread_lang', lang);
  }, [lang, isDark]);

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
