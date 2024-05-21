import React from "react";
import "./RoadmapSidebar.css";
import LockedIcon from "../../../components/UI/LockedIcon";

const RoadmapSidebar = ({ curSectionHandler, curSection, curLevel }) => {
  return (
    <div className="roadmap__sidebar-container">
      <h3 onClick={() => curSectionHandler("Learn C++", "Level 1")}>
        Week 1 - 5 | Learn C++
      </h3>
      <ul>
        <li
          onClick={() => curSectionHandler("Learn C++", "Level 1")}
          style={{
            backgroundColor: `${
              curSection === "Learn C++" && curLevel === "Level 1"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Learn C++" && curLevel === "Level 1"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 1</span>
        </li>
        <li
          onClick={() => curSectionHandler("Learn C++", "Level 2")}
          style={{
            backgroundColor: `${
              curSection === "Learn C++" && curLevel === "Level 2"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Learn C++" && curLevel === "Level 2"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 2</span>
        </li>
        <li
          onClick={() => curSectionHandler("Learn C++", "Level 3")}
          style={{
            backgroundColor: `${
              curSection === "Learn C++" && curLevel === "Level 3"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Learn C++" && curLevel === "Level 3"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 3</span>
        </li>
        <li
          onClick={() => curSectionHandler("Learn C++", "Level 4")}
          style={{
            backgroundColor: `${
              curSection === "Learn C++" && curLevel === "Level 4"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Learn C++" && curLevel === "Level 4"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 4</span>
        </li>
        <li
          onClick={() => curSectionHandler("Learn C++", "Level 5")}
          style={{
            backgroundColor: `${
              curSection === "Learn C++" && curLevel === "Level 5"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Learn C++" && curLevel === "Level 5"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 5</span>
        </li>
        <li
          onClick={() => curSectionHandler("Learn C++", "Level 6")}
          style={{
            backgroundColor: `${
              curSection === "Learn C++" && curLevel === "Level 6"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Learn C++" && curLevel === "Level 6"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 6</span>
        </li>
        <li
          onClick={() => curSectionHandler("Learn C++", "Level 7")}
          style={{
            backgroundColor: `${
              curSection === "Learn C++" && curLevel === "Level 7"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Learn C++" && curLevel === "Level 7"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 7</span>
        </li>
      </ul>

      <h3
        onClick={() =>
          curSectionHandler("Solve Problems on Beecrowd", "Level 1")
        }
      >
        Week 6 - 10 | Solve Problems on Beecrowd
      </h3>
      <ul>
        <li
          onClick={() =>
            curSectionHandler("Solve Problems on Beecrowd", "Level 1")
          }
          style={{
            backgroundColor: `${
              curSection === "Solve Problems on Beecrowd" &&
              curLevel === "Level 1"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Solve Problems on Beecrowd" &&
                curLevel === "Level 1"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 1</span>
        </li>
      </ul>

      <h3
        onClick={() =>
          curSectionHandler("Standard Template Library (STL)", "Level 1")
        }
      >
        Week 10 - 14 | Standard Template Library (STL)
      </h3>
      <ul>
        <li
          onClick={() =>
            curSectionHandler("Standard Template Library (STL)", "Level 1")
          }
          style={{
            backgroundColor: `${
              curSection === "Standard Template Library (STL)" &&
              curLevel === "Level 1"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Standard Template Library (STL)" &&
                curLevel === "Level 1"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 1</span>
        </li>
        <li
          onClick={() =>
            curSectionHandler("Standard Template Library (STL)", "Level 2")
          }
          style={{
            backgroundColor: `${
              curSection === "Standard Template Library (STL)" &&
              curLevel === "Level 2"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Standard Template Library (STL)" &&
                curLevel === "Level 2"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 2</span>
        </li>
        <li
          onClick={() =>
            curSectionHandler("Standard Template Library (STL)", "Level 3")
          }
          style={{
            backgroundColor: `${
              curSection === "Standard Template Library (STL)" &&
              curLevel === "Level 3"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Standard Template Library (STL)" &&
                curLevel === "Level 3"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 3</span>
        </li>
      </ul>

      <h3
        onClick={() =>
          curSectionHandler("Get Started with Codeforces", "Level 1")
        }
      >
        Week 15 | Get Started with Codeforces
      </h3>
      <ul>
        <li
          onClick={() =>
            curSectionHandler("Get Started with Codeforces", "Level 1")
          }
          style={{
            backgroundColor: `${
              curSection === "Get Started with Codeforces" &&
              curLevel === "Level 1"
                ? "#edeff0"
                : "#fff"
            }`,
          }}
        >
          <span
            style={{
              backgroundColor: `${
                curSection === "Get Started with Codeforces" &&
                curLevel === "Level 1"
                  ? "#fff"
                  : "#edeff0"
              }`,
              borderRadius: "5px",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: ".5em",
            }}
          >
            <LockedIcon />
          </span>
          <span> Level 1</span>
        </li>
      </ul>
    </div>
  );
};

export default RoadmapSidebar;
