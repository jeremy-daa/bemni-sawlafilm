'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { GalleryRecord, GalleryCategory } from '@/types/gallery';
import { PremiumImage } from '@/components/ui/PremiumImage';
import { clsx } from 'clsx';

const CATEGORIES: { label: string; value: GalleryCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Nature', value: 'nature' },
  { label: 'Cultural', value: 'cultural' },
  { label: 'Production', value: 'production' },
  { label: 'Portrait', value: 'portrait' },
  { label: 'Aerial', value: 'aerial' },
];

interface GalleryGridProps {
  items: GalleryRecord[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        item.slug.toLowerCase().includes(query) ||
        item.subcategory.toLowerCase().includes(query) ||
        item.landmark.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [items, activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={clsx(
                'text-[11px] font-medium tracking-[0.08em] uppercase px-4 py-2 rounded-[2px] transition-all duration-300',
                activeCategory === cat.value
                  ? 'bg-ember text-white'
                  : 'bg-transparent text-white/50 hover:text-white hover:bg-white/5'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="w-full md:w-auto relative">
          <input
            type="text"
            placeholder="Search locations, subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-[280px] bg-white/5 border border-white/10 text-white text-[12px] font-light px-4 py-2.5 rounded-[2px] outline-none focus:border-ember/50 focus:bg-white/10 transition-colors placeholder:text-white/30"
          />
        </div>
      </div>

      {/* Grid */}
      {filteredItems.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-white/40 font-light text-[14px]">No images found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 auto-rows-[280px] sm:auto-rows-[320px] grid-flow-dense">
          {filteredItems.map((item, idx) => {
            // "Random and artistic" bento-box style spans based on index
            // We use a repeating pattern to create a beautiful, dynamic mosaic layout
            let spanClasses = "col-span-1 row-span-1"; // Default small block
            
            // Prevent deep ragged bottoms by avoiding row-span-2 on the very last few items
            const isNearEnd = idx >= filteredItems.length - 6;

            const pattern = idx % 12;
            if (pattern === 0 && !isNearEnd) {
              spanClasses = "col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 sm:row-span-2"; // Huge feature block
            } else if ((pattern === 3 || pattern === 8) && !isNearEnd) {
              spanClasses = "col-span-1 sm:col-span-1 lg:col-span-1 row-span-1 sm:row-span-2"; // Tall portrait
            } else if (pattern === 5 || pattern === 10) {
              spanClasses = "col-span-1 sm:col-span-2 lg:col-span-2 row-span-1"; // Wide landscape
            }

            return (
              <Link
                key={item.id}
                href={`/gallery/${item.labelName || item.slug}`}
                className={`group relative block w-full h-full overflow-hidden bg-ink rounded-[2px] ${spanClasses}`}
              >
                <PremiumImage
                  assets={item.assets}
                  altText={item.altDescription || item.altText}
                  dominantColor={item.dominantColors[0]}
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out-expo"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-6">
                  <span className="text-ember text-[10px] font-medium tracking-[0.15em] uppercase mb-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out">
                    {item.category}
                  </span>
                  <h3 className="text-white text-[18px] font-serif leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                    {item.subcategory}
                  </h3>
                  {item.landmark !== 'Unknown' && (
                    <p className="text-white/60 text-[12px] font-light mt-1.5 flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 ease-out">
                      <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.landmark}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
