
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageProvider';

const Hero: React.FC = () => {
  const { lang, region } = useLanguage();

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-dark-950">
      {/* Background VFX */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-10 text-center lg:text-start">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border-primary/30 text-primary font-black text-xs tracking-[0.2em] uppercase animate-pulse">
            <span className="w-2 h-2 bg-primary rounded-full" />
            {lang === 'ar' ? 'أقوى دروب لعام 2025 وصل 🔥' : 'THE ULTIMATE 2025 DROP IS HERE 🔥'}
          </div>

          <h1 className="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-white uppercase italic">
            {lang === 'ar' ? (
              <>
                <span className="block">مش مجرد</span>
                <span className="text-primary text-glow block">هدوم. ⚡</span>
              </>
            ) : (
              <>
                <span className="block">NOT JUST</span>
                <span className="text-primary text-glow block">CLOTHES. ⚡</span>
              </>
            )}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 font-bold tracking-tight">
            {lang === 'ar' 
              ? 'براند مصري بيفهم في الستريت وير. خامات تقيلة، قصة مظبوطة، وسعر في المتناول.'
              : 'Egyptian streetwear at its peak. Heavy fabrics, perfect fits, and hype vibes only.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
            <Link 
              to="/collections" 
              className="px-12 py-6 bg-primary text-dark-950 font-black rounded-full shadow-[0_0_50px_rgba(0,242,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 text-xl group italic uppercase tracking-tighter"
            >
              {lang === 'ar' ? 'الحق التشكيلة' : 'GRAB THE DROP'}
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              to="/size-guide" 
              className="px-12 py-6 glass border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-xl uppercase tracking-tighter italic"
            >
              {lang === 'ar' ? 'دليل المقاسات' : 'SIZE GUIDE'}
            </Link>
          </div>

          {/* Rapid Stats */}
          <div className="flex justify-center lg:justify-start items-center gap-10 pt-10 border-t border-white/5">
             <div className="text-center lg:text-start">
                <div className="text-3xl font-black text-white italic">+50K</div>
                <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{lang === 'ar' ? 'وحش ثريد' : 'THREAD BEASTS'}</div>
             </div>
             <div className="w-px h-10 bg-white/10" />
             <div className="text-center lg:text-start">
                <div className="text-3xl font-black text-white italic">100%</div>
                <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{lang === 'ar' ? 'قطن مصري' : 'EGY COTTON'}</div>
             </div>
             <div className="w-px h-10 bg-white/10" />
             <div className="text-center lg:text-start flex items-center gap-2">
                <span className="text-3xl">🇪🇬</span>
                <span className="text-3xl">🇸🇦</span>
             </div>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="lg:col-span-5 relative hidden lg:block">
           <div className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-primary/20 shadow-[0_0_80px_rgba(0,242,255,0.1)] group animate-float-slow">
              <img 
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="New Arrival Fashion" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-6 rounded-3xl border-primary/30">
                  <span className="text-primary font-black text-xs uppercase tracking-[0.3em]">Featured Outfit</span>
                  <h4 className="text-2xl font-black text-white italic">THE URBAN GHOST HOODIE</h4>
                </div>
              </div>
           </div>
           {/* Cyberpunk Decor */}
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-neon/10 rounded-full blur-[100px]" />
        </div>
      </div>

      {/* Marquee Text Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-primary text-dark-950 py-4 overflow-hidden rotate-[-1deg] translate-y-2 z-20">
        <div className="marquee-container flex">
          <div className="marquee-content flex gap-12 text-2xl font-black uppercase italic items-center whitespace-nowrap">
            {Array(10).fill(0).map((_, i) => (
              <React.Fragment key={i}>
                <span>THREAD STREETWEAR 🇪🇬</span>
                <span className="text-dark-950/30">★</span>
                <span>LIMITED DROPS ONLY ⚡</span>
                <span className="text-dark-950/30">★</span>
                <span>SAUDI ARABIA SHIP 🇸🇦</span>
                <span className="text-dark-950/30">★</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
