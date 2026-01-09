import React from "react";
import ContactInfo from "../components/ContactInfo";
import SocialConnect from "../components/SocialConnect";
import "./Contact.css";

const ContactRight = () => {
  return (
    <div className="right-section">
      {/* Contact Information */}
      <ContactInfo />

      {/* Connect With Us */}
      <SocialConnect />
    </div>
  );
};

export default ContactRight;