import { PremiumImage } from '@/components/ui/PremiumImage'
import metadataJson from '@/data/metadata.json'
import { FullMediaRecord } from '@/types/gallery'

export function CinematicGallerySection() {
  const records = (metadataJson as { records: FullMediaRecord[] }).records;

  // Select 4 stunning production and landscape images
  const galleryItems = [
    {
      record: records.find((r) => r.slug === 'erta-ale'),
      title: 'Erta Ale Volcano',
      location: 'Danakil Depression, Afar',
      span: 'md:col-span-7 aspect-[16/10]',
    },
    {
      record: records.find((r) => r.slug === 'img-2106'),
      title: 'Highland Expeditions',
      location: 'Simien Mountains',
      span: 'md:col-span-5 aspect-[4/5]',
    },
    {
      record: records.find((r) => r.slug === 'camp'),
      title: 'Remote Field Camp',
      location: 'Expedition Logistics',
      span: 'md:col-span-5 aspect-[4/5]',
    },
    {
      record: records.find((r) => r.slug === 'img-20140101-040751'),
      title: 'Scouting & Recce',
      location: 'Ethiopian Highlands',
      span: 'md:col-span-7 aspect-[16/10]',
    },
  ].filter(item => item.record);

  if (galleryItems.length === 0) return null;

  return (
    <section
      className="bg-ink py-[clamp(56px,8vw,100px)] border-b border-white/[0.06] relative"
      aria-labelledby="gallery-section-title"
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        {/* Header */}
        <div className="mb-12 reveal">
          <div className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] uppercase text-ember mb-3.5">
            <span className="w-5 h-px bg-ember" aria-hidden="true" />
            Field Footage & Locations
          </div>
          <h2
            id="gallery-section-title"
            className="font-serif font-light text-white text-display-md italic leading-[1.2] max-w-[600px]"
          >
            Cinematic landscapes and on-location production
          </h2>
          <p className="text-[13px] font-light text-white/50 max-w-[480px] mt-3">
            Real environments, logistics infrastructure, and remote scouting work from across all regional states of Ethiopia.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {galleryItems.map((item, i) => {
            const r = item.record!;
            return (
              <div
                key={r.slug}
                className={`reveal reveal-delay-${Math.min((i + 1) * 100, 500)} ${item.span} relative group rounded-[4px] overflow-hidden shadow-2xl border border-white/[0.05]`}
              >
                {/* Image */}
                <PremiumImage
                  assets={r.assets}
                  altText={r.seoDescription || r.altText}
                  dominantColor={r.dominantColors[0]}
                  className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-700 ease-out-expo"
                  useFullResolution={false}
                  sizes={item.span.includes('md:col-span-7') ? '(max-width: 768px) 100vw, 720px' : '(max-width: 768px) 100vw, 500px'}
                />

                {/* Ambient dark bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                {/* Overlaid details */}
                <div className="absolute bottom-5 left-5 right-5 z-10 pointer-events-none">
                  <span className="block text-[9px] font-medium text-ember tracking-[0.14em] uppercase mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-serif text-[18px] font-light text-white italic leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
