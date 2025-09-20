import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ email }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          Let's connect and discuss opportunities
        </p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect!</h3>
          <p>I'm always interested in hearing about new opportunities and exciting projects.</p>
          
          <div className="contact-methods">
            <a href={`mailto:${email}`} className="contact-method">
              <i className="fas fa-envelope"></i>
              <span>Email Me</span>
            </a>
            <a href="https://linkedin.com/in/yogesh-pruthi-a76375274" target="_blank" rel="noopener noreferrer" className="contact-method">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-method">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="contact-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
            <span className="input-highlight"></span>
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <span className="input-highlight"></span>
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="form-input"
            />
            <span className="input-highlight"></span>
          </div>
          
          <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <i className="fas fa-paper-plane"></i>
              </>
            )}
          </button>
          
          {submitMessage && (
            <div className="submit-message">
              <i className="fas fa-check-circle"></i>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;