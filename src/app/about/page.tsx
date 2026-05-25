import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SITE } from '@/lib/constants'

import { PremiumImage } from '@/components/ui/PremiumImage'
import metadataJson from '@/data/metadata.json'
import { FullMediaRecord } from '@/types/gallery'

export const metadata: Metadata = {
  title: 'About Sawla Films | Ethiopia Film Fixer & Production Partner',
  description: 'Sawla Films is an Ethiopia-based film fixer and production support company with over a decade of field experience supporting international documentary, broadcast, and commercial productions.',
  alternates: { canonical: '/about' },
}

const VALUES = [
  {
    title: 'Preparation over promises',
    body: 'We do not sell access we cannot confirm or timelines we cannot control. We review what is realistic, flag what is uncertain, and help productions plan around what we actually know — not what it would be comfortable to say.',
  },
  {
    title: 'Respect before the camera',
    body: 'Every community, location, and contributor in Ethiopia deserves to be approached honestly. We do not negotiate access for the camera before consent has been properly understood. This makes the filming better and protects the relationships that make future access possible.',
  },
  {
    title: 'Calm when conditions change',
    body: 'Field conditions change. Permits get delayed. Ceremonies move. Roads close. Our job is not to panic — it is to update the production clearly, present realistic options, and help the crew make the best decision with the information available.',
  },
  {
    title: 'Invisible unless needed',
    body: 'Our most successful days are the ones where the production team barely notices us because everything simply works. When the day gets complicated, we become visible. Our aim is always the former.',
  },
]

const REGIONS = [
  'Addis Ababa', 'Afar (Danakil Depression)', 'Omo Valley', 'Tigray', 'Amhara (Simien, Lalibela, Gondar)', 'Oromia (Bale, Rift Valley)', 'SNNPR', 'Somali Regional State', 'Gambela', 'Benishangul-Gumuz', 'Harari', 'Sidama',
]

