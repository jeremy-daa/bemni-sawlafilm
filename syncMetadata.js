const fs = require('fs');
const path = require('path');

const galleryIndexPath = path.join(__dirname, 'src', 'data', 'gallery-index.json');
const metadataPath = path.join(__dirname, 'src', 'data', 'metadata.json');

if (!fs.existsSync(galleryIndexPath)) {
  console.error("❌ gallery-index.json not found!");
  process.exit(1);
}

// Read raw final records (array or object)
let rawData = JSON.parse(fs.readFileSync(galleryIndexPath, 'utf-8'));
let records = [];

if (Array.isArray(rawData)) {
  records = rawData;
} else if (rawData && Array.isArray(rawData.records)) {
  records = rawData.records;
} else {
  console.error("❌ Invalid format of gallery-index.json!");
  process.exit(1);
}

console.log(`Loaded ${records.length} records from gallery-index.json`);

// 1. Calculate categories with counts
const categoryCounts = {};
records.forEach(r => {
  if (r.category) {
    categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
  }
});
const categories = Object.keys(categoryCounts).map(cat => ({
  category: cat,
  count: categoryCounts[cat]
})).sort((a, b) => b.count - a.count);

// 2. Calculate landmarks with counts
const landmarkCounts = {};
records.forEach(r => {
  if (r.landmark) {
    landmarkCounts[r.landmark] = (landmarkCounts[r.landmark] || 0) + 1;
  }
});
const landmarks = Object.keys(landmarkCounts).map(lm => ({
  landmark: lm,
  count: landmarkCounts[lm]
})).sort((a, b) => b.count - a.count);

// 3. Build the comprehensive metadata object
const metadataPayload = {
  generatedAt: new Date().toISOString(),
  totalRecords: records.length,
  categories,
  landmarks,
  records
};

// 4. Overwrite src/data/metadata.json
fs.writeFileSync(metadataPath, JSON.stringify(metadataPayload, null, 2), 'utf-8');
console.log(`✅ Successfully updated ${metadataPath}`);

// 5. Overwrite src/data/gallery-index.json with the wrapped format to match existing expectations
fs.writeFileSync(galleryIndexPath, JSON.stringify(metadataPayload, null, 2), 'utf-8');
console.log(`✅ Successfully updated ${galleryIndexPath} with wrapped records format`);
