import React from "react";
import './Articles.css'
import Tomatoes from "../assets/images/Tomatoes.jpeg";
import Snacks from "../assets/images/Snacks.jpeg";
import Workout from "../assets/images/Workout.png";
import Corn from "../assets/images/Corn.png";
import Wrap from "../assets/images/Wrap.png";
import Soup from "../assets/images/Soup.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function truncate(string, n) {
  return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
}

const Data1 = [
  {
    id: 1,
    image: Tomatoes,
    title: "Grilled Tomatoes at Home",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    id: 2,
    image: Snacks,
    title: "Snacks for Travel",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    id: 3,
    image: Workout,
    title: "Post-workout Recipes",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

const Data2 = [
  {
    id: 4,
    image2: Corn,
    title2: "How To Grill Corn",
    description2:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    id: 5,
    image2: Wrap,
    title2: "Crunchwrap Supreme",
    description2:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    id: 6,
    image2: Soup,
    title2: "Broccoli Cheese Soup",
    description2:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

function Articles() {
  return (
    <div className="carouselContainer">
      <Carousel
        className="carousel relative"
        autoPlay={false}
        interval={10000}
        stopOnHover={false}
        transitionTime={500}
        showStatus={false}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <button onClick={clickHandler} className={`custom-prev-arrow-class ${hasPrev ? "" : "hidden"}`}>
            <AiOutlineLeft className="leftIcon absolute bottom-8 text-[#424961] left-[156px] z-20 border-[1px] border-[#424961] lg:h-[29px] lg:w-[29px] lg:left-[663px]"/>
          </button>
        )} renderArrowNext={(clickHandler, hasNext) => (
          <button onClick={clickHandler} className={`custom-next-arrow-class ${hasNext ? "" : "hidden"}`}>
            <AiOutlineRight className="rightIcon absolute bottom-8 text-[#424961] right-[156px] z-20 border-[1px] border-[#424961] lg:h-[29px] lg:w-[29px] lg:right-[663px]"/>
          </button>
        )}
>
        <div className="articlesBox my-10 h-auto relative lg:w-[1225px] lg:mb-[64px]">
          <h1 className=" text-[28px] font-[600] text-[#0e2368] lg:text-[56px] lg:mb-[41px] lg:-ml-[570px]">Latest Articles</h1>
          <div className="articlesContainer lg:flex lg:mx-[108px] lg:w-[100%] w-[271px] mx-auto ">
            {Data1.map(({ image, title, description }) => {
              return (
                <div className="articles mt-[21px] lg:w-[381px] lg:mx-[41px]">
                  <div className="article border-2 px-[33px] py-[40px] rounded-2xl">
                    <img className="articleImg w-[204px] rounded-2xl lg:w-[326px]" src={image} alt="image" />
                    <h2 className="w-[236px] text-[16px] text-[#0E2368] font-[700] mt-[30px] text-left lg:w-[285px] lg:text-[21px]">{title}</h2>
                    <p className="w-[213px] text-[12px] text-[#444957] font-light mt-[6px] lg:text-left lg:text-[15px] lg:w-[295px]">{truncate(description, 200)}</p>
                    <button className="articleBtn mt-[26px] w-[118px] text-[11px] items-center border-2 border-[#424961] text-[#424961] rounded-[30px] py-[5px] lg:w-[131px] lg:h-[42px] lg:-ml-40 lg:text-[16.44px] lg:font-[600]">Read More</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pagination1 absolute -bottom-9 left-44 lg:text-[22px] lg:left-[705px] lg:bottom-[-57px]">
            1/2
          </div>
        </div>
        <div className="articlesBox2 my-10 h-auto relative lg:w-[1225px]">
          <h1 className=" text-[28px] font-[600] text-[#0e2368] lg:text-[56px] lg:mb-[41px] lg:-ml-[570px]">Latest Articles</h1>
          <div className="articlesContainer lg:flex lg:mx-[108px] lg:w-[100%] w-[271px] mx-auto ">
            {Data2.map(({ image2, title2, description2 }) => {
              return (
                <div className="articles mt-[21px] lg:w-[381px] lg:mx-[41px]">
                  <div className="article border-2 px-[33px] py-[40px] rounded-2xl">
                    <img className="articleImg w-[204px] rounded-2xl lg:w-[326px]" src={image2} alt="image" />
                    <h2 className="w-[236px] text-[16px] text-[#0E2368] font-[700] mt-[30px] text-left lg:w-[285px] lg:text-[21px]">{title2}</h2>
                    <p className="w-[213px] text-[12px] text-[#444957] font-light mt-[6px] lg:text-left lg:text-[15px] lg:w-[295px]">{truncate(description2, 200)}</p>
                    <button className="articleBtn mt-[26px] w-[118px] text-[11px] items-center border-2 border-[#424961] text-[#424961] rounded-[30px] py-[5px] lg:w-[131px] lg:h-[42px] lg:-ml-40 lg:text-[16.44px] lg:font-[600]">Read More</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pagination2 absolute -bottom-10 left-44 lg:text-[22px] lg:left-[705px] lg:bottom-[-57px]">
            2/2
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Articles;
