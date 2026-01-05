import React from "react";
import "./HeroSection.css";
import csesa_logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Computer Science & Engineering Students Association
        </h1>

        <p className="hero-description">
          The official student association of Computer Science & Engineering students at
          SGI bringing the gap between students, faculty, and industry.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">View Upcoming Events →</button>
          <button className="btn-secondary">Learn About Us</button>
        </div>
      </div>
      <div className="hero-logo">
        <img src={csesa_logo} alt="CSESA Logo" className="hero-img" />
        <h2>Bits to Brilliance</h2>
      </div>
    </section>
  );
};

export default HeroSection;
