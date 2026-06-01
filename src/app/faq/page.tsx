import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SITE } from '@/lib/constants'

import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'

export const metadata: Metadata = {
  title: 'FAQ — Ethiopia Film Fixer Questions Answered | Sawla Films',
  description: 'Frequently asked questions about filming in Ethiopia: permits, drone approvals, customs, logistics, costs, timelines, local crew, access, and what a film fixer does.',
  alternates: { canonical: '/faq' },
}

const FAQ_GROUPS = [
  {
    category: 'About Film Fixing in Ethiopia',
    items: [
      {
        q: 'What is a film fixer and do I need one in Ethiopia?',
        a: 'A film fixer handles the local production infrastructure that international crews cannot manage remotely: permits, access approvals, logistics, local crew coordination, customs support, and shoot-day problem solving. In Ethiopia, where approvals can involve multiple federal, regional, and site-level authorities, a film fixer is not optional for most international productions. Sawla Films provides end-to-end fixer services across all Ethiopian regions.',
      },
      {
        q: 'What types of productions does Sawla Films support?',
        a: 'We support international documentaries, factual and natural history series, celebrity-led and presenter-driven formats, reality and unscripted productions, commercial and branded content, NGO and institutional filming, independent and festival films, and high-profile or VIP productions. Our work covers shoot types that need proper permits, respectful community access, and careful logistics planning.',
      },
      {
        q: 'Can you work from a rough brief or early-stage planning?',
        a: 'Yes. A rough brief — dates, regions, subject matter, crew size — is enough to begin a feasibility review. We will tell you what is realistic, what needs more planning, what may require permit lead time, and what questions to answer before the schedule becomes expensive to change.',
      },
    ],
  },
  {
    category: 'Filming Permits in Ethiopia',
    items: [
      {
        q: 'How does the filming permit process work in Ethiopia?',
        a: 'Permit requirements in Ethiopia vary by production type, location, subject matter, filming activity, and crew composition. A federal filming permit may be the starting point, but many shoots also require regional, local, heritage, religious, protected-area, or community-level approvals. We assess your specific route and build the correct approval pathway for your production.',
      },
      {
        q: 'How long do filming permits take in Ethiopia?',
        a: 'Federal and regional approvals typically require a minimum of two to four weeks from a complete application. Heritage sites, protected areas, religious locations, and sensitive communities may require more time. Building permit lead time into your pre-production schedule from the first planning call is strongly recommended.',
      },
      {
        q: 'Do drone permits need a separate process from general filming permits?',
        a: 'Yes. Drone filming in Ethiopia should be planned as a separate workflow from general filming permits. Aerial work may involve aviation authority review, location-specific restriction checks, import documentation for the drone, pilot credentials, and operational constraints that vary by region and location type.',
      },
      {
        q: 'Can you film in religious or heritage sites in Ethiopia?',
        a: 'Yes, but these locations require specific access arrangements with the relevant custodial authorities. Requirements vary by site, denomination, and planned filming activity. Religious and heritage site permits should be started well in advance and combined with protocol planning for crew behaviour and filming conduct.',
      },
    ],
  },
  {
    category: 'Logistics and Equipment',
    items: [
      {
        q: 'Do I need an ATA Carnet to bring film equipment to Ethiopia?',
        a: 'Do not assume an ATA Carnet will automatically resolve all customs requirements for film equipment entering Ethiopia. Confirm whether a carnet is accepted for your specific shipment and prepare an alternative temporary import plan where needed. Share your equipment list and arrival method with us early so we can advise the right approach for your production.',
      },
      {
        q: 'How early should we plan customs and equipment import support?',
        a: 'As early as possible — ideally at the same time as filming permits and logistics planning. Equipment lists, serial numbers, and arrival methods should be reviewed before crew travel is booked.',
      },
      {
        q: 'Can you support remote expedition shoots?',
        a: 'Yes. Through our sister operation Sawla Tours, we provide integrated remote field logistics including specialist 4x4 vehicles, experienced expedition drivers, mobile camp support, fuel planning, and field coordination for shoots in Danakil, Omo Valley, Simien Mountains, Bale, Gambela, and other remote regions.',
      },
      {
        q: 'Do you provide your own vehicles and drivers?',
        a: 'We coordinate appropriate vehicles and experienced local drivers matched to the terrain, equipment load, and crew size. Vehicle type depends on the route and production requirements.',
      },
    ],
  },
  {
    category: 'Access, Communities and Sensitive Locations',
    items: [
      {
        q: 'How do you handle community consent in places like the Omo Valley?',
        a: 'Community consent in the Omo Valley and similar settings requires genuine cultural liaison, respectful protocol, and community engagement through the right channels. It cannot be assumed and should not be treated as transactional. Productions that invest in proper engagement secure better access, more authentic stories, and protect the communities and relationships involved.',
      },
      {
        q: 'Can you film in conflict-affected or access-sensitive regions?',
        a: 'Some regions in Ethiopia have experienced conflict and may have access restrictions or evolving security conditions. We advise based on current field realities and do not encourage filming that conflicts with official guidance or local authority conditions. Access-sensitive shoots should be planned with the most current information available.',
      },
      {
        q: 'What is the best time of year to film in Ethiopia?',
        a: 'October to January is the most reliable window for the widest range of locations. However, the best time depends on your specific regions and production type. The Danakil is accessible year-round but requires careful heat management. Some highland areas have heavy rains from June to September. Ceremony windows — Timkat in January, Hamer ceremonies in August to November — require specific advance planning.',
      },
    ],
  },
  {
    category: 'Costs, References and Practicalities',
    items: [
      {
        q: 'How much does it cost to hire an Ethiopia film fixer?',
        a: 'Film fixer costs in Ethiopia vary based on shoot duration, regions covered, permit complexity, crew size, drone requirements, and logistics support needed. We provide project-specific quotes following a feasibility review. Contact us with your dates, regions, and brief and we will respond with an initial cost framework and what will drive it.',
      },
      {
        q: 'Do you share client references and production credits?',
        a: 'Selected credits and NDA-safe references are listed on our Clients and Case Studies pages. Additional production references, detailed case information, and direct contacts are available on request for qualified productions. We share what is appropriate and what confidentiality allows.',
      },
      {
        q: 'Can you keep production details confidential?',
        a: 'Yes. NDA-safe by default. All production details, location information, talent names, subject matter, and scheduling information are treated as confidential. We work within need-to-know information protocols and can manage embargoed schedules and confidential production elements.',
      },
      {
        q: 'Do you work with all sizes of production — from small indie to major broadcaster?',
        a: 'Yes. We work with solo filmmakers and small specialist crews through to major international broadcaster productions and multi-region factual series. The planning depth and service scope scales to match the production. The same principles apply regardless of size: preparation, respect, clear communication, and honest assessment of what is realistic.',
      },
    ],
  },
]

