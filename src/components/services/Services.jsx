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
            <p><b>Shell Eco Marathon</b> Global Winner, Pitch the Future 2021</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p><b>Shell Eco Marathon</b> Best Vehicle Design - Asia 2020, Malaysia</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p><b>Digital Citizenship and Cyber Wellness Olympiad</b> Awardee, under the two top categories.k</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p><b>Microsoft Office PowerPoint 2013 specialist</b> 4th position all over India in COMPUDON season VIII</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p><b>Finalist at Intel ISEF 2017</b>, world’s largest pre-collegiate science fair.</p>
          </li>
    

        </ul>

      </article>


    </div>

    
    </section>
  )
}

export default services
