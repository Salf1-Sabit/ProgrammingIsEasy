import React from "react";
import Wrapper from "../../components/UI/Wrapper";

const DummyStandings = () => {
  return (
    <>
      <Wrapper className="font-roboto text-[12px] sm:text-sm md:text-base">
        <div className="flex justify-between gap-1 md:gap-2 bg-gray-100 border-2 p-3 md:p-4">
          <h3 className="font-semibold">
            National Collegiate Programming Contest 2024 (NCPC)
          </h3>
          <p className="font-medium text-gray-500">Final standings</p>
        </div>
      </Wrapper>

      <Wrapper className="font-roboto text-[12px] sm:text-sm md:text-base overflow-x-scroll">
        <table className="text-[10px] sm:text-[12px] my-[2%] w-full">
          <tr className="font-bold border-b-2 border-gray-600">
            <th className="border-r border-gray-400 border-l py-1 sm:py-2 px-1">
              RANK
            </th>

            <th className="border-r border-gray-400 py-1 sm:py-2 px-1 w-[43%] text-center">
              TEAM
            </th>

            <th className="border-r border-gray-400 py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4">
              SCORE
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#F8C3DF] rounded border">
                A
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#CA1617] rounded border text-white">
                B
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#50B2D7] rounded border">
                C
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#EEF2CF] rounded border">
                D
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#0E580D] rounded border text-white">
                E
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#9971B8] rounded border text-white">
                F
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#E6ED13] rounded border">
                G
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#1749D0] rounded border text-white">
                H
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#000100] rounded border text-white">
                I
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#960709] rounded border text-white">
                J
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#58DAC0] rounded border">
                K
              </h1>
            </th>

            <th className="py-1 sm:py-2 px-1 sm:px-2 md:px-3 lg:px-4 border-r border-gray-400">
              <h1 className="border-r border-gray-400 px-1 sm:px-2 bg-[#EE45E8] rounded border">
                L
              </h1>
            </th>
          </tr>

          <tr className="font-bold border-b border-gray-600">
            <td className="border-r border-gray-400 border-l py-1 px-1 font-medium text-center">
              1
            </td>
            <td className="border-r border-gray-400 py-1 px-1 md:px-2 w-[43%] text-right ">
              Massachusetts Institute of Technology
            </td>
            <td className="border-r border-gray-400 py-1 px-1 sm:px-2 md:px-3 lg:px-4">
              <span>11</span>
              <span className="font-normal ml-1 sm:ml-3">1339</span>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] ml-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
            <td className="text-center font-normal">
              <div className="bg-green-400 my-[2px] mr-[2px] px-3 py-1">
                <h3 className="text-[12px] sm:text-sm leading-3">50</h3>
                <p className="text-nowrap text-[8px] sm:text-[10px] leading-3 mt-[2px] sm:mt-[4px]">
                  1 try
                </p>
              </div>
            </td>
          </tr>
        </table>
      </Wrapper>
    </>
  );
};

export default DummyStandings;
