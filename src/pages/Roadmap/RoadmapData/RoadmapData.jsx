import React from "react";
import "./RoadmapData.css";
import LinkIcon from "../../../assets/icons/link.png";
import ProblemIcon from "../../../assets/icons/problem.png";
import { NavLink } from "react-router-dom";

const RoadmapData = ({ curRoadmapData, curSection, curLevel }) => {
  return (
    <div className="roadmap__data-container">
      <h2>
        {curSection} | {curLevel}
      </h2>
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
              <img src={LinkIcon} alt="" height={"16px"} />
            </span>
            <span>
              <a
                href={theory.link}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                {theory.title}{" "}
              </a>
            </span>
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
              <img src={ProblemIcon} alt="" height={"18px"} />
            </span>
            <span>
              {curSection === "Get Started with Codeforces" ? (
                <NavLink to={"/problems"} className="text-link">
                  {problem.title}
                </NavLink>
              ) : (
                <a
                  href={problem.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  {problem.title}{" "}
                </a>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapData;
