import React from "react";
import "./RoadmapData.css";
import CheckedIcon from "../../../components/UI/CheckedIcon";
// import LeftArrowIcon from "../../../components/UI/LeftArraowIcon";
// import RightArrowIcon from "../../../components/UI/RightArrowIcon";
// import UncheckedIcon from "../../../components/UI/UncheckedIcon";

const RoadmapData = ({ curRoadmapData, curSection }) => {
  return (
    <div className="roadmap__data-container">
      <h2>{curSection}</h2>
      <h3>Theory </h3>
      <ul>
        {curRoadmapData.Theory.map((theory) => (
          <li>
            <span
              style={{
                borderRadius: "5px",
                height: "30px",
                width: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: ".5em",
              }}
              className="checked-icon-container"
            >
              <CheckedIcon />
            </span>
            <span>{theory.title}</span>
          </li>
        ))}
      </ul>
      <h3>Problems </h3>
      <ul>
        {curRoadmapData.Problems.map((problem) => (
          <li>
            <span
              style={{
                borderRadius: "5px",
                height: "30px",
                width: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: ".5em",
              }}
              className="checked-icon-container"
            >
              <CheckedIcon />
            </span>
            <span>{problem.title}</span>
          </li>
        ))}
      </ul>

      {/* <div className="roadmap__data-actions">
        <span className="arrow-icons-container">
          <LeftArrowIcon />
        </span>
        <span className="arrow-icons-container">
          <RightArrowIcon />
        </span>
        <span>
          <UncheckedIcon /> Complete
        </span>
      </div> */}
    </div>
  );
};

export default RoadmapData;
