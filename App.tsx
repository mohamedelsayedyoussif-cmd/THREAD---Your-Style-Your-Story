
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './components/LanguageProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import ProductCard from './components/ProductCard';
import FAQPage from './pages/FAQPage';
import SizeGuidePage from './pages/SizeGuidePage';
import ShippingPage from './pages/ShippingPage';
import ReturnsPage from './pages/ReturnsPage';
import TrackOrderPage from './pages/TrackOrderPage';
import Collections from './pages/Collections';
import Cart from './pages/Cart';
import QuickViewModal from './components/QuickViewModal';
import { Product, ProductColor, CartItem } from './types';
import { PRODUCTS } from './lib/products';

const HomePage: React.FC<{ onQuickView: (p: Product) => void }> = ({ onQuickView }) => {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        
        {/* Featured Sections */}
        <section id="men" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">
              {lang === 'ar' ? 'تشكيلة الرجال' : "Men's Collection"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.filter(p => p.gender === 'men').map((p, idx) => (
                <ProductCard key={p.id} product={p} onQuickView={onQuickView} priority={idx < 4} />
              ))}
            </div>
          </div>
        </section>

        <section id="women" className="py-24 px-4 bg-dark-800">
          <div className="max-w-7xl mx-auto">
             <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">
               {lang === 'ar' ? 'تشكيلة النساء' : "Women's Collection"}
             </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {PRODUCTS.filter(p => p.gender === 'women').map(p => (
                  <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
                ))}
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (product: Product, color: ProductColor, size: string) => {
    const cartId = `${product.id}-${color.id}-${size}`;
    setCart(prev => {
      const existing = prev.find(item => item.id === cartId);
      if (existing) {
        return prev.map(item => 
          item.id === cartId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: cartId, product, selectedColor: color, selectedSize: size, quantity: 1 }];
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage onQuickView={setQuickViewProduct} />} />
        <Route path="/collections" element={<Collections products={PRODUCTS} onAddToCart={(p) => setQuickViewProduct(p)} />} />
        <Route path="/cart" element={<Cart cartItems={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />} />
        
        {/* Info Routes */}
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/track" element={<TrackOrderPage />} />
      </Routes>

      {/* Global Modals */}
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
          onAddToCart={addToCart}
        />
      )}

      {showToast && (
        <div className="fixed top-24 right-4 z-[110] animate-bounce-in">
           <div className="bg-white text-dark-900 p-4 rounded-2xl shadow-2xl flex items-center gap-4 border-l-4 border-primary">
              <span className="text-2xl">✅</span>
              <p className="font-bold">تمت الإضافة للسلة!</p>
           </div>
        </div>
      )}
    </LanguageProvider>
  );
};

export default App;
