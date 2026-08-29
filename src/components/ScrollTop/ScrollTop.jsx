import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BsArrowUp } from 'react-icons/bs'
import './scrolltop.css'

const ScrollTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scroll-top"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          <BsArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollTop
