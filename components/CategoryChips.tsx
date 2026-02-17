
import React from 'react';
import { useLanguage } from './LanguageProvider';
import { useNavigate, useLocation } from 'react-router-dom';

const CategoryChips: React.FC = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const chips = [
    { ar: 'الأكثر مبيعاً 🏆', en: 'Best Sellers', id: 'best-sellers' },
    { ar: 'وصل حديثاً ✨', en: 'New Drops', id: 'new' },
    { ar: 'عروض ⚡', en: 'Flash Sale', id: 'flash-sale' },
    { ar: 'آراء العملاء ⭐', en: 'Reviews', id: 'reviews' },
    { ar: 'من نحن 👕', en: 'About Us', id: 'about' }
  ];

  const handleScroll = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 160; 
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
    <div className="py-6 md:py-10 overflow-x-auto no-scrollbar flex gap-4 px-4 max-w-7xl mx-auto sticky top-9 md:top-12 z-[100] bg-dark-950/80 backdrop-blur-xl border-y border-white/5">
      {chips.map((chip, idx) => (
        <button
          key={idx}
          onClick={() => handleScroll(chip.id)}
          className="whitespace-nowrap px-8 py-4 glass rounded-2xl border-white/10 text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-dark-900 transition-all active:scale-95 shadow-xl hover:shadow-primary/20"
        >
          {lang === 'ar' ? chip.ar : chip.en}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;
