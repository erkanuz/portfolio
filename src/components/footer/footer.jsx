import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <section id='footer' className='footer'>
      <div className='footer_container container grid'>
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
        <div className="fline"></div>
        <div className='owner'>
          <span className='footer_copy1 c'>&#169; Erkan. All rights reserved</span>
          <span className='footer_copy2 c'>&#169; Erkan. All rights reserved</span>
        </div>
      </div>
    </section>
  )
}

export default footer