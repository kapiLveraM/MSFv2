"use client";
import React, { useState } from "react";
import { CommonVecto } from "./common/Icons";
import CommonInput from "./common/CommonInput";

const RequestYourFree = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue();
  };

  return (
    <div className=" mt-[139px]">
      <div className="container xl:max-w-[1140px] px-5 xl:px-0 mx-auto ">
        <div className=" flex items-end justify-center">
          <CommonVecto />
          <p className=" text-lg font-Poppins text-main font-medium leading-none ms-2">
            GET UPDATED WITH US
          </p>
        </div>
        <h2 className=" font-bahnschrift font-light text-black text-4xl md:text-5xl mt-3 text-center max-w-[882px] mx-auto">
          Request
          <span className=" text-orange font-bold">Your Free</span>
          Consultation
        </h2>
        <p className=" font-Poppins font-normal text-base text-black opacity-70 max-w-[649px] mx-auto text-center mt-4">
          Send us an email or call
          <span className=" text-orange">(800) 700-8450</span> for answers to
          anything and everything you would like to know about your case.
        </p>
        <form action="" className=" mt-12">
          <CommonInput
            label="First Name"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default RequestYourFree;
