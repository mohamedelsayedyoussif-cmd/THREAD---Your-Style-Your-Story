
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../components/LanguageProvider';

const FlashSale: React.FC = () => {
  const { lang } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ hrs: 12, min: 30, sec: 0 });

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
    <section id="flash-sale" className="py-24 bg-primary overflow-hidden relative skew-y-[-2deg]">
      <div className="skew-y-[2deg]">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="text-[30rem] font-black italic text-black whitespace-nowrap -translate-x-1/4 select-none">
            LIMITED EDITION • LIMITED EDITION
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center md:text-start">
            <h2 className="text-6xl md:text-9xl font-heading text-black italic tracking-tighter leading-[0.8]">
              {lang === 'ar' ? 'عرض الـ 24 ساعة ⚡' : '24H INSANE DROP ⚡'}
            </h2>
            <p className="text-black/80 text-xl font-bold italic uppercase tracking-widest">
              {lang === 'ar' ? 'خصومات تصل إلى 50% - لا تنم.' : 'Up to 50% off - Don\'t sleep.'}
            </p>
          </div>

          <div className="bg-black p-10 flex gap-6 items-center shadow-[20px_20px_0_0_rgba(0,0,0,0.2)]">
            {[
              { v: format(timeLeft.hrs), l: 'HR' },
              { v: format(timeLeft.min), l: 'MIN' },
              { v: format(timeLeft.sec), l: 'SEC' }
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-5xl md:text-7xl font-price font-black text-primary tabular-nums">{t.v}</span>
                <span className="text-[10px] font-black text-white/40 tracking-[0.2em]">{t.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;