
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useLanguage } from './LanguageProvider';

interface Props {
  product: Product;
  onQuickView: (p: Product) => void;
  priority?: boolean;
}

const ProductCard: React.FC<Props> = ({ product, onQuickView, priority = false }) => {
  const { lang, region } = useLanguage();
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [showAllColors, setShowAllColors] = useState(false);

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
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 2000);
    }
    localStorage.setItem('thread_wishlist', JSON.stringify(newWishlist));
    setIsWishlisted(!isWishlisted);
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const currentColor = product.colors[activeColorIdx] || product.colors[0];
  const defaultImage = currentColor.images[0] || '';
  const secondaryImage = currentColor.images[1] || defaultImage;
  const currentPrice = region === 'EG' ? product.price : product.priceSAR;
  const currency = region === 'EG' ? 'EGP' : 'SAR';

  const visibleColors = showAllColors ? product.colors : product.colors.slice(0, 3);
  const remainingColorsCount = product.colors.length - 3;

  return (
    <div className="group relative flex flex-col gap-4">
      {/* Image Container */}
      <div 
        onClick={() => navigate(`/product/${product.id}`)} 
        className="relative aspect-[3/4] rounded-3xl overflow-hidden glass border-white/5 bg-dark-800 cursor-pointer"
      >
        <img 
          src={defaultImage} 
          alt={lang === 'ar' ? product.nameAr : product.nameEn} 
          loading={priority ? "eager" : "lazy"} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
        />
        <img 
          src={secondaryImage} 
          alt="hover view" 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100" 
        />
        
        {(product.badgeAr || product.badgeEn) && (
          <div className="absolute top-4 start-4 z-10">
            <span className="bg-primary text-dark-900 text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest shadow-xl">
              {lang === 'ar' ? product.badgeAr : product.badgeEn}
            </span>
          </div>
        )}

        <button 
          onClick={toggleWishlist} 
          className={`absolute top-4 end-4 z-20 w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 ${isWishlisted ? 'text-primary' : 'text-white'}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 z-20">
          <button 
            onClick={(e) => { e.stopPropagation(); onQuickView(product); }} 
            className="bg-white text-dark-900 font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-primary"
          >
            {lang === 'ar' ? 'عرض سريع' : 'Quick View'}
          </button>
        </div>
      </div>

      {/* Details Container */}
      <div className="space-y-1 px-1 text-center sm:text-start">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-1 sm:gap-4">
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1">
            {lang === 'ar' ? product.nameAr : product.nameEn}
          </h3>
          <span className="text-xl font-black text-primary shrink-0">{currentPrice} {currency}</span>
        </div>
        <p className="text-sm text-gray-400 line-clamp-1 italic mb-2">
          {lang === 'ar' ? product.descriptionAr : product.descriptionEn}
        </p>

        {/* Color Swatches */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
          {visibleColors.map((color, idx) => (
            <button
              key={color.id}
              onClick={(e) => {
                e.stopPropagation();
                setActiveColorIdx(idx);
              }}
              aria-label={lang === 'ar' ? color.nameAr : color.nameEn}
              className={`w-5 h-5 rounded-full border-2 p-0.5 transition-all hover:scale-110 ${
                activeColorIdx === idx ? 'border-primary ring-1 ring-primary ring-offset-1 ring-offset-dark-950' : 'border-white/10'
              }`}
            >
              <div 
                className="w-full h-full rounded-full border border-white/5" 
                style={{ backgroundColor: color.hex }}
              />
            </button>
          ))}
          
          {!showAllColors && remainingColorsCount > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAllColors(true);
              }}
              className="text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-primary transition-colors"
            >
              +{remainingColorsCount} {lang === 'ar' ? 'أكثر' : 'more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
