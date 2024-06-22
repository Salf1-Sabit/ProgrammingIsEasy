import React, { useEffect, useState } from "react";
import "../assets/styles/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

import UserIcon from "../assets/icons/user.png";
import MenuIcon from "../assets/icons/menu.png";
import CloseIcon from "../assets/icons/close.png";
import { IoIosArrowDown } from "react-icons/io";

import MobileNavbar from "./MobileNavbar";
import getLoginStatus from "../utils/getLoginStatus";

const Navbar = () => {
  const isLoggedIn = getLoginStatus();
  const navigate = useNavigate();
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const handleMobileNavbarOpen = () => {
    setIsMobileNavbarOpen(true);
  };

  const handleMobileNavbarClose = () => {
    setIsMobileNavbarOpen(false);
  };

  useEffect(() => {
    if (isMobileNavbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileNavbarOpen]);

  return (
    <header className="navbar p-2 sm:p-3 md:p-4">
      <div className="nav-container relative">
        <div
          className="brand-logo text-base sm:text-lg md:text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          &lt;/&gt; ProgrammingIsEasy
        </div>

        <ul className="middle-links hidden xl:flex">
          <li>
            <NavLink to="/roadmap">Roadmap</NavLink>
          </li>
          <li>
            <NavLink to="/problems">Problems</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/editor">Editor</NavLink>
          </li>
          <li className="dropdown dropdown-hover">
            <div>
              <div tabIndex={0} className="flex gap-1 items-center">
                <span>Contests</span>
                <IoIosArrowDown />
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow rounded bg-[#1E76CC] text-lg text-nowrap"
              >
                <li>
                  <NavLink
                    to="/contests"
                    className={({ isActive }) => isActive && "underline"}
                  >
                    <span className="text-nowrap">Host Contests</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/iupc"
                    className={({ isActive }) => isActive && "underline"}
                  >
                    IUPC
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {isLoggedIn && (
          <NavLink
            className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer hidden lg:block ring-4 rounded-full"
            to="/profile"
          >
            <img src={UserIcon} alt="user" />
          </NavLink>
        )}
        {!isLoggedIn && (
          <ul className="right-links hidden xl:flex">
            <li>
              <NavLink
                to="/signup"
                className="signup-button px-3 sm:px-5 py-1 sm:py-2"
              >
                Sign up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signin"
                className="login-button px-3 sm:px-5 py-1 sm:py-2"
                style={{ color: "#000" }}
              >
                Log in
              </NavLink>
            </li>
          </ul>
        )}

        {!isMobileNavbarOpen ? (
          <div
            className="xl:hidden w-7 h-7 sm:w-9 sm:h-9"
            onClick={handleMobileNavbarOpen}
          >
            <img src={MenuIcon} alt="menu " />
          </div>
        ) : (
          <div
            className="xl:hidden w-6 h-6 sm:w-8 sm:h-8"
            onClick={handleMobileNavbarClose}
          >
            <img src={CloseIcon} alt="" />
          </div>
        )}
      </div>

      {isMobileNavbarOpen && (
        <MobileNavbar handleMobileNavbarClose={handleMobileNavbarClose} />
      )}
    </header>
  );
};

export default Navbar;
