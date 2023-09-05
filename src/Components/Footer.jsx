import React from "react";
import './Footer.css'
import Logo from "../assets/images/logo.jpeg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

function Footer() {
  return (
    <div className="footerContainer lg:flex lg:relative">
    <div className="footer bg-[#f8f8f8] grid list-none lg:flex lg:h-[362px] ">
      <div className="logo h-[58px] w-[75px] mx-auto pt-[52px] lg:absolute lg:h-[125px] lg:w-[161px] lg:ml-[148px] lg:mt-[85px]">
        <img className="logoImg" src={Logo} alt="logo" />
      </div>
      <div className="contactUs w-[294px] mt-14 ml-[41px] lg:ml-[442px]">
        <div className="title text-[15.77px] font-[600] text-[#0E2368] mt-[42px] tracking-wide mb-2 lg:mb-4 lg:text-[18.84px]">Contact Us</div>
        <div className="contactItems text-[8.76px] w-[275px] text-[#646874] lg:text-[14.66px]">
          <li className="mb-2">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </li>
          <li className="mb-2">example2020@gmail.com</li>
          <li>(904) 443-0343</li>
        </div>
      </div>
      <div className="more mt-14 ml-[41px] lg:mt-24 lg:ml-[102px]">
        <div className="title text-[15.77px] font-[600] text-[#0E2368] mb-2 lg:mb-4 lg:text-[18.84px]">More</div>
        <div className="moreItems text-[8.76px] w-[275px] text-[#646874] lg:text-[14.66px]">
          <li className="mb-2 lg:mb-[14px]">About Us</li>
          <li className="mb-2 lg:mb-[14px]">Products</li>
          <li className="mb-2 lg:mb-[14px]">Career</li>
          <li className="mb-2 lg:mb-[14px]">Contact Us</li>
        </div>
      </div>
      <div className="linkCopy lg:-mt-2 lg:relative lg:mr-16">
      <div className="copyRight text-[8.76px] w-[111px] text-[#828B9C] mx-auto mt-[30px] lg:text-[14.66px] lg:w-[197px] lg:absolute lg:bottom-[90px] lg:right-[150px] ">© 2022 Food Truck Example</div>
      <div className="socialLinks lg:relative lg:mt-[105px]">
        <div className="title hidden text-[#0E2368] font-[600] mt-[42px] tracking-wide mb-2 lg:block lg:text-[18.84px]">Social Links</div>
        <div className="socialItems flex mx-36 mt-2 mb-[107px] lg:-ml-4">
            <AiOutlineInstagram className="mx-2 text-[#0E2368] text-[14px] lg:text-[21px] lg:mx-4"/>
            <AiOutlineTwitter className="mx-2 text-[#0E2368] text-[14px] lg:text-[21px] lg:mx-4"/>
            <BiLogoFacebook className="mx-2 text-[#0E2368] text-[14px] lg:text-[21px] lg:mx-4"/>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
