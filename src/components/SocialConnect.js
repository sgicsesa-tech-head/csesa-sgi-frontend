import React from "react";
import { GitHub, Twitter, LinkedIn, Instagram, Facebook } from "@mui/icons-material";
import "./SocialConnect.css";

const SocialConnect = () => {
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <GitHub sx={{ fontSize: 22 }} />, 
      url: "https://github.com/sgicsesa-tech-head" 
    },
    { 
      name: "Twitter", 
      icon: <Twitter sx={{ fontSize: 22 }} />, 
      url: "https://x.com/CsesaSgi" 
    },
    { 
      name: "LinkedIn", 
      icon: <LinkedIn sx={{ fontSize: 22 }} />, 
      url: "https://www.linkedin.com/company/csesa-sgi/" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram sx={{ fontSize: 22 }} />, 
      url: "https://www.instagram.com/csesa_sgi/" 
    }
  ];

  return (
    <div className="social-card">
      <h3 className="card-title pink">Connect With Us</h3>

      <div className="social-grid">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-box"
          >
            {social.icon}
            <span>{social.name}</span>
          </a>
        ))}
      </div>

      <p className="social-note">
        Follow us on social media for the latest updates, events, and tech news
      </p>
    </div>
  );
};

export default SocialConnect;
