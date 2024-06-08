import React from "react";
import "./RoadmapData.css";
import LinkIcon from "../../../assets/icons/link.png";
import ProblemIcon from "../../../assets/icons/problem.png";
import { NavLink } from "react-router-dom";

const RoadmapData = ({ curRoadmapData, curSection, curLevel }) => {
  return (
    <div className="roadmap__data-container mt-4 sm:ml-4 md:mt-6 md:ml-6 lg:mt-8 lg:ml-8">
      <h2 className="font-medium text-xl lg:text-2xl">
        {curSection} | {curLevel}
      </h2>
      <h3 className="font-medium text-base mt-4 md:mt-6 lg:mt-10">Theory </h3>
      <ul>
        {curRoadmapData.Theory.map((theory) => (
          <li>
            <div className="checked-icon-container rounded bg-gray-400 mr-2 flex justify-center items-center p-2">
              <div className="w-4 h-4">
                <img src={LinkIcon} alt="" />
              </div>
            </div>
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
      <h3 className="font-medium text-base mt-4 md:mt-6 lg:mt-10">Problems </h3>
      <ul>
        {curRoadmapData.Problems.map((problem) => (
          <li>
            <div className="checked-icon-container rounded bg-gray-400 mr-2 flex justify-center items-center p-2">
              <div className="w-4 h-4">
                <img src={ProblemIcon} alt="" />
              </div>
            </div>
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
