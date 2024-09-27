import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div>
          {/* <div className="d-flex  flex-column justify-content-start align-items-start"> */}
          <div className="d-flex flex-column  justify-content-center align-items-center">
            <h1 className="hero-name ">Hey, I'm Shalvin</h1>
            {/* <h1 className="hero-name ">
              <span className="hero-fullsto">.</span>
            </h1> */}
          </div>
          {/* <p className="hero-role">Front-End Developer</p> */}
          <div>
            <p className="hero-desc">
              Code Architect | Innovator | Problem Solver <br />
              Exploring the world of tech, one line at a time.
            </p>
          </div>
          <p></p>
          <p>Find me here:</p>
        </div>
      </div>
    </>
  );
};

export default Home;
