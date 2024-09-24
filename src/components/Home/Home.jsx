import React from "react";
import "./Home.css";
import HeroSocial from "../Social/HeroSocial";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div>
          {/* <div className="d-flex  flex-column justify-content-start align-items-start"> */}
          {/* <div className="d-flex flex-column  justify-content-center align-items-start"> */}
          <h1 className="hero-greet text-start">Hi,</h1>
          <h1 className="hero-name text-start">
            I'am Shalvin<span className="hero-fullstop">.</span>
          </h1>
          <p className="hero-role">Front-End Developer</p>
          {/* <p>
            Passionate front-end developer sculpting digital landscapes where
            creativity meets functionality.
          </p> */}
          <HeroSocial />
        </div>
        {/* <h1 className="hero-role text-start">Front-end developer, DB Administrator</h1> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
