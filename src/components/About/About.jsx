import React from 'react'
import { motion } from 'framer-motion'
import './about.css'
import {FaAward, FaUsers, FaCertificate} from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <motion.div
      className="container about__container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>2+ Years Working</small>
        </article>
        <article className='about__card'>
          <FaUsers className='about__icon'/>
          <h5>Learners Mentored</h5>
          <small>4000+</small>
        </article>
        <article className='about__card'>
          <FaCertificate className='about__icon'/>
          <h5>Certifications</h5>
          <small>5 Completed</small>
        </article>
      </div>
    <p>
    Senior Software Developer at Plunes HealthCare, building AI-driven tools and scalable systems, with prior
    experience as an SDE &amp; Subject Matter Expert at Chegg. Pursuing a Minor in Artificial Intelligence at
    IIT Ropar alongside a B.Tech from Delhi Technological University. I enjoy shipping full-stack products and
    applying NLP/ML to real operational problems.
    </p>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </motion.div>


    </section>
  )
}

export default About
