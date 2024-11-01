import React from "react";
import styles from "../styles/testimonialsSection.module.scss";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../testimonials";

const Testimonials = () => {
  // Calculate how many slides to append based on viewport size
  // We only need to duplicate enough slides to fill one viewport
  const slidesToAppend = [...testimonials.slice(0, 3)];
  const extendedTestimonials = [...testimonials, ...slidesToAppend];

  return (
    <section className={styles.testimonials}>
      <div className={styles.box}>
        <h2>Client Testimonials</h2>
      </div>
      <h3>What they say?</h3>

      <div
        className={styles.testimonialsWrapper}
        aria-label="Testimonials carousel"
      >
        <div className={styles.testimonialsTrack}>
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className={styles.testimonialSlide}
              aria-label={`Testimonial ${(index % testimonials.length) + 1}`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
