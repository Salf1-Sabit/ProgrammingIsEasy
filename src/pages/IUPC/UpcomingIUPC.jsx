import React from "react";
import ContestCard from "./IUPCCard";
import upcomingIUPCList from "../../data/upcomingIUPCList";

const UpcomingContests = () => {
  return (
    <div className="sm:ml-56 overflow-y-scroll w-[100%] xl:w-[55%] border-l border-gray-300">
      {upcomingIUPCList.map((item) => (
        <ContestCard
          type={item.type}
          title={item.title}
          sheduledTime={item.timestamp}
          registrationFee={item.registrationFee}
          upcoming={item.upcoming}
        />
      ))}
    </div>
  );
};

export default UpcomingContests;
