import React from "react";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.wordexperts.com.au/#organization",
    name: "Word Experts",
    url: "https://www.wordexperts.com.au/",
    logo: {
      "@type": "ImageObject",
      "@id": "https://www.wordexperts.com.au/#logo",
      url: "/logo.png",
      width: 1181,
      height: 1181,
    },
    description:
      "Professional Microsoft Word consulting services specializing in corporate template solutions and document automation across Australia.",
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
      "https://x.com/OfficeExpertsG1",
      "https://www.instagram.com/officeexpertsgroup",
      "https://www.linkedin.com/company/office-experts-group",
      "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61-1300-12-20-38",
      contactType: "customer service",
      areaServed: "AU",
      availableLanguage: "English",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id":
      "https://www.wordexperts.com.au/services/microsoft-word/companies-and-organisations/",
    url: "https://www.wordexperts.com.au/services/microsoft-word/companies-and-organisations/",
    name: "Companies and Organizations",
    description:
      "Our team of Word design experts deliver versatile templates that meet the needs of any company or organisation. We ensure your corporate identity is protected and can cut costs through setting you up to produce your own inhouse reports.",
    isPartOf: {
      "@id": "https://www.wordexperts.com.au/#website",
    },
    breadcrumb: {
      "@id":
        "https://www.wordexperts.com.au/services/microsoft-word/companies-and-organisations/#breadcrumb",
    },
    publisher: {
      "@id": "https://www.wordexperts.com.au/#organization",
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
