import React from "react";
import { CommonVecto, FeatuRedVector, VectorC } from "./common/Icons";
import { FeatuRed } from "./common/Helper";
import Image from "next/image";

const FeatuRedOn = () => {
  return (
    <div className=" relative overflow-hidden">
      <div className=" absolute top-16">
        <FeatuRedVector/>
      </div>
      <div className=" absolute top-44 md:top-16 right-[-4px] hidden sm:block">
        <VectorC/>
      </div>
      <div className="container xl:max-w-[1140px] mx-auto px-5 sm:px-3 mt-20 mb-20 md:mb-32">
        <div className=" flex items-end justify-center">
          <CommonVecto />
          <p className=" text-lg font-Poppins text-main font-medium leading-none ms-2">
            FEATURED ON
          </p>
        </div>
        <div className=" lg:max-w-[912px] mx-auto">
          <div className="flex justify-center items-center flex-wrap mt-6 md:mt-12">
            {FeatuRed.map((image, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center lg:justify-start sm:w-6/12 lg:w-3/12 px-3"
                >
                  <Image
                    width={210}
                    height={120}
                    src={image}
                    alt="FEATUREDON"
                    className="boxShadow transition-all ease-in-out duration-300 mt-6 lg:mt-0"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatuRedOn;
