"use client";
import React, { useRef } from "react";
import {
  CommonVecto,
  NextArrow,
  PrevArrow,
  ReadMoreArrow,
} from "./common/Icons";
import { Blogs } from "./common/Helper";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const OurBlogs = () => {
  const sliderRef = useRef(null);

  var cardSlider = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "5px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  const prevSlideHandler = () => {
    sliderRef.current.slickPrev();
  };
  const nextSlideHandler = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="  relative">
      <p
        data-aos="fade-right"
        data-aos-offset="-1000"
        className=" font-Poppins font-black text-[108px] text-main !opacity-5 absolute left-[-25px] top-[-80px] hidden md:block"
      >
        R BLOGS
      </p>
      <div className=" relative xl:max-w-[1140px] mx-auto">
        <div className="container xl:max-w-[1140px] px-5 xl:px-0 mx-auto overflow-hidden">
          <div className=" flex items-end justify-center">
            <CommonVecto />
            <p className=" text-lg font-Poppins text-main font-medium leading-none ms-2">
              OUR BLOGS
            </p>
          </div>
          <h2 className="font-bahnschrift font-light text-black text-4xl md:text-5xl mt-3 text-center max-w-[716px] mx-auto">
            In the Spotlight:
            <span className=" text-orange font-bold"> Featured </span>
            Stories
          </h2>
          <div className=" relative">
            <div className="relative ">
              <Slider {...cardSlider} ref={sliderRef} className="blog sm:pb-12">
                {Blogs.map((value, index) => (
                  <div key={index} className="w-4/12 pt-16 px-3 ">
                    <div className=" mt-0 border border-whisper px-2 pt-3 pb-[38px] rounded">
                      <Image
                        loading="lazy"
                        width={341}
                        height={227}
                        src={value.image}
                        alt="cardImages"
                        className=" w-full"
                      />
                      <div className=" flex items-center mt-5">
                        <div className=" flex items-center gap-1">
                          {value.icon}
                          <p className=" font-Poppins font-medium text-sm text-black">
                            {value.date}
                          </p>
                        </div>
                        <p className=" text-[#8C8C8C] mx-3">|</p>
                        <div className=" flex items-center gap-1">
                          {value.iconComment}
                          <p className=" font-Poppins font-medium text-sm text-black">
                            {value.Comment}
                          </p>
                        </div>
                      </div>
                      <p className=" font-bahnschrift font-normal text-base xl:text-[17px] text-black mt-4">
                        {value.description}
                      </p>
                      <Link
                        href="#"
                        className=" font-medium text-lg text-black font-Poppins flex items-center gap-1 mt-8"
                      >
                        Read More <ReadMoreArrow />
                      </Link>
                      <div className="absolute boxBottmBoder bottom-[-6px] w-[229px] h-[10px] start-[50%] bg-transparent translate-x-[-50%]  transition-all ease-linear duration-300"></div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className=" mt-14 xl:mt-0 flex items-center justify-center w-full gap-3 ">
          <span
            className=" xl:absolute  xl:top-[50%] translate-y-[-50%] start-[-60px] cursor-pointer"
            onClick={prevSlideHandler}
          >
            <PrevArrow />
          </span>
          <span
            className=" xl:absolute xl:top-[50%] translate-y-[-50%] end-[-60px] rotate-180 cursor-pointer"
            onClick={nextSlideHandler}
          >
            <NextArrow />
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
