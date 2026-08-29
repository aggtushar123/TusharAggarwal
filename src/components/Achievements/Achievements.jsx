import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './achievements.css'
import {BiCheck} from 'react-icons/bi'
import {FaExternalLinkAlt} from 'react-icons/fa'

const honors = [
  { title: 'AUVSI SUAS 2022', detail: 'Team ranked 3rd in Technical Design and 5th in Flight Readiness Review.' },
  { title: 'IAF Mehar Baba Swarm Drone', detail: 'Co-Winner of first prize, "Best Communication Architecture".' },
  { title: 'Shell Eco Marathon', detail: 'Global Winner, Pitch the Future 2021.' },
  { title: 'Digital Citizenship and Cyber Wellness Olympiad', detail: 'Awardee, under the two top categories.' },
  { title: 'Microsoft Office PowerPoint 2013 Specialist', detail: '4th position all over India in COMPUDON season VIII.' },
]

const certifications = [
  {
    title: 'Prompt Engineering & Programming with OpenAI',
    issuer: 'Columbia University',
    url: 'https://badges.plus.columbia.edu/4b0cfb53-7bc5-4cb3-860e-e75217db4676##acc.MR2WeKvG',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/F3900LRSU4JI',
  },
  {
    title: 'Machine Learning Essentials',
    issuer: 'Coding Minutes',
    url: 'https://www.udemy.com/certificate/UC-cd35e489-607b-43dd-9b5e-323a16301a2d/',
  },
  {
    title: "Competitive Programmer's Core Skills",
    issuer: 'Saint Petersburg State University',
    url: 'https://www.coursera.org/account/accomplishments/certificate/2TWX6AUDVH83',
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google',
    url: 'https://www.coursera.org/account/accomplishments/certificate/ZJYG9TN6L28B',
  },
]

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('honors')

  return (
    <section id='achievements'>
      <h5>List Of</h5>
      <h2>Achievements</h2>

      <div className="achievements__tabs">
        <button
          className={activeTab === 'honors' ? 'active' : ''}
          onClick={() => setActiveTab('honors')}
        >
          Honors & Awards
        </button>
        <button
          className={activeTab === 'certs' ? 'active' : ''}
          onClick={() => setActiveTab('certs')}
        >
          Certifications
        </button>
      </div>

      <div className="achievements__container">
        {activeTab === 'honors' && (
          <motion.article
            className="achievements__panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className='achievements__list'>
              {honors.map(({ title, detail }) => (
                <li key={title}>
                  <BiCheck className='achievements__list-icon'/>
                  <p><b>{title}</b> — {detail}</p>
                </li>
              ))}
            </ul>
          </motion.article>
        )}

        {activeTab === 'certs' && (
          <motion.article
            className="achievements__panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className='achievements__list achievements__certs'>
              {certifications.map(({ title, issuer, url }) => (
                <li key={title}>
                  <a href={url} target="_blank" rel="noreferrer" className='achievements__cert-link'>
                    <div>
                      <p><b>{title}</b></p>
                      <small className='text-light'>{issuer}</small>
                    </div>
                    <FaExternalLinkAlt className='achievements__list-icon'/>
                  </a>
                </li>
              ))}
            </ul>
          </motion.article>
        )}
      </div>

    </section>
  )
}

export default Achievements
