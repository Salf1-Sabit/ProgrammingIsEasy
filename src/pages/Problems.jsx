import React, { useEffect, useState } from "react";

// assets
import "../assets/styles/Problems.css";

// data
import { problemList } from "../data/problemList";

const Problems = () => {
  const [totSolvedCnt, setTotSolvedCnt] = useState(0);
  const [curRating, setCurRating] = useState(800);
  const [problems, setProblems] = useState(problemList[curRating].problems);

  const changeCurRating = (e) => {
    localStorage.setItem("curRating", e.target.innerText);
    setCurRating(parseInt(e.target.innerText));
    setProblems(problemList[parseInt(e.target.innerText)].problems);
  };

  const toggleIsSolved = (idx) => {
    setProblems((prevProblems) => {
      const updatedProblems = [...prevProblems];
      updatedProblems[idx] = {
        ...updatedProblems[idx],
        isSolved: !updatedProblems[idx].isSolved,
      };
      setTotSolvedCnt(
        (prevSolvedCnt) => prevSolvedCnt + updatedProblems[idx].isSolved
      );
      return updatedProblems;
    });
  };

  const toggleIsBookmarked = (idx) => {
    setProblems((prevProblems) => {
      const updatedProblems = [...prevProblems];
      updatedProblems[idx] = {
        ...updatedProblems[idx],
        isBookmarked: !updatedProblems[idx].isBookmarked,
      };

      return updatedProblems;
    });
  };

  useEffect(() => {
    const curStoredRating = localStorage.getItem("curRating");
    if (curStoredRating) {
      setCurRating(parseInt(curStoredRating));
    }
  }, []);

  return (
    <div className="problems">
      <div className="problems__title">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADt0lEQVR4nO2dT08TQRjGnwZaJCAxBEmBiHoBPdFE4ORB06NBPQgmHtEYRQqEC34DEr0R049gokYDJTFSOODBT2DUgydFghq5iCaGYF8zcTeaMrvdP91OdZ9f8p5k3pk+T2dn9511ChBCCCGEEEIIIYQQYp5WAJMA1gBsAtgDIB5jz2qzauVQuYgPLgP46EPwSqFyjdIBb9wGUKqi+HaUrNykwje/FIH4f5vAmeBAK4CtCMW34xOAg5wG+5msgfh23KIB+1nVidXY3ivp6WU5trAtx/M7nkL9bXqqII3tR5wMKNKA/WzqxFLiexW+PNK5JScDVF+kDO19vp9vvm4mOBig+iJlaMUKKr4dLusAKYMGGEY4A2hArBHOABoQa4Qz4A8JAEMAxgHMBYxxK4fKRQM8krJqMhtVrLtsWLWXZIW+Je4z4DCA9QgLYC8ApF36lzgb0AbgZYTi2/EGwCGHMUicDXhQA/HtuO8wBomrAcMR70KVR8lanMuJrQH3nAY5fDIhs2MNMnfFX6g2QycSbh9+QTMOiasBr3UDvHGhQUrrTSLPg4Vqe32kwenDv9KMQ+JqwI5ugJuPU4HFt0PlcPjwXzXjkLgaoB1gWPHt8CGA0AAaYATOAMMlGRpguCRDAwyXZGiA4ZIMDTBckqEBhksyNKBCSWawrUVyvWmZPdrlK1SbU20tFUsyNMClJHOtp1N2ssPyLWCotuM9na4lGRrgUpJ5ezoTWHw7VA63kgwN+I1Wh7Di2+FyGaIBFjQAZquhNAA0INblaOEaABrAGQDeBQkvQVwDhM8B4CLMuyDwSVh4G8rnAGEtKM8HMT4JZ1kNFZYiWAsS7gfkWYxjNTTLHTFhOZr7AcI94Tw3ZLgjluVbEcItSe4JC98LynNTnm9FZIO9Gac9LvLHWvgNGZXDx7GRe9U/tvJL6P63zw6FLkerHG7j0B6Y+uxuMrQBT+8knTr+4Png1qlCrQ5u1fa/mOkPbcCTTL+rDkXdP/Z0JGR5PinfV/wLr9oU5pPS3eF4XMGKr6OLc0v+jy7OLfo9ulirQ3dTSh4N9MnnM4O+hVdtHg70SVdTylWHCZfrU1Rxsw4P754wpUNzlf87ZqVQ066lDo+vbzapw0UAP2vQqerjPJwZq8EPOFxy6d+oDjMRd65yT6P+f8JkxqQOIwDeR9DpOwDn4J3RKl+Otip88+tKhwMArgJYtq6JuwE62rXaFqxcKqdfWq3FshjiZ6yKVg7dmvOv6EAIIYQQQgghhBBC8H/wCyc7lg/sdk3IAAAAAElFTkSuQmCC"
          alt="Codeforces Logo"
          width="50px"
          height="50px"
          className="cf-logo"
        ></img>

        <p className="problems__title-text">
          Road to{" "}
          <span
            className="text-pupil"
            style={{
              color:
                curRating < 1200
                  ? "var(--clr-pupil)"
                  : curRating < 1400
                  ? "var(--clr-specialist)"
                  : "var(--blue-link)",
            }}
          >
            {curRating < 1200
              ? "Pupil"
              : curRating < 1400
              ? "Specialist"
              : "Expert"}
          </span>
        </p>
      </div>

      <ul className="problems__ratings-row">
        <li>
          <button
            onClick={changeCurRating}
            style={{
              border:
                curRating === 800
                  ? "4px solid var(--blue-border)"
                  : "0px solid transparent",
            }}
          >
            800
          </button>
        </li>
        <li>
          <button
            onClick={changeCurRating}
            style={{
              border:
                curRating === 900
                  ? "4px solid var(--blue-border)"
                  : "0px solid transparent",
            }}
          >
            900
          </button>
        </li>
        <li>
          <button
            onClick={changeCurRating}
            style={{
              border:
                curRating === 1000
                  ? "4px solid var(--blue-border)"
                  : "0px solid transparent",
            }}
          >
            1000
          </button>
        </li>
        <li>
          <button
            onClick={changeCurRating}
            style={{
              border:
                curRating === 1100
                  ? "4px solid var(--blue-border)"
                  : "0px solid transparent",
            }}
          >
            1100
          </button>
        </li>
        <li>
          <button
            onClick={changeCurRating}
            style={{
              border:
                curRating === 1200
                  ? "4px solid var(--blue-border)"
                  : "0px solid transparent",
            }}
          >
            1200
          </button>
        </li>
        <li>
          <button
            onClick={changeCurRating}
            style={{
              border:
                curRating === 1300
                  ? "4px solid var(--blue-border)"
                  : "0px solid transparent",
            }}
          >
            1300
          </button>
        </li>
        <li>
          <button
            onClick={changeCurRating}
            style={{
              border:
                curRating === 1400
                  ? "4px solid var(--blue-border)"
                  : "0px solid transparent",
            }}
          >
            1400
          </button>
        </li>
      </ul>

      <div className="problems__progress-bar">
        <div
          className="problems__progress-bar__fill"
          style={{
            width: `calc(100% / 30 * ${totSolvedCnt})`,
          }}
        ></div>
        <span>0/30 Solved</span>
      </div>

      <div className="problems__problems-list">
        <div className="list-row">
          <div className="list-col">S.No</div>
          <div className="list-col">Problems</div>
          <div className="list-col">Solved</div>
          <div className="list-col">Revisit</div>
        </div>

        {problems.map((problem, idx) => {
          return (
            <div className="list-row">
              <div
                className="list-col"
                style={{
                  backgroundColor: problem.isSolved
                    ? "var(--green-dark)"
                    : "#fff",
                }}
              >
                {idx + 1}
              </div>
              <div
                className="list-col"
                style={{
                  backgroundColor: problem.isSolved
                    ? "var(--green-dark)"
                    : "#fff",
                }}
              >
                <a
                  href={`${problem.link}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--blue-link)" }}
                >
                  {problem.name}
                </a>
              </div>
              <div
                className="list-col"
                style={{
                  backgroundColor: problem.isSolved
                    ? "var(--green-dark)"
                    : "#fff",
                }}
              >
                {problem.isSolved ? (
                  <svg
                    class="remixicon-icon "
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    onClick={() => toggleIsSolved(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6.003 11L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                  </svg>
                ) : (
                  <svg
                    class="remixicon-icon "
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    onClick={() => toggleIsSolved(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5z"></path>
                  </svg>
                )}
              </div>
              <div
                className="list-col"
                style={{
                  backgroundColor: problem.isSolved
                    ? "var(--green-dark)"
                    : "#fff",
                }}
              >
                {problem.isBookmarked ? (
                  <svg
                    class="remixicon-icon "
                    width="25"
                    height="25"
                    fill="#0068F9"
                    viewBox="0 0 24 24"
                    onClick={() => toggleIsBookmarked(idx)}
                  >
                    <path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm3 7v2h8V9H8z"></path>
                  </svg>
                ) : (
                  <svg
                    class="remixicon-icon "
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    onClick={() => toggleIsBookmarked(idx)}
                  >
                    <path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4zM8 9h8v2H8V9z"></path>
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Problems;
