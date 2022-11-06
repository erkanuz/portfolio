import React from 'react'
import './about.css'

import {FigmaLogo, Pen, Palette, Cube, Eye, FileJsx, FileTs, FileJs, FileCss, FileHtml, CircleWavyCheck, Alien, IdentificationBadge, DotsNine} from 'phosphor-react'

import scrollreveal from 'scrollreveal'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    const DotElement = scrollreveal({origin:"top", duration:2000, reset:true});
    DotElement.reveal(`.DotElement`);

    const about_content_title = scrollreveal({origin:"right", duration:2000, reset:true});
    about_content_title.reveal(`.about_content_title`);

    const about_content_description = scrollreveal({origin:"left", duration:2000, reset:true});
    about_content_description.reveal(`.about_content_description`);
  }, []);
  
  return (
    <section id='about' className='about section container'>
      <div className="about_container">
        <h2 className='about_title'>About Me</h2>
        <h5 className='about_subtitle'>My Introduction</h5>
        <h2 className='line'>-----------------------------------------------------------------------------------------------------------------</h2>

          <div className='all_about_content'>
            <div className="about_child design">
              <h2 className="about_content_title">Design <i className='aicon'><FigmaLogo size={32} /> <Pen size={32} /> <Palette size={32} /> <Cube size={32} /> <Eye size={32} /></i></h2>
              <p className="about_content_description">
                I’m probably not the typical designer positioned behind an illiustrator artboard adjusting pixels, 
                but i design, immersed in stylesheet tweaking font size and conteplating layouts is where you’ll find me.
                I’m committed to creating fluent user experiences while staying fashionable.
              </p>
            </div>
            <div className="about_child DotElement"><DotsNine size={80} /></div>
            <div className="about_child engineering">
              <h2 className="about_content_title">Engineering <i className='aicon'><FileJsx size={32} /> <FileTs size={32} /> <FileJs size={32} /> <FileCss size={32} /> <FileHtml size={32} /></i></h2>
              <p className="about_content_description">
                I create Javascript applications and websites, maybe also mobile applications, as coding tools I prefer
                to use Visual Code and various tools like spline/teta and libraries like gasp/motion frame and ect.
              </p>
            </div>
            <div className="about_child personalty">
              <h2 className="about_content_title">Personalty <i className='aicon'><CircleWavyCheck size={32} /> <Alien size={32} /> <IdentificationBadge size={32} /></i></h2>
              <p className="about_content_description">
                If you look at my personalty, I am a person who likes everything to be planned, I don't like to leave
                unfinished work. In my spare time, I like to play video games or learn new things related to web 
                development. Also i like to play with cats and love them so much.
              </p>
            </div>
          </div>

        <h2 className='line'>-----------------------------------------------------------------------------------------------------------------</h2>
      </div>
    </section>
  )
}

export default About