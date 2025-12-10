import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

      <div className="about__content">
        <div className='about__cards'>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>few Completed</small>
          </article>
        </div>

        <p>
        I am a software engineer passionate about creating things that live on the internet. I specialize in building user interfaces and developing first-class web applications that are both engaging and efficient.
        </p>

        <a href="#contact" className='btn btn-primary'>Contact me </a>

      </div>
    </div>
    </section>
  )
}
export default about
