"use client"
import React from "react";
const ButtonMain = (props) => {
  const {title} = props;
  return (
    <div className=" relative group">
      <button
        className={` py-4 lg:py-[18px] px-7 lg:px-8 font-Poppins font-medium text-sm lg:text-lg rounded-[500px] text-white bg-main hover:bg-white hover:text-main hover:shadow-main hover:shadow-md transition-all ease-linear duration-200`}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonMain;
