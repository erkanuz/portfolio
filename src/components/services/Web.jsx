import React from 'react'
import {AiFillCloseCircle,AiFillCheckCircle} from 'react-icons/ai'

const Web = ({open,onClose}) => {
    if (!open) return null;
  return (
    <div onClick={onClose} className="services_modal">
    <div onClick={(x) => x.stopPropagation()} className="modal_content">
      <i onClick={onClose} className="modal_close"><AiFillCloseCircle/></i>

      <h3 className="modal_title">Web Designer</h3>
      <p className="modal_description">
        Providing quality work to clients and companies.
      </p>

      <ul className="modal_list">
        <li className="modal_item">
          <i className='modal_icon'><AiFillCheckCircle/></i>
          <p className="modal_info">
            Creation, design and maintenance of websites
          </p>
        </li>

        <li className="modal_item">
          <i className='modal_icon'><AiFillCheckCircle/></i>
          <p className="modal_info">
            Realizing the client's dream web site design
          </p>
        </li>

        <li className="modal_item">
          <i className='modal_icon'><AiFillCheckCircle/></i>
          <p className="modal_info">
            Quality and strict work
          </p>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Web