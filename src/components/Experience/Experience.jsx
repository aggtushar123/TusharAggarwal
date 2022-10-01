import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {DiJqueryLogo} from 'react-icons/di'
import {FaNode} from 'react-icons/fa'
import {AiTwotoneCheckCircle} from 'react-icons/ai'
import {DiMongodb} from 'react-icons/di'
import {DiPython} from 'react-icons/di'
import {DiPostgresql} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experierience__languages">
        <h3>Languages</h3>
        <div className="experience__content">
        <article className="experience__details">
            <SiCplusplus className='experience-details-icon'/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <SiJavascript className='experience-details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <DiPython className='experience-details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

        </div>
      </div>

      <div className="experierience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
        <article className="experience__details">
            <AiOutlineHtml5 className='experience-details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <DiCss3 className='experience-details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <DiJqueryLogo className='experience-details-icon'/>
            <div>
            <h4>JQuery</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <DiReact className='experience-details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>



      </div>

    <div className= "experienvce__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">

          <article className="experience__details">
            <FaNode className='experience-details-icon'/>
            <div>
            <h4>NodeJS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <AiTwotoneCheckCircle className='experience-details-icon'/>
            <div>
            <h4>Express</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <DiMongodb className='experience-details-icon'/>
            <div>
            <h4>Mongo</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <DiPostgresql className='experience-details-icon'/>
            <div>
            <h4>PostgreSQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>


        </div>
        </div>
        </div>
  

    </section>
  )
}

export default Experience
