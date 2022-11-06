import React from 'react'
import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import About from './components/about/about'
import Education from './components/education/education'
import Services from './components/services/services'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

import Cursor from './components/cursor/cursor'

import { motion } from 'framer-motion'

export const App = () => {

  const[theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <motion.div initial="hidden" animate="show" className='main app-container' data-theme = {theme}>
      <Cursor/>
      <Header/>
      <Navbar/>
      <About/>
      <Education/>
      <Services/>
      <Projects/>
      <Contact changeTheme = {changeTheme} currentTheme = {theme}/>
      <Footer/>
    </motion.div>
  )
}