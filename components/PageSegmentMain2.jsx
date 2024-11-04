import Image from "next/image";
import React from "react";
import styles from "../styles/pageSegment2.module.scss";
import lady from "../public/service-img-1.webp";

const PageSegmentMain2 = () => {
  return (
    <section className={styles.pageSegment}>
      <Image
        src={lady}
        alt="lady in an office environment"
        width={770}
        height={424}
      />

      <div className={styles.contents}>
        <h3>Contents</h3>
        <div className={styles.contentLink}>
          <a href="#existing-access">
            <p>Existing Access Databases</p>
          </a>
        </div>
        <div className={styles.contentLink}>
          <a href="#web-apps">
            <p>Web Apps Linked to Databases</p>
          </a>
        </div>
        <div className={styles.contentLink}>
          <a href="#is-access-azure">
            <p>Is Access/Azure for You?</p>
          </a>
        </div>
        <div className={styles.contentLink}>
          <a href="#alternatives">
            <p>Alternatives to Access/Azure</p>
          </a>
        </div>
        <div className={styles.contentLink}>
          <a href="#requirements">
            <p>Access/Azure Requirements</p>
          </a>
        </div>
        <div className={styles.contentLink}>
          <a href="#low-cost">
            <p>Low Cost Solution</p>
          </a>
        </div>
        <div className={styles.contentLink}>
          <a href="#experts">
            <p>Microsoft Database Solution Experts</p>
          </a>
        </div>
      </div>

      <div className={styles.info}>
        <h2>Database Analysis, Design and Development</h2>
        <p>
          With Microsoft Azure we can host your data in the cloud with
          Microsoft. Your data can then be accessed from our custom built Access
          databases which can access data from any location, allowing us to
          create cloud based solutions for Microsoft Access.
        </p>
      </div>
    </section>
  );
};

export default PageSegmentMain2;
