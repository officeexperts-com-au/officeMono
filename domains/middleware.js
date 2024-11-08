// // domains/middleware.js
// import { NextResponse } from "next/server";

// // Define domain-specific redirect maps
// const DOMAIN_REDIRECTS = {
//   "excelexperts.com.au": {
//     "/services/microsoft-access/3rd-party-product-integration":
//       "https://www.officeexperts.com.au/services/microsoft-access/3rd-party-product-integration/",
//     "/services/microsoft-access/access-online":
//       "https://www.officeexperts.com.au/services/microsoft-access/access-online/",
//     "/services/microsoft-access/access-support":
//       "https://www.officeexperts.com.au/services/microsoft-access/access-support/",
//     "/services/microsoft-access/is-access-right-for-your-company":
//       "https://www.officeexperts.com.au/services/microsoft-access/is-access-right-for-your-company/",
//   },
//   //   "wordexperts.com.au": {
//   //     // Add Word Experts specific redirects
//   //   },
//   //   "accessexperts.com.au": {
//   //     // Add Access Experts specific redirects
//   //   },
//   //   "powerplatformexperts.com.au": {
//   //     // Add Power Platform Experts specific redirects
//   //   },
// };

// // Define known 404 paths per domain
// const DOMAIN_404_PATHS = {
//   "excelexperts.com.au": ["/services/microsoft-access/uprades-and-migration"],
//   "wordexperts.com.au": [
//     // Add Word Experts specific 404s
//   ],
//   // Add other domains as needed
// };

// export function middleware(request) {
//   // Get hostname and pathname
//   const hostname = request.headers.get("host");
//   const { pathname } = request.nextUrl;

//   // Remove 'www.' if present for consistency
//   const cleanHostname = hostname.replace("www.", "");

//   // Get domain-specific redirects and 404s
//   const domainRedirects = DOMAIN_REDIRECTS[cleanHostname] || {};
//   const domain404Paths = DOMAIN_404_PATHS[cleanHostname] || [];

//   // Check for redirects
//   if (domainRedirects[pathname]) {
//     // Log redirect for monitoring
//     console.log(
//       `Redirecting ${cleanHostname}${pathname} to ${domainRedirects[pathname]}`
//     );

//     return NextResponse.redirect(domainRedirects[pathname], {
//       status: 301,
//       headers: {
//         "Cache-Control": "public, max-age=31536000, immutable",
//       },
//     });
//   }

//   // Check for known 404s
//   if (domain404Paths.includes(pathname)) {
//     // Log 404 for monitoring
//     console.log(`Known 404 path accessed: ${cleanHostname}${pathname}`);

//     // Rewrite to custom 404 page while maintaining the URL
//     request.nextUrl.pathname = "/404";
//     return NextResponse.rewrite(request.nextUrl);
//   }

//   // Special handling for development environment
//   if (process.env.NODE_ENV === "development") {
//     // Map localhost:3000 to a specific domain for testing
//     if (hostname.includes("localhost")) {
//       // Continue normal routing
//       return NextResponse.next();
//     }
//   }

//   // Handle staging environment
//   if (
//     process.env.VERCEL_ENV === "preview" ||
//     process.env.NODE_ENV === "staging"
//   ) {
//     // Add any staging-specific logic here
//   }

//   // Continue normal routing for all other requests
//   return NextResponse.next();
// }

// // Configure which paths the middleware runs on
// export const config = {
//   matcher: [
//     // Add paths that need to be checked
//     "/services/:path*",
//     // Exclude static files and api routes
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// };
