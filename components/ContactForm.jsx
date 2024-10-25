"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "", // hidden bot field
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setError({ name: "", email: "", message: "" });

    let hasError = false;

    // Validate fields
    if (!formData.name) {
      setError((prev) => ({ ...prev, name: "Name is required." }));
      hasError = true;
    }
    if (!formData.email) {
      setError((prev) => ({ ...prev, email: "Email is required." }));
      hasError = true;
    } else if (!emailRegex.test(formData.email)) {
      setError((prev) => ({ ...prev, email: "Email is not valid." }));
      hasError = true;
    }
    if (!formData.message) {
      setError((prev) => ({ ...prev, message: "Message is required." }));
      hasError = true;
    }

    // Focus on the first error input
    if (hasError) {
      const firstErrorField = Object.keys(error).find((key) => error[key]);
      if (firstErrorField) {
        document.getElementById(firstErrorField).focus();
      }
      return; // Exit early if there are validation errors
    }

    // Bot detection via honeypot
    if (formData.honeypot) {
      alert("Bot submission detected");
      return;
    }

    try {
      const res = await fetch("/api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          honeypot: "",
        });
      } else {
        setError({
          ...error,
          general: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setError({
        ...error,
        general: "There was an error submitting the form.",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return !success ? (
    <form onSubmit={handleSubmit} aria-labelledby="contact-form" noValidate>
      <div>
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.name}
          onFocus={setError({ ...error, name: "" })}
        />
        {error.name && (
          <p style={{ color: "red", fontStyle: "italic" }}>{error.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.email}
          onFocus={setError({ ...error, email: "" })}
        />
        {error.email && (
          <p style={{ color: "red", fontStyle: "italic" }}>{error.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone">Phone (optional)</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.message}
          onFocus={setError({ ...error, message: "" })}
        />
        {error.message && (
          <p style={{ color: "red", fontStyle: "italic" }}>{error.message}</p>
        )}
      </div>

      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <button type="submit">Submit</button>
    </form>
  ) : (
    <div>
      <h2>Thank you {formData.name} for your message!</h2>
      <p>One of our team will contact you shortly</p>
    </div>
  );
};

export default ContactForm;
