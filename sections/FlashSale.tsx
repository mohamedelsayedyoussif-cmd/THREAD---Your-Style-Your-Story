
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../components/LanguageProvider';

const FlashSale: React.FC = () => {
  const { lang } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ hrs: 2, min: 45, sec: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hrs, min, sec } = prev;
        if (sec > 0) sec--;
        else {
          sec = 59;
          if (min > 0) min--;
          else {
            min = 59;
            if (hrs > 0) hrs--;
          }
        }
        return { hrs, min, sec };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <section id="flash-sale" className="py-12 px-4 bg-primary text-dark-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center md:text-start">
          <div className="inline-block bg-dark-900 text-primary px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest">
            Flash Sale ⚡
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none font-heading">
            {lang === 'ar' ? 'أقوى عروض الموسم' : 'BEST DEALS'}
          </h2>
          <p className="text-lg font-bold italic opacity-80">
            {lang === 'ar' ? 'خصومات لـ 40% لفترة محدودة' : 'Up to 40% OFF limited time'}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-3">
             {[
               { val: format(timeLeft.hrs), label: lang === 'ar' ? 'ساعة' : 'Hrs' },
               { val: format(timeLeft.min), label: lang === 'ar' ? 'دقيقة' : 'Min' },
               { val: format(timeLeft.sec), label: lang === 'ar' ? 'ثانية' : 'Sec' }
             ].map((t, i) => (
               <div key={i} className="bg-dark-900 text-white p-3 rounded-xl min-w-[60px] text-center shadow-lg">
                  <span className="block text-xl font-black font-price">{t.val}</span>
                  <span className="text-[8px] uppercase font-bold opacity-60">{t.label}</span>
               </div>
             ))}
          </div>
          <button className="bg-dark-900 text-white px-8 py-3.5 rounded-xl font-black text-base hover:scale-105 transition-all shadow-xl uppercase tracking-wider">
            {lang === 'ar' ? 'تسوق العرض 🔥' : 'GRAB DEALS 🔥'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
