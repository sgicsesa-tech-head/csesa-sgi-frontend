import React from "react";
import ContactInfo from "../components/Contact/ContactInfo";
import SocialConnect from "../components/Contact/SocialConnect";
import ContactForm from "../components/Contact/Form";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-left">
        <ContactForm />
      </div>

      <div className="contact-right">
        <ContactInfo />
        <SocialConnect />
      </div>
    </div>
  );
};

export default Contact;