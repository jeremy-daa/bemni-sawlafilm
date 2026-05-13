import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/shared/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Drone Permits in Ethiopia | Aerial Approval & Planning',
  description: 'Plan drone filming in Ethiopia with permission support, restriction checks, import coordination, aerial logistics, and practical shoot-day planning.',
  alternates: { canonical: '/drone-permits-ethiopia' },
}

export default function DronePermitsPage() {
  return (
    <ServicePageLayout
      slug="drone-permits-ethiopia"
      h1="Drone Permits in Ethiopia"
      subhead="Aerial permission planning and practical shoot-day coordination for productions filming in Ethiopia."
      heroBody={
        <>
          <p>Drone filming can add a powerful visual layer to an Ethiopia production: volcanic landscapes, desert formations, mountain escarpments, ancient church settings, Rift Valley lakes, city movement, and remote field locations can all become more cinematic from the air.</p>
          <p>But drone work in Ethiopia should never be treated as a last-minute add-on. Aerial filming may require permissions beyond standard filming permits, and restrictions can vary by location, subject matter, airspace sensitivity, import status, security context, community setting, and current authority guidance.</p>
          <p>Sawla Films supports international productions with drone permit planning, documentation coordination, location restriction checks, import considerations, and on-ground aerial workflow support.</p>
          <p>We do not promise shortcuts or guaranteed approvals. We help you build a compliant, realistic, and production-friendly aerial plan.</p>
        </>
      }
      heroCautionTitle="Important producer note:"
      heroCaution="Drone approval is not automatic. General filming permission should not be assumed to cover aerial filming. Drone use must be reviewed as its own production workflow and connected to the wider permit, customs, security, and logistics plan."
      primaryCta="Request Drone Support / Get a Quote"
      summaryItems={[
        'Drone permission planning aligned with your filming route, subject matter, and schedule.',
        'Documentation support for drone model, serial numbers, pilot details, intended use, and import or clearance needs.',
        'Restriction checks for sensitive locations, controlled areas, heritage sites, national parks, and access-sensitive regions.',
        'Aerial operations coordination with production logistics, batteries, security, and shoot-day timing.',
        'Local pilot, spotter, or aerial support coordination where suitable, available, and appropriate.',
      ]}
      sections={[
        {
          heading: 'Why Drone Planning Matters in Ethiopia',
          content: (
            <>
              <p>A strong aerial shot can become one of the defining images of a film in Ethiopia. The country offers dramatic altitude changes, distinctive geology, historic architecture, religious landscapes, urban energy, and remote routes that benefit from carefully planned aerial coverage.</p>
              <p>The same qualities that make Ethiopia visually powerful can also make drone filming sensitive. Aerial work may be affected by government or security restrictions, customs questions, protected-area rules, airport and airspace considerations, local expectations, community concerns, weather, batteries, terrain, and last-minute access changes.</p>
              <p>Our approach is to treat drone filming as a separate production workflow. We identify the approval path early, align aerial goals with the wider filming permit plan, and help your team avoid the costly situation where the drone is physically present but cannot legally or practically fly.</p>
            </>
          ),
        },
        {
          heading: 'How We Work',
          content: (
            <div className="space-y-4">
              {[
                { step:'1. Confirm scope and feasibility', detail:'We review filming locations, dates, drone model, serial numbers, pilot information, intended aerial shots, and whether the drone will be imported or sourced locally.' },
                { step:'2. Map permissions and restrictions', detail:'We identify locations that may require separate approvals, aviation/security review, local access checks, custodial approval, protected-area permission, or community-level coordination.' },
                { step:'3. Prepare documentation', detail:'We help assemble practical information for review, including production brief, route, flight intent, drone specifications, serial numbers, operator details, and schedule logic.' },
                { step:'4. Connect drone work to the full production plan', detail:'Drone planning is aligned with permits, customs, route planning, security/access, batteries, transport, accommodation, and shoot-day timing.' },
                { step:'5. Support shoot-day readiness', detail:'When approvals and conditions allow, we help coordinate timing, access, local communication, spotter needs, battery management, and ground movement.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-ink">{item.step}: </span>
                    <span className="text-steel">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: 'Common Reasons Drone Work Gets Delayed or Grounded',
          content: (
            <ul className="space-y-2">
              {[
                'The drone is added after filming permits and access plans have already been prepared.',
                'Drone model, serial number, pilot details, insurance, or import documents are incomplete.',
                'The location is near an airport, sensitive installation, military or government site, border corridor, religious site, heritage area, protected landscape, or public gathering.',
                'The production assumes general filming permission automatically covers aerial filming.',
                'The schedule changes but the drone permission path is not updated.',
                'Batteries, internal transport, charging access, and field movement are not planned realistically.',
                'Local authorities, custodians, or community representatives are not briefed before shoot day.',
              ].map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ),
        },
      ]}
      whatWeNeed={[
        'Production title and short project brief.',
        'Filming dates and approximate shooting schedule.',
        'Location list, including GPS references if available.',
        'Drone model, manufacturer, weight/category if known, and serial number.',
        'Pilot/operator name, nationality, license or qualification details, and contact details.',
        'Drone insurance documents if available.',
        'Intended aerial shots or use case: establishing shots, landscape, tracking, vehicle movement, or event coverage.',
        'Whether the drone will arrive with crew, be shipped, or be sourced locally.',
        'Battery quantity, charging needs, and internal transport plan.',
        'Any sensitive subject matter, restricted-access locations, or security-sensitive context.',
      ]}
      related={[
        { label:'Filming Permits & Compliance', href:'/filming-permits-ethiopia' },
        { label:'Customs & Equipment Import', href:'/customs-clearance-film-equipment-ethiopia' },
        { label:'Security & Access Coordination', href:'/filming-security-access-ethiopia' },
        { label:'Production Logistics', href:'/production-logistics-ethiopia' },
        { label:'On-Ground Fixing', href:'/on-ground-fixer-ethiopia' },
      ]}
      faqs={[
        { q:'Do drone permits differ by region and location type?', a:'Yes. Drone feasibility and permission requirements can vary by location, subject matter, airspace sensitivity, access conditions, protected-area rules, local protocol, and current authority guidance. We review each planned location before advising what is realistic.' },
        { q:'Can drone approval be handled as part of the normal filming permit?', a:'Sometimes drone planning can be coordinated alongside the general filming permit process, but it should not be assumed that a standard filming permit automatically covers aerial work. Drone requirements often need separate documentation or review.' },
        { q:'How early should we start drone permit planning?', a:'As early as possible once your locations and dates are known. Drone work should be planned before crew travel, equipment import, and final scheduling are locked, especially for remote areas, protected landscapes, urban locations, or sensitive sites.' },
        { q:'Do you guarantee drone approval?', a:'No. Drone approval depends on the relevant authorities, location conditions, security considerations, documentation, and current guidance. Our role is to plan, coordinate, advise, and reduce avoidable risk.' },
        { q:'Can you coordinate local drone pilots or aerial teams?', a:'Yes, where suitable and available. We can help coordinate local pilots, spotters, or aerial support teams and align them with the wider production schedule.' },
      ]}
      ctaHeading="Plan drone filming before your schedule is locked"
      ctaBody="Share your locations, dates, drone model, serial numbers, pilot details, and intended aerial shots. We will review feasibility, flag likely restrictions, and advise next steps for permissions, import planning, and shoot-day coordination."
      ctaButtonLabel="Request Drone Support / Get a Quote"
    />
  )
}
