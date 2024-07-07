import { useGeneral } from "../Utils/generalContext";
import Offcanvas from "react-bootstrap/Offcanvas";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
//import Row from "react-bootstrap/Row";
//import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
//import Carta from "./ComponentCarta";
import CartaComponent from "./ComponentCarta";

function OffcanvasEstampado() {
  const {
    estampados,
    handleClose1,
    setEstampadoElegido,
    setEstampados,
    show2,
  } = useGeneral();

  const CartaEstampado = estampados.map((data, index) => (
    <Col
      key={index}
      xs="12"
      sm="6"
      md="4"
      lg="3"
      className="text-center mt-3"
      // Agregar lógica de clic aquí si es necesario
      onClick={() => {
        setEstampadoElegido(index);
      }}
    >
      <CartaComponent 
        style={"d-block"}
        img={data.diseño}
        text={data.nombre}
        artista={data.nombreArtista}
      />
    </Col>
  ));

  useEffect(() => {
    const obtenerEstampadosConArtistas = async () => {
      try {
        // Paso 1: Obtener todos los estampados
        const response = await fetch('http://localhost:3000/estampado/consultarEstampado');
        if (!response.ok) throw new Error('Error al obtener estampados');
        const estampados = await response.json();

        // Paso 2: Verificar si la respuesta no está vacía
        if (estampados.length > 0) {
          // Paso 3: Iterar sobre cada estampado para obtener el artista
          const estampadosConArtistas = await Promise.all(estampados.map(async (estampado) => {
            const responseArtista = await fetch(`http://localhost:3000/artista/consultarArtista/${estampado.artistaEmail}`);
            if (!responseArtista.ok) throw new Error('Error al obtener artista');
            const artista = await responseArtista.json();
            // Paso 4: Anexar el nombre del artista al estampado
            return { ...estampado, nombreArtista: artista.nombre};
          }));

          // Actualizar el estado con los estampados y la información del artista
          setEstampados(estampadosConArtistas);
        }
      } catch (error) {
        console.error('Error al obtener estampados o artistas:', error);
      }
    };

    obtenerEstampadosConArtistas();
  }, []);

  return (
    <Offcanvas show={show2} onHide={handleClose1} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Selecciona tu estampado</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className=" centered-items text-center">
        {CartaEstampado.length > 0 ? (
          CartaEstampado
        ) : (
          <p className="h2">No hay estampados disponibles</p>
        )}
        <br />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffcanvasEstampado;
