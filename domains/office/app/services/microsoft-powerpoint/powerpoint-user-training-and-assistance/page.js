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
      "url": "https://www.officeexperts.com.au/wp-content/uploads/2017/11/Office-Experts-Group_Excel-Experts_Access-Experts_Word-Experts-365-Experts_PowerPoint-Experts_Logo_1181x1181.gif",
      "width": 1181,
      "height": 1181
    },
    "description": "Professional PowerPoint training and assistance services providing expert guidance for creating effective presentations.",
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
    "@type": "WebSite",
    "@id": "https://www.officeexperts.com.au/#website",
    "url": "https://www.officeexperts.com.au/",
    "name": "Office Experts Group",
    "description": "Your Microsoft Office Design, Development and Consulting Experts",
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