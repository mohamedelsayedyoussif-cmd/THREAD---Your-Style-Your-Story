
import React, { useState, useEffect } from 'react';
import { Product, ProductColor } from '../types';
import { useLanguage } from './LanguageProvider';

interface Props {
  product: Product;
  onClose: () => void;
  onAddToCart: (p: Product, color: ProductColor, size: string) => void;
}

const QuickViewModal: React.FC<Props> = ({ product, onClose, onAddToCart }) => {
  const { lang } = useLanguage();
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeImage, setActiveImage] = useState<string>(product.colors[0].images[0]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    setActiveImage(selectedColor.images[0]);
  }, [selectedColor]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      // Small shake animation could go here
      return;
    }
    setIsAdding(true);
    setTimeout(() => {
      onAddToCart(product, selectedColor, selectedSize);
      setIsAdding(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl bg-dark-800 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-dark-900 transition-all"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Gallery Section */}
        <div className="lg:w-1/2 flex flex-col md:flex-row p-4 gap-4 overflow-hidden">
          {/* Thumbnails */}
          <div className="order-2 md:order-1 flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto pb-2 md:pb-0">
            {selectedColor.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                  activeImage === img ? 'border-primary' : 'border-transparent opacity-50'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt="thumb" />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="order-1 md:order-2 flex-1 relative rounded-2xl overflow-hidden glass border-white/5 aspect-[3/4]">
             <img 
               key={activeImage}
               src={activeImage} 
               className="w-full h-full object-cover animate-fade-in" 
               alt={product.nameEn} 
             />
             {product.badgeEn && (
               <div className="absolute top-4 left-4 bg-primary text-dark-900 text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest shadow-xl">
                 {lang === 'ar' ? product.badgeAr : product.badgeEn}
               </div>
             )}
          </div>
        </div>

        {/* Info Section */}
        <div className="lg:w-1/2 p-8 sm:p-12 overflow-y-auto flex flex-col">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                {product.gender === 'men' ? (lang === 'ar' ? 'للرجال' : "Men's") : (lang === 'ar' ? 'للنساء' : "Women's")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                {lang === 'ar' ? product.nameAr : product.nameEn}
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-primary">{product.price} EGP</span>
                {product.compareAtPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.compareAtPrice} EGP</span>
                )}
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed font-light italic">
              {lang === 'ar' ? product.descriptionAr : product.descriptionEn}
            </p>

            {/* Colors */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-white/60">
                {lang === 'ar' ? 'اختر اللون' : 'Select Color'}: <span className="text-white">{lang === 'ar' ? selectedColor.nameAr : selectedColor.nameEn}</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 p-0.5 transition-all relative group ${
                      selectedColor.id === color.id ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <div 
                      className="w-full h-full rounded-full border border-white/20" 
                      style={{ background: color.hex }}
                    />
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-dark-900 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                       {lang === 'ar' ? color.nameAr : color.nameEn}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-black uppercase tracking-widest text-white/60">
                  {lang === 'ar' ? 'اختر المقاس' : 'Select Size'}
                </h4>
                {!selectedSize && (
                  <span className="text-[10px] font-bold text-accent-neon animate-pulse">
                    {lang === 'ar' ? '* مطلوب' : '* Required'}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl font-black transition-all border-2 flex items-center justify-center text-sm ${
                      selectedSize === size 
                      ? 'border-primary bg-primary text-dark-900 shadow-lg shadow-primary/20' 
                      : 'border-white/5 glass text-gray-400 hover:border-primary/40 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize || isAdding}
                className="w-full py-5 rounded-2xl font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 transition-all relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-dark-900 shadow-xl shadow-primary/20"
              >
                {isAdding ? (
                   <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-dark-900" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {lang === 'ar' ? 'جاري الإضافة...' : 'Adding...'}
                   </span>
                ) : (
                  <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                    </svg>
                    {lang === 'ar' ? 'أضف إلى السلة' : 'Add to Cart'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
