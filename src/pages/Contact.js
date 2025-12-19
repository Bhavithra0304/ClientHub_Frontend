import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> support@clienthub.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Office Hours:</strong> Mon – Fri, 9:00 AM – 6:00 PM</p>
          <p><strong>Location:</strong> Chennai, India</p>
        </div>

        <form className="contact-form">
          <h3>Send a Message</h3>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
