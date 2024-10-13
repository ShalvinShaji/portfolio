import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
// import Blogs from "./Blogs";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      {/* <Blogs /> */}
      <Footer />
    </div>
  );
};

export default MainLayout;
