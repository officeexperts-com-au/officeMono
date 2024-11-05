import axios from "axios";
import * as cheerio from "cheerio";
import { promises as fs } from "fs";
import path from "path";
import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  TextRun,
  AlignmentType,
  convertInchesToTwip,
} from "docx";
import fsExtra from "fs-extra";

const outputDir = "./../domains/excel/formattedContent";
const urlListFile = "./../domains/excel/urls.json";

const sanitizePath = (urlPath) => {
  return urlPath.replace(/[^a-z0-9]/gi, "_").toLowerCase();
};

async function scrapeContentForUrl(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const title = $("title").text().trim() || "Untitled";

    const urlPath = new URL(url).pathname;
    const folderPath = path.join(outputDir, sanitizePath(urlPath));
    await fsExtra.ensureDir(folderPath);

    // Initialize an array to hold document paragraphs
    const docParagraphs = [];

    // Add the title
    docParagraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: title,
            size: 32,
            bold: true,
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
          after: 400,
          before: 400,
        },
      })
    );

    // Process content with proper text formatting
    const contentStructure = [
      { selector: "h1", level: HeadingLevel.HEADING_1, size: 28 },
      { selector: "h2", level: HeadingLevel.HEADING_2, size: 26 },
      { selector: "h3", level: HeadingLevel.HEADING_3, size: 24 },
      { selector: "h4", level: HeadingLevel.HEADING_4, size: 22 },
      { selector: "p", size: 20 },
      { selector: "li", size: 20, isList: true },
    ];

    for (const { selector, level, size, isList } of contentStructure) {
      $(selector).each((i, el) => {
        const text = $(el).text().trim();
        if (!text) return;

        const paragraph = new Paragraph({
          children: [
            new TextRun({
              text: isList ? `• ${text}` : text,
              size,
              bold: !!level,
            }),
          ],
          heading: level,
          spacing: {
            after: 200,
            before: level ? 400 : 200,
          },
          indent: isList
            ? {
                left: convertInchesToTwip(0.5),
              }
            : undefined,
        });

        docParagraphs.push(paragraph);
      });
    }

    // Process links section
    const baseUrl = new URL(url).origin;
    const links = $("a")
      .map((i, el) => {
        const linkText = $(el).text().trim();
        const href = $(el).attr("href");
        if (!linkText || !href) return null;

        const absoluteHref = href.startsWith("/") ? `${baseUrl}${href}` : href;
        return { text: linkText, href: absoluteHref };
      })
      .get()
      .filter(Boolean);

    if (links.length > 0) {
      docParagraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: "Links",
              size: 26,
              bold: true,
            }),
          ],
          heading: HeadingLevel.HEADING_2,
          spacing: {
            after: 200,
            before: 400,
          },
        })
      );

      links.forEach(({ text, href }) => {
        docParagraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${text}: `,
                size: 20,
              }),
              new TextRun({
                text: href,
                size: 20,
                underline: true,
                color: "0000FF",
              }),
            ],
            spacing: {
              after: 100,
            },
          })
        );
      });
    }

    // Create a new document with a single section containing all paragraphs
    const doc = new Document({
      sections: [
        {
          children: docParagraphs,
        },
      ],
    });

    // Save the document
    const docFilePath = path.join(folderPath, "content.docx");
    const buffer = await Packer.toBuffer(doc);
    await fs.writeFile(docFilePath, buffer);
    console.log(`Successfully created: ${docFilePath}`);
  } catch (error) {
    console.error(`Error processing ${url}:`, error.message);
  }
}

async function main() {
  try {
    await fsExtra.ensureDir(outputDir);
    const urlsData = await fs.readFile(urlListFile, "utf8");
    const urls = JSON.parse(urlsData);

    console.log(`Processing ${urls.length} URLs...`);

    for (const url of urls) {
      console.log(`Processing: ${url}`);
      await scrapeContentForUrl(url);
    }

    console.log("All URLs processed successfully");
  } catch (error) {
    console.error("Error in main process:", error.message);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Fatal error:", error.message);
  process.exit(1);
});
