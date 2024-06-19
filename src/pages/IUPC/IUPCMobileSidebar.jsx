import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import LeftArrowIcon from "../../assets/icons/left-arrow.png";
import RightArrowIcon from "../../assets/icons/right-arrow.png";

const MobileContestsSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleBackdropClick = () => {
    setIsSidebarOpen(false);
  };

  const handleMobileSidebarClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSidebarOpen]);

  return (
    <>
      {isSidebarOpen ? (
        <aside
          className={`z-[1] sm:hidden h-screen w-screen bg-[#0000004d] text-sm sm:text-base md:text-lg font-medium duration-100 absolute top-0}`}
          onClick={handleBackdropClick}
        >
          <div
            className="relative h-screen bg-white w-44 sm:w-64 pt-3"
            onClick={handleMobileSidebarClick}
          >
            <button
              className="sm:hidden bg-[#1E76CC] text-white w-6 h-6 rounded-full font-bold absolute right-[-14px] top-5 flex justify-center items-center"
              onClick={() => setIsSidebarOpen((prevState) => !prevState)}
            >
              <div className="w-5 h-5">
                <img
                  src={isSidebarOpen ? LeftArrowIcon : RightArrowIcon}
                  alt="left-arrow"
                />
              </div>
            </button>
            <ul className="flex flex-col">
              <li>
                <NavLink
                  to="/iupc"
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
                  to="/iupc/past-contests"
                  className={({ isActive }) =>
                    isActive
                      ? "flex gap-2 items-center p-1 sm:p-2 text-[#1E76CC]"
                      : "flex gap-2 items-center p-1 sm:p-2 text-gray-400"
                  }
                >
                  <div>Past Contests</div>
                </NavLink>
              </li>

              <li className="">
                <NavLink
                  onClick={() =>
                    document.getElementById("submitIUPCInfoForm").showModal()
                  }
                  className={"flex gap-2 items-center p-1 sm:p-2 text-gray-400"}
                >
                  <div>Submit IUPC Info</div>
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
      ) : (
        <>
          {!isSidebarOpen && (
            <button
              className="sm:hidden bg-[#1E76CC] text-white w-6 h-6 rounded-full font-bold absolute left-[-10px] top-[70px] flex justify-center items-center"
              onClick={() => setIsSidebarOpen((prevState) => !prevState)}
            >
              <div className="w-5 h-5">
                <img
                  src={isSidebarOpen ? LeftArrowIcon : RightArrowIcon}
                  alt="left-arrow"
                />
              </div>
            </button>
          )}
        </>
      )}
    </>
  );
};

export default MobileContestsSidebar;
