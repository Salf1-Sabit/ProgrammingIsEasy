import React from "react";

const LanguageIconContainer = ({ icon, className }) => {
  return (
    <div
      className={`h-fit absolute w-7 sm:w-9 md:w-10 lg:w-12 p-1 md:p-2 rounded border border-[#8fbbe6] bg-[#e9f1fa] ${className}`}
    >
      {icon}
    </div>
  );
};

export default LanguageIconContainer;
