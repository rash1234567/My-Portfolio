import React from 'react'
import "./footer.css"
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
        <div className="footer__inner container">
          <a href="#home" className='footer__logo'>IR<span>.</span></a>

          <ul className='permalinks'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className='footer__socials'>
            <a href="https://github.com/rash1234567" target='_blank' rel="noreferrer"><FaGithub/></a>
            <a href="https://www.instagram.com/brokenamethyst/" target='_blank' rel="noreferrer"><FiInstagram/></a>
            <a href="https://twitter.com/_Rasheedharh" target='_blank' rel="noreferrer"><BsTwitter/></a>
          </div>

          <div className='footer__copyright'>
            <small>&copy; {new Date().getFullYear()} Rashcodes. All rights reserved.</small>
          </div>
        </div>
    </footer>
  )
}
export default footer
