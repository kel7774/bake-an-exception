import React from 'react';
import { FacebookIcon } from 'react-share';
import FooterStyles from '../styles/FooterStyles';

function Footer() {
    const facebook = `https://www.facebook.com/BakeAnException`;
    return (
        <FooterStyles>
            <div className="content">
                <div>
                    Bake An Exception © 2021
                </div>
                <div>
                    Follow Us
                    <div>
                        <a href="https://www.facebook.com/BakeAnException" target="_blank" >
                            <FacebookIcon size={15} round={true} />
                        </a>
                    </div>
                </div>
                <div>
                    Contact
                </div>
            </div>
        </FooterStyles>
    )
}

export default Footer;