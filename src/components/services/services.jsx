import React from 'react'
import "./services.css"
import {BsCheckAll} from 'react-icons/bs'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {HiOutlineServer} from 'react-icons/hi'

const services = () => {
  return (
    <section id='services'>
      <div className="section__header">
        <span className="section__label">Services</span>
        <h2 className="section__title">How I can help</h2>
      </div>

      <div className='container services__container'>
        <article className='service card'>
          <div className='service__icon-wrap'>
            <HiOutlineDesktopComputer className='service__icon' />
          </div>
          <h3>Frontend Development</h3>
          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Building reusable React components & design systems</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Creating responsive, pixel-perfect interfaces</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>React Native mobile app development</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>API integration & state management</p>
            </li>
          </ul>
        </article>

        <article className='service card'>
          <div className='service__icon-wrap service__icon-wrap--accent'>
            <HiOutlineServer className='service__icon' />
          </div>
          <h3>Backend Engineering</h3>
          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>RESTful API design with Node & Express</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Database architecture with MongoDB & PostgreSQL</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Shopify app development & integrations</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
export default services;
