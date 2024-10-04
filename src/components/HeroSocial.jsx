import React from "react";
import "./HeroSocial.css";
import InstagramIcon from "../assets/svg/instagramIcon.svg";
import LinkedInIcon from "../assets/svg/linkedinIcon.svg";
import GitHubIcon from "../assets/svg/githubIcon.svg";

const HeroSocial = () => {
  const socialLinks = [
    {
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/shalvinshaji",
      label: "LinkedIn",
    },
    {
      icon: GitHubIcon,
      url: "https://github.com/ShalvinShaji",
      label: "GitHub",
    },
    {
      icon: InstagramIcon,
      url: "https://www.instagram.com/_shalvin____/",
      label: "Instagram",
    },
  ];

  return (
    <div className="hero-social d-flex justify-content-start align-items-center ">
      {socialLinks.map((social, index) => (
        <div key={index} className="">
          <a
            href={social.url}
            className="social_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.icon} alt={social.label} className="social_icon" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default HeroSocial;
