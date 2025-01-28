import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>Harnessing the Power of Solar And Renewable Energy</h3>
        <h2>Rooftop Solar Panels</h2>
        <p>Our tool leverages Google Earth Engine to allow users to select rooftop areas and calculate their dimensions, determining suitability for solar panel installation. By using standard solar panel dimensions, it estimates the number of panels that can fit and calculates potential energy production. The tool also provides interactive visualization, helping users understand the benefits of solar energy for their rooftops.</p>
        <p><i class="fa fa-check-circle text-primary me-3"></i>Satellite-based Estimation</p>
        <p><i class="fa fa-check-circle text-primary me-3"></i>Accurate Solar Calculations</p>
        <p><i class="fa fa-check-circle text-primary me-3"></i>Solar Energy Potential</p>
        <p><i class="fa fa-check-circle text-primary me-3"></i>Interactive Visualization</p>
      </div>
    </div>
  )
}

export default About
