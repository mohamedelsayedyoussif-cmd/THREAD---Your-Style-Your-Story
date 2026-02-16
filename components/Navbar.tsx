
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import SocialContactIcons from './SocialContactIcons';
import { CONTACT_LINKS, SOCIAL_LINKS } from '../lib/links';

const Navbar: React.FC = () => {
  const { lang, setLang, isDark, setIsDark } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const menuItems = [
    { id: 'about', ar: 'قصتنا', en: 'Our Story', path: '/#about' },
    { id: 'collections', ar: 'المتجر', en: 'Shop All', path: '/collections' },
    { id: 'men', ar: 'الرجال', en: 'Men', path: '/#men' },
    { id: 'women', ar: 'النساء', en: 'Women', path: '/#women' },
  ];

  const helpItems = [
    { id: 'size', ar: 'دليل المقاسات', en: 'Size Guide', path: '/size-guide' },
    { id: 'faq', ar: 'الأسئلة الشائعة', en: 'FAQ', path: '/faq' },
    { id: 'shipping', ar: 'الشحن والتوصيل', en: 'Shipping', path: '/shipping' },
    { id: 'returns', ar: 'الإرجاع والاستبدال', en: 'Returns', path: '/returns' },
    { id: 'track', ar: 'تتبع طلبك', en: 'Track Order', path: '/track' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      if (isHome) {
        e.preventDefault();
        const id = path.substring(2);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
    setIsHelpOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl sm:text-3xl font-black tracking-tighter text-primary flex items-center gap-2">
          <span className="bg-primary text-dark-900 px-2 py-0.5 rounded italic">T</span>
          THREAD
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 font-semibold">
          {menuItems.map((item) => (
            <div key={item.id} className="relative group py-2">
              <Link 
                to={item.path} 
                onClick={(e) => handleLinkClick(e, item.path)}
                className="hover:text-primary transition-colors uppercase text-xs tracking-widest"
              >
                {lang === 'ar' ? item.ar : item.en}
              </Link>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </div>
          ))}

          {/* Help Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setIsHelpOpen(true)}
            onMouseLeave={() => setIsHelpOpen(false)}
          >
            <button className="hover:text-primary transition-colors uppercase text-xs tracking-widest flex items-center gap-1">
              {lang === 'ar' ? 'المساعدة' : 'Help'}
              <svg className={`w-3 h-3 transition-transform ${isHelpOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`absolute top-full -start-4 w-56 glass border border-primary/20 rounded-2xl p-2 shadow-2xl transition-all duration-300 origin-top ${isHelpOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
               <div className="flex flex-col">
                  {helpItems.map(item => (
                    <Link 
                      key={item.id} 
                      to={item.path} 
                      onClick={(e) => handleLinkClick(e, item.path)}
                      className="px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all text-xs font-bold uppercase"
                    >
                      {lang === 'ar' ? item.ar : item.en}
                    </Link>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-primary/10 transition-colors group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
               <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
               <path d="M3 6h18" />
            </svg>
          </Link>

          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="px-3 py-1 rounded-full border border-primary/30 text-xs font-bold hover:bg-primary hover:text-dark-900 transition-all uppercase"
          >
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-primary/10 text-primary"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-16 sm:top-20 bg-dark-900/95 backdrop-blur-xl transition-all duration-500 z-40 overflow-y-auto ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col p-6 gap-6 min-h-full">
          {menuItems.map((item) => (
            <Link 
              key={item.id} 
              to={item.path} 
              onClick={(e) => handleLinkClick(e, item.path)}
              className="text-2xl font-bold hover:text-primary transition-colors uppercase tracking-tighter"
            >
              {lang === 'ar' ? item.ar : item.en}
            </Link>
          ))}
          
          <div className="h-px bg-white/5 my-2" />
          
          <span className="text-gray-500 text-xs font-black uppercase tracking-widest">
            {lang === 'ar' ? 'المساعدة' : 'Help Links'}
          </span>
          
          <div className="grid grid-cols-1 gap-4">
            {helpItems.map(item => (
              <Link 
                key={item.id} 
                to={item.path} 
                onClick={(e) => handleLinkClick(e, item.path)}
                className="text-lg font-bold hover:text-primary transition-colors"
              >
                {lang === 'ar' ? item.ar : item.en}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto pt-8 border-t border-primary/20 pb-12">
             <div className="grid grid-cols-4 gap-4">
                {SOCIAL_LINKS.map(link => (
                  <a key={link.id} href={link.href} className="p-4 rounded-2xl glass flex items-center justify-center">
                    {link.icon({ className: 'w-6 h-6' })}
                  </a>
                ))}
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
