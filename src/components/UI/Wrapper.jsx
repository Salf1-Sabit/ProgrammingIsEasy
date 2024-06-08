import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-[90%] max-w-[1300px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
