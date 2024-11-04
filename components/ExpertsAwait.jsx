import React from "react";
import Image from "next/image";

import AnimateOnScroll from "./AnimateOnScroll";

import styles from "../styles/expertsAwait.module.scss";

import bg from "../public/service-bg.webp";
import computer from "../public/icons/computerRed.png";
import training from "../public/icons/training.png";
import support from "../public/icons/support.png";
import handShake from "../public/icons/handShake.png";

const ExpertsAwait = () => {
  return (
    <section className={styles.expertsAwait}>
      <Image className={styles.bgImg} src={bg} alt="shape icon" fill="true" />

      <AnimateOnScroll animation="slide-left" delay={0.1} duration={1.2}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.bar}>
              <p>Got Questions?</p>
            </div>
            <h2>Our Experts Await Your Call!</h2>
          </div>
          <div className={styles.text}>
            <p>
              We have Access developers across Australia with solutions to
              automate your tasks and let you get back to what you are good at,
              your business!
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0.3} duration={1.2}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={handShake}
                alt="hand shake icon"
                width={60}
                height={60}
              />
            </div>
            <p>
              Quote or<br></br>hourly rate
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={computer}
                alt="computer support icon"
                width={60}
                height={60}
              />
            </div>
            <p>
              Ongoing<br></br>support
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={support}
                alt="computer support icon"
                width={60}
                height={60}
              />
            </div>
            <p>
              Remote access<br></br>or onsite
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={training}
                alt="training support icon"
                width={60}
                height={60}
              />
            </div>
            <p>
              Tailored<br></br>training
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default ExpertsAwait;
