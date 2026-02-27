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
  { name: 'twitter:card', content: 'summary_large_image' },
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
    title: 'Arka Solar Energy | Best Solar EPC Company in Chennai',
    tags: [
      {
        name: 'description',
        content:
          "Arka Solar Energy is Chennai's trusted solar EPC company. Residential, commercial and industrial solar with PM Surya Ghar subsidy up to Rs 78,000. Complete TANGEDCO net metering support. Get a free site assessment.",
      },
      {
        name: 'keywords',
        content:
          'solar panel installation Chennai, best solar company Chennai, solar EPC company Tamil Nadu, PM Surya Ghar Chennai, rooftop solar Chennai, TANGEDCO net metering, solar subsidy Tamil Nadu, residential solar Chennai, Arka Solar Energy',
      },
      { property: 'og:url', content: `${BASE_URL}/` },
      { property: 'og:title', content: 'Arka Solar Energy | Best Solar EPC Company in Chennai' },
      {
        property: 'og:description',
        content:
          "Chennai's trusted solar EPC partner. Residential, commercial and industrial solar with PM Surya Ghar subsidy up to Rs 78,000. Free site assessment available.",
      },
      { property: 'og:image', content: `${BASE_URL}/og-home.jpg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:title', content: 'Arka Solar Energy | Best Solar EPC Company in Chennai' },
      {
        name: 'twitter:description',
        content:
          "Chennai's trusted solar EPC partner. PM Surya Ghar subsidy up to Rs 78,000. Free site assessment.",
      },
      { name: 'twitter:image', content: `${BASE_URL}/og-home.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${BASE_URL}/` }],
    jsonLd: [homeSchema],
  }),
  '/about': buildPage({
    title: "About Us | Arka Solar Energy — Chennai's Trusted Solar EPC Partner",
    tags: [
      {
        name: 'description',
        content:
          "Learn about Arka Solar Energy — Chennai's dedicated solar EPC company. Technical expertise, Tier-1 equipment, and a customer-first approach for every residential, commercial and industrial solar project in Tamil Nadu.",
      },
      {
        name: 'keywords',
        content:
          'about Arka Solar Energy, solar company Chennai, solar EPC Tamil Nadu, trusted solar installer Chennai, solar panel company Chennai, Chennai solar experts',
      },
      { property: 'og:url', content: `${BASE_URL}/about` },
      {
        property: 'og:title',
        content: "About Us | Arka Solar Energy — Chennai's Trusted Solar EPC Partner",
      },
      {
        property: 'og:description',
        content:
          "Chennai's dedicated solar EPC company with deep expertise in Tamil Nadu's climate, TANGEDCO regulations, and PM Surya Ghar subsidy processing.",
      },
      { property: 'og:image', content: `${BASE_URL}/og-about.jpg` },
      { name: 'twitter:title', content: 'About Us | Arka Solar Energy Chennai' },
      {
        name: 'twitter:description',
        content:
          "Chennai's dedicated solar EPC company. Tier-1 equipment, end-to-end service, and TANGEDCO expertise.",
      },
      { name: 'twitter:image', content: `${BASE_URL}/og-about.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${BASE_URL}/about` }],
  }),
  '/services': buildPage({
    title: 'Solar EPC Services in Chennai | Residential, Commercial and Industrial | Arka Solar Energy',
    tags: [
      {
        name: 'description',
        content:
          'Complete solar EPC services in Chennai — residential rooftop solar, apartment complex solar, commercial and industrial plants, PM Surya Ghar subsidy processing, TANGEDCO net metering approvals, and O&M. Get a free quote.',
      },
      {
        name: 'keywords',
        content:
          'residential solar Chennai, commercial solar Tamil Nadu, industrial solar Chennai, apartment rooftop solar Chennai, TANGEDCO net metering, solar O&M Chennai, solar EPC services Tamil Nadu, PM Surya Ghar subsidy Tamil Nadu, solar panel installation cost Chennai, 3kW solar system Chennai',
      },
      { property: 'og:url', content: `${BASE_URL}/services` },
      { property: 'og:title', content: 'Solar EPC Services in Chennai | Arka Solar Energy' },
      {
        property: 'og:description',
        content:
          'End-to-end solar EPC services in Chennai — residential, commercial, industrial, and apartment solar with PM Surya Ghar subsidy and TANGEDCO support.',
      },
      { property: 'og:image', content: `${BASE_URL}/og-services.jpg` },
      { name: 'twitter:title', content: 'Solar EPC Services in Chennai | Arka Solar Energy' },
      {
        name: 'twitter:description',
        content:
          'Residential, commercial and industrial solar EPC in Chennai. PM Surya Ghar subsidy and TANGEDCO support.',
      },
      { name: 'twitter:image', content: `${BASE_URL}/og-services.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${BASE_URL}/services` }],
    jsonLd: [servicesSchema],
  }),
  '/gallery': buildPage({
    title: 'Solar Installation Gallery | Residential and Commercial Projects | Arka Solar Energy Chennai',
    tags: [
      {
        name: 'description',
        content:
          "Browse Arka Solar Energy's completed solar installations across Chennai — residential rooftops, apartment complexes, commercial buildings, and industrial plants. Real projects, real results.",
      },
      {
        name: 'keywords',
        content:
          'solar installation photos Chennai, rooftop solar gallery, solar panel installation pictures Tamil Nadu, Arka Solar projects, solar installation Chennai portfolio',
      },
      { property: 'og:url', content: `${BASE_URL}/gallery` },
      { property: 'og:title', content: 'Solar Installation Gallery | Arka Solar Energy Chennai' },
      {
        property: 'og:description',
        content:
          'Real solar installations across Chennai — residential, apartment, commercial and industrial projects by Arka Solar Energy.',
      },
      { property: 'og:image', content: `${BASE_URL}/og-gallery.jpg` },
      { name: 'twitter:title', content: 'Solar Installation Gallery | Arka Solar Energy' },
      {
        name: 'twitter:description',
        content: 'Real solar projects across Chennai — residential, commercial and industrial.',
      },
      { name: 'twitter:image', content: `${BASE_URL}/og-gallery.jpg` },
    ],
    links: [{ rel: 'canonical', href: `${BASE_URL}/gallery` }],
  }),
  '/contact': buildPage({
    title: 'Contact Us | Get Free Solar Quote in Chennai | Arka Solar Energy',
    tags: [
      {
        name: 'description',
        content:
          'Contact Arka Solar Energy for a free solar site assessment in Chennai. Call, email, or fill out our form and our solar experts will reach you within 24 hours. Serving all areas of Tamil Nadu.',
      },
      {
        name: 'keywords',
        content:
          'contact Arka Solar Energy, free solar quote Chennai, solar assessment Chennai, solar company contact Tamil Nadu, solar consultation Chennai',
      },
      { property: 'og:url', content: `${BASE_URL}/contact` },
      {
        property: 'og:title',
        content: 'Contact Us | Get Free Solar Quote in Chennai | Arka Solar Energy',
      },
      {
        property: 'og:description',
        content:
          'Get a free solar site assessment in Chennai. Our solar experts respond within 24 hours. Call, email, or fill the form.',
      },
      { property: 'og:image', content: `${BASE_URL}/og-contact.jpg` },
      { name: 'twitter:title', content: 'Contact Arka Solar Energy | Free Solar Quote Chennai' },
      {
        name: 'twitter:description',
        content: 'Free solar site assessment in Chennai. Our experts respond within 24 hours.',
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
