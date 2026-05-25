export type GalleryCategory = 'nature' | 'cultural' | 'production' | 'portrait' | 'aerial' | string;

export interface AssetPaths {
  full: string;
  medium: string;
  thumb: string;
}

export interface GalleryRecord {
  id: string;
  slug: string;
  landmark: string;
  category: GalleryCategory;
  subcategory: string;
  altText: string;
  dominantColors: string[];
  composition: string;
  mood: string;
  assets: AssetPaths;
}

export interface FullMediaRecord extends GalleryRecord {
  seoDescription: string;
}
