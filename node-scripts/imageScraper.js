// Scrapes just one url for images
// imageScraper.js
import puppeteer from "puppeteer";
import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fetch from "node-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TEMP_DIR = path.join(__dirname, "downloaded-logos");
const OUTPUT_DIR = path.join(__dirname, "processed-logos");
const URL = "https://www.excelexperts.com.au/client-testimonials/";

function cleanFileName(fileName) {
  return (
    fileName
      .toLowerCase()
      // Remove the word 'logo' and variations
      .replace(/logo-?\d*-?/g, "")
      .replace(/-?logo/g, "")
      // Remove duplicate dimensions in filename
      .replace(/-\d+x\d+-\d+x\d+/, "")
      // Remove common unwanted patterns
      .replace(/^[-\d]+/, "")
      // Clean up multiple dashes
      .replace(/-+/g, "-")
      // Remove leading and trailing dashes
      .replace(/^-+|-+$/g, "")
  );
}

async function downloadImage(url, filepath) {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Failed to download: ${response.statusText}`);
    const buffer = await response.buffer();
    await fs.writeFile(filepath, buffer);
    return true;
  } catch (error) {
    console.error(`Error downloading ${url}:`, error);
    return false;
  }
}

async function scrapeAndConvert() {
  try {
    await fs.mkdir(TEMP_DIR, { recursive: true });
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    console.log("Navigating to testimonials page...");
    await page.goto(URL, { waitUntil: "networkidle0" });

    const images = await page.evaluate(() => {
      const imgElements = document.querySelectorAll("img");
      return Array.from(imgElements)
        .map((img) => ({
          src: img.src,
          alt: img.alt || "",
          className: img.className || "",
        }))
        .filter(
          (img) =>
            img.src &&
            !img.src.includes("data:image") &&
            !img.src.includes("gravatar")
        );
    });

    console.log(`Found ${images.length} images`);

    for (const [index, image] of images.entries()) {
      try {
        const imageUrl = image.src;
        const originalFileName = path.basename(imageUrl);
        const cleanedFileName = cleanFileName(originalFileName);
        const tempPath = path.join(TEMP_DIR, cleanedFileName);

        console.log(`Downloading: ${imageUrl}`);
        const downloaded = await downloadImage(imageUrl, tempPath);

        if (downloaded) {
          const metadata = await sharp(tempPath).metadata();
          const { width, height } = metadata;

          const baseName = path.parse(cleanedFileName).name;
          const newFileName = `${baseName}-${width}x${height}.webp`;
          const outputPath = path.join(OUTPUT_DIR, newFileName);

          await sharp(tempPath).webp({ quality: 80 }).toFile(outputPath);

          console.log(`✅ Processed: ${newFileName}`);
          console.log(`   Dimensions: ${width}x${height}`);

          await fs.unlink(tempPath);
        }
      } catch (error) {
        console.error(`Error processing image ${index}:`, error);
      }
    }

    await browser.close();

    console.log("\nSample import statements for your Next.js project:");
    const processedFiles = await fs.readdir(OUTPUT_DIR);
    processedFiles.forEach((file) => {
      const importName = path
        .parse(file)
        .name.replace(/[^a-zA-Z0-9]/g, "")
        .replace(/\d+x\d+$/, "")
        // Capitalize first letter of each word for camelCase
        .split("-")
        .map((part, index) =>
          index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
        )
        .join("");
      console.log(`import ${importName} from '@/public/logos/${file}';`);
    });

    console.log("\nConversion complete! 🎉");
    console.log(`Processed images are in: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

scrapeAndConvert();
