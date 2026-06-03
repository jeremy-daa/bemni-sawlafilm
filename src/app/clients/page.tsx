import type { Metadata } from 'next'
import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SITE } from '@/lib/constants'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Ethiopia Film Fixer Clients & Selected Credits | Sawla Films',
  description: 'Selected production experience and credits for Sawla Films, Ethiopia film fixer. NDA-safe references from international broadcasters, production companies, and streaming platforms.',
  alternates: { canonical: '/clients' },
  openGraph: {
    url: '/clients',
  }
}

const CLIENTS = ['Netflix', 'BBC', 'NHK Japan', 'Al Jazeera', 'France Televisions', 'Keshet / Israel Channel 12', 'KBS South Korea']

const CAPABILITIES = [
  { title: 'Permits and compliance', items: ['Federal and regional filming permits', 'Heritage and sacred site access', 'Protected-area approvals', 'Drone permission coordination', 'Multi-authority permit stacking'] },
  { title: 'Field logistics', items: ['Remote expedition movement', 'Multi-region transport and routing', 'Airport and domestic flight handling', 'Equipment customs and clearance', 'Accommodation in remote areas'] },
  { title: 'Access and people', items: ['Community consent and liaison', 'Cultural protocol coordination', 'Contributor communication', 'Translator and interpreter support', 'Sensitive location management'] },
  { title: 'Shoot-day operations', items: ['On-ground fixing and call sheet management', 'VIP and talent movement', 'Security-aware access planning', 'Real-time field problem solving', 'Multi-department coordination'] },
]

const WORK_TYPES = [
  'International broadcast documentary',
  'Factual and natural history series',
  'Celebrity-led and presenter-driven formats',
  'Reality and unscripted production',
  'Commercial and branded content',
  'Cultural and heritage documentary',
  'NGO and institutional filming',
  'Independent and festival film',
  'Remote expedition and adventure formats',
]

export default function ClientsPage() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <div className="bg-ink pt-[80px] pb-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.1em]">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li className="text-white/50">Clients & Credits</li>
            </ol>
          </nav>
          <div className="max-w-[640px]">
            <Eyebrow className="mb-4">Selected credits</Eyebrow>
            <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(32px,4.5vw,52px)' }}>
              Ethiopia Film Fixer<br />
              <em className="text-gold not-italic italic">Clients & Selected Credits</em>
            </h1>
            <p className="text-[14px] font-light text-white/55 leading-[1.8] mb-3">
              Selected production experience across Ethiopia: permits, access coordination, field logistics, cultural liaison, and remote filming support for international crews.
            </p>
            <p className="text-[12px] font-light text-white/30 italic mb-7">
              Field-tested production support: discreet, practical, permission-aware, and built around real locations, not just beautiful ideas.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
                Request a Fixer / Get a Quote
              </Link>
              <Link href="/ethiopia-film-fixer-services" className="inline-flex items-center gap-2 bg-transparent text-white/65 border border-white/20 text-[11px] font-medium uppercase px-5 py-3 rounded-[2px] hover:border-white/40 hover:text-white transition-all">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST INTRO */}
      <section className="bg-warm py-12">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[720px]">
            <p className="text-[15px] font-light text-steel leading-[1.8] mb-4">
              When you plan a shoot in Ethiopia, you need more than a list of services. You need proof that your partner on the ground can coordinate access, protect the schedule, work respectfully in sensitive locations, and respond calmly when field conditions change.
            </p>
            <p className="text-[14px] font-light text-steel leading-[1.8]">
              For more than a decade, our team has supported film and television productions across Ethiopia. Our work is rarely visible on screen. It is measured by what holds: access secured, timing protected, logistics aligned, communities respected, and crew movement kept calm under pressure.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT LIST */}
      <section className="bg-cream py-14">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-ink text-display-sm mb-8 tracking-[-0.015em]">
            Selected clients and productions
          </h2>
          <p className="text-[12px] font-light text-silver/70 italic mb-6">
            Names shown where confirmed public usage is appropriate. Additional credits and references are available on request where applicable. Use of names does not imply endorsement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-w-[820px] mb-8">
            {CLIENTS.map((client) => (
              <div key={client} className="flex gap-2.5 items-center bg-warm border border-black/[0.07] rounded-[3px] px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0" aria-hidden="true" />
                <span className="text-[13px] font-light text-ink">{client}</span>
              </div>
            ))}
          </div>
          <div className="max-w-[560px] bg-gold/[0.07] border-l-2 border-gold px-5 py-4 rounded-r-[3px]">
            <p className="text-[12px] font-light text-[#5A3D00] leading-[1.7]">
              <strong className="font-medium">NDA-safe note: </strong>Additional credits and references are available on request where appropriate. We respect NDAs, location sensitivity, client permissions, and production confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CAPABILITIES GRID */}
      <section className="bg-warm py-14">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-ink text-display-sm mb-8 tracking-[-0.015em]">
            Production capabilities demonstrated
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="bg-cream border border-black/[0.07] rounded-[3px] p-5">
                <h3 className="text-[11px] font-medium text-ember tracking-[0.08em] uppercase mb-3">{cap.title}</h3>
                <ul className="space-y-1.5">
                  {cap.items.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <span className="w-1 h-1 rounded-full bg-ember/50 flex-shrink-0 mt-1.5" aria-hidden="true" />
                      <span className="text-[12px] font-light text-steel leading-[1.55]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK TYPES */}
      <section className="bg-cream py-12">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-ink text-display-sm mb-7 tracking-[-0.015em]">Production types we support</h2>
          <div className="flex flex-wrap gap-2">
            {WORK_TYPES.map((type) => (
              <span key={type} className="text-[12px] font-light text-steel border border-black/[0.09] px-3 py-1.5 rounded-[2px] bg-warm">{type}</span>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCES CTA */}
      <section className="bg-ash py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif font-light text-white text-display-md italic leading-[1.2] mb-4">Request private references</h2>
              <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">
                Additional production references, detailed case information, and direct contacts are available on request for qualified productions. Share your project type, dates, and locations and we will respond appropriately.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[12px] font-medium tracking-[0.07em] uppercase px-7 py-3.5 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
                  Request a Fixer / Get a Quote
                </Link>
              </div>
              <p className="text-[11px] text-white/28">{SITE.email} &nbsp;|&nbsp; {SITE.whatsapp1}</p>
            </div>
            <div>
              <Link href="/case-studies" className="block bg-white/[0.04] border border-white/[0.07] rounded-[3px] p-6 hover:bg-white/[0.07] transition-all">
                <p className="text-[10px] font-medium text-ember tracking-[0.12em] uppercase mb-3">Production case studies</p>
                <p className="font-serif font-light text-white text-[20px] italic mb-3">Six selected case snapshots →</p>
                <p className="text-[12px] font-light text-white/45 leading-[1.65]">
                  NDA-safe case snapshots showing production type, regions covered, services delivered, and outcomes achieved across Ethiopia.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
