import React from "react";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.powerplatformexperts.com.au/#organization",
    name: "Power Platform Experts",
    url: "https://www.powerplatformexperts.com.au/",
    logo: {
      "@type": "ImageObject",
      url: "/logo.png",
      width: 1181,
      height: 1181,
    },
    description:
      "Professional Microsoft Power BI consulting services specializing in comprehensive business intelligence solutions across Australia.",
    areaServed: [
      {
        "@type": "Country",
        name: "Australia",
      },
      {
        "@type": "AdministrativeArea",
        name: "New South Wales",
      },
      {
        "@type": "AdministrativeArea",
        name: "Victoria",
      },
      {
        "@type": "AdministrativeArea",
        name: "Queensland",
      },
      {
        "@type": "AdministrativeArea",
        name: "Western Australia",
      },
      {
        "@type": "AdministrativeArea",
        name: "South Australia",
      },
      {
        "@type": "AdministrativeArea",
        name: "Tasmania",
      },
      {
        "@type": "AdministrativeArea",
        name: "Australian Capital Territory",
      },
      {
        "@type": "AdministrativeArea",
        name: "Northern Territory",
      },
    ],
    sameAs: [
      "https://www.facebook.com/MSOfficeExperts",
      "https://x.com/PowerPlatformE1",
      "https://www.instagram.com/powerplatformexperts",
      "https://www.linkedin.com/company/power-platform-experts",
      "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61-1300-10-28-10",
      contactType: "customer service",
      areaServed: "AU",
      availableLanguage: "English",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.powerplatformexperts.com.au/#website",
    url: "https://www.powerplatformexperts.com.au/",
    name: "Power Platform Experts",
    description:
      "Your Microsoft Power Platform Design, Development and Consulting Experts",
    publisher: {
      "@id": "https://www.powerplatformexperts.com.au/#organization",
    },
  },
];

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
};

export default Page;
