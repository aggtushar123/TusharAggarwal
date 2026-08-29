import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGooglescholar} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/aggtushar123/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/aggtushar123" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://scholar.google.com/citations?user=eeqnuMgAAAAJ&hl=en&authuser=2" target="_blank" rel="noreferrer"><SiGooglescholar/></a>
    </div>
  )
}

export default HeaderSocials
