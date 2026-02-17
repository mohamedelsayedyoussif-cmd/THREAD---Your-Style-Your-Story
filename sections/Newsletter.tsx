import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';

const Newsletter: React.FC = () => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto glass p-12 rounded-[3.5rem] border-white/5 text-center space-y-8 relative overflow-hidden">
        {/* Decorative circle with RTL fix class */}
        <div className="absolute bottom-0 newsletter-circle w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            {lang === 'ar' ? 'خصم 10% على أول طلب 💌' : '10% OFF YOUR FIRST ORDER 💌'}
          </h2>
          <p className="text-gray-400 font-bold italic">
            {lang === 'ar' ? 'بنحب الستايل... مش السبام. انضم لعيلة THREAD.' : 'We love style, not spam. Join the THREAD fam.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={lang === 'ar' ? 'بريدك الإلكتروني...' : 'Your email address...'}
            className="flex-1 bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary text-white font-bold"
          />
          <button
            type="submit"
            className="bg-primary text-white dark:text-dark-900 px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20"
          >
            {submitted ? '✅' : (lang === 'ar' ? 'خد الخصم' : 'GET DISCOUNT')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;