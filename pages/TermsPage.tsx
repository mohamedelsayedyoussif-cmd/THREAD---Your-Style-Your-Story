
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';
import { useLanguage } from '../components/LanguageProvider';

const TermsPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <InfoPageLayout 
      titleAr="الأحكام والشروط" 
      titleEn="Terms & Conditions" 
      subtitleAr="القواعد المنظمة لاستخدام موقع THREAD وإتمام الطلبات." 
      subtitleEn="Rules governing the use of THREAD website and order processing."
      icon="📜"
    >
      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-black italic">{lang === 'ar' ? 'قبول الشروط' : 'Acceptance of Terms'}</h2>
          <p className="text-gray-400 leading-relaxed">
            {lang === 'ar' 
              ? 'باستخدامك لموقعنا، فإنك توافق على الالتزام بكافة الشروط والأحكام المذكورة هنا. نحن نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق.' 
              : 'By using our website, you agree to comply with all terms and conditions stated here. We reserve the right to modify these terms at any time without prior notice.'}
          </p>
        </section>

        <section className="space-y-8">
          <div className="grid gap-6">
            {[
              { 
                tAr: 'الطلبات والأسعار', 
                tEn: 'Orders & Pricing', 
                dAr: 'جميع الأسعار المعروضة تشمل ضريبة القيمة المضافة. يحق للموقع إلغاء أي طلب في حال وجود خطأ تقني في السعر.',
                dEn: 'All prices shown include VAT. The website reserves the right to cancel any order in case of a technical pricing error.'
              },
              { 
                tAr: 'الملكية الفكرية', 
                tEn: 'Intellectual Property', 
                dAr: 'كافة التصاميم والشعارات والصور هي ملكية حصرية لبراند THREAD ويمنع استخدامها تجارياً بدون إذن.',
                dEn: 'All designs, logos, and images are the exclusive property of THREAD brand and may not be used commercially without permission.'
              },
              { 
                tAr: 'مسؤولية العميل', 
                tEn: 'Customer Responsibility', 
                dAr: 'العميل مسؤول عن دقة البيانات المدخلة (الاسم، العنوان، الهاتف). أي تأخير ناتج عن بيانات خاطئة يقع على عاتق العميل.',
                dEn: 'The customer is responsible for the accuracy of entered data (Name, Address, Phone). Any delay resulting from wrong data is the customer\'s responsibility.'
              }
            ].map((term, idx) => (
              <div key={idx} className="glass p-8 rounded-[2rem] border-white/5 space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-xs">0{idx + 1}</span>
                  {lang === 'ar' ? term.tAr : term.tEn}
                </h4>
                <p className="text-gray-400 leading-relaxed">{lang === 'ar' ? term.dAr : term.dEn}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-10 rounded-[2.5rem] border border-white/10 bg-dark-800">
           <p className="text-gray-500 text-sm leading-relaxed text-center italic">
             {lang === 'ar' 
               ? 'تخضع هذه الشروط لقوانين جمهورية مصر العربية، وأي نزاع ينشأ عنها يتم حله ودياً أو عبر الجهات القضائية المختصة بالقاهرة.' 
               : 'These terms are governed by the laws of the Arab Republic of Egypt, and any dispute arising from them shall be resolved amicably or through the competent judicial authorities in Cairo.'}
           </p>
        </section>
      </div>
    </InfoPageLayout>
  );
};

export default TermsPage;
