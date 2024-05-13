import Container from "react-bootstrap/Container";

import Contenido from "../Components/Carrito/Contenido";
import { SpecificProvider } from "../Utils/SpecificContext";
import Footer from "../Components/Footer";
import Header from "../Classes/Header/Header";
import ThemeSwitcher from "../Components/ThemeSwitcher";

import "..//Styles/Carrito.css";
function Carrito() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <SpecificProvider>
          <Contenido />
        </SpecificProvider>
      </Container>
      <br />
      <br />
      <br />
      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default Carrito;
