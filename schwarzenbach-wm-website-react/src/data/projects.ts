import type { Language } from '../i18n/LanguageContext';

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface ProjectAdvantage {
  bold: string;
  text: string;
}

export interface Project {
  id: string;
  badge: string;
  badgeType: 'neubau' | 'bestand' | 'premium';
  title: string;
  location: string;
  image?: string;
  imageAlt?: string;
  details: { label: string; value: string }[];
  priceFrom: string;
  priceTo: string;
  advantages: ProjectAdvantage[];
  highlights: ProjectHighlight[];
  featured?: boolean;
}

export const projects: Record<Language, Project[]> = {
  de: [
    {
      id: 'luisengarten',
      badge: 'Neubau',
      badgeType: 'neubau',
      title: 'Luisen Garten',
      location: 'Berlin, Deutschland',
      image: '/images/luisengarten.jpg',
      imageAlt: 'Luisengarten Neubau Berlin',
      details: [
        { label: 'Förderung', value: 'KfW 40' },
        { label: 'Einheiten', value: '32 Wohnungen' },
        { label: 'Wohnungstypen', value: '1-4 Zimmer' },
        { label: 'Kaltmiete', value: 'ca. \u20AC23/m\u00B2' },
      ],
      priceFrom: '\u20AC256.000',
      priceTo: '\u20AC647.000',
      advantages: [
        { bold: 'Neubau', text: 'Minimaler Instandhaltungsbedarf in den ersten Jahren' },
        { bold: 'KfW 40 Energiestandard', text: 'Höchste Energieeffizienz, niedrige Nebenkosten' },
        { bold: 'Flexible Grössen', text: '1-4 Zimmer für breite Mieterschaft' },
        { bold: 'Berlin-Markt', text: 'Starkes Wertsteigerungspotenzial in Hauptstadt' },
        { bold: 'Moderne Ausstattung', text: 'Hochwertige Materialien und zeitgemässes Design' },
        { bold: 'Grüne Aussenanlagen', text: 'Attraktive Gartenanlage für Mieter' },
      ],
      highlights: [
        { title: 'Energieeffizienz', description: 'KfW 40 Standard reduziert Betriebskosten und steigert Attraktivität' },
        { title: 'Nachhaltigkeit', description: 'Umweltfreundliche Bauweise mit langfristiger Wertstabilität' },
        { title: 'Rendite', description: 'Stabile Mieteinnahmen in wachsendem Berliner Markt' },
      ],
    },
    {
      id: 'p68',
      badge: 'Neubau',
      badgeType: 'neubau',
      title: 'P68',
      location: 'Berlin, Deutschland',
      image: '/images/p68.jpg',
      imageAlt: 'P68 Wohnprojekt Berlin',
      details: [
        { label: 'Förderung', value: 'KfW 40 QNG' },
        { label: 'Einheiten', value: '46 Wohnungen' },
        { label: 'Wohnungstypen', value: '1-4 Zimmer' },
      ],
      priceFrom: '\u20AC270.000',
      priceTo: '\u20AC650.000',
      advantages: [],
      highlights: [],
    },
    {
      id: 'waldhausquartier',
      badge: 'Neubau',
      badgeType: 'neubau',
      title: 'Waldhaus Quartier',
      location: 'Berlin, Deutschland',
      image: '/images/waldhausquartier.jpg',
      imageAlt: 'Waldhaus Quartier Berlin',
      details: [
        { label: 'Förderung', value: 'KfW 40 QNG' },
        { label: 'Einheiten', value: '195 Wohnungen' },
        { label: 'Wohnungstypen', value: '1-4 Zimmer' },
      ],
      priceFrom: '\u20AC218.000',
      priceTo: '\u20AC794.000',
      advantages: [],
      highlights: [],
      featured: true,
    },
    {
      id: 'w22',
      badge: 'Neubau',
      badgeType: 'neubau',
      title: 'W22',
      location: 'Berlin, Deutschland',
      image: '/images/w22.jpg',
      imageAlt: 'W22 Wohnprojekt Berlin',
      details: [
        { label: 'Förderung', value: '-' },
        { label: 'Einheiten', value: '14 Wohnungen' },
        { label: 'Wohnungstypen', value: '3-Zimmer' },
      ],
      priceFrom: '\u20AC731.000',
      priceTo: '\u20AC920.000',
      advantages: [],
      highlights: [],
    },
  ],
  en: [
    {
      id: 'luisengarten',
      badge: 'New Build',
      badgeType: 'neubau',
      title: 'Luisen Garten',
      location: 'Berlin, Germany',
      image: '/images/luisengarten.jpg',
      imageAlt: 'Luisengarten new build Berlin',
      details: [
        { label: 'Subsidy', value: 'KfW 40' },
        { label: 'Units', value: '32 apartments' },
        { label: 'Apartment types', value: '1-4 rooms' },
        { label: 'Base rent', value: 'approx. \u20AC23/m\u00B2' },
      ],
      priceFrom: '\u20AC256,000',
      priceTo: '\u20AC647,000',
      advantages: [
        { bold: 'New build', text: 'Minimal maintenance requirements in the first years' },
        { bold: 'KfW 40 energy standard', text: 'Highest energy efficiency, low ancillary costs' },
        { bold: 'Flexible sizes', text: '1-4 rooms for a broad tenant base' },
        { bold: 'Berlin market', text: 'Strong appreciation potential in the capital' },
        { bold: 'Modern fittings', text: 'High-quality materials and contemporary design' },
        { bold: 'Green outdoor areas', text: 'Attractive garden facilities for tenants' },
      ],
      highlights: [
        { title: 'Energy efficiency', description: 'KfW 40 standard reduces operating costs and increases attractiveness' },
        { title: 'Sustainability', description: 'Environmentally friendly construction with long-term value stability' },
        { title: 'Returns', description: 'Stable rental income in a growing Berlin market' },
      ],
    },
    {
      id: 'p68',
      badge: 'New Build',
      badgeType: 'neubau',
      title: 'P68',
      location: 'Berlin, Germany',
      image: '/images/p68.jpg',
      imageAlt: 'P68 residential project Berlin',
      details: [
        { label: 'Subsidy', value: 'KfW 40 QNG' },
        { label: 'Units', value: '46 apartments' },
        { label: 'Apartment types', value: '1-4 rooms' },
      ],
      priceFrom: '\u20AC270,000',
      priceTo: '\u20AC650,000',
      advantages: [],
      highlights: [],
    },
    {
      id: 'waldhausquartier',
      badge: 'New Build',
      badgeType: 'neubau',
      title: 'Waldhaus Quartier',
      location: 'Berlin, Germany',
      image: '/images/waldhausquartier.jpg',
      imageAlt: 'Waldhaus Quartier Berlin',
      details: [
        { label: 'Subsidy', value: 'KfW 40 QNG' },
        { label: 'Units', value: '195 apartments' },
        { label: 'Apartment types', value: '1-4 rooms' },
      ],
      priceFrom: '\u20AC218,000',
      priceTo: '\u20AC794,000',
      advantages: [],
      highlights: [],
      featured: true,
    },
    {
      id: 'w22',
      badge: 'New Build',
      badgeType: 'neubau',
      title: 'W22',
      location: 'Berlin, Germany',
      image: '/images/w22.jpg',
      imageAlt: 'W22 residential project Berlin',
      details: [
        { label: 'Subsidy', value: '-' },
        { label: 'Units', value: '14 apartments' },
        { label: 'Apartment types', value: '3 rooms' },
      ],
      priceFrom: '\u20AC731,000',
      priceTo: '\u20AC920,000',
      advantages: [],
      highlights: [],
    },
  ],
};
