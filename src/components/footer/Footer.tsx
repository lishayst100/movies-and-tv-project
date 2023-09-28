import React from 'react'
import './Footer.scss'
import List from './List'
import Lorem from './Lorem'
import Icons from './Icons'
const Footer = () => {
  return (
    <div className='footer d-flex justify-content-around flex-column align-items-center  '>
        <List/>
        <Lorem/>
        <Icons/>
    </div>
  )
}

export default Footer