
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

const AboutStory: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 bg-dark-900 overflow-hidden relative">
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
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-primary font-black text-4xl italic tracking-tighter">EST. 2024</span>
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
                  ? 'ثورة في عالم ملابس الشارع، تجمع بين الجرأة والجودة العالية.' 
                  : 'A revolution in streetwear, combining boldness with premium quality.'}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                {lang === 'ar' ? 'قصتنا' : 'Our Story'}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {lang === 'ar' 
                  ? 'بدأت THREAD من شغف حقيقي بتغيير مفهوم الموضة في مصر والخليج. نحن نؤمن أن ملابسك ليست مجرد قماش، بل هي لغتك الصامتة للتعبير عن هويتك. انطلقنا بمهمة واحدة: تقديم تصاميم حصرية تنافس الماركات العالمية، وبأسعار تجعل الأناقة حقاً للجميع.'
                  : 'THREAD started from a true passion to change the fashion landscape in Egypt and the Gulf. We believe your clothes are more than just fabric; they are your silent language to express your identity. We launched with one mission: to provide exclusive designs that compete globally, at prices that make elegance a right for everyone.'}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="glass p-6 rounded-2xl border-primary/20">
                  <span className="block text-3xl font-black text-white mb-2">100%</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    {lang === 'ar' ? 'قطن مصري فاخر' : 'Premium Egyptian Cotton'}
                  </span>
                </div>
                <div className="glass p-6 rounded-2xl border-primary/20">
                  <span className="block text-3xl font-black text-white mb-2">+50K</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">
                    {lang === 'ar' ? 'عميل واثق بنا' : 'Trusted Customers'}
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
