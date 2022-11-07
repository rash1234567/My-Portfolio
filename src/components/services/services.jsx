import React from 'react'
import "./services.css"
import {BsCheckAll} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article  className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>I use React to create re-usable component</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Building user interfaces from scratch</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Updating User interfaces</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Fetching data and APIs.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
export default services
