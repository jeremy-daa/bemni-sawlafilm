import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'
import { getAllSlugs } from '@/lib/blog'
import galleryData from '@/data/gallery.json'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url
  const now  = new Date()

  // 1. Get dynamic blog routes
  const blogSlugs = await getAllSlugs()
  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // 2. Get dynamic gallery routes
  const validGalleryRecords = (galleryData.records as any[]).filter(r => !r.flaggedForDeletion)
  const galleryRoutes: MetadataRoute.Sitemap = validGalleryRecords.map((record) => {
    const activeSlug = record.labelName || record.slug;
    return {
      url: `${base}/gallery/${activeSlug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  })

  return [
    // ── Core ──────────────────────────────────────────────────────────────────
    { url: base,                                                  lastModified: now, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${base}/request-a-quote`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/contact`,                                    lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/privacy-policy`,                             lastModified: now, changeFrequency: 'monthly', priority: 0.50 },

    // ── Services hub + all 9 service pages ────────────────────────────────────
    { url: `${base}/ethiopia-film-fixer-services`,               lastModified: now, changeFrequency: 'monthly', priority: 0.92 },
    { url: `${base}/filming-permits-ethiopia`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${base}/drone-permits-ethiopia`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${base}/customs-clearance-film-equipment-ethiopia`,  lastModified: now, changeFrequency: 'monthly', priority: 0.86 },
    { url: `${base}/production-logistics-ethiopia`,              lastModified: now, changeFrequency: 'monthly', priority: 0.86 },
    { url: `${base}/location-scouting-ethiopia`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/local-crew-translators-ethiopia`,            lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/filming-security-access-ethiopia`,           lastModified: now, changeFrequency: 'monthly', priority: 0.83 },
    { url: `${base}/on-ground-fixer-ethiopia`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/vip-celebrity-handling-ethiopia`,            lastModified: now, changeFrequency: 'monthly', priority: 0.80 },

    // ── Ethiopia Filming Guide hub + all 5 guide pages ─────────────────────────
    { url: `${base}/ethiopia-filming-guide`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${base}/what-to-film-in-ethiopia`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.84 },
    { url: `${base}/bringing-film-equipment-to-ethiopia`,        lastModified: now, changeFrequency: 'monthly', priority: 0.84 },
    { url: `${base}/best-time-to-film-in-ethiopia`,              lastModified: now, changeFrequency: 'monthly', priority: 0.84 },
    { url: `${base}/ethiopia-film-production-costs`,             lastModified: now, changeFrequency: 'monthly', priority: 0.83 },

    // ── Work / social proof ───────────────────────────────────────────────────
    { url: `${base}/case-studies`,                               lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${base}/clients`,                                    lastModified: now, changeFrequency: 'monthly', priority: 0.78 },
    { url: `${base}/gallery`,                                    lastModified: now, changeFrequency: 'monthly', priority: 0.80 },

    // ── About / company ───────────────────────────────────────────────────────
    { url: `${base}/about`,                                      lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/team`,                                       lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: `${base}/how-we-work`,                                lastModified: now, changeFrequency: 'monthly', priority: 0.72 },
    { url: `${base}/faq`,                                        lastModified: now, changeFrequency: 'monthly', priority: 0.78 },
    { url: `${base}/blog`,                                       lastModified: now, changeFrequency: 'weekly', priority: 0.85 },

    // ── Dynamic Routes ────────────────────────────────────────────────────────
    ...blogRoutes,
    ...galleryRoutes,
  ]
}
