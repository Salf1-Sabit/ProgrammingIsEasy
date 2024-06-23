import React from "react";
import { useMouseOver } from "../../../hooks/useMouseOver";

const DropdownRow = ({
  image,
  title,
  subTitle,
  className,
  onClick,
  isLast,
}) => {
  const { isHovered, handleMouseOver, handleMouseOut } = useMouseOver();

  return (
    <div
      className={`text-gray-600 hover:text-[#1E76CC] w-full font-medium text-nowrap flex items-center justify-start gap-2 md:gap-3 cursor-pointer px-[2%] md:px-[5%] ${className}  transition-all duration-200`}
      onClick={onClick}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <div className={`${isHovered ? "text-[#1E76CC]" : "text-gray-600"}`}>
        {image}
      </div>

      <div className="flex flex-col">
        <p className="leading-3 sm:leading-4 md:leading-5">{title}</p>
        <p className="font-light text-gray-600 text-wrap leading-4">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default DropdownRow;
