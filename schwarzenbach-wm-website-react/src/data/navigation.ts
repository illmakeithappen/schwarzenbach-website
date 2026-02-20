import type { Language } from '../i18n/LanguageContext';

export interface NavItem {
  label: string;
  path: string;
}

export const mainNavItems: Record<Language, NavItem[]> = {
  de: [
    { label: 'Home', path: '/' },
    { label: 'Investment Philosophie', path: '/#philosophie' },
    { label: 'Projekte', path: '/#projekte' },
    { label: 'Team & Kontakt', path: '/#team' },
    { label: 'FAQ', path: '/faq' },
  ],
  en: [
    { label: 'Home', path: '/' },
    { label: 'Investment Philosophy', path: '/#philosophie' },
    { label: 'Projects', path: '/#projekte' },
    { label: 'Team & Contact', path: '/#team' },
    { label: 'FAQ', path: '/faq' },
  ],
};

export const footerNavItems: Record<Language, NavItem[]> = {
  de: [
    { label: 'Impressum', path: '/impressum' },
    { label: 'Datenschutz', path: '/datenschutz' },
  ],
  en: [
    { label: 'Legal Notice', path: '/impressum' },
    { label: 'Privacy Policy', path: '/datenschutz' },
  ],
};
