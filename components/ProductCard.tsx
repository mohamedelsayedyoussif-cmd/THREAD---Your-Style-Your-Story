
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
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Load wishlist state from localStorage on mount
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('thread_wishlist') || '[]');
    setIsWishlisted(wishlist.includes(product.id));
  }, [product.id]);

  // Toggle wishlist state and persist to localStorage
  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigating to product detail
    const wishlist = JSON.parse(localStorage.getItem('thread_wishlist') || '[]');
    let newWishlist;
    
    if (isWishlisted) {
      newWishlist = wishlist.filter((id: number) => id !== product.id);
    } else {
      newWishlist = [...wishlist, product.id];
    }
    
    localStorage.setItem('thread_wishlist', JSON.stringify(newWishlist));
    setIsWishlisted(!isWishlisted);
    
    // Trigger a custom event so other cards of the same product can update if needed
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  // Sync state if another instance of the same product updates the wishlist
  useEffect(() => {
    const handleUpdate = () => {
      const wishlist = JSON.parse(localStorage.getItem('thread_wishlist') || '[]');
      setIsWishlisted(wishlist.includes(product.id));
    };
    window.addEventListener('wishlistUpdated', handleUpdate);
    return () => window.removeEventListener('wishlistUpdated', handleUpdate);
  }, [product.id]);

  // Always show the first image of the first color as default
  const defaultImage = product.colors[0].images[0];
  const secondaryImage = product.colors[0].images[1] || defaultImage;

  const handleProductClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="group relative flex flex-col gap-4">
      {/* Image Container */}
      <div 
        onClick={handleProductClick}
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
        
        {/* Badges */}
        {(product.badgeAr || product.badgeEn) && (
          <div className="absolute top-4 start-4 z-10">
            <span className="bg-primary text-dark-900 text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest shadow-xl">
              {lang === 'ar' ? product.badgeAr : product.badgeEn}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={toggleWishlist}
          className={`absolute top-4 end-4 z-20 w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 ${
            isWishlisted ? 'text-primary' : 'text-white hover:text-primary'
          }`}
          aria-label="Toggle Wishlist"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill={isWishlisted ? "currentColor" : "none"} 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={isWishlisted ? "drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]" : ""}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Quick View Trigger Overlay */}
        <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 z-20">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-white text-dark-900 font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform shadow-2xl hover:bg-primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            {lang === 'ar' ? 'عرض سريع' : 'Quick View'}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1 px-1">
        <div className="flex justify-between items-start gap-4">
          <h3 
            onClick={handleProductClick}
            className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1 cursor-pointer"
          >
            {lang === 'ar' ? product.nameAr : product.nameEn}
          </h3>
          <span className="text-xl font-black text-primary shrink-0">{product.price} EGP</span>
        </div>
        
        <p className="text-sm text-gray-400 line-clamp-1 font-light italic">
          {lang === 'ar' ? product.descriptionAr : product.descriptionEn}
        </p>

        {/* Small Color Swatches Preview */}
        <div className="pt-2 flex items-center gap-1.5">
           {product.colors.map(color => (
             <div 
                key={color.id} 
                className="w-3 h-3 rounded-full border border-white/20" 
                style={{ background: color.hex }}
                title={lang === 'ar' ? color.nameAr : color.nameEn}
             />
           ))}
           <span className="mx-2 w-px h-3 bg-white/10" />
           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
             {product.sizes.length} {lang === 'ar' ? 'مقاسات' : 'Sizes'}
           </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
