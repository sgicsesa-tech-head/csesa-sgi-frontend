import React from 'react';
import './Loader.css';
import Logo from '../../assets/logo.png';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="logo-container">
            <img src={Logo} alt="CSESA-SGI Logo" className="logo-image" />
        </div>
        <h1 className="loader-title">Computer Science & Engineering Students Association - SGI</h1>
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
