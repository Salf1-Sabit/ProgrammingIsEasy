import React from "react";

const ButtonBlue = ({ className, text, to }) => {
  return (
    <a
      href={to}
      className={`bg-[#00D1B2] rounded px-3 sm:px-5 py-1 text-[10px] sm:text-[12px] md:text-sm text-white font-medium transition-all duration-200 ${className}`}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export default ButtonBlue;
