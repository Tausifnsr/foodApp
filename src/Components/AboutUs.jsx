import React from 'react'
import AboutImg from '../assets/images/about.jpeg'

function AboutUs() {
  return (
    <div className='AboutUs bg-[#F0F1F7] mt-[64px] py-[140px] lg:flex lg:h-[467px] lg:py-[0] lg:mt-[186px] lg:justify-evenly'>
        <div className='ImgDiv'>
        <img className='aboutImg hidden lg:block lg:h-[468px]' src={AboutImg} alt="AboutImg" />
        </div>
        <div className="aboutDetails relative ">
            <h1 className='text-[26px] text-center font-[600] text-[#0E2368] lg:text-[45px] lg:mt-[107px] lg:mr-[229px] lg:text-left'>About Us</h1>
            <p className='mt-[21px] w-[275px] text-center mx-auto text-[11px] lg:mr-[204px] lg:text-left lg:w-[447px] lg:h-[138px] lg:text-[15px] lg:font-[400]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>

            <button className='aboutBtn absolute left-[139px] mt-[16px] w-[96px] text-[11px] items-center bg-[#e23744] text-white rounded-[30px] py-[10px] lg:w-[132px] lg:mt-[1px] lg:text-[16px] lg:left-[0px]'>Read More</button>
        </div> 
    </div>
  )
}

export default AboutUs