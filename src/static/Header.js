import React from 'react';
import { Link } from "react-router-dom";
import HeaderStyles from '../styles/HeaderStyles';

function Header () {
    return (
        <HeaderStyles>
            <div className="content">
                <div>
                    <Link to="/">Bake An Exception</Link>
                </div>
                <div>
                     Order
                </div>
                <div>
                    <Link to="/about">About</Link>
                </div>
                <div>
                    <Link to="/gallery">Gallery</Link>
                </div>
                <div>
                    Contact
                </div>
            </div>
        </HeaderStyles>
    )
}

export default Header;