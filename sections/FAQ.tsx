
import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';

const FAQ: React.FC = () => {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      qAr: 'كيف يمكنني الطلب؟',
      qEn: 'How to order?',
      aAr: 'يمكنك الطلب بسهولة عبر الموقع، اختر منتجاتك، أضفها للسلة، وأكمل البيانات.',
      aEn: 'You can easily order through the website: select products, add to cart, and fill in your details.'
    },
    {
      qAr: 'ما هي طرق الدفع المتاحة؟',
      qEn: 'What are the payment methods?',
      aAr: 'نقبل الدفع عند الاستلام، الفيزا، ميزة، فوري، وتقسيط (ValU/Tamara/Sahla).',
      aEn: 'We accept Cash on Delivery, Visa/Mastercard, Fawry, and installments via ValU, Tamara, and Sahla.'
    },
    {
      qAr: 'كم يستغرق التوصيل؟',
      qEn: 'Delivery time?',
      aAr: 'القاهرة والجيزة (2-3 أيام)، باقي المحافظات (4-5 أيام).',
      aEn: 'Cairo & Giza (2-3 days), other governorates (4-5 days).'
    },
    {
      qAr: 'ما هي رسوم الشحن؟',
      qEn: 'Shipping fees?',
      aAr: 'رسوم الشحن ثابتة، والشحن مجاني للطلبات فوق 500 جنيه.',
      aEn: 'Fixed shipping fees apply; free shipping on orders above 500 EGP.'
    },
    {
      qAr: 'كيف أختار مقاسي؟',
      qEn: 'How to choose my size?',
      aAr: 'يمكنك مراجعة جدول المقاسات أسفل كل منتج أو في صفحة دليل المقاسات.',
      aEn: 'Check our detailed size guide under each product or on the dedicated Size Guide page.'
    },
    {
      qAr: 'ماذا لو كان المقاس غير صحيح؟',
      qEn: 'What if the size is wrong?',
      aAr: 'يمكنك الاستبدال مجاناً إذا كان المقاس غير مطابق لطلبك خلال 14 يوماً.',
      aEn: 'Free exchanges if the size is wrong within 14 days of purchase.'
    },
    {
      qAr: 'ما هي سياسة الاسترجاع؟',
      qEn: 'Return process?',
      aAr: 'الاسترجاع متاح خلال 14 يوماً من الاستلام بشرط وجود المنتج في حالته الأصلية.',
      aEn: 'Returns are accepted within 14 days of delivery if the item is in its original condition.'
    },
    {
      qAr: 'هل الألوان دقيقة؟',
      qEn: 'Color accuracy?',
      aAr: 'نحرص على تصوير المنتجات بأفضل جودة، قد تختلف الألوان قليلاً حسب إعدادات الشاشة.',
      aEn: 'We photograph items in high quality; slight color variations may occur due to screen settings.'
    },
    {
      qAr: 'هل الخامات أصلية؟',
      qEn: 'Authenticity & Quality?',
      aAr: 'نعم، نستخدم أجود أنواع القطن المصري المعالج لضمان الراحة والاستدامة.',
      aEn: 'Yes, we use the finest treated Egyptian cotton for comfort and durability.'
    },
    {
      qAr: 'هل يوجد برنامج ولاء؟',
      qEn: 'Loyalty points?',
      aAr: 'نعم، تكسب نقاط مع كل طلب يمكنك تحويلها لخصومات مستقبلية.',
      aEn: 'Yes, earn points with every order to redeem for future discounts.'
    },
    {
      qAr: 'كيف أتتبع طلبي؟',
      qEn: 'How to track my order?',
      aAr: 'ستصلك رسالة نصية برابط التتبع بمجرد خروج الشحنة من مخازنا.',
      aEn: 'You will receive an SMS with a tracking link once your order is dispatched.'
    },
    {
      qAr: 'ما هي مواعيد خدمة العملاء؟',
      qEn: 'Customer service hours?',
      aAr: 'واتساب 24/7، الاتصال الهاتفي (10ص - 10م)، والبريد الإلكتروني متاح دائماً.',
      aEn: 'WhatsApp 24/7, Calls (10am-10pm), Email and Live Chat 24/7.'
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">
            {lang === 'ar' ? 'الأسئلة الشائعة' : 'F.A.Q'}
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-2xl border transition-all duration-300 ${activeIndex === i ? 'border-primary bg-primary/5' : 'border-white/10 glass'}`}>
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
                <div className="px-6 pb-6 text-gray-400 leading-relaxed animate-fade-in">
                  {lang === 'ar' ? faq.aAr : faq.aEn}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
