import React from 'react'
import AboutStyles from '../styles/AboutStyles'
import Kristina from '../assets/photos/Kristina.png'
import Derek from '../assets/photos/Derek.png'
import Kids from '../assets/photos/Kids.png'

function About () {
    return (
        <AboutStyles className="about-container">
            <section className="first-section">
                <div className="img-container">
                    <img src={Kristina} alt="Kristina Wells Owner" />
                    <figcaption><span>That's me. Welcome! <span>🍰</span></span></figcaption>
                </div>
                <div className="kristina-container">
                    <p><span>Hi! My name is Kristina, &amp; I believe that everyone should enjoy desserts.</span></p>
                    <em><span>No exceptions.</span></em>
                    <p><span>When I was growing up, my mom made desserts that were so good, I had to learn how to make them myself.</span></p>
                    <p><span>What started off as a hobby of mine became a passion for all things sugar.</span></p>
                    <p><span>Fast forward to 2021, &amp; I started to get requests from friends and family to make everything from birthday cakes, smash cakes, &amp; most recently, weddings cakes.</span></p>
                    <p><span>With some encouragement from my boyfriend &amp; best friend, Derek, friends, and family, I opened up for business.</span></p>
                </div>
            </section>
            <section className="second-section">
                <div className="derek-container">
                    <p><span>The peanut butter to my jelly.</span></p>
                    <p><span>This is Derek, my best friend, partner in crime, adventure buddy, boyfriend of the century.</span></p>
                    <p><span>He loves playing bass, Magic, various video games, and cooking. That man can <em>cook</em> y'all.</span></p>
                    <p><span>If you're looking for someone who makes the best BBQ this side of Lafayette Parish, he's it.</span></p>
                    <p><span>Go "here" for his website.</span></p>
                </div>
                <div className="img-container">
                    <img src={Derek} alt="Derek" />
                    <figcaption><span>My love. <span>🖤</span></span></figcaption>
                </div>
            </section>
            <section className="third-section">
                <div className="img-container">
                    <img src={Kids} alt="Kids" />
                    <figcaption><span>Calvin &amp; Hobbes <span>🦁</span></span></figcaption>
                </div>
                <div className="kid-container">
                    <p><span>And here's the reason why I do what I do.</span></p>
                    <p><span>As you can tell, they really like that I make sweets for a living! <span>😂</span></span></p>
                </div>
            </section>
        </AboutStyles>
    )
}

export default About;