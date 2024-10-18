const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');
const url = require('url');

const baseUrl = 'https://www.wordexperts.com.au'; // Replace with your base URL
const outputDir = './word/app'; // Directory to store the generated folders

// Helper function to create directories and files for the URL paths
async function createPageFiles(pageUrl) {
    try {
        // Remove the protocol and domain part from the URL
        const relativePath = pageUrl.replace(baseUrl, '');

        // Ensure no query parameters or fragments are included in folder names
        const cleanPath = url.parse(relativePath).pathname;

        // Construct full path to the folder
        const folderPath = path.join(outputDir, cleanPath);

        // Create the folder structure if it doesn't exist
        await fs.mkdir(folderPath, { recursive: true });

        // Create an empty page.js file in the folder
        const pageFilePath = path.join(folderPath, 'page.js');
        await fs.writeFile(pageFilePath, '', 'utf8'); // Empty file for now

        console.log(`Created ${pageFilePath}`);
    } catch (error) {
        console.error(`Error creating page for ${pageUrl}: ${error.message}`);
    }
}

// Recursive function to extract URLs from a page
async function extractUrls(baseUrl, visited = new Set()) {
    const urls = [];

    if (visited.has(baseUrl)) {
        return urls;
    }

    visited.add(baseUrl);

    try {
        const response = await axios.get(baseUrl);
        const $ = cheerio.load(response.data);

        $('a').each((i, link) => {
            const href = $(link).attr('href');
            if (href) {
                const fullUrl = url.resolve(baseUrl, href);
                if (fullUrl.startsWith(baseUrl) && !visited.has(fullUrl)) {
                    urls.push(fullUrl);
                }
            }
        });

        // Recursively visit and extract URLs from each new page
        for (const pageUrl of urls) {
            urls.push(...await extractUrls(pageUrl, visited));
        }
    } catch (error) {
        console.error(`Error processing ${baseUrl}: ${error.message}`);
    }

    return urls;
}

// Main function to kickstart the scraping and file generation
async function main() {
    console.log('Starting URL extraction...');

    // Ensure the output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Extract URLs recursively from the base URL
    const allUrls = await extractUrls(baseUrl);
    const uniqueUrls = [...new Set(allUrls)];

    console.log(`Found ${uniqueUrls.length} unique URLs`);

    // For each URL, create the folder structure and generate page.js files
    for (const pageUrl of uniqueUrls) {
        await createPageFiles(pageUrl);
    }

    console.log('All pages created successfully!');
}

main().catch(console.error);
