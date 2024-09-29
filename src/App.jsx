import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
// import Contact from "./components/Contact/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay, e.g., fetching data or assets
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <Router>
      {loading ? (
        <Loader /> // Show loader when loading is true
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            {/*<Route path="/skills" element={<Skills />} />
             */}
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
