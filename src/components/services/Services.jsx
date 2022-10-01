import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
    <h5>List Of</h5>
    <h2>Honors & Awards</h2>


    <div className="services__container">
      <article className="service">
        <div className="service__head">
          <h3>Achievements</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>asbdahsfbdaskndbk</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>asbdahsfbdaskndbk</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>asbdahsfbdaskndbk</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>asbdahsfbdaskndbk</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>asbdahsfbdaskndbk</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>asbdahsfbdaskndbk</p>
          </li>

        </ul>

      </article>


    </div>

    
    </section>
  )
}

export default services
