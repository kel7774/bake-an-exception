import React from 'react';
import AboutStyles from '../styles/AboutStyles';
import Kristina from '../assets/photos/Kristina.png';
import Derek from '../assets/photos/Derek.png';
import Kids from '../assets/photos/Kids.png';

function About() {
    return (
        <AboutStyles className="about-container">
            <div className="first-section">
                <div className="img-container">
                    <img src={Kristina} alt="Kristina Wells Owner" />
                    <figcaption>That's me. Welcome! <span>🍰</span></figcaption>
                </div>
                <div className="kristina-container">
                    <p>Hi! My name is Kristina, &amp; I believe that everyone should enjoy desserts.</p>
                    <em>No exceptions.</em>
                    <p>When I was growing up, my mom made desserts that were so good, I had to learn how to make them myself.</p>
                    <p>What started off as a hobby of mine became a passion for all things sugar.</p>
                    <p>Fast forward to 2021, &amp; I started to get requests from friends and family to make everything from birthday cakes, smash cakes, &amp; most recently, weddings cakes.</p>
                    <p>With some encouragement from my boyfriend &amp; best friend, Derek, friends, and family, I opened up for business.</p>
                </div>
            </div>
            <div className="second-section">
                <div className="derek-container">
                    <p>The peanut butter to my jelly.</p>
                    <p>This is Derek, my best friend, partner in crime, adventure buddy, boyfriend of the century.</p>
                    <p>He loves playing bass, Magic, various video games, and cooking. That man can <em>cook</em> y'all.</p>
                    <p>If you're looking for someone who makes the best BBQ this side of Lafayette Parish, he's it.</p>
                    <p>Go "here" for his website.</p>
                </div>
                <div className="img-container">
                    <img src={Derek} alt="Derek" />
                    <figcaption>My love. <span>🖤</span></figcaption>
                </div>
            </div>
            <div className="third-section">
                <div className="img-container">
                    <img src={Kids} alt="Kids" />
                    <figcaption>Calvin &amp; Hobbes <span>🦁</span></figcaption>
                </div>
                <div className="kid-container">
                    <p>And here's the reason why I do what I do.</p>
                    <p>As you can tell, they really like that I make sweets for a living! <span>😂</span></p>
                </div>
            </div>
        </AboutStyles>
    )
}

export default About;