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
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  let value = localStorage.getItem("dinero");
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    setIsUserAuthenticated(username !== null);
  }, [localStorage.username]);

  function currencyFormatter({ currency, value }) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      minimumFractionDigits: 2,
      currency,
    });
    return formatter.format(value);
  }

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
    localStorage.removeItem("precioTotal");
    localStorage.removeItem("dinero");
    navigate("/login");
    window.location.reload();
  };

  const botones = () => {
    if (
      isUserAuthenticated &&
      localStorage.getItem("tipoDeCliente") == "Cliente"
    ) {
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
                    <Nav.Link>
                      🤑 Dinero:{" "}
                      {currencyFormatter({
                        currency: "USD",
                        value,
                      })}
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link>
                      <FontAwesomeIcon icon={faUser} /> {localStorage.username}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      as={Link}
                      to="/"
                      active={location.pathname === "/"}
                    >
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
                  <Nav.Item onClick={() => reset()}>
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
    } else if (
      isUserAuthenticated &&
      localStorage.getItem("tipoDeCliente") == "Artista"
    ) {
      return (
        <>
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
                    <Nav.Link>
                      {"😎 Artista: " + localStorage.username}
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
                      to="/formEstampado"
                      active={location.pathname === "/formEstampado"}
                    >
                      <FontAwesomeIcon icon={faStar} /> Publicar estampados
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item onClick={() => reset()}>
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
    } else {
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
                  <NavDropdown
                    title={user()}
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
        </>
      );
    }
  };

  return (
    <>
      <Container fluid className="mx-0 px-0">
        {botones()}
      </Container>
    </>
  );
}
export default Header;
