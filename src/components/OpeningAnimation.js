import React, { useEffect, useState } from 'react';
import './OpeningAnimation.css';

const OpeningAnimation = ({ name }) => {
  const [showName, setShowName] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => setShowName(true), 1000);
    const taglineTimer = setTimeout(() => setShowTagline(true), 2000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(taglineTimer);
    };
  }, []);

  return (
    <div className="opening-animation">
      <div className="sparks-container">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="spark" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className={`opening-content ${showName ? 'show' : ''}`}>
        <h1 className="opening-name">
          {name.split('').map((char, i) => (
            <span 
              key={i} 
              className="letter"
              style={{ animationDelay: `${1.5 + i * 0.1}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <div className={`opening-tagline ${showTagline ? 'show' : ''}`}>
          <p>Welcome to My Portfolio</p>
          <div className="tagline-underline"></div>
        </div>
      </div>
    </div>
  );
};

export default OpeningAnimation;