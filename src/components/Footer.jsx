import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">&lt;Portfolio /&gt;</h3>
            <p>Building digital experiences that matter.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {currentYear} Your Name. Made with <FaHeart className="heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

