import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__content">
          <p className="header__greeting">Hello, I'm</p>
          <h1>Imam Rasheedat</h1>
          <p className="header__role">
            I build <span className="header__highlight">web & mobile</span> products
            that people actually use.
          </p>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="header__visual">
          <div className="header__image-wrapper">
            <img src={ME} alt="Imam Rasheedat" />
          </div>
          <div className="header__badge header__badge--top">React & React Native</div>
          <div className="header__badge header__badge--bottom">Full-Stack Developer</div>
        </div>
      </div>

      <a href="#about" className="scroll__down">
        <span>Explore</span>
        <div className="scroll__line"></div>
      </a>
    </header>
  )
}

export default header
