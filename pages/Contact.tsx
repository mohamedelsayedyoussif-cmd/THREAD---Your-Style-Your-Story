
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import SocialContactIcons from '../components/SocialContactIcons';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const phoneNumber = "+20 103 377 6986";

  return (
    <section id="contact" className="py-24 px-4 bg-dark-900 overflow-hidden relative scroll-mt-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">
              {lang === 'ar' ? 'ابقَ على اتصال' : 'Stay in Touch'}
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
              {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h2>
            <div className="w-20 h-2 bg-primary rounded-full" />
          </div>
          <p className="text-gray-400 max-w-sm font-light italic text-sm md:text-end">
            {lang === 'ar' 
              ? 'فريق ثريد متاح دائماً لمساعدتك في اختيار المقاس المناسب أو حل أي مشكلة تواجهك.' 
              : 'The THREAD team is always available to help you choose the right size or solve any issue you face.'}
          </p>
        </div>

        {/* Featured Support Phone Number Card */}
        <div className="mb-12 glass p-10 rounded-[3rem] border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-8 group">
           <div className="space-y-4 text-center md:text-start">
              <h3 className="text-3xl font-black text-white italic">
                {lang === 'ar' ? 'الخط المباشر لخدمة العملاء' : 'Customer Support HotLine'}
              </h3>
              <p className="text-gray-400 max-w-md">
                {lang === 'ar' 
                  ? 'تحدث معنا مباشرة للحصول على أسرع استجابة بخصوص طلبك أو للاستفسار عن المقاسات.' 
                  : 'Talk to us directly for the fastest response regarding your order or size inquiries.'}
              </p>
           </div>
           <a 
              href={`tel:${phoneNumber.replace(/\s/g, '')}`} 
              className="text-4xl md:text-6xl font-black text-primary hover:text-white transition-all tracking-tighter italic flex items-center gap-4 group-hover:scale-105"
           >
              <span className="text-3xl">📞</span>
              {phoneNumber}
           </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Quick Support Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass h-full p-10 rounded-[3rem] border-white/5 space-y-10 relative overflow-hidden group">
               <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
               
               <div className="space-y-6">
                 <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                   ⚡ {lang === 'ar' ? 'دعم فني سريع' : 'Quick Support'}
                 </h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   {lang === 'ar' 
                     ? 'نحن ندرك قيمة وقتك، لذا نضمن لك الرد على استفساراتك عبر الواتساب خلال أقل من 60 دقيقة في أوقات العمل.' 
                     : 'We value your time, so we guarantee a response to your WhatsApp inquiries in less than 60 minutes during business hours.'}
                 </p>
               </div>

               <div className="space-y-4">
                 <SocialContactIcons variant="contact" showLabels size="lg" />
               </div>

               <div className="pt-6 border-t border-white/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent-neon/20 text-accent-neon flex items-center justify-center text-xl">⏰</div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{lang === 'ar' ? 'مواعيد العمل الرسمية' : 'Official Working Hours'}</h4>
                      <p className="text-xs text-gray-500">{lang === 'ar' ? 'يومياً: 10:00 ص - 10:00 م' : 'Daily: 10:00 AM - 10:00 PM'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center text-xl">📍</div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{lang === 'ar' ? 'المكتب الرئيسي' : 'Head Office'}</h4>
                      <p className="text-xs text-gray-500">{lang === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Map and Visuals */}
          <div className="lg:col-span-7 flex flex-col gap-8">
             <div className="relative flex-1 rounded-[3rem] overflow-hidden glass border-white/10 group min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" 
                  alt="THREAD Headquarters" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-6">
                   <div className="space-y-2">
                      <span className="text-primary font-black text-xs uppercase tracking-widest">THREAD CULTURE HQ</span>
                      <h4 className="text-3xl font-black text-white italic">{lang === 'ar' ? 'مصر بتلبس ثريد 🇪🇬' : 'Egypt Wears THREAD 🇪🇬'}</h4>
                   </div>
                   <button className="px-8 py-4 bg-white text-dark-900 font-bold rounded-2xl hover:bg-primary transition-all shadow-2xl flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {lang === 'ar' ? 'موقعنا على الخريطة' : 'Find us on Google Maps'}
                   </button>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-6">
                <div className="glass p-8 rounded-3xl border-white/5 text-center space-y-3 hover:border-primary/30 transition-all group cursor-default">
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-2xl group-hover:scale-110 transition-transform">📧</div>
                   <h5 className="font-bold text-white text-sm uppercase tracking-widest">{lang === 'ar' ? 'البريد الرسمي' : 'Official Email'}</h5>
                   <p className="text-xs text-gray-500 font-mono">support@threadeg.net</p>
                </div>
                <div className="glass p-8 rounded-3xl border-white/5 text-center space-y-3 hover:border-accent-neon/30 transition-all group cursor-default">
                   <div className="w-12 h-12 bg-accent-neon/10 rounded-full flex items-center justify-center mx-auto text-2xl group-hover:scale-110 transition-transform">📱</div>
                   <h5 className="font-bold text-white text-sm uppercase tracking-widest">{lang === 'ar' ? 'مبيعات الجملة' : 'Wholesale'}</h5>
                   <p className="text-xs text-gray-500 font-mono">+20 103 377 6986</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
