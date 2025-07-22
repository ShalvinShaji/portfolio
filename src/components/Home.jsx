import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import HeroSocial from "./HeroSocial";

const Home = () => {

  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center mt-5 "
    >
      <Container className="custom-container">
        <Row>
          <Col className="">
            <h3 className="mb-0 hero_intro ">Hey, I'm</h3>
            <p className="highlight-colour hero_name mb-0">Shalvin</p>
            <p className="hero_desc col-12 ">
              A software engineer on a journey through
              the tech world, one line at a time.
            </p>
            <div className="">
              <p>You can find me here :</p>
              <HeroSocial />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
