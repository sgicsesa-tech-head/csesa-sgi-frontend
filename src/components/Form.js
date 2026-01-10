import React, { useState } from 'react';
import './Form.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Get in touch</h2>
        <label>
          Your Name 
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Subject
          <input
            type="text"
            name="subject"
            placeholder="Event inquiry"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            placeholder="Tell us what's on your mind..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send Message </button>
      </form>
    </div>
  );
};

export default ContactForm;
