import React from "react";
import Link from "next/link";

import styles from "../styles/footerLocations.module.css";

const FooterLocationsSection = () => {
  return (
    <div className={styles.locationsSection}>
      <h3>Our Locations</h3>
      <p className={styles.remoteAccess}>Australia-wide via remote access.</p>

      {/* Sydney with Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h4 className={styles.dropdownHeader}>
          Sydney
          <span className={styles.dropdownArrow}>▼</span>
        </h4>
        <div className={styles.dropdownContent}>
          <div className={styles.serviceGroup}>
            <Link href="/sydney/excel">Excel</Link>
            <Link href="/sydney/access">Access</Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="/sydney/word">Word</Link>
            <Link href="/sydney/powerpoint">PowerPoint</Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="/sydney/office">Office</Link>
            <Link href="/sydney/office-365">Office 365</Link>
          </div>
        </div>
      </div>

      {/* Melbourne with Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h4 className={styles.dropdownHeader}>
          Melbourne
          <span className={styles.dropdownArrow}>▼</span>
        </h4>
        <div className={styles.dropdownContent}>
          <div className={styles.serviceGroup}>
            <Link href="/melbourne/excel">Excel</Link>
            <Link href="/melbourne/access">Access</Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="/melbourne/word">Word</Link>
            <Link href="/melbourne/powerpoint">PowerPoint</Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="/melbourne/office">Office</Link>
            <Link href="/melbourne/office-365">Office 365</Link>
          </div>
        </div>
      </div>

      {/* Richmond with Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h4 className={styles.dropdownHeader}>
          Richmond
          <span className={styles.dropdownArrow}>▼</span>
        </h4>
        <div className={styles.dropdownContent}>
          <div className={styles.serviceGroup}>
            <Link href="/richmond/excel">Excel</Link>
            <Link href="/richmond/access">Access</Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="/richmond/word">Word</Link>
            <Link href="/richmond/powerpoint">PowerPoint</Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="/richmond/office">Office</Link>
            <Link href="/richmond/office-365">Office 365</Link>
          </div>
        </div>
      </div>

      {/* Static Links */}
      <Link href="/brisbane" className={styles.staticLink}>
        Brisbane
      </Link>
      <Link href="/gold-coast" className={styles.staticLink}>
        Gold Coast
      </Link>
      <Link href="/canberra" className={styles.staticLink}>
        Canberra
      </Link>

      {/* Perth with Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h4 className={styles.dropdownHeader}>
          Perth
          <span className={styles.dropdownArrow}>▼</span>
        </h4>
        <div className={styles.dropdownContent}>
          <div className={styles.serviceGroup}>
            <Link href="/perth/word">Word</Link>
            <Link href="/perth/powerpoint">PowerPoint</Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="/perth/excel">Excel</Link>
            <Link href="/perth/access">Access</Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="/perth/office">Office</Link>
            <Link href="/perth/office-365">Office 365</Link>
          </div>
        </div>
      </div>

      {/* More Static Links */}
      <Link href="/wollongong" className={styles.staticLink}>
        Wollongong
      </Link>
      <Link href="/darwin" className={styles.staticLink}>
        Darwin
      </Link>
      <Link href="/central-coast" className={styles.staticLink}>
        Central Coast
      </Link>
      <Link href="/northern-rivers" className={styles.staticLink}>
        Northern Rivers
      </Link>
    </div>
  );
};

export default FooterLocationsSection;
