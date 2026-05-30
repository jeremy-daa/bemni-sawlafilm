# Next.js CMS Field Map — The Production Log
## Sawla Films / ethiopiafilmfixer.com

This document translates the Webflow CMS field map into the actual
technology stack confirmed on the site: **Next.js (App Router) on Vercel**.

Three content management options are provided in order of recommendation.
Choose one before the developer begins. The field structure is identical
across all three — only the implementation differs.

---

## Recommended Option: Contentful

**Why:** Hosted, no infrastructure to manage, excellent Next.js SDK,
live preview, per-field scheduling. Best fit for a small team that
wants a clean editorial UI without managing a database.

### Setup

```bash
npm install contentful @contentful/rich-text-react-renderer
```

### Content Types (Contentful field names → type)

#### Blog Post (`blogPost`)
| Field name         | Contentful type     | Notes                                  |
|--------------------|---------------------|----------------------------------------|
| title              | Short text          | Required                               |
| slug               | Short text, unique  | Required. No spaces or slashes.        |
| category           | Reference           | → BlogCategory content type            |
| excerpt            | Long text           | Plain text, used for card previews     |
| heroImage          | Media (image)       | WebP/AVIF, 1200×630 minimum            |
| heroImageAlt       | Short text          | Required for image SEO                 |
| seoTitle           | Short text          | Max 65 characters                      |
| metaDescription    | Short text          | Max 155 characters                     |
| primaryKeyword     | Short text          |                                        |
| secondaryKeywords  | Short text          | Comma-separated                        |
| author             | Reference           | → Author content type                  |
| targetWordCount    | Short text          | e.g. "1,200–1,600"                     |
| readingTime        | Short text          | e.g. "7–9 min"                         |
| lastVerified       | Date                | Required for regulatory/seasonal posts |
| reviewCadence      | Short text          | e.g. "Quarterly"                       |
| producerSummary    | Long text           | Displayed prominently below hero       |
| articleBody        | Rich text           | Full article content                   |
| producerChecklist  | Rich text           | Rendered as a checkbox list            |
| faqs               | References (many)   | → FAQItem content type                 |
| relatedServices    | References (many)   | → RelatedService content type          |
| relatedLocations   | References (many)   | → LocationTag content type             |
| ctaLabel           | Short text          | e.g. "Request a permit pathway review" |
| ctaUrl             | Short text          | e.g. "/contact"                        |
| featured           | Boolean             | Featured post on hub page              |
| editorsPick        | Boolean             | Editor's picks section                 |
| schemaEnabled      | Boolean             | Whether to render JSON-LD schema       |
| datePublished      | Date                | ISO 8601                               |
| dateModified       | Date                | ISO 8601, update on each revision      |

#### Blog Category (`blogCategory`)
| Field name        | Contentful type | Notes                         |
|-------------------|-----------------|-------------------------------|
| name              | Short text      | Required                      |
| slug              | Short text      | Required, unique              |
| description       | Long text       |                               |
| seoTitle          | Short text      | Max 65 chars                  |
| metaDescription   | Short text      | Max 155 chars                 |
| featuredImage     | Media           |                               |
| featuredImageAlt  | Short text      |                               |
| priority          | Integer         | Controls display order        |
| showOnBlogHub     | Boolean         |                               |

#### Author (`author`)
| Field name   | Contentful type | Notes                             |
|--------------|-----------------|-----------------------------------|
| name         | Short text      | e.g. "Sawla Films Location Desk"  |
| role         | Short text      |                                   |
| bio          | Long text       |                                   |
| headshot     | Media           | Optional                          |
| organization | Short text      | "Sawla Films"                     |

#### FAQ Item (`faqItem`)
| Field name      | Contentful type | Notes                             |
|-----------------|-----------------|-----------------------------------|
| question        | Short text      | Required                          |
| answer          | Long text       | Required. Must match page content.|
| includeInSchema | Boolean         | True = include in FAQPage JSON-LD |
| schemaOrder     | Integer         | 1–5, controls schema position     |

