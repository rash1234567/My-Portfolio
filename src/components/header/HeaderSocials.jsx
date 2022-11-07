import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/imam-rasheedat-8b760b1b2/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/rash1234567" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials
