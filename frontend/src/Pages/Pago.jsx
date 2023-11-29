/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import "../Styles/pago.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

export default function Pago() {
  const [datosEnvio, setDatosEnvio] = useState({
    iddireccion: "",
    barrio: "",
    ciudad: "",
    pais: "",
    codigopostal: "",
    direccion: "",
    telefono: "",
  });

  const [infoPago, setInfoPago] = useState({
    numeroTarjeta: "",
    nombreTitular: "",
    fechaVencimiento: "",
    cvv: "",
  });
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false); // Nuevo estado para manejar la visibilidad de la alerta
  const [alertText, setAlertText] = useState(""); // Nuevo estado para manejar la visibilidad de la alerta
  const [alertState, setAlertState] = useState(""); // Nuevo estado para manejar la visibilidad de la alerta

  const dataSubmit = async (e) => {
    e.preventDefault();
    informacionSubmit();
    descontarDinero();
  };

  const descontarDinero = () => {
    const dineroDisponible = localStorage.getItem("dinero");
    const valorDeCompra = localStorage.getItem("precioTotalIVA");
    localStorage.setItem("dinero", dineroDisponible - valorDeCompra);
  };
  const informacionSubmit = async () => {
    try {
      fetch(`http://localhost:4000/createInformations`, {
        // agregar a la tabla direccion
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosEnvio),
      }).then((response) => {
        pagoSubmit();
      });
    } catch (error) {}
  };

  const pagoSubmit = async () => {
    try {
      fetch("http://localhost:4000/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fechaPago: obtenerFecha(),
          valor: localStorage.getItem("precioTotalIVA"),
        }),
      }).then((response) => {
        pedidoSubmit();
      });
    } catch (error) {}
  };

  const pedidoSubmit = async () => {
    try {
      fetch("http://localhost:4000/createOrders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          valor: localStorage.getItem("precioTotal"),
          email: localStorage.getItem("email"),
        }),
      }).then((response) => {
        let itemData = JSON.parse(localStorage.getItem("itemData"));
        console.log(itemData);
        itemData = agregarNumeroPorMaterial(itemData);
        camisaSubmit(itemData);
      });
    } catch (error) {}
  };

  const camisaSubmit = async (itemData) => {
    try {
      fetch("http://localhost:4000/createShirts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      }).then((response) => {
        localStorage.removeItem("itemData");
        setAlertText("Pago exitoso");
        setAlertState("success");
        setShowAlert(true);
        setTimeout(() => navigate("/"), 1000);
      });
    } catch (error) {}
  };

  function agregarNumeroPorMaterial(itemData) {
    const materials = ["Poliester", "Lino", "Lana", "Algodon"];

    for (const item of itemData) {
      item.materialNumber = materials.indexOf(item.material) + 1;
    }

    return itemData;
  }

  function obtenerFecha() {
    // Obtén la fecha actual
    const fechaActual = new Date();

    // Obtén los componentes de la fecha (año, mes, día)
    const anio = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0"); // El mes es devuelto en base 0
    const dia = String(fechaActual.getDate()).padStart(2, "0");

    // Formatea la fecha en el formato deseado (AAAA-MM-DD)
    const fechaFormateada = `${anio}-${mes}-${dia}`;

    return fechaFormateada;
  }

  const datosEnvioChange = (e) => {
    setDatosEnvio({ ...datosEnvio, [e.target.name]: e.target.value });
  };

  const infoPagoChange = (e) => {
    setInfoPago({ ...infoPago, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <Alert
        className="alert mt-5"
        variant={alertState}
        show={showAlert}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        {alertText}
      </Alert>
      <Form onSubmit={dataSubmit} className="mb-5 pb-5">
        <Row className="d-flex justify-content-around">
          <Col className="recuadro bordered p-5" md={{ span: 8, offset: 2 }}>
            <h2 className="text-center mb-5">Datos de envio</h2>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    name="telefono"
                    placeholder="Telefono"
                    onChange={datosEnvioChange}
                    value={datosEnvio.telefono}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="pais"
                    placeholder="Pais"
                    maxLength={45}
                    onChange={datosEnvioChange}
                    value={datosEnvio.pais}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="ciudad"
                    placeholder="Ciudad"
                    maxLength={45}
                    onChange={datosEnvioChange}
                    value={datosEnvio.ciudad}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="barrio"
                    placeholder="Barrio"
                    maxLength={45}
                    onChange={datosEnvioChange}
                    value={datosEnvio.barrio}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    name="codigopostal"
                    placeholder="Codigo Postal"
                    onChange={datosEnvioChange}
                    value={datosEnvio.codigopostal}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="direccion"
                    placeholder="Direccion"
                    maxLength={45}
                    onChange={datosEnvioChange}
                    value={datosEnvio.direccion}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="d-flex justify-content-around">
          <Col className="recuadro bordered p-5" md={{ span: 8, offset: 2 }}>
            <h2 className="text-center mb-5">Información de Pago</h2>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    name="numeroTarjeta"
                    placeholder="Numero de tarjeta"
                    maxLength={45}
                    onChange={infoPagoChange}
                    value={infoPago.numeroTarjeta}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="nombreTitular"
                    placeholder="Nombre del titular"
                    maxLength={45}
                    onChange={infoPagoChange}
                    value={infoPago.nombreTitular}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Control
                    type="date"
                    name="fechaVencimiento"
                    placeholder="Fecha de vencimiento"
                    maxLength={45}
                    onChange={infoPagoChange}
                    value={infoPago.fechaVencimiento}
                  />
                  <Form.Text>Fecha de vencimiento</Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Control
                    type="number"
                    name="cvv"
                    placeholder="CVV"
                    maxLength={45}
                    onChange={infoPagoChange}
                    value={infoPago.cvv}
                  />
                </Form.Group>
              </Col>
              <p className="ms-0 mb-3 h4 align-items-center">
                Valor a pagar ${localStorage.getItem("precioTotalIVA")}
              </p>
              <div className="d-grid ">
                <Button
                  variant="outline-light"
                  type="submit"
                  className="ms-3 d-grid"
                  size="md"
                  disabled={
                    !datosEnvio.barrio ||
                    !datosEnvio.ciudad ||
                    !datosEnvio.pais ||
                    !datosEnvio.codigopostal ||
                    !datosEnvio.direccion ||
                    !infoPago.numeroTarjeta ||
                    !infoPago.nombreTitular ||
                    !infoPago.fechaVencimiento ||
                    !infoPago.cvv
                  }
                >
                  Pagar
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Form>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}
