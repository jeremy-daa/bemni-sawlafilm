const fs = require('fs');
const path = require('path');

const galleryFile = path.join(__dirname, 'src', 'data', 'gallery.json');
const outputFile = path.join(__dirname, 'src', 'data', 'gallery-index.json');
const imagesDir = path.join(__dirname, 'public', 'assets', 'images');

if (!fs.existsSync(galleryFile)) {
    console.error("❌ gallery.json not found!");
    process.exit(1);
}

const data = JSON.parse(fs.readFileSync(galleryFile, 'utf-8'));
const records = data.records;

let deletedCount = 0;
let renamedCount = 0;
const finalRecords = [];

const usedSlugs = new Set();

for (const record of records) {
    const oldId = record.id;

    // Ensure unique slug
    let baseSlug = record.labelName || oldId;
    let newId = baseSlug;
    let counter = 1;
    while (usedSlugs.has(newId)) {
        newId = `${baseSlug}-${counter}`;
        counter++;
    }
    usedSlugs.add(newId);

    const oldFolderPath = path.join(imagesDir, oldId);
    const newFolderPath = path.join(imagesDir, newId);

    // 1. Handle Deletions
    if (record.flaggedForDeletion) {
        if (fs.existsSync(oldFolderPath)) {
            fs.rmSync(oldFolderPath, { recursive: true, force: true });
            console.log(`🗑️ Deleted folder: ${oldId}`);
        } else if (fs.existsSync(newFolderPath)) {
            fs.rmSync(newFolderPath, { recursive: true, force: true });
            console.log(`🗑️ Deleted folder (already renamed): ${newId}`);
        } else {
            console.log(`⚠️ Could not find folder to delete: ${oldId} or ${newId}`);
        }
        deletedCount++;
        continue;
    }

    // 2. Handle Renames
    if (oldId !== newId) {
        if (fs.existsSync(oldFolderPath)) {
            // Ensure target doesn't exist (clean slate)
            if (!fs.existsSync(newFolderPath)) {
                fs.renameSync(oldFolderPath, newFolderPath);
            } else {
                console.log(`⚠️ Target folder unexpectedly exists, unable to rename ${oldFolderPath}`);
            }

            // Rename files inside the folder
            const filesToRename = [
                { oldSuffix: '-full.webp', newSuffix: '-full.webp' },
                { oldSuffix: '-medium.webp', newSuffix: '-medium.webp' },
                { oldSuffix: '-thumb.avif', newSuffix: '-thumb.avif' }
            ];

            for (const file of filesToRename) {
                const oldFile = path.join(newFolderPath, `${oldId}${file.oldSuffix}`);
                const newFile = path.join(newFolderPath, `${newId}${file.newSuffix}`);
                if (fs.existsSync(oldFile) && oldFile !== newFile) {
                    fs.renameSync(oldFile, newFile);
                }
            }

            console.log(`🔄 Renamed: ${oldId} ➡️ ${newId}`);
            renamedCount++;
        } else if (fs.existsSync(newFolderPath)) {
            console.log(`✅ Already renamed: ${newId}`);
            // Fix files inside just in case
            const filesToRename = [
                { oldSuffix: '-full.webp', newSuffix: '-full.webp' },
                { oldSuffix: '-medium.webp', newSuffix: '-medium.webp' },
                { oldSuffix: '-thumb.avif', newSuffix: '-thumb.avif' }
            ];
            for (const file of filesToRename) {
                const oldFile = path.join(newFolderPath, `${oldId}${file.oldSuffix}`);
                const newFile = path.join(newFolderPath, `${newId}${file.newSuffix}`);
                if (fs.existsSync(oldFile) && oldFile !== newFile) {
                    fs.renameSync(oldFile, newFile);
                }
            }
            renamedCount++; // count it since it was renamed previously
        } else {
            console.log(`⚠️ Folder not found, skipping: ${oldId}`);
        }
    }

    // 3. Update Record Metadata
    record.id = newId;
    record.slug = newId;
    record.assets = {
        full: `/${newId}/${newId}-full.webp`,
        medium: `/${newId}/${newId}-medium.webp`,
        thumb: `/${newId}/${newId}-thumb.avif`
    };

    finalRecords.push(record);
}

// Write the final records to gallery-index.json (which the frontend uses)
fs.writeFileSync(outputFile, JSON.stringify(finalRecords, null, 2));

console.log(`\n✅ Migration Complete!`);
console.log(`- Deleted Records: ${deletedCount}`);
console.log(`- Renamed Folders: ${renamedCount}`);
console.log(`- Final Records Kept: ${finalRecords.length}`);
console.log(`- Saved to: ${outputFile}`);
