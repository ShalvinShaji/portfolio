import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-container">
      <div>
        <h1>
          The best way to predict the <span className="home"> future</span> is
          to create it.
        </h1>
        <p>
          This is the main content of the <span className="home">home</span>{" "}
          page.
        </p>
      </div>
    </div>
  );
};

export default Home;
