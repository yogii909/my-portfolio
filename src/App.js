import React, { useState, useEffect } from 'react';
import './App.css';
import portfolioData from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import OpeningAnimation from './components/OpeningAnimation';

function App() {
    const [portfolioType, setPortfolioType] = useState('software');
    const [showOpening, setShowOpening] = useState(true);
    const [isSwitching, setIsSwitching] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOpening(false);
        }, 4000); // give enough time for fade-out
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Mouse cursor effect
        const cursor = document.querySelector('.glow-cursor');
        const handleMouseMove = (e) => {
            if (cursor) {
                cursor.style.left = e.clientX - 10 + 'px';
                cursor.style.top = e.clientY - 10 + 'px';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('.section');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, [portfolioType]);

    const handlePortfolioSwitch = (type) => {
        if (type !== portfolioType) {
            setIsSwitching(true);
            setTimeout(() => {
                setPortfolioType(type);
                setIsSwitching(false);
            }, 300);
        }
    };

    const currentPortfolio = portfolioData[portfolioType];
    const commonData = portfolioData.common;

    return (
        <div className="App">
            {/* Opening animation sits above everything, fades out automatically */}
            {showOpening && <OpeningAnimation name={commonData.name} />}

            <ParticleBackground />
            <div className="glow-cursor"></div>

            <Navbar
                portfolioType={portfolioType}
                onSwitch={handlePortfolioSwitch}
            />

            <main className={`main-content ${isSwitching ? 'switching' : ''}`}>
                // In App.js
                <Hero
                    name={commonData.name}
                    tagline={commonData.tagline}
                />

                <About
                    about={commonData.about}
                    email={commonData.email}
                    phone={commonData.phone}
                    linkedin={commonData.linkedin}
                />

                <Skills
                    skills={currentPortfolio.skills}
                    portfolioType={portfolioType}
                />

                <Projects
                    projects={currentPortfolio.projects}
                    portfolioType={portfolioType}
                />

                <Experience
                    experience={currentPortfolio.experience}
                    portfolioType={portfolioType}
                />

                <Education
                    education={commonData.education}
                />

                <Achievements
                    achievements={commonData.achievements}
                />

                <Contact
                    email={commonData.email}
                />
            </main>
        </div>
    );
}

export default App;
