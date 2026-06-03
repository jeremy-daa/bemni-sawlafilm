import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Team | Ethiopia Film Fixer | Sawla Films',
  description:
    'Meet the Sawla Films Ethiopia film fixer team: production coordinators, field fixers, regional translators, cultural liaisons, expedition specialists, and logistics coordinators.',
  alternates: { canonical: '/team' },
  openGraph: {
    url: '/team',
  }
}

const TEAM_AREAS = [
  {
    title: 'Production coordination',
    desc: 'Former broadcast production coordinators and field operations specialists who understand international broadcaster standards, call sheet discipline, and multi-region schedule management. The team that builds the plan and holds it together when conditions change.',
    skills: ['Multi-region scheduling', 'Permit pathway management', 'Budget and logistics alignment', 'Client communication', 'Risk flagging'],
  },
  {
    title: 'Field fixers and on-ground coordinators',
    desc: 'Experienced fixers who have worked across Ethiopia\'s varied filming environments — from Addis Ababa city shoots to Danakil expedition conditions, Omo Valley community filming, Lalibela heritage access, and Simien mountain locations. Selected for judgment, reliability, and calm under pressure.',
    skills: ['Shoot-day coordination', 'Local liaison and access', 'Call sheet management', 'Field problem solving', 'Crew communication'],
  },
  {
    title: 'Regional translators and interpreters',
    desc: 'Translators and interpreters drawn from across Ethiopia\'s regions, covering Amharic, Tigrinya, Oromo, Somali, Afar, Sidama, and English. Many have extensive experience on international film and documentary productions and understand filming environments, contributor sensitivity, and production expectations.',
    skills: ['Amharic', 'Tigrinya', 'Oromo', 'Somali', 'Afar', 'Sidama', 'English'],
  },
  {
    title: 'Cultural liaisons',
    desc: 'Local team members who bring cultural intelligence, community protocol awareness, and context knowledge that goes beyond language. Particularly important for Omo Valley community work, heritage site filming, religious location access, and any shooting environment where how you approach matters as much as what you are asking.',
    skills: ['Community engagement', 'Protocol guidance', 'Contributor care', 'Cultural reading', 'Ceremony access'],
  },
  {
    title: 'Expedition and logistics specialists',
    desc: 'Through Sawla Tours, our expedition team provides field vehicles, experienced expedition drivers, remote accommodation coordination, fuel logistics, mobile camp support, and practical field coordination for remote shoots across Danakil, Omo, Simien, Gambela, and other challenging territories.',
    skills: ['4x4 expedition vehicles', 'Remote routing', 'Fuel and supply logistics', 'Camp coordination', 'Field communication'],
  },
  {
    title: 'Security and access coordinators',
    desc: 'Team members who specialise in access-sensitive environment planning, route awareness, local authority liaison, movement coordination, and practical risk reduction for complex shoots, access-restricted regions, and high-visibility productions.',
    skills: ['Access planning', 'Local authority liaison', 'Movement coordination', 'Risk awareness', 'Sensitive region planning'],
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow className="mb-4">The people behind the production</Eyebrow>
              <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(30px,4.2vw,50px)' }}>
                Our team across Ethiopia
              </h1>
              <p className="text-[14px] font-light text-white/55 leading-[1.8] mb-4">
                Sawla Films draws on a network of production coordinators, field fixers, regional translators, cultural liaisons, logistics specialists, and expedition support built through more than a decade of operating in Ethiopia.
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
            <div className="flex items-center justify-center lg:justify-end">
              <Image
                src="/brand/sawla-films-logo.jpg"
                alt="Sawla Films Ethiopia film fixer"
                width={220}
                height={198}
                className="rounded-[6px] opacity-85"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── TEAM AREAS ── */}
      <section className="bg-cream py-16">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-ink text-display-md mb-10 tracking-[-0.02em]">
            Team specialisms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TEAM_AREAS.map((area, i) => (
              <div key={area.title} className={`border border-black/[0.07] rounded-[3px] p-6 ${i % 2 === 0 ? 'bg-warm' : 'bg-cream'}`}>
                <h3 className="flex items-center gap-2.5 text-[14px] font-medium text-ink mb-3">
                  <span className="w-[3px] h-4 bg-ember rounded-[1px] flex-shrink-0" aria-hidden="true" />
                  {area.title}
                </h3>
                <p className="text-[13px] font-light text-steel leading-[1.75] mb-4">{area.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {area.skills.map((skill) => (
                    <span key={skill} className="text-[10px] font-light text-silver border border-black/[0.08] px-2.5 py-1 rounded-[2px] bg-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
