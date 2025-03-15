import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import {
  HtmlIcon,
  ReactIcon,
  ReduxIcon,
  JavaScriptIcon,
  CssIcon,
  TailwindcssIcon,
  BootstrapIcon,
  PythonIcon,
  GoIcon,
  PostgreSQLIcon,
  AWSIcon,
  TerraformIcon,
  GitIcon,
  NextjsIcon,
  TypeScript,
  Mongodb,
  Nodejs,
  Expressjs,
} from "../utils";
import "./About.css";

const About = () => {
  const skills = [
    { name: "Next JS", icon: NextjsIcon },
    { name: "React", icon: ReactIcon },
    // { name: "Redux", icon: ReduxIcon },
    // { name: "Typescript", icon: TypeScript },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "Nodejs", icon: Nodejs },
    { name: "Expressjs", icon: Expressjs },
    { name: "MongoDB", icon: Mongodb },
    { name: "CSS", icon: CssIcon },
    { name: "Tailwind CSS", icon: TailwindcssIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
    { name: "Python", icon: PythonIcon },
    // { name: "Go", icon: GoIcon },
    { name: "PostgreSQL", icon: PostgreSQLIcon },
    { name: "AWS Services", icon: AWSIcon },
    { name: "Terraform", icon: TerraformIcon },
    { name: "Git", icon: GitIcon },
  ];

  const skillsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-container",
        start: "top 80%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });

    tl.fromTo(
      skillsRef.current,
      { opacity: 0, scale: 1 }, // Initial state of the skill icons
      {
        opacity: 1,
        scale: 1, // Final state
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
      }
    );

    // Clean up on unmount
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="about" className=" d-flex align-items-center ">
      <Container className="custom-container">
        <Row>
          <Col className="text-start">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className=" col-12">
                <h1>
                  About <span className="highlight-colour">Me</span>
                </h1>
              </div>
              <div className="col-12">
                <p>
                  Currently I'm a Software Engineer at Tata Consultancy
                  Services.
                </p>
                <p>
                  I am a passionate software developer with a strong foundation
                  in web development and database management.
                </p>
                <p>
                  Beyond my day job, I am exploring the world of systems
                  programming, where I’m developing a growing affinity for
                  languages like Python and Go. Whether I’m refining web
                  applications or diving into low-level programming, I thrive on
                  the challenge of solving complex problems and continuously
                  enhancing my technical skills.
                </p>
              </div>
              <div className="col-12">
                <div className="skills-container d-flex flex-wrap justify-content-xl-start justify-content-center align-items-center">
                  {skills.map((skill, index) => (
                    <div
                      className="skill"
                      key={index}
                      ref={(el) => (skillsRef.current[index] = el)} // Assign each skill element to the array
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
