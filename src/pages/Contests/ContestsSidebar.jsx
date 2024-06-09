import React from "react";
import { NavLink } from "react-router-dom";

const ContestsSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <aside
        className={`hidden sm:block w-44 sm:w-56 absolute h-full text-sm sm:text-base md:text-lg font-medium duration-100 ${
          !isSidebarOpen && "hidden"
        }`}
      >
        <div className="relative h-screen bg-white pt-4">
          <ul className="flex flex-col">
            <li>
              <NavLink
                to="/contests"
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-2 items-center p-1 sm:p-2 text-[#1E76CC]"
                    : "flex gap-2 items-center p-1 sm:p-2 text-gray-400"
                }
                end
              >
                <div>Current or Upcoming</div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contests/past-contests"
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-2 items-center p-1 sm:p-2 text-[#1E76CC]"
                    : "flex gap-2 items-center p-1 sm:p-2 text-gray-400"
                }
              >
                <div>Past Contests</div>
              </NavLink>
            </li>

            <li className="xl:hidden">
              <NavLink
                to="/author/contests"
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-2 items-center p-1 sm:p-2 text-[#1E76CC]"
                    : "flex gap-2 items-center p-1 sm:p-2 text-gray-400"
                }
              >
                <div>Host Contests</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default ContestsSidebar;
