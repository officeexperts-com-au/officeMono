import React from "react";
import Image from "next/image";

import styles from "../styles/serviceHero.module.css";

import thirdParty from "../public/pageHeros/3rdParty.webp";

const ServiceHero = () => {
  return (
    <section className={styles.serviceHero}>
      <Image src={thirdParty} alt="A person helping somebody" fill="true" />
      <h1>3rd Party Product Integration</h1>
    </section>
  );
};

export default ServiceHero;
