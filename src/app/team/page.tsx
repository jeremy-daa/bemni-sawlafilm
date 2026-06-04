import type { Metadata } from 'next'
import Link from 'next/link'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { JsonLd } from '@/components/seo/JsonLd'
import { teamPageSchema } from '@/lib/schema'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Team | Ethiopia Film Fixer | Sawla Films',
  description:
    'Meet the named team behind Sawla Films — Meti Tadele (Founder & Lead Fixer), plus production coordinator, permits specialist, location scout, field logistics manager, translator, and cultural liaison supporting international productions across Ethiopia.',
  alternates: { canonical: '/team' },
  openGraph: {
    url: '/team',
    title: 'The People Behind Sawla Films | Ethiopia Film Fixer Team',
    description:
      'Named production leads, coordinators, scouts, permits specialists, logistics managers, translators, and cultural liaisons supporting international film productions across Ethiopia.',
  },
}

const TEAM_MEMBERS = [
  {
    name: 'Meti Tadele',
    role: 'Founder, Lead Fixer & Production Lead',
    bio: [
      'Meti leads Sawla Films’ production support work in Ethiopia, bringing years of field experience, local travel knowledge, cultural understanding, and on-the-ground coordination into each project.',
      'His background in Ethiopian guiding, logistics, photography, and specialist travel gives him a rare understanding of what international crews need when working across complex locations. He understands both the creative pressure of production and the real conditions behind the image — roads, access, timing, people, permits, regional coordination, and the rhythm of filming in Ethiopia.',
      'For producers, Meti is often the first strategic point of contact: the person who studies the brief, identifies what needs to be verified, maps the local pathway, and builds the right field team around the project.',
    ],
    focus: ['Production feasibility', 'Fixer strategy', 'Field coordination', 'Local access', 'Cultural protocol', 'Producer communication', 'Daily problem-solving'],
    producerValue: 'Meti helps turn an international production brief into a realistic Ethiopia filming plan.',
  },
  {
    name: 'Ababe Gizachew',
    role: 'Production Coordinator',
    bio: [
      'Ababe supports the structure that keeps the shoot organised from planning to wrap.',
      'This role manages the practical rhythm around each filming day: schedules, call-time logic, hotel movements, transport timing, local crew updates, meal planning, daily notes, and communication between the international team and the Ethiopian field network.',
      'In Ethiopia, a schedule must be more than a list of times. It must account for traffic, road conditions, local appointments, daylight, religious schedules, regional movement, meals, fuel, and crew recovery.',
    ],
    focus: ['Scheduling', 'Call sheets', 'Daily logistics', 'Transport timing', 'Accommodation coordination', 'Meal planning', 'Crew communication'],
    producerValue: 'Ababe helps make the production schedule realistic, organised, and workable on the ground.',
  },
  {
    name: 'Chalachew Bantiwalu',
    role: 'Location Scout & Access Coordinator',
    bio: [
      'Chalachew helps productions find locations that are not only beautiful, but workable.',
      'Ethiopia offers extraordinary visual possibilities: volcanic deserts, historic churches, highland escarpments, coffee landscapes, markets, monasteries, Rift Valley lakes, city life, and remote cultural regions. But every location has a production reality behind it.',
      'This role evaluates access, roads, permissions, seasonality, light, sound, crowd behaviour, local contacts, cultural sensitivity, and timing. A strong location scout helps the director see the image — and helps the producer understand what it will take to film it.',
    ],
    focus: ['Location scouting', 'Access assessment', 'Visual references', 'Route planning', 'Local contact mapping', 'Seasonal conditions', 'Feasibility notes'],
    producerValue: 'Chalachew helps identify locations that match the creative brief while staying realistic for time, access, and crew movement.',
  },
  {
    name: 'Endegena Tsegaye',
    role: 'Permits, Access & Compliance Coordinator',
    bio: [
      'Endegena supports the planning process around filming permissions, access requirements, and production documentation.',
      'Professional filming in Ethiopia can involve several layers of permission depending on the project, location, equipment, subject matter, drone needs, and crew profile. This department helps producers understand what documents may be needed, what details should be prepared early, and where additional local coordination may be required.',
      'Sawla Films treats permits as part of production planning — not as a last-minute administrative task. The earlier the production shares its brief, locations, crew details, equipment list, drone needs, and filming intentions, the better the team can map the likely pathway.',
    ],
    focus: ['Filming permission pathways', 'Media accreditation support', 'Equipment documentation', 'Drone feasibility notes', 'Location-specific access planning', 'Requirement verification'],
    producerValue: 'Endegena helps producers prepare the right information early, reducing avoidable delays before arrival.',
  },
  {
    name: 'Tsega Desta',
    role: 'Field Logistics Manager',
    bio: [
      'Tsega coordinates the practical systems that keep crews moving safely and efficiently.',
      'Remote filming in Ethiopia depends on strong logistics: vehicles, drivers, routes, fuel, water, accommodation, camps, equipment movement, local payments, communication plans, and backup options.',
      'This role is especially important for productions working in the Danakil Depression, Omo Valley, Simien Mountains, Bale Mountains, Afar, remote highlands, desert routes, and multi-region filming plans. In remote production, logistics are not background support — they are the foundation of the shoot.',
    ],
    focus: ['4×4 vehicles', 'Drivers', 'Fuel planning', 'Remote routes', 'Field support', 'Equipment movement', 'Camp coordination', 'Contingency planning'],
    producerValue: 'Tsega helps protect the production from the practical risks that can slow or stop a field shoot.',
  },
  {
    name: 'Lemma Alemu',
    role: 'Translator & Local Crew Coordinator',
    bio: [
      'Lemma helps match each project with the right Ethiopian support team.',
      'Strong local crew makes international production smoother, faster, and more culturally aware. Depending on the project, Sawla Films can coordinate translators, drivers, assistants, scouts, regional fixers, runners, cultural liaisons, and technical support where available.',
      'For documentary and interview-based filming, this role is especially important. Translation is not only language — it is tone, timing, trust, context, and cultural understanding.',
    ],
    focus: ['Translators', 'Interpreters', 'Local crew', 'Assistants', 'Scouts', 'Drivers', 'Regional fixers', 'Interview support', 'Crew briefing'],
    producerValue: 'Lemma helps producers work with the right people in the right place, with the right cultural and linguistic support.',
  },
  {
    name: 'Mekuria Worku',
    role: 'Cultural Liaison & Community Access Coordinator',
    bio: [
      'Mekuria supports respectful access between productions and local communities.',
      'Many productions involve communities, elders, priests, artisans, farmers, market traders, pastoral groups, religious leaders, local officials, private families, or culturally sensitive spaces. These situations require patience, explanation, consent, and trust.',
      'The Cultural Liaison helps bridge the gap between production goals and local expectations. This role supports introductions, explains filming intentions, helps manage consent, and protects the relationship between the crew and the people being filmed. For Sawla Films, cultural access is not a transaction — it is a responsibility.',
    ],
    focus: ['Community introductions', 'Consent', 'Local protocol', 'Cultural sensitivity', 'Sensitive interviews', 'Religious protocol', 'Relationship protection'],
    producerValue: 'Mekuria helps productions approach people and places with respect, clarity, and cultural understanding.',
  },
]

