
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';
import { useLanguage } from '../components/LanguageProvider';

const PrivacyPolicyPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <InfoPageLayout 
      titleAr="سياسة الخصوصية" 
      titleEn="Privacy Policy" 
      subtitleAr="نحن نلتزم بحماية بياناتك وخصوصيتك بأعلى معايير الأمان." 
      subtitleEn="We are committed to protecting your data and privacy with the highest security standards."
      icon="🛡️"
    >
      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-black italic">{lang === 'ar' ? 'ما هي البيانات التي نجمعها؟' : 'What data do we collect?'}</h2>
          <div className="grid gap-4">
            {[
              { tAr: 'بيانات الهوية', tEn: 'Identity Data', dAr: 'الاسم، رقم الهاتف، والبريد الإلكتروني عند تسجيل الطلب.', dEn: 'Name, phone number, and email when placing an order.' },
              { tAr: 'بيانات الشحن', tEn: 'Shipping Data', dAr: 'العنوان التفصيلي لضمان وصول المنتج لباب منزلك.', dEn: 'Detailed address to ensure delivery to your doorstep.' },
              { tAr: 'بيانات تقنية', tEn: 'Technical Data', dAr: 'عنوان الـ IP ونوع المتصفح لتحسين تجربة التصفح.', dEn: 'IP address and browser type to improve browsing experience.' }
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border-white/5 space-y-2">
                <h4 className="font-bold text-primary">{lang === 'ar' ? item.tAr : item.tEn}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{lang === 'ar' ? item.dAr : item.dEn}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-black italic">{lang === 'ar' ? 'كيف نستخدم بياناتك؟' : 'How we use your data?'}</h2>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-4">
              <span className="text-primary mt-1">•</span>
              {lang === 'ar' ? 'معالجة وتوصيل طلباتك بأسرع وقت ممكن.' : 'Processing and delivering your orders as fast as possible.'}
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary mt-1">•</span>
              {lang === 'ar' ? 'إرسال تحديثات حالة الطلب عبر الرسائل النصية.' : 'Sending order status updates via SMS.'}
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary mt-1">•</span>
              {lang === 'ar' ? 'تحسين جودة الموقع وخدمة العملاء بناءً على ملاحظاتك.' : 'Improving website quality and customer service based on your feedback.'}
            </li>
          </ul>
        </section>

        <section className="p-8 rounded-3xl bg-primary/5 border border-primary/20 italic">
          <p className="text-gray-300 text-center">
            {lang === 'ar' 
              ? 'نحن لا نقوم ببيع أو مشاركة بياناتك مع أي جهات خارجية خارج نطاق شركات الشحن الشريكة.' 
              : 'We do not sell or share your data with any third parties outside our partner shipping companies.'}
          </p>
        </section>
      </div>
    </InfoPageLayout>
  );
};

export default PrivacyPolicyPage;
