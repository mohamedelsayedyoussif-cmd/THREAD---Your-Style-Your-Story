
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

const SizeGuide: React.FC = () => {
  const { lang } = useLanguage();

  const data = [
    { s: 'S', chest: '90–95', height: '165–170', weight: '50–60' },
    { s: 'M', chest: '96–101', height: '171–175', weight: '61–70' },
    { s: 'L', chest: '102–107', height: '176–180', weight: '71–80' },
    { s: 'XL', chest: '108–113', height: '181–185', weight: '81–90' },
    { s: 'XXL', chest: '114–119', height: '186–190', weight: '91–100' },
  ];

  return (
    <section id="size-guide" className="py-24 px-4 bg-dark-900 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 uppercase">
            {lang === 'ar' ? 'دليل المقاسات' : 'Size Guide'}
          </h2>
          <p className="text-gray-400">
            {lang === 'ar' ? 'تأكد من اختيار المقاس المثالي لك' : 'Find your perfect fit'}
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl glass border-primary/20">
          <table className="w-full text-center">
            <thead>
              <tr className="bg-primary/10 text-primary uppercase text-sm font-black tracking-widest">
                <th className="py-6 px-4">{lang === 'ar' ? 'المقاس' : 'Size'}</th>
                <th className="py-6 px-4">{lang === 'ar' ? 'الصدر (سم)' : 'Chest (cm)'}</th>
                <th className="py-6 px-4">{lang === 'ar' ? 'الطول (سم)' : 'Height (cm)'}</th>
                <th className="py-6 px-4">{lang === 'ar' ? 'الوزن (كجم)' : 'Weight (kg)'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-primary/5 transition-colors">
                  <td className="py-6 font-black text-white">{row.s}</td>
                  <td className="py-6 text-gray-400">{row.chest}</td>
                  <td className="py-6 text-gray-400">{row.height}</td>
                  <td className="py-6 text-gray-400">{row.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
           <div className="p-8 rounded-2xl glass border-accent-neon/20 flex items-start gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h4 className="font-bold text-accent-neon mb-2">
                  {lang === 'ar' ? 'نصيحة ذهبية' : 'Pro Tip'}
                </h4>
                <p className="text-gray-400">
                  {lang === 'ar' 
                    ? 'لو محتار بين مقاسين، ديماً اختار الأكبر عشان ستايل الـ Oversized يكون أريح.'
                    : 'If you are between two sizes, always go for the larger one for a more comfortable oversized fit.'}
                </p>
              </div>
           </div>
           <div className="p-8 rounded-2xl glass border-primary/20 flex items-start gap-4">
              <span className="text-4xl">💬</span>
              <div>
                <h4 className="font-bold text-primary mb-2">
                  {lang === 'ar' ? 'لسه مش عارف؟' : 'Still Unsure?'}
                </h4>
                <p className="text-gray-400">
                  {lang === 'ar' 
                    ? 'تواصل مع فريقنا على واتساب وهيساعدوك تختار المقاس الأنسب ليك.'
                    : 'Chat with our team on WhatsApp and they will help you pick the right size.'}
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
