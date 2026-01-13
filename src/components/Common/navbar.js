import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          CSESA-SGI
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={`nav-links ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className={`nav-links ${location.pathname === '/events' ? 'active' : ''}`} onClick={closeMenu}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className={`nav-links ${location.pathname === '/blog' ? 'active' : ''}`} onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
