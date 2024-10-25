import React from 'react';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.officeexperts.com.au/#organization",
    "name": "Office Experts Group",
    "url": "https://www.officeexperts.com.au/services/microsoft-office-365/",
    "logo": {
      "@type": "ImageObject",
      "url": "/logo.png",
      "width": 1181,
      "height": 1181
    },
    "description": "Professional Office 365 consulting services specializing in implementation, migration, and business automation across Australia.",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Australia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "New South Wales"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Victoria"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Queensland"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Western Australia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "South Australia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Tasmania"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Australian Capital Territory"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Northern Territory"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/MSOfficeExperts",
      "https://x.com/OfficeExpertsG1",
      "https://www.instagram.com/officeexpertsgroup",
      "https://www.linkedin.com/company/office-experts-group",
      "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.officeexperts.com.au/services/microsoft-office-365/#webpage",
    "url": "https://www.officeexperts.com.au/services/microsoft-office-365/",
    "name": "Office Experts Group",
    "description": "Professional Office 365 consulting services specializing in implementation, migration, and business automation across Australia.",
    "publisher": {
      "@id": "https://www.officeexperts.com.au/#organization"
    }
  }
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