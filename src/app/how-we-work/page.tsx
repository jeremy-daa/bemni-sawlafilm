import type { Metadata } from 'next'
import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SITE } from '@/lib/constants'
import { JsonLd } from '@/components/seo/JsonLd'
import { pageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'How Sawla Films Works | Ethiopia Film Fixer Process',
  description:
    'How Sawla Films approaches film fixing in Ethiopia: feasibility, permit planning, logistics build, and shoot-day coordination. Honest, practical, field-tested.',
  alternates: { canonical: '/how-we-work' },
  openGraph: {
    url: '/how-we-work',
  }
}

const PHASES = [
  {
    n: '01',
    title: 'Feasibility review',
    lead: 'We tell you what is realistic before you commit.',
    body: [
      'When a production contacts us, the first conversation is not about price. It is about what you are trying to do and whether it is achievable on your timeline, in your locations, with your crew size, subject matter, equipment, and schedule.',
      'We review your brief — dates, regions, locations, crew size, equipment footprint, drone intent, subject matter, contributor needs, access sensitivity, and distribution type — and we respond with an honest assessment.',
      'This is where we flag: locations that need more time than you have planned, permit requirements that were not visible from the outside, seasonal access constraints, logistics gaps, drone restrictions, or subject matter sensitivities that affect the route.',
      'The feasibility review protects the schedule and the budget. Getting it right at this stage costs very little. Getting it wrong after crew travel, accommodation, and equipment is committed costs significantly more.',
    ],
    checklist: [
      'Confirm what is achievable on your specific timeline and route.',
      'Identify permit pathways — federal, regional, heritage, religious, protected-area, community-level.',
      'Flag locations with access constraints, security considerations, or cultural protocol requirements.',
      'Outline logistics requirements: transport, accommodation, fuel, remote support.',
      'Connect drone, customs, and crew needs to the wider plan.',
      'Recommend the right next step: proceed to permit planning, adjust the route, or revisit timing.',
    ],
  },
  {
    n: '02',
    title: 'Access and permit planning',
    lead: 'Approvals built in parallel, not as an afterthought.',
    body: [
      'Permit planning is not a single document submission. In Ethiopia, a production may require approvals at federal level, regional level, district level, site custodian level, religious authority level, protected-area level, and community level — often for different locations in the same shooting schedule.',
      'We map every approval required for your route, format, and activity. We build the permit pathway as a parallel workflow alongside logistics and crew preparation so that no single approval bottleneck holds up the entire production.',
      'Documentation, submission, follow-up, local-office coordination, and the practical communication required to move approvals forward are all part of our work at this stage. We keep you updated on what is confirmed, what is in progress, and what may change.',
      'For drone filming, heritage sites, sacred locations, and access-sensitive environments, we treat each permission as its own sub-workflow with its own timeline and contact chain.',
    ],
    checklist: [
      'Map all permit requirements across the route by authority, location type, and filming activity.',
      'Prepare and coordinate documentation: production brief, equipment list, crew details, drone specifications.',
      'Submit to federal and regional film authorities where required.',
      'Coordinate heritage, religious, protected-area, and community-level access where needed.',
      'Follow up with relevant authorities and maintain a live status on each approval.',
      'Align permit timelines with the shooting schedule so delays are anticipated, not discovered on shoot day.',
    ],
  },
  {
    n: '03',
    title: 'Logistics build',
    lead: 'Movement that matches how Ethiopia actually works on the ground.',
    body: [
      'Logistics in Ethiopia is not a booking task. It is a design task. A route that looks straightforward on a map can be significantly more complex when real road conditions, altitudes, seasonal access, fuel availability, community timing, ceremony windows, domestic flight schedules, equipment volumes, and local coordination are factored in.',
      'We build the logistics plan to match the production reality: transport types matched to the terrain, accommodation chosen for the route and crew expectations, field support mapped to where it is needed, airport handling coordinated with shoot-day timing, and contingency options identified before they become emergencies.',
      'Customs and equipment planning runs alongside logistics. Clearance timing, temporary import documentation, carnet review where relevant, and airport coordination at Bole International are aligned with the first filming day, not handled as a separate administrative process.',
      'Through Sawla Tours, we can extend logistics to expedition-level remote support: specialist vehicles, mobile camps, fuel runs, water, communications, and field team coordination for remote shoots in Danakil, Omo, Simien, Bale, Gambela, and other expedition-grade locations.',
    ],
    checklist: [
      'Design the transport plan: vehicle types, driver briefing, routing, convoy logic, timing buffers.',
      'Confirm accommodation matched to route, crew expectations, and budget level.',
      'Coordinate airport arrivals, meet-and-assist, domestic flights, and departure logistics.',
      'Plan equipment customs clearance, temporary import, and carnet review.',
      'Confirm local crew, translators, cultural liaisons, and any specialist field support.',
      'Build contingency options for weather, access changes, road conditions, and schedule shifts.',
    ],
  },
  {
    n: '04',
    title: 'Shoot-day fixing',
    lead: 'Calm coordination when plans meet the ground.',
    body: [
      'Shoot-day fixing is where preparation becomes operational. On the day, we coordinate local liaison, access timing, driver briefing, translator alignment, contributor communication, on-site protocol, call sheet updates, and real-time problem solving.',
      'The goal on every shoot day is to keep the production focused on the story. When timing shifts, access requires a quick conversation, local protocol needs handling, or a contributor needs support, we manage that layer so the director and DP can stay on the scene.',
      'We update the production clearly when something changes: what the option is, what it costs in time or access, and what we recommend. We do not disappear into the problem. We come back with a practical path forward.',
      'On complex days — community locations, heritage sites, high-profile talent, remote movements, multi-location schedules — we work across the full day from pre-call preparation through wrap and next-day readiness.',
    ],
    checklist: [
      'Pre-shoot alignment: confirm call sheet, access notes, contacts, translator briefing.',
      'Local liaison: community, authorities, site custodians, contributors, drivers.',
      'Access coordination: arrival timing, permission confirmation, crew and equipment flow.',
      'Real-time communication: updates between production, crew, fixers, drivers, and field team.',
      'Rapid adjustment: options presented clearly when conditions change mid-day.',
      'Wrap and readiness: close local communication, confirm next-day logistics, flag open items.',
    ],
  },
]

