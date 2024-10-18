const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const domainsDir = path.join(__dirname, 'domains');
const domains = fs.readdirSync(domainsDir).filter(file => fs.statSync(path.join(domainsDir, file)).isDirectory());

domains.forEach(domain => {
    console.log(`Generating sitemap for ${domain}`);
    execSync(`cd domains/${domain} && npx next-sitemap`, { stdio: 'inherit' });
});