import React from 'react';
import AboutStyles from '../styles/AboutStyles';
import Kristina from '../assets/photos/Kristina.png';

function About() {
    return (
        <AboutStyles>
            <img src={Kristina} alt="Kristina Wells Owner" />
            <p>Hi! My name's Kristina, and I believe that everyone should enjoy desserts.</p>
            <p>No exceptions.</p>
            <p>Blurb about how you got here</p>
            <p>Where it's going</p>
            <p>Blurb about growth</p>
        </AboutStyles>
    )
}

export default About;