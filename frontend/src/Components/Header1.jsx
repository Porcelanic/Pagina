import React from "react";
import { Container } from "react-bootstrap";
import HeaderContext from "./HeaderContext";

const Header1 = () => {
  // Uso de la clase de contexto en el componente Header

  const headerContext = new HeaderContext();

  return (
    <>
      <Container fluid className="mx-0 px-0">
        {headerContext.renderNavbar()}
      </Container>
    </>
  );
};

export default Header1;
