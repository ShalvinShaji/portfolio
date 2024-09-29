import React from "react";
import "./Home.css";
import HeroSocial from "../Social/HeroSocial";

const Home = () => {
  return (
    <>
      <div className="main-container container">
        <div className="row">
          {/* <div className="d-flex  flex-column justify-content-start align-items-start"> */}
          <div className="d-flex flex-column  justify-content-center align-items-center">
            <h1 className="hero-name ">
              Hey, I'm <span className="hero-name-color">Shalvin</span>
            </h1>
            {/* <h1 className="hero-name ">
              <span className="hero-fullsto">.</span>
            </h1> */}
          </div>
          {/* <p className="hero-role">Front-End Developer</p> */}
          <div>
            <p className="hero-desc">
              A web developer and database administrator on a journey through
              the tech world, one line at a time.
            </p>
          </div>
          <p className="hero-social mb-0">You can find me here :</p>
          <HeroSocial />
        </div>
      </div>
    </>
  );
};

export default Home;
