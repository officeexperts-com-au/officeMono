"use client";
import Link from "next/link";
import React, { useState } from "react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB max file size
const VALID_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/zip",
]; // Allowed file types

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
    if (
      file &&
      file.size <= MAX_FILE_SIZE &&
      VALID_FILE_TYPES.includes(file.type)
    ) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          file: {
            content: reader.result.split(",")[1], // Base64 encoded string
            name: file.name,
            type: file.type,
          },
        });
      };
      reader.readAsDataURL(file);
    } else {
      alert("Invalid file type or size. Please upload a valid file.");
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

      {/* Form Fields ... */}

      {/* File Upload */}
      <label htmlFor="file">Upload a file</label>
      <input
        type="file"
        id="file"
        name="file"
        onChange={handleFileChange}
        aria-label="File upload"
        accept={VALID_FILE_TYPES.join(", ")}
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
