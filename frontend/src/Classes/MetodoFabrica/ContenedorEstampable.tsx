import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import CartaComponent from "../../Components/ComponentCarta";
import { useState } from "react";
import Contenedor from "./Contenedor";

class ContenedorEstampable extends Contenedor {
  render(): JSX.Element {
    const [camisetasEstampables, setCamisetasEstampables] = useState<any[]>([]);
    
    useEffect(() => {
      obtenerCamisetasEstampables();
    }, []); // Empty dependency array to run once on mount

    const obtenerCamisetasEstampables = async () => {
      try {
        const response = await fetch('http://localhost:3000/camisetas/consultarTipo/Estampables');
        console.log(response);
        if (!response.ok) throw new Error('Error al obtener camisetas estampables');
        const json = await response.json();
        setCamisetasEstampables(json)
      } catch (error) {
        console.error('Error al obtener camisetas estampables:', error);
      }
    };

    const Cartas = camisetasEstampables.map((data, index) => (
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
          artista={undefined}
          price={data.precio}
          style={undefined}
        />
      </Col>
    ));

    return (
      <>
        <div className="align-self-start ps-5 pt-5 mb-5">
          <h1 data-testid="Camisas para estampar">Camisas para estampar: </h1>
        </div>
        <Row className="align-items-center">
          {camisetasEstampables.length > 0 ? (
            Cartas
          ) : (
            <p className="h2">No hay estampados disponibles</p>
          )}
        </Row>
      </>
    );
  }
}

export default ContenedorEstampable;
