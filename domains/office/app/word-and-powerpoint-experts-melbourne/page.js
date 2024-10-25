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
      url: "/logo.png",
      width: 1181,
      height: 1181,
    },
    description:
      "Professional Microsoft Word and PowerPoint consulting services specializing in comprehensive business solutions and automation across Melbourne.",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Victoria",
      },
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
    "@id": "https://www.wordexperts.com.au/#website",
    url: "https://www.wordexperts.com.au/",
    name: "Word Experts",
    description:
      "Microsoft Word and PowerPoint Design, Development and Consulting Experts",
    publisher: {
      "@id": "https://www.wordexperts.com.au/#organization",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id":
      "https://www.wordexperts.com.au/word-and-powerpoint-experts-melbourne/",
    url: "https://www.wordexperts.com.au/word-and-powerpoint-experts-melbourne/",
    name: "Word and PowerPoint Experts Melbourne",
    isPartOf: {
      "@id": "https://www.wordexperts.com.au/#website",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "/logo.png",
    },
    datePublished: "2019-06-28T02:36:03+00:00",
    dateModified: "2024-01-15T00:00:00+00:00",
    description:
      "Expert Microsoft Word and PowerPoint consulting services in Melbourne. Specializing in templates, document design, presentations, automation and corporate solutions.",
    breadcrumb: {
      "@id":
        "https://www.wordexperts.com.au/word-and-powerpoint-experts-melbourne/#breadcrumb",
    },
    inLanguage: "en-AU",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [
          "https://www.wordexperts.com.au/word-and-powerpoint-experts-melbourne/",
        ],
      },
    ],
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
