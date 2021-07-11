import React from 'react'
import { Link } from 'react-router-dom'
import HeaderStyles from '../styles/HeaderStyles'

function Header () {
  return (
    <HeaderStyles>
      <nav role='navigation'>
        <ul className='full-container'>
          <div className='home-container'>
            <li><Link to='/'>Home</Link></li>
          </div>
          <div className='menu-container'>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='#'>Custom Order</Link>
              <ul className='dropdown'>
                <li><Link to='/cake'>Cake</Link></li>
                <li><Link to='/cheesecake'>Cheesecake</Link></li>
                <li><Link to='/cupcakes'>Cupcakes</Link></li>
                <li><Link to='/cookies'>Cookies</Link></li>
              </ul>
            </li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </div>
        </ul>
      </nav>
    </HeaderStyles>
  )
}

export default Header
