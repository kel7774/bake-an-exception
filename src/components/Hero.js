import React from 'react'
import HeroStyles from '../styles/HeroStyles'
import Rolls from '../assets/photos/DinnerRolls.png'
import Cookies from '../assets/photos/BreakUpCookies.png'
import LemonCurdCake from '../assets/photos/LemonCurdCake.png'

function Hero () {
  return (
    <HeroStyles>
      <img src={Rolls} alt="Dinner Rolls" />
      <img src={LemonCurdCake} alt="Lemon Curd Cake" />
      <img src={Cookies} alt="Break Up Cookies" />
    </HeroStyles>
  )
}

export default Hero
