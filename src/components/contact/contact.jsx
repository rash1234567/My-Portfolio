import React from 'react'
import "./contact.css"
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6oei8o5', 'template_grwvygq', e.target, 'DFa9X1LBu0nzEyvdv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <div className="section__header">
        <span className="section__label">Contact</span>
        <h2 className="section__title">Let's build something</h2>
      </div>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option card'>
              <div className="contact__option-icon-wrap">
                <MdOutlineMarkEmailRead className='contact__option-icon'/>
              </div>
              <h4>Email</h4>
              <p className='contact__detail'>imamrasheedatahmad1993@gmail.com</p>
              <a href="mailto:imamrasheedatahmad1993@gmail.com" target="_blank" rel="noreferrer">
                Send a message
              </a>
          </article>

          <article className='contact__option card'>
              <div className="contact__option-icon-wrap contact__option-icon-wrap--accent">
                <BsWhatsapp className='contact__option-icon'/>
              </div>
              <h4>WhatsApp</h4>
              <p className='contact__detail'>+234 809 140 8145</p>
              <a href="https://wa.me/2348091408145" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name='name' placeholder='Your name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Tell me about your project...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
