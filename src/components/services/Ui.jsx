import React from 'react'
import {AiFillCloseCircle,AiFillCheckCircle} from 'react-icons/ai'

const Ui = ({open,onClose}) => {
    if (!open) return null;
  return (
    <div onClick={onClose} className="services_modal">
    <div onClick={(x) => x.stopPropagation()} className="modal_content">
      <i onClick={onClose} className="modal_close"><AiFillCloseCircle/></i>

      <h3 className="modal_title">Ui/Ux Designer</h3>
      <p className="modal_description">
        Providing quality work to clients and companies.
      </p>

      <ul className="modal_list">
        <li className="modal_item">
          <i className='modal_icon'><AiFillCheckCircle/></i>
          <p className="modal_info">
            Create interactions of ux elements.
          </p>
        </li>

        <li className="modal_item">
          <i className='modal_icon'><AiFillCheckCircle/></i>
          <p className="modal_info">
            Collaborate with designers and developers to create intuitive, user-friendly software
          </p>
        </li>

        <li className="modal_item">
          <i className='modal_icon'><AiFillCheckCircle/></i>
          <p className="modal_info">
            Design of all pages with their visual elements as well as their interactive properties animations
          </p>
        </li>

        <li className="modal_item">
          <i className='modal_icon'><AiFillCheckCircle/></i>
          <p className="modal_info">
            Developing wireframes and prototypes according to customer needs as well as providing latest designs
          </p>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Ui