
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../components/LanguageProvider';

const StyleQuiz: React.FC = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const questions = [
    {
      q: lang === 'ar' ? 'ستايلك إيه؟' : 'What is your style?',
      options: [
        { ar: 'Street 👟', en: 'Street' },
        { ar: 'Casual 👕', en: 'Casual' },
        { ar: 'Minimalist 🧊', en: 'Minimalist' }
      ]
    },
    {
      q: lang === 'ar' ? 'بتحب الـ Fit إزاي؟' : 'How do you like the fit?',
      options: [
        { ar: 'Oversized 🧥', en: 'Oversized' },
        { ar: 'Regular 📏', en: 'Regular' },
        { ar: 'Slim 👖', en: 'Slim' }
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-dark-950 border-y border-white/5">
      <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-primary font-black uppercase text-xs tracking-widest italic">THREAD STYLIST ✨</span>
            <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase font-heading">
              {lang === 'ar' ? 'مش عارف تختار؟ نساعدك!' : 'CONFUSED? WE GOT YOU!'}
            </h2>
          </div>

          {step < questions.length ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <h3 className="text-2xl font-bold text-gray-400 italic">{questions[step].q}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setStep(step + 1)}
                    className="px-8 py-5 glass border-white/10 rounded-2xl font-black hover:border-primary hover:text-primary transition-all active:scale-95 min-w-[150px] uppercase text-sm"
                  >
                    {lang === 'ar' ? opt.ar : opt.en}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-in zoom-in-95">
              <div className="text-6xl animate-bounce">🎉</div>
              <h3 className="text-2xl font-black text-white italic">
                {lang === 'ar' ? 'تم تحديد الـ Fit المناسب ليك يا وحش!' : 'Your perfect Fit is ready!'}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/collections')}
                  className="bg-primary text-dark-900 px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                >
                  {lang === 'ar' ? 'اعرض الترشيحات 🔥' : 'SHOW RECOMMENDATIONS 🔥'}
                </button>
                <button 
                  onClick={() => setStep(0)}
                  className="px-12 py-5 glass border-white/10 rounded-2xl font-black uppercase tracking-widest text-white hover:bg-white/5 transition-all"
                >
                  {lang === 'ar' ? 'إعادة الاختبار' : 'Retake Quiz'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StyleQuiz;
