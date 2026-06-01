import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { PremiumImage } from '@/components/ui/PremiumImage'
import { SITE } from '@/lib/constants'

interface GuideSectionBlock {
  heading: string
  content: React.ReactNode
}

interface FaqItem {
  q: string
  a: string
}

interface GuidePageLayoutProps {
  h1: string
  subhead: string
  eyebrow?: string
  heroBody: React.ReactNode
  heroImageRecord?: any // Used for the cinematic background
  quickAnswer?: React.ReactNode
  quickAnswerLabel?: string
  sections: GuideSectionBlock[]
  faqs?: FaqItem[]
  relatedGuides?: { label: string; href: string }[]
  relatedServices?: { label: string; href: string }[]
  ctaHeading?: string
  ctaBody?: string
}

export function GuidePageLayout({
  h1,
  subhead,
  eyebrow = 'Ethiopia filming guide',
  heroBody,
  heroImageRecord,
  quickAnswer,
  quickAnswerLabel = 'Quick answer for producers',
  sections,
  faqs,
  relatedGuides,
  relatedServices,
  ctaHeading = 'Start with a feasibility check',
  ctaBody = 'Share your dates, locations, crew size, and subject matter. We will respond with practical next steps, permit considerations, and what to check before your schedule is locked.',
}: GuidePageLayoutProps) {
  return (
    <div className="min-h-screen">

      {/* HERO */}
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
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.1em]">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li><Link href="/ethiopia-filming-guide" className="hover:text-white/60 transition-colors">Filming Guide</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li className="text-white/50">{h1}</li>
            </ol>
          </nav>
          <div className="max-w-[700px]">
            <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
            <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(30px,4.2vw,52px)' }}>
              {h1}
            </h1>
            <p className="text-[15px] font-light text-white/55 italic leading-[1.7] mb-6">{subhead}</p>
            <div className="text-[14px] font-light text-white/55 leading-[1.8] space-y-3 mb-7">{heroBody}</div>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all duration-200">
                Request a Fixer / Get a Quote
              </Link>
              <Link href="/ethiopia-filming-guide" className="inline-flex items-center gap-2 bg-transparent text-white/65 border border-white/18 text-[11px] font-medium uppercase px-5 py-3 rounded-[2px] hover:border-white/35 hover:text-white transition-all">
                Ethiopia Filming Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK ANSWER */}
      {quickAnswer && (
        <div className="bg-gold/[0.07] border-b border-gold/20 py-7">
          <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
            <p className="text-[10px] font-medium text-gold tracking-[0.14em] uppercase mb-2">{quickAnswerLabel}</p>
            <div className="text-[13px] font-light text-[#5A3D00] leading-[1.75] max-w-[820px]">{quickAnswer}</div>
          </div>
        </div>
      )}

      {/* MAIN SECTIONS */}
      {sections.map((sec, i) => (
        <section key={sec.heading} className={`py-14 ${i % 2 === 0 ? 'bg-cream' : 'bg-warm'}`}>
          <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
            <h2 className="font-serif font-light text-ink text-display-sm mb-6 leading-[1.2] tracking-[-0.015em] max-w-[600px]">
              {sec.heading}
            </h2>
            <div className="text-[14px] font-light text-steel leading-[1.8] space-y-4 max-w-[820px]">
              {sec.content}
            </div>
          </div>
        </section>
      ))}

      {/* RELATED GUIDES + SERVICES */}
      {(relatedGuides || relatedServices) && (
        <section className="bg-[#EDEBE5] py-12">
          <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedGuides && (
                <div>
                  <h3 className="text-[10px] font-medium text-ink/40 tracking-[0.12em] uppercase mb-3">Related guides</h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedGuides.map((g) => (
                      <Link key={g.href} href={g.href} className="text-[12px] font-light text-steel border border-black/[0.09] px-3 py-1.5 rounded-[2px] hover:border-teal-mid hover:text-teal-mid transition-all arrow-link">
                        {g.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {relatedServices && (
                <div>
                  <h3 className="text-[10px] font-medium text-ink/40 tracking-[0.12em] uppercase mb-3">Related services</h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedServices.map((s) => (
                      <Link key={s.href} href={s.href} className="text-[12px] font-light text-steel border border-black/[0.09] px-3 py-1.5 rounded-[2px] hover:border-ember hover:text-ember transition-all arrow-link">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="bg-cream py-14">
          <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
            <h2 className="font-serif font-light text-ink text-display-sm mb-8 tracking-[-0.015em]">FAQs</h2>
            <div className="max-w-[760px]">
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

      {/* FINAL CTA */}
      <section className="bg-ash py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)] max-w-[560px]">
          <h2 className="font-serif font-light text-white text-display-md italic leading-[1.2] mb-4">{ctaHeading}</h2>
          <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">{ctaBody}</p>
          <div className="flex flex-wrap gap-3 mb-4">
            <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[12px] font-medium tracking-[0.07em] uppercase px-7 py-3.5 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
              Request a Fixer / Get a Quote
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp1Raw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent text-white/65 border border-white/20 text-[12px] font-medium uppercase px-5 py-3.5 rounded-[2px] hover:border-white/40 hover:text-white transition-all">
              WhatsApp / Call
            </a>
          </div>
          <p className="text-[11px] text-white/28">{SITE.email} &nbsp;|&nbsp; {SITE.whatsapp1}</p>
        </div>
      </section>

    </div>
  )
}
