import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-container">
      <div>
        <h1>
          Welcome to the <span className="home">Home</span> Page.
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
