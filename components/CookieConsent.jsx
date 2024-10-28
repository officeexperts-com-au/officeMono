"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/cookieConsent.module.css";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentChoice = localStorage.getItem("cookieConsent");

    if (!consentChoice) {
      setIsVisible(true);
    }

    if (consentChoice === "accepted") {
      initializeAnalytics();
    }
  }, []);

  const initializeAnalytics = () => {
    if (typeof window !== "undefined" && !window.GA_INITIALIZED) {
      window.GA_INITIALIZED = true;

      const gtmScript = document.createElement("script");
      gtmScript.defer = true;
      gtmScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;

      const initScript = document.createElement("script");
      initScript.defer = true;
      initScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `;

      document.head.appendChild(gtmScript);
      document.head.appendChild(initScript);
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    initializeAnalytics();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.alert}>
        <h2 className={styles.title}>Cookie Consent</h2>
        <div className={styles.description}>
          <p className={styles.message}>
            We use cookies to analyze our traffic and improve your experience.
            This includes Google Analytics and Google Tag Manager.
          </p>
          <div className={styles.buttonGroup}>
            <button onClick={handleAccept} className={styles.acceptButton}>
              Accept All
            </button>
            <button onClick={handleDecline} className={styles.declineButton}>
              Decline
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          className={styles.closeButton}
          aria-label="Close"
        >
          <span className={styles.srOnly}>Close</span>
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
