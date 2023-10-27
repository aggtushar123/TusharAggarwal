import React from 'react'
import './about.css'
import ME from '../../assets/about.JPEG'
import {FaAward} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About"/>
        </div>

      </div>
     
     
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2 Year Working</small>
          </article>
          <article className='about__card'>
            
            <FaAward className='about__icon'/>
            <h5>Publications</h5>
            <small>2 </small>
          </article>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Test Scores</h5>
            <small>GRE : </small>
            <small>TOEFL : </small>
          </article>
        </div>
      <p>
      A fullstack developer with advanced DS-Algo skills. I love to create web apps and solve new challenges everyday.
      </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    
    
    </section>
  )
}

export default About
