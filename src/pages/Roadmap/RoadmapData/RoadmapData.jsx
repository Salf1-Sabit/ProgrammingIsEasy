import React from "react";
import "./RoadmapData.css";
import ProblemIcon from "../../../assets/icons/problem.png";
import ListItem from "./ListItem";
import LinkIcon from "../../../assets/icons/link.png";

const RoadmapData = ({ curRoadmapData, curSection, curLevel }) => {
  return (
    <div className="roadmap__data-container mt-4 sm:ml-4 md:mt-6 md:ml-6 lg:mt-8 lg:ml-8 w-full">
      <h2 className="font-medium text-lg sm:text-xl md:lg:text-2xl">
        {curSection} | {curLevel}
      </h2>

      <h3 className="font-medium text-sm sm:text-base mt-4 md:mt-6 lg:mt-10">
        Theory{" "}
      </h3>
      <ul>
        {curRoadmapData.Theory.map((theory) => (
          <ListItem
            key={theory.link}
            taskId={theory.id}
            link={theory.link}
            title={theory.title}
            image={LinkIcon}
          />
        ))}
      </ul>

      <h3 className="font-medium text-sm sm:text-base mt-4 md:mt-6 lg:mt-10">
        Problems{" "}
      </h3>
      <ul>
        {curRoadmapData.Problems.map((problem) => (
          <ListItem
            key={problem.link}
            taskId={problem.id}
            link={problem.link}
            title={problem.title}
            image={ProblemIcon}
          />
        ))}
      </ul>
    </div>
  );
};

export default RoadmapData;
