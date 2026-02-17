
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useLanguage } from './LanguageProvider';

interface Props {
  product: Product;
  onQuickView: (p: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onQuickView }) => {
  const { lang, region } = useLanguage();
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('thread_wishlist') || '[]');
    setIsWishlisted(wishlist.includes(product.id));
  }, [product.id]);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    const wishlist = JSON.parse(localStorage.getItem('thread_wishlist') || '[]');
    let newWishlist;
    if (isWishlisted) {
      newWishlist = wishlist.filter((id: number) => id !== product.id);
    } else {
      newWishlist = [...wishlist, product.id];
    }
    localStorage.setItem('thread_wishlist', JSON.stringify(newWishlist));
    setIsWishlisted(!isWishlisted);
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const currency = region === 'EG' ? (lang === 'ar' ? 'ج.م' : 'EGP') : (lang === 'ar' ? 'ر.س' : 'SAR');
  const price = region === 'EG' ? product.price : product.priceSAR;
  const oldPrice = region === 'EG' ? product.compareAtPrice : product.compareAtPriceSAR;

  return (
    <div 
      className="group relative flex flex-col gap-3 cursor-pointer transition-all duration-500 rounded-2xl"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden glass border-dark-950/5 dark:border-white/5 transition-all duration-500 group-hover:shadow-[0_15px_30px_-10px_rgba(255,77,0,0.15)]">
        {/* Main Image */}
        <img 
          src={product.colors[0].images[0]} 
          alt={product.nameEn}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 start-3 z-10">
          {(product.badgeAr || product.badgeEn) && (
            <span className="bg-primary text-white dark:text-black px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-wider shadow-md italic">
              {lang === 'ar' ? product.badgeAr : product.badgeEn}
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button 
          onClick={toggleWishlist}
          className={`absolute top-3 end-3 z-10 w-9 h-9 rounded-lg glass border-dark-950/5 dark:border-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-90 ${isWishlisted ? 'bg-primary text-white border-primary shadow-lg' : 'text-dark-950 dark:text-white hover:bg-white/10'}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Quick Look Overlay */}
        <div className="absolute inset-0 bg-dark-950/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4 backdrop-blur-[1px]">
          <button 
            onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
            className="w-full bg-white text-dark-950 py-2.5 rounded-lg font-black uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-[9px] shadow-lg hover:bg-primary hover:text-white"
          >
            {lang === 'ar' ? 'نظرة سريعة ⚡' : 'QUICK LOOK ⚡'}
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="px-1 py-1 space-y-1">
        <div className="flex justify-between items-start gap-2">
          <div className="flex flex-col flex-1">
             <span className="text-[7px] font-black text-primary/70 uppercase tracking-widest mb-0.5">
               {product.category}
             </span>
             <h3 className="text-sm md:text-base font-black text-dark-950 dark:text-white italic leading-tight group-hover:text-primary transition-colors uppercase tracking-tight">
                {lang === 'ar' ? product.nameAr : product.nameEn}
             </h3>
          </div>
          <div className="flex flex-col items-end shrink-0">
            {oldPrice && (
              <span className="text-[9px] text-gray-400 line-through font-bold opacity-60">{oldPrice}</span>
            )}
            <span className="text-base md:text-lg font-black text-primary italic font-price leading-none">
              {price}
            </span>
            <span className="text-[7px] uppercase font-black opacity-30 tracking-widest">{currency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
