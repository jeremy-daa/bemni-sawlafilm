# Outstanding Launch Tasks Checklist

This document tracks all external, operational, and content-related tasks that need to be completed either before or immediately after the custom domain cutover.

## 1. Trust Signals & Content Verification
- [ ] **Team Identity:** Populate `/team` (or an "About Us" section) with real names, verified photos, and professional summaries of the core fixers/producers.
- [ ] **Testimonials:** Replace the single anonymous testimonial with 3–5 named testimonials including full names, production roles (e.g., "Director of Photography", "Series Producer"), and project types (e.g., "BBC Natural History Shoot").
- [ ] **Broadcaster Context:** Add context captions or project titles under the broadcaster logos (e.g., "Netflix - Documentary Series", "BBC - Natural History Shoot") to prevent them from looking like generic stock placements.
- [ ] **Filming Guide Structure:** Review the markdown guides in `src/content/guides/` and ensure each contains a "definitive answer" block (a 2–3 sentence paragraph summarizing the core answer) for AI engine extraction.

## 2. Launch-day Technical Operations
- [x] **Google Analytics 4:** Create a GA4 property and install the tracking tag.
- [ ] **Google Search Console:** Verify domain ownership via DNS TXT record once the domain is live.
- [ ] **Google Tag Manager (Optional):** Setup GTM if advanced conversion tracking is required.
- [ ] **Domain & DNS Cutover:** Execute the formal DNS cutover to move from the staging Vercel domain to the final production domain (e.g., updating A/CNAME records).

## 3. Local SEO & Directory Submissions
- [ ] **Google Business Profile:** Create and verify a Google Business Profile for Sawla Films in Addis Ababa to enable Google Maps visibility and aggregate third-party reviews.
- [ ] **Industry Directories:** Submit the new production website to global fixer directories such as ProductionHub, Korda, and the Location Guide.

## 4. Broken Pages & 404s
- [ ] **Custom 404 Design:** Review the design of the automatically generated `src/app/not-found.tsx` to ensure it matches the brand identity and provides helpful navigation links back to the homepage.
