import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Blog from './components/Blog/Blog'
import Achievements from './components/Achievements/Achievements'
import Leadership from './components/Leadership/Leadership'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollTop from './components/ScrollTop/ScrollTop'

const App = () => {


  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Skills/>
        <Education/>
        <Portfolio/>
        <Blog/>
        <Achievements/>
        <Leadership/>
        <Contact/>
        <Footer/>
        <ScrollTop/>

    </>
  )
}

export default App
