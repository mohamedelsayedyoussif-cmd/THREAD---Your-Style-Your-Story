
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';
import { useLanguage } from '../components/LanguageProvider';

const ReturnsPage: React.FC = () => {
  const { lang } = useLanguage();

  const steps = [
    { tAr: 'طلب الإرجاع', tEn: 'Request Return', dAr: 'تواصل معنا عبر واتساب برقم الطلب.', dEn: 'Contact us via WhatsApp with your order number.' },
    { tAr: 'الفحص', tEn: 'Inspection', dAr: 'فريقنا يقوم بمراجعة الطلب خلال 24 ساعة.', dEn: 'Our team reviews the request within 24 hours.' },
    { tAr: 'الاستلام', tEn: 'Pickup', dAr: 'مندوب الشحن يستلم المنتج من باب بيتك.', dEn: 'Courier picks up the item from your door.' },
    { tAr: 'الاستبدال/الاسترداد', tEn: 'Exchange/Refund', dAr: 'نرسل المنتج الجديد أو نعيد أموالك.', dEn: 'We send the new item or refund your money.' }
  ];

  return (
    <InfoPageLayout 
      titleAr="الإرجاع والاستبدال" 
      titleEn="Returns" 
      subtitleAr="سياسة مرنة تضمن حقك في تغيير رأيك أو مقاسك." 
      subtitleEn="A flexible policy ensuring your right to change your mind or size."
      icon="🔄"
    >
      <div className="space-y-16">
        {/* Timeline */}
        <section className="space-y-8">
           <h2 className="text-3xl font-black italic">{lang === 'ar' ? 'كيف تعمل العملية؟' : 'How it Works?'}</h2>
           <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/5 -translate-y-1/2 hidden md:block" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative z-10 text-center space-y-4">
                    <div className="w-12 h-12 bg-primary text-dark-900 rounded-full flex items-center justify-center font-black mx-auto shadow-lg shadow-primary/20">
                      {idx + 1}
                    </div>
                    <h4 className="font-bold text-white">{lang === 'ar' ? step.tAr : step.tEn}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{lang === 'ar' ? step.dAr : step.dEn}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* Conditions */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-white">{lang === 'ar' ? 'شروط الإرجاع' : 'Return Conditions'}</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border-l-4 border-primary">
                 ✅ {lang === 'ar' ? 'خلال 14 يوماً من الاستلام.' : 'Within 14 days of delivery.'}
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border-l-4 border-primary">
                 ✅ {lang === 'ar' ? 'المنتج غير مستخدم وغير مغسول.' : 'Unused and unwashed item.'}
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border-l-4 border-primary">
                 ✅ {lang === 'ar' ? 'وجود التيكت والعبوة الأصلية.' : 'Original tags and packaging included.'}
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-white">{lang === 'ar' ? 'الاسترداد المالي' : 'Refund Process'}</h3>
            <p className="text-gray-400 leading-relaxed">
              {lang === 'ar' 
                ? 'يتم استرداد المبالغ المالية عبر نفس طريقة الدفع الأصلية. في حالة الدفع كاش، يتم التحويل عبر محفظة إلكترونية أو حساب بنكي خلال 3-10 أيام عمل.' 
                : 'Refunds are processed via the original payment method. For Cash on Delivery, refunds are made via e-wallets or bank transfers within 3-10 business days.'}
            </p>
            <div className="p-6 rounded-2xl border-2 border-primary/20 bg-primary/5 italic text-sm">
               {lang === 'ar' ? 'أول عملية استبدال للمقاس تكون مجانية بالكامل!' : 'The first size exchange is completely free!'}
            </div>
          </div>
        </section>
      </div>
    </InfoPageLayout>
  );
};

export default ReturnsPage;
