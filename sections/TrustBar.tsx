
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

const TrustBar: React.FC = () => {
  const { lang, region } = useLanguage();

  const features = [
    { 
      icon: '🧵', 
      titleAr: 'قطن 100% ثقيل', 
      titleEn: '100% Heavy Cotton', 
      descAr: 'خامة تعيش وتستحمل', 
      descEn: 'Built to last' 
    },
    { 
      icon: '🚚', 
      titleAr: lang === 'ar' ? 'توصيل سريع' : 'Fast Shipping', 
      titleEn: 'Fast Shipping', 
      descAr: region === 'EG' ? 'خلال 48 ساعة بمصر' : 'خلال 3-5 أيام بالمملكة', 
      descEn: region === 'EG' ? '48h in Egypt' : '3-5 days in KSA' 
    },
    { 
      icon: '💳', 
      titleAr: 'دفع عند الاستلام', 
      titleEn: 'COD Available', 
      descAr: 'ادفع لما تستلم وتتأكد', 
      descEn: 'Pay on delivery' 
    },
    { 
      icon: '🔄', 
      titleAr: 'استبدال مجاني', 
      titleEn: 'Free Exchange', 
      descAr: 'لو المقاس مش مضبوط', 
      descEn: 'Free size swaps' 
    },
  ];

  return (
    <div className="bg-primary/5 border-y border-white/5 py-10 md:py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4 group">
            <div className="text-4xl md:text-5xl group-hover:scale-125 transition-all duration-500 group-hover:rotate-12">
              {f.icon}
            </div>
            <div className="space-y-1">
              <h4 className="font-black text-xs md:text-xl text-dark-950 dark:text-white uppercase italic tracking-tighter">
                {lang === 'ar' ? f.titleAr : f.titleEn}
              </h4>
              <p className="text-[9px] md:text-xs text-gray-500 font-bold uppercase tracking-widest opacity-60">
                {lang === 'ar' ? f.descAr : f.descEn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
