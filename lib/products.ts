
import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'oversized-hoodie-black',
    gender: 'men',
    nameAr: 'هودي Oversized بريميوم',
    nameEn: 'Premium Oversized Hoodie',
    price: 399,
    compareAtPrice: 499,
    rating: 4.8,
    reviewsCount: 124,
    badgeAr: 'خصم 20%',
    badgeEn: '20% OFF',
    descriptionAr: 'هودي قطن 100% ثقيل معالج ضد الانكماش، ستايل واسع مريح جداً.',
    descriptionEn: '100% Heavy cotton pre-shrunk hoodie, ultra-comfortable oversized fit.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        id: 'black',
        nameAr: 'أسود',
        nameEn: 'Black',
        hex: '#000000',
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1556821813-f8d227448349?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        id: 'beige',
        nameAr: 'بيج',
        nameEn: 'Beige',
        hex: '#D2B48C',
        images: [
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ]
  },
  {
    id: 2,
    slug: 'essential-tshirt-pack',
    gender: 'men',
    nameAr: 'طقم تيشيرت أساسي (3 قطع)',
    nameEn: 'Essential T-Shirt Pack (3 Pcs)',
    price: 299,
    rating: 4.9,
    reviewsCount: 567,
    badgeAr: 'الأكثر مبيعاً',
    badgeEn: 'Best Seller',
    descriptionAr: 'تيشيرتات قطن فاخرة ألوان أساسية، خامة ناعمة تدوم طويلاً.',
    descriptionEn: 'Premium cotton essential tees, soft fabric built to last.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        id: 'multi',
        nameAr: 'متعدد الألوان',
        nameEn: 'Multi-color',
        hex: 'linear-gradient(45deg, #000, #fff, #808080)',
        images: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ]
  },
  {
    id: 7,
    slug: 'oversized-sweater-women',
    gender: 'women',
    nameAr: 'بلوفر حريمي Oversized',
    nameEn: 'Women Oversized Sweater',
    price: 349,
    rating: 4.7,
    reviewsCount: 89,
    descriptionAr: 'بلوفر شتوي ناعم جداً بتصميم عصري وألوان دافئة.',
    descriptionEn: 'Ultra-soft winter sweater with modern design and warm tones.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        id: 'pink',
        nameAr: 'وردي',
        nameEn: 'Pink',
        hex: '#FFC0CB',
        images: [
          'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        id: 'grey',
        nameAr: 'رمادي',
        nameEn: 'Grey',
        hex: '#808080',
        images: [
          'https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ]
  }
];
