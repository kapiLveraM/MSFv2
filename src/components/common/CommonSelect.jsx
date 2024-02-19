import React from "react";

const CommonSelect = ({
  value,
  onChange,
  id,
  name,
  map,
  registration,
  error,
}) => {
  return (
    <>
      <label className="block mb-2 font-Poppins font-normal text-lg text-lightBlack">
        City
      </label>
      <select
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        className="block outline-none text-[#CCCCCC] placeholder:text-[#CCCCCC] border border-[#CCCCCC] px-4 py-3 rounded focus:outline-none focus:shadow-outline w-full focus:shadow-outline"
      >
        {map.map((option, index) => (
          <option className=" w-full" key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && value === "" ? (
        <p className="text-red-900 text-[12px] font-Bahnschrift font-normal flex items-start mt-1 absolute">
          This field is required
        </p>
      ) : (
        registration !== ""
      )}
    </>
  );
};

export default CommonSelect;
