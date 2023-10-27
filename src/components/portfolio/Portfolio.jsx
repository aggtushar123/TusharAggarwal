import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpeg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Face Recognition",
    github: "https://github.com/aggtushar123/Face-Recognition",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Dominant Color Extraction",
    github: "https://github.com/aggtushar123/Project-Dominant-Color-Extraction",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Spam Classifier",
    github: "https://github.com/aggtushar123/Project-Dominant-Color-Extraction",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
];

const data1 = [
  {
    id: 1,
    image: IMG1,
    title: "Face Recognition",
    github: "https://github.com/aggtushar123/Face-Recognition",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Dominant Color Extraction",
    github: "https://github.com/aggtushar123/Project-Dominant-Color-Extraction",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Spam Classifier",
    github: "https://github.com/aggtushar123/Project-Spam-Classifier",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
];

const Portfolio = () => {
  const [isActiveClass1, setIsActiveClass1] = useState(true);
  const [isActiveClass2, setIsActiveClass2] = useState(false);
  const [bgColor1, setbgColor1] = useState(true)
  const [bgColor2, setbgColor2] = useState(false)

  const handleClick1 = ( ) => {
    setIsActiveClass1(true);
    setIsActiveClass2(false);
    setbgColor1(true);
    setbgColor2(false);
  }
  const handleClick2 = ( ) => {
    setIsActiveClass1(false);
    setIsActiveClass2(true);
    setbgColor1(false);
    setbgColor2(true);
  }

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="max-w-3xl mx-auto px-8 sm:px-0">
        <div className="sm:w-7/12 sm:mx-auto">
          <div
            role="tablist"
            className="relative w-max mx-auto h-12 grid grid-cols-2 items-center px-[3xl] rounded-full bg-[#4db5ff] overflow-hidden shadow-2xl shadow-900/20 transition"
            aria-label="tabs"
          >
            <div className="absolute indicator top-0 w-32 rounded-full bg-white shadow-md"></div>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabindex="0"
              className={bgColor1 ?'relative block h-12 px-6 tab rounded-full bg-white shadow-md':'relative block h-10 px-6 tab rounded-full'}
              onClick={handleClick1}
            >
              <span class="text-gray-800">Web Delvelopment</span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabindex="-1"
              className={bgColor2 ? 'relative block h-12 px-6 tab rounded-full bg-white shadow-md':'relative block h-10 px-6 tab rounded-full'}
              onClick={handleClick2}
            >
              <span className="text-gray-800">Machine Learning</span>
            </button>
          </div>
        </div>
      </div>
      <div>
      <div role="tabpanel" id="panel-1" className={isActiveClass1 ? 'tab-panel p-7 container portfolio__container':'absolute top-0 invisible opacity-0 tab-panel p-7 container portfolio__container'}>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="blank">
                  Live Demo
                </a> 
              </div>
            </article>
          );
        })}
      </div>
      <div role="tabpanel" id="panel-2" className={isActiveClass2 ? 'tab-panel p-7 container portfolio__container':'absolute top-0 invisible opacity-0 tab-panel p-7 container portfolio__container'}>
        {data1.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
      </div>
      
    </section>
  );
};

export default Portfolio;
