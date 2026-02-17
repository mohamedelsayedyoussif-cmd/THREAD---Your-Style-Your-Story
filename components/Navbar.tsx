
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import SocialContactIcons from './SocialContactIcons';
import { CONTACT_LINKS, SOCIAL_LINKS } from '../lib/links';

const Navbar: React.FC = () => {
  const { lang, setLang, region, setRegion, isDark, setIsDark } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const phoneNumber = region === 'EG' ? "+20 103 377 6986" : "+966 50 000 0000";

  useEffect(() => {
    const updateCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('thread_wishlist') || '[]');
      setWishlistCount(wishlist.length);
    };
    updateCount();
    window.addEventListener('wishlistUpdated', updateCount);
    return () => window.removeEventListener('wishlistUpdated', updateCount);
  }, []);

  const shopItems = [
    { id: 'new', ar: 'وصل حديثاً ✨', en: 'New Arrivals ✨', path: '/#new' },
    { id: 'men', ar: 'ملابس رجالي 👕', en: 'Men\'s Wear 👕', path: '/#men' },
    { id: 'women', ar: 'ملابس حريمي 👗', en: 'Women\'s Wear 👗', path: '/#women' },
    { id: 'accessories', ar: 'إكسسوارات 🧢', en: 'Accessories 🧢', path: '/#accessories' },
  ];

  const infoItems = [
    { id: 'about', ar: 'قصتنا', en: 'Our Story', path: '/#about' },
    { id: 'contact', ar: 'تواصل معنا', en: 'Contact Us', path: '/#contact' },
  ];

  const helpItems = [
    { id: 'size', ar: 'دليل المقاسات', en: 'Size Guide', path: '/size-guide' },
    { id: 'faq', ar: 'الأسئلة الشائعة', en: 'FAQ', path: '/faq' },
    { id: 'shipping', ar: 'الشحن', en: 'Shipping', path: '/shipping' },
    { id: 'returns', ar: 'الإرجاع', en: 'Returns', path: '/returns' },
    { id: 'track', ar: 'تتبع طلبك', en: 'Track Order', path: '/track' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.substring(2);
      if (isHome) {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        navigate('/', { state: { scrollTo: id } });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] shadow-2xl">
      {/* Top Bar for Customer Service and Region Switcher */}
      <div className="bg-dark-900 border-b border-white/5 py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
          <div className="flex items-center gap-4">
             <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="flex items-center gap-2 text-primary hover:text-white transition-all group">
               <span className="text-sm animate-pulse">📞</span>
               <span className="group-hover:translate-x-1 transition-transform inline-block">
                 {lang === 'ar' ? 'خدمة العملاء:' : 'Support:'} {phoneNumber}
               </span>
             </a>
             <span className="text-gray-600">|</span>
             <span className="text-gray-400 font-bold">
               {region === 'EG' 
                 ? (lang === 'ar' ? 'شحن مجاني فوق 500 ج.م' : 'Free shipping over 500 EGP')
                 : (lang === 'ar' ? 'شحن مجاني فوق 200 ر.س' : 'Free shipping over 200 SAR')}
             </span>
          </div>
          
          <div className="flex items-center gap-6">
             {/* Region Switcher */}
             <div className="flex items-center gap-2 border-r border-white/10 pr-6 rtl:border-r-0 rtl:border-l rtl:pr-0 rtl:pl-6">
               <button 
                 onClick={() => setRegion('EG')}
                 className={`flex items-center gap-1.5 transition-opacity ${region === 'EG' ? 'opacity-100 text-primary' : 'opacity-40 hover:opacity-100'}`}
               >
                 <span>🇪🇬</span> {lang === 'ar' ? 'مصر' : 'EG'}
               </button>
               <button 
                 onClick={() => setRegion('KSA')}
                 className={`flex items-center gap-1.5 transition-opacity ${region === 'KSA' ? 'opacity-100 text-primary' : 'opacity-40 hover:opacity-100'}`}
               >
                 <span>🇸🇦</span> {lang === 'ar' ? 'السعودية' : 'KSA'}
               </button>
             </div>

             <Link to="/track" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1">
               <span>📦</span> {lang === 'ar' ? 'تتبع طلبك' : 'Track Order'}
             </Link>
             <button 
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className="text-primary hover:text-white transition-colors border border-primary/20 px-3 py-0.5 rounded-lg"
              >
                {lang === 'ar' ? 'English' : 'العربية'}
              </button>
          </div>
        </div>
      </div>

      <nav className="glass border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl sm:text-3xl font-black tracking-tighter text-primary flex items-center gap-2 group">
            <div className="bg-primary text-dark-900 px-2 py-0.5 rounded italic transition-all group-hover:rotate-12">T</div>
            THREAD <span className="text-lg opacity-60 italic">{region}</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-bold">
            <div className="relative py-2" onMouseEnter={() => setIsShopOpen(true)} onMouseLeave={() => setIsShopOpen(false)}>
              <button className="hover:text-primary transition-colors uppercase text-[10px] tracking-widest flex items-center gap-2 py-2">
                {lang === 'ar' ? 'الأقسام' : 'Categories'}
                <svg className={`w-3 h-3 transition-transform ${isShopOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full -start-4 w-64 glass border border-primary/20 rounded-2xl p-3 shadow-2xl transition-all duration-300 origin-top ${isShopOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                 <div className="flex flex-col gap-1">
                    {shopItems.map(item => (
                      <Link key={item.id} to={item.path} onClick={(e) => handleLinkClick(e, item.path)} className="px-4 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all text-sm font-bold flex items-center gap-2">
                        {lang === 'ar' ? item.ar : item.en}
                      </Link>
                    ))}
                 </div>
              </div>
            </div>

            {infoItems.map((item) => (
              <Link key={item.id} to={item.path} onClick={(e) => handleLinkClick(e, item.path)} className="hover:text-primary transition-colors uppercase text-[10px] tracking-widest relative group py-2">
                {lang === 'ar' ? item.ar : item.en}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/wishlist" className="relative p-2.5 rounded-full hover:bg-primary/10 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              {wishlistCount > 0 && <span className="absolute -top-0.5 -right-0.5 bg-accent-neon text-dark-900 text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-dark-900">{wishlistCount}</span>}
            </Link>
            <Link to="/cart" className="relative p-2.5 rounded-full hover:bg-primary/10 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /></svg>
            </Link>
            <button onClick={() => setIsDark(!isDark)} className="hidden sm:block p-2 rounded-lg hover:bg-white/5 transition-colors text-xl">{isDark ? '☀️' : '🌙'}</button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2.5 rounded-xl bg-primary text-dark-900 shadow-lg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">{isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}</svg></button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
