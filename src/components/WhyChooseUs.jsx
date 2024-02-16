import React from "react";
import { CommonVecto, VectorC } from "./common/Icons";
import { WhyChoose } from "./common/Helper";

const WhyChooseUs = () => {
  return (
    <div className=" relative overflow-hidden">
      <div className=" absolute top-[29%] left-[-3px] hidden sm:block">
        <VectorC/>
      </div>
     <p className=" font-Poppins font-black text-[108px] text-main opacity-5 absolute right-[-115px] top-[-20px] hidden md:block">CHOOSE US</p> 
      <div className="container xl:max-w-[1140px] px-3 mx-auto md:mt-20 mb-32">
        <div className=" flex items-end justify-center">
          <CommonVecto />
          <p className=" text-lg font-Poppins text-main font-medium leading-none ms-2">
            WHY CHOOSE US
          </p>
        </div>
        <h2 className=" font-bahnschrift font-light text-black text-4xl md:text-5xl mt-3 text-center">
          What <span className=" text-orange font-bold">Sets Us</span> Apart
        </h2>
        <div className=" flex justify-center items-center xl:items-start flex-wrap mt-8 xl:mt-14">
          {WhyChoose.map((value, index) => {
            return (
              <div key={index} className=" md:w-6/12 xl:w-4/12 sm:px-3">
                <div className={` mt-6 justify-center items-center flex flex-col group hover:border-main boxShadowWhy transition-all hover:translate-y-[-10px] ease-in-out duration-300 relative  py-10 border border-blackRussian min-h-[311px] rounded xl:max-w-[364px] w-full ${index === 2 ?"!px-3":" px-4 sm:px-9"}`}>
                  {value.icon}
                  <h4 className=" font-bahnschrift group-hover:text-main transition-all ease-in-out duration-300 text-black font-semibold text-2xl mt-6">
                    {value.title}
                  </h4>
                  <p className=" text-base font-Poppins text-black opacity-70 text-center font-normal mt-3">
                    {value.description}
                  </p>
                  <div className=" absolute max-w-[229px] h-2 bg-main w-full bottom-0 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