const LANGUAGES = [
  { lang: 'Amharic', role: 'Official national language — urban, highland, and nationwide production use' },
  { lang: 'Tigrinya', role: 'Tigray region, northern Ethiopia, and diaspora community productions' },
  { lang: 'Oromo', role: 'Oromia region, Bale, Rift Valley, and western Ethiopia shoots' },
  { lang: 'Somali', role: 'Somali Regional State and eastern Ethiopia productions' },
  { lang: 'Afar', role: 'Afar region, Danakil Depression, and northeastern corridor filming' },
  { lang: 'Sidama', role: 'Sidama region and southern highlands productions' },
  { lang: 'English', role: 'International crew communication, production management, and client liaison' },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <JsonLd id="team-page-schema" data={teamPageSchema()} />

      {/* ── HERO ── */}
      <div className="bg-ink pt-[80px] pb-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.1em]">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li><Link href="/about" className="hover:text-white/60 transition-colors">About</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li className="text-white/50">Team</li>
            </ol>
          </nav>
          <div className="max-w-[700px]">
            <Eyebrow className="mb-4">The people behind the production</Eyebrow>
            <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(30px,4.2vw,50px)' }}>
              The Sawla Films team
            </h1>
            <p className="text-[14px] font-light text-white/55 leading-[1.8] mb-4">
              Sawla Films is built around a practical team structure: production leadership, permits, scouting, logistics, local crew, translation, cultural liaison, drivers, and field support. Each department works together to protect the production, respect the place, and keep the day moving.
            </p>
            <p className="text-[13px] font-light text-white/35 italic mb-7">
              Every person we work with is selected through direct field experience — not agency lists. We build the team around what the production needs, the region it covers, and the access it requires.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
                Request a Fixer / Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── NAMED TEAM MEMBERS ── */}
      <section className="bg-cream py-16">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-ink text-display-md mb-2 tracking-[-0.02em]">
            The people behind the production
          </h2>
          <p className="text-[14px] font-light text-steel leading-[1.75] mb-10 max-w-[580px]">
            Named team members across every department of production support in Ethiopia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={member.name} className={`border border-black/[0.07] rounded-[3px] p-6 ${i % 2 === 0 ? 'bg-warm' : 'bg-cream'}`}>
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-[3px] self-stretch min-h-[44px] bg-ember rounded-[1px] flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-[16px] font-medium text-ink leading-tight mb-1">{member.name}</h3>
                    <p className="text-[10px] font-medium text-ember tracking-[0.1em] uppercase">{member.role}</p>
                  </div>
                </div>
                <div className="space-y-2.5 mb-4">
                  {member.bio.map((para, j) => (
                    <p key={j} className="text-[13px] font-light text-steel leading-[1.75]">{para}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.focus.map((tag) => (
                    <span key={tag} className="text-[10px] font-light text-silver border border-black/[0.08] px-2.5 py-1 rounded-[2px] bg-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[12px] font-light text-steel/70 italic border-l-2 border-ember/30 pl-3 leading-[1.6]">
                  {member.producerValue}
                </p>
              </div>
            ))}
          </div>

          {/* ── FIELD SUPPORT CREW ── */}
          <div className="mt-5 border border-black/[0.07] rounded-[3px] p-6 bg-ink">
            <div className="flex items-start gap-3 mb-5">
              <span className="w-[3px] self-stretch min-h-[44px] bg-ember rounded-[1px] flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-[16px] font-medium text-white leading-tight mb-1">Expedition Drivers & Field Support Crew</h3>
                <p className="text-[10px] font-medium text-ember tracking-[0.1em] uppercase">Field & Remote Production</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <p className="text-[13px] font-light text-white/60 leading-[1.75]">Our drivers and field support crew are some of the most important people on any production.</p>
                <p className="text-[13px] font-light text-white/60 leading-[1.75]">In Ethiopia, a skilled driver is not simply someone behind the wheel. Drivers understand roads, timing, terrain, fuel stops, vehicle care, route changes, weather, safety, and the rhythm of moving a crew through complex environments. For remote productions, the driver becomes part of the safety system, logistics system, and schedule system.</p>
                <p className="text-[13px] font-light text-white/60 leading-[1.75]">Our field support crew assists with equipment movement, vehicle loading, camp support, crew comfort, and practical production needs during long field days.</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['4×4 driving', 'Crew transport', 'Equipment movement', 'Road awareness', 'Field support', 'Vehicle readiness', 'Loading assistance', 'Remote production support'].map((tag) => (
                    <span key={tag} className="text-[10px] font-light text-white/40 border border-white/[0.1] px-2.5 py-1 rounded-[2px] bg-white/[0.04]">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[12px] font-light text-white/50 italic border-l-2 border-ember/30 pl-3 leading-[1.6]">
                  Our drivers and field crew help move people, equipment, and production days safely across Ethiopia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LANGUAGES ── */}
      <section className="bg-ash py-14">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-white text-display-sm mb-8 tracking-[-0.015em]">
            Languages we cover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[820px]">
            {LANGUAGES.map((item) => (
              <div key={item.lang} className="flex gap-4 items-start bg-white/[0.04] border border-white/[0.07] rounded-[3px] px-5 py-4">
                <span className="font-serif text-[16px] font-light text-gold italic flex-shrink-0 pt-0.5">{item.lang}</span>
                <span className="text-[12px] font-light text-white/45 leading-[1.6]">{item.role}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[11px] font-light text-white/28 italic max-w-[560px]">
            Language coverage for specific regional languages or dialects depends on location and availability. Share your regions and language requirements and we will confirm what we can match.
          </p>
        </div>
      </section>

      {/* ── HOW WE SELECT ── */}
      <section className="bg-warm py-14">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[720px]">
            <h2 className="font-serif font-light text-ink text-display-sm mb-5 tracking-[-0.015em]">
              How we select the people we work with
            </h2>
            <div className="space-y-4 text-[14px] font-light text-steel leading-[1.8]">
              <p>We do not use generic agency lists. Our network is built from direct working relationships over multiple productions across Ethiopia.</p>
              <p>Every fixer, translator, cultural liaison, driver, and field team member we work with has been tested in real production conditions: under schedule pressure, in sensitive environments, during access complications, and on shoot days that required judgment rather than instructions.</p>
              <p>We match the specific team to the specific production: the region, the subject matter, the access sensitivity, the cultural context, the language requirements, and the production style. The right person for an Omo Valley community documentary is not necessarily the right person for an Addis Ababa commercial shoot or a Danakil expedition.</p>
              <p>Discretion, reliability, and calm judgment are not optional qualities. They are the reason certain people are on our list and others are not.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-ash py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[520px]">
            <h2 className="font-serif font-light text-white text-display-md italic leading-[1.2] mb-4">Match the right team to your production</h2>
            <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">
              Share your locations, dates, crew size, languages needed, subject matter, and type of support required. We will recommend the right people matched to your project and region.
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
