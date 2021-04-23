import React from 'react';
import Kristina from '../assets/photos/Kristina.png';

function About() {
    return (
        <div>
            <img src={Kristina} alt="Kristina Wells Owner" />
            <div className="about-content">
                <p>Hi! My name's Kristina, and I believe that everyone should enjoy desserts.</p>
                <p>No exceptions.</p>
                <p>Blurb about how you got here</p>
                <p>Blurb about where it's going</p>
            </div>
        </div>
    )
}

export default About;