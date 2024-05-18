//import React from "react";
import { Col, Row } from "react-bootstrap";
import ComponentCarta from "./ComponentCarta";
import { useGeneral } from "../Utils/generalContext";

function ContenedorCartas(prop) {
  const estampables = [
    { id: 1, img: "/Camisas/Estampables/1.png", text: "Azul", price: 100000 },
    { id: 2, img: "/Camisas/Estampables/2.png", text: "Verde", price: 100000 },
    { id: 3, img: "/Camisas/Estampables/3.png", text: "Rojo", price: 100000 },
    { id: 4, img: "/Camisas/Estampables/4.png", text: "Blanco", price: 100000 },
    {
      id: 5,
      img: "/Camisas/Estampables/5.png",
      text: "Azul oscuro",
      price: 100000,
    },
    { id: 6, 
      img: "/Camisas/Estampables/6.png", 
      text: "Rosado", 
      price: 100000 },
    {
      id: 7,
      img: "/Camisas/Estampables/7.png",
      text: "Verde oscuro",
      price: 100000,
    },
    { id: 8, img: "/Camisas/Estampables/8.png", text: "Gris", price: 100000 },
  ];
  const deportivas = [
    {
      id: 1,
      img: "/Camisas/Deportivas/1.png",
      text: "Beja 2024",
      price: 100000,
    },
    {
      id: 2,
      img: "/Camisas/Deportivas/2.png",
      text: "Andres pulido 1778",
      price: 100000,
    },
    {
      id: 3,
      img: "/Camisas/Deportivas/3.png",
      text: "Millonarios 2023",
      price: 100000,
    },
    {
      id: 4,
      img: "/Camisas/Deportivas/4.png",
      text: "No c 1999",
      price: 100000,
    },
    {
      id: 5,
      img: "/Camisas/Deportivas/5.png",
      text: "Real Madrid 2023",
      price: 100000,
    },
    {
      id: 6,
      img: "/Camisas/Deportivas/6.png",
      text: "Tottenham 2023",
      price: 100000,
    },
    {
      id: 7,
      img: "/Camisas/Deportivas/7.png",
      text: "Bayer Much 2023",
      price: 100000,
    },
    {
      id: 8,
      img: "/Camisas/Deportivas/8.png",
      text: "Cucuta 2023",
      price: 100000,
    },
  ];

  const { handleShow, setEstampable, setEstampadoElegido } = useGeneral();

  const cartas = prop.tipo === "estampables" ? estampables : deportivas;

  const tipoCamisas =
    prop.tipo === "estampables" ? "para estampar" : "deportivas";

  return (
    <>
      <div className="align-self-start ps-5 pt-5 mb-5">
        <h1 data-testid={`Camisas ${tipoCamisas}`}>Camisas {tipoCamisas}: </h1>
      </div>
      <Row
        className="align-items-center"
        onClick={() => {
          setEstampable(prop.tipo === "estampables");
          setEstampadoElegido(-1);
        }}
      >
        {cartas.map((data) => (
           <Col
            key={data.id}
            xs="12"
            sm="6"
            md="4"
            lg="3"
            className="text-center mt-3"
          >
            <div onClick={() => handleShow(data)}>
              <ComponentCarta 
                img={data.img} 
                text={data.text} 
                price={data.price} 
                artista={data.artista} 
                style={data.style}  
              />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ContenedorCartas;
