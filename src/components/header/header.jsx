import React from 'react'
import './header.css'

import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineGithub, AiOutlineInstagram} from 'react-icons/ai'

import ME from '../../assets/20.svg'
import RE from '../../assets/21.svg'
import NX from '../../assets/22.svg'

import scrollreveal from 'scrollreveal'
import { useEffect } from 'react'

const Header = () => {

  useEffect(() => {
    const nx = scrollreveal({origin:"top", distance:"100px", duration:2000, reset:true});
    nx.reveal(`.nx`);

    const re = scrollreveal({origin:"bottom", distance:"100px", duration:1500, reset:true});
    re.reveal(`.re`);

    const me = scrollreveal({origin:"top" , distance:"100px", duration:2500, reset:true});
    me.reveal(`.me`);

    const tit = scrollreveal({origin:"left" , distance:"100px", duration:500, reset:true});
    tit.reveal(`.tit`);

    const sub = scrollreveal({origin:"right" , distance:"100px", duration:1500, reset:true});
    sub.reveal(`.sub`);

    const description = scrollreveal({origin:"left" , distance:"100px", duration:2500, reset:true});
    description.reveal(`.description`);

    const social_links = scrollreveal({origin:"top" , distance:"100px", duration:2000, reset:true});
    social_links.reveal(`.social_links`);

    const SD = scrollreveal({origin:"bottom" , distance:"100px", duration:1500, reset:true});
    SD.reveal(`.SD`);
  },[]);

  return (
    <header id='header' className='header section'>
      <section className='header_container'>
      <div className='esta'>
      <img src={RE} alt="re" className='re'/>
      </div>

      <div className='esta my_content'>
        <h2 className='title tit'>Hi, i'm Erkan</h2>
        <h2 className='title sub'>Frontend Developer</h2>
        <h4 className='description'>Mid level experience in web desing and development knowledge.</h4>
      </div>

      <div className='esta social_links'>
        <a href="https://www.linkedin.com/in/erkan-uz-lil/" target="_blank" rel="noopener noreferrer" className='icon'><FaLinkedinIn /></a>
        <a href="https://github.com/erkanuz" target="_blank" rel='noopener noreferrer' className='icon'><AiOutlineGithub /></a>
        <a href="https://www.instagram.com/" target="_blank" rel='noopener noreferrer' className='icon'><AiOutlineInstagram/></a>
      </div>

      <div className='esta'>
      <img src={ME} alt="me" className='me'/>
      </div>

      <div className='esta SD'>
        <h2 className='scroll_title'>Scroll Down</h2>
        <a href="#footer" className='SI'><div className="scroll-down"></div></a>
      </div>

      <div className='esta'>
        <img src={NX} alt="nx" className='nx'/>
      </div>
      </section>
    </header>
  )
}

export default Header