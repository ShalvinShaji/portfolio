import React from "react";
import "./About.css";
import JavaScriptIcon from "../../assets/svg/javascript.svg";
import ReactIcon from "../../assets/svg/react.svg";
import BootstrapIcon from "../../assets/svg/bootstrap.svg";
import PostgreSQLIcon from "../../assets/svg/postgresql.svg";
import PythonIcon from "../../assets/svg/python.svg";
import GoIcon from "../../assets/svg/go.svg";
import GitIcon from "../../assets/svg/github.svg";
import AWSIcon from "../../assets/svg/aws.svg";
import TerraformIcon from "../../assets/svg/terraform.svg";
import HtmlIcon from "../../assets/svg/html.svg";
import CssIcon from "../../assets/svg/css.svg";

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
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* <div className="skills-container d-flex flex-wrap justify-content-xl-start justify-content-center align-items-center">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img
                  src={skill.icon} 
                  alt={skill.name}
                  className="skill-icon"
                />
              </div>
            ))}
          </div> */}
          <p>You ca find me here :</p>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className=" col-lg-6">
          <h1>
            About <span className="highlight-colour">Me</span>
          </h1>
        </div>
        <div className="col-lg-6">
          <p>Currently I'm a Software Engineer at Tata Consultancy Services.</p>
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
      </div>
    </div>
  );
};

export default About;
