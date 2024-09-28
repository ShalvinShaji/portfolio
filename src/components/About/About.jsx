import React from "react";
import "./About.css";
import JavaScriptIcon from "../../assets/javascript.svg";
import ReactIcon from "../../assets/react.svg";
import BootstrapIcon from "../../assets/bootstrap.svg";
import PostgreSQLIcon from "../../assets/postgresql.svg";
import PythonIcon from "../../assets/python.svg";
import GoIcon from "../../assets/go.svg";
import GitIcon from "../../assets/github.svg";
import AWSIcon from "../../assets/aws.svg";
import TerraformIcon from "../../assets/terraform.svg";
import HtmlIcon from "../../assets/html.svg";
import CssIcon from "../../assets/css.svg";

const About = () => {
  const skills = [
    { name: "Html", icon: HtmlIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "CSS", icon: CssIcon },
    { name: "React", icon: ReactIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
    { name: "PostgreSQL", icon: PostgreSQLIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Go", icon: GoIcon },
    { name: "Git", icon: GitIcon },
    { name: "AWS Services", icon: AWSIcon },
    { name: "Terraform", icon: TerraformIcon },
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
        <div className="skills-container d-flex flex-wrap justify-content-center">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <img
                src={skill.icon} // Directly using the imported icon
                alt={skill.name}
                className="skill-icon"
              />
              <p className="mb-0">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
