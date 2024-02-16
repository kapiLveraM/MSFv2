"use client";
import React from "react";
import { ButtonLine } from "../Icons";

const ButtonWhite = (props) => {
  const { title } = props;
  return (
    <div className=" inline-block">
    <div className=" relative group z-50 ">
      <button
        className={`font-inter font-bold text-sm sm:text-base bg-transparent text-white border-white border  rounded-[41px] p-[13px_46px] relative z-50 `}
      >
        {title}
      </button>
      <span className="absolute start-[-7px] bottom-[-7px] group-hover:start-0 group-hover:bottom-0 transition-all ease-in-out duration-200 group-hover:opacity-0">
       <ButtonLine/>
      </span>
      </div>
      </div>
  );
};
export default ButtonWhite;