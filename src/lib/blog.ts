import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

const STRIP_SECTIONS = [
  'CTA',
  'Related Internal Links',
  'Accuracy and Publishing Notes',
  'Source and Verification References',
]

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BlogImage {
  src: string
  srcFull: string
  thumb: string
  alt: string
  dominantColor: string
}

export interface BlogPost {
  slug: string
  title: string
  category: string
  author: string
  readingTime: string
  lastVerified: string
  metaTitle: string
  metaDescription: string
  primaryKeyword: string
  producerSummary: string
  contentHtml: string
  filename: string
  image: BlogImage
}

export interface BlogPostMeta {
  slug: string
  title: string
  category: string
  readingTime: string
  lastVerified: string
  metaDescription: string
  filename: string
  image: BlogImage
}

// ─── Static per-post data ─────────────────────────────────────────────────────
// All fields that were unreliably parsed from markdown are stored here directly.
// To add a new post: drop a .md file in src/content/blog/ and add an entry here.

interface StaticPostData {
  slug: string
  category: string
  readingTime: string
  lastVerified: string
  metaTitle: string
  metaDescription: string
  primaryKeyword: string
  author: string
  image: BlogImage
}

const STATIC_POST_DATA: StaticPostData[] = [
  {
    slug: 'filming-permits-ethiopia-producer-checklist',
    category: 'Permits, Customs & Compliance',
    readingTime: '7–9 min',
    lastVerified: '2026-05-29',
    metaTitle: 'Filming Permits in Ethiopia: Producer Checklist | Sawla Films',
    metaDescription: 'Plan Ethiopia filming permits with a producer-focused checklist covering documents, lead times, locations and local fixer support.',
    primaryKeyword: 'filming permits Ethiopia',
    author: 'Sawla Films Field Production Team',
    image: {
      src:          '/assets/images/img-7002/img-7002-medium.webp',
      srcFull:      '/assets/images/img-7002/img-7002-full.webp',
      thumb:        '/assets/images/img-7002/img-7002-thumb.avif',
      alt:          'Film crew documenting an Ethiopian official at an artifact display — permit and documentation context',
      dominantColor: '#333333',
    },
  },
  {
    slug: 'film-gear-customs-clearance-ethiopia',
    category: 'Permits, Customs & Compliance',
    readingTime: '7–8 min',
    lastVerified: '2026-05-29',
    metaTitle: 'Film Gear Customs Clearance in Ethiopia | Sawla Films',
    metaDescription: 'Prepare Ethiopia film gear customs paperwork with serial-numbered kit lists, arrival planning and fixer-led clearance support.',
    primaryKeyword: 'film gear customs clearance Ethiopia',
    author: 'Sawla Films Field Production Team',
    image: {
      src:          '/assets/images/film-crew-gear-at-camp/film-crew-gear-at-camp-medium.webp',
      srcFull:      '/assets/images/film-crew-gear-at-camp/film-crew-gear-at-camp-full.webp',
      thumb:        '/assets/images/film-crew-gear-at-camp/film-crew-gear-at-camp-thumb.avif',
      alt:          'Film equipment cases laid out on location in Ethiopia — customs and gear clearance preparation',
      dominantColor: '#B3B3B3',
    },
  },
  {
    slug: 'drone-filming-ethiopia-confirm-before-arrival',
    category: 'Permits, Customs & Compliance',
    readingTime: '8–9 min',
    lastVerified: '2026-05-29',
    metaTitle: 'Drone Filming in Ethiopia: What Crews Must Confirm | Sawla Films',
    metaDescription: 'International crews must confirm drone permits, aviation authority clearance and restricted zones before bringing aerial equipment to Ethiopia.',
    primaryKeyword: 'drone filming Ethiopia',
    author: 'Sawla Films Field Production Team',
    image: {
      src:          '/assets/images/whatsapp-image-2026-05-18-at-16-40-57-1/whatsapp-image-2026-05-18-at-16-40-57-1-medium.webp',
      srcFull:      '/assets/images/whatsapp-image-2026-05-18-at-16-40-57-1/whatsapp-image-2026-05-18-at-16-40-57-1-full.webp',
      thumb:        '/assets/images/whatsapp-image-2026-05-18-at-16-40-57-1/whatsapp-image-2026-05-18-at-16-40-57-1-thumb.avif',
      alt:          'Aerial view of Ethiopian salt lake at sunrise — drone filming perspective over remote landscape',
      dominantColor: '#87CEFA',
    },
  },
  {
    slug: 'filming-danakil-depression-heat-access-convoys',
    category: 'Location Scouting & Field Guides',
    readingTime: '7–8 min',
    lastVerified: '2026-05-29',
    metaTitle: 'Filming the Danakil Depression: Field Logistics Guide',
    metaDescription: 'Plan Danakil filming with realistic guidance on heat, convoys, fuel, water, comms, safety and Afar access coordination.',
    primaryKeyword: 'filming Danakil Depression',
    author: 'Sawla Films Location Desk',
    image: {
      src:          '/assets/images/whatsapp-image-2026-05-18-at-16-40-44/whatsapp-image-2026-05-18-at-16-40-44-medium.webp',
      srcFull:      '/assets/images/whatsapp-image-2026-05-18-at-16-40-44/whatsapp-image-2026-05-18-at-16-40-44-full.webp',
      thumb:        '/assets/images/whatsapp-image-2026-05-18-at-16-40-44/whatsapp-image-2026-05-18-at-16-40-44-thumb.avif',
      alt:          'Stark geological canyon landscape of the Danakil Depression, Ethiopia',
      dominantColor: '#9B9B9B',
    },
  },
  {
    slug: 'filming-lalibela-sacred-spaces-low-light',
    category: 'Location Scouting & Field Guides',
    readingTime: '6–8 min',
    lastVerified: '2026-05-29',
    metaTitle: 'Filming Lalibela: Sacred Spaces & Cultural Protocols | Sawla Films',
    metaDescription: 'Guide to filming in Lalibela covering heritage access, low-light interiors, cultural protocols and local coordination.',
    primaryKeyword: 'filming Lalibela Ethiopia',
    author: 'Sawla Films Location Desk',
    image: {
      src:          '/assets/images/whatsapp-image-2026-05-18-at-16-40-38/whatsapp-image-2026-05-18-at-16-40-38-medium.webp',
      srcFull:      '/assets/images/whatsapp-image-2026-05-18-at-16-40-38/whatsapp-image-2026-05-18-at-16-40-38-full.webp',
      thumb:        '/assets/images/whatsapp-image-2026-05-18-at-16-40-38/whatsapp-image-2026-05-18-at-16-40-38-thumb.avif',
      alt:          'Ethiopian artisan weaving traditional textiles — cultural documentation in a sacred setting',
      dominantColor: '#C8973A',
    },
  },
  {
    slug: 'wildlife-filming-simien-mountains-endemic-species',
    category: 'Production Blueprints',
    readingTime: '7–8 min',
    lastVerified: '2026-05-29',
    metaTitle: 'Wildlife Filming in the Simien Mountains | Sawla Films',
    metaDescription: 'Logistics guide for wildlife filming in the Simien Mountains — endemic species, high-altitude access and permit requirements.',
    primaryKeyword: 'wildlife filming Simien Mountains Ethiopia',
    author: 'Sawla Films Producer Support Desk',
    image: {
      src:          '/assets/images/img-3515/img-3515-medium.webp',
      srcFull:      '/assets/images/img-3515/img-3515-full.webp',
      thumb:        '/assets/images/img-3515/img-3515-thumb.avif',
      alt:          'Ethiopian wolf standing in tall grassland of the Bale Mountains — wildlife filming in the highlands',
      dominantColor: '#9B9B9B',
    },
  },
  {
    slug: 'commercial-filming-addis-ababa-street-control',
    category: 'Production Blueprints',
    readingTime: '6–7 min',
    lastVerified: '2026-05-29',
    metaTitle: 'Commercial Filming in Addis Ababa: Street & Urban Production',
    metaDescription: 'Guide to commercial filming in Addis Ababa covering street control, urban permits, fast-moving logistics and local crew coordination.',
    primaryKeyword: 'commercial filming Addis Ababa',
    author: 'Sawla Films Producer Support Desk',
    image: {
      src:          '/assets/images/whatsapp-image-2026-05-18-at-16-40-58-2/whatsapp-image-2026-05-18-at-16-40-58-2-medium.webp',
      srcFull:      '/assets/images/whatsapp-image-2026-05-18-at-16-40-58-2/whatsapp-image-2026-05-18-at-16-40-58-2-full.webp',
      thumb:        '/assets/images/whatsapp-image-2026-05-18-at-16-40-58-2/whatsapp-image-2026-05-18-at-16-40-58-2-thumb.avif',
      alt:          'Urban crowd gathering in Addis Ababa with traditional and modern dress — street production context',
      dominantColor: '#1A1A1A',
    },
  },
  {
    slug: 'cash-fuel-communications-remote-ethiopia-productions',
    category: 'Insider Fixer Reports',
    readingTime: '6–7 min',
    lastVerified: '2026-05-29',
    metaTitle: 'Cash, Fuel & Communications for Remote Ethiopia Productions',
    metaDescription: 'Field logistics guide covering cash management, fuel planning, satellite comms and remote-area preparation for Ethiopia productions.',
    primaryKeyword: 'remote Ethiopia film production logistics',
    author: 'Sawla Films Producer Support Desk',
    image: {
      src:          '/assets/images/whatsapp-image-2026-05-18-at-16-40-56-2/whatsapp-image-2026-05-18-at-16-40-56-2-medium.webp',
      srcFull:      '/assets/images/whatsapp-image-2026-05-18-at-16-40-56-2/whatsapp-image-2026-05-18-at-16-40-56-2-full.webp',
      thumb:        '/assets/images/whatsapp-image-2026-05-18-at-16-40-56-2/whatsapp-image-2026-05-18-at-16-40-56-2-thumb.avif',
      alt:          'Film crew working outdoors under a shade tent in a remote Ethiopian natural setting',
      dominantColor: '#B8C2C5',
    },
  },
  {
    slug: 'how-fixers-solve-problems-ethiopia-field-decisions',
    category: 'Insider Fixer Reports',
    readingTime: '6–7 min',
    lastVerified: '2026-05-29',
    metaTitle: 'How Fixers Solve Problems in Ethiopia: Field Decisions | Sawla Films',
    metaDescription: 'Inside account of how experienced Ethiopia fixers handle permit delays, access changes, and on-ground decisions that protect shoot days.',
    primaryKeyword: 'Ethiopia film fixer',
    author: 'Sawla Films Field Production Team',
    image: {
      src:          '/assets/images/img-20140101-064257-1/img-20140101-064257-1-medium.webp',
      srcFull:      '/assets/images/img-20140101-064257-1/img-20140101-064257-1-full.webp',
      thumb:        '/assets/images/img-20140101-064257-1/img-20140101-064257-1-thumb.avif',
      alt:          'Film crew at work on a production in the Ethiopian desert landscape',
      dominantColor: '#C0A882',
    },
  },
]

