import React from "react";
import styles from "../styles/footerServices.module.css";
import Link from "next/link";

const FooterServicesSection = () => {
  return (
    <div className={styles.servicesSection}>
      {/* Main Business Links - Always Visible */}
      <div className={styles.mainLinks}>
        <h3>Our Business</h3>
        <Link href="/about">About Us</Link>
        <Link href="/team">Meet The Team</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/blog">Blog</Link>
      </div>

      {/* Power Platform Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h3 className={styles.dropdownHeader}>
          Our Microsoft Power Platform Services
          <span className={styles.dropdownArrow}>▼</span>
        </h3>
        <div className={styles.dropdownContent}>
          <Link href="/power-platform">Microsoft Power Platform</Link>
          <Link href="/power-apps">Microsoft Power Apps</Link>
          <Link href="/power-bi">Microsoft Power BI</Link>
          <Link href="/power-automate">Microsoft Power Automate</Link>
          <Link href="/power-pages">Microsoft Power Pages</Link>
        </div>
      </div>

      {/* Office Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h3 className={styles.dropdownHeader}>
          Our Microsoft Office Services
          <span className={styles.dropdownArrow}>▼</span>
        </h3>
        <div className={styles.dropdownContent}>
          <Link href="/office">Microsoft Office</Link>
          <Link href="/excel">Microsoft Excel</Link>
          <Link href="/access">Microsoft Access</Link>
          <Link href="/word">Microsoft Word</Link>
          <Link href="/powerpoint">Microsoft PowerPoint</Link>
          <Link href="/office-365">Microsoft Office 365</Link>
        </div>
      </div>

      {/* Other Microsoft Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h3 className={styles.dropdownHeader}>
          Our Other Microsoft Services
          <span className={styles.dropdownArrow}>▼</span>
        </h3>
        <div className={styles.dropdownContent}>
          <Link href="/azure">Microsoft Azure</Link>
          <Link href="/sql-server">Microsoft SQL Server</Link>
          <Link href="/sharepoint">Microsoft SharePoint</Link>
          <Link href="/dotnet">Microsoft .NET</Link>
          <Link href="/outlook">Microsoft Outlook</Link>
          <Link href="/publisher">Microsoft Publisher</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterServicesSection;
