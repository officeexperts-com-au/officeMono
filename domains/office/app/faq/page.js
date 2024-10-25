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
    "description": "Professional Microsoft Office consulting and solutions provider across Australia.",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive Microsoft Office consulting services including Excel development, Access database solutions, Word template creation, PowerPoint presentation design, Office 365 migration, and custom business automation solutions. Our services can be delivered both onsite and remotely across Australia."
        }
      },
      {
        "@type": "Question",
        "name": "How do you charge for your services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible pricing options including fixed-price quotes for projects and hourly rates for ongoing support. Each solution is customized to your specific needs, and we provide detailed quotes after understanding your requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide remote support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive remote support services across Australia. Using secure remote access tools, we can assist with development, troubleshooting, and training, making our services accessible regardless of your location."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with Office 365 migration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in Office 365 migration services, ensuring smooth transition with minimal downtime. This includes email migration, SharePoint setup, OneDrive implementation, and comprehensive staff training."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide training services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer customized training services for all Microsoft Office products. Training can be delivered one-on-one or in groups, either remotely or onsite, and is tailored to your specific needs and skill level."
        }
      },
      {
        "@type": "Question",
        "name": "Can you create custom Office solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in creating custom Office solutions including Excel automation, Access databases, Word templates, and PowerPoint presentations. We can also develop VBA macros, add-ins, and integrate with other business systems."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide services across all of Australia, with a strong presence in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, and regional areas. Our remote support capabilities allow us to assist clients nationwide."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with government departments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have extensive experience working with government departments at federal, state, and local levels. We understand government requirements including accessibility standards and security protocols."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with data migration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive data migration services, whether you're upgrading systems, moving to the cloud, or consolidating data sources. We ensure data integrity and minimal disruption to your business operations."
        }
      },
      {
        "@type": "Question",
        "name": "What support options are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible support options including ad-hoc assistance, ongoing maintenance contracts, and emergency support. Support can be provided remotely or onsite, depending on your needs and location."
        }
      }
    ]
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