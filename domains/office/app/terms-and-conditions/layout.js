import PropTypes from "prop-types";
import React from "react";

export const metadata = {
  title: "Terms and Conditions - Office Experts",
  description:
    "Read our terms and conditions for using Office Experts. We ensure fair and transparent practices for all users.",
  robots: "noindex, nofollow",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
