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
        "@type": "City",
        name: "Wollongong",
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
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id":
      "https://www.officeexperts.com.au/office-excel-access-and-word-experts-wollongong/#localbusiness",
    name: "Office Experts Group Wollongong",
    image: "/logo.png",
    description:
      "Professional Microsoft Office consulting services in Wollongong specializing in Excel, Access, Word and complete Office solutions",
    url: "https://www.officeexperts.com.au/office-excel-access-and-word-experts-wollongong/",
    telephone: "+61-1300-10-28-10",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wollongong",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.4278,
      longitude: 150.8931,
    },
    areaServed: {
      "@type": "City",
      name: "Wollongong",
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
