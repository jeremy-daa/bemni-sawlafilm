import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'

export function ServicesSection() {
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

  const record = records.find(
    (item) => item.slug === 'film-crew-gear-at-camp' || item.labelName === 'film-crew-gear-at-camp'
  ) || records[0];

  return (
    <section
      className="bg-cream py-[clamp(56px,8vw,100px)]"
      aria-labelledby="services-title"
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">

        <div className="reveal">
          <SectionHeader
            eyebrow="Services"
            title={
              <>
                Film fixer services built<br />
                for real-world production
              </>
            }
            subtitle="Core services in Ethiopia — each one an operational discipline, not just a line item."
          />
        </div>

        {/* Panoramic Inject */}
        {record && (
          <div className="reveal w-full h-[240px] md:h-[320px] rounded-[4px] overflow-hidden mb-10 shadow-md border border-black/[0.05]">
            <PremiumImage
              assets={record.assets}
              altText={record.altDescription || record.seoDescription || record.altText}
              dominantColor={record.dominantColors[0]}
              className="w-full h-full object-cover"
              useFullResolution={false}
              sizes="(max-width: 1240px) 100vw, 1240px"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {SERVICES.map((svc, i) => (
            <article
              key={svc.num}
              className={`reveal reveal-delay-${Math.min((i + 1) * 100, 500)} group relative bg-warm border border-black/[0.07] border-t-[2px] border-t-ember rounded-[3px] p-5 overflow-hidden transition-all duration-250 ease-out-expo hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]`}
            >
              {/* Bottom slide accent */}
              <span className="svc-card-bottom" aria-hidden="true" />

              <span className="block font-serif text-[11px] text-ember italic mb-3">
                {svc.num}
              </span>
              <h3 className="text-[13px] font-medium text-ink mb-2 leading-[1.3]">
                {svc.title}
              </h3>
              <p className="text-[12px] font-light text-silver leading-[1.65] mb-3.5">
                {svc.desc}
              </p>
              <Link
                href={svc.href}
                className="arrow-link text-[10px] font-medium text-ember tracking-[0.06em] uppercase"
              >
                View service
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-7 text-center reveal">
          <Link
            href="/ethiopia-film-fixer-services"
            className="inline-flex items-center gap-2 bg-transparent text-steel border border-black/15 text-[11px] font-medium tracking-[0.06em] uppercase px-5 py-2.5 rounded-[2px] hover:border-ember hover:text-ember transition-all duration-200"
          >
            Explore all Ethiopia film fixer services →
          </Link>
        </div>
      </div>
    </section>
  )
}
