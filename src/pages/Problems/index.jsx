import React, { useEffect, useState } from "react";
import ProblemsHeader from "./ProblemsHeader";
import ProblemsRatings from "./ProblemsRatings";
import Wrapper from "../../components/UI/Wrapper";
import ProblemsProgressbar from "./ProblemsProgressbar";
import ProblemsList from "./ProblemsList";

// assets
import "../../assets/styles/Problems.css";

// data
import { defaultProblemList } from "../../data/problemList";

const Problems = () => {
  const [curRating, setCurRating] = useState(800);
  const [problemList, setProblemList] = useState(defaultProblemList);

  const changeCurRating = (e) => {
    localStorage.setItem("curRating", e.target.innerText);
    setCurRating(parseInt(e.target.innerText));
  };

  const toggleIsSolved = (idx) => {
    setProblemList((prevProblemList) => {
      // Make a shallow copy of the entire problem list
      const updatedProblemList = { ...prevProblemList };

      // Make a shallow copy of the problems array for the current rating
      const problemsCopy = [...updatedProblemList[curRating].problems];

      // Make a shallow copy of the specific problem being updated
      const problemCopy = { ...problemsCopy[idx] };

      // Toggle the isSolved property
      problemCopy.isSolved = !problemCopy.isSolved;

      // Update the problems array with the modified problem
      problemsCopy[idx] = problemCopy;

      // Update the problem list with the new problems array
      updatedProblemList[curRating] = {
        ...updatedProblemList[curRating],
        problems: problemsCopy,
        totSolvedCnt:
          updatedProblemList[curRating].totSolvedCnt +
          (problemCopy.isSolved ? 1 : -1),
      };

      return updatedProblemList;
    });
  };

  const toggleIsBookmarked = (idx) => {
    setProblemList((prevProblemList) => {
      // Make a shallow copy of the entire problem list
      const updatedProblemList = { ...prevProblemList };

      // Make a shallow copy of the problems array for the current rating
      const problemsCopy = [...updatedProblemList[curRating].problems];

      // Make a shallow copy of the specific problem being updated
      const problemCopy = { ...problemsCopy[idx] };

      // Toggle the isSolved property
      problemCopy.isBookmarked = !problemCopy.isBookmarked;

      // Update the problems array with the modified problem
      problemsCopy[idx] = problemCopy;

      // Update the problem list with the new problems array
      updatedProblemList[curRating] = {
        ...updatedProblemList[curRating],
        problems: problemsCopy,
      };

      return updatedProblemList;
    });
  };

  useEffect(() => {
    const curStoredRating = localStorage.getItem("curRating");
    if (curStoredRating) {
      setCurRating(parseInt(curStoredRating));
    }
  }, []);

  return (
    <Wrapper className="problems my-[8%] sm:my-[5%]">
      <ProblemsHeader curRating={curRating} />

      <ProblemsRatings
        curRating={curRating}
        changeCurRating={changeCurRating}
      />

      <ProblemsProgressbar problemList={problemList} curRating={curRating} />

      <ProblemsList
        toggleIsBookmarked={toggleIsBookmarked}
        problemList={problemList}
        curRating={curRating}
        toggleIsSolved={toggleIsSolved}
      />
    </Wrapper>
  );
};

export default Problems;
