import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/PHOTO.png'
import HeaderSocials from './HeaderSocials'

const roles = ['Senior Software Developer', 'Full-Stack Engineer', 'AI / ML Engineer']

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <header id="home">
      <div className="container header__container">
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello I'm
        </motion.h5>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tushar Aggarwal
        </motion.h1>
        <motion.h5
          className="text-light header__role"
          key={roleIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {roles[roleIndex]}
        </motion.h5>

        <CTA />
        <HeaderSocials />

        <motion.div
          className="me"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={ME} alt="Tushar Aggarwal" />
        </motion.div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
