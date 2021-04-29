import React from 'react';
import Instagram from '../assets/icons/Instagram';
import Facebook from '../assets/icons/Facebook';
import FooterStyles from '../styles/FooterStyles';

function Footer() {
    return (
        <FooterStyles>
            <div className="content">
                <div>
                    Bake An Exception © 2021
                </div>
                <div>
                    Follow Us
                    <div className="icon-container">
                        <div className="svg-container">
                            <a href="https://www.facebook.com/BakeAnException" rel="noreferrer" target="_blank" >
                                <Facebook />
                            </a>
                        </div>
                        <div className="svg-container" >
                            <a href="https://instagram.com/BakeAnExcpetion" rel="noreferrer" target="_blank">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    Made with <span>🖤</span> by <a href="https://github.com/kel7774" rel="noreferrer" target="_blank">Kelli Landry</a>
                </div>
            </div>
        </FooterStyles>
    )
}

export default Footer;