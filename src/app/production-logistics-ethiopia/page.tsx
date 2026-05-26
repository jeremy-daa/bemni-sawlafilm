import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/shared/ServicePageLayout'

import { PremiumImage } from '@/components/ui/PremiumImage'
import metadataJson from '@/data/metadata.json'
import { FullMediaRecord } from '@/types/gallery'

export const metadata: Metadata = {
  title: 'Production Logistics in Ethiopia | Field-Tested Movement Planning',
  description: 'Field-tested movement planning for distance, terrain, timing, and changing conditions. 4x4 transport, routing, accommodation, and on-ground coordination across Ethiopia.',
  alternates: { canonical: '/production-logistics-ethiopia' },
}

export default function ProductionLogisticsPage() {
  const records = (metadataJson as { records: FullMediaRecord[] }).records;
  const imageRecord = records.find(item => item.slug === 'camp');

  return (
    <ServicePageLayout
      heroImageRecord={imageRecord}
      slug="production-logistics-ethiopia"
      h1="Production Logistics in Ethiopia"
      subhead="Field-tested movement planning for distance, terrain, timing, and changing conditions."
      heroBody={
        <>
          <p>Filming in Ethiopia can involve long regional drives, mountain roads, desert corridors, high-altitude locations, internal flights, tight call times, and remote accommodation realities. A strong production plan must work beyond the spreadsheet. It has to hold when weather, access, ceremonies, road conditions, or local timing changes the day.</p>
          <p>Sawla Films provides production logistics in Ethiopia for international crews that need practical movement planning, reliable field coordination, and calm operational judgment. We align transport, accommodation, routing, airport handling, remote field support, and daily coordination so your shoot remains functional when conditions shift.</p>
          <p>We do not treat logistics as simple bookings. We treat logistics as the structure that protects your filming time, crew energy, equipment movement, and field decision-making.</p>
          
          
        </>
      }
      trustLine="4x4 transport, routing, accommodation, airport handling, field coordination, and contingency planning for productions filming across Ethiopia."
      primaryCta="Plan Your Production / Request a Quote"
      summaryItems={[
        '4x4 vehicles, experienced drivers, production transport, and regional movement planning.',
        'Route design, timing buffers, fuel logic, and contingency planning for remote or multi-region shoots.',
        'Accommodation, airport handling, daily coordination, and field support aligned with the call sheet.',
        'Integrated planning with permits, customs, scouting, security/access, and on-ground fixing.',
      ]}
      sections={[
        {
          heading: 'Why Production Logistics Matter in Ethiopia',
          content: (
            <>
              <p>Ethiopia is visually rich but operationally varied. A production day can move between city traffic, highland roads, national parks, religious sites, market towns, remote villages, desert terrain, or mountain trails. The distance shown on a map is not always the real production distance.</p>
              <p>Elevation, road surface, weather, fuel access, permissions, community timing, daylight, and local guidance all shape what is possible. A route that looks simple during planning can become expensive if it ignores how Ethiopia actually moves on the ground.</p>
              <p>This is why logistics should not be treated as a late-stage booking task. It should be part of the creative and permit planning from the beginning. When movement, access, accommodation, equipment flow, crew rhythm, and local protocol are aligned early, the production has more room to film and less time lost to avoidable disruption.</p>
            </>
          ),
        },
        {
          heading: 'What We Coordinate',
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { title: 'Transport & Drivers', body: '4x4 vehicles, experienced drivers, airport transfers, convoy logic, luggage and equipment movement, and daily transport coordination.' },
                { title: 'Routing & Timing', body: 'Route planning by road reality, distance, daylight, fuel access, elevation, permissions, local timing, and field conditions.' },
                { title: 'Accommodation', body: 'Hotels, lodges, camps, and remote overnight planning based on crew needs, location sequence, safety, and availability.' },
                { title: 'Remote Field Support', body: 'Fuel, water, meals, charging, local teams, communications, field cash coordination, and contingency planning where required.' },
                { title: 'Airport & Internal Movement', body: 'Meet-and-assist, domestic movement support, arrival/departure planning, luggage flow, and coordination with production transport.' },
                { title: 'Sawla Tours Integration', body: 'Where useful, coordinated travel, accommodation, expedition logistics, guides, and field movement through Sawla Tours as the sister travel operation.' },
              ].map((item) => (
                <div key={item.title} className="bg-warm border border-black/[0.07] rounded-[3px] p-4">
                  <p className="text-[12px] font-medium text-ink mb-1.5">{item.title}</p>
                  <p className="text-[12px] font-light text-steel leading-[1.6]">{item.body}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: 'Field Realities We Plan For',
          content: (
            <ul className="space-y-2">
              {[
                'Road conditions can change by season, region, and recent weather.',
                'Remote movement may require more time than map distance suggests.',
                'Ceremonies, markets, religious events, and community timing can affect access and filming rhythm.',
                'High-altitude areas and desert regions require different pacing, vehicle planning, and crew care.',
                'Accommodation standards vary outside major cities and must be matched honestly to production expectations.',
                'Fuel, food, water, charging, and communications need advance planning in remote corridors.',
                'Security and access-sensitive regions require current-condition checks and local authority guidance.',
                'Domestic flights, vehicle movements, luggage flow, and equipment transfers should be planned together, not separately.',
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
        'Draft shoot dates and preferred filming regions.',
        'Crew size, roles, nationality mix where relevant, and any talent or VIP requirements.',
        'Location list, creative references, or route ideas.',
        'Equipment footprint, luggage volume, freight, customs, or battery-related requirements.',
        'Accommodation expectations, rooming needs, budget level, and comfort priorities.',
        'International arrival/departure details and domestic flight plans if already known.',
        'Drone use, night filming, remote camping, special vehicle needs, or unusual movement requirements.',
        'Locations that may require sensitive access, community coordination, permits, escorts, or extra security planning.',
        'First filming date and any non-negotiable call times or delivery milestones.',
      ]}
      related={[
        { label: 'Filming Permits & Compliance', href: '/filming-permits-ethiopia' },
        { label: 'Customs & Equipment Import', href: '/customs-clearance-film-equipment-ethiopia' },
        { label: 'Location Scouting & Recce', href: '/location-scouting-ethiopia' },
        { label: 'Security & Access Coordination', href: '/filming-security-access-ethiopia' },
        { label: 'On-Ground Fixing', href: '/on-ground-fixer-ethiopia' },
      ]}
      faqs={[
        { q: 'Can you handle both city filming and remote expedition logistics?', a: 'Yes. Sawla Films coordinates both urban production logistics in Addis Ababa and remote expedition movement in Afar, Omo, Tigray, Bale, Simien, and other regions. The approach is adapted to the terrain, road conditions, and crew requirements for each part of the route.' },
        { q: 'Do you provide your own vehicles and drivers?', a: 'We coordinate appropriate vehicles and experienced local drivers matched to the terrain and production needs. The vehicle type — standard 4x4, expedition-spec, or larger support vehicles — depends on the route, equipment load, and crew size.' },
        { q: 'Can you connect logistics with filming permits and customs?', a: 'Yes. Logistics planning is most effective when aligned early with permits, customs clearance, drone approvals, and security/access considerations. We coordinate these as one production plan rather than separate streams.' },
        { q: 'How should we plan accommodation for remote shoots?', a: 'Accommodation options vary significantly by region and should be planned against honest expectations. Addis Ababa, main cities, and major destinations have good international-standard hotels. Remote regions may have lodges, guesthouses, or field camping. We advise on realistic options per route.' },
      ]}
      ctaHeading="Plan your Ethiopia production logistics"
      ctaBody="Send your shoot dates, regions, crew size, equipment footprint, and accommodation expectations. We will respond with a practical movement plan, route considerations, and logistics recommendations for your specific production."
      ctaButtonLabel="Plan Your Production / Request a Quote"
    />
  )
}
