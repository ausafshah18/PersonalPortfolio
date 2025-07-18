import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const recipient = "ausafshah18@gmail.com";
    const body = `Name: ${name}\n${message}`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ausafshah18@gmail.com</h5>
            {/* <a href="mailto:ausafshah18@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a> */}
          </article>
          <article className="contact__option">
            <BsTelephone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+91 9682138656</h5>
            {/* <a href="https://api.whatsapp.com/send?phone=+919682138656" target="_blank" rel="noreferrer">
              Send a message
            </a> */}
          </article>
          <article className="contact__option">
            <MdLocationOn className="contact__option-icon" />
            <h4>Location</h4>
            <h5>India</h5>
            <a href="https://www.google.com/maps/place/India" target="_blank" rel="noreferrer">
              View on Map
            </a>
          </article>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" rows="7" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
