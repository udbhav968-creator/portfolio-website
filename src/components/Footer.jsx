import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="gradient-text">&lt;Udbhav /&gt;</span>
            <p className="footer-tagline">Building intelligent systems for the future.</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/udbhav968-creator" target="_blank" rel="noreferrer" className="footer-social-link">
              <FaGithub size={24} />
            </a>
            <a href="mailto:s24cseu0095@bennett.edu.in" className="footer-social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Udbhav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
