"use client"
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Globa } from "./common/Helper";
import Image from "next/image";

const GlobalSettlement = () => {
  useEffect(() => {
    // Initialize Slick slider after component mounts
    const sliderFor = document.querySelector(".slider-for");
    const sliderNav = document.querySelector(".slider-nav");

    if (sliderFor && sliderNav) {
      const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav"
      };

      const navSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: true,
        centerMode: true,
        focusOnSelect: true
      };

      // Initialize Slick sliders with vanilla JavaScript
      new Slider(sliderFor, sliderSettings);
      new Slider(sliderNav, navSliderSettings);
    }
  }, []);

  return (
    <div className="bg-black py-8 mb-6">
      <div className="container xl:max-w-[1140px] mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-5/12">
            {Globa.map((value, index) => (
              <div key={index} className="slider-for bg-eerieBlack py-9 px-7 rounded my-6">
                <div className="flex items-center">
                  <p className="font-bahnschrift font-semibold text-white text-6xl leading-[122%]">
                    {value.title}
                  </p>
                  <p className="font-Poppins text-base max-w-[271px] text-white opacity-70 font-normal ms-6">
                    {value.shotDescription}
                  </p>
                </div>
                <p className="font-Poppins text-base max-w-[473px] text-white opacity-70 font-normal mt-3">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <div className="w-6/12 mx-2 slider-nav">
            <Image width={477} height={461} src="/assets/images/global.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSettlement;
