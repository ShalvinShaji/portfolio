import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="container home_page">
      <div className="row">
        <div className="hero_intro col-12">
          <h1>
            Hey, I'm
            <span className="highlight-colour hero_name"> Shalvin</span>
          </h1>
        </div>
        <div>
          <p className="hero_desc col-12">
            A web developer and database administrator on a journey through the
            tech world, one line at a time.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
