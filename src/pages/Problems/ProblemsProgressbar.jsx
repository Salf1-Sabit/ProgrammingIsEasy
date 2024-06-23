import React from "react";

const ProblemsProgressbar = ({ problemList, curRating }) => {
  return (
    <div className="problems__progress-bar bg-gray-200 h-[26px] sm:h-[36px]">
      <div
        className="problems__progress-bar__fill"
        style={{
          width: `calc(100% / 30 * ${problemList[curRating].totSolvedCnt})`,
        }}
      ></div>
      <span className="text-sm sm:text-base md:text-lg lg:text-xl">
        {problemList[curRating].totSolvedCnt}/30 Solved
      </span>
    </div>
  );
};

export default ProblemsProgressbar;
