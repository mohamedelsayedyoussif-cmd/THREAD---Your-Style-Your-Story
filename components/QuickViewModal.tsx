
import React, { useState, useEffect } from 'react';
import { Product, ProductColor } from '../types';
import { useLanguage } from './LanguageProvider';
import { useNavigate } from 'react-router-dom';

interface Props {
  product: Product;
  onClose: () => void;
  onAddToCart: (p: Product, color: ProductColor, size: string, qty: number) => void;
}

const QuickViewModal: React.FC<Props> = ({ product, onClose, onAddToCart }) => {
  const { lang, region } = useLanguage();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState<string>(product.colors[0]?.images?.[0] || '');
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedColor?.images?.[0]) setActiveImage(selectedColor.images[0]);
    setError(null);
  }, [selectedColor]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError(lang === 'ar' ? 'برجاء اختيار المقاس! ⚡' : 'Select a size! ⚡');
      return;
    }
    setIsAdding(true);
    setTimeout(() => {
      onAddToCart(product, selectedColor, selectedSize, quantity);
      setIsAdding(false);
      onClose();
    }, 600);
  };

  const currencyLabel = region === 'EG' ? (lang === 'ar' ? 'ج.م' : 'EGP') : (lang === 'ar' ? 'ر.س' : 'SAR');
  const price = region === 'EG' ? product.price : product.priceSAR;

  return (
    <div className="fixed inset-0 z-[160] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl bg-white dark:bg-dark-800 rounded-[2.5rem] overflow-hidden border border-dark-950/10 dark:border-white/10 shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
        <button onClick={onClose} className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full glass flex items-center justify-center text-dark-950 dark:text-white hover:bg-primary transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>

        <div className="lg:w-1/2 p-4 flex flex-col md:flex-row gap-4 bg-gray-50 dark:bg-dark-900/50">
          <div className="order-2 md:order-1 flex md:flex-col gap-3 overflow-x-auto no-scrollbar">
            {selectedColor?.images?.map((img, idx) => (
              <button key={idx} onClick={() => setActiveImage(img)} className={`w-16 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${activeImage === img ? 'border-primary scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                <img src={img} className="w-full h-full object-cover" alt="thumb" />
              </button>
            ))}
          </div>
          <div className="order-1 md:order-2 flex-1 relative rounded-2xl overflow-hidden glass aspect-[3/4]">
             <img src={activeImage} className="w-full h-full object-cover animate-fade-in" alt={product.nameEn} />
          </div>
        </div>

        <div className="lg:w-1/2 p-8 sm:p-12 overflow-y-auto custom-scrollbar">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] italic font-display">{product.category}</span>
              <h2 className="text-4xl font-heading text-dark-950 dark:text-white italic uppercase tracking-tighter leading-none">
                {lang === 'ar' ? product.nameAr : product.nameEn}
              </h2>
              <div className="pt-2">
                <span className="text-3xl font-heading text-primary italic">{price} {currencyLabel}</span>
              </div>
            </div>

            <p className="text-gray-500 dark:text-gray-400 font-bold italic leading-relaxed text-sm">
              {lang === 'ar' ? product.descriptionAr : product.descriptionEn}
            </p>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase text-gray-400 dark:text-white/40 tracking-widest font-display">{lang === 'ar' ? 'اللون' : 'Color'}</h4>
              <div className="flex flex-wrap gap-4">
                {product.colors.map(color => (
                  <button 
                    key={color.id} 
                    onClick={() => setSelectedColor(color)} 
                    className={`w-12 h-12 rounded-full border-2 p-1 transition-all ${selectedColor.id === color.id ? 'border-primary scale-110 shadow-lg' : 'border-dark-950/10 dark:border-white/10 hover:border-primary'}`}
                    style={{ background: color.hex }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase text-gray-400 dark:text-white/40 tracking-widest font-display">{lang === 'ar' ? 'المقاس' : 'Size'}</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button 
                    key={size} 
                    onClick={() => { setSelectedSize(size); setError(null); }} 
                    className={`min-w-[56px] h-14 rounded-xl font-heading transition-all border-2 text-sm flex items-center justify-center ${selectedSize === size ? 'border-primary bg-primary text-white dark:text-dark-900 shadow-lg shadow-primary/20' : 'border-dark-950/5 dark:border-white/5 glass text-gray-400 hover:border-primary/50'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {error && <p className="text-red-500 text-[10px] font-black animate-pulse">{error}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center bg-dark-950/5 dark:bg-white/5 border border-dark-950/10 dark:border-white/10 rounded-2xl overflow-hidden shrink-0">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-14 hover:bg-primary/10 text-xl font-bold">-</button>
                <span className="w-12 text-center font-black text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-14 hover:bg-primary/10 text-xl font-bold">+</button>
              </div>
              <button 
                onClick={handleAddToCart} 
                disabled={isAdding} 
                className="flex-1 py-4 h-14 rounded-2xl font-heading uppercase tracking-widest text-sm bg-primary text-white dark:text-dark-900 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
              >
                {isAdding ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : (lang === 'ar' ? 'أضف للسلة' : 'ADD TO BAG')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
