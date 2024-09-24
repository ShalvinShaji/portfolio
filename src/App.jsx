import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import HeroSocial from "./components/Social/HeroSocial";

// Uncomment and import additional components as needed
// import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <HeroSocial /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Uncomment to add more routes */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
