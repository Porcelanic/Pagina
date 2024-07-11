import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import CartaComponent from "../../Components/ComponentCarta";
import { useState } from "react";
import Contenedor from "./Contenedor";
import { useGeneral } from "../../Utils/GeneralContext";

class ContenedorDeportivas extends Contenedor {
  render(): JSX.Element {
    const [camisetasDeportivas, setCamisetasDeportivas] = useState<any[]>([]);

    useEffect(() => {
      obtenerCamisetasDeportivas();
    }, []); // Empty dependency array to run once on mount

    const obtenerCamisetasDeportivas = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/camisetas/consultarTipo/Deportivas"
        );
        if (!response.ok)
          throw new Error("Error al obtener camisetas deportivas");
        const json = await response.json();
        setCamisetasDeportivas(json);
      } catch (error) {
        console.error("Error al obtener camisetas deportivas:", error);
      }
    };

    const { handleShow, setEstampable, setEstampadoElegido } = useGeneral();

    const Cartas = camisetasDeportivas.map((data, index) => (
      <Col
        key={index}
        xs="12"
        sm="6"
        md="4"
        lg="3"
        className="text-center mt-3"
      >
        <div onClick={() => handleShow(data)}>
          <CartaComponent
            img={data.diseño}
            text={data.nombre}
            artista={undefined}
            price={data.precio}
            style={undefined}
          />
        </div>
      </Col>
    ));

    return (
      <>
        <div className="align-self-start ps-5 pt-5 mb-5">
          <h1 data-testid="Camisas para estampar">Camisas Deportivas: </h1>
        </div>
        <Row
          className="align-items-center"
          onClick={() => {
            setEstampable(false);
            setEstampadoElegido(-1);
          }}
        >
          {camisetasDeportivas.length > 0 ? (
            Cartas
          ) : (
            <p className="h2">No hay estampados disponibles</p>
          )}
        </Row>
      </>
    );
  }
}

export default ContenedorDeportivas;
