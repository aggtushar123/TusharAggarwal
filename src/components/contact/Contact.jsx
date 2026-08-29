import React from 'react'
import { motion } from 'framer-motion'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm('service_vzpfbrd', 'template_wng068e', form.current, 'OYEROiEzDtnSjCtzR')
      .then(() => {
        setStatus('sent');
        e.target.reset();
      })
      .catch(() => setStatus('error'));
  };



  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>



    <div className="container contact__container">
      <motion.div
        className="contact__options"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <article className = "contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>aggtushar123@gmail.com</h5>
        <a href="mailto:aggtushar123@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>

        <article className = "contact__option">
        <AiFillLinkedin className='contact__option-icon'/>
        <h4>LinkedIn</h4>
        <a href="https://linkedin.com/in/aggtushar123/" target="_blank" rel="noreferrer">Send a message</a>
        </article>

        <article className = "contact__option">
        <FaGithub className='contact__option-icon'/>
        <h4>GitHub</h4>
        <a href="https://github.com/aggtushar123" target="_blank" rel="noreferrer">See my work</a>
        </article>

      </motion.div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <input type="text" name="name" placeholder ='Your Full Name' required />
        <input type="email" name="email" placeholder ='Your Email' required />
        <textarea name= "message" rows="7" placeholder='Your Message' required></textarea>
        <button type = 'submit' className='btn btn-primary' disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent ✓' : 'Send Message'}
        </button>
        {status === 'error' && <small className='contact__error'>Something went wrong. Please try again.</small>}
      </motion.form>
    </div>




    </section>
  )
}

export default Contact
