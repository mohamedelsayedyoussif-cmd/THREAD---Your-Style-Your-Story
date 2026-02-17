
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageProvider';
import { PRODUCT_IMAGES } from '../lib/productImages';
import { Product, ProductColor } from '../types';

interface Props {
  products: Product[];
  onAddToCartDirect: (p: Product, color: ProductColor, size: string) => void;
}

const ProductDetail: React.FC<Props> = ({ products, onAddToCartDirect }) => {
  const { id } = useParams();
  const { lang, region } = useLanguage();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const found = products.find(p => p.id === Number(id));
    if (found) {
      setProduct(found);
      setSelectedSize(found.sizes[0]);
      setSelectedColor(found.colors[0]);
    }
    window.scrollTo(0, 0);
  }, [id, products]);

  useEffect(() => {
    if (product) {
      const wishlist = JSON.parse(localStorage.getItem('thread_wishlist') || '[]');
      setIsWishlisted(wishlist.includes(product.id));
    }
  }, [product]);

  const toggleWishlist = () => {
    if (!product) return;
    const wishlist = JSON.parse(localStorage.getItem('thread_wishlist') || '[]');
    let newWishlist;
    if (isWishlisted) {
      newWishlist = wishlist.filter((wid: number) => wid !== product.id);
    } else {
      newWishlist = [...wishlist, product.id];
    }
    localStorage.setItem('thread_wishlist', JSON.stringify(newWishlist));
    setIsWishlisted(!isWishlisted);
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const handleAddToCart = () => {
    if (product && selectedColor && selectedSize) {
      onAddToCartDirect(product, selectedColor, selectedSize);
    }
  };

  if (!product || !selectedColor) return null;

  const imageData = PRODUCT_IMAGES[product.id];
  const currency = region === 'EG' ? 'EGP' : 'SAR';
  const price = region === 'EG' ? product.price : product.priceSAR;

  return (
    <div className="min-h-screen bg-dark-950">
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2 text-primary font-bold hover:underline group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {lang === 'ar' ? 'العودة للتسوق' : 'Back to Shop'}
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden glass border-white/10 group">
              <img 
                src={selectedColor.images[0] || imageData?.src} 
                alt={lang === 'ar' ? product.nameAr : product.nameEn}
                className="w-full h-full object-cover animate-fade-in"
              />
              {(product.badgeAr || product.badgeEn) && (
                <div className="absolute top-6 start-6">
                  <span className="bg-primary text-dark-900 px-4 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl">
                    {lang === 'ar' ? product.badgeAr : product.badgeEn}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h1 className="text-5xl font-black text-white leading-tight italic uppercase tracking-tighter">
                  {lang === 'ar' ? product.nameAr : product.nameEn}
                </h1>
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-black text-primary italic">{price} {currency}</span>
                  {product.compareAtPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      {(region === 'EG' ? product.compareAtPrice : product.compareAtPriceSAR)} {currency}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xl text-gray-400 leading-relaxed font-light italic">
                {lang === 'ar' ? product.descriptionAr : product.descriptionEn}
              </p>

              <div className="space-y-4">
                <h4 className="font-bold text-white uppercase tracking-widest text-xs opacity-60">
                  {lang === 'ar' ? 'اختر اللون' : 'Select Color'}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-xl font-bold border-2 transition-all ${
                        selectedColor.id === color.id 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-white/5 glass text-gray-400 hover:border-primary/30'
                      }`}
                    >
                      {lang === 'ar' ? color.nameAr : color.nameEn}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs opacity-60">
                    {lang === 'ar' ? 'اختر المقاس' : 'Select Size'}
                  </h4>
                  <Link to="/size-guide" className="text-[10px] text-primary font-bold hover:underline">
                    {lang === 'ar' ? 'دليل المقاسات' : 'Size Guide'}
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 rounded-xl font-black transition-all border-2 flex items-center justify-center ${
                        selectedSize === size 
                        ? 'border-primary bg-primary text-dark-900 shadow-lg shadow-primary/20' 
                        : 'border-white/5 glass text-gray-400 hover:border-primary/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-dark-900 font-black py-6 rounded-2xl text-xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-tighter"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                  </svg>
                  {lang === 'ar' ? 'أضف إلى السلة' : 'Add to Cart'}
                </button>
                <button 
                  onClick={toggleWishlist}
                  className={`px-10 py-6 glass border-white/10 rounded-2xl font-bold transition-all flex items-center justify-center hover:scale-[1.02] active:scale-95 ${isWishlisted ? 'text-primary' : 'text-white'}`}
                >
                  <svg 
                    width="24" height="24" viewBox="0 0 24 24" 
                    fill={isWishlisted ? "currentColor" : "none"} 
                    stroke="currentColor" strokeWidth="2.5"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
