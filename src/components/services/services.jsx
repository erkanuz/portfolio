import React from 'react'
import './services.css'

import { useState } from 'react'
import Pro from './Pro'
import Web from './Web'
import Ui from './Ui'

import {AiOutlineArrowRight} from 'react-icons/ai'

import scrollreveal from 'scrollreveal'
import { useEffect } from 'react'

const Services = () => {
  const [openPro, setPro] = useState(false)
  const [openWeb, setWeb] = useState(false)
  const [openUi, setUi] = useState(false)

  useEffect(() => {
    const g = scrollreveal({origin:"bottom", duration:2000, reset:true});
    g.reveal(`#services`);
  },[]);

  return (
    <section id="services" className="services">
        <h2 className='services_title'>My Services</h2>
        <h5 className='services_subtitle'>What I Offer</h5>
      <div className='services_container container grid'>

        <div className="services_card ser1">
          <p><span>PRODUCT DESIGNER</span></p>
          <p><span>TRY TO HOVER ME !</span></p>
          <p><span className='see' onClick={() => setPro(true)}>SEE MORE <AiOutlineArrowRight/></span></p>
          <Pro open={openPro} onClose={() => setPro(false)}/>
        </div>

        <div className="services_card ser2">
          <p><span>WEB DEVELOPMENT</span></p>
          <p><span>TRY TO HOVER ME !</span></p>
          <p><span className='see' onClick={() => setWeb(true)}>SEE MORE <AiOutlineArrowRight/></span></p>
          <Web open={openWeb} onClose={() => setWeb(false)}/>
        </div>

        <div className="services_card ser3">
          <p><span>UI/UX DESIGNER</span></p>
          <p><span>TRY TO HOVER ME !</span></p>
          <p><span className='see' onClick={() => setUi(true)}>SEE MORE <AiOutlineArrowRight/></span></p>
          <Ui open={openUi} onClose={() => setUi(false)}/>
        </div>

      </div>
    </section>
  )
}

export default Services