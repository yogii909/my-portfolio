import React from 'react';
import './Education.css';

const Education = ({ education }) => {
  const getIcon = (degree) => {
    if (degree.includes('B.Tech')) return 'fas fa-graduation-cap';
    if (degree.includes('12th')) return 'fas fa-school';
    if (degree.includes('10th')) return 'fas fa-book';
    return 'fas fa-certificate';
  };

  return (
    <section id="education" className="education section">
      <div className="section-header">
        <h2>Education</h2>
        <div className="section-underline"></div>
      </div>
      
      <div className="education-grid">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="education-card card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="education-icon">
              <i className={getIcon(edu.degree)}></i>
            </div>
            
            <div className="education-content">
              <h3>{edu.degree}</h3>
              <div className="institution">
                <i className="fas fa-university"></i>
                <span>{edu.institution}</span>
              </div>
              <div className="duration">
                <i className="fas fa-clock"></i>
                <span>{edu.duration}</span>
              </div>
              <p className="details">{edu.details}</p>
            </div>
            
            <div className="education-decoration">
              <div className="decoration-line"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;