import React from 'react';
import './Footer.css';
import icon from '../assets/logo.png';

const Footer = () => {
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
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="#0a0e27" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#0a0e27"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
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
              <span className="contact-icon">📧</span>
              <a href="mailto:contact@csesa-sgi.edu">contact@csesa-sgi.edu</a>
            </li>
            <li className="contact-item">
              <span className="contact-icon">📍</span>
              <span>SGI Campus, Block D<br/>Computer Science Dept.</span>
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
