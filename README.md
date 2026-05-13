# Sawla Films — Ethiopia Film Fixer Website

**ethiopiafilmfixer.com** · Next.js 14 · TypeScript · Tailwind CSS · Production-ready

---

## Quick Start

```bash
npm install
cp .env.example .env.local   # fill in your values
npm run dev                   # → http://localhost:3000
npm run build                 # production build
```

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, React Server Components) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| Fonts | Cormorant Garamond + DM Sans via next/font/google |
| Assets | Real logo + hero video included in `/public` |
| Deployment | Vercel (recommended) |

---

## Contact Details (confirmed — propagate from constants.ts automatically)

| Channel | Value |
|---|---|
| Email | production@ethiopiafilmfixer.com |
| WhatsApp & Mobile (Primary) | +251 927 115 454 |
| WhatsApp & Mobile (Alternate) | +251 970 578 306 |

All contact details live in `src/lib/constants.ts` → `SITE` object. Change once, updates everywhere: nav, footer, CTAs, WhatsApp button, forms, metadata.

---

## All 24 Pages

| URL | Page | Type |
|---|---|---|
| `/` | Homepage | Marketing — 11 sections |
| `/ethiopia-film-fixer-services` | Services hub | Hub |
| `/filming-permits-ethiopia` | Filming permits | Service |
| `/drone-permits-ethiopia` | Drone permits | Service |
| `/customs-clearance-film-equipment-ethiopia` | Customs & equipment | Service |
| `/production-logistics-ethiopia` | Production logistics | Service |
| `/location-scouting-ethiopia` | Location scouting | Service |
| `/local-crew-translators-ethiopia` | Local crew & translators | Service |
| `/filming-security-access-ethiopia` | Security & access | Service |
| `/on-ground-fixer-ethiopia` | On-ground fixing | Service |
| `/vip-celebrity-handling-ethiopia` | VIP & celebrity handling | Service |
| `/ethiopia-filming-guide` | Ethiopia filming guide hub | Guide hub |
| `/what-to-film-in-ethiopia` | What to film | Guide |
| `/bringing-film-equipment-to-ethiopia` | Bringing equipment | Guide |
| `/best-time-to-film-in-ethiopia` | Best time to film | Guide |
| `/ethiopia-film-production-costs` | Production costs | Guide |
| `/case-studies` | Case studies | Social proof |
| `/clients` | Clients & credits | Social proof |
| `/about` | About | Company |
| `/team` | Team | Company |
| `/how-we-work` | How we work | Company |
| `/faq` | FAQ | Support |
| `/contact` | Contact | Contact |
| `/request-a-quote` | Request a fixer | Conversion |

---

## Project Structure

```
sawla-films/
├── public/
│   ├── brand/sawla-films-logo.jpg        ← Real logo ✓
│   └── assets/
│       ├── video/hero-banner.mp4          ← Real hero video ✓
│       └── images/
│           ├── og-default-1200x630.jpg    ← ADD BEFORE LAUNCH
│           └── hero-poster.jpg            ← ADD BEFORE LAUNCH
├── src/
│   ├── app/                               ← 24 pages
│   ├── components/
│   │   ├── layout/   Navbar, Footer, WhatsAppButton
│   │   ├── sections/ 11 homepage sections
│   │   ├── shared/   ServicePageLayout, GuidePageLayout
│   │   └── ui/       Button, Eyebrow, SectionHeader
│   ├── hooks/        useNavScroll, useScrollReveal
│   ├── lib/          constants.ts, metadata.ts
│   └── styles/       globals.css
├── next.config.ts    Security headers, image opt, redirects
├── tailwind.config.ts
├── .env.example
└── README.md
```

---

## Pre-Launch Checklist

### Assets (add to `/public`)
- [ ] `assets/images/og-default-1200x630.jpg` — Ethiopia production still + brand overlay (NOT a logo)
- [ ] `assets/images/hero-poster.jpg` — Video fallback poster, 768×432px WebP
- [ ] `favicon.ico`
- [ ] `assets/icons/icon-32.png`, `icon-192.png`, `apple-touch-icon.png`

