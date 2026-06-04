import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'

const FEATURED_MEMBERS = [
  {
    name: 'Meti Tadele',
    role: 'Founder & Lead Fixer',
    value: 'Turns an international brief into a realistic Ethiopia filming plan.',
  },
  {
    name: 'Ababe Gizachew',
    role: 'Production Coordinator',
    value: 'Keeps schedules realistic and workable on the ground.',
  },
  {
    name: 'Chalachew Bantiwalu',
    role: 'Location Scout',
    value: 'Finds locations that are beautiful and actually filmable.',
  },
  {
    name: 'Endegena Tsegaye',
    role: 'Permits & Compliance',
    value: 'Prepares the right documentation early to avoid delays.',
  },
  {
    name: 'Tsega Desta',
    role: 'Field Logistics Manager',
    value: 'Protects the production from practical field risks.',
  },
  {
    name: 'Lemma Alemu',
    role: 'Translator & Local Crew',
    value: 'Matches the right people to the right region and role.',
  },
  {
    name: 'Mekuria Worku',
    role: 'Cultural Liaison',
    value: 'Ensures respectful access to communities and sensitive places.',
  },
]

export function TeamSection() {
  return (
    <section className="bg-ash py-[clamp(56px,8vw,100px)]" aria-labelledby="team-section-title">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            eyebrow="The people behind the production"
            title="A named team at every level"
            subtitle="Production lead, coordinator, permits, scouting, logistics, translation, and cultural liaison — each covered by a named person with field experience."
            light
            className="mb-0"
            id="team-section-title"
          />
          <Link
            href="/team"
            className="flex-shrink-0 text-[11px] font-medium text-ember tracking-[0.08em] uppercase hover:text-ember-glow transition-colors whitespace-nowrap"
          >
            Meet the full team →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {FEATURED_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="bg-white/[0.04] border border-white/[0.08] rounded-[3px] px-5 py-4 hover:bg-white/[0.07] transition-colors"
            >
              <p className="text-[14px] font-medium text-white mb-0.5">{member.name}</p>
              <p className="text-[10px] font-medium text-ember tracking-[0.08em] uppercase mb-3">{member.role}</p>
              <p className="text-[12px] font-light text-white/45 leading-[1.6] italic">{member.value}</p>
            </div>
          ))}
          {/* Drivers group card */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-[3px] px-5 py-4 hover:bg-white/[0.07] transition-colors">
            <p className="text-[14px] font-medium text-white mb-0.5">Expedition Drivers</p>
            <p className="text-[10px] font-medium text-ember tracking-[0.08em] uppercase mb-3">Field & Remote Support</p>
            <p className="text-[12px] font-light text-white/45 leading-[1.6] italic">Move people and equipment safely across Ethiopia&apos;s terrain.</p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px"
          >
            Meet the full team
          </Link>
          <Link
            href="/request-a-quote"
            className="text-[11px] font-light text-white/45 hover:text-white transition-colors tracking-[0.03em]"
          >
            Request a fixer →
          </Link>
        </div>

      </div>
    </section>
  )
}
