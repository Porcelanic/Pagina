import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faUser,
  faSignIn,
  faUsers,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import HeaderStrategy from "./HeaderStrategy";

// Estrategia para usuario no autenticado
class NoAuthHeaderStrategy implements HeaderStrategy {
  private navigate = useNavigate();

  // Metodo que retorna la barra de navegacion del cliente
  public renderNavbar(): JSX.Element {
    return (
      <Navbar
        data-testid="Header"
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
          Estampa tu idea
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
                  to="/catalogoEstampado"
                  active={location.pathname === "/catalogoEstampado"}
                >
                  <FontAwesomeIcon icon={faStar} /> Estampados
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                title={
                  <span>
                    <FontAwesomeIcon icon={faUser} /> Registrate
                  </span>
                }
                id={`offcanvasNavbarDropdown-expand-md`}
              >
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
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    );
  }
}

export default NoAuthHeaderStrategy;
