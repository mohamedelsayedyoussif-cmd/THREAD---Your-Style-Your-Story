
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../components/LanguageProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface Props {
  products: Product[];
  onAddToCart: (p: Product) => void; // Used for QuickView trigger here
}

const Collections: React.FC<Props> = ({ products, onAddToCart }) => {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'men' | 'women'>('all');

  const filteredProducts = useMemo(() => {
    if (filter === 'all') return products;
    return products.filter(p => p.gender === filter);
  }, [filter, products]);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div>
              <h1 className="text-5xl font-black text-white uppercase tracking-tighter">
                {lang === 'ar' ? 'جميع المجموعات' : 'All Collections'}
              </h1>
              <div className="w-20 h-2 bg-primary mt-4" />
            </div>
            
            <div className="flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/10">
              {(['all', 'men', 'women'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-8 py-3 rounded-xl font-bold transition-all uppercase text-sm ${
                    filter === f 
                    ? 'bg-primary text-dark-900 shadow-lg shadow-primary/20' 
                    : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {f === 'all' ? (lang === 'ar' ? 'الكل' : 'All') : 
                   f === 'men' ? (lang === 'ar' ? 'رجال' : 'Men') : 
                   (lang === 'ar' ? 'نساء' : 'Women')}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={onAddToCart} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
