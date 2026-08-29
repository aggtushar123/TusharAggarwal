import React from 'react'
import { motion } from 'framer-motion'
import './leadership.css'
import {FaUsers} from 'react-icons/fa'

const roles = [
  {
    id: 1,
    org: 'Those In Need',
    title: 'Volunteer (Intermediate Badge)',
    date: 'May 2020 – Present',
    points: [
      'Led the creation of a user-friendly web application with chatbot integration to streamline pandemic fundraising efforts.',
      'Organized learning workshops for children, promoting educational growth and community engagement.',
      'Championed workplace inclusivity by conducting awareness sessions on gender diversity and social welfare programs.',
    ],
  },
  {
    id: 2,
    org: 'Team UAS DTU',
    title: 'Software Department Lead',
    date: 'Apr 2021 – May 2022',
    points: [
      'Served as Airframe Technician, contributing to drone airframe design and optimization.',
      'Led a critical software transition during the IAF Mehar Baba Swarm Drone Competition as interim Software Lead.',
      'Initiated interdisciplinary research combining aerospace, automotive engineering, and AI for a custom simulation testbed.',
    ],
  },
  {
    id: 3,
    org: 'Team DTU Supermileage',
    title: 'Student Advisor and Head (Electronics Department)',
    date: 'Aug 2018 – May 2022',
    points: [
      'Spearheaded a team of 50+ members to design an in-wheel suspension system, achieving a 12% weight reduction.',
      'Developed an Advanced Driver Assistance System (ADAS) feature using OpenCV and dlib to detect driver fatigue.',
      'Integrated lightweight engineering principles with software solutions to enhance vehicle efficiency and safety.',
    ],
  },
]

const Leadership = () => {
  return (
    <section id='leadership'>
      <h5>Beyond Work</h5>
      <h2>Leadership & Extracurricular</h2>

      <div className="container leadership__container">
        {roles.map(({ id, org, title, date, points }, index) => (
          <motion.article
            key={id}
            className="leadership__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <FaUsers className='leadership__icon'/>
            <h3>{org}</h3>
            <span className="leadership__title">{title}</span>
            <span className="leadership__date">{date}</span>
            <ul>
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Leadership
