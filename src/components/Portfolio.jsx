import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "../assets/svg/Link.svg";
import Code from "../assets/svg/code.svg";
import "./Portfolio.css";

const Portfolio = () => {
  const portfolio_contents = [
    {
      title: "Project 1",
      contentLink: "https://example.com/1",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
    {
      title: "Project 2",
      contentLink: "https://example.com/2",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
    {
      title: "Project 3",
      contentLink: "https://example.com/3",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
    {
      title: "Project 4",
      contentLink: "https://example.com/3",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
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
                    className="col-12 col-lg-6 mb-1 mb-lg-0 p-0 p-lg-1 d-flex  justify-content-start align-items-center"
                    key={index}
                  >
                    <div className="content-box p-4 ">
                      <div className="d-flex flex-column  justify-content-center align-items-start">
                        <div className="d-flex flex-column  justify-content-center align-items-start">
                          <p className=" content-title">{content.title}</p>

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
                            <a
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
                            </a>
                          </div>
                        </div>
                        <div className="work-desc d-flex  justify-content-start align-items-center">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ab, deserunt?
                          </p>
                        </div>
                        <div className="tech-stack d-flex justify-content-start align-items-center">
                          {content.tech_stack &&
                            content.tech_stack.length > 0 &&
                            content.tech_stack.map((tech, techIndex) => (
                              <p className="p-1 mb-0" key={techIndex}>
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
