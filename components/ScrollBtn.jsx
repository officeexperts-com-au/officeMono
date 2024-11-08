"use client";
import React, { useEffect, useState } from "react";

import styles from "../styles/scrollBtn.module.css";

const ScrollBtn = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollPos = window.scrollY;
          // Check if scrolling down
          if (currentScrollPos > scrollPosition) {
            setIsVisible(currentScrollPos > 100);
          } else {
            // Scrolling up
            setIsVisible(false);
          }
          setScrollPosition(currentScrollPos);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollBtn} ${isVisible ? styles.visible : ""}`}
      aria-label="Scroll to top"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z" />
      </svg>
    </button>
  );
};

export default ScrollBtn;
