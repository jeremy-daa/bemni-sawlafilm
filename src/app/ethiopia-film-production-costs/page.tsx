import type { Metadata } from 'next'
import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'
import { GuidePageLayout } from '@/components/shared/GuidePageLayout'

export const metadata: Metadata = {
  title: 'Ethiopia Film Production Costs | Budget Guide for International Crews',
  description:
    'A practical guide to Ethiopia film production costs: what drives budgets for permits, logistics, crew, drones, customs, and remote field operations.',
  alternates: { canonical: '/ethiopia-film-production-costs' },
}

export default function ProductionCostsPage() {
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
  const imageRecord = records.find(item => item.slug === 'whatsapp-image-2026-05-18-at-16-40-38-3' || item.labelName === 'whatsapp-image-2026-05-18-at-16-40-38-3') || records[0];

  return (
    <GuidePageLayout
      eyebrow="Ethiopia filming guide"
      h1="Ethiopia Film Production Costs"
      subhead="What drives budgets for productions filming in Ethiopia — and what to plan for."
      heroBody={
        <>
          <p>
            Ethiopia is neither the most expensive nor the cheapest country to film in across
            Africa. The real driver of production cost is not the daily rate — it is the
            operational complexity of the route, the permit requirements, the logistics terrain,
            the crew footprint, the equipment volume, the drone plan, and how early in
            pre-production the planning begins.
          </p>
          <p>
            This guide covers the major cost drivers for international productions filming in
            Ethiopia: permits, logistics, crew, drones, customs, accommodation, and remote field
            support. It does not publish fixed prices because every production is different.
            Instead, it explains what determines cost so you can build a realistic budget
            framework before your first planning call.
          </p>
        
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
      quickAnswer={
        <p>
          Film production costs in Ethiopia vary based on shoot duration, regions covered, permit
          complexity, crew size, drone requirements, equipment volume, accommodation standard, and
          logistics complexity. A realistic budget starts with an honest assessment of the route,
          not a generic daily rate. Contact Sawla Films with your brief for a project-specific
          cost framework.
        </p>
      }
      sections={[
        {
          heading: 'The Biggest Cost Drivers in Ethiopia Production',
          content: (
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-ember/20">
                    <th className="text-left py-2.5 pr-6 font-medium text-ink">Cost driver</th>
                    <th className="text-left py-2.5 font-medium text-ink">What affects it</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.06]">
                  {[
                    ['Filming permits', 'Number of regions, location types, subject matter, drone use, heritage or religious site access, and whether specialist community or protected-area approvals are required.'],
                    ['Transport and field logistics', 'Number of regions, terrain type, vehicle requirements, fuel planning, convoy size, and whether remote field support is needed.'],
                    ['Accommodation', 'Standard level (international hotel, local lodge, guest house, or camp), proximity to filming locations, and crew size.'],
                    ['Local crew and translators', 'Number of shoot days, regions, languages required, subject matter complexity, and whether cultural liaison is needed alongside translation.'],
                    ['Drone planning', 'Locations planned for aerial work, permission complexity, import or clearance needs, battery logistics, and whether a local operator is required.'],
                    ['Customs and equipment clearance', 'Equipment volume and complexity, arrival method, carnet situation, and how well documentation is prepared.'],
                    ['Remote field and expedition support', 'Whether remote camps, specialist vehicles, fuel runs, water supply, and field team coordination are required for areas like Danakil or Gambela.'],
                    ['Shoot duration', 'Longer shoots spread fixed costs over more filming days, but remote field costs and accommodation accumulate daily.'],
                  ].map(([driver, detail]) => (
                    <tr key={driver}>
                      <td className="py-3 pr-6 font-medium text-ink align-top">{driver}</td>
                      <td className="py-3 font-light text-steel align-top leading-[1.65]">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: 'Why Early Planning Reduces Cost',
          content: (
            <>
              <p>The most reliable way to reduce Ethiopia production costs is to begin planning early. This is not a vague recommendation — it has specific financial logic.</p>
              <ul className="mt-4 space-y-2">
                {[
                  'Permit applications prepared with complete documentation avoid resubmission fees and delay costs.',
                  'Logistics planned before crew travel is booked allow route adjustments that reduce travel time and vehicle days.',
                  'Drone planning done early identifies restrictions before equipment is shipped, avoiding re-routing costs.',
                  'Customs planning that begins before departure prevents airport clearance delays that cost production days.',
                  'Accommodation booked early at peak festival or access periods avoids premium last-minute rates.',
                  'Cultural liaison arranged in advance ensures community access does not require extra days of re-engagement.',
                  'Security and access planning done early identifies which routes are achievable before flights and accommodation are locked.',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-mid flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 bg-warm border-l-2 border-ember/40 pl-4 py-3 rounded-r-[3px]">
                <p className="text-[13px] italic text-steel">
                  The most expensive production decisions in Ethiopia are usually the ones made late. A permit gap discovered on shoot day is far more costly than one identified during pre-production planning.
                </p>
              </div>
            </>
          ),
        },
        {
          heading: 'Budget Levels: A Rough Orientation',
          content: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  level: 'Lean production',
                  examples: 'Solo filmmaker, small NGO crew, 2–4 person documentary team.',
                  drivers: 'Permit coordination, single translator, basic 4x4 transport, guesthouse accommodation. Costs driven by permit requirements, not crew volume.',
                },
                {
                  level: 'Mid-scale international',
                  examples: 'Factual series, broadcaster documentary, 6–12 person international crew.',
                  drivers: 'Multi-region permits, drone planning, customs support, multiple translators and cultural liaisons, hotel accommodation, multi-region logistics.',
                },
                {
                  level: 'Large or expedition-scale',
                  examples: 'Natural history, remote expedition, reality format, celebrity-led production.',
                  drivers: 'Multi-authority permits, specialist vehicles, remote field camps, large crew logistics, VIP handling, security coordination, drone, customs, extended duration.',
                },
              ].map((item) => (
                <div key={item.level} className="bg-warm border border-black/[0.07] rounded-[3px] p-4 border-t-2 border-t-ember">
                  <p className="text-[11px] font-medium text-ember tracking-[0.06em] uppercase mb-2">{item.level}</p>
                  <p className="text-[11px] font-light text-silver mb-2 italic">{item.examples}</p>
                  <p className="text-[12px] font-light text-steel leading-[1.6]">{item.drivers}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: 'What We Quote On',
          content: (
            <>
              <p>Sawla Films does not publish standard day rates because the cost of production support varies significantly by project. We provide project-specific cost frameworks after a brief feasibility review.</p>
              <p className="mt-3">To give you a meaningful initial cost framework, share the following:</p>
              <ul className="mt-3 space-y-1.5">
                {['Shoot dates and duration.', 'Filming regions and locations.', 'Crew size and composition.', 'Equipment footprint and drone intent.', 'Subject matter and production type.', 'Accommodation expectations.', 'Whether remote or expedition-level logistics are required.', 'Any specific access, permit, or sensitivity considerations.'].map((item) => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          ),
        },
      ]}
      relatedGuides={[
        { label: 'Filming permits in Ethiopia',         href: '/filming-permits-ethiopia' },
        { label: 'Drone permits in Ethiopia',           href: '/drone-permits-ethiopia' },
        { label: 'Bringing film equipment to Ethiopia', href: '/bringing-film-equipment-to-ethiopia' },
        { label: 'Best time to film in Ethiopia',       href: '/best-time-to-film-in-ethiopia' },
        { label: 'What to film in Ethiopia',            href: '/what-to-film-in-ethiopia' },
      ]}
      relatedServices={[
        { label: 'Filming permits & compliance',        href: '/filming-permits-ethiopia' },
        { label: 'Production logistics',                href: '/production-logistics-ethiopia' },
        { label: 'Drone permits & aerial coordination', href: '/drone-permits-ethiopia' },
        { label: 'Customs & equipment import',          href: '/customs-clearance-film-equipment-ethiopia' },
      ]}
      faqs={[
        { q: 'How much does it cost to hire a film fixer in Ethiopia?', a: 'Film fixer costs in Ethiopia vary based on shoot duration, regions, permit complexity, crew size, drone requirements, and logistics scope. We provide project-specific quotes after a brief feasibility review. Share your dates, regions, crew size, and subject matter and we will respond with an initial cost framework.' },
        { q: 'Is Ethiopia an expensive country to film in?', a: 'Ethiopia is mid-range as a filming destination in Africa. Daily crew and accommodation costs are generally lower than South Africa, Kenya, or Tanzania. The real cost driver is operational complexity: permit requirements, remote logistics, drone planning, and the expertise required to coordinate access in varied environments.' },
        { q: 'What is usually the biggest unexpected cost for productions in Ethiopia?', a: 'The most common unexpected costs are late permit planning that requires expedited processing, customs delays from incomplete documentation, drone equipment that cannot fly due to missing approvals, and accommodation costs that spike when last-minute changes are needed in remote areas.' },
        { q: 'Can you give a rough per-day cost for film fixer services?', a: 'We do not publish generic day rates because cost depends entirely on scope. A single-city shoot needs very different resources from a multi-region expedition with drones, permits, remote logistics, and cultural liaison. Contact us with your brief for a project-specific cost framework.' },
      ]}
      ctaHeading="Get a project-specific cost framework"
      ctaBody="Share your dates, regions, crew size, equipment footprint, drone intent, and subject matter. We will respond with an honest cost framework — what is driving cost, what is flexible, and what to plan for."
    />
  )
}
