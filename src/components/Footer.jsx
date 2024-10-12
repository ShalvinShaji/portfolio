import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-5 py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <small>
              &copy; {new Date().getFullYear()}. Designed and Developed by Me with{" "}
              <span className="heart_color">&#10084;</span>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
