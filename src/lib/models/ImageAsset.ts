import mongoose from 'mongoose';

const ImageAssetSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String },
  originalName: { type: String },
  originalPath: { type: String },
  trueFormat: { type: String },
  sizeBytes: { type: Number },
  belowSizeThreshold: { type: Boolean },
  flagForReview: { type: Boolean },
  pipelineFlags: [{ type: String }],
  landmark: { type: String },
  category: { type: String },
  subcategory: { type: String },
  altText: { type: String },
  seoDescription: { type: String },
  dominantColors: [{ type: String }],
  composition: { type: String },
  mood: { type: String },
  qualityNotes: { type: String },
  assets: {
    full: { type: String },
    medium: { type: String },
    thumb: { type: String },
  },
  pipeline: {
    ingestedAt: { type: String },
    analyzedAt: { type: String },
    transcodedAt: { type: String },
    modelUsed: { type: String },
    analysisAttempts: { type: Number },
    sha256: { type: String },
  },
  // Labeling specific fields
  labelName: { type: String, default: '' },
  altDescription: { type: String, default: '' },
  flaggedForDeletion: { type: Boolean, default: false },
  isLabeled: { type: Boolean, default: false },
}, {
  timestamps: true,
});

export default mongoose.models.ImageAsset || mongoose.model('ImageAsset', ImageAssetSchema);
