import React from 'react'
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa'
import { icons } from './iconsList'

const Icons = () => {
  return (
    <div className='d-flex justify-content-center align-items-center gap-4'>
      <div className="icon-div">
        <FaFacebookF className="icon" />
      </div>
      <div className="icon-div">
        <FaInstagram className="icon" />
      </div>
      <div className="icon-div">
        <FaTwitter className="icon" />
      </div>
      <div className="icon-div">
        <FaLinkedin className="icon" />
      </div>
    </div>
  );
}

export default Icons


