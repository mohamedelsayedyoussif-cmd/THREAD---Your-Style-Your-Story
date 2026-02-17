import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { useLanguage } from './LanguageProvider.tsx';
import { PRODUCTS } from '../lib/products.ts';
import { Product } from '../types.ts';

interface Message {
  role: 'user' | 'model';
  text: string;
  suggestedProducts?: Product[];
}

const AIAssistant: React.FC<{ onQuickView: (p: Product) => void }> = ({ onQuickView }) => {
  const { lang, region } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = async (overrideText?: string) => {
    const userMsg = overrideText || input.trim();
    if (!userMsg || isTyping) return;

    const currentInput = userMsg;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: currentInput }]);
    setIsTyping(true);

    try {
      // Rule compliance: create instance right before call
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const productContext = PRODUCTS.map(p => 
        `ID: ${p.id}, Name: ${p.nameEn}, Price: ${region === 'EG' ? p.price + ' EGP' : p.priceSAR + ' SAR'}, Category: ${p.category}`
      ).join(', ');

      const systemInstruction = `
        You are "THREAD STYLIST", a high-end streetwear fashion expert for THREAD brand.
        Tone: Professional, cool, polite Arabic.
        Context: ${productContext}
        Response Rule: You must ONLY return a valid JSON object.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ role: 'user', parts: [{ text: currentInput }] }],
        config: {
          systemInstruction: systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              reply: { type: Type.STRING, description: "Your stylistic advice or response" },
              suggestedProductIds: { 
                type: Type.ARRAY, 
                items: { type: Type.INTEGER },
                description: "Array of product IDs from the context provided"
              }
            },
            required: ["reply"]
          }
        },
      });

      // Correctly access .text property
      const jsonStr = response.text || "{}";
      const data = JSON.parse(jsonStr);
      
      const suggested = (data.suggestedProductIds || [])
        .map((id: number) => PRODUCTS.find(p => p.id === id))
        .filter((p): p is Product => !!p);

      setMessages(prev => [...prev, { 
        role: 'model', 
        text: data.reply || (lang === 'ar' ? "أهلاً بك، كيف أقدر أساعدك؟" : "How can I help you today?"),
        suggestedProducts: suggested
      }]);
    } catch (error) {
      console.error("Stylist API Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: lang === 'ar' ? "عذراً، واجهت مشكلة تقنية بسيطة." : "Sorry, I hit a small snag." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-24 end-6 z-[120]">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-xl font-black shadow-lg transition-all hover:scale-110 active:scale-95 border border-white/10"
          >
            <span className="text-xl animate-pulse">✨</span>
            <span className="hidden sm:inline italic uppercase tracking-tighter text-xs">
              {lang === 'ar' ? 'اسأل الستايلست' : 'ASK STYLIST'}
            </span>
          </button>
        )}
      </div>

      {isOpen && (
        <div className="fixed bottom-6 end-6 z-[130] w-[calc(100vw-3rem)] sm:w-[380px] h-[600px] max-h-[85vh] glass-card rounded-[2.5rem] border border-primary/20 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
          <div className="p-5 bg-primary text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black text-primary rounded-xl flex items-center justify-center font-black italic shadow-2xl">T</div>
              <div>
                <h3 className="font-black text-xs italic uppercase tracking-widest">THREAD STYLIST</h3>
                <span className="text-[8px] opacity-80 uppercase font-bold tracking-widest">Online & Ready ⚡</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-all p-2 bg-black/10 rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-dark-950/90 custom-scrollbar">
            {messages.length === 0 && (
              <div className="text-center py-10 space-y-4">
                <div className="text-4xl opacity-50">👟</div>
                <p className="text-gray-400 font-bold italic text-sm px-6">
                  {lang === 'ar' 
                    ? "أهلاً بك في ثريد! أنا هنا لأساعدك تختار المقاس والستايل اللي يناسبك.. اطلب مني أي نصيحة!" 
                    : "Welcome to THREAD! I'm here to help you find the perfect fit and style. Need any advice?"}
                </p>
              </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} space-y-2`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-xs font-bold shadow-xl ${
                  m.role === 'user' ? 'bg-primary text-white italic rounded-tr-none' : 'glass text-white rounded-tl-none border-white/10'
                }`}>
                  {m.text}
                </div>
                {m.suggestedProducts && m.suggestedProducts.length > 0 && (
                  <div className="flex gap-4 overflow-x-auto w-full py-2 no-scrollbar">
                    {m.suggestedProducts.map(p => (
                      <div key={p.id} className="min-w-[160px] glass-card p-4 rounded-3xl border-white/5 space-y-4 shrink-0 hover:border-primary/50 transition-all">
                        <img src={p.colors[0].images[0]} className="w-full h-28 object-cover rounded-2xl shadow-lg" alt="" />
                        <div className="space-y-2">
                           <h4 className="text-[10px] font-black uppercase text-white truncate">{lang === 'ar' ? p.nameAr : p.nameEn}</h4>
                           <button onClick={() => onQuickView(p)} className="w-full bg-white text-dark-950 py-2 rounded-xl text-[9px] font-black uppercase hover:bg-primary hover:text-white transition-all">
                             View 🔥
                           </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && <div className="flex gap-2 p-3"><div className="w-2 h-2 bg-primary rounded-full animate-bounce" /><div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" /></div>}
          </div>

          <div className="p-4 bg-dark-900 border-t border-white/10">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                placeholder={lang === 'ar' ? "اسألني عن أي قطعة..." : "Ask me anything..."}
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs focus:border-primary outline-none text-white font-bold" 
              />
              <button onClick={() => handleSend()} disabled={isTyping || !input.trim()} className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center hover:scale-105 active:scale-90 transition-all shadow-xl shadow-primary/20 disabled:opacity-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;