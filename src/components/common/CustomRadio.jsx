"use client";
import React from "react";
const CustomRadio = ({ options, selectedValue, onChange, name, error }) => {
  return (
    <div className="relative flex flex-wrap ">
      {options.map((option, index) => (
        <label
          key={index}
          className=" font-Poppins md:text-lg sm:text-base text-sm font-semibold flex gap-3  w-6/12 items-center mt-[18px]"
        >
          <input
            type="radio"
            className="assent_orange mt-[2px]"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
      {error && selectedValue === "" && (
        <p className="text-red-900 text-[12px] font-Bahnschrift font-normal flex items-start mt-1 absolute bottom-[-15px]">
          This field is required
        </p>
      )}
    </div>
  );
};
export default CustomRadio;
