
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './components/LanguageProvider.tsx';
import { CartProvider, useCart } from './context/CartContext.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Hero from './sections/Hero.tsx';
import TrustBar from './sections/TrustBar.tsx';
import WhyUs from './sections/WhyUs.tsx';
import FAQ from './sections/FAQ.tsx';
import SizeGuide from './sections/SizeGuide.tsx';
import AboutStory from './sections/AboutStory.tsx';
import PaymentMethods from './sections/PaymentMethods.tsx';
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
import AnnouncementBar from './components/AnnouncementBar.tsx';
import CategoryChips from './components/CategoryChips.tsx';
import FlashSale from './sections/FlashSale.tsx';
import StyleQuiz from './sections/StyleQuiz.tsx';
import ReviewsUGC from './sections/ReviewsUGC.tsx';
import Newsletter from './sections/Newsletter.tsx';
import MobileBottomNav from './components/MobileBottomNav.tsx';
import { Product, ProductColor } from './types.ts';
import { PRODUCTS } from './lib/products.ts';

const ScrollManager = () => {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state && (state as any).scrollTo) {
      const id = (state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navOffset = 130; 
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);
  return null;
};

const HomePage: React.FC<{ onQuickView: (p: Product) => void }> = ({ onQuickView }) => {
  const { lang } = useLanguage();
  
  const bestSellers = PRODUCTS.filter(p => p.tags.includes('Best Seller') || p.badgeEn === 'Best Seller');
  const newArrivals = PRODUCTS.filter(p => p.badgeEn?.includes('New') || p.tags.includes('New Arrival'));
  const menSection = PRODUCTS.filter(p => p.gender === 'men');
  const womenSection = PRODUCTS.filter(p => p.gender === 'women');

  // Unified Section Heading Class - Scaled down for elegance
  const sectionHeadingClass = "text-3xl md:text-5xl font-black mb-10 uppercase italic tracking-tighter font-heading text-dark-950 dark:text-white text-glow";

  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBar />
      <CategoryChips />
      
      <section id="best-sellers" className="py-16 px-4 scroll-mt-[180px]">
        <div className="max-w-7xl mx-auto">
          <h2 className={sectionHeadingClass}>
            {lang === 'ar' ? 'الأكثر مبيعاً 🔥' : 'Best Sellers 🔥'}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {bestSellers.map(p => <ProductCard key={p.id} product={p} onQuickView={onQuickView} />)}
          </div>
        </div>
      </section>

      <FlashSale />

      <section id="men" className="py-16 px-4 bg-gray-50 dark:bg-dark-900 scroll-mt-[180px]">
        <div className="max-w-7xl mx-auto">
          <h2 className={sectionHeadingClass}>
            {lang === 'ar' ? 'قسم الرجال 👟' : 'Men Section 👟'}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {menSection.map(p => <ProductCard key={p.id} product={p} onQuickView={onQuickView} />)}
          </div>
        </div>
      </section>

      <section id="new" className="py-16 px-4 scroll-mt-[180px]">
        <div className="max-w-7xl mx-auto">
          <h2 className={sectionHeadingClass}>
            {lang === 'ar' ? 'وصل حديثاً ✨' : 'New Drops ✨'}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {newArrivals.map(p => <ProductCard key={p.id} product={p} onQuickView={onQuickView} />)}
          </div>
        </div>
      </section>

      <section id="women" className="py-16 px-4 bg-gray-50 dark:bg-dark-900 scroll-mt-[180px]">
        <div className="max-w-7xl mx-auto">
          <h2 className={sectionHeadingClass}>
            {lang === 'ar' ? 'قسم النساء 👗' : 'Women Section 👗'}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {womenSection.map(p => <ProductCard key={p.id} product={p} onQuickView={onQuickView} />)}
          </div>
        </div>
      </section>

      <StyleQuiz />
      <div id="about" className="scroll-mt-[180px]"><AboutStory /></div>
      <WhyUs />
      <div id="reviews" className="scroll-mt-[180px]"><ReviewsUGC /></div>
      <SizeGuide />
      <Newsletter />
      <PaymentMethods />
      <div id="faq" className="scroll-mt-[180px]"><FAQ /></div>
      <Contact />
    </div>
  );
};

const AppContent = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useCart();
  const { lang } = useLanguage();

  const handleAddToCart = (p: Product, c: ProductColor, s: string, q: number) => {
    addToCart(p, c, s, q);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 text-dark-950 dark:text-white selection:bg-primary selection:text-white overflow-x-hidden pt-[36px] transition-colors duration-500">
      <AnnouncementBar />
      <Navbar />
      <ScrollManager />
      <main className="relative z-10 pb-20 lg:pb-0">
        <Routes>
          <Route path="/" element={<HomePage onQuickView={setQuickViewProduct} />} />
          <Route path="/collections" element={<Collections products={PRODUCTS} onQuickView={setQuickViewProduct} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetail products={PRODUCTS} onAddToCartDirect={(p, c, s) => handleAddToCart(p, c, s, 1)} />} />
          <Route path="/wishlist" element={<WishlistPage products={PRODUCTS} onQuickView={setQuickViewProduct} />} />
          <Route path="/size-guide" element={<SizeGuidePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/track" element={<TrackOrderPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
      
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
          onAddToCart={handleAddToCart} 
        />
      )}
      
      <FloatingWhatsApp />
      <AIAssistant onQuickView={setQuickViewProduct} />
      <MobileBottomNav />
      
      {showToast && (
        <div className="fixed top-28 right-4 z-[200] animate-in fade-in slide-in-from-right-10">
          <div className="bg-primary text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-3 font-black border border-white/10">
            <span className="text-sm">✅</span>
            <p className="italic uppercase tracking-tighter text-[10px]">
              {lang === 'ar' ? 'تمت الإضافة!' : 'Added to Bag!'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;
