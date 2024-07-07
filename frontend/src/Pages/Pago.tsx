import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Classes/Header/Header";
import Footer from "../Components/Footer";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import "../Styles/pago.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { FachadaDeEstados } from "../Classes/Estados/Fachada/FachadaDeEstados";

const Pago: React.FC = () => {
  const [datosEnvio, setDatosEnvio] = useState({
    barrio: "",
    ciudad: "",
    pais: "",
    codigoPostal: "",
    direccion: "",
    telefono: "",
    clienteEmail: localStorage.getItem("email"),
  });

  const [pedido, setPedido] = useState({
    valor: Number(localStorage.getItem("precioTotalIVA")),
    estado: "Pendiente",
    fechaPedido: "2023-04-01",
    fechaEnvio: "2023-04-05",
    clienteEmail: localStorage.getItem("email"),
    informacionEnvioId: null,
  });

  interface CamisaState {
    imagen: string;
    precio: number | null;
    talla: string;
    cantidad: number | null;
    idEstampado: number | null;
    Material: string;
    numeroPedido: number | null;
  }
  
  const initialCamisaState: CamisaState = {
    imagen: "",
    precio: null,
    talla: "",
    cantidad: null,
    idEstampado: null,
    Material: "",
    numeroPedido: null,
  };
  
  const [camisa, setCamisa] = useState<CamisaState>(initialCamisaState);

  const [infoPago, setInfoPago] = useState({
    numeroTarjeta: "",
    nombreTitular: "",
    fechaVencimiento: "",
    cvv: "",
  });

  const navigate = useNavigate();
  const fachada = new FachadaDeEstados();

  const [alertText, setAlertText] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(
    fachada.getMostrarAlerta()
  );
  const [alertState, setAlertState] = useState<string>(
    fachada.getEstadoDeAlerta()
  );
  // Implementacion del patron comando
  const dataSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch(
      "http://localhost:3000/informacionEnvio/crearInformacionEnvio",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosEnvio),
      }
    );
    let data = await res.json();
    pedido.informacionEnvioId = data.response.id;
    res = await fetch("http://localhost:3000/pedido/crearPedido", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido),
    });
    data = await res.json();
    camisa.numeroPedido = data.response.numeroPedido;
    const itemData = localStorage.getItem("itemData");
    const items = itemData ? JSON.parse(itemData) : null;
    items.map(async (item, index) => {
      if (item.estampa) {
        const url = item.estampa;
        const lastPart = url.substring(url.lastIndexOf("/") + 1);
        res = await fetch(`http://localhost:3000/estampado/consultarDesign/${lastPart}`);
        data = await res.json();
        camisa.idEstampado = data.idEstampado;
      }else{
        console.log("No hay estampado");
        camisa.idEstampado = null;
      }
      camisa.imagen = item.img;
      camisa.precio = item.price;
      camisa.talla = item.talla;
      camisa.cantidad = parseInt(item.cantidad);
      camisa.Material = item.material;
      res = await fetch("http://localhost:3000/camisa/crearCamisa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(camisa),
      });
    });
    descontarDinero();
    setAlertText("Pago exitoso");
    localStorage.removeItem("itemData");
    setAlertState(fachada.cambioEstadoDeAlerta(0));
    setShowAlert(fachada.cambioMostrarAlerta());
    setTimeout(() => navigate("/"), 1000);
  };

  const descontarDinero = () => {
    const dineroDisponible = Number(localStorage.getItem("dinero"));
    const valorDeCompra = Number(localStorage.getItem("precioTotalIVA"));
    localStorage.setItem(
      "dinero",
      (dineroDisponible - valorDeCompra).toString()
    );
  };

  const obtenerFecha = (): string => {
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const dia = String(fechaActual.getDate()).padStart(2, "0");
    return `${anio}-${mes}-${dia}`;
  };

  const datosEnvioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatosEnvio({ ...datosEnvio, [e.target.name]: e.target.value });
  };

  const infoPagoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoPago({ ...infoPago, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <Alert
        className="alert mt-5"
        variant={alertState}
        show={showAlert}
        onClose={() => setShowAlert(fachada.cambioMostrarAlerta())}
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
                    name="codigoPostal"
                    placeholder="Codigo Postal"
                    onChange={datosEnvioChange}
                    value={datosEnvio.codigoPostal}
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
            <h2 className="text-center mb-5">Datos de pago</h2>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    name="numeroTarjeta"
                    placeholder="Numero de Tarjeta"
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
                    placeholder="Nombre del Titular"
                    onChange={infoPagoChange}
                    value={infoPago.nombreTitular}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="date"
                    name="fechaVencimiento"
                    placeholder="Fecha de Vencimiento"
                    onChange={infoPagoChange}
                    value={infoPago.fechaVencimiento}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
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
            </Row>

            <Button
              variant="outline-light"
              type="submit"
              className="ms-3 d-grid"
              disabled={
                !datosEnvio.barrio ||
                !datosEnvio.ciudad ||
                !datosEnvio.pais ||
                !datosEnvio.codigoPostal ||
                !datosEnvio.direccion ||
                !infoPago.numeroTarjeta ||
                !infoPago.nombreTitular ||
                !infoPago.fechaVencimiento ||
                !infoPago.cvv
              }
            >
              Pagar
            </Button>
          </Col>
        </Row>
      </Form>
      <ThemeSwitcher />
      <Footer />
    </>
  );
};

export default Pago;
