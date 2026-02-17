
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import { useCart } from '../context/CartContext';

const MobileBottomNav: React.FC = () => {
  const { lang } = useLanguage();
  const { totalItems } = useCart();
  const location = useLocation();

  const navItems = [
    { id: 'home', path: '/', ar: 'الرئيسية', en: 'Home', icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )},
    { id: 'shop', path: '/collections', ar: 'تسوق', en: 'Shop', icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    )},
    { id: 'cart', path: '/cart', ar: 'السلة', en: 'Bag', icon: (active: boolean) => (
      <div className="relative">
        <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" />
        </svg>
        {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-primary text-black text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full animate-bounce">{totalItems}</span>}
      </div>
    )},
    { id: 'wishlist', path: '/wishlist', ar: 'المفضلة', en: 'Wishlist', icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )}
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[150] bg-dark-950/80 backdrop-blur-2xl border-t border-white/10 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.id} 
              to={item.path} 
              className={`flex flex-col items-center gap-1 transition-all ${isActive ? 'text-primary' : 'text-gray-500'}`}
            >
              {item.icon(isActive)}
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                {lang === 'ar' ? item.ar : item.en}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
