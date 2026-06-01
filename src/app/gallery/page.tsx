import { Metadata } from 'next';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { PremiumImage } from '@/components/ui/PremiumImage';
import galleryData from '@/data/gallery.json';
import { GalleryRecord, FullMediaRecord } from '@/types/gallery';

export const metadata: Metadata = {
  title: 'Gallery | Sawla Films Ethiopia',
  description: 'Explore our comprehensive location and production gallery featuring landscapes, cultural documentation, aerials, and our film crews in action across Ethiopia.',
};

export default function GalleryPage() {
  // Extract the records array from the JSON payload and filter out those flagged for deletion
  const items = (galleryData.records as (GalleryRecord & { flaggedForDeletion?: boolean })[])
    .filter(item => !item.flaggedForDeletion)
    .map(item => {
      const activeSlug = item.labelName || item.slug;
      return {
        ...item,
        assets: {
          full: `/${activeSlug}/${activeSlug}-full.webp`,
          medium: `/${activeSlug}/${activeSlug}-medium.webp`,
          thumb: `/${activeSlug}/${activeSlug}-thumb.avif`
        }
      };
    });
  const imageRecord = items.find(item => item.slug === 'whatsapp-image-2026-05-18-at-16-40-59-9' || item.labelName === 'whatsapp-image-2026-05-18-at-16-40-59-9') || items[0];

  return (
    <div className="min-h-screen bg-ink pt-[120px] pb-24 relative">
      
      {/* Cinematic Hero Background */}
      <div className="absolute top-0 left-0 right-0 h-[500px] md:h-[600px] z-0 overflow-hidden pointer-events-none">
        {imageRecord && (
          <>
            <PremiumImage
              assets={imageRecord.assets}
              altText={(imageRecord as FullMediaRecord).altDescription || (imageRecord as FullMediaRecord).seoDescription || imageRecord.altText}
              dominantColor={imageRecord.dominantColors[0]}
              className="w-full h-full object-cover"
              useFullResolution={true}
              sizes="100vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-ink/85 backdrop-saturate-[1.1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
          </>
        )}
        {/* Fallback Grid Pattern if image fails */}
        {!imageRecord && (
           <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        )}
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-[680px]">
          <div className="flex items-center gap-2.5 text-[10px] font-medium tracking-[0.2em] uppercase text-ember mb-5">
            <span className="w-6 h-px bg-ember" aria-hidden="true" />
            Media Assets
          </div>
          <h1 className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] mb-6 text-[clamp(36px,5vw,56px)]">
            Production & Location <em className="text-gold not-italic">Gallery</em>
          </h1>
          <p className="text-[14px] font-light text-white/60 leading-[1.75]">
            A curated look at our operations across Ethiopia—from remote tribal access in the Omo Valley to volcanic landscapes in Afar, showcasing the breadth of locations and the reality of our on-ground production support.
          </p>
        </div>

        {/* Client Grid */}
        <GalleryGrid items={items} />

      </div>
    </div>
  );
}
