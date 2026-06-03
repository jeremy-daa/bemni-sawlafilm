import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/shared/ServicePageLayout'

import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'

export const metadata: Metadata = {
  title: 'On-Ground Fixer in Ethiopia | Shoot-Day Coordination | Sawla Films',
  description: 'Calm shoot-day coordination when plans change. Local liaison, call sheet alignment, access management, contributor communication, and real-time field problem solving in Ethiopia.',
  alternates: { canonical: '/on-ground-fixer-ethiopia' },
  openGraph: {
    url: '/on-ground-fixer-ethiopia',
  }
}

export default function OnGroundFixerPage() {
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
  const imageRecord = records.find(item => item.slug === 'whatsapp-image-2026-05-18-at-16-40-59-5' || item.labelName === 'whatsapp-image-2026-05-18-at-16-40-59-5') || records[0];

  return (
    <ServicePageLayout
      heroImageRecord={imageRecord}
      slug="on-ground-fixer-ethiopia"
      h1="On-Ground Fixer in Ethiopia"
      subhead="Calm shoot-day coordination when plans change."
      primaryCta="Book an On-Ground Fixer"
      heroBody={
        <>
          <p>Shoot days are where the production plan meets the ground. In Ethiopia, timing, access, movement, language, local protocol, and changing field conditions all need active coordination if the day is going to hold.</p>
          <p>Sawla Films provides on-ground fixer support for international productions filming in Ethiopia. We coordinate local liaison, call sheet updates, access timing, drivers, authorities, contributors, translators, and practical field decisions so your crew can stay focused on the story.</p>
          <p>We do not promise that every condition will stay fixed. We help your production stay clear, coordinated, and responsive when conditions shift.</p>
        
          
        </>
      }
      trustLine="Local liaison, call sheet coordination, contributor communication, access timing, translator support, and real-time field problem solving for productions filming across Ethiopia."
      summaryItems={[
        'Shoot-day coordination across crew, drivers, authorities, contributors, translators, and local contacts.',
        'Real-time updates for timing, access, routing, schedule shifts, and local liaison needs.',
        'Field problem solving designed to protect momentum, consent, safety awareness, and production priorities.',
      ]}
      sections={[
        {
          heading: 'What an On-Ground Fixer Does',
          content: (
            <>
              <p>An on-ground fixer is the practical link between the production plan and the reality of the filming day. The role is not limited to translation, transport, or making calls. A strong fixer keeps communication aligned, anticipates friction, and helps the crew make quick decisions without losing respect for local context.</p>
              <p>On shoot days, Sawla Films can support:</p>
              <ul className="mt-3 space-y-2">
                {[
                  'Call sheet coordination, timing updates, and movement tracking.',
                  'Local liaison with authorities, community representatives, site custodians, and contributors.',
                  'Access management at urban, rural, religious, heritage, protected, or community locations.',
                  'Coordination between producer, director, camera team, sound team, drivers, translators, and assistants.',
                  'On-site translation support and cultural context where required.',
                  'Rapid adjustment when weather, access, ceremonies, interviews, or road conditions affect the plan.',
                  'Communication discipline so one operational channel stays clear and decisions move quickly.',
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
          heading: 'How We Work — Four Stages',
          content: (
            <div className="space-y-6">
              {[
                { n:'1', title:'Pre-shoot alignment', body:'Before the shoot day, we review your call sheet, location plan, contact list, access notes, permits, interview priorities, crew movement, vehicle plan, and any sensitive elements. We flag possible friction points before the crew is already under pressure.' },
                { n:'2', title:'Field setup and local liaison', body:'We confirm arrival timing, local contacts, access readiness, vehicle positioning, translator support, contributor expectations, and any protocol requirements. Where community or site permissions matter, we help align communication before filming begins.' },
                { n:'3', title:'Shoot-day coordination', body:'During the day, we coordinate movement, timing, local communication, on-site questions, and rapid updates across departments. If the schedule changes, we help the production understand what can be adjusted and what may require additional approval, consent, or local discussion.' },
                { n:'4', title:'Wrap and next-day readiness', body:'At the end of the day, we help close local communication, confirm next-day requirements, update timing assumptions, and flag any issue that needs follow-up before the next call time.' },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-charcoal border border-ember/50 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[14px] text-ember">{step.n}</span>
                  </div>
                  <div>
                    <p className="font-medium text-ink text-[13px] mb-1.5">{step.title}</p>
                    <p className="text-[13px] font-light text-steel leading-[1.7]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: 'Common Shoot-Day Risks We Help Manage',
          content: (
            <ul className="space-y-2">
              {[
                'Crew arrives before access contacts or site custodians are ready.',
                'A contributor, community leader, or local contact changes timing at short notice.',
                'Public attention builds around a visible crew or high-profile subject.',
                'A route, road, weather condition, local ceremony, or market day affects timing.',
                'A scene needs additional local consent or authority clarification.',
                'The director needs creative flexibility while the producer needs schedule control.',
                'Communication between departments, drivers, and local contacts becomes unclear under pressure.',
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
        'Production brief and project type.',
        'Call sheet or draft schedule for shoot days.',
        'Location list with access notes and any permits already in place.',
        'Crew size, roles, and key contacts.',
        'Contributor details, interview schedule, and any sensitivity considerations.',
        'Vehicle plan and driver arrangements.',
        'Translation needs and regional language requirements.',
        'Any high-profile talent, VIP requirements, or special access conditions.',
      ]}
      related={[
        { label: 'Local Crew, Translators & Cultural Liaison', href: '/local-crew-translators-ethiopia' },
        { label: 'Filming Permits & Compliance', href: '/filming-permits-ethiopia' },
        { label: 'Security & Access Coordination', href: '/filming-security-access-ethiopia' },
        { label: 'Production Logistics', href: '/production-logistics-ethiopia' },
        { label: 'VIP / Celebrity Handling', href: '/vip-celebrity-handling-ethiopia' },
      ]}
      faqs={[
        { q: 'What is the difference between an on-ground fixer and a translator?', a: 'A translator handles language. An on-ground fixer coordinates the entire shoot day: timing, access, movement, local liaison, contributor communication, and operational decisions. Most productions need both working together.' },
        { q: 'Do you provide fixers for single-day shoots?', a: 'Yes. We can provide on-ground fixer support for individual shoot days, multi-day shoots, or full production periods depending on the project requirements and our availability.' },
        { q: 'Can your fixer support both urban and remote filming?', a: 'Yes. Our on-ground fixing covers city filming in Addis Ababa, regional towns, heritage sites, rural communities, and remote field locations. The level of preparation and logistics needed varies by location type.' },
        { q: 'What if conditions change dramatically on the day?', a: 'Shoot-day fixing is specifically designed for this. We help the production understand options, communicate with local contacts, adjust the call sheet, and protect the most important filming priorities when conditions shift.' },
      ]}
      ctaHeading="Book on-ground fixing for your Ethiopia production"
      ctaBody="Share your shoot dates, locations, call sheet, crew size, and any access or contributor requirements. We will confirm availability and what preparation we need before your first filming day."
      ctaButtonLabel="Book an On-Ground Fixer"
    />
  )
}
