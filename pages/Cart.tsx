
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartItem } from '../types';

interface Props {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const Cart: React.FC<Props> = ({ cartItems, onUpdateQuantity, onRemove }) => {
  const { lang, region } = useLanguage();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, item) => {
    const price = region === 'EG' ? item.product.price : item.product.priceSAR;
    return acc + (price * item.quantity);
  }, 0);

  const shipping = region === 'EG' 
    ? (subtotal > 500 ? 0 : 50) 
    : (subtotal > 200 ? 0 : 35);

  const currency = region === 'EG' ? 'EGP' : 'SAR';

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-12 flex items-center gap-4 italic uppercase">
             🛒 {lang === 'ar' ? 'سلة التسوق' : 'Your Shopping Bag'}
             <span className="text-lg font-normal text-gray-500">({cartItems.length} {lang === 'ar' ? 'منتجات' : 'Items'})</span>
          </h1>

          {cartItems.length === 0 ? (
            <div className="glass p-16 rounded-[3rem] text-center space-y-8 border-white/5">
              <div className="text-6xl opacity-20">🛍️</div>
              <p className="text-2xl text-gray-400 font-light italic">
                {lang === 'ar' ? 'سلتك فارغة حالياً.' : 'Your bag is empty.'}
              </p>
              <button 
                onClick={() => navigate('/collections')}
                className="bg-primary text-dark-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105"
              >
                {lang === 'ar' ? 'تسوق الآن' : 'Shop Now'}
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="glass p-6 rounded-3xl border-white/5 flex gap-6 items-center">
                    <div className="w-24 h-32 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                      <img src={item.selectedColor.images[0]} alt={item.product.nameEn} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-white truncate italic uppercase tracking-tighter">
                        {lang === 'ar' ? item.product.nameAr : item.product.nameEn}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-400 font-black uppercase tracking-widest">
                         <span>{lang === 'ar' ? item.selectedColor.nameAr : item.selectedColor.nameEn}</span>
                         <span className="w-1 h-1 bg-white/20 rounded-full" />
                         <span>{lang === 'ar' ? 'مقاس' : 'Size'} {item.selectedSize}</span>
                      </div>
                      <p className="text-primary font-black mt-2 text-xl italic">{region === 'EG' ? item.product.price : item.product.priceSAR} {currency}</p>
                      <div className="mt-4 flex items-center gap-4">
                         <div className="flex items-center bg-white/5 rounded-xl border border-white/10">
                            <button onClick={() => onUpdateQuantity(item.id, -1)} className="px-4 py-2 hover:text-primary font-black">-</button>
                            <span className="w-8 text-center font-black">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.id, 1)} className="px-4 py-2 hover:text-primary font-black">+</button>
                         </div>
                         <button onClick={() => onRemove(item.id)} className="text-[10px] font-black uppercase text-red-500 hover:underline">
                           {lang === 'ar' ? 'إزالة' : 'Remove'}
                         </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass p-8 rounded-[2rem] border-primary/20 space-y-6 h-fit sticky top-32 shadow-2xl">
                 <h3 className="text-xl font-black text-white border-b border-white/5 pb-4 uppercase italic tracking-tighter">
                   {lang === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
                 </h3>
                 <div className="space-y-4 text-gray-400 font-bold text-sm">
                    <div className="flex justify-between">
                      <span>{lang === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}</span>
                      <span className="text-white">{subtotal} {currency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{lang === 'ar' ? 'الشحن' : 'Shipping'}</span>
                      <span className={shipping === 0 ? 'text-accent-neon font-black' : 'text-white'}>
                        {shipping === 0 ? (lang === 'ar' ? 'مجاني' : 'FREE') : `${shipping} ${currency}`}
                      </span>
                    </div>
                 </div>
                 <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                    <span className="text-lg font-black text-white uppercase italic">{lang === 'ar' ? 'الإجمالي' : 'Total'}</span>
                    <span className="text-3xl font-black text-primary italic tracking-tighter">{subtotal + shipping} {currency}</span>
                 </div>
                 <Link 
                   to="/checkout"
                   className="block w-full text-center bg-primary text-dark-900 py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all italic"
                 >
                   {lang === 'ar' ? 'إتمام الشراء' : 'Checkout Now'}
                 </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
