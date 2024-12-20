import React from "react";
import { testimonials } from "../../../testimonials";
import TestimonialCard from "../../../../../components/TestimonialCard";
import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/testimonialPage.module.scss";

const TestimonialPage = () => {
  return (
    <section className={styles.testimonialPage}>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => {
          // Show first 3 testimonials without animation
          if (index < 3) {
            return (
              <div key={testimonial.contact}>
                <TestimonialCard
                  content={testimonial.content}
                  name={testimonial.name}
                  contact={testimonial.contact}
                  image={testimonial.image}
                />
              </div>
            );
          }

          // Animate remaining testimonials
          return (
            <AnimateOnScroll
              key={testimonial.contact}
              animation="fade-up"
              delay={(index - 6) * 0.1} // Reset delay counting from first animated item
            >
              <TestimonialCard
                content={testimonial.content}
                name={testimonial.name}
                contact={testimonial.contact}
                image={testimonial.image}
              />
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialPage;
