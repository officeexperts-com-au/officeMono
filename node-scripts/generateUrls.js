const fs = require('fs').promises;
const path = require('path');

async function generateUrls() {
    try {
        const baseUrl = 'http:/powerplatformexperts.com'; // Change to your base URL
        const appDir = path.join(__dirname, 'app'); // Adjust the path if needed

        // Read the contents of the app directory
        const folders = await fs.readdir(appDir);

        // Filter out only directories (folders)
        const urls = folders
            .filter(async folder => {
                const stats = await fs.stat(path.join(appDir, folder));
                return stats.isDirectory();
            })
            .map(folder => `${baseUrl}/${folder}`); // Create URL

        // Create urls.json
        await fs.writeFile(path.join(__dirname, 'urls.json'), JSON.stringify(urls, null, 2));

        console.log('urls.json created successfully:', urls);
    } catch (error) {
        console.error('Error generating URLs:', error.message);
    }
}

generateUrls();
