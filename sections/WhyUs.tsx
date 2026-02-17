
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

const WhyUs: React.FC = () => {
  const { lang } = useLanguage();

  const reasons = [
    {
      icon: '🔥',
      titleAr: 'خامة فاجرة',
      titleEn: 'Hype Quality',
      descAr: 'قطن مصري 100% تقيل (Heavyweight)، بيعيش معاك العمر ومبيكشش.',
      descEn: 'Premium 100% Egyptian Heavyweight cotton. Built for the hustle, won\'t shrink.'
    },
    {
      icon: '🧊',
      titleAr: 'فيت مظبوط',
      titleEn: 'Elite Fit',
      descAr: 'قصات Oversized و Boxy مدروسة بالمللي عشان تطلع الـ Fit زي ما الكتاب بيقول.',
      descEn: 'Meticulously engineered Oversized & Boxy cuts for that perfect streetwear silhouette.'
    },
    {
      icon: '⚡',
      titleAr: 'شحن طيارة',
      titleEn: 'Speed Demon',
      descAr: 'طلبك بيوصلك في لمح البصر. 48 ساعة والـ Fit الجديد يكون عندك.',
      descEn: 'Lightning fast shipping. Your fresh drip arrives within 48 hours in most cities.'
    },
    {
      icon: '💎',
      titleAr: 'دروبات ليميتد',
      titleEn: 'Exclusive Drops',
      descAr: 'مش بنكرر الموديلات كتير. اللي بيلحق هو اللي بيميز ستايله.',
      descEn: 'Limited runs only. We don\'t mass produce, so your style stays unique to you.'
    }
  ];

  return (
    <section id="why-us" className="py-32 px-4 relative overflow-hidden bg-dark-950 scroll-mt-20">
      {/* Background Cyberpunk Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,242,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-neon/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
          <div className="text-center md:text-start space-y-4">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-2">
              {lang === 'ar' ? 'ليه ثريد؟' : 'THE THREAD VIBE'}
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter italic">
              {lang === 'ar' ? 'إحنا غير. ⚡' : 'WE ARE DIFFERENT. ⚡'}
            </h2>
            <div className="w-32 h-3 bg-primary rounded-full hidden md:block" />
          </div>
          
          <p className="text-gray-400 max-w-md text-center md:text-end text-xl font-bold italic leading-tight">
            {lang === 'ar' 
              ? 'مش بنبيع هدوم، إحنا بنعمل هايب. تفاصيلنا هي اللي بتخليك مميز في وسط أي شلة.' 
              : 'We don\'t just sell clothes; we build hype. Our details are what make you stand out in any crowd.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="group p-10 rounded-[3rem] glass border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-[2rem] bg-dark-900 border border-white/10 flex items-center justify-center text-5xl mb-8 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary transition-all duration-500 shadow-2xl">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 italic group-hover:text-primary transition-colors tracking-tighter uppercase">
                  {lang === 'ar' ? reason.titleAr : reason.titleEn}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm font-bold group-hover:text-gray-200 transition-colors">
                  {lang === 'ar' ? reason.descAr : reason.descEn}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary/20 rounded-tl-[2rem] translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Community Proof */}
        <div className="mt-24 relative p-1 bg-gradient-to-r from-primary via-accent-neon to-primary rounded-[4rem] overflow-hidden group">
           <div className="absolute inset-0 animate-pulse bg-white/20 blur-xl group-hover:blur-2xl transition-all" />
           <div className="relative bg-dark-950 p-12 sm:p-20 rounded-[3.8rem] text-center space-y-10">
              <h3 className="text-4xl sm:text-6xl font-black italic text-white uppercase tracking-tighter leading-none">
                 {lang === 'ar' ? 'انضم لجيش ثريد ⚔️' : 'JOIN THE THREAD ARMY ⚔️'}
              </h3>
              <p className="text-gray-400 max-w-4xl mx-auto text-lg sm:text-xl font-bold italic leading-relaxed">
                 {lang === 'ar' 
                   ? 'أكثر من 50 ألف وحش في مصر والسعودية ستايلهم بقا في حتة تانية معانا. الهايب مبيستناش حد، دروب جديد كل شهر بيخلص في ساعات.'
                   : 'Over 50,000 beasts in EG & KSA have leveled up their style with us. The hype waits for no one; new drops every month, sold out in hours.'}
              </p>
              
              <div className="flex flex-wrap justify-center gap-12 sm:gap-20">
                 <div className="flex flex-col items-center group/stat">
                    <span className="text-5xl sm:text-7xl font-black text-white italic group-hover/stat:text-primary transition-colors">50K+</span>
                    <span className="text-[12px] text-gray-500 uppercase font-black tracking-[0.3em] mt-2">{lang === 'ar' ? 'وحش ثريد' : 'THREAD BEASTS'}</span>
                 </div>
                 <div className="hidden sm:block w-px h-20 bg-white/10" />
                 <div className="flex flex-col items-center group/stat">
                    <span className="text-5xl sm:text-7xl font-black text-white italic group-hover/stat:text-accent-neon transition-colors">100%</span>
                    <span className="text-[12px] text-gray-500 uppercase font-black tracking-[0.3em] mt-2">{lang === 'ar' ? 'قطن مصري' : 'EGY COTTON'}</span>
                 </div>
                 <div className="hidden sm:block w-px h-20 bg-white/10" />
                 <div className="flex flex-col items-center group/stat">
                    <span className="text-5xl sm:text-7xl font-black text-white italic group-hover/stat:text-primary transition-colors">24/7</span>
                    <span className="text-[12px] text-gray-500 uppercase font-black tracking-[0.3em] mt-2">{lang === 'ar' ? 'سبورت فاجر' : 'ELITE SUPPORT'}</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
