
import React from 'react';
import { useLanguage } from './LanguageProvider';

const AnnouncementBar: React.FC = () => {
  const { lang, region } = useLanguage();

  const text = lang === 'ar' 
    ? `خصم 15% على أول طلب 🎉 | توصيل مجاني فوق ${region === 'EG' ? '500 ج.م' : '200 ر.س'} | استبدال مجاني للمقاس`
    : `15% OFF your first order 🎉 | Free shipping over ${region === 'EG' ? '500 EGP' : '200 SAR'} | Free Size Exchange`;

  return (
    <div className="fixed top-0 left-0 right-0 h-9 bg-primary text-dark-900 overflow-hidden flex items-center font-black text-[10px] uppercase tracking-widest z-[150] shadow-md">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array(10).fill(0).map((_, i) => (
          <span key={i} className="mx-8">{text}</span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
