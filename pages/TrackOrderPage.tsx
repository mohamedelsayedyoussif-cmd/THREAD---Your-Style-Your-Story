
import React, { useState, useEffect } from 'react';
import InfoPageLayout from '../components/InfoPageLayout';
import { useLanguage } from '../components/LanguageProvider';

const TrackOrderPage: React.FC = () => {
  const { lang } = useLanguage();
  const [orderNum, setOrderNum] = useState('');
  const [phone, setPhone] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('last_track');
    if (saved) {
      setResult(JSON.parse(saved));
    }
  }, []);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNum || !phone) return;

    setIsTracking(true);
    // Demo logic
    setTimeout(() => {
      const demoResult = {
        orderId: orderNum,
        status: 2, // 0: Received, 1: Processing, 2: Out for delivery, 3: Delivered
        date: new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US'),
        estDelivery: lang === 'ar' ? 'خلال 24 ساعة' : 'Within 24 hours'
      };
      setResult(demoResult);
      localStorage.setItem('last_track', JSON.stringify(demoResult));
      setIsTracking(false);
    }, 1500);
  };

  const statuses = [
    { ar: 'تم استلام الطلب', en: 'Order Received' },
    { ar: 'قيد التجهيز', en: 'Processing' },
    { ar: 'خرج للتوصيل', en: 'Out for delivery' },
    { ar: 'تم التسليم', en: 'Delivered' }
  ];

  return (
    <InfoPageLayout 
      titleAr="تتبع طلبك" 
      titleEn="Track Order" 
      subtitleAr="ابق على اطلاع دائم بمكان شحنتك وموعد وصولها المتوقع." 
      subtitleEn="Stay up to date with your shipment's location and expected arrival time."
      icon="📦"
    >
      <div className="space-y-12">
        <section className="glass p-10 rounded-[3rem] border-white/5 space-y-8">
           <form onSubmit={handleTrack} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 px-2">{lang === 'ar' ? 'رقم الطلب' : 'Order Number'}</label>
                  <input 
                    type="text" 
                    required
                    placeholder="#12345"
                    value={orderNum}
                    onChange={(e) => setOrderNum(e.target.value)}
                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 px-2">{lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="01xxxxxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none font-bold"
                  />
                </div>
              </div>
              <button 
                disabled={isTracking}
                className="w-full bg-primary text-dark-900 py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
              >
                {isTracking ? (lang === 'ar' ? 'جاري البحث...' : 'Tracking...') : (lang === 'ar' ? 'تتبع الآن' : 'Track Now')}
              </button>
           </form>

           <div className="text-center p-4 bg-accent-neon/10 rounded-2xl border border-accent-neon/20">
              <p className="text-xs text-accent-neon font-bold uppercase tracking-widest">
                {lang === 'ar' ? '⚠️ هذه نسخة تجريبية — سيتم الربط قريباً بنظام الشحن الفعلي' : '⚠️ DEMO PAGE — Real shipping integration coming soon'}
              </p>
           </div>
        </section>

        {result && (
          <section className="animate-fade-in space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 glass p-8 rounded-3xl border-primary/20">
               <div>
                  <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{lang === 'ar' ? 'حالة الطلب' : 'Order Status'}</h4>
                  <p className="text-2xl font-black text-white">{lang === 'ar' ? statuses[result.status].ar : statuses[result.status].en}</p>
               </div>
               <div className="text-center md:text-end">
                  <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{lang === 'ar' ? 'موعد الوصول المتوقع' : 'Estimated Arrival'}</h4>
                  <p className="text-2xl font-black text-primary italic">{result.estDelivery}</p>
               </div>
            </div>

            <div className="relative pt-12">
               <div className="absolute top-12 left-0 right-0 h-1 bg-white/5" />
               <div className="grid grid-cols-4 gap-4">
                  {statuses.map((s, idx) => (
                    <div key={idx} className={`relative text-center space-y-3 ${idx <= result.status ? 'opacity-100' : 'opacity-20'}`}>
                       <div className={`w-8 h-8 rounded-full mx-auto relative z-10 border-4 border-dark-900 ${idx <= result.status ? 'bg-primary' : 'bg-gray-700'}`} />
                       <span className="block text-[10px] font-black uppercase tracking-tighter leading-tight">
                         {lang === 'ar' ? s.ar : s.en}
                       </span>
                    </div>
                  ))}
               </div>
            </div>
          </section>
        )}
      </div>
    </InfoPageLayout>
  );
};

export default TrackOrderPage;
