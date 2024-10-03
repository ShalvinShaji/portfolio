import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader/Loader";
import About from "./components/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to hide loader after the first render
    const handleFirstRender = () => {
      setLoading(false);
    };

    requestAnimationFrame(handleFirstRender);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            {/*<Route path="/skills" element={<Skills />} /> */}
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
