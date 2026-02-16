
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import { SITE_IMAGES } from '../lib/productImages';

const Hero: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with 3D feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary/20" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-neon/10 rounded-full blur-[120px] animate-pulse-slow" />
        <img 
          src={SITE_IMAGES.hero} 
          alt={lang === 'ar' ? 'ستايل ملابس الشارع' : 'Streetwear Style Model'} 
          loading="eager"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-110"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary font-bold text-sm tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {lang === 'ar' ? 'مجموعة الشتاء الجديدة وصلت' : 'Winter Collection Just Landed'}
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
            {lang === 'ar' ? (
              <>
                <span className="block text-white">ستايلك،</span>
                <span className="block text-primary italic drop-shadow-[0_0_20px_rgba(0,242,255,0.3)]">قصتك.</span>
              </>
            ) : (
              <>
                <span className="block text-white">YOUR STYLE,</span>
                <span className="block text-primary italic drop-shadow-[0_0_20px_rgba(0,242,255,0.3)]">YOUR STORY.</span>
              </>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            {lang === 'ar' 
              ? 'اكتشف أرقى تصميمات ملابس الشارع المصممة لتعكس شخصيتك. جودة استثنائية، أسعار في متناول الجميع.'
              : 'Discover the finest streetwear designs crafted to reflect your personality. Exceptional quality, affordable prices.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#men" 
              className="px-10 py-5 bg-primary text-dark-900 font-black rounded-2xl shadow-[0_10px_40px_rgba(0,242,255,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-lg group"
            >
              {lang === 'ar' ? 'تسوق الآن' : 'SHOP NOW'}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#size-guide" 
              className="px-10 py-5 glass border-primary/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg"
            >
              {lang === 'ar' ? 'دليل المقاسات' : 'SIZE GUIDE'}
            </a>
          </div>

          {/* Social Proof Mini */}
          <div className="pt-8 flex flex-col sm:flex-row items-center gap-6 opacity-80 justify-center lg:justify-start">
             <div className="flex -space-x-3 rtl:space-x-reverse">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-dark-900" src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100&crop=faces`} alt="user" />
                ))}
             </div>
             <div className="text-sm text-gray-400">
                <span className="text-white font-bold text-lg">+50,000</span> {lang === 'ar' ? 'عميل راضي في مصر والخليج' : 'Happy customers in MENA'}
             </div>
          </div>
        </div>

        {/* Floating Image Display */}
        <div className="hidden lg:block relative">
           <div className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group animate-float">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="New Arrival Fashion" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                <span className="text-primary font-bold">#THREAD_STREETWEAR</span>
              </div>
           </div>
           {/* Abstract floating elements */}
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-neon rounded-full mix-blend-difference blur-3xl opacity-30 animate-pulse" />
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
