import React from 'react'
import Resume from '../../assets/RasheedatResume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download="RasheedatResume.pdf" className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