export default function AboutPage() {
  const records = (metadataJson as { records: FullMediaRecord[] }).records;
  const portraitRecord = records.find(item => item.slug === 'camp');

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <div className="bg-ink pt-[80px] pb-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.1em]">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/15">›</li>
              <li className="text-white/50">About</li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow className="mb-4">About Sawla Films</Eyebrow>
              <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-4" style={{ fontSize: 'clamp(32px,4.5vw,52px)' }}>
                Ethiopia-based.<br />
                <em className="text-gold not-italic italic">Field-tested.</em><br />
                Producer-first.
              </h1>
              <p className="text-[14px] font-light text-white/55 leading-[1.8] mb-4">
                Sawla Films is an Ethiopia-based film fixer and production support company. We help international documentary, broadcast, factual, commercial, and independent production teams plan and execute shoots in Ethiopia with proper permits, practical logistics, respectful access, and calm on-ground coordination.
              </p>
              <p className="text-[14px] font-light text-white/40 leading-[1.8] mb-7 italic">
                We are not the production company. We are the operation that makes your production possible on the ground.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[11px] font-medium tracking-[0.08em] uppercase px-6 py-3 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
                  Request a Fixer / Get a Quote
                </Link>
                <Link href="/ethiopia-film-fixer-services" className="inline-flex items-center gap-2 bg-transparent text-white/65 border border-white/20 text-[11px] font-medium uppercase px-5 py-3 rounded-[2px] hover:border-white/40 hover:text-white transition-all">
                  Our Services
                </Link>
              </div>
            </div>
            
            {/* Visual Column */}
            <div className="flex items-center justify-center lg:justify-end">
              {portraitRecord && (
                <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[4px] overflow-hidden shadow-2xl border border-white/[0.05]">
                  <PremiumImage
                    assets={portraitRecord.assets}
                    altText={portraitRecord.seoDescription || portraitRecord.altText}
                    dominantColor={portraitRecord.dominantColors[0]}
                    className="w-full h-full object-cover"
                    useFullResolution={false}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="bg-cream py-16">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-serif font-light text-ink text-display-md mb-6 tracking-[-0.02em]">
                Who we are
              </h2>
              <div className="space-y-4 text-[14px] font-light text-steel leading-[1.8]">
                <p>Sawla Films grew out of Sawla Tours, a specialist Ethiopia expedition and cultural travel company with deep field relationships, logistics infrastructure, and regional knowledge built over more than a decade of operating across the country.</p>
                <p>The film fixer operation was developed specifically to serve international production teams who needed the same expedition and access expertise — but applied to the requirements of professional camera crews, broadcast deadlines, permit compliance, equipment logistics, and shoot-day coordination.</p>
                <p>Our team combines production experience with Ethiopia field expertise: people who understand both what a producer needs on a deadline and what it takes to move responsibly through complex environments, sensitive communities, remote terrain, and culturally significant locations.</p>
                <p>We are based in Addis Ababa and operate across all twelve regional states of Ethiopia.</p>
              </div>
            </div>
            <div>
              <h2 className="font-serif font-light text-ink text-display-sm mb-6 tracking-[-0.015em]">
                Regions we cover
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {REGIONS.map((region) => (
                  <div key={region} className="flex gap-2.5 items-center bg-warm border border-black/[0.07] rounded-[3px] px-4 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0" aria-hidden="true" />
                    <span className="text-[12px] font-light text-steel">{region}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] font-light text-silver/70 italic">All access-sensitive and security-sensitive regions are planned subject to current permissions, security conditions, and local authority guidance at the time of the shoot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-ash py-16">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <h2 className="font-serif font-light text-white text-display-md mb-10 tracking-[-0.02em]">
            How we operate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white/[0.04] border border-white/[0.07] rounded-[3px] p-6">
                <h3 className="text-[13px] font-medium text-white mb-3 flex items-center gap-2.5">
                  <span className="w-[3px] h-4 bg-ember rounded-[1px] flex-shrink-0" aria-hidden="true" />
                  {v.title}
                </h3>
                <p className="text-[13px] font-light text-white/50 leading-[1.75]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Showcase Row */}
      {(() => {
        const img1 = records.find(r => r.slug === 'whatsapp-image-2026-05-18-at-16-40-52-1');
        const img2 = records.find(r => r.slug === 'whatsapp-image-2026-05-18-at-16-40-52-2');
        const img3 = records.find(r => r.slug === 'whatsapp-image-2026-05-18-at-16-40-52-3');
        if (!img1 || !img2 || !img3) return null;

        return (
          <section className="bg-ink py-16 border-b border-white/[0.06]">
            <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
              <h2 className="font-serif font-light text-white text-display-sm mb-8 tracking-[-0.015em] italic">
                On location with international crews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[img1, img2, img3].map((img) => (
                  <div key={img.slug} className="relative aspect-[4/3] rounded-[4px] overflow-hidden shadow-xl border border-white/[0.05]">
                    <PremiumImage
                      assets={img.assets}
                      altText={img.seoDescription || img.altText}
                      dominantColor={img.dominantColors[0]}
                      className="w-full h-full object-cover hover:scale-[1.025] transition-transform duration-700 ease-out-expo"
                      useFullResolution={false}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* SAWLA TOURS */}
      <section className="bg-warm py-14">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[720px]">
            <h2 className="font-serif font-light text-ink text-display-sm mb-5 tracking-[-0.015em]">
              Our relationship with Sawla Tours
            </h2>
            <p className="text-[14px] font-light text-steel leading-[1.8] mb-4">
              Sawla Tours is the parent operation from which Sawla Films developed. It is an Ethiopia-based specialist travel and expedition company that has operated across the country for over a decade.
            </p>
            <p className="text-[14px] font-light text-steel leading-[1.8] mb-5">
              Sawla Tours provides the infrastructure that makes certain Sawla Films services possible: field vehicles, experienced drivers, accommodation connections, expedition logistics, remote-area access relationships, guides, and the practical field knowledge that comes from years of operating in challenging environments. Many of the relationships that open doors for film productions were built through Sawla Tours long before those productions arrived.
            </p>
            <a href={SITE.sisterSite} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] font-medium text-teal-mid tracking-[0.05em] border-b border-teal-mid/30 pb-0.5 hover:border-teal-mid transition-colors">
              Visit Sawla Tours →
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ash py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden="true" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="max-w-[540px]">
            <h2 className="font-serif font-light text-white text-display-md italic leading-[1.2] mb-4">Work with us on your Ethiopia production</h2>
            <p className="text-[14px] font-light text-white/50 leading-[1.8] mb-7">
              Share your project type, dates, locations, crew size, and any access or complexity considerations. We will respond with practical next steps for permits, logistics, access, and on-ground support.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Link href="/request-a-quote" className="inline-flex items-center gap-2 bg-ember text-white text-[12px] font-medium tracking-[0.07em] uppercase px-7 py-3.5 rounded-[2px] hover:bg-ember-glow transition-all hover:-translate-y-px">
                Request a Fixer / Get a Quote
              </Link>
            </div>
            <p className="text-[11px] text-white/28">{SITE.email} &nbsp;|&nbsp; {SITE.whatsapp1}</p>
          </div>
        </div>
      </section>

    </div>
  )
}
