import type { Language } from '../i18n/LanguageContext';

export interface ContactInfo {
  label: string;
  value: string;
  href: string;
}

export interface TeamMember {
  name: string;
  subtitle: string;
  role: string;
  location?: string;
  photo?: string;
  contacts: ContactInfo[];
  featured?: boolean;
  bookingUrl?: string;
}

export const teamMembers: Record<Language, TeamMember[]> = {
  de: [
    {
      name: 'Dr. Jan Hendrik Lukowski',
      subtitle: 'Strategie & Investmentstruktur',
      role: 'Gesamtkonzeption, Portfolioaufbau, Wirtschaftlichkeit',
      location: 'Schweiz',
      photo: '/images/jhl-new.jpg',
      contacts: [
        { label: 'Telefon', value: '+41 79 919 5455', href: 'tel:+41799195455' },
        { label: 'E-Mail', value: 'jhl@schwarzenbach-wm.com', href: 'mailto:jhl@schwarzenbach-wm.com' },
      ],
      featured: true,
      bookingUrl: 'https://outlook.office.com/bookwithme/user/60d26cc0e6db41dcafd51cea57a6eb95@dreso.com?anonymous&ismsaljsauthenabled&ep=pcard',
    },
    {
      name: 'Daniel Schwarz',
      subtitle: 'Immobilien & Akquisition',
      role: 'Marktzugang, Objektauswahl, Projektprüfung',
      location: 'Deutschland',
      photo: '/images/daniel-schwarz.jpg',
      contacts: [
        { label: 'Telefon', value: '+49 176 8088 7286', href: 'tel:+4917680887286' },
        { label: 'E-Mail', value: 'ds@schwarzenbach-wm.com', href: 'mailto:ds@schwarzenbach-wm.com' },
      ],
      featured: true,
    },
  ],
  en: [
    {
      name: 'Dr. Jan Hendrik Lukowski',
      subtitle: 'Strategy & Investment Structure',
      role: 'Overall conception, portfolio development, profitability',
      location: 'Switzerland',
      photo: '/images/jhl-new.jpg',
      contacts: [
        { label: 'Phone', value: '+41 79 919 5455', href: 'tel:+41799195455' },
        { label: 'Email', value: 'jhl@schwarzenbach-wm.com', href: 'mailto:jhl@schwarzenbach-wm.com' },
      ],
      featured: true,
      bookingUrl: 'https://outlook.office.com/bookwithme/user/60d26cc0e6db41dcafd51cea57a6eb95@dreso.com?anonymous&ismsaljsauthenabled&ep=pcard',
    },
    {
      name: 'Daniel Schwarz',
      subtitle: 'Real Estate & Acquisition',
      role: 'Market access, property selection, project evaluation',
      location: 'Germany',
      photo: '/images/daniel-schwarz.jpg',
      contacts: [
        { label: 'Phone', value: '+49 176 8088 7286', href: 'tel:+4917680887286' },
        { label: 'Email', value: 'ds@schwarzenbach-wm.com', href: 'mailto:ds@schwarzenbach-wm.com' },
      ],
      featured: true,
    },
  ],
};
