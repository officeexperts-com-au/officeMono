import React from "react";
import Image from "next/image";

import styles from "../../../../../styles/pageSegment.module.scss";

import dataMigration from "../../../../../public/dataMigration600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper}>
        <Image
          src={dataMigration}
          alt="Man pulling out a card saying Ask an Expert"
          width={600}
          height={400}
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p>Microsoft Access</p>
          <h2>Stuck on an Old Version?</h2>
          <p>
            Are you experiencing the cold reality or unsettling concerns that
            your Microsoft Access databases won&apos;t function correctly with
            your upgraded version of Microsoft Office?
          </p>
          <p>
            Do you have existing applications that are slow or unworkable due to
            poor design, wrong product choice or unanticipated growth?
          </p>
          <p>
            Do you want to migrate your applications to a new database or a
            cloud based solution?
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
