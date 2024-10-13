import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "../assets/svg/Link.svg";
// import Code from "../assets/svg/code.svg";
import "./Portfolio.css";

const Portfolio = () => {
  const portfolio_contents = [
    {
      title: "GMM Hospital",
      contentLink: "https://github.com/ShalvinShaji/GMM",
      codeLink: "https://github.com/ShalvinShaji/GMM",
      work_Desc:
        "A hospital website providing access to healthcare services and navigation to departments, treatments, and appointments.",
      tech_stack: ["React", "Bootsrap"],
    },
    {
      title: "GMM Hospital Admin Dashboard",
      contentLink: "https://github.com/ShalvinShaji/GMM-Admin",
      codeLink: "https://github.com/ShalvinShaji/GMM-Admin",
      work_Desc:
        "An admin page for a hospital web app to manage all aspects of the client-facing application.",
      tech_stack: ["React", "Bootsrap"],
    },
    {
      title: "ToDone",
      contentLink: "https://github.com/ShalvinShaji/ToDone",
      codeLink: "https://github.com/ShalvinShaji/ToDone",
      work_Desc:
        "Todo application using React for the frontend and Go with the Gin framework for the backend.",
      tech_stack: ["React", "Go", "Gin", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Personal Portfolio",
      contentLink: "https://github.com/ShalvinShaji/Portfolio",
      codeLink: "https://github.com/ShalvinShaji/Portfolio",
      work_Desc:
        "A personal portfolio website built with React and Bootstrap showcasing my projects, skills, and experience.",
      tech_stack: ["React", "Bootsrap"],
    },
  ];
  return (
    <section id="portfolio" className=" d-flex align-items-center ">
      <Container className="custom-container">
        <Row>
          <Col className="">
            <div className="page-heading">
              <h1>
                My <span className="highlight-colour">Works</span>
              </h1>
            </div>
            <div className="container">
              <div className="row">
                {portfolio_contents.map((content, index) => (
                  <div
                    className="col-12 col-lg-6 mb-2 mb-lg-0 p-0 p-lg-1 d-flex  justify-content-start align-items-center"
                    key={index}
                  >
                    <div className="content-box p-4 ">
                      <div className="d-flex flex-column  justify-content-center align-items-start">
                        <div className="d-flex flex-column  justify-content-center align-items-start">
                          <p className=" content-title mb-0 ">
                            {content.title}
                          </p>

                          <div className="d-flex jusify-content-center align-items-center">
                            <a
                              href={content.codeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="codeLink me-3"
                            >
                              <img
                                src={Link}
                                alt="Project link"
                                className="link_icon"
                              />
                            </a>
                            {/* <a
                              href={content.contentLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className=" contentLink"
                            >
                              <img
                                src={Code}
                                alt="Code link"
                                className="link_icon"
                              />
                            </a> */}
                          </div>
                        </div>
                        <div className="work-desc d-flex  justify-content-start align-items-center">
                          <p>{content.work_Desc}</p>
                        </div>
                        <div className="tech-stack d-flex flex-wrap justify-content-start align-items-center">
                          {content.tech_stack &&
                            content.tech_stack.length > 0 &&
                            content.tech_stack.map((tech, techIndex) => (
                              <p className="p-1" key={techIndex}>
                                {tech}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
