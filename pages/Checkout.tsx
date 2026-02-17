
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../components/LanguageProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartItem } from '../types';

interface Props {
  cartItems: CartItem[];
}

const Checkout: React.FC<Props> = ({ cartItems }) => {
  const { lang, region } = useLanguage();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    address: '',
    notes: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = region === 'EG' ? item.product.price : item.product.priceSAR;
    return acc + (price * item.quantity);
  }, 0);

  const shipping = region === 'EG' 
    ? (subtotal > 500 ? 0 : 50) 
    : (subtotal > 200 ? 0 : 35);

  const total = subtotal + shipping;
  const currency = region === 'EG' ? 'EGP' : 'SAR';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const egyptCities = ["القاهرة", "الجيزة", "الإسكندرية", "الدقهلية", "البحر الأحمر", "البحيرة", "الفيوم", "الغربية", "الإسماعيلية", "المنوفية", "المنيا", "القليوبية", "الوادي الجديد", "السويس", "الشرقية", "دمياط", "بورسعيد", "جنوب سيناء", "كفر الشيخ", "مطروح", "قنا", "شمال سيناء", "سوهاج", "بني سويف", "الأقصر", "أسوان", "أسيوط"];
  const saudiCities = ["الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام", "الخبر", "أبها", "الطائف", "تبوك", "بريدة", "حائل", "نجران", "الجوف", "الباحة", "جازان", "عرعر", "ينبع", "الجبيل"];
  
  const currentCities = region === 'EG' ? egyptCities : saudiCities;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const orderDetails = cartItems.map(item => 
      `- ${item.product.nameAr} (${item.selectedColor.nameAr}) - مقاس: ${item.selectedSize} [x${item.quantity}]`
    ).join('\n');

    const message = `*طلب جديد من THREAD ${region}* ${region === 'EG' ? '🇪🇬' : '🇸🇦'}\n\n` +
      `*الاسم:* ${formData.fullName}\n` +
      `*الهاتف:* ${formData.phone}\n` +
      `*المدينة:* ${formData.city}\n` +
      `*العنوان:* ${formData.address}\n\n` +
      `*المنتجات:*\n${orderDetails}\n\n` +
      `*الإجمالي:* ${total} ${currency}\n\n` +
      `شكراً لتسوقك من ثريد!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = region === 'EG' 
      ? `https://wa.me/201033776986?text=${encodedMessage}` 
      : `https://wa.me/966500000000?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-white italic uppercase">{lang === 'ar' ? 'بيانات الشحن' : 'Shipping'}</h2>
              <form onSubmit={handleSubmit} className="glass p-8 sm:p-10 rounded-[2.5rem] border-white/5 space-y-6">
                <input type="text" name="fullName" required placeholder={lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'} value={formData.fullName} onChange={handleInputChange} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none font-bold text-white transition-all" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="tel" name="phone" required placeholder={lang === 'ar' ? 'رقم الهاتف' : 'Phone'} value={formData.phone} onChange={handleInputChange} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none font-bold text-white transition-all" />
                  <select name="city" required value={formData.city} onChange={handleInputChange} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none font-bold text-white appearance-none">
                    <option value="" disabled>{lang === 'ar' ? 'اختر المدينة' : 'Select City'}</option>
                    {currentCities.map(city => <option key={city} value={city} className="bg-dark-800">{city}</option>)}
                  </select>
                </div>
                <textarea name="address" required rows={3} placeholder={lang === 'ar' ? 'العنوان بالتفصيل' : 'Detailed Address'} value={formData.address} onChange={handleInputChange} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none font-bold text-white resize-none" />
                <button type="submit" disabled={isLoading} className="w-full bg-[#25D366] text-dark-900 py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-4">
                   {isLoading ? '...' : (lang === 'ar' ? 'تأكيد الطلب عبر واتساب' : 'Confirm via WhatsApp')}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-black text-white italic uppercase">{lang === 'ar' ? 'الملخص' : 'Summary'}</h2>
              <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
                 <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl">
                        <img src={item.selectedColor.images[0]} className="w-16 h-20 rounded-xl object-cover" alt="" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold truncate text-sm">{lang === 'ar' ? item.product.nameAr : item.product.nameEn}</h4>
                          <div className="flex justify-between items-center mt-2 font-black">
                             <span className="text-primary">{region === 'EG' ? item.product.price : item.product.priceSAR} {currency}</span>
                             <span className="text-xs text-white px-2 py-0.5 bg-white/10 rounded-lg">x{item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
                 <div className="pt-6 border-t border-white/10 space-y-4">
                    <div className="flex justify-between text-gray-400"><span>{lang === 'ar' ? 'المجموع' : 'Subtotal'}</span><span>{subtotal} {currency}</span></div>
                    <div className="flex justify-between text-gray-400"><span>{lang === 'ar' ? 'الشحن' : 'Shipping'}</span><span className={shipping === 0 ? 'text-accent-neon font-bold' : ''}>{shipping === 0 ? 'FREE' : `${shipping} ${currency}`}</span></div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                      <span className="text-lg font-black text-white">{lang === 'ar' ? 'الإجمالي' : 'Total'}</span>
                      <span className="text-4xl font-black text-primary italic">{total} {currency}</span>
                    </div>
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
