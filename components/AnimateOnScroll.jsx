"use client";

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "../styles/animate.module.scss";

const AnimateOnScroll = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const wasAboveViewport = useRef(false);
  const wasBelowViewport = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.9;
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // Update scroll direction tracking
      lastScrollY.current = currentScrollY;

      // Check if element is completely above viewport
      if (rect.bottom < 0) {
        wasAboveViewport.current = true;
        wasBelowViewport.current = false;
        setIsVisible(false);
      }

      // Check if element is completely below viewport
      if (rect.top > windowHeight) {
        wasBelowViewport.current = true;
        wasAboveViewport.current = false;
        setIsVisible(false);
      }

      // Trigger animation when element comes into view
      if (rect.top <= triggerPoint && rect.bottom >= 0) {
        // When scrolling down, animate if element was below viewport or first time
        if (
          isScrollingDown &&
          (wasBelowViewport.current ||
            (!wasAboveViewport.current && !isVisible))
        ) {
          setIsVisible(true);
          wasBelowViewport.current = false;
        }

        // When scrolling up, animate if element was above viewport
        if (!isScrollingDown && wasAboveViewport.current) {
          setIsVisible(true);
          wasAboveViewport.current = false;
        }
      }
    };

    // Set initial scroll position and check initial state
    if (typeof window !== "undefined") {
      lastScrollY.current = window.scrollY;
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial check
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isVisible]);

  const baseClass = styles.animate;
  const animationClass = styles[animation];
  const visibilityClass = isVisible ? styles.visible : "";
  const classes = `${baseClass} ${animationClass} ${visibilityClass}`;

  return (
    <div
      ref={elementRef}
      className={classes}
      style={{
        "--animation-delay": `${delay}s`,
        "--animation-duration": `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

AnimateOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.oneOf([
    "fade-up",
    "fade-down",
    "slide-left",
    "slide-right",
    "scale-up",
    "fade",
  ]),
  delay: PropTypes.number,
  duration: PropTypes.number,
};

export default AnimateOnScroll;
