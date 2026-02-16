
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
    altAr: 'طقم تيشيرتات أساسية (أسود، أبيض، رمادي)',
    altEn: 'Essential t-shirt pack in black, white, and grey',
  },
  3: {
    src: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    altAr: 'جينز سليم فيت كحلي غامق بجودة عالية',
    altEn: 'High-quality dark blue slim fit denim jeans',
  },
  4: {
    src: 'https://images.unsplash.com/photo-1511105612320-2e62a04dd044?auto=format&fit=crop&q=80&w=800',
    altAr: 'بنطلون كارجو خاكي مريح بجيوب جانبية',
    altEn: 'Comfortable khaki cargo pants with side pockets',
  },
  7: {
    src: 'https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?auto=format&fit=crop&q=80&w=800',
    altAr: 'بلوفر حريمي واسع بيج ناعم مريح',
    altEn: 'Soft and comfortable beige oversized women sweater',
  },
  8: {
    src: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    altAr: 'جينز موم فيت بخصر مرتفع لون أزرق فاتح',
    altEn: 'High-waist mom jeans in light blue',
  },
  9: {
    src: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800',
    altAr: 'هودي قصير وردي عصري للبنات',
    altEn: 'Trendy pink cropped hoodie for women',
  },
  10: {
    src: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800',
    altAr: 'فستان ماكسي مشجر بألوان صيفية مبهجة',
    altEn: 'Vibrant floral maxi dress with summer pattern',
  }
};

export const SITE_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1920',
  contact: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000'
};
