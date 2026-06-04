import type { Metadata } from 'next'
import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'
import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ContactForm } from './ContactForm'
import { SITE } from '@/lib/constants'
import { JsonLd } from '@/components/seo/JsonLd'
import { pageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Sawla Films | Ethiopia Film Fixer',
  description:
    'Contact Sawla Films for film fixing, production support, permits, logistics, and crew in Ethiopia. Email, WhatsApp, or submit your brief and we will respond personally.',
  alternates: { canonical: '/contact' },
  openGraph: {
    url: '/contact',
  }
}

const QUICK_LINKS = [
  { label: 'Request a full quote', href: '/request-a-quote', desc: '16-field production intake form for detailed planning and pricing.' },
  { label: 'Explore all services', href: '/ethiopia-film-fixer-services', desc: 'Permits, drone, customs, logistics, scouting, crew, security, fixing, VIP.' },
  { label: 'Read the filming guide', href: '/ethiopia-filming-guide', desc: 'Seasons, permits, equipment, locations, and production planning.' },
  { label: 'View case studies', href: '/case-studies', desc: 'NDA-safe production experience across Ethiopia.' },
]

export default function ContactPage() {
  const records = (galleryData.records as (FullMediaRecord & { flaggedForDeletion?: boolean })[])
    .filter(r => !r.flaggedForDeletion)
    .map(r => {
      const activeSlug = r.labelName || r.slug;
      return {
        ...r,
        assets: {
          full: `/${activeSlug}/${activeSlug}-full.webp`,
          medium: `/${activeSlug}/${activeSlug}-medium.webp`,
          thumb: `/${activeSlug}/${activeSlug}-thumb.avif`
        }
      };
    });
  const imageRecord = records.find(item => item.slug === 'img-7002' || item.labelName === 'img-7002') || records[0];

  return (
    <div className="min-h-screen">
      <JsonLd
        id="contact-page-schema"
        data={pageSchema({
          type: 'ContactPage',
          path: '/contact',
          name: 'Contact Sawla Films',
          description:
            'Contact Sawla Films for film fixing, production support, permits, logistics, and crew in Ethiopia. Every enquiry is reviewed personally and production details are NDA-safe by default.',
        })}
      />

      {/* ── HERO ── */}
      <div className="bg-ink pt-[80px] pb-14 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
        <div className="absolute top-1/2 right-[-120px] -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(211,176,58,0.07) 0%,transparent 70%)' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.1em]">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li className="text-white/50">Contact</li>
            </ol>
          </nav>
          <div className="max-w-[580px]">
            <Eyebrow className="mb-4">Get in touch</Eyebrow>
            <h1
              className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4"
              style={{ fontSize: 'clamp(32px,4.5vw,52px)' }}
            >
              Contact<br />
              <em className="text-gold not-italic italic">Sawla Films</em>
            </h1>
            <p className="text-[14px] font-light text-white/55 leading-[1.8] mb-3">
              Every enquiry is reviewed personally and responded to directly. You do not need a
              finished plan — dates, regions, crew size, and subject matter is enough to begin.
            </p>
            <p className="text-[12px] font-light text-white/30 italic">
              NDA-safe by default. All production details are handled with full confidentiality.
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-warm py-14">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* ── FORM (2/3) ── */}
            <div className="lg:col-span-2">
              <h2 className="font-serif font-light text-ink text-display-sm mb-2 tracking-[-0.015em]">
                Send us a message
              </h2>
              <p className="text-[13px] font-light text-silver mb-7">
                Use this form for general enquiries, quick questions, or initial introductions.
                For a full production quote, use the{' '}
                <Link href="/request-a-quote" className="text-ember hover:underline">
                  Request a Fixer form
                </Link>{' '}
                which covers all production details in one step.
              </p>
              <ContactForm />
              
              {imageRecord && (
                <div className="mt-10 w-full aspect-[21/9] rounded-[4px] overflow-hidden shadow-md border border-black/[0.05]">
                  <PremiumImage
                    assets={imageRecord.assets}
                    altText={imageRecord.seoDescription || imageRecord.altText}
                    dominantColor={imageRecord.dominantColors[0]}
                    className="w-full h-full object-cover"
                    useFullResolution={false}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              )}
            </div>

            {/* ── SIDEBAR (1/3) ── */}
            <aside className="lg:col-span-1 space-y-5">

              {/* Direct contact */}
              <div className="bg-ink rounded-[4px] p-6">
                <h3 className="font-serif font-light text-gold text-[18px] italic mb-5 leading-[1.3]">
                  Reach us directly
                </h3>

                {/* Email */}
                <div className="mb-4 pb-4 border-b border-white/[0.07]">
                  <p className="text-[9px] font-medium text-ember tracking-[0.12em] uppercase mb-1.5">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[12px] font-light text-white/65 hover:text-white transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>

                {/* WhatsApp primary */}
                <div className="mb-4 pb-4 border-b border-white/[0.07]">
                  <p className="text-[9px] font-medium text-ember tracking-[0.12em] uppercase mb-1.5">WhatsApp & Mobile — Primary</p>
                  <a
                    href={`https://wa.me/${SITE.whatsapp1Raw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-light text-white/65 hover:text-white transition-colors"
                  >
                    {SITE.whatsapp1}
                  </a>
                </div>

                {/* WhatsApp alternate */}
                <div className="mb-5">
                  <p className="text-[9px] font-medium text-white/30 tracking-[0.12em] uppercase mb-1.5">WhatsApp & Mobile — Alternate</p>
                  <a
                    href={`https://wa.me/${SITE.whatsapp2Raw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-light text-white/50 hover:text-white transition-colors"
                  >
                    {SITE.whatsapp2}
                  </a>
                </div>

                {/* WA button */}
                <a
                  href={`https://wa.me/${SITE.whatsapp1Raw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-teal-mid/20 border border-teal-mid/40 text-white/70 text-[11px] font-medium px-4 py-2.5 rounded-[2px] hover:bg-teal-mid/30 transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" aria-hidden="true" />
                  Message us on WhatsApp
                </a>
              </div>

              {/* Location */}
              <div className="bg-cream border border-black/[0.07] rounded-[4px] p-5">
                <p className="text-[9px] font-medium text-ember tracking-[0.12em] uppercase mb-2">Base of operations</p>
                <p className="text-[12px] font-light text-steel leading-[1.7]">
                  Addis Ababa, Ethiopia<br />
                  Operating across all 12 regional states
                </p>
                <p className="text-[11px] font-light text-silver/70 italic mt-2">
                  Integrated logistics through Sawla Tours
                </p>
              </div>

              {/* Response time */}
              <div className="bg-cream border border-black/[0.07] rounded-[4px] p-5">
                <p className="text-[9px] font-medium text-teal-mid tracking-[0.12em] uppercase mb-2">Response time</p>
                <p className="text-[12px] font-light text-steel leading-[1.7]">
                  We aim to respond to all production enquiries within one business day. For
                  urgent or time-sensitive shoots, WhatsApp is the fastest route.
                </p>
              </div>

              {/* Quick links */}
              <div>
                <p className="text-[10px] font-medium text-ink/40 tracking-[0.12em] uppercase mb-3">Useful links</p>
                <div className="space-y-2">
                  {QUICK_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block bg-cream border border-black/[0.07] rounded-[3px] px-4 py-3 hover:border-ember/40 transition-all group"
                    >
                      <p className="text-[12px] font-medium text-ink group-hover:text-ember transition-colors mb-0.5">{link.label} →</p>
                      <p className="text-[11px] font-light text-silver leading-[1.5]">{link.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

    </div>
  )
}