#### Related Service (`relatedService`)
| Field name   | Contentful type | Notes                  |
|--------------|-----------------|------------------------|
| name         | Short text      |                        |
| url          | Short text      | e.g. "/filming-permits-in-ethiopia" |
| description  | Short text      |                        |
| priority     | Integer         |                        |

#### Location Tag (`locationTag`)
| Field name  | Contentful type | Notes                  |
|-------------|-----------------|------------------------|
| name        | Short text      | e.g. "Danakil Depression" |
| url         | Short text      |                        |
| region      | Short text      |                        |
| description | Short text      |                        |

### Fetching in Next.js (App Router)

```typescript
// lib/contentful.ts
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export async function getBlogPost(slug: string) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
    include: 3,  // resolves references (category, author, faqs)
  })
  return entries.items[0] ?? null
}

export async function getAllBlogPosts() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: ['-fields.datePublished'],
    include: 2,
  })
  return entries.items
}

export async function getBlogPostsByCategory(categorySlug: string) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.category.fields.slug': categorySlug,
    order: ['-fields.datePublished'],
    include: 2,
  })
  return entries.items
}
```

### Environment variables (.env.local)

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_access_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
```

---

## Alternative Option A: Sanity

**Why:** More flexible, better for teams that want custom studio UI,
real-time collaborative editing, strong image pipeline (Sanity CDN).

### Schema (sanity.config.ts excerpt)

```typescript
// schemas/blogPost.ts
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title',           type: 'string',   title: 'Title' },
    { name: 'slug',            type: 'slug',     title: 'Slug',
      options: { source: 'title' } },
    { name: 'category',        type: 'reference', to: [{ type: 'blogCategory' }] },
    { name: 'excerpt',         type: 'text',     title: 'Excerpt' },
    { name: 'heroImage',       type: 'image',    title: 'Hero Image',
      options: { hotspot: true } },
    { name: 'heroImageAlt',    type: 'string',   title: 'Hero Image Alt' },
    { name: 'seoTitle',        type: 'string',   title: 'SEO Title',
      validation: R => R.max(65) },
    { name: 'metaDescription', type: 'string',   title: 'Meta Description',
      validation: R => R.max(155) },
    { name: 'author',          type: 'reference', to: [{ type: 'author' }] },
    { name: 'lastVerified',    type: 'date',     title: 'Last Verified' },
    { name: 'reviewCadence',   type: 'string',   title: 'Review Cadence' },
    { name: 'producerSummary', type: 'text',     title: 'Producer Summary' },
    { name: 'articleBody',     type: 'array',    title: 'Article Body',
      of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'faqs',            type: 'array',    title: 'FAQs',
      of: [{ type: 'reference', to: [{ type: 'faqItem' }] }] },
    { name: 'ctaLabel',        type: 'string',   title: 'CTA Label' },
    { name: 'ctaUrl',          type: 'string',   title: 'CTA URL' },
    { name: 'featured',        type: 'boolean',  title: 'Featured' },
    { name: 'datePublished',   type: 'datetime', title: 'Date Published' },
    { name: 'dateModified',    type: 'datetime', title: 'Date Modified' },
  ]
}
```

### Fetching (GROQ query)

```typescript
// lib/sanity.ts
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: 'production',
  apiVersion: '2026-05-29',
  useCdn: true,
})

const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
  title, slug, excerpt, producerSummary, articleBody,
  heroImage, heroImageAlt, seoTitle, metaDescription,
  lastVerified, reviewCadence, ctaLabel, ctaUrl,
  datePublished, dateModified,
  "category": category->{ name, slug },
  "author": author->{ name, role },
  "faqs": faqs[]->{ question, answer, includeInSchema, schemaOrder }
}`

export async function getBlogPost(slug: string) {
  return client.fetch(POST_QUERY, { slug })
}
```

