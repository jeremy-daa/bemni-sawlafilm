const fs = require('fs');
const path = require('path');

const pagesToUpdate = [
  { file: 'drone-permits-ethiopia/page.tsx', slug: 'img-2411' },
  { file: 'customs-clearance-film-equipment-ethiopia/page.tsx', slug: 'img-2106' },
  { file: 'location-scouting-ethiopia/page.tsx', slug: 'whatsapp-image-2026-05-18-at-16-40-39' },
  { file: 'local-crew-translators-ethiopia/page.tsx', slug: 'whatsapp-image-2026-05-18-at-16-40-52-3' },
  { file: 'filming-security-access-ethiopia/page.tsx', slug: 'img-3515' },
  { file: 'on-ground-fixer-ethiopia/page.tsx', slug: 'whatsapp-image-2026-05-18-at-16-40-38-1' },
  { file: 'vip-celebrity-handling-ethiopia/page.tsx', slug: 'nc1a2043-1' },
  { file: 'contact/page.tsx', slug: 'img-7002' },
  { file: 'request-a-quote/page.tsx', slug: 'whatsapp-image-2026-05-18-at-16-40-44' },
  { file: 'ethiopia-film-production-costs/page.tsx', slug: 'whatsapp-image-2026-05-18-at-16-40-38-3' },
  { file: 'ethiopia-filming-guide/page.tsx', slug: 'whatsapp-image-2026-05-18-at-16-40-38' },
  { file: 'best-time-to-film-in-ethiopia/page.tsx', slug: 'img-20140101-064257-1' },
  { file: 'what-to-film-in-ethiopia/page.tsx', slug: 'whatsapp-image-2026-05-18-at-16-40-58-1' },
  { file: 'bringing-film-equipment-to-ethiopia/page.tsx', slug: 'whatsapp-image-2026-05-18-at-16-40-56-2' }
];

for (const { file, slug } of pagesToUpdate) {
  const filePath = path.join(__dirname, 'src/app', file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filePath}, does not exist`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // If already modified, skip
  if (content.includes('PremiumImage')) {
    console.log(`Skipping ${file}, already modified`);
    continue;
  }
  
  // Add imports right after ServicePageLayout import or PageLayout import
  content = content.replace(
    /(import\s+.*from\s+'@\/components\/shared\/ServicePageLayout'.*\n|import\s+.*from\s+'@\/components\/shared\/PageLayout'.*\n)/,
    `$1\nimport { PremiumImage } from '@/components/ui/PremiumImage'\nimport metadataJson from '@/data/metadata.json'\nimport { FullMediaRecord } from '@/types/gallery'\n`
  );
  
  // Inject function body vars
  content = content.replace(
    /export default function (\w+)\(\) \{/,
    `export default function $1() {\n  const records = (metadataJson as { records: FullMediaRecord[] }).records;\n  const imageRecord = records.find(item => item.slug === '${slug}');\n`
  );
  
  // Inject into heroBody
  // heroBody={ ... } -> heroBody={ ... {imageRecord && (...)} }
  const injection = `\n          {imageRecord && (
            <div className="mt-8 w-full aspect-[16/7] md:aspect-[21/9] rounded-[4px] overflow-hidden shadow-md border border-black/[0.05]">
              <PremiumImage
                assets={imageRecord.assets}
                altText={imageRecord.seoDescription || imageRecord.altText}
                dominantColor={imageRecord.dominantColors[0]}
                className="w-full h-full object-cover"
                useFullResolution={false}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}`;
          
  // Find </p> right before closing </> in heroBody
  content = content.replace(
    /(heroBody=\{\s*<>\s*([\s\S]*?)<\/p>\s*)<\/>/m,
    `$1${injection}\n        </>`
  );

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
