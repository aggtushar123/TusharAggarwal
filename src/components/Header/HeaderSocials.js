import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tushar-aggarwal-b24116243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBTxHkcDpS06U%2BIluT9vPjA%3D%3D" target = "_blank"><BsLinkedin/></a>
        <a href="https://github.com/aggtushar123" target = "_blank"><FaGithub/></a>
        <a href="mailto:aggtushar123@gmail.com" target="_blank"><MdEmail/></a>
    </div>
  )
}

export default HeaderSocials
