import React, { useState } from "react";
import RoadmapSidebar from "./RoadmapSidebar/RoadmapSidebar";
import "./Roadmap.css";
import RoadmapData from "./RoadmapData/RoadmapData";
import { roadmapData } from "../../data/roadmapData";

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
  };

  return (
    <div className="roadmap-outer-container">
      <div className="roadmap-container">
        <RoadmapSidebar
          roadmapDataHandler={roadmapDataHandler}
          roadmapData={roadmapData}
          curSectionHandler={curSectionHandler}
          curSection={curSection}
          curLevel={curLevel}
          setCurRoadmapData={setCurRoadmapData}
        />
        <RoadmapData curRoadmapData={curRoadmapData} curSection={curSection} />
      </div>
    </div>
  );
};

export default Roadmap;
