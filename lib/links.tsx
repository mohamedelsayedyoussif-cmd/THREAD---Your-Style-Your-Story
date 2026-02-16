import React from 'react';
import { SocialLink } from '../types';

// Fixed: Made children optional in the type definition to resolve TypeScript errors where it couldn't correctly infer children from JSX nesting
const IconWrapper = ({ children, color = 'currentColor' }: { children?: React.ReactNode, color?: string }) => (
  <div className="relative group transition-transform duration-300 hover:scale-110 active:scale-95">
    {/* Subtle 3D shadow layer */}
    <div className="absolute inset-0 translate-x-1 translate-y-1 opacity-20 blur-[1px] group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-all">
      {children}
    </div>
    {/* Main Icon with Gradient Stroke effect */}
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    href: 'https://www.facebook.com/p/Threadeg-61563006220728/',
    labelAr: 'فيسبوك THREAD',
    labelEn: 'THREAD on Facebook',
    type: 'facebook',
    icon: (props) => (
      <IconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </IconWrapper>
    ),
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/thread.e.g',
    labelAr: 'انستجرام THREAD',
    labelEn: 'THREAD on Instagram',
    type: 'instagram',
    icon: (props) => (
      <IconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </IconWrapper>
    ),
  },
  {
    id: 'tiktok',
    href: 'https://www.tiktok.com/@thread.eg',
    labelAr: 'تيك توك THREAD',
    labelEn: 'THREAD on TikTok',
    type: 'tiktok',
    icon: (props) => (
      <IconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      </IconWrapper>
    ),
  },
  {
    id: 'website',
    href: 'https://threadeg.net/',
    labelAr: 'الموقع الرسمي',
    labelEn: 'Official website',
    type: 'website',
    icon: (props) => (
      <IconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </IconWrapper>
    ),
  },
];

export const CONTACT_LINKS: SocialLink[] = [
  {
    id: 'whatsapp',
    href: 'https://wa.me/201033776986',
    labelAr: 'واتساب THREAD',
    labelEn: 'THREAD on WhatsApp',
    type: 'whatsapp',
    icon: (props) => (
      <IconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
        </svg>
      </IconWrapper>
    ),
  },
  {
    id: 'email',
    href: 'mailto:el3arif.m@gmail.com',
    labelAr: 'بريد THREAD',
    labelEn: 'Email THREAD',
    type: 'email',
    icon: (props) => (
      <IconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </IconWrapper>
    ),
  },
  {
    id: 'phone',
    href: 'tel:+201033776986',
    labelAr: 'اتصال THREAD',
    labelEn: 'Call THREAD',
    type: 'phone',
    icon: (props) => (
      <IconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </IconWrapper>
    ),
  },
];