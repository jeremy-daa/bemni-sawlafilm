import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/shared/ServicePageLayout'

import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'

export const metadata: Metadata = {
  title: 'Filming Security and Access Coordination in Ethiopia | Sawla Films',
  description: 'Practical planning for sensitive locations, controlled access, public-facing shoots, and changing field conditions. Movement coordination and local liaison for productions filming in Ethiopia.',
  alternates: { canonical: '/filming-security-access-ethiopia' },
}

export default function SecurityAccessPage() {
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
  const imageRecord = records.find(item => item.slug === 'whatsapp-image-2026-05-18-at-16-40-59-6' || item.labelName === 'whatsapp-image-2026-05-18-at-16-40-59-6') || records[0];

  return (
    <ServicePageLayout
      heroImageRecord={imageRecord}
      slug="filming-security-access-ethiopia"
      h1="Filming Security and Access Coordination in Ethiopia"
      subhead="Practical planning for sensitive locations, controlled access, public-facing shoots, and changing field conditions."
      primaryCta="Plan Secure Access / Get a Quote"
      heroBody={
        <>
          <p>Some filming locations in Ethiopia require more than a permit and a vehicle. Border corridors, remote regions, protected areas, religious or heritage sites, public spaces, sensitive subjects, and high-visibility productions can all require careful access planning and realistic movement coordination.</p>
          <p>Sawla Films helps international productions plan clearer, safer, and more practical field movement in Ethiopia. We review access constraints, align route logic with permits and local protocol, coordinate with relevant field contacts where appropriate, and support on-ground communication so crews are not forced to solve complex access issues under pressure.</p>
          <p>We do not promise unlimited access or risk-free movement. We provide preparation, local judgment, clear communication, and practical coordination based on current permissions, field conditions, and local authority guidance.</p>
        
          
        </>
      }
      heroCautionTitle="Access and safety are never automatic."
      heroCaution="This service supports planning, coordination, liaison, movement logic, and practical risk reduction. It does not replace formal security consultants, legal advisors, insurance requirements, government authorities, or licensed protection providers."
      summaryItems={[
        'Access planning for complex, restricted, public-facing, or protocol-sensitive filming environments.',
        'Movement logic planned around permissions, road conditions, visibility, field realities, and local guidance.',
        'Local liaison with community representatives, custodians, local contacts, authorities, or access points where appropriate.',
        'Connection to appropriate or licensed local providers when dedicated security support is required by the project.',
      ]}
      sections={[
        {
          heading: 'When This Service Matters',
          content: (
            <ul className="space-y-2">
              {[
                'Filming in remote regions, border corridors, protected landscapes, or areas with changing access conditions.',
                'Public-facing shoots where crowds, traffic, attention, or local movement may affect filming.',
                'Religious, heritage, protected, or community locations with protocol requirements.',
                'Documentary or factual subjects involving sensitive themes, contributors, institutions, or locations.',
                'High-profile, VIP, celebrity, broadcaster, or streaming productions requiring discretion and controlled movement.',
                'Multi-region schedules where one access delay can affect flights, accommodation, call sheets, and contributor availability.',
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
          heading: 'What We Coordinate',
          content: (
            <ul className="space-y-2">
              {[
                'Access planning for complex locations and sensitive filming environments.',
                'Route and movement planning with safety, timing, permissions, road realities, and crew visibility in mind.',
                'Local liaison with community representatives, site custodians, local contacts, authorities, or access points where appropriate.',
                'Coordination with appropriate or licensed security providers when a project requires dedicated security support.',
                'Crowd and public-space coordination support for visible filming days.',
                'Low-profile movement planning for sensitive or high-visibility productions.',
                'Communication flow between production, drivers, fixers, translators, local contacts, hotels, and field teams.',
                'Practical risk flags before permits, flights, accommodation, and call sheets are locked.',
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
          heading: 'What We Do Not Promise',
          content: (
            <>
              <p className="mb-3 text-steel">Access and safety conditions can change. This is a calm statement of operational honesty, not a legal disclaimer.</p>
              <ul className="space-y-2">
                {[
                  'We do not guarantee access to restricted, sensitive, protected, private, or authority-controlled locations.',
                  'We do not guarantee security outcomes or risk-free travel.',
                  'We do not replace formal security consultants, legal advisors, government authorities, insurance requirements, or licensed protection providers.',
                  'We do not encourage filming without required permissions, consent, local protocol, or authority guidance.',
                  'We do not advise crews to ignore official guidance, road conditions, site restrictions, or local concerns.',
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
        'Production brief: project type, story, subject matter, and sensitivity level.',
        'Filming locations, regions, and route including any restricted, remote, or access-sensitive areas.',
        'Crew size, nationalities, and any high-profile talent or VIP requirements.',
        'Filming dates and schedule flexibility.',
        'Drone filming plans if applicable.',
        'Equipment footprint and vehicle requirements.',
        'Whether formal security support or licensed protection is required.',
        'Any existing permits, permissions, contacts, or access arrangements.',
      ]}
      related={[
        { label: 'Filming Permits & Compliance', href: '/filming-permits-ethiopia' },
        { label: 'Production Logistics', href: '/production-logistics-ethiopia' },
        { label: 'Location Scouting & Recce', href: '/location-scouting-ethiopia' },
        { label: 'VIP / Celebrity Handling', href: '/vip-celebrity-handling-ethiopia' },
        { label: 'On-Ground Fixing', href: '/on-ground-fixer-ethiopia' },
      ]}
      faqs={[
        { q: 'Can you advise on filming in remote or politically sensitive regions?', a: 'We can help plan logistics and access coordination for challenging regions, subject to current permissions and conditions. We advise based on current field realities and do not encourage travel or filming that conflicts with official guidance.' },
        { q: 'Do you provide licensed security services?', a: 'We can coordinate connection to appropriate licensed local providers when a project requires dedicated security support. We do not ourselves provide licensed security services.' },
        { q: 'What is the difference between access coordination and security?', a: 'Access coordination covers logistics, local liaison, protocol awareness, and practical movement planning. Security involves risk assessment, personnel protection, and licensed operations. We provide the former and can connect to the latter where required.' },
        { q: 'How early should we plan access and security coordination?', a: 'As early as possible, especially for remote regions, sensitive locations, border corridors, restricted areas, and high-profile productions. Late planning in these contexts is one of the most common causes of expensive last-minute production changes.' },
      ]}
      ctaHeading="Plan access before the schedule is locked"
      ctaBody="Share your locations, dates, crew size, subject matter, and any access-sensitive or restricted elements. We will respond with practical access considerations, risk flags, and recommended next steps."
      ctaButtonLabel="Plan Secure Access / Get a Quote"
    />
  )
}
