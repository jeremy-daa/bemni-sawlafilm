import type { Metadata } from 'next'
import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'
import { GuidePageLayout } from '@/components/shared/GuidePageLayout'

export const metadata: Metadata = {
  title: 'Bringing Film Equipment to Ethiopia | Import, Customs & Clearance Guide',
  description: 'A producer\'s guide to bringing film equipment to Ethiopia: temporary import planning, documentation, ATA Carnet, battery rules, drone gear, and airport clearance at Bole.',
  alternates: { canonical: '/bringing-film-equipment-to-ethiopia' },
  openGraph: {
    url: '/bringing-film-equipment-to-ethiopia',
  }
}

export default function BringingEquipmentPage() {
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
  const imageRecord = records.find(item => item.slug === 'whatsapp-image-2026-05-18-at-16-40-56-2' || item.labelName === 'whatsapp-image-2026-05-18-at-16-40-56-2') || records[0];

  return (
    <GuidePageLayout
      slug="bringing-film-equipment-to-ethiopia"
      heroImageRecord={imageRecord}
      eyebrow="Ethiopia filming guide"
      h1="Bringing Film Equipment to Ethiopia"
      subhead="Customs, temporary import planning, documentation checks, and arrival coordination for productions bringing camera, sound, drone, and support equipment."
      heroBody={
        <>
          <p>Professional film equipment can be delayed at the border when documents are incomplete, serial numbers are missing, values are unclear, or temporary import requirements are not well understood. In Ethiopia, customs planning should start before the gear is packed — not on arrival day.</p>
          <p>This guide covers what producers need to know about bringing film equipment to Ethiopia: what documents to prepare, how temporary import usually works, what can cause delays, drone-specific considerations, battery rules, and how to connect clearance planning to production logistics.</p>
        
          
        </>
      }
      quickAnswer={
        <p>Film equipment entering Ethiopia for production use is typically handled as a temporary import. Prepare a complete equipment list with serial numbers and declared values before travel. Do not assume an ATA Carnet alone resolves all customs requirements — confirm the approach for your specific shipment early. Start customs planning at the same time as filming permits, not after crew travel is booked.</p>
      }
      sections={[
        {
          heading: 'Start With a Complete Equipment List',
          content: (
            <>
              <p>The most reliable thing a production can do before travelling to Ethiopia with film equipment is prepare a complete, accurate, and consistent equipment list. This document will be referenced across multiple points: airline check-in, customs review, temporary import planning, insurance, and on-ground logistics tracking.</p>
              <p>A useful equipment list for Ethiopia production includes:</p>
              <ul className="mt-3 space-y-2">
                {[
                  'Camera bodies: model name, manufacturer, serial number, and declared value.',
                  'Lenses: model, focal length, serial number, and value.',
                  'Sound equipment: recorder model, microphones, boom, mixer, serial numbers, and value.',
                  'Lighting: type, model, quantity, and value.',
                  'Drone: model, manufacturer, serial number, weight category, and declared value.',
                  'Batteries: quantity, type, watt-hour rating, and drone versus camera versus lighting specification.',
                  'Monitors and other accessories: model, serial, and value.',
                  'Support gear: tripods, rails, gimbals, cases, and general support equipment.',
                  'Ownership status: owned, rented, loaned, or leased, with supporting documentation.',
                ].map(item => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-mid flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          ),
        },
        {
          heading: 'Temporary Import Planning',
          content: (
            <>
              <p>Professional film equipment entering Ethiopia for temporary use during a production is generally processed as a temporary import rather than a permanent import. The exact approach depends on how the equipment arrives, where it comes from, the nature of the gear, and the current requirements of Ethiopian customs authorities.</p>
              <p>Key points producers should understand:</p>
              <ul className="mt-4 space-y-2">
                {[
                  'Do not assume an ATA Carnet will automatically resolve temporary import for all equipment. Confirm whether a carnet is accepted for your specific shipment and what alternative documentation may be needed if it is not available or not suitable.',
                  'Equipment arriving as accompanied baggage with crew is handled differently from air cargo, courier shipments, or freight.',
                  'Temporary import documentation should be consistent with the equipment list, invoices, and any supporting ownership or rental documents.',
                  'Customs requirements can change. Confirm the current approach early with a fixer or customs coordinator rather than relying on experiences from previous years.',
                  'Exit and re-export planning is part of temporary import. Documents and processes for taking equipment out of Ethiopia at the end of the shoot should be planned at the same time as arrival.',
                ].map(item => (
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
          heading: 'Drone Equipment — Separate Planning Required',
          content: (
            <>
              <p>Drone equipment should be treated as a separate planning workflow, not as part of the general camera kit. Drone gear — including the drone itself, controllers, extra batteries, and associated equipment — may involve additional documentation review, import considerations, and permission requirements beyond standard film equipment.</p>
              <p>Specifically for drone import to Ethiopia:</p>
              <ul className="mt-3 space-y-2">
                {[
                  'Prepare a specific drone equipment list with model, serial number, weight class, battery count, and declared value.',
                  'Pilot/operator credentials and insurance may be reviewed as part of both the customs and permits process.',
                  'Connect drone import planning with aerial permit planning early — these are linked workflows.',
                  'Do not pack drone batteries in ways that conflict with airline regulations for lithium battery transport.',
                  'Know whether you plan to fly the drone before it enters the country, as some permit considerations are triggered at the planning stage.',
                ].map(item => (
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
          heading: 'Battery Rules and Airline Considerations',
          content: (
            <>
              <p>Batteries — especially high-capacity lithium batteries used for cinema cameras, drones, and lighting systems — are subject to airline restrictions that vary by carrier, battery watt-hour rating, and packaging.</p>
              <ul className="mt-3 space-y-2">
                {[
                  'Check your airline\'s current lithium battery policy before packing. Policies vary between carriers and change periodically.',
                  'Large-format cinema batteries over 160Wh typically cannot travel in checked baggage and may have carry-on limits.',
                  'Drone batteries may have specific restrictions depending on their watt-hour rating and the airline.',
                  'Pack batteries accessibly to simplify security screening.',
                  'Label batteries clearly with watt-hour ratings to speed up airport checks.',
                  'Have a clear inventory of battery quantities and types in your equipment documentation.',
                ].map(item => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          ),
        },
        {
          heading: 'Bole International Airport — What to Expect',
          content: (
            <>
              <p>Addis Ababa Bole International Airport is the main international entry point for productions arriving in Ethiopia. Most international crew and equipment will arrive here.</p>
              <ul className="mt-3 space-y-2">
                {[
                  'Keep all equipment documentation — list, invoices, ownership notes — accessible and not buried in hold luggage.',
                  'High-value items travelling as checked baggage should be declared clearly and consistently with your equipment manifest.',
                  'If equipment arrives by air cargo or courier separately from crew, coordinate clearance timing carefully so gear does not sit in storage while the crew is in the field.',
                  'Have a fixer or customs coordinator briefed in advance when large or complex equipment shipments are expected.',
                  'Build a buffer between arrival day and first shoot day when equipment volume or customs complexity is high.',
                ].map(item => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-mid flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          ),
        },
        {
          heading: 'Local Equipment Rental Options',
          content: (
            <p>For some productions, supplementing with locally available equipment in Addis Ababa can reduce the customs complexity. Basic camera support, some lighting equipment, and vehicles are available locally. Specialist cinema cameras, high-end audio equipment, advanced drone systems, and expedition gear should not be assumed to be available locally at short notice. Confirm local availability early if you are planning to rely on in-country rental for any part of your kit.</p>
          ),
        },
      ]}
      relatedGuides={[
        { label: 'Filming permits in Ethiopia', href: '/filming-permits-ethiopia' },
        { label: 'Drone permits in Ethiopia', href: '/drone-permits-ethiopia' },
        { label: 'Best time to film in Ethiopia', href: '/best-time-to-film-in-ethiopia' },
      ]}
      relatedServices={[
        { label: 'Customs & equipment import', href: '/customs-clearance-film-equipment-ethiopia' },
        { label: 'Drone permits & aerial coordination', href: '/drone-permits-ethiopia' },
        { label: 'Production logistics', href: '/production-logistics-ethiopia' },
      ]}
      faqs={[
        { q: 'Do I need an ATA Carnet to bring film equipment to Ethiopia?', a: 'Do not assume an ATA Carnet will automatically resolve customs entry for all film equipment entering Ethiopia. Confirm whether a carnet is accepted for your specific shipment and what alternative temporary import documentation may be needed. Share your equipment list and arrival method with a fixer or customs coordinator early.' },
        { q: 'Can I bring a drone into Ethiopia for filming?', a: 'Yes, but drone equipment should be planned separately from general camera gear. Drone import involves additional documentation and connects to the aerial permit process. Prepare a dedicated drone equipment list with model, serial number, battery details, and pilot credentials before travel.' },
        { q: 'How much time should I allow for customs clearance?', a: 'This depends on the volume of equipment, how it arrives, and the completeness of your documentation. Productions with large or complex equipment shipments should build at least one full day of buffer between arrival and the first filming day. Coordinating clearance in advance with a fixer significantly reduces delay risk.' },
        { q: 'Can I rent film equipment locally in Addis Ababa?', a: 'Basic camera support and some lighting equipment is available locally in Addis Ababa. Specialist cinema cameras, advanced audio equipment, high-end drone systems, and expedition-specific gear should not be assumed to be available at short notice. Confirm local availability early if you plan to rely on in-country rental.' },
      ]}
      ctaHeading="Plan your equipment import before departure"
      ctaBody="Share your equipment list, arrival dates, shipping method, drone details, and any existing customs documentation. We will review gaps, advise on the temporary import approach, and coordinate clearance planning with your production schedule."
    />
  )
}
