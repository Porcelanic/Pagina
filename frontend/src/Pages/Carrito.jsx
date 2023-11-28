import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ThemeSwitcher from "../Components/ThemeSwitcher";

import { Link } from "react-router-dom";

import "..//Styles/Carrito.css";

import { useState } from "react";

function Carrito() {
  const itemData = JSON.parse(localStorage.getItem("itemData"));
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertState, setAlertState] = useState("");
  const plural = (data) => {
    return (
      <div>
        <h3 className="text-light">Informacion de las camisas</h3>
        <br />
        <p className="text-light">Talla de las camisas: {data.talla}</p>
        <p className="text-light">{data.text}</p>
        <p className="text-light">Valor unitario: ${data.price}</p>
        <p className="text-light">Cantidad de camisas: {data.cantidad}</p>
        <p className="text-light">Material: {data.material}</p>
        <p className="text-light">
          Precio total: ${data.cantidad * data.price}
        </p>
      </div>
    );
  };

  const singular = (data) => {
    return (
      <div>
        <h3 className="text-light">Informacion de las camisas</h3>
        <br />
        <p className="text-light">Talla de las camisas: {data.talla}</p>
        <p className="text-light">{data.text}</p>
        <p className="text-light">Precio: {data.price}</p>
        <p className="text-light">Material: {data.material}</p>
        <br />
      </div>
    );
  };

  function calcularTotal() {
    let total = 0;
    for (let i = 0; i < itemData.length; i++) {
      total += itemData[i].cantidad * itemData[i].precio;
    }
    localStorage.setItem("valor", total);
  }

  const eliminarDelCarrito = (posicion) => {
    itemData.splice(posicion, 1);
    localStorage.setItem("itemData", JSON.stringify(itemData));
    window.location.reload();
  };

  const cambiarCantidad = (posicion) => {
    let cantidad = document.querySelector("#cantidad" + posicion).value;
    if (cantidad > 0 && cantidad <= 100) {
      itemData[posicion].cantidad = cantidad;
      localStorage.setItem("itemData", JSON.stringify(itemData));
      window.location.reload();
    } else {
      setShowAlert(true);
      setAlertText("La cantidad debe estar entre 1 y 100");
      setAlertState("danger");
    }
  };

  const Items =
    itemData &&
    itemData.map((data) => (
      <Carousel.Item key={itemData.indexOf(data)}>
        <div className="contenedor-img">
          <Image src={data.img} className="camisa-fondo" alt="Selected Image" />
          {data.estampa != "" ? (
            <Image src={data.estampa} className="camisa-centrada" />
          ) : (
            <></>
          )}
        </div>
        <Carousel.Caption>
          {data.cantidad > 1 ? plural(data) : singular(data)};
          <Button
            className="btn-dark btn-outline-light"
            onClick={() => eliminarDelCarrito(itemData.indexOf(data))}
          >
            Eliminar del carrito
          </Button>
          <InputGroup className="my-3">
            <Form.Control
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="number"
              defaultValue={data.cantidad}
              id={"cantidad" + itemData.indexOf(data)}
            />
            <Button
              variant="outline-light"
              onClick={() => cambiarCantidad(itemData.indexOf(data))}
            >
              Cambiar cantidad
            </Button>
          </InputGroup>
        </Carousel.Caption>
      </Carousel.Item>
    ));

  const Contenido =
    itemData &&
    itemData.map((data) => (
      <Card.Text className=" cart-items" key={itemData.indexOf(data)}>
        <span>{data.text}</span>
        <span>{data.talla}</span>
        <span>{data.cantidad}</span>
        <span>{data.material}</span>
      </Card.Text>
    ));

  const precioTotal =
    itemData &&
    itemData.reduce((acc, item) => {
      return acc + item.price * item.cantidad;
    }, 0);

  const mostrarPrecioTotal = () => {
    localStorage.setItem("precioTotal", precioTotal);
    return <p>Valor a pagar = ${precioTotal}</p>;
  };
  const cargarArticulos = () => {
    if (itemData && itemData.length !== 0) {
      return (
        <>
          <Alert
            className="mt-5"
            variant={alertState}
            show={showAlert}
            onClose={() => setShowAlert(false)}
            dismissible
          >
            {alertText}
          </Alert>
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
                  {mostrarPrecioTotal()}
                  <Link to={"/interfazPago"}>
                    <Button
                      onClick={calcularTotal}
                      className="btn-dark btn-outline-light"
                    >
                      Continuar con el pago
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      );
    } else {
      return (
        <>
          <div>
            <h1>No hay nada en el carrito :(</h1>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Container>{cargarArticulos()}</Container>
      <br />
      <br />
      <br />
      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default Carrito;
