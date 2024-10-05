import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="vh-100 d-flex align-items-center bg-secondary text-white"
    >
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Blog Posts</h1>
            <p>
              This is the Blogs section where I share my thoughts and articles.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;
