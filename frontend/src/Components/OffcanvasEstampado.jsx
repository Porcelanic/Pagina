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
        artista={data.nombre_artista}
      />
    </Col>
  ));

  useEffect(() => {
    // Llamar al endpoint para obtener los estampados
    fetch("http://localhost:4000/getEstampados") // Asegúrate de que la ruta sea correcta según tu configuración de servidor
      .then((response) => response.json())
      .then((data) => {
        if (data.rowCount != 0) {
          setEstampados(data); // Establecer los estampados en el estado local
        }
      })
      .catch((error) => {
        console.error("Error al obtener los estampados:", error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // La dependencia vacía asegura que esta llamada solo se haga una vez al cargar el componente

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
