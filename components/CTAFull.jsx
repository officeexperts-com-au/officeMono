import Image from "next/image";
import React from "react";
import Link from "next/link";

import styles from "../styles/ctaFull.module.css";

import cta from "../public/ctaFull.webp";

const CTAFull = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaWrapper}>
        <Image src={cta} alt="people in office" full />
        <h2>Trust the Experts for All Your business Needs</h2>
        <Link
          href="https://www.accessexperts.com.au/contact-us"
          className={`${styles.ctaBtn} btn`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default CTAFull;
