
import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- MEN ---
  {
    id: 1,
    slug: 'oversized-hoodie-black',
    gender: 'men',
    category: 'clothing',
    nameAr: 'Oversized Hoodie - Black',
    nameEn: 'Oversized Hoodie - Black',
    price: 399,
    priceSAR: 45,
    compareAtPrice: 499,
    rating: 4.7,
    reviewsCount: 234,
    badgeAr: 'خصم 20%',
    badgeEn: '20% OFF',
    descriptionAr: 'هودي oversized قطن 100%، تصميم عصري، مريح للاستخدام اليومي.',
    descriptionEn: '100% cotton oversized hoodie, modern design, comfortable for daily use.',
    colors: [
      { id: 'black', nameAr: 'أسود', nameEn: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800'] },
      { id: 'grey', nameAr: 'رمادي', nameEn: 'Grey', hex: '#808080', images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&sat=-100'] },
      { id: 'beige', nameAr: 'بيج', nameEn: 'Beige', hex: '#F5F5DC', images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&sepia=50'] },
      { id: 'navy', nameAr: 'كحلي', nameEn: 'Navy', hex: '#000080', images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&hue=200'] }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['Oversized', 'Streetwear', 'Best Seller']
  },
  {
    id: 2,
    slug: 'essential-tshirt-pack',
    gender: 'men',
    category: 'clothing',
    nameAr: 'Essential T-Shirt Pack (3 قطع)',
    nameEn: 'Essential T-Shirt Pack (3 Pcs)',
    price: 299,
    priceSAR: 35,
    rating: 4.9,
    reviewsCount: 567,
    badgeAr: 'الأكثر مبيعاً 🔥',
    badgeEn: 'Best Seller',
    descriptionAr: 'باكيدج من 3 تيشيرتات أساسية بخامات قطنية ممتازة.',
    descriptionEn: 'Pack of 3 essential premium cotton t-shirts.',
    colors: [
      { id: 'black', nameAr: 'أسود', nameEn: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800'] },
      { id: 'white', nameAr: 'أبيض', nameEn: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&brightness=150'] },
      { id: 'grey', nameAr: 'رمادي', nameEn: 'Grey', hex: '#808080', images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&sat=-100'] }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['Essential', 'Best Seller']
  },
  {
    id: 3,
    slug: 'slim-fit-jeans-dark-blue',
    gender: 'men',
    category: 'clothing',
    nameAr: 'Slim Fit Jeans - Dark Blue',
    nameEn: 'Slim Fit Jeans - Dark Blue',
    price: 449,
    priceSAR: 50,
    compareAtPrice: 549,
    rating: 4.6,
    reviewsCount: 189,
    descriptionAr: 'جينز slim fit، قماش دنيم عالي الجودة، مرن ومريح.',
    descriptionEn: 'Slim fit jeans, high quality flexible denim.',
    colors: [
      { id: 'dark-blue', nameAr: 'أزرق داكن', nameEn: 'Dark Blue', hex: '#00008B', images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800'] }
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    tags: ['Denim', 'Classic']
  },
  {
    id: 4,
    slug: 'cargo-pants-khaki',
    gender: 'men',
    category: 'clothing',
    nameAr: 'Cargo Pants - Khaki',
    nameEn: 'Cargo Pants - Khaki',
    price: 379,
    priceSAR: 42,
    rating: 4.5,
    reviewsCount: 145,
    badgeAr: 'وصل حديثاً ✨',
    badgeEn: 'New',
    descriptionAr: 'بنطلون كارجو بجيوب جانبية، ستايل ستريت وير حقيقي.',
    descriptionEn: 'Cargo pants with side pockets, real streetwear style.',
    colors: [
      { id: 'khaki', nameAr: 'خاكي', nameEn: 'Khaki', hex: '#C3B091', images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800'] },
      { id: 'black', nameAr: 'أسود', nameEn: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&brightness=20'] },
      { id: 'olive', nameAr: 'زيتوني', nameEn: 'Olive', hex: '#808000', images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&hue=100'] }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tags: ['Streetwear', 'New Arrival']
  },

  // --- WOMEN ---
  {
    id: 5,
    slug: 'oversized-sweater-beige',
    gender: 'women',
    category: 'clothing',
    nameAr: 'Oversized Sweater - Beige',
    nameEn: 'Oversized Sweater - Beige',
    price: 349,
    priceSAR: 40,
    rating: 4.8,
    reviewsCount: 412,
    badgeAr: 'تريند 🚀',
    badgeEn: 'Trending',
    descriptionAr: 'سويتر نسائي واسع، خامة ناعمة جداً ودافئة.',
    descriptionEn: 'Women oversized sweater, very soft and warm.',
    colors: [
      { id: 'beige', nameAr: 'بيج', nameEn: 'Beige', hex: '#F5F5DC', images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800'] },
      { id: 'pink', nameAr: 'وردي', nameEn: 'Pink', hex: '#FFC0CB', images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&hue=320'] },
      { id: 'grey', nameAr: 'رمادي', nameEn: 'Grey', hex: '#808080', images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&sat=-100'] }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['Trending', 'Cozy']
  },
  {
    id: 6,
    slug: 'high-waist-mom-jeans',
    gender: 'women',
    category: 'clothing',
    nameAr: 'High-Waist Mom Jeans',
    nameEn: 'High-Waist Mom Jeans',
    price: 429,
    priceSAR: 48,
    rating: 4.7,
    reviewsCount: 298,
    descriptionAr: 'جينز خصر عالي مريح جداً بستايل كلاسيكي.',
    descriptionEn: 'High-waist mom jeans, classic comfy style.',
    colors: [
      { id: 'light-blue', nameAr: 'أزرق فاتح', nameEn: 'Light Blue', hex: '#ADD8E6', images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800'] },
      { id: 'dark-blue', nameAr: 'أزرق داكن', nameEn: 'Dark Blue', hex: '#00008B', images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&hue=200'] }
    ],
    sizes: ['26', '28', '30', '32', '34'],
    tags: ['Classic', 'Denim']
  },
  {
    id: 7,
    slug: 'cropped-hoodie-pink',
    gender: 'women',
    category: 'clothing',
    nameAr: 'Cropped Hoodie - Pink',
    nameEn: 'Cropped Hoodie - Pink',
    price: 329,
    priceSAR: 38,
    rating: 4.6,
    reviewsCount: 187,
    descriptionAr: 'هودي قصير بستايل شبابي جذاب.',
    descriptionEn: 'Stylish cropped hoodie with vibrant colors.',
    colors: [
      { id: 'pink', nameAr: 'وردي', nameEn: 'Pink', hex: '#FFC0CB', images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800'] },
      { id: 'white', nameAr: 'أبيض', nameEn: 'White', hex: '#FFFFFF', images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&brightness=150'] },
      { id: 'black', nameAr: 'أسود', nameEn: 'Black', hex: '#000000', images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&brightness=20'] }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    tags: ['Cropped', 'Streetwear']
  },
  {
    id: 8,
    slug: 'maxi-dress-floral',
    gender: 'women',
    category: 'clothing',
    nameAr: 'Maxi Dress - Floral',
    nameEn: 'Maxi Dress - Floral',
    price: 499,
    priceSAR: 55,
    rating: 4.9,
    reviewsCount: 156,
    badgeAr: 'وصل حديثاً ✨',
    badgeEn: 'New Arrival',
    descriptionAr: 'فستان ماكسي بنقشات زهور، خامة ناعمة ومثالية.',
    descriptionEn: 'Floral maxi dress, soft material perfect for any occasion.',
    colors: [
      { id: 'floral-pink', nameAr: 'زهري', nameEn: 'Pink Floral', hex: '#FFB6C1', images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800'] },
      { id: 'floral-blue', nameAr: 'أزرق', nameEn: 'Blue Floral', hex: '#ADD8E6', images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&hue=200'] }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['Dress', 'New Arrival']
  }
];
