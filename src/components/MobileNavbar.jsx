import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ButtonBlue from "../components/UI/ButtonBlue";

import getLoginStatus from "../utils/getLoginStatus";

import UserIcon from "../assets/icons/user.png";

const MobileNavbar = ({ handleMobileNavbarClose }) => {
  const navigate = useNavigate();
  const isLoggedIn = getLoginStatus();

  const handleBackdropClick = () => {
    handleMobileNavbarClose();
  };

  const handleMobileNavbarClick = (event) => {
    event.stopPropagation();
  };

  return (
    <aside
      className="z-10 flex justify-end absolute lg:hidden top-10 sm:top-[56px] md:top-[64px] right-0 h-screen bg-[#0000004d] w-full"
      onClick={handleBackdropClick}
    >
      <nav
        className={`flex flex-col gap-6 sm:gap-8 text-sm sm:text-lg bg-[#1E76CC] text-white h-full w-[200px] sm:w-[300px] p-4 sm:p-8`}
        onClick={handleMobileNavbarClick}
      >
        <ul className="middle-links flex flex-col gap-3 sm:gap-4">
          <li>
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </li>
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
        </ul>

        {isLoggedIn && (
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer ring-4 rounded-full"
            onClick={() => navigate("/profile")}
          >
            <img src={UserIcon} alt="user" />
          </div>
        )}
        {!isLoggedIn && (
          <ul className="right-links flex gap-3 sm:gap-4">
            <li>
              <ButtonBlue text="Sign up" to="signup" />
            </li>
            <li>
              <NavLink
                to="/sigin"
                className="login-button px-3 sm:px-5 py-1 sm:py-2"
                style={{ color: "#000" }}
              >
                Log in
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </aside>
  );
};

export default MobileNavbar;
