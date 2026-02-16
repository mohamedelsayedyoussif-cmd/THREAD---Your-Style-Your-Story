
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const InfoPageLayout: React.FC<Props> = ({ titleAr, titleEn, subtitleAr, subtitleEn, children, icon }) => {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = lang === 'ar' ? `THREAD | ${titleAr}` : `THREAD | ${titleEn}`;
    window.scrollTo(0, 0);
  }, [lang, titleAr, titleEn]);

  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-primary selection:text-dark-900">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">
              {lang === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-primary">{lang === 'ar' ? titleAr : titleEn}</span>
          </nav>

          {/* Header */}
          <div className="mb-16 space-y-4">
            <div className="flex items-center gap-4">
              {icon && <div className="text-4xl text-primary">{icon}</div>}
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                {lang === 'ar' ? titleAr : titleEn}
              </h1>
            </div>
            <p className="text-xl text-gray-400 font-light italic max-w-2xl">
              {lang === 'ar' ? subtitleAr : subtitleEn}
            </p>
            <div className="w-24 h-2 bg-primary rounded-full" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {children}
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-6">
              <div className="glass p-8 rounded-[2rem] border-primary/20 sticky top-32 space-y-6">
                <h3 className="text-2xl font-black italic">{lang === 'ar' ? 'هل لديك استفسار؟' : 'Need help?'}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {lang === 'ar' 
                    ? 'فريق خدمة العملاء متاح لمساعدتك على مدار الساعة عبر القنوات التالية:' 
                    : 'Our support team is available 24/7 to assist you via these channels:'}
                </p>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/201033776986" 
                    target="_blank" 
                    className="flex items-center gap-4 p-4 bg-[#25D366]/10 text-[#25D366] rounded-2xl border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all font-bold"
                  >
                    <span>💬</span>
                    WhatsApp
                  </a>
                  <a 
                    href="tel:+201033776986" 
                    className="flex items-center gap-4 p-4 bg-primary/10 text-primary rounded-2xl border border-primary/20 hover:bg-primary/20 transition-all font-bold"
                  >
                    <span>📞</span>
                    {lang === 'ar' ? 'اتصال مباشر' : 'Direct Call'}
                  </a>
                  <a 
                    href="mailto:el3arif.m@gmail.com" 
                    className="flex items-center gap-4 p-4 bg-white/5 text-white rounded-2xl border border-white/10 hover:bg-white/10 transition-all font-bold"
                  >
                    <span>✉️</span>
                    {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Us'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InfoPageLayout;
