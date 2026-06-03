import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/shared/ServicePageLayout'

import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'

export const metadata: Metadata = {
  title: 'Local Crew, Translators & Cultural Liaisons in Ethiopia | Sawla Films',
  description: 'Handpicked regional support for crews that need more than translation. Trusted translators, cultural liaisons, fixers, and production assistants across Ethiopia.',
  alternates: { canonical: '/local-crew-translators-ethiopia' },
  openGraph: {
    url: '/local-crew-translators-ethiopia',
  }
}

export default function LocalCrewPage() {
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
  const imageRecord = records.find(item => item.slug === 'whatsapp-image-2026-05-18-at-16-40-59-10' || item.labelName === 'whatsapp-image-2026-05-18-at-16-40-59-10') || records[0];

  return (
    <ServicePageLayout
      heroImageRecord={imageRecord}
      slug="local-crew-translators-ethiopia"
      h1="Local Crew, Translators & Cultural Liaisons in Ethiopia"
      subhead="Handpicked regional support for crews that need more than translation."
      primaryCta="Request Crew Support / Get a Quote"
      heroBody={
        <>
          <p>Filming in Ethiopia depends on people who can understand the language, read the context, and keep communication respectful under real production pressure. A good translator does not only repeat words. A good cultural liaison understands who should be approached, how to ask, when to pause, what may be sensitive, and how the filming process affects the people and places involved.</p>
          <p>Sawla Films works with a carefully selected network of translators, cultural liaisons, fixers, production assistants, and local crew from different regions of Ethiopia. Many have worked across multiple filming projects and bring far more than language support. They understand local cultures, regional protocol, community expectations, contributor sensitivity, and the practical rhythm of filming on location.</p>
          <p>Our role is to match the right people to the right project, region, subject matter, crew style, and filming environment.</p>
        
          
        </>
      }
      summaryItems={[
        'Handpicked translators, cultural liaisons, fixers, and local crew from different regions of Ethiopia.',
        'Support that goes beyond translation: cultural reading, protocol awareness, contributor sensitivity, and production judgment.',
        'Multilingual and production-aware crew matched to project needs, subject matter, region, availability, and filming context.',
      ]}
      sections={[
        {
          heading: 'Why Local Crew and Cultural Liaison Matter in Ethiopia',
          content: (
            <>
              <p>Ethiopia is not one single filming context. A production may move between urban interviews, rural communities, sacred sites, markets, regional authorities, private homes, public spaces, and remote landscapes within the same schedule. Each environment has its own rhythm, language, protocol, expectations, and sensitivities.</p>
              <p>For international crews, misunderstandings can happen quickly when communication is treated as simple translation. A contributor may understand the words but not the filming process. A community may welcome the story but need the approach handled through the right local channel. A location may be visually perfect but require careful explanation, consent, or timing before a camera is brought forward.</p>
              <p>This is why Sawla Films treats local crew, translators, and cultural liaisons as part of the production foundation. The right people help producers understand context, build trust, reduce friction, protect relationships, and keep the shoot moving with respect.</p>
            </>
          ),
        },
        {
          heading: 'What We Support',
          content: (
            <ul className="space-y-2">
              {[
                'Regional translators and interpreters matched to location, language needs, subject matter, and production style.',
                'Cultural liaisons for community-based, heritage, religious, sensitive, or contributor-led filming.',
                'Local fixers and production assistants who understand field movement, communication, and shoot-day pressure.',
                'Contributor communication support for interviews, releases, expectations, timing, and sensitive conversations.',
                'Local crew support including assistants, camera support, sound support, drone support where appropriate, runners, drivers, and field coordinators.',
                'Multilingual support for international crews where suitable personnel are available.',
                'Casting, local access, community liaison, and context briefing support where appropriate.',
                'Coordination between local crew, producers, drivers, authorities, contributors, hotels, and field teams during production.',
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
          heading: 'What Makes Our People Different',
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { title: 'Production awareness', body: 'They understand set behaviour, call times, crew pressure, contributor care, and filming rhythm.' },
                { title: 'Cultural intelligence', body: 'They help crews understand local protocol, timing, expectations, and sensitive boundaries.' },
                { title: 'Regional grounding', body: 'They bring local context from different parts of Ethiopia and help producers avoid one-size-fits-all assumptions.' },
                { title: 'Discretion and trust', body: 'Selected for reliability, professionalism, confidentiality, and calm judgment.' },
                { title: 'Multilingual adaptability', body: 'Where available, we coordinate people who can support Ethiopian regional languages and international working languages.' },
                { title: 'Human contribution', body: 'Many do more than assist — they contribute insight, prevent misunderstanding, and strengthen the overall production outcome.' },
              ].map((item) => (
                <div key={item.title} className="bg-warm border border-black/[0.07] rounded-[3px] p-4">
                  <p className="text-[12px] font-medium text-ink mb-1.5">{item.title}</p>
                  <p className="text-[12px] font-light text-steel leading-[1.6]">{item.body}</p>
                </div>
              ))}
            </div>
          ),
        },
      ]}
      whatWeNeed={[
        'Production title and short brief.',
        'Filming dates, regions, and route.',
        'Crew size, roles, nationalities, and working languages.',
        'Contributor or interview needs.',
        'Languages or regional contexts already known.',
        'Subject matter, sensitive themes, community settings, or privacy concerns.',
        'Type of support needed: translator, interpreter, fixer, cultural liaison, production assistant, runner, field coordinator, local crew, or combined support.',
        'Whether support is needed for scouting, permits, pre-production, shoot days, or post-shoot follow-up.',
      ]}
      related={[
        { label: 'On-Ground Fixing', href: '/on-ground-fixer-ethiopia' },
        { label: 'Location Scouting & Recce', href: '/location-scouting-ethiopia' },
        { label: 'Production Logistics', href: '/production-logistics-ethiopia' },
        { label: 'Filming Permits & Compliance', href: '/filming-permits-ethiopia' },
      ]}
      faqs={[
        { q: 'Which languages do you cover?', a: 'Our network includes translators and liaisons across Amharic, Tigrinya, Oromo, Somali, Afar, Sidama, and English. Coverage for specific regional languages or dialects depends on availability and the project location. Share your regions and we will confirm what we can match.' },
        { q: 'Do your translators have experience on film productions?', a: 'Many of our translators and cultural liaisons have worked on international documentary, factual, commercial, and NGO productions. They understand filming environments, contributor sensitivity, and production expectations — not just language.' },
        { q: 'Can you provide local crew beyond translation?', a: 'Yes. We can coordinate production assistants, local fixers, runners, drivers, camera support, sound support, and field coordinators depending on the project and availability.' },
        { q: 'How are local crew selected?', a: 'Through direct working experience over multiple productions. We do not use generic agency lists. Our network is built from field relationships with people who have demonstrated reliability, judgment, and professionalism on real production days.' },
      ]}
      ctaHeading="Match the right people to your production"
      ctaBody="Share your locations, dates, crew size, languages needed, contributors, subject matter, and type of support required. We will recommend the right local support matched to your project and region."
      ctaButtonLabel="Request Crew Support / Get a Quote"
    />
  )
}
