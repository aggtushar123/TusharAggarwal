import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className = 'footer__logo'>TUSHAR AGGARWAL</a>

      <ul className='permalinks'>
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#services">Honors & Awards</a></li>
       <li><a href="#contact">Contact</a></li>
       
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/"><BsFacebook/></a>
        <a href="https://www.instagram.com/"><BsInstagram/></a>
        <a href="https://www.twitter.com/"><BsTwitter/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Tushar Aggarwal. All rights reserved.</small>

      </div>


    </footer>
  )
}

export default footer
