import React from "react";

const ProblemsList = ({
  toggleIsBookmarked,
  problemList,
  curRating,
  toggleIsSolved,
}) => {
  return (
    <div className="overflow-x-scroll">
      <div className="problems__problems-list text-[12px] sm:text-sm md:text-base p-2 xs:p-3 sm:p-4">
        <div className="list-row">
          <div className="list-col w-[12%] sm:w-[6%]">S.No</div>
          <div className="list-col w-[60%] sm:w-[75%]">Problems</div>
          <div className="list-col w-[13%] sm:w-[8%]">Solved</div>
          <div className="list-col w-[13%] sm:w-[8%]">Revisit</div>
        </div>

        {problemList[curRating].problems.map((problem, idx) => {
          return (
            <div className="list-row" key={curRating + idx}>
              <div
                className="list-col w-[12%] sm:w-[6%]"
                style={{
                  backgroundColor: problem.isSolved
                    ? "var(--green-dark)"
                    : "#fff",
                }}
              >
                {idx + 1}
              </div>
              <div
                className="list-col w-[60%] sm:w-[75%] px-1"
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
                  className="underline underline-offset-4 font-medium"
                >
                  {problem.name}
                </a>
              </div>
              <div
                className="list-col w-[13%] sm:w-[8%]"
                style={{
                  backgroundColor: problem.isSolved
                    ? "var(--green-dark)"
                    : "#fff",
                }}
              >
                {problem.isSolved ? (
                  <svg
                    className="remixicon-icon w-[18px] h-[18px] md:w-[25px] md:h-[25px]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    onClick={() => toggleIsSolved(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm6.003 11L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                  </svg>
                ) : (
                  <svg
                    className="remixicon-icon w-[18px] h-[18px] md:w-[25px] md:h-[25px]"
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
                className="list-col w-[13%] sm:w-[8%]"
                style={{
                  backgroundColor: problem.isSolved
                    ? "var(--green-dark)"
                    : "#fff",
                }}
              >
                {problem.isBookmarked ? (
                  <svg
                    className="remixicon-icon w-[18px] h-[18px] md:w-[25px] md:h-[25px]"
                    fill="#0068F9"
                    viewBox="0 0 24 24"
                    onClick={() => toggleIsBookmarked(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm3 7v2h8V9H8z"></path>
                  </svg>
                ) : (
                  <svg
                    className="remixicon-icon w-[18px] h-[18px] md:w-[25px] md:h-[25px]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    onClick={() => toggleIsBookmarked(idx)}
                    style={{ cursor: "pointer" }}
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

export default ProblemsList;
