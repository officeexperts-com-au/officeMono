import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import https from 'https';;

const WORDPRESS_API_URL = 'https://officeexperts.com.au/wp-json/wp/v2/media';
const OUTPUT_DIR = './downloaded-images';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (error) => {
      fs.unlink(filepath);
      reject(error);
    });
  });
};

const fetchMedia = async (page = 1) => {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}?per_page=100&page=${page}`);
    const mediaItems = await response.json();

    if (mediaItems.length === 0) {
      console.log('No more media items to download.');
      return;
    }

    for (const media of mediaItems) {
      const imageUrl = media.source_url;
      const fileName = path.basename(imageUrl);
      const filePath = path.join(OUTPUT_DIR, fileName);

      console.log(`Downloading ${fileName}...`);
      await downloadImage(imageUrl, filePath);
    }

    // Fetch the next page
    fetchMedia(page + 1);

  } catch (error) {
    console.error('Error fetching media:', error);
  }
};

fetchMedia();
