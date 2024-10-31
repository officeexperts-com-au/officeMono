import React from "react";

import styles from "../styles/solutions.module.css";

import project1 from "../public/project-img-1.webp";
import project2 from "../public/project-img-2.webp";
import project3 from "../public/project-img-3.webp";
import project4 from "../public/project-img-4.webp";
import Link from "next/link";

const Solutions = () => {
  return (
    <div className={styles.solutions}>
      <div className={styles.title}>
        <div>
          <p>No Problems</p>
        </div>
        <h2>Only Solutions</h2>
      </div>
      <div className={styles.container}>
        <Link href={"https://www.accessexperts.com.au/access-online"}>
          <div
            className={`${styles.card} ${styles.card1}`}
            style={{
              background: `url(${project1.src}) no-repeat center center`,
              backgroundSize: "cover",
            }}
          >
            <div className={styles.popIn}>
              <h3>
                <span>Access</span>
                <br />
                Online
              </h3>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
              </svg>
            </div>
          </div>
        </Link>

        <Link href={"https://www.accessexperts.com.au/access-support"}>
          <div
            className={`${styles.card} ${styles.card2}`}
            style={{
              background: `url(${project2.src}) no-repeat center center`,
              backgroundSize: "cover",
            }}
          >
            <div className={styles.popIn}>
              <h3>
                <span>Access</span>
                <br />
                Help and Training
              </h3>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
              </svg>
            </div>
          </div>
        </Link>

        <Link href={"https://www.accessexperts.com.au/upgrades-and-migration"}>
          <div
            className={`${styles.card} ${styles.card3}`}
            style={{
              background: `url(${project3.src}) no-repeat center center`,
              backgroundSize: "cover",
            }}
          >
            <div className={styles.popIn}>
              <h3>
                <span>Access</span>
                <br />
                Upgrades and Conversions
              </h3>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
              </svg>
            </div>
          </div>
        </Link>

        <Link
          href={
            "https://www.accessexperts.com.au/is-access-right-for-your-company"
          }
        >
          <div
            className={`${styles.card} ${styles.card4}`}
            style={{
              background: `url(${project4.src}) no-repeat center center`,
              backgroundSize: "cover",
            }}
          >
            <div className={styles.popIn}>
              <h3>
                <span>Access</span>
                <br />
                is it right for you?
              </h3>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Solutions;
