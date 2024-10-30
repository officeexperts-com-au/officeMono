import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import styles from "../styles/servicesCard.module.css";

const ServicesCard = ({ src, alt, h3, li, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={src}
          alt={alt}
          className={styles.cardImg}
          height={60}
          width={60}
        />
        <h3>{h3}</h3>
      </div>

      <div className={styles.cardContent}>
        <ul>
          {li.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link href={link}>Learn more</Link>
      </div>
    </div>
  );
};

export default ServicesCard;

ServicesCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  h3: PropTypes.string,
  li: PropTypes.array,
  link: PropTypes.string,
};
