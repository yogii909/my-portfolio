import React from 'react';
import './Hero.css';

const Hero = ({ name, tagline }) => {
    return (
        <section id="home" className="hero section">
            <div className="hero-background">
                <div className="hero-shape shape-1"></div>
                <div className="hero-shape shape-2"></div>
                <div className="hero-shape shape-3"></div>
            </div>

            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-greeting">Hello, I'm</div>
                    <h1 className="hero-name">
                        {name}
                        <span className="sparkle">✨</span>
                    </h1>
                    <div className="hero-role">
                        {/* The animated text has been replaced with this static span */}
                        <span className="role-text">
              Software & Network Engineer
            </span>
                    </div>
                    <p className="hero-tagline">{tagline}</p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>

                    <div className="hero-social">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/yogesh-pruthi-a76375274" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:pruthiyogesh3@gmail.com" className="social-link">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="image-container">
                        <div className="image-placeholder">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="image-border"></div>
                        <div className="floating-elements">
                            <span className="float-element element-1">{}</span>
                            <span className="float-element element-2">&lt;/&gt;</span>
                            <span className="float-element element-3">#</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll Down</span>
                <div className="scroll-arrow">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </section>
    );
};

export default Hero;