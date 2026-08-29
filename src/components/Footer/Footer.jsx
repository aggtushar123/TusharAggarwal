import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGooglescholar} from 'react-icons/si'

const footer = () => {
  return (
    <footer>
      <a href="#home" className = 'footer__logo'>TUSHAR AGGARWAL</a>

      <ul className='permalinks'>
       <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#education">Education</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#skills">Skills</a></li>
       <li><a href="#portfolio">Projects</a></li>
       <li><a href="#achievements">Achievements</a></li>
       <li><a href="#leadership">Leadership</a></li>
       <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/aggtushar123/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/aggtushar123" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://scholar.google.com/citations?user=eeqnuMgAAAAJ&hl=en&authuser=2" target="_blank" rel="noreferrer"><SiGooglescholar/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Tushar Aggarwal. All rights reserved.</small>

      </div>


    </footer>
  )
}

export default footer
