import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Meet The Team – Access Experts | Microsoft Access Database Design & Development",
  description:
    "Meet our expert team of Microsoft Access database consultants and developers. Our specialists have extensive experience in database design, development, integration, and support across Australia.",

  // OpenGraph
  openGraph: {
    title: "Meet Our Microsoft Access Database Experts & Consultants",
    description:
      "Our team of expert Microsoft Access database consultants and developers bring decades of combined experience in custom database solutions, integration, and support services across Australia.",
    url: "https://www.accessexperts.com.au/meet-the-team/",
    siteName: "Access Experts",
    images: [
      {
        url: "https://www.accessexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Access Experts Team Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Core expertise keywords
    "Microsoft Access database consultants Australia",
    "Access database developers Sydney",
    "Custom Access database experts",
    "Microsoft Access integration specialists",

    // Skill-specific long tail
    "Microsoft Access VBA macro development experts",
    "Access SQL Server integration consultants",
    "Custom Access form development specialists",
    "Microsoft Access database migration experts",
    "Access database optimization consultants",
    "Microsoft Access cloud integration specialists",

    // Service-specific long tail
    "Microsoft Access database troubleshooting services",
    "Custom Access report development consultants",
    "Access database upgrade specialists",
    "Microsoft Access Azure integration experts",
    "Access SharePoint integration consultants",

    // Location-specific
    "Access database consultants Melbourne",
    "Microsoft Access experts Brisbane",
    "Database developers Perth",
    "Access consultants Sydney CBD",

    // Industry-specific
    "Access inventory management system developers",
    "Microsoft Access CRM specialists",
    "Custom business database consultants",
    "Access financial database experts",

    // Technical expertise
    "Access database performance optimization",
    "Microsoft Access data migration specialists",
    "Custom Access automation solutions",
    "Database security implementation experts",
    "Access multi-user database specialists",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Microsoft Access Database Experts & Consultants",
    description:
      "Our team of expert Microsoft Access database consultants and developers bring decades of combined experience in custom database solutions, integration, and support services across Australia.",
    images: [
      "https://www.accessexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  canonical: "https://www.accessexperts.com.au/meet-the-team/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
