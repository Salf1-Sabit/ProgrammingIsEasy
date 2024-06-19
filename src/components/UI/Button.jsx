import React from "react";
import { NavLink } from "react-router-dom";

const ButtonBlue = ({ className, text, to, onClick }) => {
  const handlePropagation = (event) => {
    // event.stopPropagation();
    onClick();
  };

  return (
    <NavLink
      to={to}
      className={`bg-[#00D1B2] text-sm md:text-base rounded px-3 sm:px-5 py-1 text-white font-medium ${className}`}
      onClick={handlePropagation}
    >
      {text}
    </NavLink>
  );
};

export default ButtonBlue;
