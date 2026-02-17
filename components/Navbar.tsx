
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';

const Navbar: React.FC = () => {
  const { lang, setLang, region, setRegion, isDark, setIsDark } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('thread_wishlist') || '[]');
      setWishlistCount(wishlist.length);
    };
    updateCount();
    window.addEventListener('wishlistUpdated', updateCount);
    return () => window.removeEventListener('wishlistUpdated', updateCount);
  }, []);

  const navLinks = [
    { id: 'men', ar: 'رجالي', en: 'Men', path: 'men' },
    { id: 'women', ar: 'نسائي', en: 'Women', path: 'women' },
    { id: 'new', ar: 'جديد', en: 'New', path: 'new' },
    { id: 'size', ar: 'دليل المقاسات', en: 'Size Guide', path: 'size-guide' },
    { id: 'faq', ar: 'الأسئلة الشائعة', en: 'FAQ', path: 'faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById(path);
      if (element) {
        const navOffset = 130; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate('/', { state: { scrollTo: path } });
    }
  };

  return (
    <header className={`fixed left-0 right-0 z-[140] transition-all duration-300 ${isScrolled ? 'top-0' : 'top-9 md:top-12'}`}>
      <nav className={`max-w-7xl mx-auto px-4 transition-all duration-300 ${isScrolled ? 'w-full' : 'md:w-[96%]'} h-16 md:h-20 glass md:rounded-3xl border-primary/10 flex items-center justify-between shadow-2xl`}>
        
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl md:text-2xl font-black italic tracking-tighter flex items-center gap-2 group">
            <div className="bg-primary text-white dark:text-black px-2 py-0.5 rounded transition-all group-hover:rotate-12 shadow-xl shadow-primary/20">T</div>
            <span className="text-dark-950 dark:text-white transition-colors duration-500 hidden sm:block">THREAD</span>
          </Link>
          
          <div className="hidden sm:flex gap-1 p-1 bg-white/5 rounded-xl border border-white/10">
            <button 
              onClick={() => setRegion('EG')}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${region === 'EG' ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
            >
              {lang === 'ar' ? '🇪🇬 مصر' : '🇪🇬 EG'}
            </button>
            <button 
              onClick={() => setRegion('KSA')}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${region === 'KSA' ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
            >
              {lang === 'ar' ? '🇸🇦 المملكة' : '🇸🇦 KSA'}
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.path}`}
              onClick={(e) => handleLinkClick(e, link.path)}
              className="text-[11px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-primary transition-all relative group italic"
            >
              {lang === 'ar' ? link.ar : link.en}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-xl glass border-white/10 hover:border-primary transition-all text-dark-950 dark:text-white"
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="text-[10px] font-black uppercase border border-dark-950/10 dark:border-white/10 px-3 py-1.5 rounded-lg hover:border-primary transition-all text-dark-950 dark:text-white bg-white/5"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
          
          <Link to="/wishlist" className="relative p-2 text-dark-950 dark:text-white hover:text-primary transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            {wishlistCount > 0 && <span className="absolute -top-1 -right-1 bg-primary text-white dark:text-black text-[8px] font-black w-3.5 h-3.5 flex items-center justify-center rounded-full shadow-lg">{wishlistCount}</span>}
          </Link>

          <Link to="/cart" className="p-2 text-dark-950 dark:text-white hover:text-primary transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /></svg>
          </Link>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 bg-primary text-white dark:text-black rounded-xl shadow-xl">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white dark:bg-dark-950 backdrop-blur-2xl z-[160] transition-all duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          <div className="flex gap-4 mb-8">
             <button onClick={() => setRegion('EG')} className={`px-6 py-3 rounded-2xl font-black ${region === 'EG' ? 'bg-primary text-white shadow-xl' : 'glass'}`}>{lang === 'ar' ? 'مصر 🇪🇬' : 'EG 🇪🇬'}</button>
             <button onClick={() => setRegion('KSA')} className={`px-6 py-3 rounded-2xl font-black ${region === 'KSA' ? 'bg-primary text-white shadow-xl' : 'glass'}`}>{lang === 'ar' ? 'المملكة 🇸🇦' : 'KSA 🇸🇦'}</button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.path}`}
              onClick={(e) => handleLinkClick(e, link.path)}
              className="text-4xl font-black uppercase italic tracking-tighter text-dark-950 dark:text-white hover:text-primary transition-all"
            >
              {lang === 'ar' ? link.ar : link.en}
            </a>
          ))}
          <div className="flex gap-4 pt-8">
            <button onClick={() => { setLang('ar'); setIsMenuOpen(false); }} className={`px-8 py-3 rounded-2xl font-black ${lang === 'ar' ? 'bg-primary text-white shadow-xl' : 'glass'}`}>العربية</button>
            <button onClick={() => { setLang('en'); setIsMenuOpen(false); }} className={`px-8 py-3 rounded-2xl font-black ${lang === 'en' ? 'bg-primary text-white shadow-xl' : 'glass'}`}>English</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
