import React, { useState } from "react";
import { motion } from "framer-motion";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpeg";
import IMG4 from "../../assets/portfolio4.jpeg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/support.png";
import IMG8 from "../../assets/Github.png";
import IMG9 from "../../assets/feedback.png";
import IMG10 from "../../assets/notes.png";
import { SiPaytm } from "react-icons/si";
import { MdOutlineTranslate } from "react-icons/md";

const data = [
  {
    id: 1,
    icon: <SiPaytm />,
    title: "Paytm Wallet",
    description: "Next.js, ExpressJS, Turborepo, Postgres, Prisma, Recoil, NextAuth, Tailwind",
    github: "https://github.com/aggtushar123/paytm-app",
  },
  {
    id: 2,
    image: IMG7,
    title: "Support Desk",
    github: "https://github.com/aggtushar123/support-desk",
  },
  {
    id: 3,
    image: IMG10,
    title: "iNoteBook",
    github: "https://github.com/aggtushar123/iNoteBook",
  },
  {
    id: 4,
    image: IMG9,
    title: "Feedback-App",
    github: "https://github.com/aggtushar123/feedback-app",
  },
  {
    id: 5,
    image: IMG8,
    title: "Github Finder",
    github: "https://github.com/aggtushar123/github-finder",
  },
];

const data1 = [
  {
    id: 1,
    icon: <MdOutlineTranslate />,
    title: "Language Translation & Symmetric Cryptography",
    description: "Transformers-based English-Spanish translation model, BLEU score 75.36",
    github: "https://github.com/aggtushar123",
  },
  {
    id: 2,
    image: IMG1,
    title: "Face Recognition",
    github: "https://github.com/aggtushar123/Face-Recognition",
  },
  {
    id: 3,
    image: IMG2,
    title: "Dominant Color Extraction",
    github: "https://github.com/aggtushar123/Project-Dominant-Color-Extraction",
  },
  {
    id: 4,
    image: IMG3,
    title: "Spam Classifier",
    github: "https://github.com/aggtushar123/Project-Spam-Classifier",
  },
  {
    id: 5,
    image: IMG4,
    title: "Titanic - Machine Learning from Disaster",
    github: "https://github.com/aggtushar123/Project-Titanic-Survival-Prediction/tree/main",
  },
  {
    id: 6,
    image: IMG5,
    title: "Customer Churn Prediction",
    github: "https://github.com/aggtushar123/Project-Titanic-Survival-Prediction",
  },
  {
    id: 7,
    image: IMG6,
    title: "Pokemon Image Classification",
    github: "https://github.com/aggtushar123/Project-Titanic-Survival-Prediction",
  },
];

const ProjectCard = ({ image, icon, title, description, github }) => (
  <article className="portfolio__item">
    <div className="portfolio__item-image">
      {image ? (
        <img src={image} alt={title} />
      ) : (
        <div className="portfolio__item-icon">{icon}</div>
      )}
    </div>
    <h3>{title}</h3>
    {description && <p className="portfolio__item-desc">{description}</p>}
    <div className="portfolio__item-cta">
      <a href={github} className="btn btn-primary" target="_blank" rel="noreferrer">
        Github
      </a>
    </div>
  </article>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="max-w-3xl mx-auto px-8 sm:px-0">
        <div className="sm:w-7/12 sm:mx-auto">
          <div
            role="tablist"
            className="relative w-max mx-auto h-12 grid grid-cols-2 items-center px-[3xl] rounded-full bg-[var(--color-primary)] overflow-hidden shadow-2xl shadow-900/20 transition"
            aria-label="tabs"
          >
            <div className="absolute indicator top-0 w-32 rounded-full bg-white shadow-md"></div>
            <button
              role="tab"
              aria-selected={activeTab === "web"}
              aria-controls="panel-1"
              id="tab-1"
              className={activeTab === "web" ? 'relative block h-12 px-6 tab rounded-full bg-white shadow-md' : 'relative block h-10 px-6 tab rounded-full'}
              onClick={() => setActiveTab("web")}
            >
              <span className="text-gray-800">Web Development</span>
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "ml"}
              aria-controls="panel-2"
              id="tab-2"
              className={activeTab === "ml" ? 'relative block h-12 px-6 tab rounded-full bg-white shadow-md' : 'relative block h-10 px-6 tab rounded-full'}
              onClick={() => setActiveTab("ml")}
            >
              <span className="text-gray-800">Machine Learning</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        {activeTab === "web" && (
          <div role="tabpanel" id="panel-1" className="tab-panel p-7 container portfolio__container">
            {data.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard {...item} />
              </motion.div>
            ))}
          </div>
        )}
        {activeTab === "ml" && (
          <div role="tabpanel" id="panel-2" className="tab-panel p-7 container portfolio__container">
            {data1.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard {...item} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

    </section>
  );
};

export default Portfolio;
