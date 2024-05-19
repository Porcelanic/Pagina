import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faUser,
  faCartShopping,
  faSignOut,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import HeaderStrategy from "./HeaderStrategy";

// Estrategia para cliente autenticado
class ClienteHeaderStrategy implements HeaderStrategy {
  // Atributos de la clase
  private navigate = useNavigate();
  private value = localStorage.getItem("dinero");

  // Metodo para formatear el dinero del usuario
  public currencyFormatter({ currency, value }): string {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      minimumFractionDigits: 2,
      currency,
    });
    return formatter.format(value);
  }

  // Metodo para cerrar sesion
  public reset = (): void => {
    localStorage.clear();
    this.navigate("/login");
    window.location.reload();
  };

  // Metodo que retorna la barra de navegacion del cliente
  public renderNavbar(): JSX.Element {
    return (
      <>
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
                  <Nav.Link>
                    🤑 Dinero:{" "}
                    {this.currencyFormatter({
                      currency: "USD",
                      value: this.value,
                    })}
                  </Nav.Link>
                </Nav.Item>

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
                    to="/catalogoEstampado"
                    active={location.pathname === "/catalogoEstampado"}
                  >
                    <FontAwesomeIcon icon={faStar} /> Estampados
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
                <Nav.Item onClick={() => this.reset()}>
                  <Nav.Link>
                    <FontAwesomeIcon icon={faSignOut} /> Cerrar sesión
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </>
    );
  }
}

export default ClienteHeaderStrategy;
