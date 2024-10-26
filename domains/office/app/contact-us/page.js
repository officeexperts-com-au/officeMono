import React from "react";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.officeexperts.com.au/contact-us/#webpage",
    url: "https://www.officeexperts.com.au/contact-us/",
    name: "Contact Us | Office Experts Group",
    description:
      "We have expert consultants across Australia and can provide services onsite or by remote access. Contact us Today Consult@officeexperts.com.au",
    isPartOf: {
      "@id": "https://www.officeexperts.com.au/#website",
    },
    organization: {
      "@type": "Organization",
      name: "Office Experts Group",
      url: "https://www.officeexperts.com.au/",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
        width: 1181,
        height: 1181,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+61-1300-10-28-10",
        contactType: "customer service",
        email: "consult@officeexperts.com.au",
        areaServed: "AU",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "Australia",
      },
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
