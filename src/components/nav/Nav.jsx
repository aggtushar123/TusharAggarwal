import React, { useEffect, useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {FaAward} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {BsSunFill, BsMoonStarsFill} from 'react-icons/bs'

const navLinks = [
  { id: 'home', href: '#home', icon: <AiOutlineHome/>, label: 'Home' },
  { id: 'about', href: '#about', icon: <AiOutlineUser/>, label: 'About' },
  { id: 'experience', href: '#experience', icon: <BiBook/>, label: 'Experience' },
  { id: 'portfolio', href: '#portfolio', icon: <AiOutlineProject/>, label: 'Projects' },
  { id: 'achievements', href: '#achievements', icon: <FaAward/>, label: 'Achievements' },
  { id: 'contact', href: '#contact', icon: <AiOutlineMessage/>, label: 'Contact' },
]

const Nav = () => {

  const [activeNav, setActiveNav] = useState('home');
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const light = stored === 'light';
    setIsLight(light);
    document.body.classList.toggle('light-mode', light);
  }, []);

  const toggleTheme = () => {
    setIsLight((prev) => {
      const next = !prev;
      document.body.classList.toggle('light-mode', next);
      localStorage.setItem('theme', next ? 'light' : 'dark');
      return next;
    });
  };

  useEffect(() => {
    const sectionIds = ['home', 'about', 'education', 'experience', 'skills', 'portfolio', 'blog', 'achievements', 'leadership', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    // sections without a dedicated nav icon fall back to the nearest earlier nav link
    const fallback = { skills: 'experience', education: 'experience', blog: 'portfolio', leadership: 'achievements' };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id || 'home';
            setActiveNav(fallback[id] || id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      {navLinks.map(({ id, href, icon, label }) => (
        <a
          key={id}
          href={href}
          aria-label={label}
          onClick={() => setActiveNav(id)}
          className={activeNav === id ? 'active' : ''}
        >
          {icon}
        </a>
      ))}
      <button
        type="button"
        aria-label="Toggle theme"
        className="nav__theme-toggle"
        onClick={toggleTheme}
      >
        {isLight ? <BsMoonStarsFill/> : <BsSunFill/>}
      </button>
    </nav>
  )
}

export default Nav
