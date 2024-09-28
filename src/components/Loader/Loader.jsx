import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [showBorders, setShowBorders] = useState([false, false, false, false]);

  useEffect(() => {
    const timeoutIds = [];

    // Show each border with a delay
    showBorders.forEach((_, index) => {
      timeoutIds[index] = setTimeout(() => {
        setShowBorders((prev) => {
          const newBorders = [...prev];
          newBorders[index] = true;
          return newBorders;
        });
      }, index * 500); // Delay for each border (500ms each)
    });

    // Cleanup timeouts on unmount
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className="loader">
      <div className={`border top ${showBorders[3] ? "show" : ""}`}></div>
      <div className={`border left ${showBorders[0] ? "show" : ""}`}></div>
      <div className={`border right ${showBorders[2] ? "show" : ""}`}></div>
      <div className={`border bottom ${showBorders[1] ? "show" : ""}`}></div>
      <div className="letter">S</div>
    </div>
  );
};

export default Loader;
