"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Globa } from "./common/Helper";
import { CommonVectorDot, VectorC } from "./common/Icons";

const GlobalSettlement = () => {
  const sliderRef = useRef(null);

  const goToSlide = (slide) => {
    sliderRef.current.slickGoTo(slide);
  };

  const settingsFor = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    centerMode: true,
    arrow: false,
    centerPeading: "6px",
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    asNavFor: ".slider-nav",
  };

  const settingsNav = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    asNavFor: ".slider-for",
  };

  return (
    <div className="bg-black py-8 mb-6 relative overflow-hidden ">
      <div className=" absolute right-[-5px] bottom-44 hidden lg:block">
        <CommonVectorDot />
      </div>
      <div className=" absolute left-[-5px] top-[45%] hidden xl:block">
        <VectorC />
      </div>
      <div className="Global-Settlement w-full h-40 absolute z-10 top-7"></div>
      <div className="Global-Settlement w-full h-40 absolute z-10 bottom-0 rotate-180 hidden lg:block"></div>
      <div className="container xl:max-w-[1140px] mx-auto px-3">
        <div className="flex flex-wrap justify-between items-center">
          <div className=" lg:w-6/12">
            <Slider
              {...settingsFor}
              ref={sliderRef}
              className="slider-for global "
            >
              {Globa.map((value, index) => (
                <div key={index} className=" px-5">
                  <div className="bg-eerieBlack py-3 xl:py-9 px-7 rounded my-3 relative borderS">
                    <div className="flex items-center">
                      <p className="font-bahnschrift font-semibold text-white text_white text-3xl lg:text-6xl leading-[122%]">
                        {value.title}
                      </p>
                      <p className="font-Poppins text-sm  md:text-base max-w-[271px] text-white opacity-70 font-normal ms-6">
                        {value.shotDescription}
                      </p>
                    </div>
                    <p className="font-Poppins text-sm md:text-base max-w-[473px] text-white  opacity-70 font-normal mt-3">
                      {value.description}
                    </p>
                    <div className="absolute top-[50%] w-[10px] h-[120px] start-0 bg-transparent translate-y-[-50%] transition-all ease-linear duration-300"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className=" lg:w-5/12 ">
            <Slider {...settingsNav} className="slider-nav">
              {Globa.map((value, index) => (
                <div
                  key={index}
                  className="mx-2 flex justify-center items-center px-4 py-6"
                >
                  <Image
                    width={477}
                    height={461}
                    src={value.image}
                    alt="image"
                  />
                </div>
              ))}
            </Slider>
            <p className=" font-normal font-bahnschrift text-3xl text-white text-center mt-7">
              Global Settlement’s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSettlement;
