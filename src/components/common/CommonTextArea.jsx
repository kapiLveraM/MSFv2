"use client";
import React from "react";
const CommonTextArea = ({
  label,
  onChange,
  value,
  placeholder,
  id,
  name,
  error,
  type,
}) => {
  return (
    <div>
      <label className="block mb-2 font-Poppins font-normal md:text-lg text-base text-lightBlack">
        {label}
      </label>
      <div className=" relative">
        <textarea
          className="outline-none text-black placeholder:text-lightGray border border-lightGray p-4 rounded focus:outline-none focus:shadow-outline w-full min-h-[135px]"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
          name={name}
        />
        {error && value === "" && (
          <p className="text-red-900 text-[12px] font-Bahnschrift font-normal flex items-start mt-1 absolute">
            This field is required
          </p>
        )}
      </div>
    </div>
  );
};

export default CommonTextArea;
