import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";

import FooterServicesSection from "./FooterServicesSection";
import FooterLocationsSection from "./FooterLocationsSection";
import FooterLogoSection from "./FooterLogoSection";
import FooterHelpSection from "./FooterHelpSection";

import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <AnimateOnScroll animation="fade-up" delay={0} duration={1}>
        <FooterLogoSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={0.1} duration={1}>
        <FooterServicesSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={0.2} duration={1}>
        <FooterLocationsSection />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={0.3} duration={1}>
        <FooterHelpSection />
      </AnimateOnScroll>
    </footer>
  );
};

export default Footer;
