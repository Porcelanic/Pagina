import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import CartaComponent from "../../Components/ComponentCarta";
import { useGeneral } from "../../Utils/generalContext";
import Contenedor from "./Contenedor";

class ContenedorDeportivas extends Contenedor {
  render(): JSX.Element {
    const { setCamisetasDeportivas, camisetasDeportivas = [] } = useGeneral(); // Initialize as empty array
    
    useEffect(() => {
      const obtenerCamisetasDeportivas = async () => {
        try {
          const response = await fetch('http://localhost:3000/camisetas/consultarTipo/Deportivas');
          console.log(response);
          if (!response.ok) throw new Error('Error al obtener camisetas deportivas');
          const camisetasDeportivas = await response.json();
          console.log(camisetasDeportivas);

          if (camisetasDeportivas.length > 0) {
            setCamisetasDeportivas(camisetasDeportivas.map((camiseta: any) => ({
              nombre: camiseta.nombre,
              diseño: camiseta.diseño,
              precio: camiseta.precio,
            })));
          }
          
        } catch (error) {
          console.error('Error al obtener camisetas deportivas:', error);
        }
      };

      obtenerCamisetasDeportivas();
    }, []); // Empty dependency array to run once on mount
    
    const Cartas = camisetasDeportivas.map((data, index) => (
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
          <h1 data-testid="Camisas para estampar">Camisas Deportivas: </h1>
        </div>
        <Row className="align-items-center">
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
