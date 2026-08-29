import React from 'react'
import { motion } from 'framer-motion'
import './experience.css'
import {AiTwotoneCheckCircle} from 'react-icons/ai'

const experiences = [
  {
    id: 1,
    company: 'Plunes HealthCare',
    role: 'Senior Software Developer',
    date: 'Sep 2024 – Present',
    summary: 'Developing AI-driven solutions and scalable systems, enhancing operational efficiency and driving business growth.',
    points: [
      'Developed an AI-powered tool to extract structured data from hospital bills and discharge summaries (PDFs/images), improving claim processing efficiency by 78%.',
      'Collaborated across teams to integrate microservices, ensuring seamless migration of notification systems.',
      "Transitioned the company's website to Next.js, reducing page size by 50%, improving SEO and enabling real-time content management via the CRM panel.",
      'Mentored and managed new hires, fostering their growth and promoting a collaborative work environment.',
    ],
    stack: ['NodeJS', 'ReactJS', 'MongoDB', 'Kafka', 'Kubernetes', 'Next.js', 'Tesseract OCR', 'EasyOCR', 'Python (NLP)'],
  },
  {
    id: 2,
    company: 'Chegg Inc',
    role: 'Software Development Engineer & Subject Matter Expert',
    date: 'Jan 2022 – May 2024',
    summary: 'Built end-to-end products with Business Intelligence over 2.5 years in a global org, while instructing learners worldwide.',
    points: [
      'Engineered and optimised 10+ software solutions, reducing system errors by 40% and contributing to revenue growth.',
      'Led cross-functional collaboration across six teams, producing technical documentation and scalable APIs.',
      "Integrated a feedback mechanism in Chegg's grading system, increasing efficiency by 45%.",
      'Built a Resume Builder for mentees, increasing resume shortlisting rates by over 30%.',
      'Taught and mentored over 4000 learners in Data Structures, Algorithms, and Fullstack Development.',
    ],
    stack: ['ReactJS', 'NodeJS', 'NextJS', 'PostgreSQL'],
  },
]

const Experience = () => {
  return (
    <section id='experience'>
    <h5>My Professional Journey</h5>
    <h2>Work Experience</h2>

    <div className="container experience__container">
      {experiences.map(({ id, company, role, date, summary, points, stack }, index) => (
        <motion.article
          key={id}
          className="experience__card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
        >
          <div className="experience__card-head">
            <div>
              <h3>{role}</h3>
              <span className="experience__company">{company}</span>
            </div>
            <span className="experience__date">{date}</span>
          </div>
          <p className="experience__summary">{summary}</p>
          <ul className="experience__points">
            {points.map((point, i) => (
              <li key={i}>
                <AiTwotoneCheckCircle className='experience__point-icon'/>
                <p>{point}</p>
              </li>
            ))}
          </ul>
          <div className="experience__stack">
            {stack.map((tech) => (
              <span key={tech} className="experience__stack-pill">{tech}</span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>

    </section>
  )
}

export default Experience
