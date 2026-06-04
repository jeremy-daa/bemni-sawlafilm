import { SITE, NAV_GUIDES, NAV_SERVICES } from '@/lib/constants'

export type SchemaNode = Record<string, unknown>

const SITE_IMAGE = `${SITE.url}/assets/images/og-default-1200x630.jpg`
const LOGO = `${SITE.url}/brand/sawla-films-logo.jpg`

const PAGE_LABELS: Record<string, string> = {
  about: 'About',
  blog: 'Field Notes',
  'bringing-film-equipment-to-ethiopia': 'Bringing Film Equipment to Ethiopia',
  'best-time-to-film-in-ethiopia': 'Best Time to Film in Ethiopia',
  'case-studies': 'Case Studies',
  clients: 'Clients and Credits',
  contact: 'Contact',
  'customs-clearance-film-equipment-ethiopia': 'Customs and Equipment Import',
  'drone-permits-ethiopia': 'Drone Permits in Ethiopia',
  'ethiopia-film-fixer-services': 'Film Fixer Services in Ethiopia',
  'ethiopia-film-production-costs': 'Ethiopia Film Production Costs',
  'ethiopia-filming-guide': 'Ethiopia Filming Guide',
  faq: 'FAQ',
  'filming-permits-ethiopia': 'Filming Permits in Ethiopia',
  'filming-security-access-ethiopia': 'Security and Access Coordination',
  'how-we-work': 'How We Work',
  'local-crew-translators-ethiopia': 'Local Crew, Translators and Liaison',
  'location-scouting-ethiopia': 'Location Scouting in Ethiopia',
  'on-ground-fixer-ethiopia': 'On-Ground Fixing in Ethiopia',
  'production-logistics-ethiopia': 'Production Logistics in Ethiopia',
  'vip-celebrity-handling-ethiopia': 'VIP and Celebrity Handling',
  team: 'Our Team',
  'what-to-film-in-ethiopia': 'What to Film in Ethiopia',
}

export const organizationId = `${SITE.url}/#organization`
export const websiteId = `${SITE.url}/#website`
export const professionalServiceId = `${SITE.url}/#professionalservice`

export const publisher = { '@id': organizationId }

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function siteIdentitySchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'Sawla Films',
        alternateName: 'Ethiopia Film Fixer',
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.whatsapp1,
        logo: {
          '@type': 'ImageObject',
          url: LOGO,
        },
        image: SITE_IMAGE,
        description:
          'Sawla Films is an Ethiopia-based film fixer and production support company for international documentary, broadcast, factual, commercial, NGO, independent, and high-profile productions.',
        foundingLocation: { '@type': 'Place', name: 'Addis Ababa, Ethiopia' },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Addis Ababa',
          addressCountry: 'ET',
        },
        areaServed: { '@type': 'Country', name: 'Ethiopia' },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'Production inquiries',
            email: SITE.email,
            telephone: SITE.whatsapp1,
            availableLanguage: ['English', 'Amharic'],
          },
          {
            '@type': 'ContactPoint',
            contactType: 'Production inquiries alternate',
            telephone: SITE.whatsapp2,
            availableLanguage: ['English', 'Amharic'],
          },
        ],
        sameAs: [SITE.sisterSite, SITE.youtube, SITE.facebook],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE.url,
        name: 'Ethiopia Film Fixer | Sawla Films',
        publisher: { '@id': organizationId },
        inLanguage: 'en',
      },
    ],
  }
}

export function homepageSchema(description: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE.url}/#webpage`,
        url: SITE.url,
        name: 'Ethiopia Film Fixer for Permits, Logistics and Production Support',
        description,
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: SITE_IMAGE,
        },
        inLanguage: 'en',
      },
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': professionalServiceId,
        name: 'Sawla Films (Ethiopia Film Fixer)',
        url: SITE.url,
        image: SITE_IMAGE,
        logo: LOGO,
        description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Addis Ababa',
          addressCountry: 'ET',
        },
        telephone: SITE.whatsapp1,
        email: SITE.email,
        priceRange: 'Project-specific quote',
        currenciesAccepted: 'USD, EUR, GBP',
        areaServed: { '@type': 'Country', name: 'Ethiopia' },
        availableLanguage: ['English', 'Amharic', 'Oromo', 'Tigrinya', 'Somali'],
        sameAs: [SITE.sisterSite],
        parentOrganization: { '@id': organizationId },
        makesOffer: NAV_SERVICES.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.label,
            url: absoluteUrl(service.href),
          },
        })),
      },
    ],
  }
}

