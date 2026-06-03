import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/shared/ServicePageLayout'

import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'

export const metadata: Metadata = {
  title: 'VIP & Celebrity Handling in Ethiopia | Discreet Production Support',
  description: 'Discreet movements, privacy-first logistics, controlled arrivals, and high-touch on-ground support for VIP talent and sensitive productions filming in Ethiopia.',
  alternates: { canonical: '/vip-celebrity-handling-ethiopia' },
  openGraph: {
    url: '/vip-celebrity-handling-ethiopia',
  }
}

export default function VIPPage() {
  const records = (galleryData.records as (FullMediaRecord & { flaggedForDeletion?: boolean })[])
    .filter(r => !r.flaggedForDeletion)
    .map(r => {
      const activeSlug = r.labelName || r.slug;
      return {
        ...r,
        assets: {
          full: `/${activeSlug}/${activeSlug}-full.webp`,
          medium: `/${activeSlug}/${activeSlug}-medium.webp`,
          thumb: `/${activeSlug}/${activeSlug}-thumb.avif`
        }
      };
    });
  const imageRecord = records.find(item => item.slug === 'whatsapp-image-2026-05-18-at-16-41-05-16' || item.labelName === 'whatsapp-image-2026-05-18-at-16-41-05-16') || records[0];

  return (
    <ServicePageLayout
      heroImageRecord={imageRecord}
      slug="vip-celebrity-handling-ethiopia"
      h1="VIP / Celebrity Handling in Ethiopia"
      subhead="Discreet movements, privacy-first logistics, controlled arrivals, and high-touch on-ground support for VIP talent and sensitive productions."
      primaryCta="Request a Fixer / Get a Quote"
      heroBody={
        <>
          <p>VIP-led productions need more than transport and accommodation. They need controlled timing, careful communication, privacy awareness, and a team that understands how small details can become production risks.</p>
          <p>Sawla Films supports VIP talent, public figures, executives, high-profile guests, and sensitive productions filming in Ethiopia. We coordinate movements, arrivals, accommodation flows, location access, local communication, and shoot-day handling with a low-profile, security-aware approach.</p>
          <p>We do not promise invisibility or guaranteed isolation. We reduce exposure through planning, timing, discretion, controlled information flow, and respectful local coordination.</p>
        
          
        </>
      }
      trustLine="Handled quietly, planned tightly, executed calmly. Built for producers who cannot afford noise, delays, or unnecessary attention."
      summaryItems={[
        'Privacy-first movement planning for VIP talent and sensitive productions.',
        'Discreet airport, hotel, location, and set-arrival coordination where permitted and practical.',
        'Controlled communication flow between production, talent teams, drivers, fixers, hotels, and local partners.',
        'Security-aware planning and compliant security coordination where a formal security layer is required.',
        'Low-profile shoot-day fixing that reduces avoidable attention and protects timing.',
      ]}
      sections={[
        {
          heading: 'What This Service Is For',
          content: (
            <>
              <p>This service is designed for productions that involve:</p>
              <ul className="mt-3 space-y-2">
                {[
                  'Public figures, celebrities, presenters, executives, or high-profile guests.',
                  'Reality, documentary, entertainment, branded, or commercial shoots where privacy matters.',
                  'Sensitive storylines, confidential schedules, or embargoed filming locations.',
                  'Talent teams that require controlled arrivals, discreet movements, and clear communication.',
                  'Tight filming windows where delays can create significant cost or reputational pressure.',
                  'Locations where curiosity, public attention, protocol, or access control must be managed carefully.',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          ),
        },
        {
          heading: 'What We Handle',
          content: (
            <div className="space-y-6">
              {[
                {
                  title: '1. Discreet Arrivals and Movements',
                  items: [
                    'Airport meet-and-assist workflows where permitted by airport and authority rules.',
                    'Low-profile ground movements, practical route planning, and realistic travel buffers.',
                    'Staggered call times and controlled arrivals to reduce unnecessary visibility.',
                    'Backup vehicle planning, clean handoff points, and driver briefing for sensitive movements.',
                    'Communication flow between production, talent team, local operations, and movement leads.',
                  ],
                },
                {
                  title: '2. Privacy-First Accommodation Coordination',
                  items: [
                    'Hotel selection guidance based on privacy, access, arrival flow, and production practicality.',
                    'Quiet check-in coordination, guest-flow planning, and careful movement timing.',
                    'Controlled lobby exposure, meeting points, and hotel-team coordination on a need-to-know basis.',
                    'Accommodation planning that balances privacy, comfort, route logic, and schedule reality.',
                  ],
                },
                {
                  title: '3. Location Arrivals and Set Privacy',
                  items: [
                    'Discreet location access planning and soft perimeter awareness.',
                    'Crowd-avoidance logic and arrival timing coordination.',
                    'Local stakeholder handling to reduce curiosity and disruption.',
                    'Set etiquette briefing for crew, drivers, translators, assistants, and local partners.',
                    'Controlled access flow for talent, producer, and essential crew movements.',
                  ],
                },
                {
                  title: '4. Confidential Scheduling and Communication',
                  items: [
                    'Need-to-know scheduling and limited disclosure workflows.',
                    'Controlled information flow between internal and external production contacts.',
                    'Secure briefing for drivers, fixers, hotel contacts, and local liaisons.',
                    'Embargoed location and schedule management where required.',
                  ],
                },
              ].map((section) => (
                <div key={section.title}>
                  <h3 className="text-[13px] font-medium text-ink mb-2.5">{section.title}</h3>
                  <ul className="space-y-1.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-ember/60 flex-shrink-0 mt-1.5" aria-hidden="true" />
                        <span className="text-[13px] font-light text-steel">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: 'What We Do Not Promise',
          content: (
            <>
              <p className="mb-3">These are honest operational boundaries, not disclaimers.</p>
              <ul className="space-y-2">
                {[
                  'We do not guarantee total privacy or zero public attention in all settings.',
                  'We do not guarantee crowd control, airport authority cooperation, or hotel policy outcomes.',
                  'We do not replace licensed security personnel, legal advisors, or formal close-protection providers.',
                  'We do not encourage talent movement that conflicts with current security guidance or local authority conditions.',
                  'We do not guarantee unrestricted access to any location, venue, or institution.',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          ),
        },
      ]}
      whatWeNeed={[
        'Production brief and project type.',
        'Talent or VIP names and roles, or a description of the sensitivity level if names are confidential at this stage.',
        'Filming dates, arrival/departure dates, and internal schedule.',
        'Locations and route including any publicly sensitive or restricted areas.',
        'Crew size and structure including talent team, publicists, security, and personal assistants.',
        'Accommodation preferences, privacy expectations, and budget level.',
        'Whether formal licensed security is required or already arranged.',
        'Any embargoed filming information, confidential shoot elements, or NDA requirements.',
        'Communication preferences: need-to-know, full disclosure, or mixed protocol.',
      ]}
      related={[
        { label: 'On-Ground Fixing', href: '/on-ground-fixer-ethiopia' },
        { label: 'Security & Access Coordination', href: '/filming-security-access-ethiopia' },
        { label: 'Production Logistics', href: '/production-logistics-ethiopia' },
        { label: 'Local Crew, Translators & Cultural Liaison', href: '/local-crew-translators-ethiopia' },
        { label: 'Filming Permits & Compliance', href: '/filming-permits-ethiopia' },
      ]}
      faqs={[
        { q: 'How discreet can you keep a high-profile production?', a: 'We coordinate timing, movement, communication, and local briefings to reduce unnecessary attention. The level of discretion achievable depends on the location type, the number of crew, the nature of the filming, and current local conditions. We advise honestly on what is realistic.' },
        { q: 'Do you provide close protection or licensed security?', a: 'We can coordinate connection to appropriate licensed local security providers when a project requires formal close protection. We do not ourselves provide licensed close-protection services.' },
        { q: 'Can you handle confidential schedules and embargoed locations?', a: 'Yes. We work within need-to-know information protocols and can manage restricted schedules, embargoed location details, and confidential production elements through controlled communication flows.' },
        { q: 'Have you worked on celebrity or high-profile productions before?', a: 'Yes. Our team has supported high-profile productions, including talent-led formats, celebrity documentaries, and premium branded content, in Ethiopia. References can be shared privately where appropriate and where confidentiality allows.' },
      ]}
      ctaHeading="Plan your high-profile production in Ethiopia"
      ctaBody="Share your project type, talent requirements, dates, locations, and sensitivity level. We will respond with a discreet, practical plan covering movements, accommodation, access, and shoot-day coordination."
      ctaButtonLabel="Request a Fixer / Get a Quote"
    />
  )
}
