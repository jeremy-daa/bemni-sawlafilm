const fs = require('fs');
const path = require('path');

const files = [
  'best-time-to-film-in-ethiopia/page.tsx',
  'bringing-film-equipment-to-ethiopia/page.tsx',
  'contact/page.tsx',
  'ethiopia-film-production-costs/page.tsx',
  'ethiopia-filming-guide/page.tsx',
  'request-a-quote/page.tsx',
  'what-to-film-in-ethiopia/page.tsx'
];

for (const file of files) {
  const filePath = path.join(__dirname, 'src/app', file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('import { PremiumImage }')) {
    content = content.replace(
      /(import\s+.*from\s+.*\n)/,
      `$1import { PremiumImage } from '@/components/ui/PremiumImage'\nimport metadataJson from '@/data/metadata.json'\nimport { FullMediaRecord } from '@/types/gallery'\n`
    );
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports for ${file}`);
  }
}
