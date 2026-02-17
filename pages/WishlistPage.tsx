
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../components/LanguageProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  products: Product[];
  onQuickView: (p: Product) => void;
}

const WishlistPage: React.FC<Props> = ({ products, onQuickView }) => {
  const { lang } = useLanguage();
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  const loadWishlist = () => {
    const savedIds = JSON.parse(localStorage.getItem('thread_wishlist') || '[]');
    const filtered = products.filter(p => savedIds.includes(p.id));
    setWishlistItems(filtered);
  };

  useEffect(() => {
    loadWishlist();
    window.addEventListener('wishlistUpdated', loadWishlist);
    return () => window.removeEventListener('wishlistUpdated', loadWishlist);
  }, [products]);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
              {lang === 'ar' ? 'قائمة الأمنيات' : 'My Wishlist'}
            </h1>
            <div className="w-20 h-2 bg-primary mt-4" />
          </div>

          {wishlistItems.length === 0 ? (
            <div className="glass p-16 rounded-[3rem] text-center space-y-8 border-white/5">
              <div className="text-6xl opacity-20">❤️</div>
              <p className="text-2xl text-gray-400 font-light italic">
                {lang === 'ar' ? 'لم تقم بإضافة أي منتجات بعد.' : 'You haven\'t added any favorites yet.'}
              </p>
              <Link 
                to="/collections"
                className="inline-block bg-primary text-dark-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105"
              >
                {lang === 'ar' ? 'استكشف المجموعات' : 'Explore Collections'}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishlistItems.map((p) => (
                <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WishlistPage;
