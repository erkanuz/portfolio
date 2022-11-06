import React from 'react'
import './education.css'

import {GraduationCap} from 'phosphor-react'
import {BsFillCalendarDateFill} from 'react-icons/bs'

import scrollreveal from 'scrollreveal'
import { useEffect } from 'react'

const Education = () => {

  useEffect(() => {
    const education = scrollreveal({origin:"bottom",distance:"50px", duration:2000, reset:true});
    education.reveal(`#education`);

    const education_title = scrollreveal({origin:"right",distance:"50px", duration:2000, reset:true});
    education_title.reveal(`.education_title`);

    const education_subtitle = scrollreveal({origin:"left",distance:"50px", duration:2000, reset:true});
    education_subtitle.reveal(`.education_subtitle`);

    const edication_calendar = scrollreveal({origin:"right",distance:"50px", duration:2000, reset:true});
    edication_calendar.reveal(`.edication_calendar`);
  },[]);
  
  return (
    <section id='education' className='education'>
      <h2 className='edu_title'>Education</h2>
      <h5 className='edu_subtitle'>My persoal journey</h5>

      <div className='container education_container'>
        <div className="edication_content">
          <div className='edu_tab'>
          <i><GraduationCap className='edu_icon' /></i>
          </div>

          <div className="edication_data">

            <div>
              <h3 className="education_title">Programming</h3>
              <span className="education_subtitle">"PGHT Akad. N. D. Zelinkski "</span>
              <div className="edication_calendar">
                <BsFillCalendarDateFill />
              </div>
            </div>

            <div>
              <span className="edication_rounder"></span>
              <span className="education_line"></span>
            </div>
          </div>

          <div className="edication_data">
            <div></div>
            <div>
              <span className="edication_rounder"></span>
              <span className="education_line"></span>
            </div>
            <div>
              <h3 className="education_title">Software Enginner</h3>
              <span className="education_subtitle">"Burgas Free University"</span>
              <div className="edication_calendar">
                <BsFillCalendarDateFill />
              </div>
            </div>
          </div>

          <div className="edication_data">

            <div>
              <h3 className="education_title">Web Development</h3>
              <span className="education_subtitle">"Burgas Free University"</span>
              <div className="edication_calendar">
                <BsFillCalendarDateFill />
              </div>
            </div>

            <div>
              <span className="edication_rounder"></span>
              <span className="education_line"></span>
            </div>

          </div>

          <div className="edication_data">
            <div></div>

            <div>
              <span className="edication_rounder"></span>
            </div>

            <div>
              <h3 className="education_title">Online Courses</h3>
              <span className="education_subtitle">independent study</span>
              <div className="edication_calendar">
                <BsFillCalendarDateFill />
              </div>
            </div>
          </div>

        </div>
      </div>

  </section>
  )
}

export default Education