import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BsCodeSlash} from 'react-icons/bs'
import {HiOutlineLightningBolt} from 'react-icons/hi'
import { getYearsExperience } from '../../utils/experience'

const about = () => {
  const yearsExp = getYearsExperience()

  return (
    <section id='about'>
      <div className="section__header">
        <span className="section__label">About</span>
        <h2 className="section__title">A bit about me</h2>
      </div>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>20+</h5>
              <small>Projects Built</small>
            </article>
            <article className='about__card card'>
              <BsCodeSlash className='about__icon'/>
              <h5>15+</h5>
              <small>Technologies</small>
            </article>
            <article className='about__card card'>
              <HiOutlineLightningBolt className='about__icon'/>
              <h5>{yearsExp}</h5>
              <small>Years Experience</small>
            </article>
          </div>

          <p>
            I'm a software engineer who loves turning ideas into polished digital experiences.
            From athlete performance apps at Wardbord to full-stack web platforms, I focus on
            building products that are fast, intuitive, and built to last.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's work together</a>
        </div>
      </div>
    </section>
  )
}
export default about
