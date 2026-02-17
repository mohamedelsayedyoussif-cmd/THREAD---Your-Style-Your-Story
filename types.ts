
import React from 'react';

export type Language = 'ar' | 'en';
export type Region = 'EG' | 'KSA';

export interface ProductColor {
  id: string;
  nameAr: string;
  nameEn: string;
  hex: string;
  images: string[];
}

export interface Product {
  id: number;
  slug: string;
  gender: 'men' | 'women' | 'unisex';
  category: 'clothing' | 'accessories';
  nameAr: string;
  nameEn: string;
  price: number; // Price in EGP
  priceSAR: number; // Price in SAR
  compareAtPrice?: number;
  compareAtPriceSAR?: number;
  rating: number;
  reviewsCount: number;
  badgeAr?: string;
  badgeEn?: string;
  descriptionAr: string;
  descriptionEn: string;
  colors: ProductColor[];
  sizes: string[];
}

export interface CartItem {
  id: string; // Composite ID: productId-colorId-sizeId
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
}

export interface SocialLink {
  id: string;
  href: string;
  labelAr: string;
  labelEn: string;
  type: 'whatsapp' | 'email' | 'phone' | 'facebook' | 'tiktok' | 'instagram' | 'website';
  icon: (props: any) => React.ReactNode;
}
