import React from 'react'
import { motion } from 'framer-motion'
import './blog.css'
import { SiMedium } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa'
import { MdOutlineArticle } from 'react-icons/md'

// Add your posts here as you publish them. Each entry:
// {
//   id: unique number,
//   title: 'Post title',
//   platform: 'medium' | 'linkedin' | 'other',
//   url: 'https://...',
//   date: 'Jan 2026',            // optional
//   excerpt: 'One line about it', // optional
//   featuredIn: { name: 'Fortune', url: 'https://...' }, // optional press mention
// }
const posts = [
  {
    id: 1,
    title: 'The Bug Where Every Check Passed and the Data Was Still Wrong',
    platform: 'medium',
    url: 'https://medium.com/@aggtushar123/the-bug-where-every-check-passed-and-the-data-was-still-wrong-ffc1a970db0e',
    date: 'Aug 2026',
    excerpt: 'A migration validation bug, a silent foreign-key failure, and the danger of recovery paths with false preconditions \u2014 lessons from building mongopg-migrate.',
  },
]

const platformMeta = {
  medium: { label: 'Medium', icon: <SiMedium /> },
  linkedin: { label: 'LinkedIn', icon: <BsLinkedin /> },
  other: { label: 'Article', icon: <MdOutlineArticle /> },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Blog = () => {
  return (
    <section id='blog'>
      <h5>Things I've Written</h5>
      <h2>Blog & Mentions</h2>

      <div className="container blog__container">
        {posts.length === 0 ? (
          <motion.div
            className="blog__empty"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <FaNewspaper className='blog__empty-icon' />
            <h3>New articles are on the way</h3>
            <p>I'm working on some posts about the AI/ML and full-stack work I do. Check back soon, or follow along on LinkedIn in the meantime.</p>
            <a
              href="https://linkedin.com/in/aggtushar123/"
              target="_blank"
              rel="noreferrer"
              className='btn btn-primary'
            >
              Follow on LinkedIn
            </a>
          </motion.div>
        ) : (
          <div className="blog__grid">
            {posts.map(({ id, title, platform, url, date, excerpt, featuredIn }, index) => {
              const meta = platformMeta[platform] || platformMeta.other
              return (
                <motion.article
                  key={id}
                  className="blog__card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {featuredIn && (
                    <a
                      href={featuredIn.url}
                      target="_blank"
                      rel="noreferrer"
                      className='blog__featured-badge'
                    >
                      Featured in {featuredIn.name}
                    </a>
                  )}
                  <div className="blog__card-head">
                    <span className='blog__platform'>
                      {meta.icon}
                      {meta.label}
                    </span>
                    {date && <span className='blog__date'>{date}</span>}
                  </div>
                  <h3>{title}</h3>
                  {excerpt && <p className='blog__excerpt'>{excerpt}</p>}
                  <a href={url} target="_blank" rel="noreferrer" className='blog__read-link'>
                    Read Article <FaExternalLinkAlt />
                  </a>
                </motion.article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
