import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGooglescholar} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tushar-aggarwal-b24116243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBTxHkcDpS06U%2BIluT9vPjA%3D%3D" target = "_blank"><BsLinkedin/></a>
        <a href="https://github.com/aggtushar123" target = "_blank"><FaGithub/></a>
        <a href="https://scholar.google.com/citations?user=eeqnuMgAAAAJ&hl=en&authuser=2" target="_blank"><SiGooglescholar/></a>
    </div>
  )
}

export default HeaderSocials
