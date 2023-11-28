  /* React-Bootstrap */
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

  /* My components */
import Carta from "../Components/Carta";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ThemeSwitcher from "../Components/ThemeSwitcher";

  /* My css */
import "../Styles/Offcanvas.css";

  /* Hooks */
  import { useState, useEffect } from "react";

function CatalogoEstampados() {

  const [estampados, setEstampados] = useState([]);

  useEffect(() => {
    // Llamar al endpoint para obtener los estampados
    fetch('http://localhost:4000/getEstampados') // Asegúrate de que la ruta sea correcta según tu configuración de servidor
      .then(response => response.json())
      .then(data => {
        if(data.rowCount!=0){
          setEstampados(data); // Establecer los estampados en el estado local
        }else{
          console.log("no hay estampados")
          console.log(estampados.length)
        }
      })
      .catch(error => {
        console.error('Error al obtener los estampados:', error);
      });
  }, []); // La dependencia vacía asegura que esta llamada solo se haga una vez al cargar el componente

  const Cartas = estampados.map((data, index) => (
    <Col
      key={index}
      xs="12"
      sm="6"
      md="4"
      lg="3"
      className="text-center mt-3"
      // Agregar lógica de clic aquí si es necesario
    >
        <Carta img={data.diseño} text={data.nombre} artista={data.nombre_artista} />
   
    </Col>
  ));

  return (
    <>
      <Container fluid className=" align-items-center  m-0 p-0">
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

        <div className="align-self-start ps-5 pt-5">
          <h1>Estampados: </h1>
        </div>
        <Row className="align-items-center">{estampados.length > 0 ? (
              Cartas
            ) : (
              <p className="h2">No hay estampados disponibles</p>
            )} </Row>

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

export default CatalogoEstampados;
