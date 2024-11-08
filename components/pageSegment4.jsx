import React from "react";
import Image from "next/image";

import styles from "../styles/pageSegment4.module.css";

import chain from "../public/chain600x400.webp";

const PageSegment4 = () => {
  return (
    <section className={styles.pageSegment} id="existing-access">
      <div className={styles.content}>
        <div className={styles.underline}>
          <h2>Web Apps Linked to Databases</h2>
        </div>
        <p>
          Often you may want to gather data from your clients, suppliers and
          people of interest who do not have access to your database
          application. Using Azure we can create hosted web apps that will run
          on any device through a web browser, gathering data and storing it in
          your Azure database. You then have instant access to the data through
          your database application.
        </p>
      </div>

      <Image
        src={chain}
        alt="person clicking a computer mouse"
        width={600}
        height={400}
      />
    </section>
  );
};

export default PageSegment4;
