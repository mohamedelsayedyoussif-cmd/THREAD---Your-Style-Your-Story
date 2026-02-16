
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';
import { useLanguage } from '../components/LanguageProvider';

const SizeGuidePage: React.FC = () => {
  const { lang } = useLanguage();

  const data = [
    { s: 'S', chest: '90–95', height: '165–170', weight: '50–60' },
    { s: 'M', chest: '96–101', height: '171–175', weight: '61–70' },
    { s: 'L', chest: '102–107', height: '176–180', weight: '71–80' },
    { s: 'XL', chest: '108–113', height: '181–185', weight: '81–90' },
    { s: 'XXL', chest: '114–119', height: '186–190', weight: '91–100' },
  ];

  return (
    <InfoPageLayout 
      titleAr="دليل المقاسات" 
      titleEn="Size Guide" 
      subtitleAr="اعثر على المقاس المثالي لك لضمان أفضل إطلالة." 
      subtitleEn="Find your perfect fit to ensure the best look."
      icon="📏"
    >
      <div className="space-y-12">
        {/* Table Section */}
        <section className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] glass border-white/5">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-primary text-dark-900 font-black uppercase text-xs tracking-widest">
                  <th className="py-6 px-4">{lang === 'ar' ? 'المقاس' : 'Size'}</th>
                  <th className="py-6 px-4">{lang === 'ar' ? 'الصدر (سم)' : 'Chest (cm)'}</th>
                  <th className="py-6 px-4">{lang === 'ar' ? 'الطول (سم)' : 'Height (cm)'}</th>
                  <th className="py-6 px-4">{lang === 'ar' ? 'الوزن (كجم)' : 'Weight (kg)'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors font-bold text-gray-300">
                    <td className="py-6 text-white text-xl">{row.s}</td>
                    <td className="py-6">{row.chest}</td>
                    <td className="py-6">{row.height}</td>
                    <td className="py-6">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-8 rounded-3xl glass border-accent-neon/20 flex items-start gap-6">
            <span className="text-4xl">💡</span>
            <div>
              <h4 className="text-accent-neon font-black italic mb-2">
                {lang === 'ar' ? 'نصيحة ثريد' : 'THREAD TIP'}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {lang === 'ar' 
                  ? 'إذا كان مقاسك يقع بين خيارين، ننصحك دائماً باختيار المقاس الأكبر لضمان راحة مثالية بستايل الـ Oversized.' 
                  : 'If you fall between two sizes, we always recommend choosing the larger one for that perfect oversized comfort.'}
              </p>
            </div>
          </div>
        </section>

        {/* How to measure */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black italic">{lang === 'ar' ? 'كيف تأخذ مقاساتك؟' : 'How to Measure?'}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tAr: 'الصدر', tEn: 'Chest', dAr: 'قم بقياس أعرض منطقة في الصدر مع إبقاء المقياس أفقياً.', dEn: 'Measure around the fullest part of your chest.' },
              { tAr: 'الطول', tEn: 'Length', dAr: 'من أعلى نقطة في الكتف وحتى أسفل الورك قليلاً.', dEn: 'From the highest point of shoulder to below the hip.' },
              { tAr: 'الأكتاف', tEn: 'Shoulders', dAr: 'قياس المسافة من نهاية عظمة الكتف لليمنى لليسرى.', dEn: 'The distance between shoulder bones.' }
            ].map((step, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border-white/5 space-y-4">
                <span className="text-primary font-black text-2xl">0{idx + 1}</span>
                <h4 className="font-bold text-white text-lg">{lang === 'ar' ? step.tAr : step.tEn}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{lang === 'ar' ? step.dAr : step.dEn}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </InfoPageLayout>
  );
};

export default SizeGuidePage;
