import type { Metadata } from 'next'
import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'
import { RequestForm }  from './RequestForm'
import { SITE }        from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Request a Film Fixer — Get a Quote | Sawla Films Ethiopia',
  description:
    'Share your production brief with Sawla Films. We will respond with permit considerations, logistics drivers, access questions, drone restrictions, and a realistic next-step plan.',
  alternates: { canonical: '/request-a-quote' },
}

export default function RequestPage() {
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
  const imageRecord = records.find(item => item.slug === 'whatsapp-image-2026-05-18-at-16-40-44' || item.labelName === 'whatsapp-image-2026-05-18-at-16-40-44') || records[0];

  return (
    <div className="min-h-screen bg-warm">

      {/* Header */}
      <div className="bg-ink pt-[80px] pb-32 relative overflow-hidden">
        {imageRecord && (
          <div className="absolute inset-0 z-0">
            <PremiumImage
              assets={imageRecord.assets}
              altText={imageRecord.seoDescription || imageRecord.altText}
              dominantColor={imageRecord.dominantColors[0]}
              className="w-full h-full object-cover"
              useFullResolution={true}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-ink/85 backdrop-saturate-[1.1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          </div>
        )}
        <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
          <div className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase text-ember mb-4">
            <span className="w-5 h-px bg-ember" aria-hidden="true" />
            Request a fixer
          </div>
          <h1 className="font-serif font-light text-white text-display-lg leading-[1.1] tracking-[-0.02em] mb-4 max-w-[520px]">
            Tell us about your<br />
            <em className="text-gold not-italic">Ethiopia production</em>
          </h1>
          <p className="text-[14px] font-light text-white/45 leading-[1.75] max-w-[480px]">
            You do not need a finished plan. A location list, rough dates, crew size, and
            subject matter is enough to begin. We respond with what you need to move forward.
          </p>
        </div>
      </div>

      {/* Form + sidebar */}
      <div className="relative z-20 -mt-24 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)] pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

          {/* Form — 2/3 width */}
          <div className="lg:col-span-2 bg-white rounded-[6px] shadow-2xl shadow-black/[0.04] border border-black/[0.04] p-6 sm:p-10">
            <RequestForm />
          </div>

          {/* Sidebar — 1/3 width */}
          <aside className="lg:col-span-1 lg:sticky lg:top-24 space-y-6">
            {/* What you receive */}
            <div className="bg-ink rounded-[6px] p-7 shadow-xl shadow-black/[0.06] border border-white/[0.05] relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '24px 24px' }} aria-hidden="true" />
              <div className="relative z-10">
                <h2 className="font-serif font-light text-gold text-[18px] italic mb-5 leading-[1.4]">
                  What we send back
                </h2>
                <ul className="flex flex-col gap-3.5">
                  {[
                    'Initial permit and access considerations for your route',
                    'Location and route feasibility questions',
                    'Customs and equipment notes for your kit list',
                    'Drone-planning restrictions to verify',
                    'Logistics risks, buffers, and next-step plan',
                    'What we need to quote accurately for your production',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-ember/15 text-ember flex items-center justify-center mt-0.5">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="text-[12.5px] font-light text-white/60 leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct contact */}
            <div className="bg-white rounded-[6px] p-6 shadow-sm border border-black/[0.05]">
              <h3 className="text-[13px] font-medium text-ink mb-4">Direct contact</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 p-2.5 rounded-[4px] hover:bg-ash/[0.02] transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-ash/[0.04] flex-shrink-0 flex items-center justify-center group-hover:bg-ember/10 group-hover:text-ember transition-colors text-steel">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span className="text-[13px] font-light text-steel group-hover:text-ink transition-colors">{SITE.email}</span>
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp1Raw}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-[4px] hover:bg-ash/[0.02] transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex-shrink-0 flex items-center justify-center text-[#25D366]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </span>
                  <span className="text-[13px] font-light text-steel group-hover:text-ink transition-colors">WhatsApp {SITE.whatsapp1}</span>
                </a>
              </div>
            </div>

            {/* NDA note */}
            <p className="text-[10px] font-light text-silver/70 italic leading-[1.65] px-1">
              All production details are handled with full confidentiality. NDA-safe by default.
              References shared privately where appropriate.
            </p>
          </aside>
        </div>
      </div>
    </div>
  )
}
