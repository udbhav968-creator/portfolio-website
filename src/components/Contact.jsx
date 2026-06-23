import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        
        <div className="contact-container glass">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p className="contact-desc">
              I'm currently seeking research internship opportunities in AI/ML and Data Science. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>s24cseu0095@bennett.edu.in</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Bennett University, Greater Noida</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Your Message" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