export function breadcrumbSchemaForPath(pathname: string) {
  const cleanPath = pathname.split('?')[0].replace(/\/$/, '') || '/'
  const segments = cleanPath.split('/').filter(Boolean)
  const list: { name: string; item: string }[] = [{ name: 'Home', item: SITE.url }]

  if (segments[0] === 'blog' && segments[1]) {
    list.push({ name: 'Field Notes', item: absoluteUrl('/blog') })
    list.push({ name: titleFromSlug(segments[1]), item: absoluteUrl(cleanPath) })
  } else if (segments.length === 1 && NAV_SERVICES.some((item) => item.href === cleanPath)) {
    list.push({ name: 'Services', item: absoluteUrl('/ethiopia-film-fixer-services') })
    list.push({ name: PAGE_LABELS[segments[0]] ?? titleFromSlug(segments[0]), item: absoluteUrl(cleanPath) })
  } else if (segments.length === 1 && NAV_GUIDES.some((item) => item.href === cleanPath)) {
    list.push({ name: 'Filming Guide', item: absoluteUrl('/ethiopia-filming-guide') })
    list.push({ name: PAGE_LABELS[segments[0]] ?? titleFromSlug(segments[0]), item: absoluteUrl(cleanPath) })
  } else {
    let current = ''
    for (const segment of segments) {
      current += `/${segment}`
      list.push({ name: PAGE_LABELS[segment] ?? titleFromSlug(segment), item: absoluteUrl(current) })
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: list.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }
}

export function pageSchema({
  type,
  path,
  name,
  description,
  image = SITE_IMAGE,
}: {
  type: 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'WebPage'
  path: string
  name: string
  description: string
  image?: string
}) {
  const url = absoluteUrl(path)

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': websiteId },
    about: { '@id': organizationId },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: image,
    },
    inLanguage: 'en',
  }
}

export function serviceSchema({
  slug,
  name,
  description,
  summaryItems,
  related = [],
  faqs = [],
}: {
  slug: string
  name: string
  description: string
  summaryItems: string[]
  related?: { label: string; href: string }[]
  faqs?: { q: string; a: string }[]
}) {
  const url = absoluteUrl(`/${slug}`)
  const graph: SchemaNode[] = [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name,
      description,
      serviceType: name,
      provider: { '@id': organizationId },
      areaServed: { '@type': 'Country', name: 'Ethiopia' },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: url,
        servicePhone: SITE.whatsapp1,
      },
      audience: {
        '@type': 'Audience',
        audienceType: 'International film, documentary, broadcast, commercial, NGO, and independent production teams',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${name} deliverables`,
        itemListElement: summaryItems.map((item, index) => ({
          '@type': 'Offer',
          position: index + 1,
          itemOffered: {
            '@type': 'Service',
            name: item,
          },
        })),
      },
      isRelatedTo: related.map((item) => ({
        '@type': 'Service',
        name: item.label,
        url: absoluteUrl(item.href),
      })),
      url,
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name,
      description,
      isPartOf: { '@id': websiteId },
      about: { '@id': `${url}#service` },
      inLanguage: 'en',
    },
  ]

  if (faqs.length > 0) {
    graph.push(faqPageNode(faqs))
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export function serviceHubSchema(services: { title: string; desc: string; href: string }[]) {
  const url = absoluteUrl('/ethiopia-film-fixer-services')
  const hubPage = pageSchema({
    type: 'CollectionPage',
    path: '/ethiopia-film-fixer-services',
    name: 'Film Fixer Services in Ethiopia',
    description:
      'Sawla Films provides film fixer services in Ethiopia for international productions that need clear approvals, practical logistics, respectful access, and calm on-ground coordination.',
  }) as SchemaNode
  delete hubPage['@context']

  return {
    '@context': 'https://schema.org',
    '@graph': [
      hubPage,
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: 'Film Fixer Services in Ethiopia',
        description:
          'Full-service Ethiopia film fixer support covering permits, drone approvals, customs, production logistics, location scouting, local crew, security-aware access, on-ground fixing, and VIP handling.',
        provider: { '@id': organizationId },
        areaServed: { '@type': 'Country', name: 'Ethiopia' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Sawla Films Ethiopia film fixer services',
          itemListElement: services.map((service, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.desc,
              url: absoluteUrl(service.href),
              provider: { '@id': organizationId },
              areaServed: { '@type': 'Country', name: 'Ethiopia' },
            },
          })),
        },
      },
    ],
  }
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    ...faqPageNode(faqs),
  }
}

