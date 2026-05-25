import type { Metadata } from 'next'
import { PremiumImage } from '@/components/ui/PremiumImage'
import metadataJson from '@/data/metadata.json'
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
  const records = (metadataJson as { records: FullMediaRecord[] }).records;
  const imageRecord = records.find(item => item.slug === 'whatsapp-image-2026-05-18-at-16-40-44');

  return (
    <div className="min-h-screen bg-warm">

      {/* Header */}
      <div className="bg-ink pt-28 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />
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
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)] py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Form — 2/3 width */}
          <div className="lg:col-span-2">
            <RequestForm />
          </div>

          {/* Sidebar — 1/3 width */}
          <aside className="lg:col-span-1">
            {/* What you receive */}
            <div className="bg-ink rounded-[4px] p-6 mb-5">
              <h2 className="font-serif font-light text-gold text-[17px] italic mb-4 leading-[1.4]">
                What we send back
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  'Initial permit and access considerations for your route',
                  'Location and route feasibility questions',
                  'Customs and equipment notes for your kit list',
                  'Drone-planning restrictions to verify',
                  'Logistics risks, buffers, and next-step plan',
                  'What we need to quote accurately for your production',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0 mt-1.5" />
                    <span className="text-[12px] font-light text-white/50 leading-[1.55]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct contact */}
            <div className="bg-white border border-black/[0.07] rounded-[4px] p-5 mb-5">
              <h3 className="text-[12px] font-medium text-ink mb-3">Direct contact</h3>
              <div className="space-y-2.5">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-[12px] font-light text-steel hover:text-ember transition-colors"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-ember/10 flex-shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp1Raw}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[12px] font-light text-steel hover:text-ember transition-colors"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-[#25D366]/20 flex-shrink-0" aria-hidden="true" />
                  WhatsApp {SITE.whatsapp1}
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp2Raw}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[12px] font-light text-steel hover:text-ember transition-colors"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-[#25D366]/15 flex-shrink-0" aria-hidden="true" />
                  WhatsApp {SITE.whatsapp2}
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
