import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="bottom-fixed">
        <br />
        <br />
        <br />

        <Container
          fluid
          className="border-toper align-items-center  bg-body-tertiary m-0 px-0 py-2"
          data-testid="Footer"
        >
          <Row>
            <Col xs lg={4}></Col>
            <Col className="text-center">
              <a href="#" className="btn">
                About us
              </a>
            </Col>
            <Col className="text-center">
              <a href="#" className="btn">
                Contact us
              </a>
            </Col>
            <Col className="text-center">
              <a href="#" className="btn">
                Join us
              </a>
            </Col>
            <Col xs lg={4}></Col>
          </Row>

          <Row>
            <Col xs lg={4}></Col>
            <Col className="text-center">
              <a href="" className="btn">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Col>
            <Col className="text-center">
              <a href="" className="btn">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </Col>
            <Col className="text-center">
              <a href="" className="btn">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </Col>
            <Col xs lg={4}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
