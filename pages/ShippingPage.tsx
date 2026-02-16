
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';
import { useLanguage } from '../components/LanguageProvider';

const ShippingPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <InfoPageLayout 
      titleAr="الشحن والتوصيل" 
      titleEn="Shipping" 
      subtitleAr="نصلك أينما كنت بأعلى سرعة وأقل تكلفة." 
      subtitleEn="We reach you wherever you are with the highest speed and lowest cost."
      icon="🚚"
    >
      <div className="space-y-12">
        {/* Delivery Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-[2rem] border-primary/20 space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl transition-transform group-hover:scale-110">🏙️</div>
            <h3 className="text-2xl font-black italic text-primary">{lang === 'ar' ? 'القاهرة والجيزة' : 'Cairo & Giza'}</h3>
            <p className="text-gray-300 font-bold text-lg">2 – 3 {lang === 'ar' ? 'أيام عمل' : 'Business Days'}</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {lang === 'ar' ? 'خدمة توصيل سريعة ومميزة داخل العاصمة.' : 'Fast and premium delivery service within the capital.'}
            </p>
          </div>
          <div className="glass p-8 rounded-[2rem] border-white/10 space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl transition-transform group-hover:scale-110">🌍</div>
            <h3 className="text-2xl font-black italic text-white">{lang === 'ar' ? 'باقي المحافظات' : 'Other Regions'}</h3>
            <p className="text-gray-300 font-bold text-lg">4 – 5 {lang === 'ar' ? 'أيام عمل' : 'Business Days'}</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {lang === 'ar' ? 'نغطي جميع محافظات مصر بأقصى سرعة ممكنة.' : 'We cover all of Egypt at the maximum speed possible.'}
            </p>
          </div>
        </div>

        {/* Fees Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-black italic">{lang === 'ar' ? 'رسوم الشحن' : 'Shipping Fees'}</h2>
          <div className="grid gap-4">
            {[
              { labelAr: 'الطلبات فوق 500 جنيه', labelEn: 'Orders over 500 EGP', valAr: 'مجاناً', valEn: 'FREE', accent: true },
              { labelAr: 'الطلبات أقل من 500 جنيه', labelEn: 'Orders under 500 EGP', valAr: '50 ج.م', valEn: '50 EGP' },
              { labelAr: 'شحن سريع (القاهرة فقط)', labelEn: 'Express Shipping (Cairo Only)', valAr: '100 ج.م', valEn: '100 EGP' }
            ].map((fee, idx) => (
              <div key={idx} className={`flex justify-between items-center p-6 rounded-2xl glass ${fee.accent ? 'border-accent-neon/30 bg-accent-neon/5' : 'border-white/5'}`}>
                <span className={`font-bold ${fee.accent ? 'text-accent-neon' : 'text-gray-300'}`}>
                  {lang === 'ar' ? fee.labelAr : fee.labelEn}
                </span>
                <span className={`text-xl font-black ${fee.accent ? 'text-accent-neon' : 'text-primary'}`}>
                  {lang === 'ar' ? fee.valAr : fee.valEn}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notes */}
        <section className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-6">
           <h3 className="text-xl font-bold flex items-center gap-3">
             📝 {lang === 'ar' ? 'ملاحظات هامة' : 'Important Notes'}
           </h3>
           <ul className="space-y-4 text-gray-400">
             <li className="flex items-start gap-4">
               <span className="text-primary mt-1">•</span>
               {lang === 'ar' ? 'يتم محاولة توصيل الشحنة مرتين فقط قبل إرجاعها للمخزن.' : 'Shipping will be attempted twice before returning to stock.'}
             </li>
             <li className="flex items-start gap-4">
               <span className="text-primary mt-1">•</span>
               {lang === 'ar' ? 'جميع المنتجات تصل في تغليف THREAD الفاخر لضمان الحماية.' : 'All items arrive in premium THREAD packaging for protection.'}
             </li>
           </ul>
        </section>
      </div>
    </InfoPageLayout>
  );
};

export default ShippingPage;
