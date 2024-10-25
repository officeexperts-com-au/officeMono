"use client";
import Link from "next/link";
import React, { useState } from "react";

const QuoteForm = () => {
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
    operatingSystem: "",
    softwareVersions: "",
    website: "",
    acceptTerms: false,
    honeypot: "",
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // File input change handler
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1]; // Use Base64 encoded string
      // You can include base64String in your API request here if needed
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setError({});

    // Honeypot validation
    if (formData.honeypot) {
      alert("Bot submission detected");
      return;
    }

    // Error validation
    const newError = {};
    if (!formData.name) newError.name = "Name is required.";
    if (!formData.email) newError.email = "Email is required.";
    if (formData.email && !emailRegex.test(formData.email)) {
      newError.email = "Please enter a valid email address.";
    }
    if (!formData.acceptTerms) {
      newError.acceptTerms = "You must accept the terms.";
    }

    // Set error state if any
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    try {
      const res = await fetch("/api/quoteForm", {
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
          file: null,
          operatingSystem: "",
          softwareVersions: "",
          website: "",
          acceptTerms: false,
          honeypot: "",
        });
      } else {
        setError({ general: "Something went wrong. Please try again." });
      }
    } catch (error) {
      setError({ general: "There was an error submitting the form." });
    }
  };

  return !success ? (
    <form onSubmit={handleSubmit} aria-label="Quote Request Form">
      {/* Honeypot Field */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: "none" }}
        aria-hidden="true"
      />

      {/* Name Input */}
      <label htmlFor="name">Name (required)</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        aria-required="true"
        aria-label="Name"
      />
      {error.name && <p style={{ color: "red" }}>{error.name}</p>}

      {/* Email Input */}
      <label htmlFor="email">Email (required)</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        aria-required="true"
        aria-label="Email"
      />
      {error.email && <p style={{ color: "red" }}>{error.email}</p>}

      {/* Phone Input */}
      <label htmlFor="phone">Phone (optional)</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        aria-label="Phone"
      />

      {/* Message Textarea */}
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        aria-label="Message"
      />

      {/* File Upload */}
      <label htmlFor="file">Upload a file</label>
      <input
        type="file"
        id="file"
        name="file"
        onChange={handleFileChange}
        aria-label="File upload"
      />

      {/* Operating System Radio Buttons */}
      <fieldset>
        <legend>Operating System</legend>
        <label>
          <input
            type="radio"
            name="operatingSystem"
            value="Windows"
            checked={formData.operatingSystem === "Windows"}
            onChange={handleChange}
            aria-label="Windows Operating System"
          />
          Windows
        </label>
        <label>
          <input
            type="radio"
            name="operatingSystem"
            value="Mac"
            checked={formData.operatingSystem === "Mac"}
            onChange={handleChange}
            aria-label="Mac Operating System"
          />
          Mac
        </label>
        <label>
          <input
            type="radio"
            name="operatingSystem"
            value="Other"
            checked={formData.operatingSystem === "Other"}
            onChange={handleChange}
            aria-label="Other Operating System"
          />
          Other
        </label>
      </fieldset>

      {/* Software Versions Text Input */}
      <label htmlFor="softwareVersions">Software Versions</label>
      <input
        type="text"
        id="softwareVersions"
        name="softwareVersions"
        value={formData.softwareVersions}
        onChange={handleChange}
        aria-label="Software Versions"
      />

      {/* Website Text Input */}
      <label htmlFor="website">Website</label>
      <input
        type="url"
        id="website"
        name="website"
        value={formData.website}
        onChange={handleChange}
        aria-label="Website"
      />

      {/* Privacy Policy and Terms Checkbox */}
      <label>
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          aria-label="I accept the Privacy Policy and Terms and Conditions"
        />
        I accept the{" "}
        <Link
          href="https://www.officeexperts.com.au/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.officeexperts.com.au/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms and Conditions
        </Link>
        .
      </label>
      {error.acceptTerms && <p style={{ color: "red" }}>{error.acceptTerms}</p>}

      <button type="submit">Submit</button>
      {error.general && <p style={{ color: "red" }}>{error.general}</p>}
    </form>
  ) : (
    <div>
      <h2>Thank you {formData.name} for your message!</h2>
      <p>One of our team will contact you shortly</p>
    </div>
  );
};

export default QuoteForm;
