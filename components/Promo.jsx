import React from "react";
import Image from "next/image";

import styles from "../styles/promo.module.css";

import computer from "../public/icons/computer.webp";
import promo from "../public/promo.webp";

const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.content}>
        <div className={styles.circle}>
          <Image src={computer} alt="computer icon" width={30} height={30} />
        </div>
        <div className={styles.text}>
          <h2>We Deliver the Best Quality</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            perferendis nisi enim perspiciatis voluptatem voluptatum!
          </p>
        </div>
      </div>
      <div className={styles.img}>
        <div className={styles.bar}></div>
        <Image src={promo} alt="person at a computer" width={130} height={60} />
      </div>
    </section>
  );
};

export default Promo;
