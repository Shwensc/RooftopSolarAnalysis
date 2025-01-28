import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Geospatial Analysis Of Solar Energy Potential For Rooftops</h1>
        <p>The Project helps homeowners estimate How many solar panles can fit on their rooftops using satellite imaginary. it also calculates the potential energy they couldgenerate from insatlling those panels.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
