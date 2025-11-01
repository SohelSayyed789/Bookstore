import React, { useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We’ll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Header Section */}
      <section className="contact-header">
        <h1>
          Get in <span>Touch</span>
        </h1>
        <p>
          We’d love to hear from you! Whether you have a question, feedback, or
          partnership idea — our team is just a message away.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-content">
        {/* Left Info */}
        <div className="contact-info">
          <h2>📞 Contact Information</h2>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>+91 98765 43210</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>support@mybookstore.com</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>123, Knowledge Street, Pune, India</p>
          </div>

          <h3>🕒 Working Hours</h3>
          <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <iframe
          title="MyBookStore Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.387382627783!2d73.847975214893!3d18.56380317281495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c17cfb56a6c3%3A0xf1bda739ff8c83cd!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690209309373!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
