import type { Metadata } from 'next'
import { SITE } from './constants'

// ─── Homepage Metadata ────────────────────────────────────────────────────────
export const homeMetadata: Metadata = {
  title: 'Ethiopia Film Fixer | Permits, Logistics & Production Support',
  description:
    'Ethiopia film fixer for international productions. Sawla Films supports permits, customs, location scouting, drone planning, logistics, local crew, and shoot-day fixing across all Ethiopian regions.',
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Ethiopia Film Fixer | Sawla Films',
    title: 'Ethiopia Film Fixer | Permits, Logistics & Production Support',
    description:
      'Permits, access, logistics, customs, local crew, drone planning, and on-ground fixing for productions filming across Ethiopia.',
    url: SITE.url,
    locale: 'en_US',
    images: [
      {
        url: `${SITE.url}/assets/images/og-default-1200x630.jpg`,
        width: 1200,
        height: 630,
        alt: 'Sawla Films Ethiopia film fixer providing permits, logistics, and production support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopia Film Fixer | Sawla Films',
    description:
      'Ethiopia film fixer for international productions. Permits, logistics, customs, scouting, drone planning, local crew, and shoot-day fixing.',
    images: [`${SITE.url}/assets/images/og-default-1200x630.jpg`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/assets/icons/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/assets/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
  other: {
    'theme-color': '#0B0F14',
  },
}

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
export const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: 'Sawla Films',
      alternateName: 'Ethiopia Film Fixer',
      url: SITE.url,
      email: SITE.email,
      telephone: '+251927115454',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/brand/sawla-films-logo.jpg`,
      },
      image: `${SITE.url}/assets/images/og-default-1200x630.jpg`,
      description:
        'Sawla Films is an Ethiopia-based film fixer and production partner for international documentaries, factual series, commercials, and independent films.',
      foundingLocation: { '@type': 'Place', name: 'Addis Ababa, Ethiopia' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Addis Ababa',
        addressCountry: 'ET',
      },
      areaServed: [{ '@type': 'Country', name: 'Ethiopia' }],
      knowsAbout: [
        'Ethiopia film fixer services',
        'Filming permits in Ethiopia',
        'Production logistics in Ethiopia',
        'Location scouting in Ethiopia',
        'Drone filming coordination in Ethiopia',
        'Customs preparation for film equipment in Ethiopia',
        'Local crew and translator coordination in Ethiopia',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Production inquiries',
          email: SITE.email,
          telephone: '+251927115454',
          availableLanguage: ['en', 'am'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Production inquiries alternate',
          telephone: '+251970578306',
          availableLanguage: ['en', 'am'],
        },
      ],
      sameAs: [SITE.sisterSite],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: 'Ethiopia Film Fixer | Sawla Films',
      publisher: { '@id': `${SITE.url}/#organization` },
      inLanguage: 'en',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE.url}/?s={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}/#webpage`,
      url: SITE.url,
      name: 'Ethiopia Film Fixer for Permits, Logistics and Production Support',
      description:
        'Ethiopia film fixer and production support for international crews, including permits, customs, scouting, logistics, drone planning, local crew, and shoot-day fixing across Ethiopia.',
      isPartOf: { '@id': `${SITE.url}/#website` },
      about: { '@id': `${SITE.url}/#organization` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${SITE.url}/assets/images/og-default-1200x630.jpg`,
      },
      inLanguage: 'en',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        ],
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#professionalservice`,
      name: 'Sawla Films (Ethiopia Film Fixer)',
      url: SITE.url,
      image: `${SITE.url}/assets/images/og-default-1200x630.jpg`,
      description:
        'Film fixer services in Ethiopia for international productions: permits, customs, location scouting, production logistics, drone planning, local crew support, and on-ground fixing across all 12 Ethiopian regional states.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Addis Ababa',
        addressCountry: 'ET',
      },
      priceRange: 'Contact for project quote',
      currenciesAccepted: 'USD, EUR, GBP',
      areaServed: [{ '@type': 'Country', name: 'Ethiopia' }],
      availableLanguage: ['en', 'am', 'om', 'ti', 'so'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Production inquiries',
          email: SITE.email,
          telephone: '+251927115454',
        },
      ],
      sameAs: [SITE.sisterSite],
      parentOrganization: { '@id': `${SITE.url}/#organization` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a film fixer and do I need one in Ethiopia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A film fixer handles the local production infrastructure that international crews cannot manage remotely: permits, access approvals, logistics routing, local crew sourcing, customs coordination, and shoot-day problem solving. In Ethiopia, where permits span multiple federal, regional, and site-level authorities, a production fixer is not optional for most international shoots. Sawla Films provides end-to-end fixer services across all Ethiopian regions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you handle filming permits in Ethiopia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Sawla Films supports federal, regional, and location-specific filming approvals when required, including heritage sites, protected areas, religious locations, and community settings. Permit requirements vary by location, subject matter, crew nationality, and format. We assess your specific route and build the correct approval pathway for your shoot.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a film fixer cost in Ethiopia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Film fixer costs vary based on shoot duration, regions covered, permit complexity, crew size, and drone requirements. Sawla Films provides project-specific quotes following a feasibility review.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to get a filming permit in Ethiopia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Federal and regional approvals typically require a minimum of two to four weeks from a complete application. Sawla Films advises building permit lead time into your pre-production schedule from the first planning call.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where in Ethiopia does Sawla Films operate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sawla Films supports productions across all 12 regional states of Ethiopia, including Afar, the Omo Valley, Tigray, Somali Regional State, and Gambela, as well as urban productions in Addis Ababa.',
          },
        },
      ],
    },
  ],
}
