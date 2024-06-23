import React from "react";
import { MdErrorOutline } from "react-icons/md";

const AuthInput = ({ placeholder, type, name, register, errors }) => {
  return (
    <>
      <input
        className={`text-sm lg:text-[16px] border-b-2 pb-2 border-gray-100 focus:outline-none focus:border-[#1E76CC] ${
          errors[name]?.message ? "" : "mb-8"
        } ${errors[name]?.message && "border-red-600"}`}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />

      {errors[name]?.message && (
        <p
          className={`text-red-600 text-[10px] tracking-tighter sm:text-[14px] lg:text-[14px] mt-1 flex items-center gap-1 ${
            errors[name]?.message ? "mb-5" : ""
          }`}
        >
          <MdErrorOutline /> {errors[name]?.message}
        </p>
      )}
    </>
  );
};

export default AuthInput;
