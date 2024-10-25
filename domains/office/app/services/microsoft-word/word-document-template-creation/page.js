import React from "react";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.officeexperts.com.au/#organization",
    name: "Office Experts Group",
    url: "https://www.officeexperts.com.au/",
    logo: {
      "@type": "ImageObject",
      url: "/logo.png",
      width: 1181,
      height: 1181,
    },
    description:
      "Professional Microsoft Office consulting services specializing in comprehensive business solutions and automation across Australia.",
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
      telephone: "+61-1300-10-28-10",
      contactType: "customer service",
      areaServed: "AU",
      availableLanguage: "English",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id":
      "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-creation/#webpage",
    url: "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-creation/",
    name: "Word Template Creation | Word Document Creation | Microsoft Word Services | Word Experts",
    description:
      "Our team of Word design experts can create your company documents and templates with our easy to use templates, complete with your branding, a consistent look and a professional feel.",
    breadcrumb: {
      "@id":
        "https://www.officeexperts.com.au/services/microsoft-word/word-document-template-creation/#breadcrumb",
    },
    isPartOf: {
      "@id": "https://www.officeexperts.com.au/#website",
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
