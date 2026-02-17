
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useLanguage } from './LanguageProvider';
import { PRODUCTS } from '../lib/products';

const AIAssistant: React.FC = () => {
  const { lang, region } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const productContext = PRODUCTS.map(p => 
        `${p.nameEn}: ${region === 'EG' ? p.price + ' EGP' : p.priceSAR + ' SAR'}. ${p.badgeEn} item.`
      ).join(' ');

      const systemInstruction = `
        You are "THREAD STYLIST", the coolest streetwear expert. 
        Persona: Chill, fashion-forward, hype-beast friend. Use slang like "Vibe", "Drop", "Fit", "Fire", "جامد", "فاجر".
        Context: User is in ${region === 'EG' ? 'Egypt 🇪🇬' : 'Saudi Arabia 🇸🇦'}. 
        Language: ${lang === 'ar' ? 'Egyptian Street Arabic' : 'English Streetwear Slang'}.
        Rules:
        1. Recommend Outfits (Combos of products).
        2. Size help: If they want a baggy look, tell them to size up.
        3. Be extremely enthusiastic about the brand THREAD.
        4. Knowledge: ${productContext}.
        5. Keep it short and punchy with lots of emojis.
      `;

      const chatHistory = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: systemInstruction }] },
          ...chatHistory,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
      });

      const aiText = response.text || "Vibe check failed. Try again! ⚡";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Server's down, stay tuned! ⚡" }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-24 right-6 z-[100] flex items-center group">
        {/* Tooltip on Hover */}
        <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0">
          <div className="glass px-4 py-2 rounded-xl border-primary/30 whitespace-nowrap">
             <span className="text-primary font-black italic tracking-tighter text-xs">
                {lang === 'ar' ? 'ظبط الـ FIT بتاعك ⚡' : 'FIX YOUR FIT ⚡'}
             </span>
          </div>
        </div>

        {/* New Badge Shape (Diamond) */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 bg-dark-950 text-primary flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-500 shadow-[0_0_40px_rgba(0,242,255,0.3)] group border-2 border-primary overflow-visible rounded-2xl rotate-45"
        >
          {/* Inner Content (Counter-rotated back to 0) */}
          <div className="-rotate-45 flex flex-col items-center justify-center relative">
            <span className="text-2xl drop-shadow-[0_0_10px_rgba(0,242,255,0.8)] animate-pulse">🕶️</span>
            
            {/* Live Indicator Dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-neon rounded-full border-2 border-dark-950">
               <div className="absolute inset-0 bg-accent-neon rounded-full animate-ping opacity-75" />
            </div>
          </div>

          {/* Glitch Overlay Effect on Hover */}
          <div className="absolute inset-0 border-2 border-accent-neon opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-2xl pointer-events-none" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[110] w-[calc(100vw-3rem)] sm:w-[420px] h-[650px] max-h-[85vh] glass rounded-[3rem] border-primary/20 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
      <div className="p-8 bg-primary text-dark-950 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-dark-950 text-primary rounded-2xl flex items-center justify-center font-black italic shadow-lg rotate-3 text-xl">T</div>
          <div>
            <h3 className="font-black text-lg uppercase italic tracking-tighter">THREAD STYLIST</h3>
            <span className="text-[10px] font-black opacity-70 uppercase tracking-widest">Online & Ready ⚡</span>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-2 bg-dark-950/10 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-dark-950/80">
        {messages.length === 0 && (
          <div className="text-center space-y-8 pt-12">
             <div className="text-6xl animate-bounce">🕶️</div>
             <p className="text-gray-300 font-bold italic text-lg leading-relaxed">
               {lang === 'ar' 
                 ? 'أيوة يا بطل! أنا هنا عشان أظبطلك الـ Fit بتاعك. عايز تعرف إيه الجديد ولا نختار مقاسك؟' 
                 : 'Wassup! I am here to fix your fit. Check the new drop or need size help?'}
             </p>
             <div className="grid grid-cols-1 gap-3 px-4">
                {[
                  { ar: 'وريني الـ Best Sellers 🔥', en: "Show me the Hype 🔥" },
                  { ar: 'إيه أنسب طقم للخروج؟ 👕', en: 'Best outfit combo? 👕' },
                  { ar: 'المقاسات نظامها إيه؟ 📏', en: 'How is the sizing? 📏' }
                ].map((s, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setInput(lang === 'ar' ? s.ar : s.en)}
                    className="text-xs font-black border-2 border-primary/20 bg-primary/5 px-6 py-4 rounded-2xl hover:bg-primary hover:text-dark-950 transition-all text-white uppercase italic tracking-tighter"
                  >
                    {lang === 'ar' ? s.ar : s.en}
                  </button>
                ))}
             </div>
          </div>
        )}
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-6 py-4 rounded-3xl text-sm font-bold leading-relaxed ${
              m.role === 'user' 
                ? 'bg-primary text-dark-900 rounded-tr-none shadow-lg' 
                : 'glass border-white/10 text-gray-200 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="glass px-6 py-4 rounded-3xl rounded-tl-none">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-dark-900 border-t border-white/5">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={lang === 'ar' ? 'اكتب أي حاجة...' : 'Type your vibe...'}
            className="flex-1 bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none text-white font-bold transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping || !input.trim()}
            className="w-14 h-14 bg-primary text-dark-950 rounded-2xl flex items-center justify-center hover:scale-110 active:scale-95 disabled:opacity-50 transition-all shadow-xl"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
