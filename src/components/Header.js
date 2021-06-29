import React from 'react'
import { Link } from 'react-router-dom'
import HeaderStyles from '../styles/HeaderStyles'

function Header () {
  return (
    <HeaderStyles>
      <div className="content">
        <nav>
          <Link to="/">Bake An Exception</Link>
        </nav>
        <nav>
          <Link to="/shop">Shop</Link>
        </nav>
        <nav>
          <Link to ="/order">Custom Order</Link>
        </nav>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <nav>
          <Link to="/gallery">Gallery</Link>
        </nav>
        <nav>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </HeaderStyles>
  )
}

export default Header;