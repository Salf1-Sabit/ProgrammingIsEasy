import React, { useState } from "react";
import RoadmapSidebar from "./RoadmapSidebar/RoadmapSidebar";
import "./Roadmap.css";
import RoadmapData from "./RoadmapData/RoadmapData";
import { roadmapData } from "../../data/roadmapData";

const sectionIndex = {
  "Learn C++": 0,
  "Solve Problems on Beecrowd": 1,
  "Standard Template Library (STL)": 2,
  "Get Started with Codeforces": 3,
};

const Roadmap = () => {
  const [curRoadmapData, setCurRoadmapData] = useState(
    roadmapData[0].levels[0]["Level 1"]
  );
  const [curSection, setCurSection] = useState("Learn C++");
  const [curLevel, setCurLevel] = useState("Level 1");

  const roadmapDataHandler = () => {};

  const curSectionHandler = (newSection, newLevel) => {
    setCurSection(newSection);
    setCurLevel(newLevel);
    setCurRoadmapData(
      () =>
        roadmapData[sectionIndex[newSection]].levels[newLevel[6] - "0" - 1][
          newLevel
        ]
    );
  };

  return (
    <div className="roadmap-outer-container mb-[5%] sm:mb-[3%]">
      <div className="roadmap-container">
        <RoadmapSidebar
          roadmapDataHandler={roadmapDataHandler}
          roadmapData={roadmapData}
          curSectionHandler={curSectionHandler}
          curSection={curSection}
          curLevel={curLevel}
          setCurRoadmapData={setCurRoadmapData}
        />
        <RoadmapData
          curRoadmapData={curRoadmapData}
          curSection={curSection}
          curLevel={curLevel}
        />
      </div>
    </div>
  );
};

export default Roadmap;
