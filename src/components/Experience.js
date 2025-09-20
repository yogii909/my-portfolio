import React from 'react';
import './Experience.css';

const Experience = ({ experience, portfolioType }) => {
  return (
    <section id="experience" className="experience section">
      <div className="section-header">
        <h2>Professional Experience</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          {portfolioType === 'software' 
            ? 'Software Development Journey'
            : 'Network Engineering Journey'}
        </p>
      </div>
      
      <div className="experience-timeline">
        <div className="timeline-line"></div>
        
        {experience.map((exp, index) => (
          <div 
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            
            <div className="timeline-content card">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <div className="company-info">
                  <i className="fas fa-building"></i>
                  <span>{exp.company}</span>
                </div>
                <div className="duration-info">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{exp.duration}</span>
                </div>
              </div>
              
              <ul className="experience-details">
                {exp.description.map((detail, dIndex) => (
                  <li key={dIndex}>
                    <i className="fas fa-chevron-right"></i>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="experience-glow"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;