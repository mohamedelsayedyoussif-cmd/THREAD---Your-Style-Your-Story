
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

  return (
    <div 
      className="group relative flex flex-col gap-4 cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-dark-900 border border-white/5 group-hover:border-primary/50 transition-all duration-500">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />
        
        {/* Product Image with mask */}
        <img 
          src={product.colors[0].images[0]} 
          alt={product.nameEn}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
        />
        
        {/* Floating Badges */}
        <div className="absolute top-4 start-4 flex flex-col gap-2 z-10">
          {(product.badgeAr || product.badgeEn) && (
            <span className="bg-primary text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest italic skew-x-[-10deg]">
              {lang === 'ar' ? product.badgeAr : product.badgeEn}
            </span>
          )}
        </div>

        {/* Wishlist Icon */}
        <button 
          onClick={toggleWishlist}
          className={`absolute top-4 end-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isWishlisted ? 'bg-primary text-white' : 'glass text-white hover:bg-primary'}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Quick View Button */}
        <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button 
            onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
            className="w-full bg-white text-black py-4 font-black uppercase text-[10px] tracking-widest hover:bg-primary hover:text-white transition-colors"
          >
            {lang === 'ar' ? 'اكتشف القطعة ⚡' : 'DISCOVER PIECE ⚡'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">{product.category}</span>
            <h3 className="text-lg font-heading text-white italic tracking-tight uppercase group-hover:text-primary transition-colors">
              {lang === 'ar' ? product.nameAr : product.nameEn}
            </h3>
          </div>
          <div className="text-end">
            <p className="text-xl font-price font-black text-accent-neon text-glow-neon leading-none">
              {price}
            </p>
            <span className="text-[7px] font-black text-white/30 uppercase">{currency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;