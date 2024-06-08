import React from "react";
import { NavLink } from "react-router-dom";

const ButtonBlue = () => {
  return (
    <NavLink
      to="/signup"
      className="bg-[#00D1B2] hover:bg-[#00C4A7] rounded px-3 sm:px-5 py-1 sm:py-2 text-white font-medium"
    >
      Sign up
    </NavLink>
  );
};

export default ButtonBlue;
