import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faStar,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const user = () => {
    return (
      <span>
        <FontAwesomeIcon icon={faUser} /> {localStorage.getItem('username') != null ? localStorage.getItem('username') : "Usuario"}
      </span>
    );
  };

  const reset = () =>{
    localStorage.removeItem('username');
    window.location.reload();
  }

  const cerrarsesion = () =>{
    return(
      <>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={reset}>
          Cerrar Sesion
        </NavDropdown.Item>
      </>
    );
  }

  const location = useLocation();
  return (
    <>
      <Navbar
        sticky="top"
        key="md"
        expand="md"
        className="bg-body-tertiary mb-5 border-bottomer"
      >
        <Container>
          <Navbar.Brand href="/#/">
            <img
              src="logo.png"
              width="35"
              height="35"
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
                  <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
                    <FontAwesomeIcon icon={faShop} /> Catalogo
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/login"
                    active={location.pathname === "/login"}
                  >
                    <FontAwesomeIcon icon={faStar} /> Estampas
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/carrito"
                    active={location.pathname === "/carrito"}
                  >
                    <FontAwesomeIcon icon={faCartShopping} /> Carrito
                  </Nav.Link>
                </Nav.Item>
                <NavDropdown
                  title={user()}
                  
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  {localStorage.getItem('username') != null ? cerrarsesion() : <></>}
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
