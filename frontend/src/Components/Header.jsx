import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faStar, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation} from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Navbar
        sticky="top"
        key="md"
        expand="md"
        className="bg-body-tertiary mb-3 border-bottomer"
      >
        <Container>
          <Navbar.Brand href="/#/">
            <img
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            WaySoft
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Body>
              <Nav
                variant="pills"
                className="justify-content-end flex-grow-1 pe-3"
              >
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/catalogo"
                    active={location.pathname === "/catalogo"}
                  >
                    <FontAwesomeIcon icon={faShop} /> Catalogo
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/"
                    active={location.pathname === "/"}
                  >
                    <FontAwesomeIcon icon={faStar} /> Estampas
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/registro"
                    active={location.pathname === "/registro"}
                  >
                    <FontAwesomeIcon icon={faCartShopping} /> Carrito
                  </Nav.Link>
                </Nav.Item>
                <NavDropdown
                  title={
                    <span>
                      <FontAwesomeIcon icon={faUser} /> Usuario
                    </span>
                  }
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
