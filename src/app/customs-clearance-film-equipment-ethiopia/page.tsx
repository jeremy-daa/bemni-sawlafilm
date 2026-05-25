import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/shared/ServicePageLayout'

import { PremiumImage } from '@/components/ui/PremiumImage'
import metadataJson from '@/data/metadata.json'
import { FullMediaRecord } from '@/types/gallery'

export const metadata: Metadata = {
  title: 'Customs Clearance for Film Equipment in Ethiopia | Sawla Films',
  description: 'Documentation and coordination that keeps your gear moving. Temporary import planning, equipment manifests, ATA Carnet review, and airport clearance support at Bole International.',
  alternates: { canonical: '/customs-clearance-film-equipment-ethiopia' },
}

export default function CustomsPage() {
  const records = (metadataJson as { records: FullMediaRecord[] }).records;
  const imageRecord = records.find(item => item.slug === 'img-20140101-040751');

  return (
    <ServicePageLayout
      slug="customs-clearance-film-equipment-ethiopia"
      h1="Customs Clearance for Film Equipment in Ethiopia"
      subhead="Documentation and coordination that keeps your gear moving."
      heroBody={
        <>
          <p>Professional film equipment can be delayed at the border when documents are incomplete, serial numbers are missing, values are unclear, or temporary import requirements are misunderstood. In Ethiopia, customs planning should start before the gear is packed, shipped, or carried on arrival.</p>
          <p>Sawla Films supports international productions with customs and equipment import planning for cameras, lenses, sound kits, lighting, drones, batteries, grip equipment, monitors, and other production gear. We review your equipment list, identify documentation gaps, coordinate airport-clearance support, and align gear release with production transport and shoot schedules.</p>
          <p>We do not promise shortcuts or guaranteed release times. We help your production enter Ethiopia with cleaner documents, fewer avoidable delays, and a realistic clearance plan.</p>
        
          {imageRecord && (
            <div className="mt-8 w-full aspect-[16/7] md:aspect-[21/9] rounded-[4px] overflow-hidden shadow-md border border-black/[0.05]">
              <PremiumImage
                assets={imageRecord.assets}
                altText={imageRecord.seoDescription || imageRecord.altText}
                dominantColor={imageRecord.dominantColors[0]}
                className="w-full h-full object-cover"
                useFullResolution={false}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}
        </>
      }
      heroCautionTitle="Customs release is not automatic."
      heroCaution="Professional equipment import depends on complete documents, the arrival method, the nature of the gear, current customs requirements, and authority decisions. We communicate confidence through preparation, not by promising outcomes we cannot control."
      primaryCta="Request Customs Assistance / Get a Quote"
      summaryItems={[
        'Temporary import planning for professional film, documentary, broadcast, and commercial equipment.',
        'Documentation review for gear lists, serial numbers, declared values, ownership, invoices, batteries, and arrival details.',
        'Airport clearance coordination at Addis Ababa Bole International Airport and onward release to production transport.',
        'Carnet review where relevant, with alternative temporary import planning when a carnet is unavailable or unsuitable.',
        'Local rental and contingency advice when shipping or flying equipment is not practical.',
      ]}
      sections={[
        {
          heading: 'Why Customs Planning Matters for Productions',
          content: (
            <>
              <p>A production schedule can lose valuable time before the first shoot day if equipment is held at the airport or documentation is questioned. Customs issues are rarely creative problems, but they can quickly become production problems: missing serial numbers, mismatched equipment descriptions, unclear values, batteries packed incorrectly, drone-related documentation gaps, or late arrival information can create avoidable delays.</p>
              <p>For international crews, the goal is not only to bring equipment into Ethiopia. The real goal is to make sure the equipment is properly documented, trackable, available when needed, and aligned with the production movement plan. A camera kit cleared late in Addis Ababa can affect shoots in Lalibela, Omo Valley, Danakil, Simien Mountains, or any remote region where replacement options are limited.</p>
              <p>Sawla Films connects customs planning with filming permits, drone approvals, production logistics, and on-ground fixing so your gear plan supports the shoot rather than interrupts it.</p>
            </>
          ),
        },
        {
          heading: 'How We Work',
          content: (
            <div className="space-y-4">
              {[
                { step: '1. Review your equipment list', detail: 'We check gear descriptions, model names, quantities, serial numbers, declared values, batteries, drone items, accessories, ownership notes, and items that may need additional explanation.' },
                { step: '2. Confirm arrival and import route', detail: 'We review whether equipment will arrive as accompanied baggage, by air cargo, by courier, by freight, or through mixed methods. The clearance approach is matched to how equipment actually enters Ethiopia.' },
                { step: '3. Plan the temporary import approach', detail: 'We advise on the practical route for temporary import documentation, including carnet review where relevant and alternative documentation planning when needed.' },
                { step: '4. Coordinate clearance support', detail: 'We prepare the clearance workflow, communicate the necessary information to the relevant parties, and support coordination at Bole International Airport or the agreed arrival point.' },
                { step: '5. Link release to production logistics', detail: 'Once gear is released, we coordinate pickup, loading, transport, storage, and onward movement so equipment reaches the production team on schedule.' },
                { step: '6. Plan for exit and re-export', detail: 'Temporary import is not finished at arrival. We help productions keep documents organised for departure, re-export, and final customs closure where applicable.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <div><span className="font-medium text-ink">{item.step}: </span><span className="text-steel">{item.detail}</span></div>
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: 'Equipment Documentation Checklist',
          content: (
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-ember/20">
                    <th className="text-left py-2 pr-6 font-medium text-ink">Document / Detail</th>
                    <th className="text-left py-2 font-medium text-ink">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.06]">
                  {[
                    ['Full equipment list', 'Customs and production teams need a clear overview of what is entering the country.'],
                    ['Serial numbers', 'Serials help identify high-value cameras, lenses, drones, sound kits, and technical equipment.'],
                    ['Declared values', 'Values may be reviewed by customs and should be consistent across documents.'],
                    ['Ownership, invoice, rental or loan notes', 'Helps explain whether equipment is owned, rented, loaned, or carried by crew.'],
                    ['Arrival method', 'Accompanied baggage, air cargo, courier, and freight can require different handling.'],
                    ['Drone details', 'Drone model, serials, pilot information, and flight intent may require separate planning.'],
                    ['Battery details', 'Lithium battery transport rules and airline policies should be checked before travel.'],
                    ['Re-export plan', 'Temporary imports should have a clear exit plan at the end of the shoot.'],
                  ].map(([doc, why]) => (
                    <tr key={doc}>
                      <td className="py-2.5 pr-6 font-light text-steel align-top">{doc}</td>
                      <td className="py-2.5 font-light text-steel align-top">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: 'Common Causes of Customs Delays',
          content: (
            <ul className="space-y-2">
              {[
                'Equipment lists are incomplete or do not match the physical gear.',
                'Serial numbers are missing for cameras, lenses, drones, sound equipment, or other high-value items.',
                'Declared values are unclear or inconsistent between invoices, manifests, and supporting documents.',
                'The production assumes an ATA Carnet or foreign export document will automatically be accepted without local confirmation.',
                'Drone equipment is treated as ordinary camera gear without separate planning.',
                'Batteries, chargers, or power systems are packed without checking airline and customs considerations.',
                'Gear arrives by different methods but the documentation is not coordinated as one production package.',
                'The clearance plan is not connected to the shoot schedule, internal flights, vehicles, storage, or remote movement.',
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
        'Production title, company name, and short project description.',
        'Shoot dates, arrival dates, departure dates, and first filming date in Ethiopia.',
        'Full equipment list with models, quantities, serial numbers where available, and declared values.',
        'Crew names and arrival details when gear is carried with crew.',
        'Shipping method: accompanied baggage, air cargo, courier, freight, or mixed method.',
        'Drone details if any: model, serial number, pilot/operator, intended use, and filming locations.',
        'Any existing carnet, export document, invoice, packing list, rental agreement, or insurance certificate.',
        'Locations and route so gear release can be aligned with production transport and internal movement.',
      ]}
      related={[
        { label: 'Filming Permits & Compliance', href: '/filming-permits-ethiopia' },
        { label: 'Drone Permits & Aerial Coordination', href: '/drone-permits-ethiopia' },
        { label: 'Production Logistics', href: '/production-logistics-ethiopia' },
        { label: 'On-Ground Fixing', href: '/on-ground-fixer-ethiopia' },
      ]}
      faqs={[
        { q: 'Do we need an ATA Carnet for Ethiopia?', a: 'Do not assume an ATA Carnet will automatically solve customs entry for Ethiopia. We recommend reviewing the current position for your specific shipment and preparing an alternative temporary import plan where needed. Share your equipment list and arrival method early so we can advise a practical route.' },
        { q: 'What usually causes customs clearance delays at the airport?', a: 'Common causes include incomplete equipment lists, missing serial numbers, unclear declared values, mismatch between paperwork and physical gear, late shipping details, drone-related documentation gaps, and assumptions about temporary import rules. Preparation is the best way to reduce avoidable delay.' },
        { q: 'Can you support temporary import when a carnet is unavailable or unsuitable?', a: 'Yes. We can help plan alternative temporary import documentation and coordinate clearance support based on your equipment, arrival method, and production schedule. Requirements should be checked early because the correct route depends on the gear and the way it enters Ethiopia.' },
        { q: 'How far in advance should we plan customs support?', a: 'As early as possible — ideally at the same time as filming permits and logistics. Equipment lists, serial numbers, and arrival methods should be reviewed before travel is booked, not on arrival day.' },
      ]}
      ctaHeading="Start with an equipment list review"
      ctaBody="Share your gear list, arrival dates, shipping method, and drone details. We will review documentation gaps, advise on the temporary import route, and align clearance planning with your production schedule."
      ctaButtonLabel="Request Customs Assistance / Get a Quote"
    />
  )
}
