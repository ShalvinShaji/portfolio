import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroSocial.css";
import { LinkedInIcon, GitHubIcon, InstagramIcon } from "../utils";

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
      url: "http://www.instagram.com/shalv1n________",
      label: "Instagram",
    },
  ];

  const iconsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      iconsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="hero-social d-flex justify-content-start align-items-center">
      {socialLinks.map((social, index) => (
        <div key={index} ref={(el) => (iconsRef.current[index] = el)}>
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
