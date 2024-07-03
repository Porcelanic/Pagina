import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import HeaderStrategy from "./HeaderStrategy";

// Estrategia para artista autenticado
class ArtistaHeaderStrategy implements HeaderStrategy {
  private navigate = useNavigate();

  // Metodo para cerrar sesion
  public reset = (): void => {
    localStorage.clear();
    this.navigate("/login");
    window.location.reload();
  };

  public renderNavbar(): JSX.Element {
    return (
      <Navbar
        data-testid="Header"
        sticky="top"
        key="md"
        expand="md"
        className="bg-body-tertiary mb-5 border-bottomer ps-5"
      >
        <Navbar.Brand>
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
                <Nav.Link>{"😎 Artista: " + localStorage.username}</Nav.Link>
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

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/formEstampado"
                  active={location.pathname === "/formEstampado"}
                >
                  <FontAwesomeIcon icon={faStar} /> Publicar estampados
                </Nav.Link>
              </Nav.Item>

              <Nav.Item onClick={() => this.reset()}>
                <Nav.Link>
                  <FontAwesomeIcon icon={faSignOut} /> Cerrar sesión
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    );
  }
}

export default ArtistaHeaderStrategy;
