import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ portfolioType, onSwitch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">YP</span>
          <span className="logo-dot"></span>
        </div>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="portfolio-switcher">
          <span className="switch-label">Portfolio:</span>
          <div className="switch-container">
            <button 
              className={`switch-btn ${portfolioType === 'software' ? 'active' : ''}`}
              onClick={() => onSwitch('software')}
            >
              <span className="switch-icon">💻</span>
              Software
            </button>
            <button 
              className={`switch-btn ${portfolioType === 'networking' ? 'active' : ''}`}
              onClick={() => onSwitch('networking')}
            >
              <span className="switch-icon">🌐</span>
              Networking
            </button>
            <div 
              className="switch-indicator"
              style={{ 
                transform: portfolioType === 'networking' ? 'translateX(100%)' : 'translateX(0)'
              }}
            ></div>
          </div>
        </div>

        <div 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;