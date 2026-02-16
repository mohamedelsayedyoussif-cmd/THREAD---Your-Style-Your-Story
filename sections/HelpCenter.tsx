
import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';

const HelpCenter: React.FC = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'shipping' | 'returns' | 'tracking'>('shipping');

  return (
    <section id="help" className="py-24 px-4 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            {lang === 'ar' ? 'مركز المساعدة' : 'Help Center'}
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        {/* Tabs UI */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'shipping', labelAr: 'الشحن والتوصيل', labelEn: 'Shipping' },
            { id: 'returns', labelAr: 'الإرجاع والاستبدال', labelEn: 'Returns' },
            { id: 'tracking', labelAr: 'تتبع طلبك', labelEn: 'Track Order' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 border-2 ${
                activeTab === tab.id 
                ? 'bg-primary text-dark-900 border-primary shadow-lg shadow-primary/20' 
                : 'glass text-gray-400 border-white/5 hover:border-primary/50'
              }`}
            >
              {lang === 'ar' ? tab.labelAr : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="glass p-10 rounded-[3rem] border-white/10 shadow-2xl animate-fade-in min-h-[400px]">
          {activeTab === 'shipping' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-white flex items-center gap-4">
                🚚 {lang === 'ar' ? 'معلومات الشحن' : 'Shipping Information'}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-white/5 space-y-3">
                  <h4 className="font-bold text-primary">{lang === 'ar' ? 'القاهرة والجيزة' : 'Cairo & Giza'}</h4>
                  <p className="text-gray-400">
                    {lang === 'ar' ? 'يستغرق التوصيل من 2 إلى 3 أيام عمل.' : 'Delivery takes 2 to 3 business days.'}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 space-y-3">
                  <h4 className="font-bold text-primary">{lang === 'ar' ? 'باقي المحافظات' : 'Other Regions'}</h4>
                  <p className="text-gray-400">
                    {lang === 'ar' ? 'يستغرق التوصيل من 4 إلى 5 أيام عمل.' : 'Delivery takes 4 to 5 business days.'}
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-2xl border-2 border-accent-neon/20 bg-accent-neon/5">
                <p className="text-accent-neon font-bold text-center">
                  ✨ {lang === 'ar' ? 'شحن مجاني لجميع الطلبات فوق 500 جنيه مصري!' : 'Free shipping for all orders above 500 EGP!'}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'returns' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-white flex items-center gap-4">
                🔄 {lang === 'ar' ? 'الاسترجاع والاستبدال' : 'Returns & Exchanges'}
              </h3>
              <ul className="space-y-4 text-gray-400 list-disc list-inside">
                <li>{lang === 'ar' ? 'فترة الاسترجاع 14 يوماً من تاريخ الاستلام.' : 'Return period is 14 days from delivery.'}</li>
                <li>{lang === 'ar' ? 'يجب أن يكون المنتج في حالته الأصلية وبغلافه.' : 'Products must be in original condition and packaging.'}</li>
                <li>{lang === 'ar' ? 'الاستبدال مجاني في حالة وجود عيب صناعة أو مقاس خاطئ.' : 'Free exchange in case of manufacturing defect or wrong size.'}</li>
                <li>{lang === 'ar' ? 'يتم استرداد المبلغ عبر نفس طريقة الدفع المستخدمة.' : 'Refunds are processed via the same payment method used.'}</li>
              </ul>
            </div>
          )}

          {activeTab === 'tracking' && (
            <div className="space-y-8 text-center max-w-xl mx-auto">
              <h3 className="text-3xl font-black text-white">
                📦 {lang === 'ar' ? 'تتبع طلبك الآن' : 'Track Your Order Now'}
              </h3>
              <p className="text-gray-400">
                {lang === 'ar' ? 'أدخل رقم الطلب المرسل إليك في الرسالة النصية' : 'Enter the order number sent to you in the SMS'}
              </p>
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="#12345" 
                  className="flex-1 bg-white/5 border-2 border-primary/20 rounded-2xl px-6 py-4 focus:border-primary outline-none font-black text-center"
                />
                <button className="bg-primary text-dark-900 px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform uppercase">
                  {lang === 'ar' ? 'تتبع' : 'Track'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
