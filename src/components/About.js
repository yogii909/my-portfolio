import React from 'react';
import './About.css';

const About = ({ about, email, phone, linkedin }) => {
  return (
    <section id="about" className="about section">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-underline"></div>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <div className="image-wrapper">
            <div className="about-photo">
              <i className="fas fa-user-graduate"></i>
            </div>
            <div className="image-decoration decoration-1"></div>
            <div className="image-decoration decoration-2"></div>
          </div>
        </div>
        
        <div className="about-text">
          <p className="about-description">{about}</p>
          
          <div className="about-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <span className="info-label">Email</span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <span className="info-label">Phone</span>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fab fa-linkedin"></i>
              <div>
                <span className="info-label">LinkedIn</span>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">Connect</a>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">B.Tech</div>
              <div className="stat-label">Current Degree</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2026</div>
              <div className="stat-label">Expected Graduation</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;