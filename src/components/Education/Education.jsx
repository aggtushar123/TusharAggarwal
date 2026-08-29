import React from 'react'
import { motion } from 'framer-motion'
import './education.css'
import {HiOutlineAcademicCap} from 'react-icons/hi'

const education = [
  {
    id: 1,
    school: 'Indian Institute of Technology, Ropar',
    degree: 'Minor in Artificial Intelligence',
    date: 'Aug. 2024 – Sept. 2025',
    grade: 'GPA: 8.00/10',
    courses:
      'Python Programming with Prompting, Mathematics for Machine Learning, Supervised & Semi-Supervised Learning, Reinforcement Learning, Neural Networks, Deep Learning, Large Language Models, NLP, Computer Vision',
  },
  {
    id: 2,
    school: 'Delhi Technological University',
    degree: 'B.Tech, Mechanical Engineering (Automotive Specialization)',
    date: 'Aug. 2018 – May 2022',
    grade: 'GPA: 8.08/10 · Department Rank 1, 5th Semester (batch of 65)',
    courses:
      'Programming Fundamentals, Data Structures, Operating Systems, Computer Networking, Competitive Programming',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Education = () => {
  return (
    <section id='education'>
      <h5>My Academic Background</h5>
      <h2>Education</h2>

      <div className="container education__container">
        {education.map(({ id, school, degree, date, grade, courses }, index) => (
          <motion.article
            key={id}
            className="education__card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <HiOutlineAcademicCap className='education__icon'/>
            <div className="education__card-head">
              <h3>{school}</h3>
              <span className="education__date">{date}</span>
            </div>
            <p className="education__degree">{degree}</p>
            <p className="education__grade">{grade}</p>
            <p className="education__courses">{courses}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Education
