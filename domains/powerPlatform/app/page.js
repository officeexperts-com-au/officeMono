import React from "react";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/",
      url: "https://www.powerplatformexperts.com.au/",
      name: "Power Platform Experts: Microsoft Power Platform Consulting Services",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Our Australia-wide, cross-industry Microsoft Power Platform consultants deliver prompt, quality service with competitive pricing. Call us today.",
      breadcrumb: {
        "@id": "https://www.powerplatformexperts.com.au/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.powerplatformexperts.com.au/#website",
      url: "https://www.powerplatformexperts.com.au/",
      name: "Power Platform Experts: Microsoft Power Platform Development and Consulting Services",
      description:
        "Your Microsoft Power Platform Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.powerplatformexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.powerplatformexperts.com.au/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
    },
    {
      "@type": "Organization",
      "@id": "https://www.powerplatformexperts.com.au/#organization",
      name: "Power Platform Experts Group",
      url: "https://www.powerplatformexperts.com.au/",
      telephone: "1300 10 28 10",
      email: "consult@powerplatformexperts.com.au",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 10 28 10",
          contactType: "customer service",
          email: "consult@powerplatformexperts.com.au",
          availableLanguage: ["en", "en-AU"],
        },
      ],
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
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-AU",
        "@id": "https://www.powerplatformexperts.com.au/#/schema/logo/image/",
        url: "/logo.png",
        contentUrl: "/logo.png",
        width: 1181,
        height: 1181,
        caption: "Power Platform Experts Group",
      },
      image: {
        "@id": "https://www.powerplatformexperts.com.au/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/MSOfficeExperts",
        "https://x.com/OfficeExpertsG1",
        "https://www.instagram.com/officeexpertsgroup",
        "https://www.linkedin.com/company/office-experts-group",
        "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
      ],
    },
  ],
};

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