const PRINCIPLES = [
  {
    title: 'Honest earlier than comfortable',
    body: 'We flag risks, constraints, and realistic timelines as soon as we see them — not after the production has committed to them. Early honesty is less expensive than late surprises.',
  },
  {
    title: 'Compliance as a foundation, not a formality',
    body: 'Permits, access consents, cultural protocol, and community engagement are not bureaucratic steps to be minimised. They are the foundation that makes quality filming possible and protects access for future productions.',
  },
  {
    title: 'Parallel planning, not sequential',
    body: 'Permits, logistics, customs, crew, and location access are planned in parallel — aligned to one schedule — not stacked in a sequence where each step waits for the previous one to finish.',
  },
  {
    title: 'Clear when conditions change',
    body: 'Conditions change. We keep production teams updated with what happened, what the options are, and what we recommend. We do not go quiet when situations become complicated.',
  },
  {
    title: 'Invisible when it is working',
    body: 'The best measure of our work is a production where everything runs cleanly and the fixer barely needs to be noticed. We aim for that. When it becomes complicated, we become visible.',
  },
  {
    title: 'NDA-safe by default',
    body: 'All production details — schedules, locations, subject matter, talent, client names — are handled as confidential. We do not share, discuss, or reference production information without explicit confirmation.',
  },
]

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        id="how-we-work-page-schema"
        data={pageSchema({
          type: 'WebPage',
          path: '/how-we-work',
          name: 'How Sawla Films Works',
          description:
            'How Sawla Films approaches film fixing in Ethiopia: feasibility review, access and permit planning, logistics build, and shoot-day fixing from the first planning question to final wrap.',
        })}
      />

      {/* ── HERO ── */}
      <div className="bg-ink pt-[80px] pb-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="absolute top-1/2 left-[-100px] -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(211,176,58,0.07) 0%,transparent 70%)' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.1em]">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li className="text-white/50">How We Work</li>
            </ol>
          </nav>
          <div className="max-w-[620px]">
            <Eyebrow className="mb-4">Our process</Eyebrow>
            <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(32px,4.5vw,54px)' }}>
              How Sawla Films<br />
              <em className="text-gold not-italic italic">approaches a production</em>
            </h1>
            <p className="text-[14px] font-light text-white/55 leading-[1.8] mb-4">
              Film fixing in Ethiopia is not a single service. It is a production discipline that runs from the first feasibility question to the final wrap. Here is how we work.
            </p>
            <p className="text-[13px] font-light text-white/35 italic mb-7">
              We keep production clean by working in parallel, not in sequence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
                Request a Fixer / Get a Quote
              </Link>
              <Link href="/ethiopia-film-fixer-services" className="inline-flex items-center gap-2 bg-transparent text-white/65 border border-white/20 text-[11px] font-medium uppercase px-5 py-3 rounded-[2px] hover:border-white/40 hover:text-white transition-all">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOUR PHASES ── */}
      {PHASES.map((phase, i) => (
        <section key={phase.n} className={`py-16 ${i % 2 === 0 ? 'bg-cream' : 'bg-warm'}`}>
          <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">

              {/* Phase label */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif text-[52px] font-light text-ember/20 leading-none">{phase.n}</span>
                  <div className="w-px h-12 bg-ember/20" aria-hidden="true" />
                  <div>
                    <p className="text-[9px] font-medium text-ember tracking-[0.14em] uppercase mb-1">Phase {phase.n}</p>
                    <h2 className="font-serif font-light text-ink text-[22px] leading-[1.2]">{phase.title}</h2>
                  </div>
                </div>
                <p className="text-[13px] font-light text-steel italic leading-[1.7] mb-5 border-l-2 border-ember/30 pl-3">{phase.lead}</p>

                {/* Checklist */}
                <div className="bg-ink rounded-[3px] p-5">
                  <p className="text-[9px] font-medium text-ember tracking-[0.12em] uppercase mb-3">What we deliver in this phase</p>
                  <ul className="space-y-2">
                    {phase.checklist.map((item) => (
                      <li key={item} className="flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-ember/60 flex-shrink-0 mt-1.5" aria-hidden="true" />
                        <span className="text-[11px] font-light text-white/55 leading-[1.55]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Body content */}
              <div className="lg:col-span-2 space-y-4">
                {phase.body.map((para, j) => (
                  <p key={j} className="text-[14px] font-light text-steel leading-[1.8]">{para}</p>
                ))}
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── PRINCIPLES ── */}
      <section className="bg-ash py-16">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-white text-display-md mb-10 tracking-[-0.02em]">
            Operating principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="bg-white/[0.04] border border-white/[0.07] rounded-[3px] p-6">
                <h3 className="flex items-center gap-2.5 text-[13px] font-medium text-white mb-3">
                  <span className="w-[3px] h-4 bg-ember rounded-[1px] flex-shrink-0" aria-hidden="true" />
                  {p.title}
                </h3>
                <p className="text-[12px] font-light text-white/50 leading-[1.75]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <section className="bg-graphite py-12">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[640px] mx-auto text-center">
            <p className="font-serif font-light text-white/70 text-[22px] italic leading-[1.55]">
              "We do not sell shortcuts. We deliver clarity, preparation, and calm execution — so that when the light is perfect and the access is confirmed, your crew is ready."
            </p>
            <p className="text-[11px] font-light text-white/30 mt-4 tracking-[0.04em]">Sawla Films</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-ash py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[520px]">
            <h2 className="font-serif font-light text-white text-display-md italic leading-[1.2] mb-4">Start with a feasibility review</h2>
            <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">
              Share your project type, dates, regions, crew size, and any access, permit, or sensitivity considerations. We will respond with an honest feasibility assessment and clear next steps.
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
