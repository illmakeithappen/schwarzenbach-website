import type { Language } from '../i18n/LanguageContext';

export interface Service {
  title: string;
  description: string;
}

export const services: Record<Language, Service[]> = {
  de: [
    {
      title: 'Strategische Investment- & Strukturkonzeption',
      description:
        'Entwicklung einer individuellen Investmentstrategie, abgestimmt auf Ihre Vermögensziele, steuerliche Situation und Risikobereitschaft. Wir definieren Portfoliostruktur, Investitionsvolumen und Umsetzungsfahrplan.',
    },
    {
      title: 'Finanzierung & Kapitalstruktur',
      description:
        'Strukturierung der optimalen Fremd- und Eigenkapitalquote, Auswahl geeigneter Finanzierungspartner und Begleitung des gesamten Finanzierungsprozesses – effizient, bankenunabhängig und auf Ihre Bedürfnisse zugeschnitten.',
    },
    {
      title: 'Steuerliche Strukturierung & Optimierung',
      description:
        'Zusammenarbeit mit spezialisierten Steuerberatern zur optimalen Gestaltung Ihrer Investitionsstruktur – national und grenzüberschreitend. Von der Rechtsformwahl bis zur laufenden steuerlichen Betreuung.',
    },
    {
      title: 'Asset Management & laufende Betreuung',
      description:
        'Professionelle Verwaltung Ihres Portfolios: Mietermanagement, Instandhaltung, Reporting und strategische Weiterentwicklung – damit Ihr Investment dauerhaft performt.',
    },
  ],
  en: [
    {
      title: 'Strategic Investment & Structural Design',
      description:
        'Development of an individual investment strategy, tailored to your wealth goals, tax situation and risk appetite. We define portfolio structure, investment volume and implementation roadmap.',
    },
    {
      title: 'Financing & Capital Structure',
      description:
        'Structuring the optimal debt-to-equity ratio, selecting suitable financing partners and accompanying the entire financing process – efficient, bank-independent and tailored to your needs.',
    },
    {
      title: 'Tax Structuring & Optimisation',
      description:
        'Collaboration with specialised tax advisors for the optimal design of your investment structure – domestic and cross-border. From choice of legal form to ongoing tax management.',
    },
    {
      title: 'Asset Management & Ongoing Support',
      description:
        'Professional management of your portfolio: tenant management, maintenance, reporting and strategic development – so your investment performs sustainably.',
    },
  ],
};

export interface BenefitItem {
  title: string;
  description: string;
}

export const benefits: Record<Language, BenefitItem[]> = {
  de: [
    {
      title: 'Attraktives Marktumfeld',
      description:
        'Struktureller Nachfrageüberhang in deutschen Ballungsräumen, stabile Mietentwicklung und ein reguliertes Marktumfeld bieten langfristige Planungssicherheit.',
    },
    {
      title: 'Kapital- & Finanzierungseffizienz',
      description:
        'Attraktive Fremdfinanzierungskonditionen ermöglichen einen effizienten Kapitaleinsatz und beschleunigen den Vermögensaufbau durch den Hebel-Effekt.',
    },
    {
      title: 'Standortvielfalt mit Substanz',
      description:
        'Gezielte Investitionen in Wachstumsstädte mit positiver demographischer Entwicklung, guter Infrastruktur und nachhaltigem Wertsteigerungspotenzial.',
    },
    {
      title: 'Strukturierte steuerliche Rahmenbedingungen',
      description:
        'Durch geeignete Rechtsformen und grenzüberschreitende Strukturierung lassen sich steuerliche Vorteile systematisch nutzen – transparent und compliant.',
    },
  ],
  en: [
    {
      title: 'Attractive Market Environment',
      description:
        'Structural excess demand in German metropolitan areas, stable rental development and a regulated market environment offer long-term planning security.',
    },
    {
      title: 'Capital & Financing Efficiency',
      description:
        'Attractive debt financing conditions enable efficient capital deployment and accelerate wealth building through the leverage effect.',
    },
    {
      title: 'Location Diversity with Substance',
      description:
        'Targeted investments in growing cities with positive demographic development, good infrastructure and sustainable appreciation potential.',
    },
    {
      title: 'Structured Tax Framework',
      description:
        'Through suitable legal forms and cross-border structuring, tax advantages can be systematically utilised – transparent and compliant.',
    },
  ],
};

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details: string[];
}

