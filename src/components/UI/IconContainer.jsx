import React from "react";

const IconContainer = ({ children, className }) => {
  return <div className={`w-4 h-4 sm:w-6 sm:h-6 ${className}`}>{children}</div>;
};

export default IconContainer;
