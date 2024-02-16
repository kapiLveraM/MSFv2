"use client"
import React, { useRef } from "react";
import { CommonVecto, ReadMoreArrro } from "./common/Icons";
import { Blogs } from "./common/Helper";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const OurBlogs = () => {

  return (
    <div className=" mb-20 lg:mb-[106px] relative ">
      <p className=" font-Poppins font-black text-[108px] text-main opacity-5 absolute left-[-25px] top-[-80px] hidden md:block">
        R BLOGS
      </p>
      <div className="container xl:max-w-[1140px] px-3 mx-auto">
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
        
        <div className=" flex flex-wrap mt-16">
          <Slider {...cardSlider} ref={sliderRef} className="blog">
          {Blogs.map((value, index) => (
            <div key={index} className="w-4/12  px-2">
              <div className=" border border-whisper px-[11px] pt-3 pb-9 rounded group hover:border-main boxShadowWhy transition-all hover:translate-y-[-10px] ease-in-out duration-300 relative">
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
                <p className=" font-bahnschrift font-normal text-lg text-black mt-4">
                  {value.description}
                </p>
                <Link
                  href="#"
                  className=" font-medium text-lg text-black font-Poppins flex items-center gap-1 mt-8"
                >
                  Read More <ReadMoreArrro />{" "}
                </Link>
                <div className=" absolute max-w-[229px] h-2 bg-main w-full bottom-0 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300"></div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
