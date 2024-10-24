const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');

const outputDir = './app';
const urlListFile = 'urls.json';

const sanitizePath = (urlPath) => {
    return urlPath.replace(/[^a-z0-9]/gi, '_').toLowerCase(); // Sanitize folder path
};

async function scrapeContentForUrl(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const title = $('title').text() || 'Untitled';

        const urlPath = new URL(url).pathname;
        const folderPath = path.join(outputDir, sanitizePath(urlPath));
        await fs.mkdir(folderPath, { recursive: true });

        const mdContent = [];
        mdContent.push(`### Title: ${title}\n`);

        // Extract headings, paragraphs, and list items
        ['h1', 'h2', 'h3', 'h4', 'p', 'li'].forEach(tag => {
            $(tag).each((i, el) => {
                const text = $(el).text().trim();
                if (text) {
                    let prefix = '';
                    switch (tag) {
                        case 'h1': prefix = ' H1: '; break;
                        case 'h2': prefix = ' H2: '; break;
                        case 'h3': prefix = ' H3: '; break;
                        case 'h4': prefix = ' H4: '; break;
                        case 'li': prefix = '- '; break;
                    }
                    mdContent.push(`${prefix}${text}\n`);
                }
            });
        });

        // Scrape anchor tags and convert to absolute links if needed
        const baseUrl = new URL(url).origin;
        const anchorTags = [];
        $('a').each((i, el) => {
            const linkText = $(el).text().trim();
            const href = $(el).attr('href');
            const absoluteHref = href && href.startsWith('/') ? `${baseUrl}${href}` : href;
            if (linkText && absoluteHref) {
                anchorTags.push(`- [${linkText}](${absoluteHref})`);
            }
        });
        if (anchorTags.length > 0) {
            mdContent.push(`\n### Links:\n`);
            mdContent.push(...anchorTags);
        }

        if (mdContent.length === 1) { // Only title was added
            mdContent.push('No content available\n');
        }

        const mdFilePath = path.join(folderPath, 'content.md');
        await fs.writeFile(mdFilePath, mdContent.join('\n'));

        console.log(`Created: ${mdFilePath}`);
    } catch (error) {
        console.error(`Error processing URL: ${url} - ${error.message}`);
    }
}

async function main() {
    try {
        const urlsData = await fs.readFile(urlListFile, 'utf8');
        const urls = JSON.parse(urlsData);

        console.log(`Found ${urls.length} URLs to process`);

        for (const url of urls) {
            await scrapeContentForUrl(url);
        }

        console.log('All URLs processed');
    } catch (error) {
        console.error(`Error reading URL list: ${error.message}`);
    }
}

main().catch(console.error);
