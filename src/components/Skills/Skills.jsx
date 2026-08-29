import React from 'react'
import { motion } from 'framer-motion'
import './skills.css'
import {SiJavascript, SiTypescript, SiCplusplus, SiExpress, SiPrisma, SiDjango, SiNumpy, SiPandas, SiTensorflow, SiKeras, SiScikitlearn, SiApachekafka, SiRedis, SiGraphql, SiKubernetes} from 'react-icons/si'
import {DiPython, DiJava, DiHtml5, DiReact, DiNodejsSmall, DiPostgresql, DiMongodb, DiGit} from 'react-icons/di'
import {FaDatabase, FaDocker} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {AiOutlineApi} from 'react-icons/ai'

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <DiPython/> },
      { name: 'Java', icon: <DiJava/> },
      { name: 'C', icon: <SiCplusplus/> },
      { name: 'JavaScript', icon: <SiJavascript/> },
      { name: 'TypeScript', icon: <SiTypescript/> },
      { name: 'HTML/CSS', icon: <DiHtml5/> },
      { name: 'SQL', icon: <FaDatabase/> },
    ],
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'ReactJS', icon: <DiReact/> },
      { name: 'NodeJS', icon: <DiNodejsSmall/> },
      { name: 'Next.js', icon: <TbBrandNextjs/> },
      { name: 'ExpressJS', icon: <SiExpress/> },
      { name: 'Prisma', icon: <SiPrisma/> },
      { name: 'Django', icon: <SiDjango/> },
      { name: 'GraphQL', icon: <SiGraphql/> },
      { name: 'Numpy', icon: <SiNumpy/> },
      { name: 'Pandas', icon: <SiPandas/> },
      { name: 'TensorFlow', icon: <SiTensorflow/> },
      { name: 'Keras', icon: <SiKeras/> },
      { name: 'Scikit-Learn', icon: <SiScikitlearn/> },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Git', icon: <DiGit/> },
      { name: 'Docker', icon: <FaDocker/> },
      { name: 'CI/CD', icon: <AiOutlineApi/> },
      { name: 'WebSockets', icon: <AiOutlineApi/> },
      { name: 'Kafka', icon: <SiApachekafka/> },
      { name: 'Kubernetes', icon: <SiKubernetes/> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <DiPostgresql/> },
      { name: 'MongoDB', icon: <DiMongodb/> },
      { name: 'Redis', icon: <SiRedis/> },
    ],
  },
]

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Technologies I Work With</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        {skillGroups.map(({ title, skills }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{title}</h3>
            <div className="skills__content">
              {skills.map(({ name, icon }) => (
                <article key={name} className="skills__details">
                  <span className='skills-details-icon'>{icon}</span>
                  <h4>{name}</h4>
                </article>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Skills
