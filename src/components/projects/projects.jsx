import React ,{ useState, useEffect} from 'react'
import './projects.css'

import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { query, orderBy } from "firebase/firestore"; 

import {GoTools} from 'react-icons/go'
import {FaLink} from 'react-icons/fa'

import { motion } from 'framer-motion'
import { card } from '../anima/animation'
import { useScroll } from '../anima/useScroll'

const Projects = () => {
    const [element, controls] = useScroll();
    const [projects, setProjects] = useState([]);
    const projCollectionRef = collection(db, "projects");

    useEffect(() => {
        const getProjects = async () => {
            const q = query(projCollectionRef, orderBy("category", "desc"));
            const data = await getDocs(q);
            setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };
        getProjects();
        //eslint-disable-next-line
    }, []); 

  return (
    <section id='projects' className='projects section'>
      <h2 className='proj_title'>Recent Works</h2>
      <h5 className='proj_subtitle'>My Projects <GoTools/></h5>
      <div className='container'>
        <motion.div className="pro_container grid" ref={element}
        variants={card}
        animate={controls}
        transition={{delay: .6, duration: .9, type: "tween"}}
        >
        {projects.map((x) => {
          return(
            <div className="card" key={x.id}>
              <div className="thumbnail">
                <img src={x.image} alt="" className="img_work" />
                <div className="mask"></div>
              </div>

              <span className="category">{x.category}</span>
              <h3 className="pro_title">{x.title}</h3>
              <h3 className="pro_description">{x.description}</h3>
              <a href={x.link} className="pro_button">
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