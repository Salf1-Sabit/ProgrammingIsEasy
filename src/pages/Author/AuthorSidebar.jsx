import React from "react";
import { NavLink } from "react-router-dom";

const AuthorSidebar = () => {
  return (
    <div className="w-full md:w-[35%] lg:w-[30%] xl:w-[25%] flex flex-col gap-6 text-sm sm:text-base mt-3 md:mt-[90px]">
      <div className="text-center p-3 sm:p-6 shadow-lg text-wrap rounded">
        For further assistance, please contact{" "}
        <span className="text-blue-600">admins@programming-is-easy.com</span>
      </div>

      <div className="flex flex-col gap-2 sm:gap-3">
        <h1 className="text-gray-500 text-[12px] sm:text-sm">
          AUTHOR NAVIGATION
        </h1>
        <ul className="flex flex-col w-full">
          <li>
            <NavLink
              to="/author"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-[#485FC7] px-2 py-1 sm:px-3 sm:py-2 w-full rounded-sm block"
                  : "text-gray-600 px-2 py-1 sm:px-3 sm:py-2 block"
              }
              end
            >
              Author Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/author/problems"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-[#485FC7] px-2 py-1 sm:px-3 sm:py-2 w-full rounded-sm block"
                  : "text-gray-600 px-2 py-1 sm:px-3 sm:py-2 block"
              }
            >
              Problems
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/author/contests"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-[#485FC7] px-2 py-1 sm:px-3 sm:py-2 w-full rounded-sm block"
                  : "text-gray-600 px-2 py-1 sm:px-3 sm:py-2 block"
              }
            >
              Contests
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthorSidebar;
