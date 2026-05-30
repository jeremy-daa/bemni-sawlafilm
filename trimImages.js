const fs = require('fs');
const path = require('path');

const galleryIndexPath = path.join(__dirname, 'src', 'data', 'gallery-index.json');
const imagesDir = path.join(__dirname, 'public', 'assets', 'images');

try {
  // 1. Read the gallery index to get all valid slugs
  const data = fs.readFileSync(galleryIndexPath, 'utf8');
  const galleryData = JSON.parse(data);

  const validFolderNames = new Set();
  
  galleryData.records.forEach(record => {
    // Folders are named after either slug or id
    if (record.slug) validFolderNames.add(record.slug);
    if (record.id) validFolderNames.add(record.id);
  });

  console.log(`Found ${validFolderNames.size} unique valid assets in gallery-index.json.`);

  // 2. Read the actual images directory
  if (!fs.existsSync(imagesDir)) {
    console.error(`Directory not found: ${imagesDir}`);
    process.exit(1);
  }

  const items = fs.readdirSync(imagesDir);

  let deletedCount = 0;
  let keptCount = 0;

  // 3. Compare and delete
  items.forEach(item => {
    const itemPath = path.join(imagesDir, item);
    const stat = fs.statSync(itemPath);
    
    // Only process directories, skip files like README.txt
    if (stat.isDirectory()) {
      if (!validFolderNames.has(item)) {
        console.log(`Deleting unused folder: ${item}`);
        // Recursively delete the folder and its contents
        fs.rmSync(itemPath, { recursive: true, force: true });
        deletedCount++;
      } else {
        keptCount++;
      }
    }
  });

  console.log(`\n--- Trim Complete ---`);
  console.log(`✅ Kept ${keptCount} valid folders.`);
  console.log(`🗑️ Deleted ${deletedCount} unused/duplicate folders.`);

} catch (err) {
  console.error("An error occurred during trimming:", err);
}
