import React from "react";
import Home from "./Home/Home";
import About from "../components/About/About";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Home />
      <About />
    </div>
  );
};

export default MainLayout;
