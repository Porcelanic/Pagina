import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faUser,
  faCartShopping,
  faSignIn,
  faSignOut,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Header() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const username = localStorage.getItem("username");
    setIsUserAuthenticated(username !== null);
  }, [localStorage.username]);

  const user = () => {
    return (
      <span>
        <FontAwesomeIcon icon={faUser} /> Registrate
      </span>
    );
  };

  const reset = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("itemData");
    window.location.reload();
  };

  const botones = () => {
    if (isUserAuthenticated) {
      return (
        <>
          <Nav.Item>
            <Nav.Link>
              <FontAwesomeIcon icon={faUser} /> {localStorage.username}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              <FontAwesomeIcon icon={faShop} /> Catalogo
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
          <Nav.Item onClick={reset}>
            <Nav.Link>
              <FontAwesomeIcon icon={faSignOut} /> Cerrar sesión
            </Nav.Link>
          </Nav.Item>
        </>
      );
    } else {
      return (
        <>
          <NavDropdown title={user()} id={`offcanvasNavbarDropdown-expand-md`}>
            <NavDropdown.Item
              as={Link}
              to="/login"
              active={location.pathname === "/login"}
            >
              <FontAwesomeIcon icon={faSignIn} /> Log in
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/registro"
              active={location.pathname === "/registro"}
            >
              <FontAwesomeIcon icon={faUsers} /> Registrate!
            </NavDropdown.Item>
          </NavDropdown>
        </>
      );
    }
  };

  return (
    <>
      <Container fluid className="mx-0 px-0">
        <Navbar
          sticky="top"
          key="md"
          expand="md"
          className="bg-body-tertiary mb-5 border-bottomer ps-5"
        >
          <Navbar.Brand href="/#/">
            <img
              src="logo.png"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />
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
                {botones()}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </>
  );
}
export default Header;
