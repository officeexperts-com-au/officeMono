import Link from "next/link";
import React from "react";

import msg from "../public/icons/msg.png";
import emailSlide from "../public/icons/emailSlide.png";
import Image from "next/image";

import styles from "../styles/footerHelp.module.css";

const FooterHelpSection = () => {
  return (
    <div className={styles.helpSection}>
      <h3>Help</h3>
      <Link href={"https://www.accessexperts.com.au/contact-us"}>
        Online Enquiry Form
      </Link>
      <Link href={"https://www.officeexperts.com.au/faq"}>FAQ</Link>
      <Link href={"https://www.officeexperts.com.au/terms-and-conditions"}>
        Terms and Conditions
      </Link>
      <Link href={"https://www.officeexperts.com.au/privacy-policy"}>
        Privacy Policy
      </Link>
      <Link href={"https://www.officeexperts.com.au/refund-policy"}>
        Refund Policy
      </Link>
      <h3>Contact Us</h3>
      <Link href={"tel:+61-1300-10-28-10"}>
        <Image src={msg} alt="msg" width={20} height={20} />
        1300 10 28 10
      </Link>
      <Link href={"mailto:consult@accessexperts.com.au"}>
        <Image src={emailSlide} alt="msg" width={20} height={20} />
        consult@accessexperts.com.au
      </Link>
      <h3>Search Our Website</h3>
    </div>
  );
};

export default FooterHelpSection;
