import React from "react";

import Button from "../../components/UI/Button";

const ContestCard = ({
  title,
  sheduledTime,
  visibility,
  status,
  onClickAction,
}) => {
  return (
    <div className="border-b border-gray-200 p-6 sm:p-6 md:p-8 lg:p-10 border-r flex flex-col gap-2 sm:gap-3 md:gap-4 hover:bg-[#EFF5FB] transition-all duration-200">
      <h1
        className="text-[22px] sm:text-2xl lg:text-3xl font-bold leading-6 md:leading-7 cursor-pointer"
        onClick={onClickAction}
      >
        {title}
      </h1>
      <p className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
        Scheduled on: {sheduledTime}
      </p>
      <div className="flex gap-1 sm:gap-2">
        <Button
          text={visibility}
          className={`cursor-default ${
            visibility === "Protected" && "bg-[#485FC7]"
          }`}
          to="#"
        />
        <Button text={status} className="bg-[#3E8ED0] cursor-default" to="#" />
      </div>
    </div>
  );
};

export default ContestCard;
