import React from "react";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
