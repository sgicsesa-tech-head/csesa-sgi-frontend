import React from "react";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import "./contact-right.css";

const ContactRight = () => {
  return (
    <div className="right-section">

      {/* Contact Information */}
      <div className="info-card">
        <h3 className="card-title cyan">Contact Information</h3>

        <div className="info-item">
          <div className="icon email"><Mail size={20} /></div>
          <div>
            <h4>Email</h4>
            <p>sgi.csesa@sginstitute.in</p>
          </div>
        </div>


        <div className="info-item">
          <div className="icon address"><MapPin size={20} /></div>
          <div>
            <h4>Address</h4>
            <p>SGI Campus, Block D
               Computer Science Dept</p>
          </div>
        </div>
      </div>

      {/* Connect With Us */}
      <div className="social-card">
        <h3 className="card-title pink">Connect With Us</h3>

        <div className="social-grid">
          <div className="social-box"><Github /> GitHub</div>
          <div className="social-box"><Twitter /> Twitter</div>
          <div className="social-box"><Linkedin /> LinkedIn</div>
          <div className="social-box"><Instagram /> Instagram</div>
          <div className="social-box"><Facebook /> Facebook</div>
        </div>

        <p className="social-note">
          Follow us on social media for the latest updates, events, and tech news
        </p>
      </div>

    </div>
  );
};

export default ContactRight;