// Build FAQPage schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_GROUPS.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
}

export default function FAQPage() {
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
  const backgroundRecord = records.find(item => item.slug === 'fiml-crew-in-action-upscaled-photogrid' || item.labelName === 'fiml-crew-in-action-upscaled-photogrid') || records[0];

  return (
    <div className="min-h-screen">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <div className="bg-ink pt-[80px] pb-14 relative overflow-hidden">
        {backgroundRecord ? (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <PremiumImage
              assets={backgroundRecord.assets}
              altText={backgroundRecord.seoDescription || backgroundRecord.altText}
              dominantColor={backgroundRecord.dominantColors[0]}
              className="w-full h-full object-cover"
              useFullResolution={true}
              sizes="100vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-ink/85 backdrop-saturate-[1.1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        )}
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.1em]">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li className="text-white/50">FAQ</li>
            </ol>
          </nav>
          <div className="max-w-[600px]">
            <Eyebrow className="mb-4">Frequently asked questions</Eyebrow>
            <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(32px,4.5vw,52px)' }}>
              Questions Producers<br />
              <em className="text-gold not-italic italic">Ask Before They Shoot</em>
            </h1>
            <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">
              Practical answers about filming in Ethiopia: permits, drone approvals, customs, logistics, access, local crew, costs, and what a film fixer does.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
                Request a Fixer / Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ CONTENT */}
      <section className="bg-cream py-16">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16">

            {/* Sidebar nav */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-[80px]">
                <p className="text-[10px] font-medium text-ink/40 tracking-[0.12em] uppercase mb-3">Jump to section</p>
                <nav aria-label="FAQ sections">
                  <ul className="space-y-1.5">
                    {FAQ_GROUPS.map((group) => (
                      <li key={group.category}>
                        <a
                          href={`#${group.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          className="text-[12px] font-light text-steel hover:text-ember transition-colors leading-[1.4] block"
                        >
                          {group.category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-8 bg-warm border border-black/[0.07] rounded-[3px] p-4">
                  <p className="text-[11px] font-medium text-ink mb-2">Have a specific question?</p>
                  <p className="text-[11px] font-light text-steel mb-3 leading-[1.6]">We respond to every production enquiry personally.</p>
                  <Link href="/request-a-quote" className="block text-center bg-ember text-white text-[10px] font-medium tracking-[0.06em] uppercase px-3 py-2 rounded-[2px] hover:bg-ember-glow transition-colors">
                    Ask us directly
                  </Link>
                </div>
              </div>
            </aside>

            {/* FAQ groups */}
            <div className="lg:col-span-3 space-y-12">
              {FAQ_GROUPS.map((group) => (
                <div key={group.category} id={group.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                  <h2 className="font-serif font-light text-ink text-display-sm mb-6 tracking-[-0.015em] scroll-mt-[90px]">
                    {group.category}
                  </h2>
                  <div className="space-y-0">
                    {group.items.map((item, i) => (
                      <details key={i} className="group border-b border-black/[0.07] py-1" open={i === 0 && group === FAQ_GROUPS[0]}>
                        <summary className="flex justify-between items-center cursor-pointer py-3.5 list-none gap-4">
                          <h3 className="text-[13px] font-medium text-ink leading-[1.4] pr-2">{item.q}</h3>
                          <span className="w-6 h-6 flex-shrink-0 rounded-full border border-black/15 flex items-center justify-center text-[13px] text-steel group-open:rotate-45 transition-transform duration-200 leading-none">+</span>
                        </summary>
                        <p className="text-[13px] font-light text-steel leading-[1.8] pb-5 pr-10">{item.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="bg-ash py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[520px]">
            <h2 className="font-serif font-light text-white text-display-md italic leading-[1.2] mb-4">Still have questions?</h2>
            <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">
              Every production enquiry is reviewed personally. Share your project and we will respond with practical, honest, specific answers — not a generic sales call.
            </p>
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
        </div>
      </section>

    </div>
  )
}
