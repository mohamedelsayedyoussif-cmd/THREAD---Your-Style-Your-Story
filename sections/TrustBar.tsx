
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

const TrustBar: React.FC = () => {
  const { lang, region } = useLanguage();

  const features = [
    { 
      icon: '🧶', 
      titleAr: 'قطن 100% ثقيل', 
      titleEn: 'Heavy Cotton', 
      descAr: 'خامة تدوم طويلاً', 
      descEn: 'Built to last' 
    },
    { 
      icon: '📦', 
      titleAr: 'شحن ألترا سريعة', 
      titleEn: 'Hyper Fast Delivery', 
      descAr: region === 'EG' ? '48 ساعة داخل مصر' : '3 أيام للمملكة', 
      descEn: region === 'EG' ? '48h in Egypt' : '3d in KSA' 
    },
    { 
      icon: '🛡️', 
      titleAr: 'دفع عند الاستلام', 
      titleEn: 'COD Safe', 
      descAr: 'ادفع بأمان عند الاستلام', 
      descEn: 'Pay on delivery' 
    },
    { 
      icon: '🔁', 
      titleAr: 'استبدال سلس', 
      titleEn: 'Seamless Exchange', 
      descAr: 'المقاس مش مضبوط؟ هنبدله', 
      descEn: 'Free size swaps' 
    },
  ];

  return (
    <div className="bg-dark-950 py-12 md:py-20 px-4 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-5 group">
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 border border-white/5">
              {f.icon}
            </div>
            <div className="space-y-1">
              <h4 className="font-black text-sm md:text-lg text-white uppercase italic tracking-tighter">
                {lang === 'ar' ? f.titleAr : f.titleEn}
              </h4>
              <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] opacity-60">
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
