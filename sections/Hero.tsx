
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageProvider';

const Hero: React.FC = () => {
  const { lang, region } = useLanguage();

  const marqueeText = lang === 'ar' 
    ? [
        "ثريد - ستريت وير بريميوم",
        "تراث أصلي",
        region === 'EG' ? "القاهرة العالمية 🇪🇬" : "الرياض الراقية 🇸🇦",
        "أجود أنواع الأقمشة",
        "تصميمات حصرية"
      ]
    : [
        "THREAD PREMIUM STREETWEAR",
        "AUTHENTIC HERITAGE",
        region === 'EG' ? "GLOBAL CAIRO 🇪🇬" : "ELITE RIYADH 🇸🇦",
        "PREMIUM TEXTILES",
        "EXCLUSIVE DROPS"
      ];

  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-12 overflow-hidden bg-white dark:bg-dark-950 transition-colors duration-500">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 opacity-10 dark:opacity-15 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover grayscale brightness-50"
            alt=""
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-[9px] font-black uppercase tracking-[0.3em] animate-slide-up shadow-lg border border-primary/10">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
            {lang === 'ar' 
              ? `إصدارات حصرية - ${region === 'EG' ? 'مصر 🇪🇬' : 'المملكة 🇸🇦'}` 
              : `LIMITED DROPS - ${region === 'EG' ? 'EGYPT 🇪🇬' : 'KSA 🇸🇦'}`}
          </div>

          {/* Headline - Scaled Down for Elegance */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading leading-[0.85] italic uppercase tracking-tighter animate-slide-up [animation-delay:0.2s] text-dark-950 dark:text-white">
            {lang === 'ar' ? (
              <div className="flex flex-col select-none">
                <span className="opacity-20">أناقة</span>
                <span className="text-primary text-glow -mt-2 md:-mt-4">
                  {region === 'EG' ? 'متمردة.' : 'فاخرة.'}
                </span>
              </div>
            ) : (
              <div className="flex flex-col select-none">
                <span className="opacity-20">ICONIC</span>
                <span className="text-primary text-glow -mt-2 md:-mt-4">LEGACY.</span>
              </div>
            )}
          </h1>

          {/* Subheadline - More Concise */}
          <p className="max-w-xl text-base md:text-xl text-gray-600 dark:text-gray-400 font-bold italic animate-slide-up [animation-delay:0.4s] px-4 leading-relaxed">
            {lang === 'ar' 
              ? 'البراند اللي بيحدد قواعد الستريت وير في المنطقة.' 
              : 'The Brand Redefining Streetwear Standards.'}
          </p>

          {/* CTAs - Refined Sizes */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up [animation-delay:0.6s] w-full sm:w-auto px-12">
            <Link 
              to="/collections" 
              className="group relative px-10 py-4 bg-primary text-white dark:text-black font-black rounded-xl text-base uppercase tracking-tight hover:scale-105 transition-all shadow-xl shadow-primary/20 text-center font-heading overflow-hidden"
            >
              <span className="relative z-10">{lang === 'ar' ? 'تسوق الآن 🔥' : 'SHOP NOW 🔥'}</span>
            </Link>
            <button 
              onClick={() => document.getElementById('size-guide')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 glass text-dark-950 dark:text-white font-black rounded-xl text-base uppercase tracking-tight hover:bg-black/5 dark:hover:bg-white/10 transition-all text-center border border-dark-950/10 dark:border-white/20 font-heading"
            >
              {lang === 'ar' ? 'المقاسات' : 'SIZING'}
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Footer - Slimmer */}
      <div className="absolute bottom-4 left-0 right-0 z-20 overflow-hidden py-4 border-y border-dark-950/5 dark:border-white/5 glass bg-white/30 dark:bg-dark-950/30 backdrop-blur-sm">
        <div className={`flex whitespace-nowrap ${lang === 'ar' ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="flex gap-10 items-center mx-6 text-[8px] font-black uppercase italic text-dark-950/30 dark:text-white/30 tracking-[0.2em]">
              {marqueeText.map((text, idx) => (
                <React.Fragment key={idx}>
                  <span>{text}</span>
                  <span className="text-primary text-lg">✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
