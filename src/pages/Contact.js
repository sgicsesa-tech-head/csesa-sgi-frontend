import React from "react";
import ContactInfo from "../components/ContactInfo";
import SocialConnect from "../components/SocialConnect";
import ContactForm from "../components/Form";
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