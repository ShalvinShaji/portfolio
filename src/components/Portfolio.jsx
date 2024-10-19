import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LinkIcon } from "../utils";
import { portfolio_contents } from "../constants";
import "./Portfolio.css";

const Portfolio = () => {
  
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
                                src={LinkIcon}
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
