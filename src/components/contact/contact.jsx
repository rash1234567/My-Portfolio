import React from 'react'
import "./contact.css"
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs'

const contactLinks = [
  {
    icon: BsLinkedin,
    label: 'LinkedIn',
    detail: 'Imam Rasheedat',
    href: 'https://www.linkedin.com/in/imam-rasheedat-8b760b1b2/',
    action: 'Connect on LinkedIn',
    variant: 'linkedin',
  },
  {
    icon: BsGithub,
    label: 'GitHub',
    detail: '@rash1234567',
    href: 'https://github.com/rash1234567',
    action: 'View my repos',
    variant: 'github',
  },
  {
    icon: MdOutlineMarkEmailRead,
    label: 'Email',
    detail: 'imamrasheedatahmad1993@gmail.com',
    href: 'mailto:imamrasheedatahmad1993@gmail.com',
    action: 'Send an email',
    variant: 'email',
  },
  {
    icon: BsWhatsapp,
    label: 'WhatsApp',
    detail: '+234 916 407 4519',
    href: 'https://wa.me/2349164074519',
    action: 'Chat on WhatsApp',
    variant: 'whatsapp',
  },
]

const Contact = () => {
  return (
    <section id='contact'>
      <div className="section__header">
        <span className="section__label">Contact</span>
        <h2 className="section__title">Let's build something</h2>
      </div>

      <div className='container contact__container'>
        {contactLinks.map(({ icon: Icon, label, detail, href, action, variant }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`contact__card card contact__card--${variant}`}
          >
            <div className="contact__card-icon-wrap">
              <Icon className="contact__card-icon" />
            </div>
            <h4>{label}</h4>
            <p className="contact__detail">{detail}</p>
            <span className="contact__action">{action} →</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
