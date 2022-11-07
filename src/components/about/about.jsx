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
            <BsAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 Year Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>worldwide countries</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>few Completed</small>
          </article>
        </div>

        <p>
        I am a software engineer, i enjoy creating things that live on the internet.i build user interfaces I am Passionate about building first-class web applications.
         I am also a graduate of Food Science from university of ilorin.
        </p>

        <a href="#contact" className='btn btn-primary'>Contact me </a>

      </div>
    </div>
    </section>
  )
}
export default about
