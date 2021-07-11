import React from 'react'
import LandingStyles from '../styles/LandingStyles'
import Hero from '../components/Hero'

function Landing () {
  return (
    <LandingStyles className='landing-page'>
      <header>
        Bake An Exception
      </header>
      <Hero />
      <h3>
        Because dessert should come before anything else.
      </h3>
    </LandingStyles>
  )
}

export default Landing
