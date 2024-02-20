import React from "react";
import { CommonVecto } from "./common/Icons";
import { TheNews } from "./common/Helper";
import Image from "next/image";

const Ourfirm = () => {
  return (
    <div className=" relative overflow-hidden  xl:pt-8 xl:mt-20 mb-20 md:mb-32">
      <div className="container xl:max-w-[1140px] mx-auto px-5 sm:px-3 ">
        <div className=" flex items-end justify-center">
          <CommonVecto />
          <p
            data-aos="fade-right"
            data-aos-offset="-1000"
            className=" uppercase text-lg font-Poppins text-main font-medium leading-none ms-2"
          >
            Our firm in the news
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap xl:flex-nowrap mt-6 md:mt-12">
          {TheNews.map((image, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-offset="-1000"
                key={index}
                className="flex justify-center  px-3"
              >
                <Image
                  width={210}
                  height={120}
                  src={image}
                  alt="TheNews"
                  className="boxShadow transition-all ease-in-out duration-300 mt-6 xl:mt-0"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ourfirm;
