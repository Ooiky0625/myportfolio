"use client"

import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";
import { FadeInSection } from "../components/FadeInSection";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kgj2uxs", // Your service ID
        "template_2u4wi4j", // Your template ID
        formData,
        "L1jXFy_ro8fKiwFlM" // Your user ID
      )
      .then(
        (response) => {
          setFormStatus({
            submitted: true,
            success: true,
            message: "Your message has been sent successfully!",
          });

          // Reset form after 3 seconds
          setTimeout(() => {
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
            setFormStatus({
              submitted: false,
              success: false,
              message: "",
            });
          }, 3000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setFormStatus({
            submitted: true,
            success: false,
            message: "Failed to send message. Please try again later.",
          });
        }
      );
  };

  return (
    <div className="contact container">
      <FadeInSection>
        <h2 className="section-title">Contact</h2>
      </FadeInSection>
      <div className="contact-content">
        <FadeInSection className="contact-info" threshold={0.2}>
          <div className="contact-item">
            <div className="contact-icon"><MdOutlineEmail /></div>
            <div className="contact-detail">
              <h3>Email</h3>
              <p>kwongyang78@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><FaInstagram /></div>
            <div className="contact-detail">
              <h3>Instagram</h3>
              <p>oky_0625</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><IoLocationOutline /></div>
            <div className="contact-detail">
              <h3>Location</h3>
              <p>Butterworth, Pulau Pinang</p>
            </div>
          </div>
          <div className="contact-social">
            <h3>Connect with me</h3>
            <div className="social-links">
              <a href="https://github.com/Ooiky0625" className="social-link" aria-label="GitHub">
                <span className="social-icon"><FiGithub /></span>
              </a>
              <a href="https://www.linkedin.com/in/ooiky0625/" className="social-link" aria-label="LinkedIn">
                <span className="social-icon"><FaLinkedinIn /></span>
              </a>
              <a href="https://www.instagram.com/oky_0625/" className="social-link" aria-label="Instagram">
                <span className="social-icon"><FaInstagram /></span>
              </a>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection className="contact-form-container" threshold={0.2}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-submit">
              Send Message
            </button>
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
            )}
          </form>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Contact;
