
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

const AboutStory: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 bg-dark-950 overflow-hidden relative scroll-mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Side */}
          <div className="relative group">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 glass shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200" 
                alt="Thread Culture" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              />
              <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-primary font-heading text-4xl italic tracking-tighter leading-none">EST. 2024</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{lang === 'ar' ? 'القاهرة، مصر' : 'CAIRO, EGYPT'}</span>
                </div>
                <div className="text-4xl">🇪🇬</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full glass border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest italic">
                {lang === 'ar' ? 'البيان الرسمي' : 'THE MANIFESTO'}
              </div>
              <h2 className="text-4xl md:text-6xl font-heading text-white leading-tight italic uppercase tracking-tighter">
                {lang === 'ar' ? (
                  <>قصتنا..<br/><span className="text-primary">بداية الثورة.</span></>
                ) : (
                  <>OUR STORY..<br/><span className="text-primary">THE REVOLUTION.</span></>
                )}
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed font-bold italic">
                {lang === 'ar' 
                  ? 'ثريد مش مجرد براند ملابس، هي حركة فنية بدأت من القاهرة.' 
                  : 'THREAD is not just a clothing brand; it is an artistic movement.'}
              </p>
              
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {lang === 'ar' 
                  ? 'آمنا من اليوم الأول إن الصناعة المصرية قادرة تنافس عالمياً. بنستخدم "دهب مصر الأبيض" (القطن الممتاز) وبنصنعه بأيادي محترفة.'
                  : 'We believe Egyptian industry can compete globally. We use premium cotton crafted by professional hands.'}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass p-6 rounded-[1.8rem] border-white/5 transition-all">
                  <span className="block text-2xl font-heading text-white mb-1">100%</span>
                  <span className="text-[8px] text-gray-500 font-black uppercase tracking-widest block">
                    {lang === 'ar' ? 'قطن مصري أصلي 🇪🇬' : 'PURE EGYPTIAN COTTON 🇪🇬'}
                  </span>
                </div>
                <div className="glass p-6 rounded-[1.8rem] border-white/5 transition-all">
                  <span className="block text-2xl font-heading text-white mb-1">LIMITLESS</span>
                  <span className="text-[8px] text-gray-500 font-black uppercase tracking-widest block">
                    {lang === 'ar' ? 'إصدارات حصرية' : 'EXCLUSIVE DROPS'}
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
