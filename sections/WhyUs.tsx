
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

const WhyUs: React.FC = () => {
  const { lang, region } = useLanguage();

  const features = [
    {
      titleAr: 'جودة تقيلة (Heavyweight)',
      titleEn: 'Heavyweight Quality',
      descAr: 'بنستخدم قطن مصري 100% معالج.. خامة تعيش وتتحمل الغسيل.',
      descEn: 'Authentic 100% Egyptian Cotton treated for durability.',
      icon: '🧵',
      bg: 'bg-primary/5'
    },
    {
      titleAr: 'قصّة مضبوطة (Perfect Fit)',
      titleEn: 'Perfect Fit',
      descAr: 'كل قطعة مدروسة بالمللي عشان تديك الـ Look الـ Oversized الصح.',
      descEn: 'Masterfully tailored for that signature oversized vibe.',
      icon: '📏',
      bg: 'bg-accent-neon/5'
    },
    {
      titleAr: 'شحن صاروخ 🚀',
      titleEn: 'Fast Shipping',
      descAr: region === 'EG' 
        ? 'بيوصلك خلال 48 ساعة في كل المحافظات 🇪🇬.' 
        : 'توصيل سريع لكل مناطق المملكة 🇸🇦 في 3-5 أيام.',
      descEn: 'Priority shipping to your doorstep with tracking.',
      icon: '⚡',
      bg: 'bg-white/5'
    }
  ];

  return (
    <section className="py-24 px-4 bg-dark-950 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.01] pointer-events-none select-none">
        <div className="text-[15rem] font-black italic uppercase leading-none tracking-tighter">THREAD</div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
           <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] italic block">THE STANDARD</span>
           <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-glow text-white leading-none">
             {lang === 'ar' ? 'ليه تختار ثريد؟' : 'WHY THREAD?'}
           </h2>
           <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className={`group relative p-10 rounded-[2.5rem] glass border-white/5 hover:border-primary/40 transition-all duration-500 text-center space-y-8 ${f.bg}`}>
              <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                {f.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-heading text-white italic uppercase tracking-tighter">
                  {lang === 'ar' ? f.titleAr : f.titleEn}
                </h3>
                <p className="text-gray-400 font-bold italic leading-relaxed text-sm">
                  {lang === 'ar' ? f.descAr : f.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
