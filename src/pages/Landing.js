import React from 'react'
import LandingStyles from '../styles/LandingStyles'
import Hero from '../components/Hero'

function Landing () {
  return (
    <LandingStyles className='landing-page'>
      <h1>
        <span>Bake An Exception</span>
      </h1>
      <Hero />
      <h3>
        <span>Because dessert should come before anything else.</span>
      </h3>
    </LandingStyles>
  )
}

export default Landing
