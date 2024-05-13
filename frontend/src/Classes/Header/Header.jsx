import Container from "react-bootstrap/Container";
import HeaderContext from "./Strategy/HeaderContext";
import { useState, useEffect } from "react";

//Cabecera
const Header = () => {
  // Variables que estan pendientes del cierre o inicio de sesion
  const contexto = new HeaderContext();
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  useEffect(() => {
    const username = localStorage.getItem("username");
    setIsUserAuthenticated(username !== null);
  }, [localStorage.username]);

  // Se renderiza la barra de navegacion
  return (
    <>
      <Container fluid className="mx-0 px-0">
        {contexto.renderNavbar(isUserAuthenticated)}
      </Container>
    </>
  );
};

export default Header;
