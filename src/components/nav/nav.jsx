import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./nav.css"
import { HiMenu, HiX, HiDownload, HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'
import CV from '../../assets/RASHEEDAH CV.pdf'

const navLinks = [
  { href: '/#home', label: 'Home', hash: '#home' },
  { href: '/#about', label: 'About', hash: '#about' },
  { href: '/projects', label: 'Projects', hash: null },
  { href: '/#experience', label: 'Skills', hash: '#experience' },
  { href: '/#services', label: 'Experience', hash: '#services' },
  { href: '/#contact', label: 'Contact', hash: '#contact' },
]

const Nav = () => {
  const [activeNav, setActiveNav] = useState('/#home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname === '/projects') {
      setActiveNav('/projects')
    }
  }, [location.pathname])

  const handleNavClick = (href) => {
    setActiveNav(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`nav ${scrolled || location.pathname === '/projects' ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__logo" onClick={() => handleNavClick('/#home')}>
          IR<span>.</span>
        </Link>

        <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              {href.startsWith('/#') ? (
                <a
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={activeNav === href ? 'active' : ''}
                >
                  {label}
                </a>
              ) : (
                <Link
                  to={href}
                  onClick={() => handleNavClick(href)}
                  className={activeNav === href ? 'active' : ''}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
          <li className="nav__mobile-actions">
            <button className="nav__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <HiSun /> : <HiMoon />}
            </button>
            <a href={CV} download className="nav__resume">
              <HiDownload />
              Download Resume
            </a>
          </li>
        </ul>

        <div className="nav__actions">
          <button className="nav__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <HiSun /> : <HiMoon />}
          </button>
          <a href={CV} download className="nav__resume">
            <HiDownload />
            <span>Download Resume</span>
          </a>
        </div>

        <button
          className="nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </nav>
  )
}

export default Nav
