import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function analyzeFolderStructure(startPath, excludePatterns = []) {
  if (!fs.existsSync(startPath)) {
    return {
      error: `Starting path ${startPath} does not exist`,
      structure: null,
      summary: null,
    };
  }

  let fileCount = 0;
  let dirCount = 0;
  const components = new Set();
  const apiRoutes = new Set();
  const pageRoutes = new Set();
  const styleFiles = new Set();

  function shouldExclude(itemPath) {
    return excludePatterns.some((pattern) => itemPath.includes(pattern));
  }

  function buildStructure(currentPath, indent = "") {
    const stats = fs.statSync(currentPath);
    const basename = path.basename(currentPath);

    if (shouldExclude(currentPath)) {
      return "";
    }

    if (stats.isFile()) {
      fileCount++;
      const relativePath = path.relative(startPath, currentPath);

      if (currentPath.includes("/components/")) {
        components.add(relativePath);
      }
      if (currentPath.includes("/api/")) {
        apiRoutes.add(relativePath);
      }
      if (basename === "page.js") {
        pageRoutes.add(path.dirname(relativePath));
      }
      if (basename.endsWith(".scss") || basename.endsWith(".css")) {
        styleFiles.add(relativePath);
      }

      return `${indent}└── ${basename}\n`;
    }

    if (stats.isDirectory()) {
      dirCount++;
      let output = `${indent}├── ${basename}/\n`;
      const items = fs.readdirSync(currentPath).sort((a, b) => {
        const aIsDir = fs.statSync(path.join(currentPath, a)).isDirectory();
        const bIsDir = fs.statSync(path.join(currentPath, b)).isDirectory();
        if (aIsDir && !bIsDir) return -1;
        if (!aIsDir && bIsDir) return 1;
        return a.localeCompare(b);
      });

      items.forEach((item) => {
        const itemPath = path.join(currentPath, item);
        output += buildStructure(itemPath, `${indent}    `);
      });

      return output;
    }

    return "";
  }

  const structure = buildStructure(startPath);

  const summary = {
    totalFiles: fileCount,
    totalDirectories: dirCount,
    components: Array.from(components),
    apiRoutes: Array.from(apiRoutes),
    pageRoutes: Array.from(pageRoutes),
    styleFiles: Array.from(styleFiles),
  };

  return {
    error: null,
    structure,
    summary,
  };
}

function generateMarkdownReport(result, projectName = "Project") {
  const timestamp = new Date().toLocaleString();
  let markdown = "";

  markdown += `# ${projectName} Structure Analysis\n\n`;
  markdown += `*Generated on: ${timestamp}*\n\n`;

  markdown += `## Project Overview\n\n`;
  markdown += `- Total Files: ${result.summary.totalFiles}\n`;
  markdown += `- Total Directories: ${result.summary.totalDirectories}\n\n`;

  markdown += `## Directory Structure\n\n`;
  markdown += "```\n";
  markdown += result.structure;
  markdown += "```\n\n";

  markdown += `## Components (${result.summary.components.length})\n\n`;
  if (result.summary.components.length > 0) {
    result.summary.components.forEach((comp) => {
      markdown += `- \`${comp}\`\n`;
    });
  } else {
    markdown += "*No components found*\n";
  }
  markdown += "\n";

  markdown += `## API Routes (${result.summary.apiRoutes.length})\n\n`;
  if (result.summary.apiRoutes.length > 0) {
    result.summary.apiRoutes.forEach((route) => {
      markdown += `- \`${route}\`\n`;
    });
  } else {
    markdown += "*No API routes found*\n";
  }
  markdown += "\n";

  markdown += `## Page Routes (${result.summary.pageRoutes.length})\n\n`;
  if (result.summary.pageRoutes.length > 0) {
    result.summary.pageRoutes.forEach((route) => {
      markdown += `- \`${route}\`\n`;
    });
  } else {
    markdown += "*No page routes found*\n";
  }
  markdown += "\n";

  markdown += `## Style Files (${result.summary.styleFiles.length})\n\n`;
  if (result.summary.styleFiles.length > 0) {
    result.summary.styleFiles.forEach((style) => {
      markdown += `- \`${style}\`\n`;
    });
  } else {
    markdown += "*No style files found*\n";
  }
  markdown += "\n";

  return markdown;
}

// Example usage:
const excludePatterns = ["node_modules", ".git", ".next", "dist", "build"];

function analyzeAndGenerateReport(
  startPath,
  outputPath = "./project-structure.md",
  projectName = "Project"
) {
  try {
    const result = analyzeFolderStructure(startPath, excludePatterns);

    if (result.error) {
      console.error("Error:", result.error);
      return;
    }

    const markdown = generateMarkdownReport(result, projectName);
    fs.writeFileSync(outputPath, markdown);
    console.log(`Analysis complete! Report generated at: ${outputPath}`);
  } catch (error) {
    console.error("Error generating report:", error);
  }
}

// Export the main functions
export {
  analyzeFolderStructure,
  generateMarkdownReport,
  analyzeAndGenerateReport,
};

// If running directly (not imported), analyze the domains directory
if (import.meta.url === `file://${__filename}`) {
  analyzeAndGenerateReport(
    "./domains",
    "./project-structure.md",
    "Expert Domains Migration"
  );
}
