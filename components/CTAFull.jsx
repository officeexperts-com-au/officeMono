import Image from "next/image";
import React from "react";

import styles from "../styles/ctaFull.module.css";

import cta from "../public/ctaFull.webp";

const CTAFull = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaWrapper}>
        <Image src={cta} alt="people in office" width={1920} height={485} />
        <h2>Trust the Experts for All Your business Needs</h2>
      </div>
    </div>
  );
};

export default CTAFull;
