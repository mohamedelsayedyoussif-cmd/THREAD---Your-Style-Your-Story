
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
      // Corrected: Initializing inside the function call as per rules
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const productContext = PRODUCTS.map(p => 
        `ID: ${p.id}, Name: ${p.nameEn}, Price: ${region === 'EG' ? p.price + ' EGP' : p.priceSAR + ' SAR'}, Category: ${p.category}`
      ).join(', ');

      const systemInstruction = `
        You are "THREAD STYLIST", a high-end streetwear fashion expert.
        Tone: Refined, professional, polite Arabic. Avoid "low-quality" slang.
        Catalog: ${productContext}
        Response: Must be a JSON object: { "reply": string, "suggestedProductIds": number[] }
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
              reply: { type: Type.STRING },
              suggestedProductIds: { type: Type.ARRAY, items: { type: Type.INTEGER } }
            },
            required: ["reply"]
          }
        },
      });

      // Corrected: accessing .text property directly
      const jsonStr = response.text || "{}";
      const data = JSON.parse(jsonStr);
      
      const suggested = (data.suggestedProductIds || [])
        .map((id: number) => PRODUCTS.find(p => p.id === id))
        .filter((p): p is Product => !!p);

      setMessages(prev => [...prev, { 
        role: 'model', 
        text: data.reply || (lang === 'ar' ? "حدث خطأ، يرجى المحاولة لاحقاً." : "Error occurred, please try again."),
        suggestedProducts: suggested
      }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: lang === 'ar' ? "المساعد منشغل حالياً." : "Stylist is busy." 
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
            className="group flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-xl font-black shadow-lg transition-all hover:scale-105 active:scale-95 border border-white/10"
          >
            <span className="text-xl group-hover:rotate-12 transition-transform">✨</span>
            <span className="hidden sm:inline italic uppercase tracking-tighter text-xs">
              {lang === 'ar' ? 'الستايلست' : 'STYLIST'}
            </span>
          </button>
        )}
      </div>

      {isOpen && (
        <div className="fixed bottom-6 end-6 z-[130] w-[calc(100vw-3rem)] sm:w-[360px] h-[550px] max-h-[80vh] glass rounded-[2rem] border border-primary/20 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
          <div className="p-4 bg-primary text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-primary rounded-lg flex items-center justify-center font-black italic shadow-inner text-xs">T</div>
              <h3 className="font-black text-xs italic uppercase tracking-tighter">THREAD STYLIST</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-all p-1.5 bg-black/10 rounded-full">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-950/90 no-scrollbar">
            {messages.length === 0 && (
              <div className="text-center py-6 space-y-3">
                <p className="text-gray-500 font-bold italic text-xs">
                  {lang === 'ar' ? "أهلاً بك.. كيف يمكنني مساعدتك في اختيار إطلالتك؟" : "How can I help you select your fit?"}
                </p>
              </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} space-y-1`}>
                <div className={`max-w-[90%] px-4 py-2.5 rounded-xl text-xs font-bold shadow-md ${
                  m.role === 'user' ? 'bg-primary text-white italic' : 'glass text-white'
                }`}>
                  {m.text}
                </div>
                {m.suggestedProducts && m.suggestedProducts.length > 0 && (
                  <div className="flex gap-3 overflow-x-auto w-full pb-2 no-scrollbar">
                    {m.suggestedProducts.map(p => (
                      <div key={p.id} className="min-w-[140px] glass p-3 rounded-2xl border-white/5 space-y-3 shrink-0">
                        <img src={p.colors[0].images[0]} className="w-full h-24 object-cover rounded-xl" alt="" />
                        <button onClick={() => onQuickView(p)} className="w-full bg-white/5 py-2 rounded-lg text-[8px] font-black uppercase hover:bg-primary transition-all">
                          Quick Look ⚡
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && <div className="flex gap-1.5 p-2"><div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" /><div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" /></div>}
          </div>

          <div className="p-3 bg-dark-900 border-t border-white/5">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                placeholder={lang === 'ar' ? "تحدث معنا..." : "Talk to stylist..."}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-primary outline-none text-white" 
              />
              <button onClick={() => handleSend()} disabled={isTyping || !input.trim()} className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center hover:scale-105 transition-all disabled:opacity-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