### Content
- [ ] Replace placeholder testimonial in `src/components/sections/ProofSection.tsx`
- [ ] Verify proof bar stats (12 regional states, 7 languages, 4 continents) against real figures
- [ ] Confirm client names in `src/app/clients/page.tsx` are approved for public display
- [ ] Update `twitter:site` handle in `src/lib/metadata.ts` (or remove the tag)

### Forms (wire before launch)
Both forms simulate submission. Wire to a real endpoint:

**Formspree — simplest, no backend:**
```tsx
// In ContactForm.tsx / RequestForm.tsx, replace handleSubmit body:
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: new FormData(e.currentTarget),
  headers: { Accept: 'application/json' },
})
setState(res.ok ? 'success' : 'error')
```

**Resend — recommended for production:**
Create `src/app/api/enquire/route.ts` using the Resend SDK.
Route both `ContactForm.tsx` and `RequestForm.tsx` to this endpoint.

- [ ] Test form delivery to `production@ethiopiafilmfixer.com`
- [ ] Add spam protection (reCAPTCHA v3 or honeypot already included)

### SEO / GEO (do before promoting the site)
- [ ] Create + verify **Google Business Profile** → add URL to `sameAs` in `src/lib/metadata.ts`
- [ ] Create **LinkedIn company page** → add URL to `sameAs`
- [ ] Submit to 2+ film industry directories → add URLs to `sameAs`
- [ ] Confirm Sawla Tours links to ethiopiafilmfixer.com
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### Technical
- [ ] Validate JSON-LD at `https://validator.schema.org`
- [ ] HTTPS forced — all HTTP and non-www redirect to `https://www.ethiopiafilmfixer.com`
- [ ] Google PageSpeed mobile score 90+ on live environment
- [ ] LCP < 2.5s · INP < 200ms · CLS < 0.1
- [ ] Test on iOS Safari, Android Chrome, Firefox, Edge

---

## Analytics Setup

```bash
npm install @next/third-parties
```

In `src/app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
// Inside <body>:
<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
```

**Track these conversion events:**
- Primary CTA click (→ `/request-a-quote`)
- WhatsApp button click
- Email link click
- Contact form submission
- Request-a-quote form submission

---

## Deployment (Vercel)

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production
```

Set all `.env.example` variables in Vercel dashboard → Project → Settings → Environment Variables.

Set `www.ethiopiafilmfixer.com` as primary domain. Add DNS records as instructed by Vercel.

---

## Schema Coverage

Full JSON-LD `@graph` injected in `<head>` via root layout:

- `Organization` — knowsAbout, sameAs, contactPoint (both numbers), address, foundingLocation
- `WebSite` — potentialAction SearchAction
- `WebPage` — BreadcrumbList, primaryImageOfPage
- `ProfessionalService` — priceRange, currenciesAccepted, availableLanguage, parentOrganization
- `FAQPage` — 8 Q&As on homepage, 20 Q&As on FAQ page

After adding GBP + LinkedIn + directories, update the `sameAs` arrays in `src/lib/metadata.ts`.

---

## Key Files for Developer

| File | What to do |
|---|---|
| `src/lib/constants.ts` | All copy, nav, footer links, contact details — edit here first |
| `src/lib/metadata.ts` | SEO metadata + JSON-LD schema — update sameAs after GEO setup |
| `src/app/layout.tsx` | Root layout — add analytics, update font if needed |
| `src/app/request-a-quote/RequestForm.tsx` | Wire form to real endpoint |
| `src/app/contact/ContactForm.tsx` | Wire form to real endpoint |
| `src/components/sections/ProofSection.tsx` | Replace placeholder testimonial |
| `next.config.ts` | Security headers, redirects, image domains |

---

© 2025 Sawla Films · ethiopiafilmfixer.com · All rights reserved.
