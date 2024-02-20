"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Globa } from "./common/Helper";
import { CommonVectorDot, VectorC } from "./common/Icons";

const GlobalSettlement = () => {
  const settingsFor = {
    dots: false,
    arrow: false,
    loop: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    infinite: true,
    vertical: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 725,
        settings: {
          loop: false,
        },
      },
    ],
  };
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      // Add mouse wheel scrolling functionality
      slider.innerSlider.list.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
          slider.slickNext();
        } else {
          slider.slickPrev();
        }
      });
    }
  }, []);
  return (
    <div className="bg-black py-8 mb-6 relative overflow-hidden ">
      <p className=" font-Poppins font-black text-[108px] text-white opacity-5 absolute right-[-80px] top-[-12%] hidden md:block">
        ABOUT
      </p>
      <div className=" absolute right-[-5px] bottom-44 hidden lg:block">
        <CommonVectorDot />
      </div>
      <div className=" absolute left-[-5px] top-[45%] hidden xl:block">
        <VectorC />
      </div>
      <Image
        loading="lazy"
        width={331}
        height={173}
        src="/assets/images/Attorneys/AttorneyWhiteLineBox.png"
        alt="Representation"
        className=" absolute right-[-3%] top-[-10%] hidden lg:block"
      />

      <div className="container xl:max-w-[1140px] mx-auto px-5 xl:px-0 relative">
        <div className="flex flex-wrap justify-between items-center ">
          <div className=" lg:w-6/12 relative">
            <div className="Global-Settlement w-full h-40 absolute z-10 top-[-3px]"></div>
            <div className="Global-Settlement w-full h-40 absolute z-10 bottom-[-3px] rotate-180 hidden lg:block"></div>
            <Slider
              {...settingsFor}
              ref={sliderRef}
              className="slider-for global"
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
                    <p className="font-Poppins text-sm md:text-base max-w-[500px] text-white  opacity-70 font-normal mt-3">
                      {value.description}
                    </p>
                    <div className="absolute top-[50%] w-[10px] h-[120px] start-0 bg-transparent translate-y-[-50%] transition-all ease-linear duration-300"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className=" lg:w-5/12 ">
            <div className="mx-2 flex justify-center items-center px-4 py-6">
              <Image
                width={477}
                height={461}
                src="/assets/images/global.png"
                alt="image"
              />
            </div>
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
