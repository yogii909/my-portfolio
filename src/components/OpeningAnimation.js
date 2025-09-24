import React, { useEffect, useState } from 'react';
import './OpeningAnimation.css';

const OpeningAnimation = ({ name }) => {
    const [startAnimation, setStartAnimation] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start the main animation shortly after the component loads
        const animationTimer = setTimeout(() => setStartAnimation(true), 500);

        // Start the fade-out after the main animation has finished
        const fadeTimer = setTimeout(() => setFadeOut(true), 3500);

        return () => {
            clearTimeout(animationTimer);
            clearTimeout(fadeTimer);
        };
    }, []);

    return (
        <div className={`opening-animation ${fadeOut ? 'fade-out' : ''}`}>
            <div className={`opening-content ${startAnimation ? 'show' : ''}`}>
                <h1 className="opening-name">
                    {name}
                </h1>

                <div className="opening-tagline">
                    <p>Welcome to My Portfolio</p>
                    <div className="tagline-underline"></div>
                </div>
            </div>
        </div>
    );
};

export default OpeningAnimation;