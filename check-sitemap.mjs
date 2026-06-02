import fs from 'fs';
import http from 'http';

// Configuration
const SITEMAP_PATH = './sitemap.xml';
const PRODUCTION_URL = 'https://www.ethiopiafilmfixer.com';
const LOCAL_URL = 'http://localhost:3000';

async function checkUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  console.log('Checking sitemap links against localhost:3000...');
  
  let sitemapContent;
  try {
    // We can fetch from localhost:3000/sitemap.xml to be perfectly up to date, 
    // or read the local sitemap.xml file. 
    // Using HTTP fetch to test the dynamic Next.js sitemap route directly:
    console.log(`Fetching sitemap from ${LOCAL_URL}/sitemap.xml...`);
    sitemapContent = await new Promise((resolve, reject) => {
      let data = '';
      http.get(`${LOCAL_URL}/sitemap.xml`, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to fetch sitemap: ${res.statusCode}`));
          return;
        }
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      }).on('error', reject);
    });
  } catch (error) {
    console.error('Error fetching sitemap via HTTP. Make sure `npm run dev` is running on port 3000.');
    console.error(error.message);
    process.exit(1);
  }

  // Extract all <loc> tags using Regex (simple and effective for basic XML)
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  const urls = [];

  while ((match = locRegex.exec(sitemapContent)) !== null) {
    let url = match[1];
    // Replace production URL with local URL
    if (url.startsWith(PRODUCTION_URL)) {
      url = url.replace(PRODUCTION_URL, LOCAL_URL);
    }
    urls.push(url);
  }

  console.log(`Found ${urls.length} URLs in the sitemap. Starting checks...`);
  
  const results = {
    success: 0,
    errors: [],
  };

  // We batch requests so we don't overwhelm the local server
  const BATCH_SIZE = 10;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const promises = batch.map(url => checkUrl(url));
    const batchResults = await Promise.all(promises);

    for (const result of batchResults) {
      if (result.status === 200) {
        process.stdout.write('.');
        results.success++;
      } else {
        process.stdout.write('X');
        results.errors.push(result);
      }
    }
  }

  console.log('\n\n--- SUMMARY ---');
  console.log(`Total checked: ${urls.length}`);
  console.log(`Successful (200 OK): ${results.success}`);
  
  if (results.errors.length > 0) {
    console.log(`\nFailed (${results.errors.length}):`);
    results.errors.forEach(err => {
      console.log(`  [${err.status}] ${err.url} ${err.error ? `(${err.error})` : ''}`);
    });
    
    // Write errors to a file for easy viewing
    fs.writeFileSync('sitemap-errors.json', JSON.stringify(results.errors, null, 2));
    console.log('\nDetailed errors written to sitemap-errors.json');
  } else {
    console.log('\nAll links are working perfectly!');
  }
}

run();
