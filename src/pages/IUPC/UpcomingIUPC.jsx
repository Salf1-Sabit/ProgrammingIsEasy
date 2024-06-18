import React from "react";
import ContestCard from "./IUPCCard";

const UpcomingContests = () => {
  return (
    <div className="sm:ml-56 overflow-y-scroll w-[100%] xl:w-[55%] border-l border-gray-300">
      <ContestCard
        title="SUST Inter University Programming Contest 2024"
        sheduledTime="August 18, 2024 at 9:00 AM"
        visibility="Protected"
        status="Not-Started"
      />
      <ContestCard
        title="AUST Inter University Programming Contest 2024"
        sheduledTime="September 24, 2024 at 11:00 AM"
        visibility="Protected"
        status="Not-Started"
      />
      <ContestCard
        title="UITS Batch 48 Weekly Contest"
        sheduledTime="October 30, 2024 at 2:30 PM"
        visibility="Protected"
        status="Not-Started"
      />
      <ContestCard
        title="Daffodil Internation University Weekly Contest"
        sheduledTime="November 2, 2024 at 2:30 PM"
        visibility="Protected"
        status="Not-Started"
      />
      <ContestCard
        title="UITS Batch 53 Weekly Contest"
        sheduledTime="November 28, 2024 at 2:30 PM"
        visibility="Protected"
        status="Not-Started"
      />
    </div>
  );
};

export default UpcomingContests;
