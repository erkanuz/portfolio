import React from 'react'
import './navbar.css'
import {FaUniversity} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import {AiFillHome,AiOutlineUser,AiOutlineFundProjectionScreen} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <ul>
          <li>
            <a href="#header"><AiFillHome/></a>
          </li>
          <li>
            <a href="#about"><AiOutlineUser/></a>
          </li>
          <li>
            <a href="#education"><FaUniversity/></a>
          </li>
          <li>
            <a href="#projects"><AiOutlineFundProjectionScreen/></a>
          </li>
          <li>
            <a href="#contact"><FiPhoneCall/></a>
          </li>
        </ul>
      </nav>   
    </div>
  )
}

export default Navbar