import { CONTACT_INFO } from './constants';
import type { SeoLink, SeoTag } from './components/SEOHead';

const BASE_URL = 'https://arkasolarenergy.com';

type SeoPayload = {
  title: string;
  tags: SeoTag[];
  links?: SeoLink[];
  jsonLd?: Record<string, unknown>[];
};

const globalTags: SeoTag[] = [
  { name: 'theme-color', content: '#E8400A' },
  { name: 'author', content: 'Arka Solar Energy' },
  { name: 'robots', content: 'index, follow' },
  { name: 'language', content: 'English' },
  { name: 'geo.region', content: 'IN-TN' },
  { name: 'geo.placename', content: 'Chennai, Tamil Nadu, India' },
  { property: 'og:locale', content: 'en_IN' },
  { property: 'og:site_name', content: 'Arka Solar Energy' },
  { property: 'og:type', content: 'website' },
  { property: 'og:updated_time', content: new Date().toISOString() },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: '@arkasolarenergy' },
  { name: 'twitter:creator', content: '@arkasolarenergy' },
];

const homeSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Arka Solar Energy',
  image: `${BASE_URL}/logo.jpg`,
  description:
    "Arka Solar Energy is Chennai's leading solar EPC company offering residential, commercial and industrial solar with PM Surya Ghar subsidy assistance and TANGEDCO net metering support.",
  url: BASE_URL,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Chennai, Tamil Nadu, India',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0827,
    longitude: 80.2707,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  sameAs: [
    'https://www.instagram.com/arkasolarenergy',
    'https://www.facebook.com/arkasolarenergy',
  ],
  priceRange: 'Rs Rs',
  areaServed: { '@type': 'State', name: 'Tamil Nadu' },
};

const organizationSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Arka Solar Energy',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.jpg`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT_INFO.phone,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: 'en',
  },
  sameAs: [
    'https://www.instagram.com/arkasolarenergy',
    'https://www.facebook.com/arkasolarenergy',
  ],
};

const websiteSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Arka Solar Energy',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const servicesSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Arka Solar Energy',
    url: BASE_URL,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Solar EPC Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Rooftop Solar Installation',
          description:
            'Custom rooftop solar systems for homes in Chennai with PM Surya Ghar subsidy and TANGEDCO net metering.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Apartment Complex Solar',
          description: 'Shared solar solutions for apartment complexes to reduce common area electricity costs.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial & Industrial Solar',
          description:
            'High-capacity solar plants for businesses with accelerated depreciation benefits.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Solar Operations & Maintenance',
          description:
            'Annual maintenance contracts including panel cleaning, performance monitoring and technical support.',
        },
      },
    ],
  },
};

const contactSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Arka Solar Energy',
  url: `${BASE_URL}/contact`,
  description: 'Contact Arka Solar Energy for a free solar site assessment in Chennai, Tamil Nadu.',
  publisher: {
    '@type': 'Organization',
    name: 'Arka Solar Energy',
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
  },
};

const buildPage = (data: Omit<SeoPayload, 'tags'> & { tags: SeoTag[] }): SeoPayload => ({
  ...data,
  tags: [...globalTags, ...data.tags],
});