---

## Alternative Option B: MDX files (simplest, no CMS)

**Why:** Zero external dependency, files live in the repo, ideal for
a solo developer or small team comfortable with Git. No editorial UI.

### File structure

```
content/
  blog/
    filming-permits-ethiopia-producer-checklist.mdx
    film-gear-customs-clearance-ethiopia.mdx
    drone-filming-ethiopia-confirm-before-arrival.mdx
    ...
```

### Frontmatter schema (each .mdx file)

```yaml
---
title: "Filming Permits in Ethiopia: Producer Checklist and Timeline"
slug: "filming-permits-ethiopia-producer-checklist"
category: "permits-customs-compliance"
excerpt: "International productions planning to film in Ethiopia..."
heroImage: "/images/blog/ethiopia-filming-permit-producer-checklist-sawla-films.webp"
heroImageAlt: "Producer reviewing Ethiopia filming permit documents..."
seoTitle: "Filming Permits in Ethiopia: Producer Checklist | Sawla Films"
metaDescription: "Plan Ethiopia filming permits with a producer-focused checklist..."
primaryKeyword: "filming permits Ethiopia"
secondaryKeywords: ["Ethiopia filming permit", "media accreditation Ethiopia"]
author: "Sawla Films Field Production Team"
readingTime: "7–9 min"
lastVerified: "2026-05-29"
reviewCadence: "Quarterly"
producerSummary: "International productions planning to film in Ethiopia..."
ctaLabel: "Request a permit pathway review"
ctaUrl: "/contact"
featured: true
editorsPick: false
datePublished: "2026-05-29"
dateModified: "2026-05-29"
faqs:
  - question: "Do all foreign crews need filming permission in Ethiopia?"
    answer: "Most international crews should assume..."
    includeInSchema: true
    schemaOrder: 1
---

{/* Article body written here in MDX */}
```

### Reading MDX in Next.js (App Router)

```bash
npm install next-mdx-remote gray-matter
```

```typescript
// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export function getBlogPost(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data: frontmatter, content } = matter(fileContents)
  return { frontmatter, content, slug }
}

export function getAllBlogSlugs() {
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}
```

---

## Sitemap integration (all three options)

Add blog posts to `src/app/sitemap.ts`:

```typescript
// In your existing sitemap.ts, add this section:
const posts = await getAllBlogPosts()  // your fetch function
const blogUrls = posts.map(post => ({
  url: `${BASE_URL}/blog/${post.slug}`,
  lastModified: new Date(post.dateModified || post.datePublished).toISOString(),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
}))
// Spread into the return array alongside static pages
return [...staticPages, ...blogUrls]
```

---

## Cross-post link reference map

These are the in-text cross-links added to all 9 corrected articles.
Use these to validate that links resolve once the blog is built.

| Article                            | Links to                                      |
|------------------------------------|-----------------------------------------------|
| 01 Filming Permits                 | 02 Customs, 03 Drone, 05 Lalibela, 09 Fixers  |
| 02 Customs Clearance               | 01 Permits, 03 Drone                          |
| 03 Drone Filming                   | 02 Customs, 01 Permits, 05 Lalibela, 04 Danakil|
| 04 Danakil Depression              | 08 Cash/Fuel/Comms, 03 Drone, 09 Fixers       |
| 05 Lalibela                        | 01 Permits, 03 Drone, 09 Fixers               |
| 06 Simien Mountains                | 03 Drone, 08 Cash/Fuel/Comms                  |
| 07 Commercial Addis                | 01 Permits, 09 Fixers                         |
| 08 Cash/Fuel/Comms                 | 04 Danakil, 06 Simien, 09 Fixers              |
| 09 How Fixers Solve Problems       | 01 Permits, 05 Lalibela, 04 Danakil, 08 Cash  |

Total cross-links added: 22
All links use the format `/blog/[slug]` with descriptive anchor text.
