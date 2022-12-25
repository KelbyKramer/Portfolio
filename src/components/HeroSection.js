import React from 'react'
import '../App.css'
import './HeroSection.css'
import { Button } from './Button'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>Hi!</h1>
        <h2>I'm Kelby Kramer</h2>
        <p class="text-2xl">And I'm a <u>Software Engineer</u></p>   
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' 
             buttonSize='btn--large' pathName="https://github.com/KelbyKramer">
                GitHub <i class="fa-brands fa-github"></i>
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                pathName="https://www.linkedin.com/in/kelby-kramer-472a0218b/"
                >LinkedIn <i class="fa-brands fa-linkedin"></i>
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                pathName="https://instagram.com/KreatureKelb"
                >Instagram <i class="fa-brands fa-square-instagram"></i>
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                pathName="mailto:kramerkelby@gmail.com"
                >Gmail <i class="fa-solid fa-envelope"></i>
            </Button>
        </div>  
    </div>
  )
}

export default HeroSection
