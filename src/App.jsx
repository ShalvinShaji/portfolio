import React from "react";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="mt-5">
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
