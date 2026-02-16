
import React from 'react';
import { SOCIAL_LINKS, CONTACT_LINKS } from '../lib/links';
import { useLanguage } from './LanguageProvider';

interface Props {
  variant: 'navbar' | 'footer' | 'contact';
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const SocialContactIcons: React.FC<Props> = ({ variant, showLabels = false, size = 'md' }) => {
  const { lang } = useLanguage();
  
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const containerClasses = {
    navbar: 'flex items-center gap-3',
    footer: 'flex flex-wrap gap-4 justify-start',
    contact: 'grid grid-cols-1 gap-6'
  };

  const renderLink = (link: typeof SOCIAL_LINKS[0], isSocial: boolean) => (
    <a
      key={link.id}
      href={link.href}
      target={link.type !== 'phone' && link.type !== 'email' ? '_blank' : undefined}
      rel={link.type !== 'phone' && link.type !== 'email' ? 'noopener noreferrer' : undefined}
      aria-label={lang === 'ar' ? link.labelAr : link.labelEn}
      className={`group flex items-center gap-3 transition-all duration-300 hover:text-primary ${
        variant === 'contact' ? 'p-4 rounded-2xl glass hover:border-primary/50' : ''
      }`}
    >
      <div className={`${sizeClasses[size]} text-dark-900 dark:text-white group-hover:text-primary`}>
        {link.icon({ className: sizeClasses[size] })}
      </div>
      {showLabels && (
        <span className="text-sm font-semibold">
          {lang === 'ar' ? link.labelAr : link.labelEn}
        </span>
      )}
    </a>
  );

  return (
    <div className={containerClasses[variant]}>
      {variant === 'contact' ? (
        <>
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-primary/20 pb-2 mb-4">
              {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            {CONTACT_LINKS.map(link => renderLink(link, false))}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-primary/20 pb-2 mb-4">
              {lang === 'ar' ? 'تابعنا' : 'Follow Us'}
            </h3>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map(link => (
                <div key={link.id}>
                   {renderLink(link, true)}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {SOCIAL_LINKS.map(link => renderLink(link, true))}
          {variant === 'navbar' && renderLink(CONTACT_LINKS.find(c => c.type === 'whatsapp')!, false)}
          {variant === 'footer' && CONTACT_LINKS.map(link => renderLink(link, false))}
        </>
      )}
    </div>
  );
};

export default SocialContactIcons;
