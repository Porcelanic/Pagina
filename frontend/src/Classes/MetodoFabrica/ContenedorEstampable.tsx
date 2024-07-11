import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import CartaComponent from "../../Components/ComponentCarta";
import { useState } from "react";
import { useGeneral } from "../../Utils/GeneralContext";
import Contenedor from "./Contenedor";

class ContenedorEstampable extends Contenedor {
  render(): JSX.Element {
    const [camisetasEstampables, setCamisetasEstampables] = useState<any[]>([]);
    const tipoDeCliente = localStorage.getItem("tipoDeCliente");

    useEffect(() => {
      obtenerCamisetasEstampables();
    }, []); // Empty dependency array to run once on mount

    const obtenerCamisetasEstampables = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/camisetas/consultarTipo/Estampables"
        );
        if (!response.ok)
          throw new Error("Error al obtener camisetas estampables");
        const json = await response.json();
        setCamisetasEstampables(json);
      } catch (error) {
        console.error("Error al obtener camisetas estampables:", error);
      }
    };

    const { handleShow, setEstampable, setEstampadoElegido } = useGeneral();

    const handleDelete = async (camiseta) => {
      const confirmDelete = window.confirm(`¿Estás seguro de que quieres eliminar la camiseta "${camiseta.nombre}"?`);
      if (!confirmDelete) return;
  
      try {
        const response = await fetch(`http://localhost:3000/camisetas/eliminarCamisetas/${camiseta.nombre}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ adminEmail: camiseta.adminEmail })
        });
        if (!response.ok) throw new Error('Error al eliminar la camiseta');
  
        // Actualizar el estado para reflejar el cambio
        setCamisetasEstampables(camisetasEstampables.filter(e => e !== camiseta));
      } catch (error) {
        console.error('Error al eliminar la camiseta:', error);
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
        <div onClick={() => handleShow(data)}>
          <CartaComponent
            img={data.diseño}
            text={data.nombre}
            artista={undefined}
            price={data.precio}
            style={undefined}
          />
        </div>
        {tipoDeCliente === "Administrador" && (
        <Button variant="danger" className="mt-2" onClick={() => handleDelete(data)}>
          Eliminar
        </Button>
      )}
      </Col>
    ));

    return (
      <>
        <div className="align-self-start ps-5 pt-5 mb-5">
          <h1 data-testid="Camisas para estampar">Camisas para estampar: </h1>
        </div>
        <Row
          className="align-items-center"
          onClick={() => {
            setEstampable(true);
            setEstampadoElegido(-1);
          }}
        >
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
