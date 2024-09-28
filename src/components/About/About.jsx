import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Bootstrap",
    "PostgreSQL",
    "Python",
    "Go",
    "Git",
    "AWS Services",
    "Terraform",
  ];
  return (
    <div className="about-page">
      <div className="page-heading">
        <h1>
          About <span className="highlight-colour">Me</span>
        </h1>
      </div>
      <div className="page-content d-flex flex-column flex-md-row justify-items-center align-items-center">
        <div className="about-desc">
          <p>
            Hey, I'am Shalvin Shaji, a Software Engineer at Tata Consultancy
            Services.
          </p>
          <p>
            I am a passionate software developer with a strong foundation in web
            development and database management.
          </p>
          <p>
            Beyond my day job, I am exploring the world of systems programming,
            where I’m developing a growing affinity for languages like Python
            and Go. Whether I’m refining web applications or diving into
            low-level programming, I thrive on the challenge of solving complex
            problems and continuously enhancing my technical skills.
          </p>
        </div>
        <div className="about-skills d-flex flex-column justify-content-between align-items-center">
          <div>
            <p>Core Competencies</p>
          </div>
          <div className="skills-container d-flex flex-wrap justify-content-center">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <p className="mb-0">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
