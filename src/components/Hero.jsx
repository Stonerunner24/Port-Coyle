import React from 'react'
import Gmail from '../icons/gmail'
import Linkedin from '../icons/linkedin'
import Github from '../icons/github'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Elijah Coyle</span>
            </h1>
            <h2 className="hero-subtitle">Software Engineer</h2>
            <p className="hero-description">
              I build exceptional digital experiences that make people's lives easier.
              Passionate about creating elegant solutions to complex problems.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            <div className="social-links">
              <Github />
              <Linkedin />
              <Gmail />
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img src="/portrait.jpg" alt="Elijah Coyle" />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

