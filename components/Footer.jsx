import React from "react";

import FooterServicesSection from "./FooterServicesSection";
import FooterLocationsSection from "./FooterLocationsSection";
import FooterLogoSection from "./FooterLogoSection";
import FooterHelpSection from "./FooterHelpSection";

import styles from "../styles/footer.module.css";

import bg from "../public/service-bg.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <Image className={styles.bg} src={bg} alt="background" fill /> */}
      <FooterLogoSection />
      <FooterServicesSection />
      <FooterLocationsSection />
      <FooterHelpSection />
    </footer>
  );
};

export default Footer;
