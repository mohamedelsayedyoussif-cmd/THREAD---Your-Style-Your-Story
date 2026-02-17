
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

const TrustBar: React.FC = () => {
  const { lang } = useLanguage();

  const features = [
    { 
      icon: '🇪🇬', 
      titleAr: 'صنع في مصر', 
      titleEn: 'Made in Egypt', 
      descAr: 'بأيدي أمهر المصنعين المصريين', 
      descEn: 'By skilled Egyptian craftsmen' 
    },
    { 
      icon: '🚚', 
      titleAr: 'توصيل سريع', 
      titleEn: 'Fast Delivery', 
      descAr: 'خلال 2-3 أيام عمل', 
      descEn: 'Within 2-3 business days' 
    },
    { 
      icon: '💳', 
      titleAr: 'دفع آمن', 
      titleEn: 'Secure Payment', 
      descAr: 'COD وتقسيط متعدد', 
      descEn: 'COD & Multi-Installments' 
    },
    { 
      icon: '⭐', 
      titleAr: 'ضمان الجودة', 
      titleEn: 'Quality Guarantee', 
      descAr: 'خامات قطنية 100%', 
      descEn: '100% Cotton Materials' 
    },
  ];

  return (
    <div className="bg-primary/5 border-y border-primary/10 py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2 md:gap-3 group">
            <div className={`text-3xl md:text-4xl group-hover:scale-125 transition-transform duration-300 ${f.icon === '🇪🇬' ? 'drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]' : ''}`}>
              {f.icon}
            </div>
            <div>
              <h4 className="font-bold text-sm md:text-lg text-white">
                {lang === 'ar' ? f.titleAr : f.titleEn}
              </h4>
              <p className="text-[10px] md:text-sm text-gray-400">
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
