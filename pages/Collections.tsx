
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../components/LanguageProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface Props {
  products: Product[];
  onQuickView: (p: Product) => void;
}

const Collections: React.FC<Props> = ({ products, onQuickView }) => {
  const { lang } = useLanguage();
  const [genderFilter, setGenderFilter] = useState<'all' | 'men' | 'women'>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'high' | 'low' | 'new'>('rating');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (genderFilter !== 'all') result = result.filter(p => p.gender === genderFilter);
    
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'new') result.sort((a, b) => (b.badgeEn?.includes('New') ? -1 : 1));

    return result;
  }, [genderFilter, products, sortBy]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 transition-colors duration-500">
      <Navbar />
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <h1 className="text-5xl font-black text-dark-950 dark:text-white uppercase italic tracking-tighter">
              {lang === 'ar' ? 'جميع المجموعات' : 'All Collections'}
            </h1>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex gap-2 p-1 glass rounded-2xl border border-dark-950/10 dark:border-white/10">
                {(['all', 'men', 'women'] as const).map((f) => (
                  <button 
                    key={f} 
                    onClick={() => setGenderFilter(f)} 
                    className={`px-6 py-2 rounded-xl font-bold transition-all text-xs uppercase ${genderFilter === f ? 'bg-primary text-white dark:text-dark-900 shadow-lg' : 'text-gray-500 dark:text-gray-400'}`}
                  >
                    {f === 'all' ? (lang === 'ar' ? 'الكل' : 'All') : f === 'men' ? (lang === 'ar' ? 'رجال' : 'Men') : (lang === 'ar' ? 'نساء' : 'Women')}
                  </button>
                ))}
              </div>

              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as any)} 
                className="bg-gray-50 dark:bg-white/5 border border-dark-950/10 dark:border-white/10 rounded-2xl px-4 py-2.5 text-xs font-bold text-dark-950 dark:text-white outline-none"
              >
                <option value="rating" className="dark:bg-dark-800">{lang === 'ar' ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
                <option value="high" className="dark:bg-dark-800">{lang === 'ar' ? 'السعر: من الأعلى' : 'Price: High'}</option>
                <option value="low" className="dark:bg-dark-800">{lang === 'ar' ? 'السعر: من الأقل' : 'Price: Low'}</option>
                <option value="new" className="dark:bg-dark-800">{lang === 'ar' ? 'وصل حديثاً' : 'Newest'}</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center glass rounded-[3rem] border-dark-950/5 dark:border-white/5">
              <p className="text-2xl text-gray-500 italic font-bold">
                {lang === 'ar' ? 'لا توجد منتجات تطابق اختياراتك يا بطل.' : 'No products found, beast.'}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
