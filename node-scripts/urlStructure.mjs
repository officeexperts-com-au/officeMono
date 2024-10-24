import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Get current directory path (ESM equivalent of __dirname)
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Configuration
const domains = {
  'wordexperts.com.au': '../domains/word/metadata.json',
  'officeexperts.com.au': '../domains/office/metadata.json',
  'powerplatformexperts.com.au': '../domains/powerplatform/metadata.json',
  'excelexperts.com.au': '../domains/excel/metadata.json',
  'accessexperts.com.au': '../domains/access/metadata.json',
};

async function generateStructureDoc() {
  let markdown = '# Expert Domains URL Structure\n\n';
  markdown += 'Generated: ' + new Date().toLocaleString() + '\n\n';
  markdown += '> Reference document for Next.js 14 migration project\n\n';

  for (const [domain, metadataPath] of Object.entries(domains)) {
    try {
      // Read metadata file
      const rawData = await fs.readFile(join(__dirname, metadataPath), 'utf8')
        .catch(() => '[]'); // Return empty array if file doesn't exist
      const metadata = JSON.parse(rawData);

      markdown += `## ${domain}\n\n`;

      // Group pages by their depth/section
      const pageGroups = {};
      
      metadata.forEach(page => {
        const urlObj = new URL(page.url);
        const pathSegments = urlObj.pathname.split('/').filter(Boolean);
        const depth = pathSegments.length;
        const section = pathSegments[0] || 'root';

        if (!pageGroups[section]) {
          pageGroups[section] = [];
        }
        pageGroups[section].push({
          path: urlObj.pathname,
          depth,
          title: page.title,
          hasSchema: !!page.schema,
          hasMeta: !!(page.description || page.ogDescription),
        });
      });

      // Generate structured overview
      markdown += '### Site Structure\n\n';
      
      // Root pages first
      if (pageGroups['root']) {
        markdown += '#### Root Pages\n\n';
        pageGroups['root'].forEach(page => {
          markdown += `- ${page.path}\n`;
          markdown += `  - Title: ${page.title}\n`;
          markdown += `  - Schema: ${page.hasSchema ? '✅' : '❌'}\n`;
          markdown += `  - Meta: ${page.hasMeta ? '✅' : '❌'}\n`;
        });
        markdown += '\n';
        delete pageGroups['root'];
      }

      // Then other sections
      for (const [section, pages] of Object.entries(pageGroups)) {
        markdown += `#### /${section}\n\n`;
        
        // Sort pages by depth and then alphabetically
        pages.sort((a, b) => a.depth - b.depth || a.path.localeCompare(b.path))
          .forEach(page => {
            const indent = '  '.repeat(page.depth - 1);
            markdown += `${indent}- ${page.path}\n`;
            markdown += `${indent}  - Title: ${page.title}\n`;
            markdown += `${indent}  - Schema: ${page.hasSchema ? '✅' : '❌'}\n`;
            markdown += `${indent}  - Meta: ${page.hasMeta ? '✅' : '❌'}\n`;
          });
        markdown += '\n';
      }

      // Add statistics
      const stats = {
        totalPages: metadata.length,
        withSchema: metadata.filter(p => p.schema).length,
        withMeta: metadata.filter(p => p.description || p.ogDescription).length,
        maxDepth: Math.max(...metadata.map(p => 
          new URL(p.url).pathname.split('/').filter(Boolean).length
        ))
      };

      markdown += '### Statistics\n\n';
      markdown += `- Total Pages: ${stats.totalPages}\n`;
      markdown += `- Pages with Schema: ${stats.withSchema}\n`;
      markdown += `- Pages with Meta Description: ${stats.withMeta}\n`;
      markdown += `- Maximum Path Depth: ${stats.maxDepth}\n\n`;

      markdown += '---\n\n';
    } catch (error) {
      markdown += `Error processing ${domain}: ${error.message}\n\n`;
    }
  }

  // Add Next.js migration notes
  markdown += `## Next.js Migration Notes\n\n`;
  markdown += `### Route Structure\n\n`;
  markdown += `\`\`\`
app/
├── page.js             # Homepage
├── [domain]/           # Dynamic domain routing
│   ├── page.js         # Domain homepage
│   ├── [...slug]/      # Catch-all routes
│   │   └── page.js
│   └── layout.js       # Domain-specific layout
└── layout.js           # Root layout
\`\`\`\n\n`;

  markdown += `### Implementation Checklist\n\n`;
  markdown += `- [ ] Set up domain routing\n`;
  markdown += `- [ ] Implement schema generation\n`;
  markdown += `- [ ] Configure metadata\n`;
  markdown += `- [ ] Set up redirects\n`;
  markdown += `- [ ] Test all paths\n`;

  // Save the markdown file
  const outputPath = join(__dirname, 'url-structure.md');
  await fs.writeFile(outputPath, markdown);
  
  console.log(`URL structure document generated: ${outputPath}`);
}

// Run the generator
generateStructureDoc().catch(console.error);