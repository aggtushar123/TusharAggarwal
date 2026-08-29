import React from 'react'
import CV from '../../assets/Tushar_Aggarwal_.pdf'
const CTA = () => {
  return (
    <div className='cta'>

        <a href={CV} download='Tushar_Aggarwal_Resume.pdf' className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA
