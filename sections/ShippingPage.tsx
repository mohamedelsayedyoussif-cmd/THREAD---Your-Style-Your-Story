
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';
import { useLanguage } from '../components/LanguageProvider';

const ShippingPage: React.FC = () => {
  const { lang, region } = useLanguage();

  const isEG = region === 'EG';

  return (
    <InfoPageLayout 
      titleAr="الشحن والتوصيل" 
      titleEn="Shipping" 
      subtitleAr={isEG ? "نصلك في كل أنحاء مصر 🇪🇬 بأسرع وقت." : "توصيل سريع لجميع مناطق المملكة 🇸🇦."} 
      subtitleEn={isEG ? "Fast delivery across all of Egypt 🇪🇬." : "Fast delivery to all Saudi regions 🇸🇦."}
      icon="🚚"
    >
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-[2rem] border-primary/20 space-y-4">
            <h3 className="text-2xl font-black italic text-primary">
              {isEG ? (lang === 'ar' ? 'القاهرة والجيزة' : 'Cairo & Giza') : (lang === 'ar' ? 'الرياض وجدة' : 'Riyadh & Jeddah')}
            </h3>
            <p className="text-gray-300 font-bold text-lg">
              {isEG ? '2 – 3' : '3 – 5'} {lang === 'ar' ? 'أيام عمل' : 'Business Days'}
            </p>
          </div>
          <div className="glass p-8 rounded-[2rem] border-white/10 space-y-4">
            <h3 className="text-2xl font-black italic text-white">
              {isEG ? (lang === 'ar' ? 'باقي المحافظات' : 'Other Regions') : (lang === 'ar' ? 'باقي مدن المملكة' : 'Other KSA Cities')}
            </h3>
            <p className="text-gray-300 font-bold text-lg">
              {isEG ? '4 – 5' : '5 – 7'} {lang === 'ar' ? 'أيام عمل' : 'Business Days'}
            </p>
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="text-3xl font-black italic">{lang === 'ar' ? 'تكلفة الشحن' : 'Fees'}</h2>
          <div className="flex justify-between items-center p-6 rounded-2xl glass border-accent-neon/30 bg-accent-neon/5">
            <span className="font-bold text-accent-neon">
              {isEG ? (lang === 'ar' ? 'شحن مجاني فوق 500 ج.م' : 'Free over 500 EGP') : (lang === 'ar' ? 'شحن مجاني فوق 200 ر.س' : 'Free over 200 SAR')}
            </span>
            <span className="text-xl font-black text-accent-neon">FREE</span>
          </div>
        </section>
      </div>
    </InfoPageLayout>
  );
};

export default ShippingPage;
