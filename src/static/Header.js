import React from 'react';
import HeaderStyles from '../styles/HeaderStyles';

function Header () {
    return (
        <HeaderStyles>
            <div className="content">
                <div>
                    Bake An Exception
                </div>
                <div>
                    Order
                </div>
                <div>
                    About
                </div>
                <div>
                    Gallery
                </div>
                <div>
                    Contact
                </div>
            </div>
        </HeaderStyles>
    )
}

export default Header;