import React from "react";
import { NavLink } from "react-router-dom";

const ButtonBlue = ({ className, text, to }) => {
  const handlePropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <NavLink
      to={to}
      className={`bg-[#00D1B2] rounded px-3 sm:px-5 py-1 text-white font-medium ${className}`}
      onClick={handlePropagation}
    >
      {text}
    </NavLink>
  );
};

export default ButtonBlue;