export const processSteps: Record<Language, ProcessStep[]> = {
  de: [
    {
      number: 1,
      title: 'Strategische Konzeption',
      description:
        'Analyse Ihrer Ausgangslage, Definition der Investmentziele und Entwicklung einer massgeschneiderten Portfoliostrategie.',
      details: [
        'Persönliche Vermögens- und Zielanalyse',
        'Definition von Risikoprofil und Anlagehorizont',
        'Strukturierung der optimalen Portfolioaufstellung',
      ],
    },
    {
      number: 2,
      title: 'Objektauswahl & Erwerb',
      description:
        'Identifikation geeigneter Investmentobjekte anhand definierter Qualitätskriterien und professionelle Begleitung des Erwerbsprozesses.',
      details: [
        'Zugang zu Off-Market-Objekten und exklusiven Projekten',
        'Professionelle Due Diligence und Bewertung',
        'Kaufabwicklung',
      ],
    },
    {
      number: 3,
      title: 'Finanzierung & Umsetzung',
      description:
        'Strukturierung der optimalen Kapitalstruktur und Begleitung der Finanzierung bis zur Auszahlung.',
      details: [
        'Bankenunabhängige Finanzierungsberatung',
        'Optimierung der Fremd-/Eigenkapitalquote',
        'Steuerliche Strukturierung in Zusammenarbeit mit Fachberatern',
      ],
    },
    {
      number: 4,
      title: 'Asset Management & Entwicklung',
      description:
        'Laufende Betreuung und Weiterentwicklung Ihres Portfolios für nachhaltige Wertschöpfung.',
      details: [
        'Professionelles Miet- und Objektmanagement',
        'Regelmässiges Reporting und Performanceanalyse',
        'Strategische Portfolioentwicklung und Reinvestition',
      ],
    },
  ],
  en: [
    {
      number: 1,
      title: 'Strategic Conception',
      description:
        'Analysis of your starting position, definition of investment goals and development of a tailored portfolio strategy.',
      details: [
        'Personal wealth and goal analysis',
        'Definition of risk profile and investment horizon',
        'Structuring of optimal portfolio allocation',
      ],
    },
    {
      number: 2,
      title: 'Property Selection & Acquisition',
      description:
        'Identification of suitable investment properties based on defined quality criteria and professional support throughout the acquisition process.',
      details: [
        'Access to off-market properties and exclusive projects',
        'Professional due diligence and valuation',
        'Purchase execution',
      ],
    },
    {
      number: 3,
      title: 'Financing & Implementation',
      description:
        'Structuring the optimal capital structure and accompanying financing through to disbursement.',
      details: [
        'Bank-independent financing advisory',
        'Optimisation of debt-to-equity ratio',
        'Tax structuring in collaboration with specialist advisors',
      ],
    },
    {
      number: 4,
      title: 'Asset Management & Development',
      description:
        'Ongoing support and development of your portfolio for sustainable value creation.',
      details: [
        'Professional rental and property management',
        'Regular reporting and performance analysis',
        'Strategic portfolio development and reinvestment',
      ],
    },
  ],
};

export interface AudienceSegment {
  title: string;
  description: string;
}

export const audienceSegments: Record<Language, AudienceSegment[]> = {
  de: [
    {
      title: 'Unternehmer & Selbständige',
      description:
        'Die einen strukturierten Vermögensaufbau ausserhalb ihres operativen Geschäfts suchen.',
    },
    {
      title: 'Privatpersonen',
      description:
        'Die ihr Portfolio um substanzstarke Sachwerte erweitern und von professionellem Management profitieren möchten.',
    },
    {
      title: 'Internationale Investoren',
      description:
        'Die den deutschen Wohnimmobilienmarkt erschliessen und dabei auf lokale Expertise und strukturierte Prozesse setzen.',
    },
    {
      title: 'Langfristige Anleger',
      description:
        'Die Wert auf Substanz, Planbarkeit und nachhaltigen Vermögenszuwachs legen – statt auf kurzfristige Spekulation.',
    },
  ],
  en: [
    {
      title: 'Entrepreneurs & Self-Employed',
      description:
        'Who seek structured wealth building outside their operational business.',
    },
    {
      title: 'Private Individuals',
      description:
        'Who want to expand their portfolio with substantial tangible assets and benefit from professional management.',
    },
    {
      title: 'International Investors',
      description:
        'Who want to access the German residential real estate market while relying on local expertise and structured processes.',
    },
    {
      title: 'Long-Term Investors',
      description:
        'Who value substance, predictability and sustainable wealth growth – rather than short-term speculation.',
    },
  ],
};
