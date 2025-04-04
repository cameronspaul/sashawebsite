import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Assuming logo.png in src/assets
import './Header.css'; // We will create this file next for styling

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="site-header">
      <div className="logo-container">
        <NavLink to="/" onClick={handleNavLinkClick}>
          <img src={logo} alt="Me & Mrs Jones Logo" className="logo" />
        </NavLink>
      </div>

      {/* Hamburger Button */}
      <button 
        className="hamburger-btn" 
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        {/* Simple hamburger icon using spans */}
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Add class when mobile menu is open */}
      <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <ul>
          <li><NavLink to="/" end onClick={handleNavLinkClick}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink></li>
          <li><NavLink to="/services" onClick={handleNavLinkClick}>Services</NavLink></li>
          <li><NavLink to="/packages" onClick={handleNavLinkClick}>Packages</NavLink></li>
          <li><NavLink to="/gallery" onClick={handleNavLinkClick}>Gallery</NavLink></li>
          <li><NavLink to="/booking" onClick={handleNavLinkClick}>Booking</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 