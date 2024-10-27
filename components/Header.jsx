"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentDomain, setCurrentDomain] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && !currentDomain) {
      setCurrentDomain(window.location.hostname);
    }
  }, [currentDomain]);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <p className={styles.navLink}>Home</p>
            {activeDropdown === "home" && (
              <ul className={styles.dropdown}>
                <li>
                  <Link href="https://officeexperts.com.au">
                    Office Experts
                  </Link>
                </li>
                <li>
                  <Link href="https://excelexperts.com.au">Excel Experts</Link>
                </li>
                <li>
                  <Link href="https://powerplatformexperts.com.au">
                    Power Platform Experts
                  </Link>
                </li>
                <li>
                  <Link href="https://accessexperts.com.au">
                    Access Experts
                  </Link>
                </li>
                <li>
                  <Link href="https://wordexperts.com.au">Word Experts</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <p className={styles.navLink}>Services</p>
            {activeDropdown === "services" && (
              <ul className={styles.dropdown}>
                <li>
                  <Link href="https://www.officeexperts.com.au/services/">
                    All our services
                  </Link>
                </li>
                <li className={styles.nestedDropdown}>
                  <Link href="https://www.powerplatformexperts.com.au/">
                    Microsoft Power Platform
                  </Link>
                  <ul className={styles.nestedItems}>
                    <li>
                      <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps">
                        Microsoft Power Apps
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi">
                        Microsoft Power BI
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate">
                        Microsoft Power Automate
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages">
                        Microsoft Power Pages
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.nestedDropdown}>
                  <Link href="https://www.officeexperts.com.au/services/by-office-product/">
                    By Office Product
                  </Link>
                  <ul className={styles.nestedItems}>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/microsoft-office/">
                        Microsoft Office
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.excelexperts.com.au/">
                        Microsoft Excel
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.accessexperts.com.au/">
                        Microsoft Access
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.wordexperts.com.au/">
                        Microsoft Word
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/microsoft-powerpoint/">
                        Microsoft PowerPoint
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/microsoft-office-365/">
                        Microsoft Office 365
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.nestedDropdown}>
                  <Link href="https://www.officeexperts.com.au/services/by-business-solution/">
                    Business Solutions
                  </Link>
                  <ul className={styles.nestedItems}>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development/">
                        VBA Macro Development
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions/">
                        Custom Office Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions/">
                        Database Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/by-business-solution/online-solutions/">
                        Online Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure/">
                        Microsoft Cloud Based Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/by-business-solution/dashboards/">
                        Dashboards
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration/">
                        3rd Party App or Office Integration
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/">
                        Office and SQL Server
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration/">
                        Upgrades and Migration
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.officeexperts.com.au/services/by-business-solution/add-in-creation/">
                        Add-in Creation
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link
              href={`https://${currentDomain}/client-testimonials`}
              className={styles.navLink}
            >
              Testimonials
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href={`https://${currentDomain}/meet-the-team`}
              className={styles.navLink}
            >
              Meet the Team
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="https://www.officeexperts.com.au/faq"
              className={styles.navLink}
            >
              FAQ
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href={`https://${currentDomain}/contact-us`}
              className={styles.navLink}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
