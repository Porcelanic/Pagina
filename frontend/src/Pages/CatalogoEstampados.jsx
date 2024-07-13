import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Footer from "../Components/Footer";
import Header from "../Classes/Header/Header";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import CartaComponent from "../Components/ComponentCarta";
import "../Styles/Offcanvas.css";

function CatalogoEstampados() {
  const [estampados, setEstampados] = useState([]);
  const tipoDeCliente = localStorage.getItem("tipoDeCliente");

  useEffect(() => {
    const obtenerEstampadosConArtistas = async () => {
      try {
        const response = await fetch('http://localhost:3000/estampado/consultarEstampado');
        if (!response.ok) throw new Error('Error al obtener estampados');
        const estampados = await response.json();

        if (estampados.length > 0) {
          const estampadosConArtistas = await Promise.all(estampados.map(async (estampado) => {
            const responseArtista = await fetch(`http://localhost:3000/artista/consultarArtista/${estampado.artistaEmail}`);
            if (!responseArtista.ok) throw new Error('Error al obtener artista');
            const artista = await responseArtista.json();
            return { ...estampado, nombreArtista: artista.nombre};
          }));

          setEstampados(estampadosConArtistas);
        }
      } catch (error) {
        console.error('Error al obtener estampados o artistas:', error);
      }
    };

    obtenerEstampadosConArtistas();
  }, []);

  const handleDelete = async (estampado) => {
    const confirmDelete = window.confirm(`¿Estás seguro de que quieres eliminar el estampado "${estampado.nombre}" del artista "${estampado.nombreArtista}"?`);
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/estampado/eliminarEstampado/${estampado.nombre}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ artistaEmail: estampado.artistaEmail })
      });
      if (!response.ok) throw new Error('Error al eliminar el estampado');

      setEstampados(estampados.filter(e => e !== estampado));
    } catch (error) {
      console.error('Error al eliminar el estampado:', error);
    }
  };

  const Cartas = estampados.map((data, index) => (
    <Col
      key={index}
      xs="12"
      sm="6"
      md="4"
      lg="3"
      className="text-center mt-3"
    >
      <CartaComponent
        img={data.diseño}
        text={data.nombre}
        artista={data.nombreArtista}
      />
      {tipoDeCliente === "Administrador" && (
        <Button variant="danger" className="mt-2" onClick={() => handleDelete(data)}>
          Eliminar
        </Button>
      )}
    </Col>
  ));

  return (
    <Container fluid className="align-items-center m-0 p-0">
      <Row className="width-100vw">
        <Header />
      </Row>

      <Row className="width-100vw">
        <Col xs={{ span: 8, offset: 2 }}>
          <Row width="100%" className="p-5">
            <Col className="centered" width="80%">
              <img src="/logo.png" alt="" />
            </Col>
            <Col>
              <br />
              <br />
              <h1>Estampa Tu Idea</h1>
              <br />
              <h3>¡Los mejores precios!</h3>
              <br />
              <h5>Tu página de confianza</h5>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="align-self-start ps-5 pt-5">
        <h1>Estampados: </h1>
      </div>
      <Row className="align-items-center">
        {estampados.length > 0 ? (
          Cartas
        ) : (
          <p className="h2">No hay estampados disponibles</p>
        )}
      </Row>

      <ThemeSwitcher />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </Container>
  );
}

export default CatalogoEstampados;
