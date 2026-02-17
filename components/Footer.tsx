
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import SocialContactIcons from './SocialContactIcons';

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const phoneNumber = "+20 103 377 6986";

  const helpLinks = [
    { id: 'size', ar: 'دليل المقاسات', en: 'Size Guide', path: '/size-guide' },
    { id: 'faq', ar: 'الأسئلة الشائعة', en: 'FAQ', path: '/faq' },
    { id: 'shipping', ar: 'الشحن والتوصيل', en: 'Shipping', path: '/shipping' },
    { id: 'returns', ar: 'الإرجاع والاستبدال', en: 'Returns', path: '/returns' },
    { id: 'track', ar: 'تتبع طلبك', en: 'Track Order', path: '/track' },
  ];

  return (
    <footer className="bg-dark-900 text-white border-t border-primary/20 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-black text-primary italic">THREAD</Link>
          <p className="text-gray-400 leading-relaxed max-w-xs">
            {lang === 'ar' 
              ? 'العلامة التجارية الأسرع نمواً لملابس الشارع في مصر 🇪🇬 والسعودية 🇸🇦. جودة عالية بأسعار تنافسية.'
              : 'The fastest-growing streetwear brand in Egypt 🇪🇬 & KSA 🇸🇦. Premium quality at competitive prices.'}
          </p>
          <div className="space-y-3">
            <p className="text-sm font-bold flex items-center gap-2">
              📍 {lang === 'ar' ? 'القاهرة، مصر 🇪🇬' : 'Cairo, Egypt 🇪🇬'}
            </p>
            <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="text-lg font-black text-primary flex items-center gap-2 italic hover:underline">
              📞 {phoneNumber}
            </a>
          </div>
        </div>

        {/* Shop */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold border-b border-primary/20 pb-2">
            {lang === 'ar' ? 'تسوق' : 'Shop'}
          </h3>
          <ul className="space-y-4 text-gray-400 font-semibold">
            <li><Link to="/#about" className="hover:text-primary transition-colors">{lang === 'ar' ? 'عن THREAD' : 'About THREAD'}</Link></li>
            <li><Link to="/#men" className="hover:text-primary transition-colors">{lang === 'ar' ? 'الرجال' : 'Men'}</Link></li>
            <li><Link to="/#women" className="hover:text-primary transition-colors">{lang === 'ar' ? 'النساء' : 'Women'}</Link></li>
            <li><Link to="/collections" className="hover:text-primary transition-colors">{lang === 'ar' ? 'كل المجموعات' : 'All Collections'}</Link></li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold border-b border-primary/20 pb-2">
            {lang === 'ar' ? 'روابط المساعدة' : 'Help Links'}
          </h3>
          <ul className="space-y-4 text-gray-400 font-semibold">
            {helpLinks.map(link => (
              <li key={link.id}>
                <Link to={link.path} className="hover:text-primary transition-colors">
                  {lang === 'ar' ? link.ar : link.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold border-b border-primary/20 pb-2">
            {lang === 'ar' ? 'تواصل معنا' : 'Connect'}
          </h3>
          <SocialContactIcons variant="footer" size="md" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} THREAD EG. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
        <div className="flex gap-6 font-bold uppercase tracking-widest">
          <Link to="/privacy" className="hover:text-white transition-colors">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy'}</Link>
          <Link to="/terms" className="hover:text-white transition-colors">{lang === 'ar' ? 'الأحكام' : 'Terms'}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
