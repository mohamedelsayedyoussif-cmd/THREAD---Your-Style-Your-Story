import React from 'react';
import { useLanguage } from '../components/LanguageProvider';

interface PaymentMethod {
  name: string;
  logo?: string;
  icon?: string;
}

const PaymentMethods: React.FC = () => {
  const { lang } = useLanguage();

  const methods: PaymentMethod[] = [
    { name: 'Visa', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
    { name: 'Mastercard', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
    { name: 'Meeza', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Meeza_logo.svg' },
    { name: 'ValU', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Y6Zc_W7Yn_L0S6z0H3v8L7C-W_z8O0m_vA&s' },
    { name: 'Tamara', logo: 'https://tamara.co/favicon.ico' },
    { name: 'COD', icon: '💵' },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-dark-950 border-t border-dark-950/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 italic font-display">
            {lang === 'ar' ? 'وسائل دفع آمنة 100%' : '100% SECURE PAYMENTS'}
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
            {methods.map((m, idx) => (
              <div key={idx} className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all cursor-default flex items-center gap-2">
                {m.logo ? (
                  <img src={m.logo} alt={m.name} className="h-full w-auto object-contain" />
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{m.icon}</span>
                    <span className="font-black text-xs text-dark-950 dark:text-white uppercase tracking-widest">{lang === 'ar' ? 'دفع عند الاستلام' : 'COD'}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;