import React from "react";

const AuthorDashboard = ({ problemsCount = 0, contestsCount = 0 }) => {
  return (
    <div className="w-full md:w-[60%] lg:w-[65%] xl:w-[70%] flex flex-col gap-2 sm:gap-4 mt-10">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-700">
        Author Dashboard
      </h1>
      <div>
        <div className="bg-gradient-to-r from-[#5B86E5] to-[#36D1DC] text-white w-full p-4 sm:p-6">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Hello</h1>
          <p className="text-base sm:text-lg md:text-xl">
            You can see your problems and contests here
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="shadow-lg w-[48%] text-center p-4">
          <p className="font-bold text-2xl sm:text-3xl">{problemsCount}</p>
          <p className="text-base sm:text-xl text-gray-600">Problems</p>
        </div>
        <div className="shadow-lg w-[48%] text-center p-4">
          <p className="font-bold text-2xl sm:text-3xl">{contestsCount}</p>
          <p className="text-base sm:text-xl text-gray-600">Contests</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorDashboard;
