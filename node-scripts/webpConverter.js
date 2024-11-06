// webpConverter.js
import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Get current directory with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const INPUT_DIR = path.join(__dirname, "../downloaded-images"); // Directory containing original images
const OUTPUT_DIR = path.join(__dirname, "../webpImages"); // Directory for WebP images

async function convertToWebp() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Read all files from input directory
    const files = await fs.readdir(INPUT_DIR);

    console.log("Starting conversion process...");

    for (const file of files) {
      // Check if file is an image
      if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
        const inputPath = path.join(INPUT_DIR, file);

        try {
          // Get image dimensions before conversion
          const metadata = await sharp(inputPath).metadata();
          const { width, height } = metadata;

          // Create new filename with dimensions
          const baseName = path.parse(file).name;
          const newFileName = `${baseName}-${width}x${height}.webp`;
          const outputPath = path.join(OUTPUT_DIR, newFileName);

          // Convert to webp
          await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);

          // Get and log the file sizes for comparison
          const inputStat = await fs.stat(inputPath);
          const outputStat = await fs.stat(outputPath);
          const inputSize = (inputStat.size / 1024).toFixed(2);
          const outputSize = (outputStat.size / 1024).toFixed(2);

          console.log(`✅ Converted: ${file} → ${newFileName}`);
          console.log(`   Dimensions: ${width}x${height}`);
          console.log(`   Original: ${inputSize}KB → WebP: ${outputSize}KB`);
        } catch (error) {
          console.error(`❌ Error converting ${file}:`, error);
        }
      }
    }

    console.log("\nConversion complete! 🎉");
    console.log(`Processed images are in: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

convertToWebp();
