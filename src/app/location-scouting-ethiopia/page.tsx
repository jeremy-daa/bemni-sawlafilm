import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/shared/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Location Scouting in Ethiopia | Feasibility-First Recce Support',
  description: 'Feasibility-first location scouting and recce for international productions filming in Ethiopia. Access checks, permission mapping, recce packs, and producer-ready recommendations.',
  alternates: { canonical: '/location-scouting-ethiopia' },
}

export default function LocationScoutingPage() {
  return (
    <ServicePageLayout
      slug="location-scouting-ethiopia"
      h1="Location Scouting in Ethiopia"
      subhead="Feasibility-first recce support for locations that look right and work operationally."
      primaryCta="Start Location Scouting"
      heroBody={
        <>
          <p>Ethiopia offers extraordinary filming environments: ancient cities, highland plateaus, desert basins, Rift Valley landscapes, remote communities, sacred sites, modern streets, and expedition routes that feel almost impossible to stage. But a strong visual location is not automatically a viable filming location.</p>
          <p>Access, timing, cultural protocol, security conditions, weather, altitude, authority requirements, privacy concerns, and production movement all affect whether a location can support the shoot.</p>
          <p>Sawla Films provides location scouting and recce support in Ethiopia with feasibility at the centre. We help producers, directors, agencies, and documentary teams identify strong visual options, understand what is realistic, and move toward locations that can be permitted, reached, respected, and filmed with confidence.</p>
        </>
      }
      trustLine="Scouting should protect the story, the schedule, and the relationship with the place being filmed."
      summaryItems={[
        'Feasibility-led scouting for documentary, factual, commercial, NGO, branded, and independent productions.',
        'Access, timing, cultural protocol, seasonality, local expectations, and permission logic checked before crews commit.',
        'Recce outputs designed for real production decisions: notes, references, risk flags, recommendations, and next steps.',
      ]}
      sections={[
        {
          heading: 'Why Location Scouting in Ethiopia Needs Local Feasibility',
          content: (
            <>
              <p>Some Ethiopian locations are visually unforgettable but operationally fragile. A place may look ideal on a mood board and still fail because the route is too long, the filming window is too short, access needs additional approvals, community protocol requires time, or the location becomes difficult during rain, ceremonies, market days, religious observances, or local events.</p>
              <p>Our scouting work is designed to answer the practical questions behind the creative brief: Can the crew reach the location safely and respectfully? Can equipment move there? Are permits or custodial approvals required? Is the timing realistic? Will the location work for sound, light, privacy, contributor comfort, and crew movement?</p>
              <p>This is why we scout for both image and execution. The goal is not only to find beautiful locations. The goal is to identify locations that can support the story, schedule, crew, and relationship with the people and places being filmed.</p>
            </>
          ),
        },
        {
          heading: 'What We Scout and Validate',
          content: (
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-ember/20">
                    <th className="text-left py-2 pr-6 font-medium text-ink">Location Type</th>
                    <th className="text-left py-2 font-medium text-ink">What We Validate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.06]">
                  {[
                    ['Natural landscapes', 'Deserts, highlands, escarpments, lakes, forests, lava fields, salt flats, mountain routes, and seasonal terrain.'],
                    ['Cultural and community settings', 'Markets, villages, ceremonies, pastoral landscapes, crafts, daily-life environments, and contributor-led settings.'],
                    ['Historic and sacred sites', 'Churches, monasteries, mosques, heritage locations, old towns, cultural institutions, and custodial sites.'],
                    ['Urban and contemporary settings', 'Addis Ababa neighbourhoods, streets, offices, hotels, studios, transport hubs, and modern city spaces.'],
                    ['Remote expedition locations', 'Afar, Omo, Bale, Simien, Tigray, Rift Valley, and other regions where movement and access require careful planning.'],
                    ['Interview and contributor spaces', 'Controlled, respectful, quiet, private, and visually suitable locations for sensitive or story-led filming.'],
                  ].map(([type, what]) => (
                    <tr key={type}>
                      <td className="py-2.5 pr-6 font-light text-steel align-top">{type}</td>
                      <td className="py-2.5 font-light text-steel align-top">{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: 'Typical Recce Outputs',
          content: (
            <ul className="space-y-2">
              {[
                'Location shortlist matched to the creative brief, story needs, and filming format.',
                'Feasibility notes covering access, timing, permissions, movement, sound, privacy, and operational constraints.',
                'GPS references, route notes, travel-time estimates, and approach information where applicable.',
                'Still references, short phone clips, scouting photos, or visual notes when appropriate and permitted.',
                'Authority, community, or custodial-contact notes where access depends on local protocol.',
                'Seasonality and light notes, including weather, altitude, and road-condition considerations where relevant.',
                'Recommended next steps for permits, logistics, security/access coordination, local crew, drone planning, or on-ground fixing.',
              ].map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-mid flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ),
        },
        {
          heading: 'When to Start Location Scouting',
          content: (
            <>
              <p>Start scouting as soon as your story direction, preferred regions, or filming dates are known. Early scouting is especially important if your project involves remote regions, drone filming, heritage sites, religious locations, sensitive communities, high-profile talent, restricted access, or a tight schedule.</p>
              <p>If you are still deciding whether Ethiopia can support your story, we can begin with a quick feasibility review before you commit to a full recce or production build.</p>
            </>
          ),
        },
      ]}
      whatWeNeed={[
        'Project type and short production brief.',
        'Creative references, mood boards, sample frames, or comparable scenes.',
        'Preferred location types, regions, or visual worlds.',
        'Filming dates and flexibility window.',
        'Crew size, roles, and equipment footprint.',
        'Drone filming plans, if any.',
        'Interview, contributor, or controlled-space needs.',
        'Sensitive subject matter, privacy expectations, high-profile talent, or restricted-access concerns.',
        'Delivery requirement: quick feasibility call, remote scouting, photo references, full recce pack, or physical recce.',
      ]}
      related={[
        { label: 'Filming Permits & Compliance', href: '/filming-permits-ethiopia' },
        { label: 'Production Logistics', href: '/production-logistics-ethiopia' },
        { label: 'Security & Access Coordination', href: '/filming-security-access-ethiopia' },
        { label: 'On-Ground Fixing', href: '/on-ground-fixer-ethiopia' },
        { label: 'Drone Permits & Aerial Coordination', href: '/drone-permits-ethiopia' },
      ]}
      faqs={[
        { q: 'Can you scout locations before we have confirmed dates?', a: 'Yes. A feasibility review can be done before dates are fixed, especially if you are still deciding whether Ethiopia can deliver the story you need. Early scouting helps you choose locations that are realistic, not just visually strong.' },
        { q: 'Do you do physical recce visits or only desk research?', a: 'Both, depending on the brief and budget. Remote scouting, reference gathering, and phone verification can be done quickly. Physical recce visits are recommended for complex routes, sensitive locations, remote regions, or productions with tight schedules.' },
        { q: 'Can you scout for drone filming locations?', a: 'Yes. Aerial scouting is part of our recce work when drone filming is planned. We check access, airspace, restriction status, and operational feasibility at the same time as ground-level scouting.' },
        { q: 'What if a location turns out to be too difficult?', a: 'We flag that early, before the production is committed. Part of our value is giving producers honest assessments of what is achievable rather than presenting only what they want to hear.' },
      ]}
      ctaHeading="Find locations that can be filmed, not just imagined"
      ctaBody="Share your creative brief, preferred regions, story direction, and timeline. We will respond with a feasibility assessment and recommended next steps for recce, permits, access, and production planning."
      ctaButtonLabel="Start Location Scouting"
    />
  )
}
