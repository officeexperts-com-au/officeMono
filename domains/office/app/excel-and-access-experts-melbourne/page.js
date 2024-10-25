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
      "Professional Microsoft Office consulting services specializing in Excel and Access solutions across Melbourne and Australia.",
    areaServed: [
      {
        "@type": "City",
        name: "Melbourne",
      },
      {
        "@type": "State",
        name: "Victoria",
      },
      {
        "@type": "Country",
        name: "Australia",
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
    "@type": "WebSite",
    "@id": "https://www.officeexperts.com.au/#website",
    url: "https://www.officeexperts.com.au/",
    name: "Office Experts Group",
    description:
      "Your Microsoft Office Design, Development and Consulting Experts",
    publisher: {
      "@id": "https://www.officeexperts.com.au/#organization",
    },
  },
  {
    "@type": "WebPage",
    "@id":
      "https://www.officeexperts.com.au/excel-and-access-experts-melbourne/",
    url: "https://www.officeexperts.com.au/excel-and-access-experts-melbourne/",
    name: "Excel and Access Experts Melbourne",
    isPartOf: {
      "@id": "https://www.officeexperts.com.au/#website",
    },
    datePublished: "2019-06-28T02:35:29+00:00",
    dateModified: "2019-06-28T02:35:29+00:00",
    description:
      "Experienced Microsoft Excel programmers and Access database consultants in Melbourne delivering prompt, quality service with innovative solutions and competitive pricing.",
    breadcrumb: {
      "@id":
        "https://www.officeexperts.com.au/excel-and-access-experts-melbourne/#breadcrumb",
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
