import React from 'react';
import './Skills.css';

const Skills = ({ skills, portfolioType }) => {
  const getIcon = (category) => {
    const icons = {
      'Programming': 'fas fa-code',
      'Web Development': 'fas fa-globe',
      'Platforms & Tools': 'fas fa-tools',
      'PCB Design': 'fas fa-microchip',
      'Electronics': 'fas fa-bolt',
      'Networking Fundamentals': 'fas fa-network-wired',
      'Routing & Switching': 'fas fa-route',
      'WAN & VPN': 'fas fa-shield-alt',
      'Tools & Platforms': 'fas fa-toolbox'
    };
    return icons[category] || 'fas fa-cog';
  };

  return (
    <section id="skills" className="skills section">
      <div className="section-header">
        <h2>Technical Skills</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          {portfolioType === 'software' 
            ? 'Software Development & Engineering Skills'
            : 'Networking & Infrastructure Skills'}
        </p>
      </div>
      
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div 
            key={index} 
            className="skill-category card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-header">
              <i className={getIcon(skillCategory.category)}></i>
              <h3>{skillCategory.category}</h3>
            </div>
            
            <div className="skill-items">
              {skillCategory.items.map((item, itemIndex) => (
                <span key={itemIndex} className="skill-tag">
                  {item}
                  <span className="skill-glow"></span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="skills-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Skills;