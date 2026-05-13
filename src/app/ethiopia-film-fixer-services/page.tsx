import type { Metadata } from 'next'
import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SITE, SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Film Fixer Services in Ethiopia | Sawla Films',
  description: 'Full-service Ethiopia film fixer for international productions: permits, drone, customs, logistics, scouting, crew, security, on-ground fixing, and VIP handling.',
  alternates: { canonical: '/ethiopia-film-fixer-services' },
}

const ALL_SERVICES = [
  { num:'01', title:'Filming Permits & Compliance',          desc:'Federal, regional, and location approvals including heritage sites, restricted areas, and community consent where required.',                                         href:'/filming-permits-ethiopia' },
  { num:'02', title:'Drone Permits & Aerial Coordination',   desc:'Drone permission planning, restriction checks, documentation support, and aerial coordination where approvals are required and operationally possible.',               href:'/drone-permits-ethiopia' },
  { num:'03', title:'Customs & Equipment Import',            desc:'ATA Carnet or temporary import planning, equipment documentation, Bole Airport clearance coordination, and gear tracking.',                                           href:'/customs-clearance-film-equipment-ethiopia' },
  { num:'04', title:'Production Logistics',                  desc:'4×4 transport, routing, accommodation, fuel planning, remote field support, and practical contingencies for changing conditions.',                                    href:'/production-logistics-ethiopia' },
  { num:'05', title:'Location Scouting & Recce',             desc:'Permission-aware scouting, recce notes, visual references, access checks, seasonal considerations, and producer-ready briefing materials.',                          href:'/location-scouting-ethiopia' },
  { num:'06', title:'Local Crew, Translators & Liaison',     desc:'Trusted local crew, fixers, assistants, translators, and cultural liaisons selected for judgment, reliability, and discretion.',                                     href:'/local-crew-translators-ethiopia' },
  { num:'07', title:'Security & Sensitive Region',           desc:'Movement planning, access protocols, authority coordination, and practical risk reduction for complex or access-sensitive locations.',                                href:'/filming-security-access-ethiopia' },
  { num:'08', title:'On-Ground Fixing (Shoot Days)',         desc:'Call sheet coordination, local liaison, access management, rapid updates, and real-time problem solving during shoot days.',                                         href:'/on-ground-fixer-ethiopia' },
  { num:'09', title:'VIP / Celebrity Handling',             desc:'Discreet, privacy-first support for celebrity-led, high-profile, reality, branded, and VIP production requirements.',                                               href:'/vip-celebrity-handling-ethiopia' },
]

const STEPS = [
  { n:'1', title:'Brief and feasibility', desc:'We review locations, dates, subject matter, crew footprint, equipment, drone needs, and access expectations. We flag risks early before plans become expensive to change.' },
  { n:'2', title:'Clear plan and approvals', desc:'We map permits, access requirements, logistics, customs, staffing, and local protocols by region — handled in parallel so one delay does not cascade through the whole production.' },
  { n:'3', title:'Field execution and fixing', desc:'We coordinate shoot days on the ground, keep communication aligned, update the production quickly, and solve issues when conditions shift.' },
]

export default function ServicesHubPage() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <div className="bg-ink pt-[80px] pb-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize:'48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <Eyebrow className="mb-5">All services</Eyebrow>
          <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4 max-w-[620px]" style={{ fontSize:'clamp(34px,5vw,58px)' }}>
            Film Fixer Services<br />
            <em className="text-gold not-italic italic">in Ethiopia</em>
          </h1>
          <p className="text-[15px] font-light text-white/55 leading-[1.75] max-w-[560px] mb-3">
            Sawla Films provides film fixer services in Ethiopia for international productions that need clear approvals, practical logistics, respectful access, and calm on-ground coordination.
          </p>
          <p className="text-[13px] font-light text-white/35 italic mb-7 max-w-[520px]">
            We do not sell shortcuts. We give producers clarity before arrival, practical preparation on the ground, and steady coordination when conditions change.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
              Request a Fixer / Get a Quote
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp1Raw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent text-white/70 border border-white/20 text-[11px] font-medium tracking-[0.06em] uppercase px-5 py-3 rounded-[2px] hover:border-white/40 hover:text-white transition-all">
              WhatsApp / Call
            </a>
          </div>
          <p className="text-[10px] text-white/25 font-light tracking-[0.04em]">
            Production support for documentary, factual, commercial, branded, expedition, NGO, independent, and high-profile filming across Ethiopia, subject to current permissions, security conditions, and local authority guidance.
          </p>
        </div>
      </div>

      {/* QUICK SUMMARY STRIP */}
      <div className="bg-graphite border-b border-white/[0.06]">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {[
              { title:'Permits and access', body:'Permit pathways, location access, compliance, and approvals planned early with practical timelines.' },
              { title:'Logistics and movement', body:'Transport, crew, customs, scouting, accommodation, and routing designed for changing field conditions.' },
              { title:'Shoot-day stability', body:'On-ground fixing that keeps communication clear, decisions moving, and production days as stable as possible.' },
            ].map((item) => (
              <div key={item.title} className="px-6 py-5">
                <p className="text-[11px] font-medium text-ember tracking-[0.1em] uppercase mb-1.5">{item.title}</p>
                <p className="text-[12px] font-light text-white/45 leading-[1.65]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="bg-cream py-16" aria-labelledby="services-grid-title">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 id="services-grid-title" className="font-serif font-light text-ink text-display-md mb-10 tracking-[-0.02em]">
            Nine core services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {ALL_SERVICES.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group relative bg-warm border border-black/[0.07] border-t-[2px] border-t-ember rounded-[3px] p-5 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-250 block"
              >
                <span className="block font-serif text-[11px] text-ember italic mb-3">{svc.num}</span>
                <h3 className="text-[13px] font-medium text-ink mb-2 leading-[1.3]">{svc.title}</h3>
                <p className="text-[12px] font-light text-silver leading-[1.65] mb-4">{svc.desc}</p>
                <span className="text-[10px] font-medium text-ember tracking-[0.06em] uppercase arrow-link">View service</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-ash py-16">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-white text-display-md mb-10 tracking-[-0.02em]">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.n}>
                <div className="w-10 h-10 rounded-full bg-charcoal border border-ember/50 flex items-center justify-center mb-4">
                  <span className="font-serif text-[16px] font-light text-ember">{step.n}</span>
                </div>
                <h3 className="text-[13px] font-medium text-white mb-2">{step.title}</h3>
                <p className="text-[12px] font-light text-white/40 leading-[1.7]">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-serif font-light text-[15px] text-white/28 italic">
            We do not aim to be visible. We aim to be reliable.
          </p>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="bg-warm py-14">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-ink text-display-sm mb-7 tracking-[-0.015em]">Who we support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-w-[860px]">
            {[
              'International broadcasters and streaming platforms',
              'Documentary, factual, and unscripted productions',
              'Commercial, branded, and agency-led productions',
              'Independent filmmakers and small specialist crews',
              'NGOs, researchers, journalists, and story-driven field projects',
              'High-profile and VIP productions requiring discreet handling',
            ].map((item) => (
              <div key={item} className="flex gap-2.5 items-start bg-cream border border-black/[0.06] rounded-[3px] px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" aria-hidden="true" />
                <span className="text-[12px] font-light text-steel leading-[1.6]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ash py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize:'48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[580px]">
            <h2 className="font-serif font-light text-white text-display-md italic leading-[1.2] mb-4">Discuss your production needs</h2>
            <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">
              Send dates, regions, crew size, subject matter, equipment list, and whether drone filming is planned. We will respond with clear next steps and realistic timing.
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
