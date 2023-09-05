import React from 'react'
import './Banner.css'
import BannerImg from '../assets/images/banner.png'

function Banner() {
  return (
    <>
    <div className="bannerContainer">
        <div className="banner flex flex-col-reverse">
        <div className="bannerImg">
            <img className='absolute top-0 right-0' src={BannerImg} alt="BannerImg" />
          </div>
          <div className="details mt-[100vh] w-[240px] mx-auto text-center lg:mt-[227px] lg:ml-[100px]">
            <h1 className='text-[38px] font-[700] text-[#0E2368] lg:text-[62px] lg:text-left lg:w-[345px]'>
              Discover the <span className="best text-[#E23744]">Best</span> Food and Drinks
            </h1>
            <p className='w-[249px] text-[11px] mt-[21px] lg:text-[16px] lg:text-left lg:w-[345px]'>
              Naturally made healthcare products for the better care & support
              of your body.
            </p>
            <button className="bannerBtn px-[30px] py-[12px] mt-[28px] bg-[#e23744] text-white text-[12px] rounded-[30px] lg:text-[18px]">Explore Now!</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner