import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import dummyStandings from "../../data/standingData";

const DummyStandings = () => {
  return (
    <>
      <Wrapper className="font-roboto text-[12px] sm:text-sm md:text-base flex justify-between gap-1 md:gap-2 bg-gradient-to-r from-[#5B86E5] to-[#36D1DC] text-white rounded shadow-md p-3 md:p-4 mt-[2%]">
        <h3 className="font-semibold">
          National Collegiate Programming Contest 2024 (NCPC)
        </h3>
        <p className="font-medium">Final standings</p>
      </Wrapper>

      <Wrapper className="font-roboto text-[12px] sm:text-sm md:text-base overflow-x-scroll">
        <table className="text-[10px] sm:text-[12px] my-[2%] w-full">
          <tr className="font-bold border-y-2 border-gray-600">
            <th className="border-r border-gray-600 border-l py-1 sm:py-2 px-1">
              RANK
            </th>

            <th className="border-r border-gray-600 py-1 sm:py-2 px-1 w-[43%] text-center">
              TEAM
            </th>

            <th className="border-r border-gray-600 py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4">
              SCORE
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#F8C3DF] rounded border">
                A
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#CA1617] rounded border text-white">
                B
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#50B2D7] rounded border">
                C
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#EEF2CF] rounded border">
                D
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#0E580D] rounded border text-white">
                E
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#9971B8] rounded border text-white">
                F
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#E6ED13] rounded border">
                G
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#1749D0] rounded border text-white">
                H
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#000100] rounded border text-white">
                I
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#960709] rounded border text-white">
                J
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#58DAC0] rounded border">
                K
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-600">
              <h1 className=" border-gray-400 px-1 sm:px-2 bg-[#EE45E8] rounded border">
                L
              </h1>
            </th>
          </tr>

          {dummyStandings.map((item, index) => {
            const totalSolved = dummyStandings[index].problems.reduce(
              (accumulate, problem) => accumulate + (problem.point > 0),
              0
            );

            const totalPoints = dummyStandings[index].problems.reduce(
              (accumulate, problem) => accumulate + problem.point,
              0
            );

            return (
              <tr className="font-bold border-b border-gray-600">
                <td
                  className={`${
                    index + 1 <= 5
                      ? "bg-[#EEC710]"
                      : index + 1 <= 10
                      ? "bg-[#AAAAAA]"
                      : "bg-[#C08D54]"
                  } border-r border-gray-600 border-l py-1 px-1 font-medium text-center`}
                >
                  {index + 1}
                </td>
                <td className="border-r border-gray-600 py-1 px-1 md:px-2 w-[43%] text-right ">
                  <p>
                    {index + 1 === 1 && (
                      <span className="bg-yellow-400 rounded font-normal px-1 py-[2px] text-[10px] mr-1 sm:mr-2">
                        Champion
                      </span>
                    )}
                    {item.teamName}
                  </p>
                  <p className="font-normal">{item.institute}</p>
                </td>
                <td className="border-r border-gray-600 py-1 px-1 sm:px-2 md:px-3 lg:px-4">
                  <span>{totalSolved}</span>
                  <span className="font-normal ml-1 sm:ml-3">
                    {totalPoints}
                  </span>
                </td>

                <td className="text-center font-normal">
                  {item.problems[0].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[0].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[0].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[0].tryCount > 0 &&
                            item.problems[0].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[0].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[0].tryCount}{" "}
                        {item.problems[0].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>

                <td className="text-center font-normal">
                  {item.problems[1].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[1].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[1].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[1].tryCount > 0 &&
                            item.problems[1].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[1].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[1].tryCount}{" "}
                        {item.problems[1].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>

                <td className="text-center font-normal">
                  {item.problems[2].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[2].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[2].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[2].tryCount > 0 &&
                            item.problems[2].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[2].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[2].tryCount}{" "}
                        {item.problems[2].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>

                <td className="text-center font-normal">
                  {item.problems[3].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[3].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[3].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[3].tryCount > 0 &&
                            item.problems[3].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[3].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[3].tryCount}{" "}
                        {item.problems[3].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>
                <td className="text-center font-normal">
                  {item.problems[4].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[4].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[4].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[4].tryCount > 0 &&
                            item.problems[4].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[4].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[4].tryCount}{" "}
                        {item.problems[4].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>
                <td className="text-center font-normal">
                  {item.problems[5].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[5].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[5].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[5].tryCount > 0 &&
                            item.problems[5].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[5].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[5].tryCount}{" "}
                        {item.problems[5].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>
                <td className="text-center font-normal">
                  {item.problems[6].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[6].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[6].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[6].tryCount > 0 &&
                            item.problems[6].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[6].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[6].tryCount}{" "}
                        {item.problems[6].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>
                <td className="text-center font-normal">
                  {item.problems[7].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[7].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[7].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[7].tryCount > 0 &&
                            item.problems[7].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[7].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[7].tryCount}{" "}
                        {item.problems[7].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>
                <td className="text-center font-normal">
                  {item.problems[8].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[8].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[8].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[8].tryCount > 0 &&
                            item.problems[8].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[8].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[8].tryCount}{" "}
                        {item.problems[8].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>
                <td className="text-center font-normal">
                  {item.problems[9].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[9].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[9].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[9].tryCount > 0 &&
                            item.problems[9].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[9].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[9].tryCount}{" "}
                        {item.problems[9].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>
                <td className="text-center font-normal">
                  {item.problems[10].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[10].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[10].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[10].tryCount > 0 &&
                            item.problems[10].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[10].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[10].tryCount}{" "}
                        {item.problems[10].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>
                <td className="text-center font-normal">
                  {item.problems[11].tryCount > 0 && (
                    <div
                      className={`${
                        item.problems[11].tryCount === 0
                          ? "bg-[#fff]"
                          : item.problems[11].isFirstToSolve
                          ? "bg-[#1DAA1D]"
                          : item.problems[11].tryCount > 0 &&
                            item.problems[11].point === 0
                          ? "bg-[#E76D6C]"
                          : "bg-[#5FE75F]"
                      } my-[2px] mr-[2px] ml-[2px] px-3 py-1`}
                    >
                      <h3 className="text-[12px] sm:text-sm leading-3">
                        {item.problems[11].point}
                      </h3>
                      <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                        {item.problems[11].tryCount}{" "}
                        {item.problems[11].tryCount === 1 ? "try" : "tries"}
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </table>
      </Wrapper>
    </>
  );
};

export default DummyStandings;
