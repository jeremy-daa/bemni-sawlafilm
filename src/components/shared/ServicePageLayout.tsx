import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { PremiumImage } from '@/components/ui/PremiumImage'
import { SITE } from '@/lib/constants'

interface RelatedService {
  label: string
  href: string
}

interface FaqItem {
  q: string
  a: string
}

interface ServicePageLayoutProps {
  /** SEO */
  slug: string
  /** Hero */
  eyebrow?: string
  h1: string
  subhead: string
  heroBody: React.ReactNode
  heroImageRecord?: any // Used for the cinematic background
  trustLine?: string
  primaryCta?: string
  primaryCtaHref?: string
  /** Optional coloured callout below hero */
  heroCautionTitle?: string
  heroCaution?: string
  /** Quick summary — 3–5 short bullets */
  summaryItems: string[]
  /** Main content sections — alternating light/warm */
  sections: {
    heading: string
    content: React.ReactNode
  }[]
  /** What we need from you — checklist */
  whatWeNeed?: string[]
  /** Related services */
  related?: RelatedService[]
  /** FAQs */
  faqs?: FaqItem[]
  /** Final CTA */
  ctaHeading: string
  ctaBody: string
  ctaButtonLabel?: string
}

export function ServicePageLayout({
  slug,
  eyebrow = 'Film fixer services',
  h1,
  subhead,
  heroBody,
  heroImageRecord,
  trustLine,
  primaryCta = 'Request a Fixer / Get a Quote',
  primaryCtaHref = '/request-a-quote',
  heroCautionTitle,
  heroCaution,
  summaryItems,
  sections,
  whatWeNeed,
  related,
  faqs,
  ctaHeading,
  ctaBody,
  ctaButtonLabel = 'Request a Fixer / Get a Quote',
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="bg-ink pt-[80px] pb-16 relative overflow-hidden">
        {heroImageRecord ? (
          <div className="absolute inset-0 z-0">
            <PremiumImage
              assets={heroImageRecord.assets}
              altText={heroImageRecord.altDescription || heroImageRecord.seoDescription || heroImageRecord.altText}
              dominantColor={heroImageRecord.dominantColors[0]}
              className="w-full h-full object-cover"
              useFullResolution={true}
              sizes="100vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-ink/85 backdrop-saturate-[1.1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        )}
        <div className="absolute top-1/2 left-[-120px] -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(211,176,58,0.07) 0%,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.1em]">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li><Link href="/ethiopia-film-fixer-services" className="hover:text-white/60 transition-colors">Services</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li className="text-white/50">{h1}</li>
            </ol>
          </nav>

          <div className="max-w-[680px]">
            <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
            <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(32px,4.5vw,54px)' }}>
              {h1}
            </h1>
            <p className="text-[15px] font-light text-white/60 leading-[1.75] mb-6 italic">{subhead}</p>
            <div className="text-[14px] font-light text-white/55 leading-[1.8] mb-7 space-y-3">
              {heroBody}
            </div>
            {trustLine && (
              <p className="text-[11px] font-light text-white/30 italic mb-7 border-l-2 border-ember/40 pl-3">{trustLine}</p>
            )}
            <div className="flex flex-wrap gap-3">
              <Link href={primaryCtaHref} className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all duration-200 hover:-translate-y-px">
                {primaryCta}
              </Link>
              <a href={`https://wa.me/${SITE.whatsapp1Raw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent text-white/70 border border-white/20 text-[11px] font-medium tracking-[0.06em] uppercase px-5 py-3 rounded-[2px] hover:border-white/40 hover:text-white transition-all duration-200">
                WhatsApp / Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── CAUTION CALLOUT ──────────────────────────────── */}
      {heroCaution && (
        <div className="bg-gold/[0.08] border-b border-gold/20">
          <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)] py-4">
            <p className="text-[12px] font-light text-[#7A5200] leading-[1.7]">
              {heroCautionTitle && <strong className="font-medium">{heroCautionTitle} </strong>}
              {heroCaution}
            </p>
          </div>
        </div>
      )}

      {/* ── QUICK SUMMARY ────────────────────────────────── */}
      <div className="bg-warm border-b border-black/[0.07] py-8">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {summaryItems.map((item, i) => (
              <div key={i} className="flex gap-2.5 items-start bg-white border border-black/[0.06] rounded-[3px] px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" aria-hidden="true" />
                <span className="text-[12px] font-light text-steel leading-[1.6]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN SECTIONS ────────────────────────────────── */}
      {sections.map((section, i) => (
        <section key={section.heading} className={i % 2 === 0 ? 'bg-cream py-14' : 'bg-warm py-14'}>
          <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
            <h2 className="font-serif font-light text-ink text-display-sm mb-6 leading-[1.2] tracking-[-0.015em]">
              {section.heading}
            </h2>
            <div className="text-[14px] font-light text-steel leading-[1.8] space-y-4 max-w-[820px]">
              {section.content}
            </div>
          </div>
        </section>
      ))}

      {/* ── WHAT WE NEED ─────────────────────────────────── */}
      {whatWeNeed && (
        <section className="bg-ash py-14">
          <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
            <h2 className="font-serif font-light text-white text-display-sm mb-8 tracking-[-0.015em]">
              What We Need From You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-[860px]">
              {whatWeNeed.map((item, i) => (
                <div key={i} className="flex gap-2.5 items-start bg-white/[0.04] border border-white/[0.07] rounded-[3px] px-4 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <span className="text-[12px] font-light text-white/55 leading-[1.6]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href={primaryCtaHref} className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all duration-200">
                {primaryCta}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED SERVICES ─────────────────────────────── */}
      {related && related.length > 0 && (
        <section className="bg-[#EDEBE5] py-12">
          <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
            <h2 className="font-serif font-light text-ink text-[22px] mb-6 italic">Related services</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="inline-flex items-center gap-1.5 bg-cream border border-black/[0.09] text-[12px] font-light text-steel px-4 py-2 rounded-[2px] hover:border-ember hover:text-ember transition-all duration-200 arrow-link">
                  {r.label}
                </Link>
              ))}
              <Link href="/ethiopia-film-fixer-services" className="inline-flex items-center gap-1.5 bg-cream border border-black/[0.09] text-[12px] font-light text-steel px-4 py-2 rounded-[2px] hover:border-ember hover:text-ember transition-all duration-200 arrow-link">
                All film fixer services
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ─────────────────────────────────────────── */}
      {faqs && faqs.length > 0 && (
        <section className="bg-cream py-14" aria-labelledby="faq-heading">
          <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
            <h2 id="faq-heading" className="font-serif font-light text-ink text-display-sm mb-8 tracking-[-0.015em]">
              FAQs
            </h2>
            <div className="max-w-[760px] space-y-0">
              {faqs.map((faq, i) => (
                <details key={i} className="group border-b border-black/[0.07] py-1">
                  <summary className="flex justify-between items-center cursor-pointer py-3 list-none">
                    <h3 className="text-[13px] font-medium text-ink pr-6 leading-[1.4]">{faq.q}</h3>
                    <span className="w-5 h-5 flex-shrink-0 rounded-full border border-black/15 flex items-center justify-center text-[11px] text-steel group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="text-[13px] font-light text-steel leading-[1.75] pb-4 pr-8">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="bg-ash py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[580px]">
            <h2 className="font-serif font-light text-white text-display-md mb-4 italic leading-[1.2]">{ctaHeading}</h2>
            <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">{ctaBody}</p>
            <div className="flex flex-wrap gap-3 mb-5">
              <Link href={primaryCtaHref} className="inline-flex items-center gap-2 bg-ember text-white text-[12px] font-medium tracking-[0.07em] uppercase px-7 py-3.5 rounded-[2px] hover:bg-ember-glow transition-all duration-200 hover:-translate-y-px">
                {ctaButtonLabel}
              </Link>
              <a href={`https://wa.me/${SITE.whatsapp1Raw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent text-white/65 border border-white/20 text-[12px] font-medium uppercase px-5 py-3.5 rounded-[2px] hover:border-white/40 hover:text-white transition-all">
                WhatsApp / Call
              </a>
            </div>
            <p className="text-[11px] text-white/28 font-light">{SITE.email} &nbsp;|&nbsp; {SITE.whatsapp1}</p>
          </div>
        </div>
      </section>

    </div>
  )
}
