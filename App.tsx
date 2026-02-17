
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './components/LanguageProvider.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Hero from './sections/Hero.tsx';
import TrustBar from './sections/TrustBar.tsx';
import AboutStory from './sections/AboutStory.tsx';
import WhyUs from './sections/WhyUs.tsx';
import HelpCenter from './sections/HelpCenter.tsx';
import FAQ from './sections/FAQ.tsx';
import SizeGuide from './sections/SizeGuide.tsx';
import Contact from './pages/Contact.tsx';
import ProductCard from './components/ProductCard.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import WishlistPage from './pages/WishlistPage.tsx';
import FAQPage from './pages/FAQPage.tsx';
import SizeGuidePage from './pages/SizeGuidePage.tsx';
import ShippingPage from './pages/ShippingPage.tsx';
import ReturnsPage from './pages/ReturnsPage.tsx';
import TrackOrderPage from './pages/TrackOrderPage.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import TermsPage from './pages/TermsPage.tsx';
import Collections from './pages/Collections.tsx';
import Cart from './pages/Cart.tsx';
import Checkout from './pages/Checkout.tsx';
import QuickViewModal from './components/QuickViewModal.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import { Product, ProductColor, CartItem } from './types.ts';
import { PRODUCTS } from './lib/products.ts';

// Utility to handle scrolling to sections or top of page
const ScrollManager = () => {
  const { pathname, state } = useLocation();
  
  useEffect(() => {
    if (state && (state as any).scrollTo) {
      const id = (state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
};

const SectionHeader: React.FC<{ 
  titleAr: string; 
  titleEn: string; 
  badgeAr?: string; 
  badgeEn?: string;
  showLink?: boolean;
}> = ({ titleAr, titleEn, badgeAr, badgeEn, showLink = true }) => {
  const { lang } = useLanguage();
  return (
    <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
      <div className="flex flex-col items-start text-start">
        {badgeAr && (
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2">
            {lang === 'ar' ? badgeAr : badgeEn}
          </span>
        )}
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
          {lang === 'ar' ? titleAr : titleEn}
        </h2>
        <div className="w-16 h-1.5 bg-primary mt-4 rounded-full" />
      </div>
      
      {showLink && (
        <Link 
          to="/collections" 
          className="text-sm font-bold text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
        >
          {lang === 'ar' ? 'عرض الكل' : 'View All'}
          <svg className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </div>
  );
};

const HomePage: React.FC<{ onQuickView: (p: Product) => void }> = ({ onQuickView }) => {
  const { lang } = useLanguage();

  // Categorize products for sections
  const newArrivals = PRODUCTS.filter(p => p.badgeEn === 'NEW').slice(0, 4);
  const mensCollection = PRODUCTS.filter(p => p.gender === 'men' && p.category === 'clothing').slice(0, 4);
  const womensCollection = PRODUCTS.filter(p => p.gender === 'women' && p.category === 'clothing').slice(0, 4);
  const accessories = PRODUCTS.filter(p => p.category === 'accessories').slice(0, 4);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        
        {/* 1. New Arrivals Section */}
        <section id="new" className="py-24 px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <SectionHeader titleAr="وصل حديثاً" titleEn="New Arrivals" badgeAr="الأحدث" badgeEn="Latest" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {newArrivals.map((p, idx) => (
                <ProductCard key={p.id} product={p} onQuickView={onQuickView} priority={idx < 4} />
              ))}
            </div>
          </div>
        </section>

        {/* 2. Accessories Section */}
        <section id="accessories" className="py-24 px-4 bg-dark-800 scroll-mt-20 relative overflow-hidden">
          <div className="absolute top-0 end-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="max-w-7xl mx-auto">
            <SectionHeader titleAr="الإكسسوارات" titleEn="Accessories" badgeAr="عصري" badgeEn="Trendy" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {accessories.map((p) => (
                <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Men's Section */}
        <section id="men" className="py-24 px-4 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <SectionHeader titleAr="تشكيلة الرجال" titleEn="Men's Collection" badgeAr="رجالي" badgeEn="Men" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {mensCollection.map((p) => (
                <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
              ))}
            </div>
          </div>
        </section>

        <WhyUs />
        <AboutStory />

        {/* 4. Women's Section */}
        <section id="women" className="py-24 px-4 bg-dark-800 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <SectionHeader titleAr="تشكيلة النساء" titleEn="Women's Collection" badgeAr="حريمي" badgeEn="Women" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {womensCollection.map((p) => (
                <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
              ))}
            </div>
          </div>
        </section>

        <FAQ />
        <SizeGuide />
        <HelpCenter />
        <Contact />
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
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage onQuickView={setQuickViewProduct} />} />
        <Route path="/collections" element={<Collections products={PRODUCTS} onAddToCart={(p) => setQuickViewProduct(p)} />} />
        <Route path="/cart" element={<Cart cartItems={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cartItems={cart} />} />
        <Route path="/product/:id" element={<ProductDetail products={PRODUCTS} onAddToCartDirect={addToCart} />} />
        <Route path="/wishlist" element={<WishlistPage products={PRODUCTS} onQuickView={setQuickViewProduct} />} />
        
        {/* Info Routes */}
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/track" element={<TrackOrderPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>

      {/* Global Modals & Helpers */}
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
          onAddToCart={addToCart}
        />
      )}

      <FloatingWhatsApp />
      <AIAssistant />

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
