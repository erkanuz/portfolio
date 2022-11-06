import React from 'react'
import './projects.css'

import {GoTools} from 'react-icons/go'
import {FaLink} from 'react-icons/fa'
import { useState } from 'react'
import Menu from './Menu'

import { motion } from 'framer-motion'
import { useScroll } from '../anima/useScroll'
import { card, filter} from '../anima/animation'

const Projects = () => {
  const [element, controls] = useScroll();
  const [a,b] = useState(Menu);
  const e = (u) => {
    const update = Menu.filter((c) => {
      return c.category === u;
    });
    b(update);
  }
  
  return (
    <section id='projects' className='projects section'>
      <h2 className='proj_title'>Recent Works</h2>
      <h5 className='proj_subtitle'>My Projects <GoTools/></h5>
      <div className='container'>
      <motion.div className="filter"
      variants={filter}
      animate={controls}
      transition={{delay: .6, duration: .9, type: "tween"}}
      >
        <span className="item" onClick={() => b(Menu)}>Everything</span>
        <span className="item" onClick={() => e("Web")}>Web</span>
        <span className="item" onClick={() => e("Mobile")}>Mobile</span>
        <span className="item" onClick={() => e("3D Objects")}>3D Objects</span>
      </motion.div>

      <motion.div className="pro_container grid" ref={element}
      variants={card}
      animate={controls}
      transition={{delay: .6, duration: .9, type: "tween"}}
      >
        {a.map((x) => {
          const{ id, image, title, description, category, link} = x;
          return(
            <div className="card" key={id}>
              <div className="thumbnail">
                <img src={image} alt="" className="img_work" />
                <div className="mask"></div>
              </div>

              <span className="category">{category}</span>
              <h3 className="pro_title">{title}</h3>
              <h3 className="pro_description">{description}</h3>
              <a href={link} className="pro_button">
                <i className="pro_button_link"><FaLink/></i>
              </a>
            </div>
          )
        })}
      </motion.div>
    </div>
  </section>
  )
}

export default Projects