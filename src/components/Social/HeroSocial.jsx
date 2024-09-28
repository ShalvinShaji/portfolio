import React from "react";
import "./HeroSocial.css";

const HeroSocial = () => {
  return (
    <div className="hero-social">
      <div>
        <a
          href="https://www.linkedin.com/in/shalvinshaji"
          className="social_link"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <div>
        <a
          href="https://github.com/ShalvinShaji"
          className="social_link"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.instagram.com/_shalvin____/"
          className="social_link"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default HeroSocial;
