import type { Metadata } from 'next'
import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'
import { GuidePageLayout } from '@/components/shared/GuidePageLayout'

export const metadata: Metadata = {
  title: 'What to Film in Ethiopia | Stories, Locations & Access Guide',
  description: 'A producer\'s guide to filming in Ethiopia — landscapes, communities, sacred sites, urban life, and expedition territories with honest access and logistics notes.',
  alternates: { canonical: '/what-to-film-in-ethiopia' },
  openGraph: {
    url: '/what-to-film-in-ethiopia',
  }
}

export default function WhatToFilmPage() {
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
  const imageRecord = records.find(item => item.slug === 'whatsapp-image-2026-05-18-at-16-40-58-1' || item.labelName === 'whatsapp-image-2026-05-18-at-16-40-58-1') || records[0];

  return (
    <GuidePageLayout
      heroImageRecord={imageRecord}
      eyebrow="Ethiopia filming guide"
      h1="What to Film in Ethiopia"
      subhead="Stories that are visually powerful and operationally realistic."
      heroBody={
        <>
          <p>Ethiopia offers an extraordinary range of filming environments: ancient stone cities built into mountain rock, volcanic desert basins, high-altitude highland plateaus, Rift Valley lake systems, remote pastoral communities, living religious traditions, modern urban energy, and some of the world's most extreme natural landscapes.</p>
          <p>This guide is built to help producers understand what is visually possible and operationally realistic. Every location described here has been filmed with international crews. Each comes with access context, timing notes, permit considerations, and production logistics realities.</p>
        
          
        </>
      }
      quickAnswer={
        <p>Ethiopia is one of the most visually diverse filming destinations in Africa. Its most valuable locations range from the Danakil Depression and Erta Ale volcano in Afar to the Omo Valley cultural communities, the Lalibela rock-hewn churches, Simien Mountains, Bale Mountains, Axum obelisks, Harar old city, and the streets of Addis Ababa. Each environment requires specific permits, access planning, and logistics preparation.</p>
      }
      sections={[
        {
          heading: 'The Danakil Depression and Afar Region',
          content: (
            <>
              <p>The Danakil Depression is one of the most extreme and visually spectacular filming locations on Earth. At more than 100 metres below sea level, it contains active volcanic calderas, active lava lakes at Erta Ale, bright sulphur springs at Dallol, vast salt flats, and Afar communities adapted to one of the harshest environments in the world.</p>
              <p>For international productions, the Danakil represents a combination of extraordinary visual power and significant logistical weight. Filming here requires careful route planning, specialist field vehicles, water and fuel management, timing for heat and volcanic activity, permit coordination, security-aware movement planning, and community protocol with Afar communities and local authority guidance.</p>
              <p>The Danakil is not a location you approach late in the planning process. It is a location you build the rest of your schedule around.</p>
              <div className="mt-4 bg-warm border-l-2 border-ember/40 pl-4 py-3 rounded-r-[3px]">
                <p className="text-[12px] font-medium text-ink mb-1">Access and production note</p>
                <p className="text-[12px] text-steel">Afar requires permits at federal, regional, and local levels. Access to specific volcanic locations is coordinated with relevant Ethiopian authorities and local guidance. Drone work requires separate planning. This is a high-intensity logistics environment — plan early.</p>
              </div>
            </>
          ),
        },
        {
          heading: 'The Omo Valley',
          content: (
            <>
              <p>The Omo Valley in southern Ethiopia is home to some of the most visually distinct communities and cultures in the world. Mursi, Hamer, Karo, Dassanech, Banna, Arbore, and other groups have maintained cultural identities, body decoration traditions, ceremony structures, and pastoral ways of life that have made this region one of the most filmed cultural destinations in East Africa.</p>
              <p>Filming in the Omo Valley requires more than access. It requires genuine cultural liaison, community consent, respectful protocol, and a production approach that goes beyond transactional photography. Communities in the Omo Valley have extensive experience with cameras and have developed their own expectations about how filming should work. Getting access right here protects the story, the contributors, and the relationship for future productions.</p>
              <p>Key opportunities include: community life and daily routines, cultural ceremonies, traditional crafts, Omo River environments, pastoral landscapes, markets in Dimeka and Key Afer, and the broader ecological territory around the Omo Basin.</p>
              <div className="mt-4 bg-warm border-l-2 border-ember/40 pl-4 py-3 rounded-r-[3px]">
                <p className="text-[12px] font-medium text-ink mb-1">Access and production note</p>
                <p className="text-[12px] text-steel">Community filming in the Omo Valley should be planned with proper cultural liaison, community consent, and respectful protocol in place. Do not assume visual access is automatic. Good liaison work is the difference between real access and staged encounters.</p>
              </div>
            </>
          ),
        },
        {
          heading: 'Lalibela and the Rock-Hewn Churches',
          content: (
            <>
              <p>Lalibela is among Ethiopia's most famous filming destinations. Its eleven medieval rock-hewn churches, carved from volcanic rock in the twelfth century, continue to function as active places of pilgrimage and worship. The atmosphere, architecture, robed clergy, candlelight, and spiritual energy are extraordinary on camera.</p>
              <p>Filming at Lalibela is not a simple location shoot. The churches are active religious sites with custodial authority. Permits, timing, religious protocol, clergy engagement, and crew behaviour all matter here. Filming during major Orthodox Christian festivals — Timkat in January or Genna at Christmas — can offer exceptional visual access to large-scale ceremony but requires careful advanced coordination.</p>
              <div className="mt-4 bg-warm border-l-2 border-ember/40 pl-4 py-3 rounded-r-[3px]">
                <p className="text-[12px] font-medium text-ink mb-1">Access and production note</p>
                <p className="text-[12px] text-steel">Lalibela church filming requires formal permission from the relevant religious and site authorities. Timkat and Genna access should be planned months in advance. Drone work near churches requires specific review. Crew dress code and behaviour inside church compounds are non-negotiable.</p>
              </div>
            </>
          ),
        },
        {
          heading: 'Simien Mountains',
          content: (
            <>
              <p>The Simien Mountains National Park is a UNESCO World Heritage Site and one of the great highland filming environments in Africa. The escarpment views, endemic wildlife (Gelada baboons, Ethiopian wolves, Walia ibex), dramatic plateau edges, ancient juniper forests, and small mountain communities make this a visually rich and emotionally compelling filming territory.</p>
              <p>Access to the park requires coordination with park authorities, entry fees for crew and equipment, and guide requirements for hiking and wildlife work. Drone filming should be reviewed carefully given protected-area rules. Accommodation at altitude should be planned with awareness of cold temperatures at night even in dry season.</p>
            </>
          ),
        },
        {
          heading: 'Addis Ababa',
          content: (
            <>
              <p>Addis Ababa is Africa's diplomatic capital and one of the continent's fastest-growing cities. It offers compelling contemporary urban filming: street markets, cafes, Orthodox churches, mosques, modern architecture, Mercato (one of Africa's largest open-air markets), the National Museum (home to Lucy), Entoto Hills, and a dynamic young population navigating tradition and modernity simultaneously.</p>
              <p>Urban filming in Addis can range from documentary-style run-and-gun city work to more formal commercial and branded shoots. Permissions for public-space filming and crowd-sensitive locations should be planned in advance rather than assumed. Local fixers and cultural liaisons are particularly valuable in urban environments where context and communication matter as much as access.</p>
            </>
          ),
        },
        {
          heading: 'Other Key Ethiopia Filming Locations',
          content: (
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-ember/20">
                    <th className="text-left py-2.5 pr-6 font-medium text-ink">Location</th>
                    <th className="text-left py-2.5 font-medium text-ink">Visual opportunity and planning note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.06]">
                  {[
                    ['Axum, Tigray', 'Ancient obelisks, Queen of Sheba palace, St Mary of Zion church, and living Orthodox tradition. Heritage site permissions required.'],
                    ['Bale Mountains', 'Ethiopian wolves, Afroalpine moorland, endemic species, and dramatic highland terrain. Park permits and guide requirements apply.'],
                    ['Harar', 'Medieval walled city, colourful markets, evening hyena feeding, and Harari culture. Compact, accessible, and rewarding for cultural shoots.'],
                    ['Lake Langano and Rift Valley lakes', 'Flamingos, birdlife, volcanic lakes, and accessible natural beauty within two to three hours of Addis Ababa.'],
                    ['Gondar', 'Royal castles (fasil ghebbi), church paintings, and Timkat celebration. UNESCO heritage site requiring permission coordination.'],
                    ['Gambela', 'Remote wetlands, Anuak and Nuer communities, and the Gambela National Park. Specialist logistics and current-condition checks required.'],
                    ['Bale Forest', 'Montane and rainforest ecosystems, biodiversity, and community forestry stories for natural history and conservation subjects.'],
                  ].map(([loc, note]) => (
                    <tr key={loc}>
                      <td className="py-2.5 pr-6 font-light text-ink align-top">{loc}</td>
                      <td className="py-2.5 font-light text-steel align-top leading-[1.65]">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
      ]}
      relatedGuides={[
        { label: 'Filming permits in Ethiopia', href: '/filming-permits-ethiopia' },
        { label: 'Best time to film in Ethiopia', href: '/best-time-to-film-in-ethiopia' },
        { label: 'Bringing film equipment to Ethiopia', href: '/bringing-film-equipment-to-ethiopia' },
      ]}
      relatedServices={[
        { label: 'Location scouting & recce', href: '/location-scouting-ethiopia' },
        { label: 'Filming permits & compliance', href: '/filming-permits-ethiopia' },
        { label: 'Production logistics', href: '/production-logistics-ethiopia' },
        { label: 'Local crew & cultural liaison', href: '/local-crew-translators-ethiopia' },
      ]}
      faqs={[
        { q: 'What are the most filmed locations in Ethiopia?', a: 'The Danakil Depression, Omo Valley communities, Lalibela rock-hewn churches, Simien Mountains, and Addis Ababa are the most internationally filmed environments in Ethiopia. Each has different permit, logistics, and access requirements.' },
        { q: 'Can you film freely anywhere in Ethiopia?', a: 'No. Filming in Ethiopia requires permits that vary by location, subject matter, production category, and filming activity. Religious and heritage sites, protected areas, border regions, and sensitive communities all have specific requirements. Some regions may have access restrictions at certain times based on current conditions.' },
        { q: 'Do communities in the Omo Valley consent to filming?', a: 'Community consent in the Omo Valley must be arranged through proper cultural liaison and community engagement. It cannot be assumed and should not be treated as automatic. Production teams that work through respectful engagement secure better access, stronger stories, and maintain relationships for future visits.' },
        { q: 'Can you film in conflict-affected regions?', a: 'Some regions in Ethiopia have experienced conflict and may have access restrictions or evolving security conditions. We advise based on current field realities and do not encourage filming that conflicts with official guidance or local authority conditions.' },
      ]}
      ctaHeading="Turn Ethiopia\'s locations into a workable shoot"
      ctaBody="Share your story direction, preferred locations, filming dates, crew size, and any access or subject-matter considerations. We will respond with honest feasibility notes, permit requirements, logistics considerations, and next steps."
    />
  )
}
