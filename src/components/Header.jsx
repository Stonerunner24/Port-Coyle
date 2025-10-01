import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
            &lt;Portfolio /&gt;
          </a>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

