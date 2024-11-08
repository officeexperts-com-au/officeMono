/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Enable SCSS modules
  sassOptions: {
    includePaths: ["./styles"],
    prependData: `@import "@/styles/globals.scss";`,
  },

  // Basic image configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gentle-pond-0aa028e00.5.azurestaticapps.net",
      },
    ],
    formats: ["image/webp"],
  },

  // Disable x-powered-by header
  poweredByHeader: false,

  // Configure build output
  output: "standalone",
};

export default nextConfig;
