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
    iddireccion: "1",
    barrio: "1",
    ciudad: "1",
    pais: "1",
    codigopostal: "1",
    direccion: "1",
    telefono: "1",
  });

  const [infoPago, setInfoPago] = useState({
    numeroTarjeta: "1",
    nombreTitular: "1",
    fechaVencimiento: "0001-01-01",
    cvv: "1",
  });
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false); // Nuevo estado para manejar la visibilidad de la alerta
  const [alertText, setAlertText] = useState(""); // Nuevo estado para manejar la visibilidad de la alerta
  const [alertState, setAlertState] = useState(""); // Nuevo estado para manejar la visibilidad de la alerta

  const dataSubmit = () => {
    informacionSubmit();
    pagoSubmit();
    pedidoSubmit();
    let itemData = JSON.parse(localStorage.getItem("itemData"));
    itemData = agregarNumeroPorMaterial(itemData);
    camisaSubmit(itemData);

    setAlertText("Pago exitoso");
    setAlertState("success");
    setShowAlert(true);
    localStorage.removeItem("itemData");
    setTimeout(() => navigate("/"), 1000);
  };

  const informacionSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:4000/createInformations`, {
        // agregar a la tabla direccion
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosEnvio),
      });
    } catch (error) {}
  };

  const pagoSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fechaPago: obtenerFecha(),
          valor: localStorage.getItem("precioTotal"),
        }),
      });
    } catch (error) {}
  };

  const pedidoSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/createOrders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          valor: localStorage.getItem("precioTotal"),
          email: localStorage.getItem("email"),
        }),
      });
    } catch (error) {}
  };

  const camisaSubmit = async (itemData) => {
    try {
      const response = await fetch("http://localhost:4000/createShirts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
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
      <Form
        onSubmit={() => dataSubmit(localStorage.getItem("email"))}
        className="mb-5 pb-5"
      >
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
                Valor a pagar ${localStorage.getItem("precioTotal")}
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
