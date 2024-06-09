import React from "react";
import ContestCard from "./ContestCard";
import { useNavigate } from "react-router";

const PastContests = () => {
  const navigate = useNavigate();

  return (
    <div className="sm:ml-56 overflow-y-scroll w-[100%] xl:w-[55%] border-l border-gray-300">
      <ContestCard
        title="National Collegiate Programming Contest 2024 (NCPC)"
        sheduledTime="June 10, 2024 at 11:00 AM"
        visibility="Protected"
        status="Finished"
        onClickAction={() => navigate("/dummy-contest")}
      />
      <ContestCard
        title="UITS Ahmed Jubayer IUPC Contest 2024"
        sheduledTime="June 7, 2024 at 2:40 PM"
        visibility="Protected"
        status="Finished"
      />
      <ContestCard
        title="UITS Batch 47 Weekly Contest"
        sheduledTime="May 27, 2024 at 1:15 PM"
        visibility="Public"
        status="Finished"
      />
      <ContestCard
        title="UITS Victory Day Contest"
        sheduledTime="June 7, 2024 at 8:41 AM"
        visibility="Protected"
        status="Finished"
      />
      <ContestCard
        title="Test Contest_A01"
        sheduledTime="May 17, 2024 at 10:00 AM"
        visibility="Public"
        status="Finished"
      />
    </div>
  );
};

export default PastContests;
