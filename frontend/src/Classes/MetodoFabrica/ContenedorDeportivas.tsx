import React from "react";
import { Col, Row } from "react-bootstrap";
import CartaComponent from "../../Components/ComponentCarta";
import { useGeneral } from "../../Utils/generalContext";
import Contenedor from "./Contenedor";

class ContenedorDeportivas extends Contenedor {
  render(): JSX.Element {
    const deportivas = [
      { id: 1, img: "/Camisas/Deportivas/1.png", text: "Beja 2024", price: 100000 },
      { id: 2, img: "/Camisas/Deportivas/2.png", text: "Andres pulido 1778", price: 100000 },
      { id: 3, img: "/Camisas/Deportivas/3.png", text: "Millonarios 2023", price: 100000 },
      { id: 4, img: "/Camisas/Deportivas/4.png", text: "No c 1999", price: 100000 },
      { id: 5, img: "/Camisas/Deportivas/5.png", text: "Real Madrid 2023", price: 100000 },
      { id: 6, img: "/Camisas/Deportivas/6.png", text: "Tottenham 2023", price: 100000 },
      { id: 7, img: "/Camisas/Deportivas/7.png", text: "Bayer Much 2023", price: 100000 },
      { id: 8, img: "/Camisas/Deportivas/8.png", text: "Cucuta 2023", price: 100000 },
    ];

    const { handleShow, setEstampable, setEstampadoElegido } = useGeneral();

    return (
      <>
        <div className="align-self-start ps-5 pt-5 mb-5">
          <h1 data-testid="Camisas deportivas">Camisas deportivas: </h1>
        </div>
        <Row
          className="align-items-center"
          onClick={() => {
            setEstampable(false);
            setEstampadoElegido(-1);
          }}
        >
          {deportivas.map((data) => (
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

export default ContenedorDeportivas;
