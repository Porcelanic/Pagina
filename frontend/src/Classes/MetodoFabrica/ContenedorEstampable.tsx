import React from "react";
import { Col, Row } from "react-bootstrap";
import CartaComponent from "../../Components/ComponentCarta";
import { useGeneral } from "../../Utils/generalContext";
import Contenedor from "./Contenedor";

class ContenedorEstampable extends Contenedor {
  render(): JSX.Element {
    const estampables = [
      { id: 1, img: "/Camisas/Estampables/1.png", text: "Azul", price: 100000 },
      { id: 2, img: "/Camisas/Estampables/2.png", text: "Verde", price: 100000 },
      { id: 3, img: "/Camisas/Estampables/3.png", text: "Rojo", price: 100000 },
      { id: 4, img: "/Camisas/Estampables/4.png", text: "Blanco", price: 100000 },
      { id: 5, img: "/Camisas/Estampables/5.png", text: "Azul oscuro", price: 100000 },
      { id: 6, img: "/Camisas/Estampables/6.png", text: "Rosado", price: 100000 },
      { id: 7, img: "/Camisas/Estampables/7.png", text: "Verde oscuro", price: 100000 },
      { id: 8, img: "/Camisas/Estampables/8.png", text: "Gris", price: 100000 },
    ];

    const { handleShow, setEstampable, setEstampadoElegido } = useGeneral();

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
          {estampables.map((data) => (
            <Col key={data.id} xs="12" sm="6" md="4" lg="3" className="text-center mt-3">
              <div onClick={() => handleShow(data)}>
                <CartaComponent img={data.img} text={data.text} price={data.price} artista={undefined} style={undefined} />
              </div>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default ContenedorEstampable;
