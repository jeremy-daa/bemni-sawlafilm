import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/shared/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Filming Permits in Ethiopia | Film Approvals & Compliance',
  description: 'Plan filming permits in Ethiopia with clear approval mapping, federal and regional coordination, heritage access, sensitive-location guidance, and practical timelines.',
  alternates: { canonical: '/filming-permits-ethiopia' },
}

export default function FilmingPermitsPage() {
  return (
    <ServicePageLayout
      slug="filming-permits-ethiopia"
      eyebrow="Film fixer services"
      h1="Filming Permits in Ethiopia"
      subhead="Approvals and compliance planned early, so your schedule stays realistic."
      heroBody={
        <>
          <p>Filming in Ethiopia can involve several layers of approval. Requirements may differ by subject matter, location type, region, city, heritage site, religious authority, protected area, community context, or drone use.</p>
          <p>Sawla Films supports international productions with permit mapping, documentation guidance, submission coordination, local follow-up, and on-ground preparation. We help you understand what is realistic before your crew, equipment, and schedule are committed.</p>
          <p>We do not promise shortcuts or guaranteed approvals. We provide clarity, preparation, compliance-focused coordination, and field judgment.</p>
        </>
      }
      trustLine="Permit planning for documentary, factual, commercial, branded, broadcast, NGO, and independent productions filming in Ethiopia, subject to current authority requirements and local conditions."
      primaryCta="Request Permit Support / Get a Quote"
      summaryItems={[
        'Permit mapping by region, location type, subject matter, production category, and planned equipment use.',
        'Documentation support, submission coordination, and local follow-up with relevant authorities and custodial contacts.',
        'Early risk flags for restricted areas, heritage sites, religious sites, protected landscapes, community filming, drone work, and sensitive topics.',
      ]}
      sections={[
        {
          heading: 'Why Filming Permits Matter in Ethiopia',
          content: (
            <>
              <p>Ethiopia offers extraordinary filming possibilities, from ancient religious sites and mountain landscapes to desert basins, remote communities, city life, and protected natural areas. But those possibilities often come with different approval pathways.</p>
              <p>A permit that works for one location may not be enough for another. A federal authorization may still need regional, local, custodial, park, religious, community, or security-related coordination depending on the route, subject matter, and filming activity.</p>
              <p>The safest production approach is to identify approval requirements early, align the paperwork with the real route, and avoid exposing the crew to preventable delays once filming begins.</p>
              <p>Good permit planning is not just paperwork. It is a way of protecting the story, the crew, the schedule, and the relationships that make filming possible on the ground.</p>
            </>
          ),
        },
        {
          heading: 'What Sawla Films Manages',
          content: (
            <ul className="space-y-2">
              {[
                'Federal filming permit support for documentaries, factual series, commercials, branded content, broadcast, NGO, and independent productions.',
                'Regional, city-level, and location-specific approval coordination where required.',
                'Access requests for restricted, border, protected, public-institution, or access-sensitive locations.',
                'Coordination for filming at religious, heritage, cultural, and historically important sites.',
                'Community consent and local protocol support through appropriate local leadership and liaison.',
                'Permit alignment with production logistics, customs, drone planning, crew movement, and schedule realities.',
                'On-ground follow-up where physical office visits, local communication, or in-person coordination are required.',
                'Practical advice on what may be easier, slower, more sensitive, or unrealistic within the available timeframe.',
              ].map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ),
        },
        {
          heading: 'Practical Timing Guidance',
          content: (
            <>
              <p>Permit timelines vary by authority, route, season, location sensitivity, and the completeness of documentation. Early planning is strongly recommended, especially for multi-region shoots, drones, protected areas, religious or heritage sites, and access-sensitive locations.</p>
              <p>For urgent shoots, Sawla Films can help assess what may be realistically possible, but final approvals remain subject to the relevant authorities and current conditions.</p>
              <div className="mt-4 bg-warm border-l-2 border-ember/40 pl-4 py-3 rounded-r-[3px]">
                <p className="text-[13px] italic text-steel">After reviewing the brief, Sawla Films will respond with likely permit pathways, missing information, risk flags, realistic timing, and recommended next steps before the schedule becomes expensive to change.</p>
              </div>
            </>
          ),
        },
      ]}
      whatWeNeed={[
        'Production brief, treatment, synopsis, or project outline.',
        'Proposed filming dates and flexibility window.',
        'Location list, route, region list, or destination ideas.',
        'Crew size and nationality mix where relevant.',
        'Equipment overview including camera, sound, lighting, grip, and vehicle footprint.',
        'Drone model, serial details, pilot information, and intended aerial use if applicable.',
        'Subject matter, interview themes, sensitive topics, or high-profile elements.',
        'Distribution type: broadcast, streaming, theatrical, NGO, commercial, or independent.',
        'Any existing contacts, contributor agreements, or prior approvals.',
      ]}
      related={[
        { label:'Drone Permits & Aerial Coordination', href:'/drone-permits-ethiopia' },
        { label:'Security & Access Coordination', href:'/filming-security-access-ethiopia' },
        { label:'Location Scouting & Recce', href:'/location-scouting-ethiopia' },
        { label:'Production Logistics', href:'/production-logistics-ethiopia' },
        { label:'On-Ground Fixing', href:'/on-ground-fixer-ethiopia' },
      ]}
      faqs={[
        { q:'How early should we apply for filming permits in Ethiopia?', a:'As early as possible once dates and locations are known. Early planning helps identify federal, regional, local, heritage, community, protected-area, or special-access requirements before the schedule becomes difficult to change.' },
        { q:'Does a federal filming permit cover everything?', a:'Not always. A federal permit may be an important starting point, but some locations may still require regional, local, custodial, religious, park, community, or security-related coordination.' },
        { q:'Can you support permissions for heritage and religious sites?', a:'Yes. Sawla Films can coordinate filming requests with custodial authorities and advise on protocol requirements, timing, respectful access, and any limitations that may affect the shoot.' },
        { q:'Do drone permits need a separate process?', a:'Usually, drone filming should be planned separately from general filming permits. Drone work may involve additional documentation, restriction checks, flight permissions, and operational planning.' },
        { q:'Can you help if we are still deciding locations?', a:'Yes. A permit feasibility review can be useful before locations are finalized. We can flag which options may be easier, slower, more sensitive, or dependent on additional coordination.' },
      ]}
      ctaHeading="Start with a permit feasibility check"
      ctaBody="Share your draft schedule, locations, subject matter, crew size, equipment overview, and drone intent. We will respond with practical next steps, likely approval considerations, risk flags, and a realistic planning path."
      ctaButtonLabel="Request Permit Support / Get a Quote"
    />
  )
}
