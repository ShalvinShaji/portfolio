import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" sm:py-2 sm:mt-1 py-3 mt-4">
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
