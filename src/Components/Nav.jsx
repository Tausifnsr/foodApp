import React from 'react'
import logo from '../assets/images/logo.jpeg'


function Nav() {
  return (
    <div className='Nav lg:flex lg:justify-between relative'>
        <img className='logo h-[83px] ml-[100px] mt-8 hidden lg:block' src={logo} alt="logo" />
        <button className='navBtn z-10 absolute right-5 top-5 border-white border-2 rounded-[30px] text-white text-[11px] px-[14px] py-[3px] lg:px-[33px] lg:py-[10px] lg:top-10 lg:right-10 lg:text-[16px] '>Get In Touch</button>
    </div>
  )
}

export default Nav