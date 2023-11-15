import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ThemeSwitcher from "../Components/ThemeSwitcher";

import "..//Styles/Carrito.css";
function Carrito() {
  const itemData = [
    {
      id: 1,
      img: "/RM.jpg",
      talla: "L",
      cantidad: 2,
      descr: "Real Madrid 2023",
      precio: 18000,
    },
    {
      id: 2,
      img: "/Bayer.png",
      talla: "M",
      cantidad: 3,
      descr: "Bayer Much 2023",
      precio: 18000,
    },
    {
      id: 3,
      img: "/Liverpool.jpeg",
      talla: "XL",
      cantidad: 2,
      descr: "Liverpool 2023",
      precio: 18000,
    },
    {
      id: 4,
      img: "/Tottenham.jpg",
      talla: "S",
      cantidad: 1,
      descr: "Tottenham 2023",
      precio: 18000,
    },
    {
      id: 5,
      img: "/Bayer.png",
      talla: "XS",
      cantidad: 3,
      descr: "Bayer Much 2023",
      precio: 18000,
    },
    {
      id: 6,
      img: "/Liverpool.jpeg",
      talla: "M",
      cantidad: 2,
      descr: "Liverpool 2023",
      precio: 18000,
    },
    {
      id: 7,
      img: "/Tottenham.jpg",
      talla: "L",
      cantidad: 1,
      descr: "Tottenham 2023",
      precio: 18000,
    },
    {
      id: 8,
      img: "/Tottenham.jpg",
      talla: "L",
      cantidad: 1,
      descr: "Tottenham 2023",
      precio: 18000,
    },
    {
      id: 9,
      img: "/Tottenham.jpg",
      talla: "L",
      cantidad: 1,
      descr: "Tottenham 2023",
      precio: 18000,
    },
  ];

  const plural = (data) => {
    return (
      <div>
        <h3 style={{ color: "white" }}>Informacion de las camisas</h3>
        <br />
        <p style={{ color: "white" }}>Talla de las camisas: {data.talla}</p>
        <p style={{ color: "white" }}>{data.descr}</p>
        <p style={{ color: "white" }}>Cantidad de camisas: {data.cantidad}</p>
        <p style={{ color: "white" }}>
          Precio total: {data.cantidad * data.precio}
        </p>
      </div>
    );
  };

  const singular = (data) => {
    return (
      <div>
        <h3 style={{ color: "white" }}>Informacion de las camisas</h3>
        <br />
        <p style={{ color: "white" }}>Talla de las camisas: {data.talla}</p>
        <p style={{ color: "white" }}>{data.descr}</p>
        <p style={{ color: "white" }}>Precio: {data.precio}</p>
        <br />
      </div>
    );
  };

  const Items = itemData.map((data) => (
    <Carousel.Item key={data.id}>
      <Image src={data.img} className=" custom-imge" alt="Selected Image" />
      <Carousel.Caption>
        {data.cantidad > 1 ? plural(data) : singular(data)};
        <Button className="btn-dark btn-outline-light">
          Eliminar del carrito
        </Button>
        <Button className="btn-dark btn-outline-light btn-top">
          Añadir una mayor cantidad
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  const Contenido = itemData.map((data) => (
    <Card.Text className=" cart-items" key={data.id}>
      <span>{data.descr}</span>
      <span>{data.talla}</span>
      <span>{data.cantidad}</span>
    </Card.Text>
  ));

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col md={9}>
            <Carousel className=" text-center" interval={null}>
              {Items}
            </Carousel>
          </Col>

          <Col md={3}>
            <Card className=" text-center" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Resumen del carrito</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Contenidos
                </Card.Subtitle>
                {Contenido}
                <Button className="btn-dark btn-outline-light">Pagar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default Carrito;
