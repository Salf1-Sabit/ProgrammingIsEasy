import React from "react";
import "../assets/styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="brand-logo">ProgrammingIsEasy.com</div>

        <ul className="middle-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/roadmap">Roadmap</NavLink>
          </li>
          <li>
            <NavLink to="/problems">Problems</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>

        <ul className="right-links">
          <li>
            <NavLink to="/signup" className="signup-button">
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="login-button"
              style={{ color: "#000" }}
            >
              Log in
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
