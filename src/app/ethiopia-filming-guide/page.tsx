import type { Metadata } from 'next'
import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ethiopia Filming Guide | Permits, Drone, Weather, Costs & Planning',
  description: 'The practical Ethiopia filming guide for producers. Permits, drone approvals, equipment import, best seasons, production costs, and logistics planning for shoots nationwide.',
  alternates: { canonical: '/ethiopia-filming-guide' },
}

const GUIDES = [
  { tag: 'Locations', title: 'What to Film in Ethiopia', desc: 'Stories that are visually powerful and operationally realistic. Landscapes, communities, sacred sites, and contemporary realities within workable production reach.', href: '/what-to-film-in-ethiopia', time: '8 min read' },
  { tag: 'Permits', title: 'Filming Permits in Ethiopia', desc: 'How filming permits work, what approvals may be needed, who issues them, realistic timelines, and what can cause delays.', href: '/filming-permits-ethiopia', time: '7 min read' },
  { tag: 'Aerial', title: 'Drone Permits in Ethiopia', desc: 'Aerial work planned early, approved properly, and coordinated for real shoot days. What you need to know before flying in Ethiopia.', href: '/drone-permits-ethiopia', time: '6 min read' },
  { tag: 'Equipment', title: 'Bringing Film Equipment to Ethiopia', desc: 'Customs, temporary import planning, documentation checks, and arrival coordination for productions bringing camera, sound, drone, and support equipment.', href: '/bringing-film-equipment-to-ethiopia', time: '7 min read' },
  { tag: 'Planning', title: 'Best Time to Film in Ethiopia', desc: 'Seasonal planning that protects the schedule. Altitude, road vulnerability, visibility, heat management, and access reliability by region and month.', href: '/best-time-to-film-in-ethiopia', time: '8 min read' },
]

const PLANNING_TABLE = [
  { area: 'Filming permits in Ethiopia', check: 'Federal and regional approvals, plus location-specific permissions where required.' },
  { area: 'Drone permits in Ethiopia', check: 'Separate aerial approval planning, restriction checks, airspace sensitivity, and shoot-day compliance.' },
  { area: 'Bringing film equipment', check: 'Temporary import approach, equipment lists, serial numbers, declared values, batteries, and customs coordination.' },
  { area: 'Best time to film', check: 'Seasonality by region, altitude, access windows, road conditions, and weather risks that affect schedule reliability.' },
  { area: 'Production logistics', check: 'Distances, routing, fuel, accommodation, field movement, communication, and daily coordination.' },
  { area: 'Local crew and translators', check: 'Language coverage, cultural liaison, contributor communication, and production-aware field support.' },
]

export default function FilmingGuideHubPage() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <div className="bg-ink pt-[80px] pb-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 70%)' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.1em]">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li className="text-white/50">Ethiopia Filming Guide</li>
            </ol>
          </nav>
          <div className="max-w-[640px]">
            <Eyebrow className="mb-4">For producers and production managers</Eyebrow>
            <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(34px,5vw,56px)' }}>
              Ethiopia<br /><em className="text-gold not-italic italic">Filming Guide</em>
            </h1>
            <p className="text-[15px] font-light text-white/60 italic leading-[1.7] mb-4">Plan filming in Ethiopia with clarity, not guesswork.</p>
            <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">
              Ethiopia can deliver exceptional stories and visuals: volcanic desert basins, ancient sacred sites, highland landscapes, Rift Valley horizons, remote communities, historic cities, and fast-moving contemporary life. It also comes with real production variables. This guide is built to help producers plan early.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
                Request a Fixer / Get a Quote
              </Link>
              <a href={`https://wa.me/${SITE.whatsapp1Raw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent text-white/65 border border-white/20 text-[11px] font-medium uppercase px-5 py-3 rounded-[2px] hover:border-white/40 hover:text-white transition-all">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PRE-PRODUCTION CHECKLIST */}
      <section className="bg-warm py-12 border-b border-black/[0.07]">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-ink text-display-sm mb-6 tracking-[-0.015em]">
            Ethiopia filming, at a glance
          </h2>
          <p className="text-[13px] font-light text-silver mb-6">Pre-production checklist — check these areas before your schedule, crew movements, and location commitments are locked.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] border-collapse max-w-[860px]">
              <thead>
                <tr className="border-b-2 border-ember/20">
                  <th className="text-left py-2.5 pr-6 font-medium text-ink">Planning area</th>
                  <th className="text-left py-2.5 font-medium text-ink">What producers should check early</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {PLANNING_TABLE.map((row) => (
                  <tr key={row.area}>
                    <td className="py-3 pr-6 font-light text-steel align-top">{row.area}</td>
                    <td className="py-3 font-light text-steel align-top leading-[1.65]">{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GUIDE CARDS */}
      <section className="bg-cream py-16">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-ink text-display-md mb-10 tracking-[-0.02em]">
            Five essential guides for producers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group block bg-warm border border-black/[0.07] border-t-2 border-t-teal-mid rounded-[3px] p-5 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-250"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[9px] font-medium text-teal-mid tracking-[0.1em] uppercase">{guide.tag}</span>
                  <span className="text-[9px] font-light text-silver">{guide.time}</span>
                </div>
                <h3 className="text-[13px] font-medium text-ink mb-2.5 leading-[1.3]">{guide.title}</h3>
                <p className="text-[12px] font-light text-silver leading-[1.65] mb-3">{guide.desc}</p>
                <span className="text-[10px] font-medium text-teal-mid tracking-[0.06em] uppercase arrow-link">Read guide</span>
              </Link>
            ))}

            {/* Contact card */}
            <div className="bg-ash border border-white/[0.07] border-t-2 border-t-ember rounded-[3px] p-5">
              <p className="text-[9px] font-medium text-ember tracking-[0.1em] uppercase mb-3">Need advice now?</p>
              <p className="font-serif font-light text-white text-[17px] italic mb-3 leading-[1.35]">Talk to the Sawla Films fixer team</p>
              <p className="text-[12px] font-light text-white/45 leading-[1.65] mb-4">If your shoot is time-sensitive, a quick feasibility call can save days of back-and-forth.</p>
              <div className="space-y-2">
                <a href={`https://wa.me/${SITE.whatsapp1Raw}`} target="_blank" rel="noopener noreferrer" className="block text-[11px] font-medium text-ember tracking-[0.06em] uppercase">WhatsApp {SITE.whatsapp1}</a>
                <Link href="/request-a-quote" className="block text-[11px] font-medium text-gold/80 tracking-[0.06em] uppercase">Request a quote →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEED A FIXER */}
      <section className="bg-ash py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[560px]">
            <h2 className="font-serif font-light text-white text-display-md italic leading-[1.2] mb-4">Ready to plan your Ethiopia shoot?</h2>
            <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">
              Share your project type, dates, regions, crew size, equipment footprint, and whether drone filming or sensitive access is involved. We will reply with practical next steps, permit considerations, and an honest assessment of what your timeline allows.
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
