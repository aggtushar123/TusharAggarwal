import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vzpfbrd', 'template_wng068e', form.current, 'OYEROiEzDtnSjCtzR')
    e.target.reset()
  };

  

  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    

    <div className="container contact__container">
      <div className="contact__options">
        <article className = "contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>aggtushar123@gmail.com</h5>
        <a href="mailto:aggarwaltushar099@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>

        <article className = "contact__option">
        <AiFillLinkedin className='contact__option-icon'/>
        <h4>LinkedIn</h4>
        <a href="https://www.linkedin.com/in/tushar-aggarwal-b24116243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBTxHkcDpS06U%2BIluT9vPjA%3D%3D" target="_blank" rel="noreferrer">Send a message</a>
        </article>


      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder ='Your Full Name' required />
        <input type="email" name="email" placeholder ='Your Email' required />
        <textarea name= "message" rows="7" placeholder='Your Message' required></textarea>
        <button type = 'submit' className='btn btn-primary'>Send Message</button>
      </form>  
    </div>




    </section>
  )
}

export default Contact
