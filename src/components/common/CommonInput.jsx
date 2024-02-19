// CommonInput.js
import React from 'react';

const CommonInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className=' flex flex-col'>
      <label>{label}</label>
          <input
              className=' border border-[#00000033] '
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonInput;
