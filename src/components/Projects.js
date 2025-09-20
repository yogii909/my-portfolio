import React, { useState } from 'react';
import './Projects.css';

const Projects = ({ projects, portfolioType }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects section">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          {portfolioType === 'software' 
            ? 'Software & Hardware Integration Projects'
            : 'Networking & System Projects'}
        </p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card card"
            style={{ animationDelay: `${index * 0.15}s` }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-highlights">
              {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                <div key={hIndex} className="highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            
            <div className="project-tech">
              {project.tech.map((tech, tIndex) => (
                <span key={tIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-hover">
              <span>View Details</span>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        ))}
      </div>
      
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <i className="fas fa-times"></i>
            </button>
            
            <h3>{selectedProject.title}</h3>
            <p className="modal-description">{selectedProject.description}</p>
            
            <h4>Key Highlights</h4>
            <ul className="modal-highlights">
              {selectedProject.highlights.map((highlight, index) => (
                <li key={index}>
                  <i className="fas fa-star"></i>
                  {highlight}
                </li>
              ))}
            </ul>
            
            <h4>Technologies Used</h4>
            <div className="modal-tech">
              {selectedProject.tech.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;