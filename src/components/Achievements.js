import React from 'react';
import './Achievements.css';

const Achievements = ({ achievements }) => {
  return (
    <section id="achievements" className="achievements section">
      <div className="section-header">
        <h2>Achievements & Certifications</h2>
        <div className="section-underline"></div>
      </div>
      
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="achievement-item"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="achievement-icon">
              <i className="fas fa-trophy"></i>
            </div>
            
            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
            
            <div className="achievement-badge">
              <i className="fas fa-medal"></i>
            </div>
          </div>
        ))}
      </div>
      
      <div className="achievements-decoration">
        <div className="star star-1"><i className="fas fa-star"></i></div>
        <div className="star star-2"><i className="fas fa-star"></i></div>
        <div className="star star-3"><i className="fas fa-star"></i></div>
        <div className="star star-4"><i className="fas fa-star"></i></div>
      </div>
    </section>
  );
};

export default Achievements;