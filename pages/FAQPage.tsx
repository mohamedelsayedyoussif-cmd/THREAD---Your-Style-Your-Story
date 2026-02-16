
import React, { useState, useMemo } from 'react';
import InfoPageLayout from '../components/InfoPageLayout';
import { useLanguage } from '../components/LanguageProvider';

const FAQPage: React.FC = () => {
  const { lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { qAr: 'كيف يمكنني الطلب؟', qEn: 'How to order?', aAr: 'يمكنك الطلب بسهولة عبر الموقع، اختر منتجاتك، أضفها للسلة، وأكمل البيانات.', aEn: 'You can easily order through the website: select products, add to cart, and fill in your details.' },
    { qAr: 'ما هي طرق الدفع المتاحة؟', qEn: 'What are the payment methods?', aAr: 'نقبل الدفع عند الاستلام، الفيزا، ميزة، فوري، وتقسيط (ValU/Tamara/Sahla).', aEn: 'We accept Cash on Delivery, Visa/Mastercard, Fawry, and installments via ValU, Tamara, and Sahla.' },
    { qAr: 'كم يستغرق التوصيل؟', qEn: 'Delivery time?', aAr: 'القاهرة والجيزة (2-3 أيام)، باقي المحافظات (4-5 أيام).', aEn: 'Cairo & Giza (2-3 days), other governorates (4-5 days).' },
    { qAr: 'ما هي رسوم الشحن؟', qEn: 'Shipping fees?', aAr: 'رسوم الشحن ثابتة 50 ج.م، والشحن مجاني للطلبات فوق 500 جنيه.', aEn: 'Fixed shipping fees apply (50 EGP); free shipping on orders above 500 EGP.' },
    { qAr: 'كيف أختار مقاسي؟', qEn: 'How to choose my size?', aAr: 'يمكنك مراجعة جدول المقاسات في صفحة دليل المقاسات.', aEn: 'Check our detailed size guide on the dedicated Size Guide page.' },
    { qAr: 'ماذا لو كان المقاس غير صحيح؟', qEn: 'What if the size is wrong?', aAr: 'يمكنك الاستبدال مجاناً إذا كان المقاس غير مطابق لطلبك خلال 14 يوماً.', aEn: 'Free exchanges if the size is wrong within 14 days of purchase.' },
    { qAr: 'ما هي سياسة الاسترجاع؟', qEn: 'Return process?', aAr: 'الاسترجاع متاح خلال 14 يوماً من الاستلام بشرط وجود المنتج في حالته الأصلية.', aEn: 'Returns are accepted within 14 days of delivery if the item is in its original condition.' },
    { qAr: 'هل الألوان دقيقة؟', qEn: 'Color accuracy?', aAr: 'نحرص على تصوير المنتجات بأفضل جودة، قد تختلف الألوان قليلاً حسب إعدادات الشاشة.', aEn: 'We photograph items in high quality; slight color variations may occur due to screen settings.' },
    { qAr: 'هل الخامات أصلية؟', qEn: 'Authenticity & Quality?', aAr: 'نعم، نستخدم أجود أنواع القطن المصري المعالج لضمان الراحة والاستدامة.', aEn: 'Yes, we use the finest treated Egyptian cotton for comfort and durability.' },
    { qAr: 'هل يوجد برنامج ولاء؟', qEn: 'Loyalty points?', aAr: 'نعم، تكسب نقاط مع كل طلب يمكنك تحويلها لخصومات مستقبلية.', aEn: 'Yes, earn points with every order to redeem for future discounts.' },
    { qAr: 'كيف أتتبع طلبي؟', qEn: 'How to track my order?', aAr: 'ستصلك رسالة نصية برابط التتبع بمجرد خروج الشحنة من مخازنا.', aEn: 'You will receive an SMS with a tracking link once your order is dispatched.' },
    { qAr: 'ما هي مواعيد خدمة العملاء؟', qEn: 'Customer service hours?', aAr: 'واتساب 24/7، الاتصال الهاتفي (10ص - 10م).', aEn: 'WhatsApp 24/7, Calls (10am-10pm).' }
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter(f => 
      (lang === 'ar' ? f.qAr : f.qEn).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, lang]);

  return (
    <InfoPageLayout 
      titleAr="الأسئلة الشائعة" 
      titleEn="F.A.Q" 
      subtitleAr="كل ما تحتاج معرفته عن منتجاتنا وخدماتنا في مكان واحد." 
      subtitleEn="Everything you need to know about our products and services in one place."
      icon="❓"
    >
      <div className="space-y-8">
        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder={lang === 'ar' ? 'ابحث عن سؤالك هنا...' : 'Search for your question...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-12 py-5 focus:border-primary focus:bg-white/10 outline-none transition-all font-bold text-lg"
          />
          <span className="absolute start-4 top-1/2 -translate-y-1/2 text-xl opacity-50">🔍</span>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => (
              <div key={i} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === i ? 'border-primary bg-primary/5' : 'border-white/5 glass'}`}>
                <button 
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-start"
                >
                  <span className="text-lg font-bold">
                    {lang === 'ar' ? faq.qAr : faq.qEn}
                  </span>
                  <span className={`text-primary transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {activeIndex === i && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {lang === 'ar' ? faq.aAr : faq.aEn}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12 glass rounded-3xl opacity-50 italic">
              {lang === 'ar' ? 'لم يتم العثور على نتائج للبحث' : 'No results found for your search'}
            </div>
          )}
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default FAQPage;
