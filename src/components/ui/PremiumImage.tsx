'use client';

import { useState } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { AssetPaths } from '@/types/gallery';

interface PremiumImageProps {
  assets: AssetPaths;
  altText: string;
  dominantColor?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  useFullResolution?: boolean;
}

export function PremiumImage({
  assets,
  altText,
  dominantColor = '#1C1C1C',
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  useFullResolution = false,
}: PremiumImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Map the path to our public directory structure
  const getAssetPath = (path: string) => `/assets/images${path}`;

  const mainSrc = getAssetPath(useFullResolution ? assets.full : assets.medium);
  const thumbSrc = getAssetPath(assets.thumb);

  return (
    <div
      className={clsx('relative overflow-hidden', className)}
      style={{ backgroundColor: dominantColor }}
    >
      {/* Thumbnail placeholder (blurred) */}
      <Image
        src={thumbSrc}
        alt={altText}
        fill
        className={clsx(
          'object-cover transition-opacity duration-700 ease-out',
          isLoaded ? 'opacity-0' : 'opacity-100'
        )}
        style={{ filter: 'blur(20px)', transform: 'scale(1.1)' }}
        quality={10}
        priority={priority}
      />

      {/* Main Image */}
      <Image
        src={mainSrc}
        alt={altText}
        fill
        className={clsx(
          'object-cover transition-opacity duration-[1.2s] ease-out-expo',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsLoaded(true)}
        sizes={sizes}
        priority={priority}
        quality={85}
      />
    </div>
  );
}
