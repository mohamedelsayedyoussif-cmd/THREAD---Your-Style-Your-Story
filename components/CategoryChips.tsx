import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const CategoryChips: React.FC = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chips = [
    { ar: 'الأكثر مبيعاً 🏆', en: 'Best Sellers', id: 'best-sellers' },
    { ar: 'وصل حديثاً ✨', en: 'New Drops', id: 'new' },
    { ar: 'عروض ⚡', en: 'Flash Sale', id: 'flash-sale' },
    { ar: 'آراء العملاء ⭐', en: 'Reviews', id: 'reviews' },
    { ar: 'من نحن 👕', en: 'About Us', id: 'about' }
  ];

  const handleScrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset: Navbar height + AnnouncementBar height
      const navOffset = isScrolled ? 80 : 130; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className={`py-6 md:py-8 overflow-x-auto no-scrollbar flex gap-3 px-4 max-w-7xl mx-auto sticky z-[100] transition-all duration-300 border-y border-white/5 bg-white/80 dark:bg-dark-950/80 backdrop-blur-xl ${
        isScrolled ? 'top-16 md:top-20' : 'top-[100px] md:top-[116px]'
      }`}
    >
      {chips.map((chip, idx) => (
        <button
          key={idx}
          onClick={() => handleScrollTo(chip.id)}
          className="whitespace-nowrap px-6 py-3 glass rounded-2xl border-white/10 text-[9px] md:text-[11px] font-black uppercase tracking-widest hover:bg-primary hover:text-white dark:hover:text-dark-900 transition-all active:scale-95 shadow-sm hover:shadow-primary/20"
        >
          {lang === 'ar' ? chip.ar : chip.en}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;