export function guideArticleSchema({
  slug,
  headline,
  description,
  faqs = [],
}: {
  slug: string
  headline: string
  description: string
  faqs?: { q: string; a: string }[]
}) {
  const url = absoluteUrl(`/${slug}`)
  const graph: SchemaNode[] = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline,
      description,
      url,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      author: publisher,
      publisher,
      image: SITE_IMAGE,
      inLanguage: 'en',
      articleSection: 'Ethiopia filming guide',
      about: { '@id': organizationId },
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: headline,
      description,
      isPartOf: { '@id': websiteId },
      about: { '@id': `${url}#article` },
      inLanguage: 'en',
    },
  ]

  if (faqs.length > 0) graph.push(faqPageNode(faqs))

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export function blogPostingSchema({
  slug,
  title,
  description,
  author,
  date,
  image,
  category,
  keywords,
}: {
  slug: string
  title: string
  description: string
  author: string
  date: string
  image: string
  category: string
  keywords: string
}) {
  const url = absoluteUrl(`/blog/${slug}`)
  const imageUrl = absoluteUrl(image)

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#blogposting`,
    headline: title,
    description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
    },
    image: [imageUrl],
    datePublished: date,
    dateModified: date,
    author: author.toLowerCase().includes('sawla')
      ? { '@type': 'Organization', name: author, url: SITE.url }
      : { '@type': 'Person', name: author, worksFor: { '@id': organizationId } },
    publisher,
    articleSection: category,
    keywords,
    inLanguage: 'en',
    isPartOf: { '@id': websiteId },
  }
}

export function teamPageSchema() {
  const url = absoluteUrl('/team')

  const members = [
    {
      name: 'Meti Tadele',
      jobTitle: 'Founder, Lead Fixer & Production Lead',
      description:
        'Meti Tadele leads Sawla Films production support work in Ethiopia, bringing field experience, local travel knowledge, cultural understanding, and on-the-ground coordination into each project. He builds the right field team around the production brief and serves as the first strategic point of contact for producers.',
    },
    {
      name: 'Ababe Gizachew',
      jobTitle: 'Production Coordinator',
      description:
        'Ababe Gizachew manages scheduling, call sheets, transport timing, accommodation coordination, local crew updates, and daily logistics — keeping the production organised from planning to wrap.',
    },
    {
      name: 'Chalachew Bantiwalu',
      jobTitle: 'Location Scout & Access Coordinator',
      description:
        'Chalachew Bantiwalu evaluates locations for visual quality, access, roads, permissions, seasonality, and cultural sensitivity — helping productions find places that are both cinematic and workable.',
    },
    {
      name: 'Endegena Tsegaye',
      jobTitle: 'Permits, Access & Compliance Coordinator',
      description:
        'Endegena Tsegaye supports filming permission pathways, media accreditation, equipment documentation, drone feasibility notes, and location-specific access planning for international productions in Ethiopia.',
    },
    {
      name: 'Tsega Desta',
      jobTitle: 'Field Logistics Manager',
      description:
        'Tsega Desta coordinates vehicles, drivers, remote routes, fuel planning, camp logistics, and equipment movement for productions across Ethiopia, including remote locations in the Danakil Depression, Omo Valley, and Simien Mountains.',
    },
    {
      name: 'Lemma Alemu',
      jobTitle: 'Translator & Local Crew Coordinator',
      description:
        'Lemma Alemu matches productions with the right translators, interpreters, local crew, drivers, scouts, and field assistants — ensuring each project has the right linguistic and on-ground support.',
    },
    {
      name: 'Mekuria Worku',
      jobTitle: 'Cultural Liaison & Community Access Coordinator',
      description:
        'Mekuria Worku supports respectful access between productions and local communities, managing introductions, consent, local protocol, and cultural sensitivity across Ethiopia\'s diverse filming environments.',
    },
  ]

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: 'The People Behind Sawla Films | Ethiopia Film Fixer Team',
        description:
          'Meet the named team behind Sawla Films — production lead Meti Tadele, plus coordinators, permits specialists, location scouts, logistics managers, translators, and cultural liaisons covering productions across Ethiopia.',
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        inLanguage: 'en',
      },
      ...members.map((member) => ({
        '@type': 'Person',
        name: member.name,
        jobTitle: member.jobTitle,
        description: member.description,
        worksFor: { '@id': organizationId },
        url,
      })),
    ],
  }
}

function faqPageNode(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

function titleFromSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
