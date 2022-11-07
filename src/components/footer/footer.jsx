import React from 'react'
import "./footer.css"
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>RASHCODES</a>
        
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer__socials'>
          <a href="https://www.facebook.com/imamrasheedat/1"><FaFacebook/></a>
          <a href="https://www.instagram.com/imamrasheedat/"><FiInstagram/></a>
          <a href="https://twitter.com/_Rasheedharh"><BsTwitter/></a>
        </div>

        <div className='footer__copyright'>
          <small>&copy; Rashcodes. All rights reserved.</small>
        </div>
    </footer>
  )
}
export default footer
