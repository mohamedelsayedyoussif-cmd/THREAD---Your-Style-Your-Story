
import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import SocialContactIcons from '../components/SocialContactIcons';

const Contact: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
          </h2>
          <p className="text-gray-400">{lang === 'ar' ? 'نحن هنا لمساعدتك في أي وقت' : 'We are here to help anytime'}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form / Details */}
          <div className="space-y-8">
            <SocialContactIcons variant="contact" showLabels size="lg" />
            
            <div className="p-8 rounded-3xl glass border-primary/20 space-y-4">
               <h3 className="text-2xl font-bold flex items-center gap-3">
                 📍 {lang === 'ar' ? 'موقعنا' : 'Our Location'}
               </h3>
               <p className="text-gray-400">
                 {lang === 'ar' ? 'القاهرة، مصر - المكتب الرئيسي' : 'Cairo, Egypt - Head Office'}
               </p>
               <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-dark-900 font-bold rounded-xl hover:scale-105 transition-transform"
               >
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                   <circle cx="12" cy="10" r="3" />
                 </svg>
                 {lang === 'ar' ? 'افتح على الخريطة' : 'Open on Map'}
               </a>
            </div>
          </div>

          {/* Business Image/Map Mockup */}
          <div className="relative group">
             <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
             <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 glass">
                <img 
                  src="https://picsum.photos/seed/location/1000/1000" 
                  alt="Our Hub" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-dark-900/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-white font-black text-2xl tracking-widest italic">THREAD HQ</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
