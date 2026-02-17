
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../components/LanguageProvider';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout: React.FC = () => {
  const { lang, region } = useLanguage();
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ fullName: '', phone: '', city: '', address: '', paymentMethod: 'COD' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (region === 'EG' ? item.product.price : item.product.priceSAR) * item.quantity, 0);
  const shipping = subtotal > (region === 'EG' ? 500 : 200) ? 0 : (region === 'EG' ? 50 : 35);
  const total = subtotal + shipping;
  const currency = region === 'EG' ? 'EGP' : 'SAR';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setSuccess(true);
      setIsProcessing(false);
      
      // WhatsApp Integration (Keep as final step)
      const details = cart.map(i => `- ${i.product.nameAr} (${i.selectedColor.nameAr}) [x${i.quantity}]`).join('\n');
      const message = `*طلب جديد من THREAD*\n*الاسم:* ${formData.fullName}\n*الموبايل:* ${formData.phone}\n*المدينة:* ${formData.city}\n*العنوان:* ${formData.address}\n\n*المنتجات:*\n${details}\n\n*الإجمالي:* ${total} ${currency}`;
      
      window.open(`https://wa.me/201033776986?text=${encodeURIComponent(message)}`, '_blank');
      
      setTimeout(() => {
        clearCart();
        navigate('/');
      }, 3000);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
        <div className="glass p-12 rounded-[3rem] text-center space-y-6 max-w-md border-primary/20 animate-bounce-in">
          <div className="text-7xl">🎉</div>
          <h2 className="text-3xl font-black text-white">{lang === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Order Received Successfully!'}</h2>
          <p className="text-gray-400 font-bold">{lang === 'ar' ? 'سيتم التواصل معك لتأكيد الشحن.' : 'We will contact you to confirm shipping.'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">{lang === 'ar' ? 'إتمام الطلب' : 'Checkout'}</h2>
            <form onSubmit={handleSubmit} className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
              <input type="text" required placeholder={lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'} value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary text-white font-bold" />
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="tel" required placeholder={lang === 'ar' ? 'رقم الموبايل' : 'Phone Number'} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary text-white font-bold" />
                <input type="text" required placeholder={lang === 'ar' ? 'المدينة' : 'City'} value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary text-white font-bold" />
              </div>
              <textarea required placeholder={lang === 'ar' ? 'العنوان بالتفصيل' : 'Detailed Address'} value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary text-white font-bold resize-none" rows={3} />
              
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-white/60">{lang === 'ar' ? 'طريقة الدفع' : 'Payment Method'}</h4>
                <div className="flex gap-4">
                  {['COD', 'Card'].map(m => (
                    <button key={m} type="button" onClick={() => setFormData({...formData, paymentMethod: m})} className={`flex-1 py-4 rounded-xl border-2 font-black text-xs ${formData.paymentMethod === m ? 'border-primary bg-primary/10 text-primary' : 'border-white/5 glass text-gray-400'}`}>
                      {m === 'COD' ? (lang === 'ar' ? 'كاش عند الاستلام' : 'COD') : (lang === 'ar' ? 'بطاقة بنكية' : 'Card')}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" disabled={isProcessing || cart.length === 0} className="w-full bg-primary text-dark-900 py-6 rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                {isProcessing ? '...' : (lang === 'ar' ? 'تأكيد الطلب ⚡' : 'Confirm Order ⚡')}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">{lang === 'ar' ? 'ملخص السلة' : 'Bag Summary'}</h2>
            <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
              <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 bg-white/5 p-4 rounded-2xl items-center">
                    <img src={item.selectedColor.images[0]} className="w-16 h-20 rounded-xl object-cover" alt="" />
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-sm">{lang === 'ar' ? item.product.nameAr : item.product.nameEn}</h4>
                      <p className="text-[10px] text-gray-500 uppercase">{item.selectedSize} | {item.quantity} x {region === 'EG' ? item.product.price : item.product.priceSAR} {currency}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10 space-y-3 font-bold text-sm">
                <div className="flex justify-between text-gray-400"><span>{lang === 'ar' ? 'المجموع' : 'Subtotal'}</span><span>{subtotal} {currency}</span></div>
                <div className="flex justify-between text-gray-400"><span>{lang === 'ar' ? 'الشحن' : 'Shipping'}</span><span className={shipping === 0 ? 'text-accent-neon' : ''}>{shipping === 0 ? 'FREE' : `${shipping} ${currency}`}</span></div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                  <span className="text-xl font-black text-white">{lang === 'ar' ? 'الإجمالي' : 'Total'}</span>
                  <span className="text-4xl font-black text-primary italic">{total} {currency}</span>
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

export default Checkout;