export const SEO_BY_PATH: Record<string, SeoPayload> = {
  '/': buildPage({
    title: 'Best Solar Panel Installation in Chennai | Arka Solar Energy',
    tags: [
      {
        name: 'description',
        content:
          "Arka Solar Energy: Best solar panel installation in Chennai. Top-rated solar company in Chennai for rooftop solar, residential, and commercial projects with PM Surya Ghar subsidy.",
      },
      {
        name: 'keywords',
        content:
          'Solar panel installation in Chennai, Solar company in Chennai, Best solar company in Chennai, Rooftop solar installation Chennai, Solar energy company Chennai, solar panels, solar energy, solar panel installation, solar companies, solar panel cost, rooftop solar, solar panel installation Chennai, rooftop solar system Chennai, solar panel price Chennai, solar installer near me, solar company near me, solar rooftop subsidy Chennai, home solar system Chennai, commercial solar installation Chennai',
      },
      { property: 'og:url', content: `${BASE_URL}/` },
      { property: 'og:title', content: 'Best Solar Panel Installation in Chennai | Arka Solar Energy' },
      {
        property: 'og:description',
        content:
          "Arka Solar Energy is the best solar company in Chennai providing expert solar panel installation, rooftop solar systems, and PM Surya Ghar subsidy assistance.",
      },
      { property: 'og:image', content: `${BASE_URL}/og-home.jpg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:title', content: 'Arka Solar Energy | Best Solar Panel Installation in Chennai' },
      {
        name: 'twitter:description',
        content:
          "Arka Solar Energy provides expert solar panel installation in Chennai. Get PM Surya Ghar subsidy & TANGEDCO support for residential & commercial solar.",
      },
      { name: 'twitter:image', content: `${BASE_URL}/og-home.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${BASE_URL}/` }],
    jsonLd: [homeSchema, organizationSchema, websiteSchema],
  }),
  '/about': buildPage({
    title: 'About Arka Solar Energy | Solar Experts in Chennai',
    tags: [
      {
        name: 'description',
        content:
          "Arka Solar Energy is Chennai's leading solar EPC company. We provide quality solar solutions with expert engineering and dedicated support.",
      },
      {
        name: 'keywords',
        content:
          'about Arka Solar Energy, solar company Chennai, solar EPC Tamil Nadu, trusted solar installer Chennai, solar panel company Chennai, Chennai solar experts',
      },
      { property: 'og:url', content: `${BASE_URL}/about` },
      {
        property: 'og:title',
        content: 'About Arka Solar Energy | Solar Experts in Chennai',
      },
      {
        property: 'og:description',
        content:
          "Arka Solar Energy is Chennai's leading solar EPC company. We provide quality solar solutions with expert engineering and dedicated support.",
      },
      { property: 'og:image', content: `${BASE_URL}/og-about.jpg` },
      { name: 'twitter:title', content: 'About Arka Solar Energy | Solar Experts in Chennai' },
      {
        name: 'twitter:description',
        content:
          "Arka Solar Energy is Chennai's leading solar EPC company. We provide quality solar solutions with expert engineering and dedicated support.",
      },
      { name: 'twitter:image', content: `${BASE_URL}/og-about.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${BASE_URL}/about` }],
  }),
  '/services': buildPage({
    title: 'Solar EPC Services Chennai | Rooftop & Industrial Solar',
    tags: [
      {
        name: 'description',
        content:
          "Explore residential solar installation in Chennai and commercial solar solutions with Arka Solar Energy. Best solar EPC services in Tamil Nadu.",
      },
      {
        name: 'keywords',
        content:
          'residential solar Chennai, commercial solar installation Chennai, rooftop solar installation Chennai, cost of solar panel installation in Chennai, rooftop solar subsidy in Tamil Nadu, 3kw solar system price in Chennai, solar panel price Chennai, solar rooftop subsidy Chennai, home solar system Chennai',
      },
      { property: 'og:url', content: `${BASE_URL}/services` },
      { property: 'og:title', content: 'Solar EPC Services Chennai | Rooftop & Industrial Solar' },
      {
        property: 'og:description',
        content:
          'Arka Solar Energy provides end-to-end solar EPC services in Chennai, including residential rooftop solar, commercial projects, and TANGEDCO net metering.',
      },
      { property: 'og:image', content: `${BASE_URL}/og-services.jpg` },
      { name: 'twitter:title', content: 'Solar EPC Services Chennai | Rooftop & Industrial Solar' },
      {
        name: 'twitter:description',
        content:
          'Arka Solar Energy provides end-to-end solar EPC services in Chennai, including residential rooftop solar, commercial projects, and TANGEDCO net metering.',
      },
      { name: 'twitter:image', content: `${BASE_URL}/og-services.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${BASE_URL}/services` }],
    jsonLd: [servicesSchema],
  }),
  '/gallery': buildPage({
    title: 'Solar Project Gallery | Our Installations in Chennai',
    tags: [
      {
        name: 'description',
        content:
          "Explore Arka Solar Energy's gallery of successful solar installations across Chennai, featuring residential & commercial rooftop solar projects.",
      },
      {
        name: 'keywords',
        content:
          'solar installation photos Chennai, rooftop solar gallery, solar panel installation pictures Tamil Nadu, Arka Solar projects, solar installation Chennai portfolio',
      },
      { property: 'og:url', content: `${BASE_URL}/gallery` },
      { property: 'og:title', content: 'Solar Project Gallery | Our Installations in Chennai' },
      {
        property: 'og:description',
        content:
          "Explore Arka Solar Energy's gallery of successful solar installations across Chennai, featuring residential & commercial rooftop solar projects.",
      },
      { property: 'og:image', content: `${BASE_URL}/og-gallery.jpg` },
      { name: 'twitter:title', content: 'Solar Project Gallery | Our Installations in Chennai' },
      {
        name: 'twitter:description',
        content:
          "Explore Arka Solar Energy's gallery of successful solar installations across Chennai, featuring residential, commercial, and industrial rooftop solar projects.",
      },
      { name: 'twitter:image', content: `${BASE_URL}/og-gallery.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${BASE_URL}/gallery` }],
  }),
  '/contact': buildPage({
    title: 'Contact Us | Free Solar Quote & Site Survey in Chennai',
    tags: [
      {
        name: 'description',
        content:
          'Contact Arka Solar Energy for a free solar assessment in Chennai. Get a quote for your rooftop solar system. We respond within 24 hours.',
      },
      {
        name: 'keywords',
        content:
          'contact Arka Solar Energy, free solar quote Chennai, solar assessment Chennai, solar company contact Tamil Nadu, solar consultation Chennai',
      },
      { property: 'og:url', content: `${BASE_URL}/contact` },
      {
        property: 'og:title',
        content: 'Contact Us | Free Solar Quote & Site Survey in Chennai',
      },
      {
        property: 'og:description',
        content:
          'Contact Arka Solar Energy for a free solar assessment in Chennai. Get a quote for your rooftop solar system. We respond within 24 hours.',
      },
      { property: 'og:image', content: `${BASE_URL}/og-contact.jpg` },
      { name: 'twitter:title', content: 'Contact Us | Free Solar Quote & Site Survey in Chennai' },
      {
        name: 'twitter:description',
        content:
          'Contact Arka Solar Energy for a free solar site assessment in Chennai. Get a customized quote for your rooftop solar system today. We respond within 24 hours.',
      },
      { name: 'twitter:image', content: `${BASE_URL}/og-contact.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${BASE_URL}/contact` }],
    jsonLd: [contactSchema],
  }),
};

export const getSeoForPath = (pathname: string): SeoPayload => {
  return SEO_BY_PATH[pathname] ?? SEO_BY_PATH['/'];
};
