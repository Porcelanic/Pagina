//import Carousel from "react-bootstrap/Carousel";
//import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
//import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import InputGroup from "react-bootstrap/InputGroup";
//import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
//import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSpecific } from "../../Utils/SpecificContext";
import Items from "./Items";
function Contenido() {
  const itemData = JSON.parse(localStorage.getItem("itemData"));
  const IVA = 0.19;
  const { showAlert, setShowAlert, alertText, alertState } = useSpecific();

  function calcularTotal() {
    let total = 0;
    for (let i = 0; i < itemData.length; i++) {
      total += itemData[i].cantidad * itemData[i].precio;
    }
    localStorage.setItem("valor", total);
  }

  const Contenido =
    itemData &&
    itemData.map((data, index) => (
      <Card.Text className="cart-items" key={index}>
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

            <Items itemData={itemData} />
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
}

export default Contenido;
