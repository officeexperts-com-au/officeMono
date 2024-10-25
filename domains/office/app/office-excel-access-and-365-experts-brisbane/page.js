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
        name: "Queensland",
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
      "https://www.officeexperts.com.au/office-excel-access-and-365-experts-brisbane",
    url: "https://www.officeexperts.com.au/office-excel-access-and-365-experts-brisbane/",
    name: "Office Experts Brisbane",
    description:
      "Leading Microsoft Office consultants in Brisbane specializing in Excel, Access, Word, PowerPoint and Office 365 solutions.",
    isPartOf: {
      "@id": "https://www.officeexperts.com.au/#website",
    },
    breadcrumb: {
      "@id":
        "https://www.officeexperts.com.au/office-excel-access-and-365-experts-brisbane/#breadcrumb",
    },
    inLanguage: "en-AU",
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
