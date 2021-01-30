import React from 'react';

import './Home_welcome.css';

const Welcome = () => {
    return (
        <div id="welcomeSection" className="welcomeContainer welcome-container">
            <div className="welcome-Info">
                <h1 className="welcome-Info-Heading">Welcome to Web AI Game</h1>
                <p className="welcome-Info-Subheading">where you can play interactive games empowered with an AI</p>
                <a href="#game-start-id" type="button" className="welcome-Info-Button">Show Me The Games</a>
            </div>
            <div className="arrow-down"></div>
        </div>
    );
}

export default Welcome;