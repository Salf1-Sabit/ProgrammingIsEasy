import React from "react";

import LinkButton from "./Button";
import FilledButton from "../../components/UI/Button";

const ContestCard = ({
  type,
  title,
  sheduledTime,
  contest,
  standings,
  editorial,
  problemset,
  practice,
  upcoming,
  registrationFee,
}) => {
  return (
    <div className="border-b border-gray-200 p-6 sm:p-6 md:p-8 lg:p-10 border-r flex flex-col gap-2 sm:gap-3 md:gap-4 hover:bg-[#EFF5FB] transition-all duration-200">
      <h1 className="text-[22px] sm:text-2xl lg:text-3xl font-bold leading-6 md:leading-7 cursor-pointer">
        {title}
      </h1>

      <div>
        <p className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
          Type: {type}
        </p>
        {registrationFee && (
          <p className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
            Registration Fee:
            <span className="ml-1 sm:ml-2">{registrationFee}</span> BDT
          </p>
        )}
        <p className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
          Scheduled on: {sheduledTime}
        </p>
      </div>

      {upcoming && (
        <FilledButton
          text="Upcoming"
          className="w-fit bg-[#485FC7] cursor-default"
        />
      )}

      <div className="flex flex-wrap gap-1 sm:gap-2">
        {contest !== "" && contest && (
          <LinkButton
            text="Contest"
            className="bg-[#2a9d8f] hover:bg-[#268d81] cursor-pointer"
            to={contest}
          />
        )}
        {problemset !== "" && problemset && (
          <LinkButton
            text="Problemset"
            className="bg-[#2ec4b6] hover:bg-[#29b0a4] cursor-pointer text-black"
            to={problemset}
          />
        )}
        {standings !== "" && standings && (
          <LinkButton
            text="Standings"
            className="bg-[#cdb4db] hover:bg-[#b9a2c5] cursor-pointer"
            to={standings}
          />
        )}
        {editorial !== "" && editorial && (
          <LinkButton
            text="Editorial"
            className="bg-[#f4a261] hover:bg-[#dc9257] cursor-pointer"
            to={editorial}
          />
        )}
        {practice !== "" && practice && (
          <LinkButton
            text="Practice"
            className="bg-[#e76f51] hover:bg-[#d06449] cursor-pointer"
            to={practice}
          />
        )}
      </div>
    </div>
  );
};

export default ContestCard;
