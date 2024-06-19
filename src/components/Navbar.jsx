import React, { useEffect, useState } from "react";
import "../assets/styles/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

import UserIcon from "../assets/icons/user.png";
import MenuIcon from "../assets/icons/menu.png";
import CloseIcon from "../assets/icons/close.png";

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

        <ul className="middle-links hidden lg:flex">
          <li>
            <NavLink to="/roadmap">Roadmap</NavLink>
          </li>
          <li>
            <NavLink to="/problems">Problems</NavLink>
          </li>
          <li>
            <NavLink to="/contests">Contests</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/iupc">
              <span>IUPC</span>
            </NavLink>
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
          <ul className="right-links hidden lg:flex">
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
            className="lg:hidden w-7 h-7 sm:w-9 sm:h-9"
            onClick={handleMobileNavbarOpen}
          >
            <img src={MenuIcon} alt="menu " />
          </div>
        ) : (
          <div
            className="lg:hidden w-6 h-6 sm:w-8 sm:h-8"
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
