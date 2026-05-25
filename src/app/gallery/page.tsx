import { Metadata } from 'next';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import galleryData from '@/data/gallery-index.json';
import { GalleryRecord } from '@/types/gallery';

export const metadata: Metadata = {
  title: 'Gallery | Sawla Films Ethiopia',
  description: 'Explore our comprehensive location and production gallery featuring landscapes, cultural documentation, aerials, and our film crews in action across Ethiopia.',
};

export default function GalleryPage() {
  // Extract the records array from the JSON payload
  const items = (galleryData as { records: GalleryRecord[] }).records;

  return (
    <div className="min-h-screen bg-ink pt-32 pb-24">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        
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
