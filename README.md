# Experts mono repo

Nested are the 5 domains used throughout the experts group, the decision has been made to have a mono repo for the experts group.
- due to the fact there will be so many shared components and styles.
- Packages and config files will all live under one roof, making future updates easier.
- Navigating between multiple repos will be a pain.

## Installations
So far we have installed the following:
- Next, React & React Dom (required)
- Babel and Eslint (help with type safety & catch errors)
- Turbo (this package will help us with building and deploying to multiple domains from a monorepo)
- Next-sitemap (automatically generate a sitemap.xml file & robots.txt on build)
- axios, cheerio (these are node js packages for making http requests and parsing data to our repo, currently just being used as webscrapers (can delete in final production))

## Sitemap creation
Is a little strange given all the domains, so a config file is added in each domains root path, the package.json has been configured to run a node script /generate-sitemap.js, this will generate a sitemap.xml file in the root of the domain.
<<<<<<< HEAD
** This is untested waters for Dan, but the logic seems sound!
=======
** This is untested waters for Dan, but the logic seems sound!
>>>>>>> e18a6744c5233413bef59505be3fa6356df6f8a9