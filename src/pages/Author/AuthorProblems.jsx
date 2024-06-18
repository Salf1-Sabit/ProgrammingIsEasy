import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { Pagination } from "antd";

const AuthorProblems = () => {
  return (
    <div className="w-full md:w-[60%] lg:w-[65%] xl:w-[70%] flex flex-col gap-2 sm:gap-4 mt-10">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-700">
        Author Dashboard
      </h1>
      <div className="shadow-lg">
        <div className="bg-[#3E8ED0] text-white w-full p-4 sm:p-6 rounded flex justify-between items-center">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl ">
            Problems
          </h1>
          <button className="bg-[#00D1B2] hover:bg-[#00C4A7] rounded px-3 sm:px-5 py-1 sm:py-2 text-white font-medium flex items-center gap-1 text-[12px] sm:text-sm md:text-base transition-all duration-200">
            <IoIosAddCircleOutline className="text-sm sm:text-base md:text-lg" />{" "}
            Create New Problem
          </button>
        </div>

        <div className="text-[#296FA8] text-sm md:text-base flex items-center gap-1 sm:gap-2 bg-[#EFF5FB] p-[3.5%] border-l-4 border-[#3E8ED0] rounded">
          <IoIosInformationCircle className="text-xl sm:text-2xl md:text-3xl" />{" "}
          No problems found
        </div>
      </div>
      <div className="flex justify-end">
        <Pagination
          className="text-[10px] md:text-sm"
          defaultCurrent={1}
          total={25}
          disabled
        />
      </div>
    </div>
  );
};

export default AuthorProblems;
