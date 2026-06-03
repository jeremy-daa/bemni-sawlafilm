import type { Metadata } from 'next'
import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ethiopia Film Production Case Studies | Sawla Films',
  description: 'Selected production experience across Ethiopia — permits, remote field logistics, cultural access, and shoot-day coordination for international broadcasters and production teams.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    url: '/case-studies',
  }
}

const CASES = [
  {
    id: 'omo-valley-celebrity',
    tag: 'Celebrity documentary',
    region: 'Omo Valley, Southern Ethiopia',
    title: 'International production team — Celebrity programme in Omo Valley',
    summary: 'Multi-region shoot involving community access coordination, cultural liaison, contributor communication, and remote field logistics across several Omo Valley ethnic communities.',
    services: ['Community access coordination', 'Cultural liaison', 'Production logistics', 'Local crew', 'Permits'],
    outcome: 'Shoot completed on schedule. Community relationships maintained. All access handled with full consent and cultural protocol.',
  },
  {
    id: 'afar-volcanic',
    tag: 'International broadcaster',
    region: 'Afar Region — Danakil Depression',
    title: 'International production team — Afar volcanic environments',
    summary: 'Extended remote expedition shoot in the Danakil Depression and Erta Ale volcanic region. Involved specialist logistics, security-aware movement planning, drone coordination, and expedition camp setup.',
    services: ['Remote logistics', 'Security coordination', 'Drone permits', 'Expedition support', 'Local crew'],
    outcome: 'Expedition completed safely. Aerial and ground coverage achieved. Production maintained schedule across extreme terrain.',
  },
  {
    id: 'dassanech-ceremony',
    tag: 'Documentary',
    region: 'Omo River, Southern Ethiopia',
    title: 'Dassanech Dimi Ceremony — Omo River',
    summary: 'Sensitive cultural documentary involving direct community engagement, ceremony access, contributor communication, and careful protocol management with Dassanech community leadership.',
    services: ['Community liaison', 'Cultural protocol', 'Filming permits', 'Local crew', 'Contributor management'],
    outcome: 'Ceremony access secured with full community consent. Story filmed respectfully. Relationships preserved for future visits.',
  },
  {
    id: 'afar-village-danakil',
    tag: 'International broadcaster',
    region: 'Afar Region — Village and Danakil Depression',
    title: 'International production team — Afar village and Danakil Depression',
    summary: 'Combination documentary shoot covering Afar village community life and Danakil Depression landscapes. Required layered permits, remote logistics, cultural liaison, and drone coordination.',
    services: ['Filming permits', 'Drone coordination', 'Remote logistics', 'Cultural liaison', 'Community access'],
    outcome: 'Federal and regional permits secured. Aerial and ground footage achieved. Village filming conducted respectfully within agreed protocol.',
  },
  {
    id: 'danakil-reality',
    tag: 'Reality format',
    region: 'Danakil Depression, Afar Region',
    title: 'International production team — Reality format in Danakil',
    summary: 'High-pressure reality format production in extreme desert environment. Involved talent logistics, safety-aware movement planning, rapid call-sheet coordination, and remote field support.',
    services: ['Production logistics', 'Talent movement', 'Security coordination', 'On-ground fixing', 'Remote field support'],
    outcome: 'Production delivered on compressed schedule. Talent safely managed across extreme terrain. Format requirements met.',
  },
  {
    id: 'tigray-churches-axum',
    tag: 'International broadcaster',
    region: 'Tigray — Rock-hewn churches and Axum',
    title: 'International production team — Tigray rock-hewn churches and Axum festival',
    summary: 'Heritage and cultural documentary across Tigray. Involved sacred site access coordination, church authority liaison, festival timing management, and regional permit stacking.',
    services: ['Heritage access', 'Religious site coordination', 'Filming permits', 'Cultural liaison', 'Production logistics'],
    outcome: 'Church and heritage access secured with custodial approval. Festival coverage achieved. All filming conducted with full protocol compliance.',
  },
]

