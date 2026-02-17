
import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'oversized-hoodie-black',
    gender: 'men',
    category: 'clothing',
    nameAr: 'هودي الـ Beast الأسود',
    nameEn: 'The BEAST Black Hoodie',
    price: 399,
    priceSAR: 59,
    compareAtPrice: 499,
    compareAtPriceSAR: 75,
    rating: 4.8,
    reviewsCount: 124,
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'HYPE',
    descriptionAr: 'قطن 100% ثقيل، قصة Oversized مظبوطة بالمللي. الهودي اللي مش هتقلعه.',
    descriptionEn: '100% Heavy cotton, perfect oversized fit. The only hoodie you will ever need.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        id: 'black',
        nameAr: 'أسود فحم',
        nameEn: 'Coal Black',
        hex: '#000000',
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1556821921-25537dd99276?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ]
  },
  {
    id: 2,
    slug: 'essential-tshirt-white',
    gender: 'men',
    category: 'clothing',
    nameAr: 'تيشيرت Urban الأساسي',
    nameEn: 'Urban Essential Tee',
    price: 249,
    priceSAR: 35,
    rating: 4.9,
    reviewsCount: 567,
    badgeAr: 'أساسي',
    badgeEn: 'ESSENTIAL',
    descriptionAr: 'خامة بريميوم ناعمة جداً، بتستحمل الغسيل واللبس الكتير وبتفضل زي ما هي.',
    descriptionEn: 'Ultra-soft premium fabric, built to withstand daily hustle while keeping its shape.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        id: 'white',
        nameAr: 'أبيض ناصع',
        nameEn: 'Pure White',
        hex: '#FFFFFF',
        images: [
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ]
  },
  {
    id: 3,
    slug: 'cargo-pants-khaki',
    gender: 'men',
    category: 'clothing',
    nameAr: 'بنطلون الـ Stealth كارجو',
    nameEn: 'Stealth Cargo Pants',
    price: 450,
    priceSAR: 65,
    compareAtPrice: 550,
    compareAtPriceSAR: 80,
    rating: 4.6,
    reviewsCount: 88,
    badgeAr: 'جديد',
    badgeEn: 'NEW DROP',
    descriptionAr: 'جيوب كتير، ستايل قوي، وخامة متينة لأي مغامرة في الشارع.',
    descriptionEn: 'Multi-pocket design, bold style, and durable fabric for the urban explorer.',
    sizes: ['30', '32', '34', '36'],
    colors: [
      {
        id: 'khaki',
        nameAr: 'خاكي صحراوي',
        nameEn: 'Desert Khaki',
        hex: '#C3B091',
        images: [
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1511105612320-2e62a04dd044?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ]
  },
  {
    id: 11,
    slug: 'trucker-cap-thread',
    gender: 'unisex',
    category: 'accessories',
    nameAr: 'كاب ثريد الـ Signature',
    nameEn: 'THREAD Signature Cap',
    price: 180,
    priceSAR: 25,
    rating: 4.9,
    reviewsCount: 245,
    badgeAr: 'تريند',
    badgeEn: 'TRENDING',
    descriptionAr: 'التفاصيل هي اللي بتعمل الفرق. كاب تراكر بشعار مطرز ببروز عالي.',
    descriptionEn: 'Details matter. Trucker cap with high-density 3D embroidered logo.',
    sizes: ['One Size'],
    colors: [
      {
        id: 'black-white',
        nameAr: 'أسود/أبيض',
        nameEn: 'B&W',
        hex: '#1a1a1a',
        images: [
          'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ]
  }
];
