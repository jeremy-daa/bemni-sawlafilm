import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url
  const now  = new Date()

  return [
    // ── Core ──────────────────────────────────────────────────────────────────
    { url: base,                                                  lastModified: now, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${base}/request-a-quote`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/contact`,                                    lastModified: now, changeFrequency: 'monthly', priority: 0.85 },

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

    // ── About / company ───────────────────────────────────────────────────────
    { url: `${base}/about`,                                      lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/team`,                                       lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: `${base}/how-we-work`,                                lastModified: now, changeFrequency: 'monthly', priority: 0.72 },
    { url: `${base}/faq`,                                        lastModified: now, changeFrequency: 'monthly', priority: 0.78 },
  ]
}