export default function CaseStudiesPage() {
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
  const imageRecord = records.find(item => item.slug === 'whatsapp-image-2026-05-18-at-16-40-59-10' || item.labelName === 'whatsapp-image-2026-05-18-at-16-40-59-10') || records[0];

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <div className="bg-ink pt-[80px] pb-16 relative overflow-hidden">
        {imageRecord ? (
          <div className="absolute inset-0 z-0">
            <PremiumImage
              assets={imageRecord.assets}
              altText={imageRecord.seoDescription || imageRecord.altText}
              dominantColor={imageRecord.dominantColors[0]}
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
              <li className="text-white/50">Case Studies</li>
            </ol>
          </nav>
          <div className="max-w-[640px]">
            <Eyebrow className="mb-4">Production experience</Eyebrow>
            <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(32px,4.5vw,52px)' }}>
              Selected Ethiopia<br />
              <em className="text-gold not-italic italic">Production Case Studies</em>
            </h1>
            <p className="text-[14px] font-light text-white/55 leading-[1.8] mb-3">
              Selected production experience across Ethiopia: permits, access coordination, field logistics, cultural liaison, and remote filming support for international crews.
            </p>
            <p className="text-[12px] font-light text-white/30 italic mb-7">
              Field-tested production support for international crews filming in Ethiopia: discreet, practical, permission-aware, and built around real locations, not just beautiful ideas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
                Request a Production Call
              </Link>
              <Link href="/clients" className="inline-flex items-center gap-2 bg-transparent text-white/65 border border-white/20 text-[11px] font-medium uppercase px-5 py-3 rounded-[2px] hover:border-white/40 hover:text-white transition-all">
                View Clients & Credits
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* NDA TRUST NOTE */}
      <div className="bg-graphite border-b border-white/[0.06] py-4">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <p className="text-[12px] font-light text-white/40 leading-[1.7]">
            <strong className="text-white/60 font-medium">NDA-safe by default.</strong>{' '}
            Client names and production details are shown only where confirmed. Additional references and deeper case details are shared privately during qualified planning discussions. Use of broadcaster names or logos does not imply endorsement.
          </p>
        </div>
      </div>

      {/* TRUST INTRO */}
      <section className="bg-warm py-12">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[720px]">
            <p className="text-[15px] font-light text-steel leading-[1.8] mb-4">
              For more than a decade, our team has supported film and television productions across Ethiopia, from remote desert expeditions and highland heritage locations to culturally sensitive community settings and complex multi-region schedules.
            </p>
            <p className="text-[14px] font-light text-steel leading-[1.8]">
              Our work is rarely visible on screen. It is measured by what does not go wrong: access coordinated early, permits aligned with the route, communities respected, crews supported, equipment moved, and schedules protected under difficult conditions.
            </p>
          </div>
        </div>
      </section>

      {/* CASE CARDS */}
      <section className="bg-cream py-14">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CASES.map((cs) => (
              <article key={cs.id} className="bg-warm border border-black/[0.07] border-t-2 border-t-ember rounded-[3px] p-5 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[9px] font-medium text-ember tracking-[0.1em] uppercase">{cs.tag}</span>
                  <span className="text-[9px] font-light text-silver/80 text-right leading-[1.4]">{cs.region}</span>
                </div>
                <h2 className="text-[13px] font-medium text-ink leading-[1.3] mb-3">{cs.title}</h2>
                <p className="text-[12px] font-light text-steel leading-[1.65] mb-4 flex-1">{cs.summary}</p>
                {/* Services tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.services.map((s) => (
                    <span key={s} className="text-[9px] font-light text-silver border border-black/[0.08] px-2 py-0.5 rounded-[2px]">{s}</span>
                  ))}
                </div>
                {/* Outcome */}
                <div className="border-t border-black/[0.06] pt-3">
                  <p className="text-[10px] font-medium text-teal-mid tracking-[0.06em] uppercase mb-1">Outcome</p>
                  <p className="text-[12px] font-light text-steel leading-[1.6]">{cs.outcome}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 max-w-[560px]">
            <p className="text-[12px] font-light text-silver/70 italic leading-[1.7]">
              Additional credits, deeper case details, and verified references are available on request for qualified productions. We share what is appropriate and what confidentiality allows.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-ash py-14">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-white text-display-sm mb-8 tracking-[-0.015em]">
            Capabilities demonstrated across these productions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              'Remote expedition logistics across extreme terrain',
              'Heritage and sacred site access with custodial coordination',
              'Community filming with consent and cultural protocol',
              'Multi-authority permit stacking across federal, regional, and site levels',
              'Drone coordination in restricted and access-sensitive environments',
              'Talent and VIP movement planning in high-profile productions',
              'Security-aware routing in complex regions',
              'Ceremony and festival access timing management',
              'Rapid call-sheet adaptation under field pressure',
            ].map((item) => (
              <div key={item} className="flex gap-2.5 items-start bg-white/[0.04] border border-white/[0.07] rounded-[3px] px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" aria-hidden="true" />
                <span className="text-[12px] font-light text-white/55 leading-[1.6]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-graphite py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[560px]">
            <h2 className="font-serif font-light text-white text-display-md italic leading-[1.2] mb-4">Request a production call</h2>
            <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">
              Share your project type, dates, locations, crew size, and any access or sensitivity requirements. We will respond with practical next steps and, where appropriate, more detailed references.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[12px] font-medium tracking-[0.07em] uppercase px-7 py-3.5 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
                Request a Production Call
              </Link>
              <a href={`https://wa.me/${SITE.whatsapp1Raw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent text-white/65 border border-white/20 text-[12px] font-medium uppercase px-5 py-3.5 rounded-[2px] hover:border-white/40 hover:text-white transition-all">
                WhatsApp / Call
              </a>
            </div>
            <p className="text-[11px] text-white/28">{SITE.email} &nbsp;|&nbsp; {SITE.whatsapp1}</p>
          </div>
        </div>
      </section>

    </div>
  )
}
