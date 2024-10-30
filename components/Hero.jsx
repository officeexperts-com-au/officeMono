import React from "react";
import styles from "../styles/hero.module.css";

import handShake from "../public/hero/handShake.webp";
import graph from "../public/hero/graph.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <Image
            src={handShake}
            alt="Office environment"
            className={styles.slideImage}
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={graph}
            alt="Document design"
            className={styles.slideImage}
          />
        </div>
      </div>

      <div className={styles.content}>
        <h4>Document Design and Development</h4>
        <h1>Microsoft Word Designer & Consultants</h1>
        <button className="btn">Discover More</button>
      </div>
    </section>
  );
};

export default Hero;
