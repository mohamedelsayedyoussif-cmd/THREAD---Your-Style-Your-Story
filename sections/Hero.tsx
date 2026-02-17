import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageProvider';
import { SITE_IMAGES } from '../lib/productImages';

const Hero: React.FC = () => {
  const { lang, region } = useLanguage();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-950 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${SITE_IMAGES.hero}')`
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-neon/10 rounded-full blur-[150px] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
        <div className="space-y-2 mb-8">
          <span className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-[0.5em] italic skew-x-[-12deg]">
            {lang === 'ar' ? 'وصول حصري' : 'EXCLUSIVE DROP'}
          </span>
        </div>

        <h1 className="flex flex-col items-center">
          <span className="text-7xl md:text-[12rem] font-heading leading-none text-outline uppercase select-none">
            THREAD
          </span>
          <span className="text-6xl md:text-[9rem] font-heading leading-none text-white -mt-6 md:-mt-12 uppercase italic text-glow-orange relative">
            STREETWEAR
            <span className="absolute -top-4 -right-8 text-primary text-2xl animate-bounce">✦</span>
          </span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-2xl text-gray-200 font-bold italic drop-shadow-lg">
          {lang === 'ar' 
            ? 'البراند اللي بيكسر القواعد.. ستايلك بيتكلم عنك.' 
            : 'The brand that breaks the rules. Your style speaks for you.'}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/collections" 
            className="btn-brutal group relative px-16 py-6 bg-primary text-white font-black text-2xl uppercase italic font-heading tracking-tighter"
          >
            <span className="relative z-10">{lang === 'ar' ? 'تسوق الآن 🔥' : 'SHOP NOW 🔥'}</span>
          </Link>
          <button 
            onClick={() => document.getElementById('best-sellers')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-16 py-6 border-2 border-white text-white font-black text-2xl uppercase italic font-heading tracking-tighter hover:bg-white hover:text-black transition-all backdrop-blur-sm"
          >
            {lang === 'ar' ? 'الموديلات' : 'CATALOG'}
          </button>
        </div>
      </div>

      {/* Vertical Side Text */}
      <div className="hidden xl:block absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-center z-10">
        <span className="text-[10px] font-black uppercase tracking-[1em] text-white/40 whitespace-nowrap">
          EGYPTIAN COTTON • PREMIUM QUALITY • AUTHENTIC VIBE
        </span>
      </div>
    </section>
  );
};

export default Hero;