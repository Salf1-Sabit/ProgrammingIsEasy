import React from "react";
import "../assets/styles/Home.css";
import { RiBracesLine } from "@remixicon/react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="blurred-circle"></div>
      <div className="blurred-circle"></div>
      <div className="hero-container">
        <div className="hero__title">
          <h1 className="home-heading">
            Your Journey to <strong>Coding</strong>
          </h1>
          <h1 className="home-heading">
            <strong>Mastery</strong> Begins Here
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
