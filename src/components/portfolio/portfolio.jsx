import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src='https://scontent.cdninstagram.com/v/t1.15752-9/310115073_2099731476901054_5877363978615637296_n.jpg?stp=dst-jpg_s480x480&_nc_cat=106&ccb=1-7&_nc_sid=5a057b&_nc_ohc=6HHkvyZHksQAX_mcUjc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AdReRelpL-K5gd8P802HFWM_XJ8ijWLjg4lyEX0wqR7sgg&oe=638D2B6E' alt="" />
          </div>
          <h3>SHOKLIN</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/rash1234567/shoklin" className='btn' target='_blank'>Github</a>
          <a href="https://shoklin.onrender.com/" className='btn btn-primary' target='_blank'>Live
           Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src='https://scontent.cdninstagram.com/v/t1.15752-9/314420721_529858645653329_7995159256338673077_n.jpg?stp=dst-jpg_s480x480&_nc_cat=107&ccb=1-7&_nc_sid=5a057b&_nc_ohc=NhFz5qoyIKwAX-6LYZb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AdQQ1pSSYlewiXN-8-5mq--0gkBJTG1joWxVxS5PKc2ADw&oe=638D4468' alt="" />
          </div>
          <h3>Apple</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/rash1234567/Apple-store.git" className='btn' target='_blank'>Github</a>
          <a href="https://majestic-gelato-78453c.netlify.app/" className='btn btn-primary' target='_blank'>Live
           Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG6} alt="" />
          </div>
          <h3>MY PORTFOLIO</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/rash1234567/portfolio" className='btn' target='_blank'>Github</a>
          <a href="https://rashcodes.netlify.app/" className='btn btn-primary' target='_blank'>Live
           Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio
