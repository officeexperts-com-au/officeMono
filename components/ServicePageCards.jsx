import React from "react";
import Image from "next/image";

import styles from "../styles/servicePageCards.module.css";

// Import icons
import stuckIcon from "../public/icons/computerRed.png";
import issuesIcon from "../public/icons/support.png";
import expertsIcon from "../public/icons/deal.png";
import migrateIcon from "../public/icons/idea.png";

// Import main images
import stuckImage from "../public/service-img-1350x201.webp";
import issuesImage from "../public/service-img-2350x201.webp";
import expertsImage from "../public/service-img-3350x201.webp";
import migrateImage from "../public/service-img-4350x201.webp";

const ServicePageCards = () => {
  return (
    <section className={styles.servicePageCards}>
      <div className={styles.card}>
        <a href="#stuck">
          <div className={styles.content}>
            <p>Upgrades</p>
            <h2>Stuck on an Old Version?</h2>
            <Image
              src={stuckIcon}
              alt="Old version icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={stuckImage}
              alt="Old version illustration"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#issues">
          <div className={styles.content}>
            <p>Help</p>
            <h2>Need Access Issues Resolved?</h2>
            <Image
              src={issuesIcon}
              alt="Access issues icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={issuesImage}
              alt="Access issues illustration"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#experts">
          <div className={styles.content}>
            <p>Trust Us</p>
            <h2>Our Experts can Help!</h2>
            <Image
              src={expertsIcon}
              alt="Expert help icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={expertsImage}
              alt="Expert help illustration"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#migrate">
          <div className={styles.content}>
            <p>Not Sure</p>
            <h2>To Migrate or To Upgrade?</h2>
            <Image
              src={migrateIcon}
              alt="Migration icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={migrateImage}
              alt="Migration illustration"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ServicePageCards;
