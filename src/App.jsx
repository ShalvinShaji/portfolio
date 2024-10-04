import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import About from "./components/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import MainLayout from "./pages/MainLayout";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
