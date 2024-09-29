import React from "react";
import "./Portfolio.css";
import GitIcon from "../../assets/github.svg";

const Portfolio = () => {
  const portfolio_contents = [
    {
      title: "Contentjhghgkgkhkkhlljl 1",
      contentLink: "https://example.com/1",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
    {
      title: "Content 2",
      contentLink: "https://example.com/2",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
    {
      title: "Content 3",
      contentLink: "https://example.com/3",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
    {
      title: "Content 4",
      contentLink: "https://example.com/4",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
    {
      title: "Content 5",
      contentLink: "https://example.com/5",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
    {
      title: "Content 6",
      contentLink: "https://example.com/6",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
    {
      title: "Content 7",
      contentLink: "https://example.com/7",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
    {
      title: "Content 8",
      contentLink: "https://example.com/8",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
    {
      title: "Content 9",
      contentLink: "https://example.com/9",
      codeLink: "https://example.com/1",
      tech_stack: ["Python", "Java"],
    },
  ];

  return (
    <div className="about-page container">
      <div className="row">
        <div className="page-heading">
          <h1>
            My <span className="highlight-colour">Works</span>
          </h1>
        </div>
        <div className="container">
          <div className="row">
            {portfolio_contents.map((content, index) => (
              <div
                className="col-12 col-md-6 col-lg-4 mb-3 d-flex  justify-content-start align-items-center"
                key={index}
              >
                <div className="content-box p-4">
                  <div className="d-flex flex-column  justify-content-center align-items-start">
                    <div className="d-flex flex-column  justify-content-center align-items-start">
                      <a
                        href={content.contentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" contentLink"
                      >
                        <p className="mb-0 content-title">{content.title}</p>
                      </a>
                      <div>
                        <a
                          href={content.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="codeLink"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                    <div className="work-desc d-flex  justify-content-start align-items-center">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, deserunt?
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
      </div>
    </div>
  );
};

export default Portfolio;
