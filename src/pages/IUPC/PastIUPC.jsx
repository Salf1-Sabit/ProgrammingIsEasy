import React from "react";
import ContestCard from "./IUPCCard";
import pastIUPC from "../../data/pastIUPCList";

const PastContests = () => {
  return (
    <div className="sm:ml-56 overflow-y-scroll w-[100%] xl:w-[55%] border-l border-gray-300">
      {pastIUPC.map((item) => (
        <ContestCard
          key={item.title}
          type={item.type}
          sheduledTime={item.timestamp}
          title={item.title}
          contest={item.contest}
          problemset={item.problemset}
          standings={item.standings}
          editorial={item.editorial}
          practice={item.practice}
        />
      ))}
    </div>
  );
};

export default PastContests;
