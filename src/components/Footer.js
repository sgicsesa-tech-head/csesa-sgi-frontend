import React from 'react';
import { GitHub, Twitter, LinkedIn, Instagram, Email, LocationOn } from '@mui/icons-material';
import './Footer.css';
import icon from '../assets/logo.png';

const Footer = () => {
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <GitHub />, 
      url: "https://github.com/sgicsesa-tech-head" 
    },
    { 
      name: "Twitter", 
      icon: <Twitter />, 
      url: "https://x.com/CsesaSgi" 
    },
    { 
      name: "LinkedIn", 
      icon: <LinkedIn />, 
      url: "https://www.linkedin.com/company/csesa-sgi/" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram />, 
      url: "https://www.instagram.com/csesa_sgi/" 
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <img src={icon} className="logo-icon" />
            <span className="logo-text">CSESA + SGI</span>
          </div>
          <p className="footer-description">
            Empowering students to achieve excellence in 
            Computer Science and Engineering through 
            community, code, and collaboration.
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                className="social-icon" 
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">QUICK LINKS</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">CONTACT</h3>
          <ul className="footer-links">
            <li className="contact-item">
              <span className="contact-icon">
                <Email sx={{ fontSize: 18 }} />
              </span>
              <a href="mailto:sgi.csesa@sginstitute.in">sgi.csesa@sginstitute.in</a>
            </li>
            <li className="contact-item">
              <span className="contact-icon">
                <LocationOn sx={{ fontSize: 18 }} />
              </span>
              <span>D Block, 3rd Floor, Computer Science Dept, SGI Campus, Kolhapur-Sangli Highway, Kolhapur, Maharashtra 416-118.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2026 CSESA + SGI. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <span className="separator">•</span>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
