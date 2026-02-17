
export interface ProductImage {
  src: string;
  altAr: string;
  altEn: string;
}

export const PRODUCT_IMAGES: Record<number, ProductImage> = {
  1: {
    src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    altAr: 'هودي oversized أسود عصري بستايل streetwear',
    altEn: 'Modern black oversized hoodie streetwear style',
  },
  2: {
    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    altAr: 'تيشيرت أساسي أبيض بريميوم',
    altEn: 'Premium essential white t-shirt',
  },
  3: {
    src: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800',
    altAr: 'جينز سليم فيت أزرق داكن',
    altEn: 'Slim fit dark blue jeans',
  },
  4: {
    src: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    altAr: 'بنطلون كارجو خاكي مريح بجودة عالية',
    altEn: 'Comfortable street cargo pants in khaki',
  },
  9: {
    src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
    altAr: 'جاكيت فيرسيتي كلاسيكي',
    altEn: 'Classic Varsity Jacket',
  },
  10: {
    src: 'https://images.unsplash.com/photo-1580487217487-12235e14d7d2?auto=format&fit=crop&q=80&w=800',
    altAr: 'بنطلون جوجر رمادي نسائي',
    altEn: 'Women grey street joggers',
  },
  11: {
    src: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
    altAr: 'كاب تراكر عصري مع شعار مطرز',
    altEn: 'Modern trucker cap with embroidered logo',
  },
  12: {
    src: 'https://images.unsplash.com/photo-1597484662317-9bd773ee16ba?auto=format&fit=crop&q=80&w=800',
    altAr: 'حقيبة توت قماشية صديقة للبيئة',
    altEn: 'Eco-friendly canvas tote bag',
  }
};

export const SITE_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1920',
  contact: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000'
};
