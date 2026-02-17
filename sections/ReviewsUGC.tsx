
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

const ReviewsUGC: React.FC = () => {
  const { lang } = useLanguage();
  const reviews = [
    { nameAr: 'يوسف م.', nameEn: 'Youssef M.', textAr: 'الخامة بجد فاجرة والـ Fit مضبوط بالمللي. أحلى براند مصري!', textEn: 'Quality is unmatched and the fit is perfect. Best Egyptian brand!', rating: 5, date: '2 days ago' },
    { nameAr: 'ليلى س.', nameEn: 'Layla S.', textAr: 'التوصيل كان سريع، والهودي مريح بشكل مش طبيعي.. خامته تقيلة.', textEn: 'Fast delivery, and the hoodie is incredibly comfy. Very heavyweight!', rating: 5, date: '1 week ago' },
    { nameAr: 'كريم ع.', nameEn: 'Karim A.', textAr: 'اشتريت الباكيدج الـ Essential وبجد جودتها تشرّف.', textEn: 'Bought the essential pack, premium quality. Iconic basics.', rating: 5, date: '3 days ago' }
  ];

  return (
    <section id="reviews" className="py-24 px-4 bg-dark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-3">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px] italic">THE TRIBE</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none font-heading">
              {lang === 'ar' ? 'آراء عيلة ثريد' : 'FAM REVIEWS'}
            </h2>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="flex gap-1 text-primary text-xl">
              {Array(5).fill(0).map((_, i) => <span key={i}>★</span>)}
            </div>
            <span className="text-[9px] font-black uppercase text-gray-500 tracking-widest">{lang === 'ar' ? '5000+ تقييم 5 نجوم' : '5,000+ 5-STAR REVIEWS'}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="group glass p-8 rounded-[2rem] border-white/5 space-y-6 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-0.5 text-primary text-[10px]">
                    {Array(5).fill(0).map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <span className="text-[8px] font-black uppercase text-gray-600 tracking-widest">{rev.date}</span>
                </div>
                <p className="text-gray-300 font-bold italic leading-relaxed text-lg">
                  "{lang === 'ar' ? rev.textAr : rev.textEn}"
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-black text-primary italic text-xs">
                  {rev.nameEn.charAt(0)}
                </div>
                <h4 className="font-black text-white italic uppercase tracking-tighter text-base">
                  — {lang === 'ar' ? rev.nameAr : rev.nameEn}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsUGC;
