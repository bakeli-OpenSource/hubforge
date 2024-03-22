import React from "react";

const MonInput = ({
  label,
  type,
  id,
  value,
  onChange,
  options,
  placeholder,
  paddingB,
  MessageError,
  labelStyle,
}) => {
  if (type === "select") {
    return (
      <div className="mt-4">
        <label htmlFor={id} className={`${labelStyle} text-gray-500`}>
          {label}
        </label>
        <select
          id={id}
          className={` custom-select text-black text-opacity-90 ${paddingB} border-gr focus:border-vr px-2 rounded-xl py-3 border focus:outline-none w-full`}
          aria-label={label}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    // Autres Types d'Inputs
    return (
      <div className="mt-4">
        <label htmlFor={id} className={`${labelStyle} text-gray-500`}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          className={`text-black text-opacity-90 ${paddingB} border-gr focus:border-vr px-2 rounded-xl py-3 border focus:border-2 focus:outline-none w-full`}
          aria-label={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <div className="flex mt-1 justify-center w-full ">
          <small className="text-rg flex items-center text-center font-bold text-[14px] text-wrap ">
            {MessageError}
          </small>
        </div>
      </div>
    );
  }
};

export default MonInput;
