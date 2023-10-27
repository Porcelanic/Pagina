import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <Navbar
      className=" justify-content-center"
      style={{ zIndex: 1 }}
      fixed="bottom"
    >
      <Nav>
        <Nav.Link href="#">About us</Nav.Link>
        <Nav.Link href="#">Contact us</Nav.Link>
        <Nav.Link href="#">Join us</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link href="">
          <FontAwesomeIcon icon={faInstagram} />
        </Nav.Link>
        <Nav.Link href="">
          <FontAwesomeIcon icon={faFacebook} />
        </Nav.Link>
        <Nav.Link href="">
          <FontAwesomeIcon icon={faTwitter} />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;