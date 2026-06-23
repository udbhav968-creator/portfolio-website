import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="nav-container container">
        <a href="#home" className="logo">
          <span className="gradient-text">&lt;Udbhav /&gt;</span>
        </a>

        <div className="nav-links desktop-only">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
        </div>

        <div className="social-links desktop-only">
          <a href="https://github.com/udbhav968-creator" target="_blank" rel="noreferrer" className="social-icon"><FaGithub size={20} /></a>
          <a href="mailto:s24cseu0095@bennett.edu.in" className="social-icon"><Mail size={20} /></a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass">
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Experience</a>
          <a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <div className="mobile-socials">
            <a href="https://github.com/udbhav968-creator" target="_blank" rel="noreferrer" className="social-icon"><FaGithub size={24} /></a>
            <a href="mailto:s24cseu0095@bennett.edu.in" className="social-icon"><Mail size={24} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
