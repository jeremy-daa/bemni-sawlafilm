import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PremiumImage } from '@/components/ui/PremiumImage';
import metadataJson from '@/data/metadata.json';
import { FullMediaRecord } from '@/types/gallery';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Helper to find the record
function getRecord(slug: string): FullMediaRecord | undefined {
  return (metadataJson as { records: FullMediaRecord[] }).records.find((item) => item.slug === slug);
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const record = getRecord(slug);

  if (!record) {
    return { title: 'Not Found | Sawla Films' };
  }

  const title = `${record.subcategory} - ${record.landmark !== 'Unknown' ? record.landmark : 'Ethiopia'} | Sawla Films Gallery`;
  
  return {
    title,
    description: record.seoDescription,
    openGraph: {
      title,
      description: record.seoDescription,
      images: [
        {
          url: `/assets/images${record.assets.medium}`,
          width: 960,
          height: 640,
          alt: record.altText,
        },
      ],
    },
  };
}

// Generate static params if we want to pre-build these routes
export async function generateStaticParams() {
  return (metadataJson as { records: FullMediaRecord[] }).records.map((record) => ({
    slug: record.slug,
  }));
}

export default async function GalleryDetailPage({ params }: Props) {
  const { slug } = await params;
  const record = getRecord(slug);

  if (!record) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-ink pt-[80px] pb-16 flex flex-col">
      
      {/* Top Nav Bar / Back Button */}
      <div className="w-full max-w-[1400px] mx-auto px-[clamp(20px,4vw,48px)] py-6 flex items-center justify-between">
        <Link 
          href="/gallery" 
          className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.08em] uppercase text-white/50 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Gallery
        </Link>
        <div className="flex items-center gap-2">
           <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-ember border border-ember/30 px-2 py-0.5 rounded-[2px]">
             {record.category}
           </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[1400px] mx-auto px-[clamp(20px,4vw,48px)] grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-10 xl:gap-16 items-start">
        
        {/* Left: Huge Image Display */}
        <div className="w-full bg-ash rounded-[4px] overflow-hidden border border-white/[0.04] shadow-2xl relative flex items-center justify-center min-h-[50vh]">
           <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[75vh]">
              <PremiumImage
                assets={record.assets}
                altText={record.altText}
                dominantColor={record.dominantColors[0]}
                className="w-full h-full object-contain"
                useFullResolution={true}
                sizes="100vw"
                priority={true}
              />
           </div>
        </div>

        {/* Right: Specs Sidebar */}
        <div className="w-full flex flex-col pb-12 lg:sticky lg:top-[120px]">
          
          <h1 className="font-serif font-light text-white text-[clamp(28px,3vw,42px)] leading-[1.1] tracking-[-0.01em] mb-4">
            {record.subcategory}
          </h1>

          <div className="flex items-center gap-2 text-[13px] font-light text-white/60 mb-8 pb-8 border-b border-white/[0.06]">
            <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {record.landmark !== 'Unknown' ? record.landmark : 'Ethiopia Region'}
          </div>

          <p className="text-[14px] font-light text-white/70 leading-[1.8] mb-10">
            {record.seoDescription}
          </p>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
            <div>
              <p className="text-[9px] font-medium text-white/30 tracking-[0.15em] uppercase mb-1.5">Mood</p>
              <p className="text-[13px] font-light text-white capitalize">{record.mood}</p>
            </div>
            <div>
              <p className="text-[9px] font-medium text-white/30 tracking-[0.15em] uppercase mb-1.5">Composition</p>
              <p className="text-[13px] font-light text-white capitalize">{record.composition}</p>
            </div>
            <div>
              <p className="text-[9px] font-medium text-white/30 tracking-[0.15em] uppercase mb-1.5">Category</p>
              <p className="text-[13px] font-light text-white capitalize">{record.category}</p>
            </div>
            <div>
              <p className="text-[9px] font-medium text-white/30 tracking-[0.15em] uppercase mb-1.5">Resolution</p>
              <p className="text-[13px] font-light text-white">Full / WebP</p>
            </div>
          </div>

          {/* Dominant Colors */}
          <div>
            <p className="text-[9px] font-medium text-white/30 tracking-[0.15em] uppercase mb-3">Color Palette</p>
            <div className="flex items-center gap-3">
              {record.dominantColors.map((color, idx) => (
                <div 
                  key={`${color}-${idx}`}
                  className="w-8 h-8 rounded-full border border-white/10 shadow-inner"
                  style={{ backgroundColor: color }}
                  title={color}
                  aria-label={`Color swatch ${color}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
