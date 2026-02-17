
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

const AboutStory: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 bg-dark-900 overflow-hidden relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 glass shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800" 
                alt="Thread Culture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 right-10 flex items-center gap-4">
                <span className="text-primary font-black text-4xl italic tracking-tighter">EST. 2024</span>
                <span className="text-3xl">🇪🇬</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-white leading-tight">
                {lang === 'ar' ? 'عن THREAD' : 'About THREAD'}
              </h2>
              <div className="w-20 h-2 bg-primary rounded-full" />
              <p className="text-xl text-gray-400 leading-relaxed font-light italic">
                {lang === 'ar' 
                  ? 'ثورة مصرية 🇪🇬 في عالم ملابس الشارع، تجمع بين الجرأة والجودة الفائقة.' 
                  : 'An Egyptian 🇪🇬 revolution in streetwear, combining boldness with superior quality.'}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                {lang === 'ar' ? 'قصتنا مع الصناعة المحلية' : 'Our Story with Local Industry'}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {lang === 'ar' 
                  ? 'بدأت THREAD من قلب القاهرة بشغف حقيقي لدعم الصناعة المصرية وتطوير مفهوم ملابس الشارع. نحن نؤمن أن "صنع في مصر" 🇪🇬 هي علامة للجودة العالمية. كل قطعة نصنعها هي نتاج تعاون بين مصممين مصريين مبدعين ومصانع محلية تلتزم بأعلى معايير الدقة.'
                  : 'THREAD started in the heart of Cairo with a true passion for supporting Egyptian industry. We believe "Made in Egypt" 🇪🇬 is a mark of world-class quality. Every piece we craft is the result of collaboration between creative Egyptian designers and local factories committed to the highest precision standards.'}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="glass p-6 rounded-2xl border-primary/20">
                  <span className="block text-3xl font-black text-white mb-2">100%</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    {lang === 'ar' ? 'قطن مصري بريميوم 🇪🇬' : 'Premium Egyptian Cotton 🇪🇬'}
                  </span>
                </div>
                <div className="glass p-6 rounded-2xl border-primary/20">
                  <span className="block text-3xl font-black text-white mb-2">+50K</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    {lang === 'ar' ? 'عميل في مصر والخليج' : 'Customers in Egypt & Gulf'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
