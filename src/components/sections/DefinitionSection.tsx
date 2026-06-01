import { PremiumImage } from '@/components/ui/PremiumImage'
import galleryData from '@/data/gallery.json'
import { FullMediaRecord } from '@/types/gallery'

export function DefinitionSection() {
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
    (item) => item.slug === 'fiml-crew-in-action-upscaled-photogrid' || item.labelName === 'fiml-crew-in-action-upscaled-photogrid'
  ) || records[0];

  return (
    <section
      className="bg-warm py-10 md:py-16 border-b border-black/[0.07]"
      aria-labelledby="def-title"
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 items-center">
          <div className="flex gap-0 items-stretch max-w-[760px] reveal">
            {/* Vertical label */}
            <div
              className="flex-shrink-0 flex items-center pr-5 border-r border-ember"
              aria-hidden="true"
            >
              <span
                className="text-[9px] font-medium text-ember tracking-[0.16em] uppercase"
                style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
              >
                What is a film fixer
              </span>
            </div>
            {/* Content */}
            <div className="pl-7">
              <h2
                id="def-title"
                className="font-serif font-light text-ink text-display-sm italic mb-2.5 leading-[1.3]"
              >
                A film fixer is the person who makes the impossible shot, possible.
              </h2>
              <p className="text-body-md font-light text-steel leading-[1.8]">
                A film fixer handles permits, logistics, access, local crew, and on-ground
                coordination for international productions filming abroad. In Ethiopia — where
                approvals span multiple federal, regional, and site-level authorities — your fixer
                turns a location wish list into approved, scheduled shoot days. On a shoot in
                Ethiopia, your film fixer is the person who makes your production move.
              </p>
            </div>
          </div>
          
          {/* Image */}
          {record && (
            <div className="hidden md:block w-full aspect-[4/5] rounded-[4px] overflow-hidden shadow-lg border border-black/[0.05] reveal reveal-delay-200">
              <PremiumImage
                assets={record.assets}
                altText={record.altDescription || record.seoDescription || record.altText}
                dominantColor={record.dominantColors[0]}
                className="w-full h-full object-cover"
                useFullResolution={false}
                sizes="300px"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
