import EstampadosProxy from "../Classes/OffCanvas/Proxy/EstampadosProxy";
import { useGeneral } from "../Utils/GeneralContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Carta from "./Carta";
import React from "react";

function OffcanvasEstampado() {
  // Variables que almacenan la elección de estampado del cliente
  const { handleClose1, setEstampadoElegido, show2 } = useGeneral();

  // Estado para almacenar una instancia de EstampadosProxy
  const [estampadosService] =
    useState < estampadosService > new EstampadosProxy();

  // Estado para almacenar la lista de estampados obtenida del servicio
  const [estampados, setEstampados] = useState([]);

  useEffect(() => {
    // Llamada al método getEstampados del servicio
    estampadosService.getEstampados().then((data) => {
      setEstampados(data);
    });
  }, [estampadosService]);

  // Mapeo de la lista de estampados para renderizar las cartas correspondientes
  const CartaEstampado = estampados.map((data, index) => (
    <Col
      key={index}
      xs="12"
      sm="6"
      md="4"
      lg="3"
      className="text-center mt-3"
      onClick={() => {
        // Al hacer clic en una carta, se actualiza el estampado elegido en el contexto
        setEstampadoElegido(index);
      }}
    >
      <Carta
        style={"d-block"}
        img={data.diseño}
        text={data.nombre}
        artista={data.nombre_artista}
      />
    </Col>
  ));

  return (
    // Componente Offcanvas de React Bootstrap para mostrar la selección de estampado
    <Offcanvas show={show2} onHide={handleClose1} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Selecciona tu estampado</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className=" centered-items text-center">
        {/* Si hay estampados disponibles, se muestran las cartas, de lo contrario, se muestra un mensaje */}
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
