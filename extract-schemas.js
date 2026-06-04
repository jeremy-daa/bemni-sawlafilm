const fs = require('fs');

function decodeHtmlEntities(value) {
    return value
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

function extractJsonLdBlocks(html) {
    const scriptMatches = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];

    return scriptMatches
        .filter((match) => /\btype\s*=\s*["']application\/ld\+json["']/i.test(match[1]))
        .map((match) => decodeHtmlEntities(match[2].trim()))
        .filter(Boolean);
}

async function extractSchemas() {
    const sitemapUrl = 'http://localhost:3000/sitemap.xml';
    console.log(`Fetching sitemap from ${sitemapUrl}...`);

    try {
        const response = await fetch(sitemapUrl);
        const xml = await response.text();

        // 1. Extract all URLs from the sitemap and swap the domain to localhost
        const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
            .map(match => decodeHtmlEntities(match[1]).replace('https://www.ethiopiafilmfixer.com', 'http://localhost:3000'));

        console.log(`Found ${urls.length} URLs. Extracting schemas...`);

        const auditResults = {};

        // 2. Fetch each local URL and parse the JSON-LD blocks
        for (const url of urls) {
            try {
                const pageRes = await fetch(url);
                const html = await pageRes.text();

                const schemaBlocks = extractJsonLdBlocks(html);

                if (schemaBlocks.length > 0) {
                    auditResults[url] = schemaBlocks.map(schema => {
                        try {
                            // Parse it to ensure the agent generated valid JSON
                            return JSON.parse(schema);
                        } catch (e) {
                            return {
                                error: 'Invalid JSON detected',
                                rawContent: schema
                            };
                        }
                    });
                } else {
                    auditResults[url] = 'No schema found';
                }
            } catch (err) {
                auditResults[url] = `Failed to fetch: ${err.message}`;
            }
        }

        // 3. Output the results to a file for analysis
        fs.writeFileSync('schema-audit.json', JSON.stringify(auditResults, null, 2));
        console.log('✅ Done! Audit saved to schema-audit.json');

    } catch (error) {
        console.error('❌ Error fetching sitemap:', error);
    }
}

extractSchemas();
