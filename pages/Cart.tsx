
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageProvider';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart: React.FC = () => {
  const { lang, region } = useLanguage();
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const isEG = region === 'EG';
  const currency = isEG ? 'EGP' : 'SAR';
  const subtotal = cart.reduce((acc, item) => acc + (isEG ? item.product.price : item.product.priceSAR) * item.quantity, 0);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-12 flex items-center gap-4 italic uppercase tracking-tighter">
             🛒 {lang === 'ar' ? 'سلة التسوق' : 'Bag'}
             <span className="text-lg font-normal text-gray-500">({cart.length})</span>
          </h1>

          {cart.length === 0 ? (
            <div className="glass p-16 rounded-[3rem] text-center space-y-8 border-white/5">
              <div className="text-6xl opacity-20">🛍️</div>
              <p className="text-xl text-gray-400 font-bold italic">{lang === 'ar' ? 'سلتك فارغة يا بطل!' : 'Your bag is empty, beast!'}</p>
              <button onClick={() => navigate('/collections')} className="bg-primary text-dark-900 px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">
                {lang === 'ar' ? 'تسوق الآن' : 'Shop Now'}
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="glass p-6 rounded-3xl border-white/5 flex gap-6 items-center animate-in slide-in-from-bottom-2">
                    <img src={item.selectedColor.images[0]} className="w-24 h-32 rounded-2xl object-cover border border-white/10" alt="" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-white italic uppercase tracking-tighter">{lang === 'ar' ? item.product.nameAr : item.product.nameEn}</h3>
                      <p className="text-xs text-gray-500 uppercase font-black">{item.selectedColor.nameAr} | {item.selectedSize}</p>
                      <p className="text-primary font-black mt-2 text-xl italic">{isEG ? item.product.price : item.product.priceSAR} {currency}</p>
                      <div className="mt-4 flex items-center gap-4">
                         <div className="flex items-center bg-white/5 rounded-xl border border-white/10">
                            <button onClick={() => updateQuantity(item.id, -1)} className="px-4 py-2 hover:text-primary">-</button>
                            <span className="w-8 text-center font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="px-4 py-2 hover:text-primary">+</button>
                         </div>
                         <button onClick={() => removeFromCart(item.id)} className="text-[10px] font-black uppercase text-red-500 hover:underline">{lang === 'ar' ? 'إزالة' : 'Remove'}</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="glass p-8 rounded-[2rem] border-primary/20 space-y-6 sticky top-32">
                  <h3 className="text-xl font-black text-white italic border-b border-white/5 pb-4 uppercase">{lang === 'ar' ? 'ملخص الطلب' : 'Summary'}</h3>
                  <div className="space-y-4 font-bold text-sm text-gray-400">
                    <div className="flex justify-between"><span>{lang === 'ar' ? 'المجموع' : 'Subtotal'}</span><span className="text-white">{subtotal} {currency}</span></div>
                    <div className="flex justify-between"><span>{lang === 'ar' ? 'الشحن' : 'Shipping'}</span><span className="text-accent-neon">{lang === 'ar' ? 'مجاني فوق 500' : 'Free > 500'}</span></div>
                  </div>
                  <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                    <span className="text-lg font-black text-white">{lang === 'ar' ? 'الإجمالي' : 'Total'}</span>
                    <span className="text-3xl font-black text-primary italic">{subtotal} {currency}</span>
                  </div>
                  <Link to="/checkout" className="block w-full text-center bg-primary text-dark-900 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-[1.02] shadow-xl shadow-primary/20 transition-all">
                    {lang === 'ar' ? 'إتمام الشراء ⚡' : 'Checkout Now ⚡'}
                  </Link>
                </div>
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
