import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col } from "react-bootstrap";
import { LinkIcon, WebIcon } from "../utils";
import { portfolio_contents } from "../constants";
import "./Portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    boxesRef.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0, //
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            once: true,
          },
          delay: index * 0.2,
        }
      );
    });

    // Clean up: remove all ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="portfolio" className="d-flex align-items-center">
      <Container className="custom-container">
        <Row>
          <Col>
            <div className="page-heading">
              <h1>
                My <span className="highlight-colour">Works</span>
              </h1>
            </div>
            <div className="container">
              <div className="row">
                {portfolio_contents.map((content, index) => (
                  <div
                    className="col-12 col-lg-6 mb-2 mb-lg-0 p-0 p-lg-1 d-flex justify-content-start align-items-center"
                    key={index}
                    ref={(el) => (boxesRef.current[index] = el)} // Added reference to each box
                  >
                    <div className="content-box p-4">
                      <div className="d-flex flex-column justify-content-center align-items-start">
                        <img
                          src={content.image}
                          alt={content.title}
                          className="w-100 mb-3 h-[250px] rounded"
                        />
                        <div className="d-flex justify-content-center align-items-center">
                          <p className="content-title mb-0 me-2">
                            {content.title}
                          </p>
                          <a
                            href={content.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="codeLink me-2"
                          >
                            <img
                              src={LinkIcon}
                              alt="Project link"
                              className="link_icon"
                            />
                          </a>
                          <a
                            href={content.contentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="codeLink text-white"
                          >
                            <img
                              src={WebIcon}
                              alt="Demo link"
                              className="link_icon"
                            />
                          </a>
                        </div>
                        <div className="work-desc d-flex justify-content-start align-items-center">
                          <p>{content.work_Desc}</p>
                        </div>
                        <div className="tech-stack d-flex flex-wrap justify-content-start align-items-center">
                          {content.tech_stack?.map((tech, techIndex) => (
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
