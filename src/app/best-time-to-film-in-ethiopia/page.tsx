import type { Metadata } from 'next'
import { PremiumImage } from '@/components/ui/PremiumImage'
import metadataJson from '@/data/metadata.json'
import { FullMediaRecord } from '@/types/gallery'
import { GuidePageLayout } from '@/components/shared/GuidePageLayout'

export const metadata: Metadata = {
  title: 'Best Time to Film in Ethiopia | Seasonal Guide for Productions',
  description: 'When to film in Ethiopia for each region and production type. Dry season windows, monsoon risks, altitude considerations, festival timing, and seasonal logistics for crews.',
  alternates: { canonical: '/best-time-to-film-in-ethiopia' },
}

export default function BestTimePage() {
  const records = (metadataJson as { records: FullMediaRecord[] }).records;
  const imageRecord = records.find(item => item.slug === 'img-20140101-064257-1');

  return (
    <GuidePageLayout
      heroImageRecord={imageRecord}
      eyebrow="Ethiopia filming guide"
      h1="Best Time to Film in Ethiopia"
      subhead="Seasonal planning that protects the schedule — by region, production type, and access reality."
      heroBody={
        <>
          <p>Ethiopia has multiple climate zones that don't follow a single national pattern. The best filming season for the Danakil is not the same as the best season for the Simien Mountains, the Omo Valley, or Lalibela. Planning a multi-region shoot requires understanding each location's seasonal window — not just Ethiopia in general.</p>
          <p>This guide covers the main filming seasons by region, what affects timing and access, festival and ceremony windows worth planning around, and what changes between the dry and rainy seasons for different production types.</p>
        
          
        </>
      }
      quickAnswer={
        <p>October to January is the most reliable filming window for the widest range of Ethiopian locations: roads are good, visibility is clear, and major festivals fall within this period. June to September brings the main rainy season (kiremt) affecting highlands, roads, and highland access. Danakil filming is possible year-round but extreme heat in May–July requires careful crew management. Always plan by region and altitude, not by national season.</p>
      }
      sections={[
        {
          heading: 'Ethiopia\'s Main Seasons',
          content: (
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-ember/20">
                    <th className="text-left py-2.5 pr-6 font-medium text-ink">Season</th>
                    <th className="text-left py-2.5 pr-6 font-medium text-ink">Months</th>
                    <th className="text-left py-2.5 font-medium text-ink">General filming conditions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.06]">
                  {[
                    ['Main dry season', 'Oct – Jan', 'Best all-round window. Clear skies, good roads, reliable visibility. Major festivals including Timkat (Jan) and Meskel (Sep/Oct).'],
                    ['Short dry season', 'Feb – May', 'Generally good. Heat increases toward April–May in lowlands and Danakil. Some short rains (belg) possible in some regions.'],
                    ['Main rainy season', 'Jun – Sep', 'Heavy highland rains (kiremt). Some roads impassable. Lush landscapes. Difficult for multi-region shoots. Some locations remain accessible.'],
                    ['Transition', 'Sep – Oct', 'Rain ends in most regions. Roads recovering. Green landscapes. Good for landscape shoots as conditions clear.'],
                  ].map(([season, months, notes]) => (
                    <tr key={season}>
                      <td className="py-3 pr-6 font-medium text-ink align-top">{season}</td>
                      <td className="py-3 pr-6 font-light text-steel align-top">{months}</td>
                      <td className="py-3 font-light text-steel align-top leading-[1.65]">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: 'Region-by-Region Seasonal Guide',
          content: (
            <div className="space-y-6">
              {[
                {
                  region: 'Danakil Depression and Afar',
                  body: 'Danakil filming is possible year-round due to low rainfall, but heat management is critical. October to March is the most comfortable window for crews. April to June sees temperatures rising sharply. July to September can exceed 50°C at Dallol and requires serious heat protocol, hydration planning, and medical considerations. Lava activity at Erta Ale is independent of season — confirm current conditions before travel.',
                },
                {
                  region: 'Omo Valley',
                  body: 'October to May is the main filming window. June to September brings rain that affects roads in southern Ethiopia. The most significant ceremony window is August to November, when Hamer bull-jumping ceremonies, Karo celebrations, and other cultural events occur. Confirm specific ceremony dates with local contacts as these shift year to year.',
                },
                {
                  region: 'Lalibela and northern highlands',
                  body: 'October to May is ideal. Timkat, the Ethiopian Orthodox Epiphany celebration, falls in January and represents one of the most extraordinary filming opportunities in Ethiopia — but requires months of advance planning for access, permits, logistics, and accommodation. Genna (Ethiopian Christmas) falls in early January. Meskel (finding of the True Cross) is September and a major event in Addis Ababa.',
                },
                {
                  region: 'Simien Mountains',
                  body: 'October to March is the best window for visibility, wildlife, and road access. April to June is usually manageable. July to September brings heavy rain and thick cloud, significantly reducing visibility and access. Temperatures at altitude can be very cold at night year-round — pack and plan accordingly.',
                },
                {
                  region: 'Addis Ababa',
                  body: 'Addis Ababa is filmable year-round. The rainy season reduces outdoor shooting quality between July and September, but city filming continues. Festival seasons (Meskel in September, Timkat in January, and Ethiopian New Year in September) offer exceptional urban filming opportunities.',
                },
                {
                  region: 'Tigray and Axum',
                  body: 'October to May is the best filming window. Road and access conditions in Tigray should be checked against current security and local authority guidance at the time of planning, as conditions in this region have been subject to change.',
                },
              ].map((item) => (
                <div key={item.region} className="border-l-2 border-ember/30 pl-4">
                  <h3 className="text-[13px] font-medium text-ink mb-2">{item.region}</h3>
                  <p className="text-[13px] font-light text-steel leading-[1.75]">{item.body}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          heading: 'Key Festivals and Ceremony Windows',
          content: (
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-ember/20">
                    <th className="text-left py-2.5 pr-6 font-medium text-ink">Event</th>
                    <th className="text-left py-2.5 pr-6 font-medium text-ink">Timing</th>
                    <th className="text-left py-2.5 font-medium text-ink">Planning note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.06]">
                  {[
                    ['Timkat (Epiphany)', 'January', 'One of the most visually powerful events in Ethiopia. Particularly spectacular at Lalibela and Gondar. Requires 3–6 months advance planning for access, permits, and accommodation.'],
                    ['Genna (Ethiopian Christmas)', 'January (approx. 7th)', 'Major celebration across Ethiopia. Lalibela and Addis Ababa are key filming locations. Coincides with Timkat period — coordinate both together.'],
                    ['Meskel', 'September (approx. 27th)', 'Finding of the True Cross. Large bonfire ceremony in Meskel Square, Addis Ababa. Also celebrated across Ethiopia. Good opportunity for urban and cultural filming.'],
                    ['Ethiopian New Year (Enkutatash)', 'September (approx. 11th)', 'Vibrant start of the new year. Urban and countryside celebrations. Fresh post-rainy-season landscapes.'],
                    ['Hamer Bull-jumping ceremonies', 'Aug–Nov (variable)', 'Initiation ceremonies in the Omo Valley. Dates vary by individual family and community — requires local advance contact.'],
                    ['Karo body decoration ceremonies', 'Variable', 'Community-dependent ceremonies in the Omo Valley. Requires proper cultural liaison and community-direct coordination.'],
                    ['Ashenda / Shadey', 'August', 'Post-rainy-season celebration in Tigray and Amhara regions. Young women\'s festival with distinctive song, dance, and costumes.'],
                  ].map(([event, timing, note]) => (
                    <tr key={event}>
                      <td className="py-3 pr-6 font-medium text-ink align-top">{event}</td>
                      <td className="py-3 pr-6 font-light text-steel align-top">{timing}</td>
                      <td className="py-3 font-light text-steel align-top leading-[1.65]">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: 'Altitude, Heat, and Crew Welfare',
          content: (
            <ul className="space-y-2">
              {[
                'Addis Ababa sits at approximately 2,400m. Some crew members experience mild altitude effects for the first 24–48 hours. Build this into your arrival logistics.',
                'Simien Mountains filming at high altitude can require acclimatisation time for crew from sea-level origins.',
                'Danakil heat is extreme. Plan short filming windows in peak heat, carry large water supplies, have shade structures, and discuss crew and talent heat protocols in pre-production.',
                'High-altitude cold is a real factor in Simien and other highland areas — night temperatures can drop significantly even during dry season.',
                'Solar UV intensity is high across Ethiopia. Crew sun protection should be factored into daily logistics.',
                'Medical evacuation planning, travel insurance, and first-aid kit specifications should be reviewed for remote expedition shoots.',
              ].map(item => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ),
        },
      ]}
      relatedGuides={[
        { label: 'What to film in Ethiopia', href: '/what-to-film-in-ethiopia' },
        { label: 'Filming permits in Ethiopia', href: '/filming-permits-ethiopia' },
        { label: 'Bringing film equipment to Ethiopia', href: '/bringing-film-equipment-to-ethiopia' },
      ]}
      relatedServices={[
        { label: 'Production logistics', href: '/production-logistics-ethiopia' },
        { label: 'Location scouting & recce', href: '/location-scouting-ethiopia' },
        { label: 'Filming permits & compliance', href: '/filming-permits-ethiopia' },
      ]}
      faqs={[
        { q: 'What is the overall best time to film in Ethiopia?', a: 'October to January is the most reliable window for the widest range of locations. Roads are clear, visibility is good, and major festivals fall in this period. However, the best time always depends on your specific locations and production type.' },
        { q: 'Can you film in Ethiopia during the rainy season?', a: 'Yes, but with significant planning adjustments. Some highland roads become impassable and multi-region schedules are harder to execute. Danakil and some lowland areas remain more accessible. Urban filming in Addis Ababa continues year-round.' },
        { q: 'How much advance time do major festivals require?', a: 'Timkat and Genna at Lalibela require 3–6 months of advance planning for access, permits, accommodation, and logistics. Other festivals and ceremonies vary — some require months of community liaison and others can be coordinated more quickly with the right local contacts.' },
        { q: 'Is the Danakil Depression too hot to film in summer?', a: 'The Danakil is filmable year-round but extreme summer heat requires serious crew welfare planning, medical preparation, and short filming windows. Most international productions choose the October–March window for comfort and safety. If summer filming is essential, discuss heat protocol, water supply, and medical support in detail during pre-production.' },
      ]}
      ctaHeading="Match your shoot to the right season"
      ctaBody="Share your draft dates, regions, production type, and crew size. We will advise on seasonal access, festival timing, logistics implications, and whether your current schedule aligns with realistic filming conditions."
    />
  )
}