function getStaticData(slug: string): StaticPostData | undefined {
  return STATIC_POST_DATA.find((d) => d.slug === slug)
}

// ─── Markdown helpers ─────────────────────────────────────────────────────────

function normalise(raw: string): string {
  return raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
}

function extractTitle(raw: string): string {
  const m = normalise(raw).match(/^#\s+(.+)$/m)
  return m ? m[1].trim() : ''
}

function extractProducerSummary(raw: string): string {
  const lines = normalise(raw).split('\n')
  for (const line of lines) {
    const m = line.match(/^>\s*\*\*Producer Summary:\*\*\s*(.+)$/)
    if (m) return m[1].trim()
  }
  return ''
}

function buildBody(raw: string): string {
  const lines = normalise(raw).split('\n')
  let bodyStart = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('>') || lines[i].startsWith('## ')) {
      bodyStart = i
      break
    }
  }
  if (bodyStart === -1) return raw
  let body = lines.slice(bodyStart).join('\n')
  for (const heading of STRIP_SECTIONS) {
    const re = new RegExp(`## ${heading}[\\s\\S]*?(?=\n## |$)`, 'g')
    body = body.replace(re, '')
  }
  return body.trim()
}

async function renderMarkdown(md: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(md)
  return result.toString()
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  // Use the static data order so listing matches file order
  return STATIC_POST_DATA.map((d) => {
    // Find the md file for this slug so we can read its title
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md')).sort()
    const filename = files.find((f) => {
      const base = f.replace(/^\d+_/, '').replace(/\.md$/, '')
      return base === d.slug
    }) ?? ''

    let title = d.metaTitle
    if (filename) {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
      title = extractTitle(raw) || d.metaTitle
    }

    return {
      slug: d.slug,
      title,
      category: d.category,
      readingTime: d.readingTime,
      lastVerified: d.lastVerified,
      metaDescription: d.metaDescription,
      filename,
      image: d.image,
    } satisfies BlogPostMeta
  })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const staticData = getStaticData(slug)
  if (!staticData) return null

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const filename = files.find((f) => {
    const base = f.replace(/^\d+_/, '').replace(/\.md$/, '')
    return base === slug
  })
  if (!filename) return null

  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
  const body = buildBody(raw)
  const contentHtml = await renderMarkdown(body)

  return {
    slug,
    title: extractTitle(raw) || staticData.metaTitle,
    category: staticData.category,
    author: staticData.author,
    readingTime: staticData.readingTime,
    lastVerified: staticData.lastVerified,
    metaTitle: staticData.metaTitle,
    metaDescription: staticData.metaDescription,
    primaryKeyword: staticData.primaryKeyword,
    producerSummary: extractProducerSummary(raw),
    contentHtml,
    filename,
    image: staticData.image,
  }
}

export async function getAllSlugs(): Promise<string[]> {
  return STATIC_POST_DATA.map((d) => d.slug)
}
