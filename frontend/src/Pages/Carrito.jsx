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
  const IVA = 0.19;
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
    let material = itemData[posicion].material;
    restarCantidad(material, -itemData[posicion].cantidad);
    itemData.splice(posicion, 1);
    localStorage.setItem("itemData", JSON.stringify(itemData));
    window.location.reload();
  };

  const cambiarCantidad = async (posicion) => {
    let cantidad = document.querySelector("#cantidad" + posicion).value;
    let material = itemData[posicion].material;
    let limite;
    try {
      const res = await fetch(
        `http://localhost:4000/materialQuantity/${material}`
      );
      if (res.ok) {
        const data = await res.json();
        limite = Number(data.cantidad) + Number(itemData[posicion].cantidad);
      } else {
        console.log("Sucedio un error buscando el material");
        limite = -1;
      }
    } catch (error) {
      console.error(error);
    }
    if (limite == 0) {
      setShowAlert(true);
      setAlertText("Ya no queda este material");
      setAlertState("danger");
    } else if (!cantidad || cantidad <= 0 || cantidad > limite) {
      setShowAlert(true);
      setAlertText("La cantidad debe estar entre 1 y " + limite);
      setAlertState("danger");
    } else {
      restarCantidad(material, cantidad - itemData[posicion].cantidad);
      itemData[posicion].cantidad = cantidad;
      localStorage.setItem("itemData", JSON.stringify(itemData));

      window.location.reload();
    }
  };

  const restarCantidad = async (material, cantidad) => {
    fetch("http://localhost:4000/updateQuantity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          material: material,
          cantidad: cantidad,
        }),
      });
  };

  const verificarDinero = () => {
    const dineroDisponible = localStorage.getItem("dinero");
    const valorDeCompra = precioTotal * (1 + IVA);
    return dineroDisponible < valorDeCompra;
  };

  const dirigirAPago = () => {
    if (verificarDinero()) {
      return "No te alcanza el dinero";
    } else {
      return "Continuar con el pago";
    }
  };

  const Items =
    itemData &&
    itemData.map((data) => (
      <Carousel.Item key={data.id}>
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
      <Card.Text className=" cart-items" key={data.id}>
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
    localStorage.setItem("precioTotalIVA", precioTotal * (1 + IVA));
    return <p>Valor a pagar = ${precioTotal * (1 + IVA)}</p>;
  };
  const cargarArticulos = () => {
    if (itemData && itemData.length !== 0) {
      return (
        <>
          <Row>
            <Col md={9}>
              <Alert
                className="mt-5"
                variant={alertState}
                show={showAlert}
                onClose={() => setShowAlert(false)}
                dismissible
              >
                {alertText}
              </Alert>
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
                  <p>(Incluye iva del {IVA * 100}%)</p>

                  <Button
                    disabled={verificarDinero()}
                    onClick={calcularTotal}
                    className="btn-dark btn-outline-light"
                  >
                    <Link to={"/interfazPago"} className="btn p-0 m-0">
                      {dirigirAPago()}
                    </Link>
                  </Button>
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
