{
  /* React-Bootstrap */
}
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
{
  /* My components */
}
import OffcanvasEstampado from "../Components/OffcanvasEstampado";
import OffcanvasCamisa from "../Components/OffcanvasCamisa";
import { GeneralProvider } from "../Context/generalContext";
import { SpecificProvider } from "../Context/SpecificContext";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import ContenedorCartas from "../Components/ContenedorCartas";
{
  /* My css */
}
import "../Styles/Offcanvas.css";
{
  /* Hooks */
}
import "../Styles/Catalogo.css";

function Catalogo() {
  return (
    <>
      <Container fluid className=" align-items-center m-0 p-0">
        <Row className="width-100vw">
          <Header />
        </Row>

        <Row className="width-100vw">
          <Col xs={{ span: 8, offset: 2 }}>
            <Row width="100%" className=" p-5">
              <Col className="centered" width="80%">
                <img src="/logo.png" alt="" />
              </Col>
              <Col>
                <br />
                <br />
                <h1>Waysoft</h1>
                <br />
                <h3>Los mejores precios!</h3>
                <br />
                <h5>Tu página de confianza</h5>
              </Col>
            </Row>
          </Col>
        </Row>
        <GeneralProvider>
          <ContenedorCartas tipo="deportivas" />
          <ContenedorCartas tipo="estampables" />
          <SpecificProvider>
            <OffcanvasCamisa />
          </SpecificProvider>
          <OffcanvasEstampado />
        </GeneralProvider>
        <ThemeSwitcher />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Container>
    </>
  );
}

export default Catalogo;
