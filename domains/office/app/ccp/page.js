import React from 'react';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.officeexperts.com.au/#organization",
    "name": "Office Experts Group",
    "url": "https://www.officeexperts.com.au/",
    "logo": {
      "@type": "ImageObject",
      "url": "/logo.png",
      "width": 1181,
      "height": 1181
    },
    "description": "Professional Microsoft Office consulting services with secure payment processing options.",
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
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-1300-10-28-10",
      "contactType": "customer service",
      "areaServed": "AU",
      "availableLanguage": "English"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.officeexperts.com.au/ccp/#webpage",
    "url": "https://www.officeexperts.com.au/ccp/",
    "name": "Credit Card Payments",
    "description": "Secure credit card payment processing for Microsoft Office consulting services and solutions.",
    "isPartOf": {
      "@id": "https://www.officeexperts.com.au/#website"
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